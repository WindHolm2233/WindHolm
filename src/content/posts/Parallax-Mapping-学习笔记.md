---
title: C++ 学习笔记
published: 2026-10-10
draft: false
description: 日后修改
tags: [视差映射]
image: /assets/images/cpp.png
category: unity
author: Pars
pinned: false
---
# 视差映射

> 本文是一次 Unity 实现记录，重点放在实际写 Shader 时遇到的步骤和问题。

视差映射和法线映射经常一起使用，但两者解决的问题并不完全相同。法线贴图主要改变光照计算中的法线方向，视差映射则改变纹理的采样位置。它们都没有真正改变模型表面，却能让一个平面看起来更有细节。单独使用法线贴图时，砖块的轮廓不会随着视角移动；加入视差之后，这种变化会明显一些。

视差映射与位移映射技术密切相关。位移映射会根据纹理中存储的高度信息移动顶点，因此需要一个包含大量三角形的模型。视差映射则不需要增加顶点：它只改变片元使用的纹理坐标，即使一个平面只有两个三角形，也能模拟砖墙、木板或地面的凹凸感。

## 原理

包含每个纹素高度值的纹理称为高度图。假设片元在平面上的纹理坐标为点 `A`，从片元指向观察者的方向为 `V`。如果平面真的发生了位移，观察者应该看到高度表面上的点 `B`；但实际平面仍然是平的，所以我们只能从 `A` 出发计算 `V`。

> 【图示占位：高度图示例（建议插入砖墙或木板的灰度高度图）】

> 【图示占位：高度图应用到平面后的真实位移效果】

视差映射要做的事情其实很直接：把 `A` 的纹理坐标挪到一个更接近 `B` 的位置，后面的漫反射和法线采样都使用这个新坐标。最简单的做法是读取 `A` 处的深度，用它缩放视线方向，再取平面内的两个分量作为偏移量。深度值越大，坐标移动得越远。

这种方法在大多数情况下都有效，但当高度在表面上快速变化时，估计的交点可能远离真实表面。另一个问题是，当平面旋转后，世界空间中的 `x` 和 `y` 不再与纹理方向一致。因此，我们把视线方向变换到切线空间。在切线空间中，向量的 `x`、`y` 分量始终分别沿着切线和副切线方向，可以直接作为纹理坐标偏移。

> 【图示占位：视差映射几何示意图，标出 A、B、V 和 P】

> 【图示占位：陡峭高度变化导致基本视差映射失真的示意图】

## Unity 中的基本实现

在 Unity 中，网格需要提供顶点位置、法线、纹理坐标和切线。副切线可以由法线和切线叉乘得到：

```hlsl
float3 nWS = UnityObjectToWorldNormal(v.normal);
float3 tWS = UnityObjectToWorldDir(v.tangent.xyz);
float3 bWS = cross(nWS, tWS) * v.tangent.w;
float3 viewWS = _WorldSpaceCameraPos - positionWS;
float3 viewTS = float3(dot(viewWS, tWS), dot(viewWS, bWS), dot(viewWS, nWS));
```

这里的 `viewTS` 就是切线空间中的片元到视图方向。视差映射应当在片元着色器中完成，因为三角形表面上每个片元的位移都可能不同。

```hlsl
float2 ParallaxMapping(float2 uv, float3 viewTS)
{
    viewTS = normalize(viewTS);
    float depth = tex2D(_ParallaxMap, uv).r;
    float2 p = viewTS.xy / max(viewTS.z, 0.05) * (depth * _Parallax);
    return uv - p;
}
```

`_Parallax` 是控制视差强度的参数。`viewTS.z` 越接近零，说明观察方向越平行于表面，偏移会越大，这正是斜视角下深度感增强的原因。不过，过大的偏移也会带来明显伪影。有些实现会省略除以 `viewTS.z` 的步骤，这种方法称为带偏移限制的视差映射，斜视角更稳定，但深度感较弱。

得到新的纹理坐标后，应使用它采样漫反射和法线贴图：

```hlsl
float2 uv = ParallaxMapping(i.uv, i.viewTS);
clip(1.0 - step(1.0, max(uv.x, uv.y)));
clip(step(0.0, min(uv.x, uv.y)));
float4 albedo = tex2D(_MainTex, uv);
float3 normalTS = UnpackNormal(tex2D(_BumpMap, uv));
```

偏移后的坐标可能超出 `[0, 1]`。对墙面或地面这类平面，可以丢弃越界片元，避免纹理环绕产生边缘伪影。这个技巧并不适用于所有模型，生产项目也可以使用 Clamp 或边缘渐隐。

> 【图示占位：法线映射与视差映射叠加后的效果对比】

> 【图示占位：平面边缘越界伪影，以及丢弃越界片元后的修复效果】

## 高度图与深度图

实际项目中经常使用深度图，而不是直接使用高度图。深度图可以看作反转后的高度图：

```hlsl
float depth = 1.0 - tex2D(_HeightMap, uv).r;
```

在平面上伪造“向内凹陷”通常比伪造“向外凸起”更自然。无论使用高度图还是深度图，漫反射、法线和深度纹理都应该来自同一材质，否则光照方向会与视差产生的轮廓不一致。

## 陡峭视差映射

基本视差映射只进行一次深度采样，因此在陡峭的高度变化处容易出错。陡峭视差映射把深度范围分成多个层，从顶部向下移动纹理坐标，直到找到第一次穿过表面的位置：

```hlsl
float2 SteepParallax(float2 uv, float3 viewTS)
{
    viewTS = normalize(viewTS);
    const float layers = 16.0;
    float layerDepth = 1.0 / layers;
    float currentDepth = 0.0;
    float2 deltaUV = viewTS.xy * _Parallax / layers;
    float2 currentUV = uv;
    float mapDepth = tex2D(_ParallaxMap, currentUV).r;

    [loop]
    while (currentDepth < mapDepth)
    {
        currentUV -= deltaUV;
        mapDepth = tex2D(_ParallaxMap, currentUV).r;
        currentDepth += layerDepth;
    }
    return currentUV;
}
```

> 【图示占位：陡峭视差映射的分层采样和交点示意图】

采样层数越多，结果越准确，但片元着色器的开销也越大。正视表面时位移很小，可以少采样；斜视表面时则需要更多采样：

```hlsl
float facing = saturate(dot(float3(0, 0, 1), normalize(viewTS)));
float layers = lerp(32.0, 8.0, facing);
```

> 【图示占位：不同观察角度下自适应采样层数的效果】

## 视差遮蔽映射

陡峭视差映射返回第一次穿过表面的那一层，因此可能看到明显的分层。视差遮蔽映射会取得碰撞前后的两层，并在它们之间进行线性插值，从而得到更接近真实交点的纹理坐标：

```hlsl
float2 previousUV = currentUV + deltaUV;
float afterDepth = mapDepth - currentDepth;
float beforeDepth = tex2D(_ParallaxMap, previousUV).r - currentDepth + layerDepth;
float weight = afterDepth / (afterDepth - beforeDepth);
return lerp(currentUV, previousUV, saturate(weight));
```

> 【图示占位：视差遮蔽映射在碰撞前后两层之间进行线性插值的示意图】

> 【图示占位：基本视差、陡峭视差与 POM 的效果对比】

视差遮蔽映射通常是质量和性能之间较好的折中方案。它比单次视差映射更准确，也比单纯增加大量层数更有效率；不过，在极端斜视角或高度变化非常剧烈的区域，仍可能出现轻微伪影和锯齿。

## Unity ShaderLab 完整骨架

```hlsl
Shader "Custom/Parallax"
{
    Properties
    {
        _MainTex ("Albedo", 2D) = "white" {}
        _BumpMap ("Normal Map", 2D) = "bump" {}
        _ParallaxMap ("Depth Map", 2D) = "black" {}
        _Parallax ("Height Scale", Range(0, 0.2)) = 0.05
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            // 在这里放置顶点结构、TBN 计算、Parallax 函数和光照代码
            ENDCG
        }
    }
}
```

如果使用 URP，应改用 `Core.hlsl` 和 `Lighting.hlsl`，并使用 `TransformObjectToWorld`、`TransformWorldToHClip`、`GetWorldSpaceViewDir` 等 URP 函数；视差映射本身的计算过程不变。

## 适用场景

从实际效果看，视差映射更适合墙面、地面这类大平面。相机离得较远，或者观察方向接近表面法线时，基本版本已经够用；相机贴近材质并且经常斜着看时，单次采样就容易露出问题。增加层数确实能改善结果，但每个片元都要多做几次纹理读取，所以不能只追求层数。

它不会改变真实几何轮廓、阴影或碰撞体；如果需要这些效果，应使用真实位移、细分曲面或视差与几何方案结合。边缘裁剪适用于规则平面，但对于复杂模型可能造成不连续，这一点在实际项目中需要单独处理。

## 小结

这次实现下来，三种方法的差别比较清楚：基本版本最快，但在斜视角下最容易失真；分层版本改善了高度变化大的区域，却会出现一层一层的痕迹；POM 再做一次插值，效果通常更自然，不过代价也最高。实际使用时，可以先用基本版本确认纹理、切线和深度图都正确，再根据画面需求换成分层版本或 POM。

原文：[LearnOpenGL — Parallax Mapping](https://learnopengl.com/Advanced-Lighting/Parallax-Mapping)
