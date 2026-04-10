---
title: 计算机图形学学习整理
published: 2026-02-05
pinned: false
description: 按 GAMES101 的主线整理计算机图形学入门知识，重点放在坐标变换、光栅化、着色和光线追踪。
tags: [计算机图形学, GAMES101, 图形学入门, 计算机科学]
category: 计算机科学
author: Pars
draft: false
---

# 计算机图形学学习整理

这篇笔记按 GAMES101 的思路来写，目标很简单：先弄清楚图形学在干什么，再把几条最核心的公式串起来。

图形学本质上是在做一件事：把三维空间里的物体，经过一系列变换和计算，变成屏幕上的二维像素。

## 1. 图形学流水线 [Vulkan](https://docs.vulkan.org/guide/latest/) [Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics) [Metal](https://developer.apple.com/metal/) [OpenGL](https://www.khronos.org/opengl/)

一个典型的渲染流程可以拆成几步：

1. 模型空间中的顶点进入管线
2. 经过模型、观察、投影变换
3. 进入光栅化阶段，变成片元
4. 片元经过插值、深度测试和着色
5. 写入帧缓冲，显示到屏幕

最常见的坐标变化链路可以写成：

$$
p_{clip} = M_{proj} M_{view} M_{model} p_{obj}
$$

这里：

- $p_{obj}$ 是模型坐标系下的点
- $M_{model}$ 是模型变换
- $M_{view}$ 是观察变换
- $M_{proj}$ 是投影变换
- $p_{clip}$ 是裁剪空间坐标

## 2. 齐次坐标和矩阵变换 [OpenGL](https://www.khronos.org/opengl/) [Vulkan](https://docs.vulkan.org/guide/latest/)

为了把平移、旋转、缩放统一到一个框架里，图形学里通常用齐次坐标：

$$
(x, y, z) \rightarrow (x, y, z, 1)
$$

这样，平移也能写成矩阵乘法。对一个点做仿射变换时，统一用 $4 \times 4$ 矩阵表示会更方便。

### 常见变换

- 平移：改变物体位置
- 缩放：改变物体大小
- 旋转：改变物体朝向

如果把变换写成矩阵，组合多个操作时只要连乘即可。注意矩阵乘法不满足交换律，所以顺序不能乱。

## 3. 观察与投影 [OpenGL](https://www.khronos.org/opengl/) [Vulkan](https://docs.vulkan.org/guide/latest/)

观察变换的作用，是把世界坐标转到相机坐标。可以理解成把相机放在原点，统一看场景。

投影分两类：

- 正交投影：平行线保持平行
- 透视投影：远处物体看起来更小，更符合真实视觉

透视投影的关键是透视除法：

$$
x_{ndc} = \frac{x_{clip}}{w_{clip}}, \quad
y_{ndc} = \frac{y_{clip}}{w_{clip}}, \quad
z_{ndc} = \frac{z_{clip}}{w_{clip}}
$$

这里的 $w$ 很重要，它决定了“近大远小”的效果。

## 4. 光栅化 [Mesh Shader](https://microsoft.github.io/DirectX-Specs/d3d/MeshShader.html) [Deferred Rendering](https://developer.nvidia.com/gpugems/gpugems3/part-iii-rendering/chapter-19-deferred-shading-tabula-rasa) [Forward+](https://developer.nvidia.com/blog/ray-traced-reflections-in-wolfenstein-youngblood/)

光栅化就是把三角形覆盖到哪些像素上这件事算出来。三角形是图形学里最常用的基本图元，因为它稳定、简单，也方便插值。

判断一个像素是否在三角形内，常见方法是用重心坐标。对三角形顶点 $A,B,C$，任一点 $P$ 可以表示为：

$$
P = \alpha A + \beta B + \gamma C
$$

并且满足：

$$
\alpha + \beta + \gamma = 1
$$

如果 $\alpha,\beta,\gamma$ 都在 $[0,1]$ 内，点通常就在三角形内部。

### 属性插值

光栅化不只是判断覆盖，还要把顶点属性插到片元上，比如颜色、法线、纹理坐标。

线性插值可以写成：

$$
v = \alpha v_A + \beta v_B + \gamma v_C
$$

如果考虑透视校正，常用的是：

$$
\frac{1}{w} = \alpha \frac{1}{w_A} + \beta \frac{1}{w_B} + \gamma \frac{1}{w_C}
$$

然后再对属性做除法修正。这个步骤很关键，不然纹理会拉伸得不对。

## 5. 深度测试 [Shadow Mapping](https://developer.nvidia.com/gpugems/gpugems/part-ii-lighting-and-shadows/chapter-12-omnidirectional-shadow-mapping)

屏幕上一个像素可能被多个三角形覆盖，这时要决定谁在前面。最常见的方法是 Z-Buffer。

思路很直接：记录每个像素当前最小的深度值，只保留更靠近相机的片元。

深度值越小，通常表示越靠近相机。这样就能解决遮挡关系。

## 6. 着色 [PBR](https://developer.nvidia.com/rendering-technologies/mdl-sdk) [Compute Shader](https://learn.microsoft.com/en-us/windows/win32/direct3d12/pipelines-and-shaders-with-directx-12)

着色关心的是“这个点应该显示成什么颜色”。GAMES101 里最重要的一个起点，是局部光照模型。

### Phong 光照模型

经典的 Phong 模型通常写成：

$$
I = I_a k_a + I_l k_d \max(0, \mathbf{n}\cdot\mathbf{l}) + I_l k_s \max(0, \mathbf{r}\cdot\mathbf{v})^p
$$

其中：

- $I_a$ 是环境光
- $I_l$ 是入射光强
- $k_a, k_d, k_s$ 分别是环境、漫反射和高光系数
- $\mathbf{n}$ 是法线
- $\mathbf{l}$ 是光照方向
- $\mathbf{r}$ 是反射方向
- $\mathbf{v}$ 是视线方向
- $p$ 控制高光大小

### 漫反射

漫反射和入射角有关，常见写法是：

$$
I_d = k_d I_l \max(0, \mathbf{n}\cdot\mathbf{l})
$$

这个公式可以直接理解成：角度越正，对表面的照亮越强。

### 插值着色

- Flat Shading：一个三角形一个颜色，最快，但比较硬
- Gouraud Shading：在顶点算光照，再插值颜色
- Phong Shading：插值法线，再逐像素算光照，效果最好

## 7. 纹理映射 [glTF 2.0](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html) [PBR](https://developer.nvidia.com/rendering-technologies/mdl-sdk)

纹理映射的作用，是把二维图片贴到三维物体表面上。每个顶点除了位置，还会带一个纹理坐标 $(u,v)$。

取样时，常见做法是：

$$
color = T(u,v)
$$

其中 $T$ 是纹理图。真正工程里，最近邻、双线性过滤都会影响最终效果。

## 8. 抗锯齿 [TAA](https://developer.nvidia.com/blog/understanding-the-need-for-adaptive-temporal-antialiasing/) [Super Resolution](https://developer.nvidia.com/rtx/dlss/get-started) [Temporal Reconstruction](https://developer.nvidia.com/rtx/dlss/get-started)

锯齿本质上是采样不足。屏幕是离散像素，但几何图元是连续的，所以边缘容易出现不平滑。

解决思路通常是超采样：

$$
I_{pixel} = \frac{1}{N}\sum_{i=1}^{N} I_i
$$

也就是对一个像素内多个采样点求平均。样本越多，边缘越平滑，但成本也越高。

## 9. 光线追踪 [Hardware Ray Tracing / DXR](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-raytracing-hlsl-shaders) [Hybrid Rendering](https://developer.nvidia.com/blog/effectively-integrating-rtx-ray-tracing-real-time-rendering-engine/) [Denoising](https://developer.nvidia.com/image-processing)

光栅化擅长实时渲染，光线追踪更擅长模拟真实光照。

一条光线通常写成：

$$
r(t) = o + t\mathbf{d}
$$

其中 $o$ 是起点，$\mathbf{d}$ 是方向，$t \ge 0$。

### 球体求交

如果球心是 $c$，半径是 $R$，则满足：

$$
\|r(t) - c\|^2 = R^2
$$

展开后会得到一个二次方程，解出最小的正根，就是最近交点。

光线追踪的优点是反射、折射、阴影都更自然；缺点是计算量大，所以真实项目里通常要配合加速结构。

## 10. 加速结构 [BLAS / TLAS](https://learn.microsoft.com/en-us/windows/win32/api/d3d12/ne-d3d12-d3d12_raytracing_acceleration_structure_type)

如果场景里有很多三角形，逐个求交太慢。常见做法是加 BVH 这类空间划分结构，先快速排除不可能命中的区域，再做精确求交。

这样可以把“先扫一遍全部物体”变成“先找候选，再精算”，性能会好很多。

## 11. 目前主流技术

如果把 GAMES101 里的内容放到今天的工程里看，主流技术大致可以这样对照。下面每一项都放了一个可直接打开的学习入口。

| 技术 | 学习网站 | 一句话说明 |
|---|---|---|
| Vulkan | [Khronos Vulkan Guide](https://docs.vulkan.org/guide/latest/) | 现代低层图形和计算 API。 |
| Direct3D 12 | [Microsoft Learn: Direct3D 12 graphics](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics) | Windows 平台的主力图形 API。 |
| Metal | [Apple Metal Overview](https://developer.apple.com/metal/) | Apple 平台的图形与计算 API。 |
| OpenGL | [Khronos OpenGL](https://www.khronos.org/opengl/) | 教学、旧项目和原型验证常用。 |
| glTF 2.0 | [glTF 2.0 Specification](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html) | 运行时资产交付格式。 |
| PBR | [NVIDIA MDL SDK](https://developer.nvidia.com/rendering-technologies/mdl-sdk) | 物理材质和 BSDF 体系。 |
| HDR / Tone Mapping | [NVIDIA HDR Display Development](https://developer.nvidia.com/high-dynamic-range-display-development) | 把高动态范围结果映射到屏幕。 |
| Compute Shader | [Direct3D 12 Pipelines and Shaders](https://learn.microsoft.com/en-us/windows/win32/direct3d12/pipelines-and-shaders-with-directx-12) | 适合后处理、粒子和通用 GPU 计算。 |
| Mesh Shader | [DirectX-Specs: Mesh Shader](https://microsoft.github.io/DirectX-Specs/d3d/MeshShader.html) | 新一代几何提交和剔除方案。 |
| Deferred Rendering | [GPU Gems 3: Deferred Shading in Tabula Rasa](https://developer.nvidia.com/gpugems/gpugems3/part-iii-rendering/chapter-19-deferred-shading-tabula-rasa) | 经典的 G-buffer 路线。 |
| Forward+ | [How Wolfenstein Youngblood Integrated Ray Tracing for Next-Generation Visuals](https://developer.nvidia.com/blog/ray-traced-reflections-in-wolfenstein-youngblood/) | 常见于多光源场景。 |
| Shadow Mapping | [GPU Gems 2: Omnidirectional Shadow Mapping](https://developer.nvidia.com/gpugems/gpugems/part-ii-lighting-and-shadows/chapter-12-omnidirectional-shadow-mapping) | 最基础的实时阴影方案。 |
| SSAO | [NVIDIA HBAO+](https://developer.nvidia.com/rendering-technologies/horizon-based-ambient-occlusion-plus) | 屏幕空间环境光遮蔽。 |
| TAA | [NVIDIA Adaptive Temporal Antialiasing](https://developer.nvidia.com/blog/understanding-the-need-for-adaptive-temporal-antialiasing/) | 时间域抗锯齿。 |
| Hardware Ray Tracing / DXR | [Microsoft Learn: Direct3D 12 Raytracing HLSL Shaders](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-raytracing-hlsl-shaders) | DXR 的着色器入口。 |
| BLAS / TLAS | [Microsoft Learn: D3D12_RAYTRACING_ACCELERATION_STRUCTURE_TYPE](https://learn.microsoft.com/en-us/windows/win32/api/d3d12/ne-d3d12-d3d12_raytracing_acceleration_structure_type) | 理解底层和顶层加速结构。 |
| Hybrid Rendering | [NVIDIA: Effectively Integrating RTX Ray Tracing into a Real-Time Rendering Engine](https://developer.nvidia.com/blog/effectively-integrating-rtx-ray-tracing-real-time-rendering-engine/) | 光栅和光追混合使用。 |
| Super Resolution | [NVIDIA DLSS](https://developer.nvidia.com/rtx/dlss/get-started) | 典型的超分辨率方案。 |
| Temporal Reconstruction | [NVIDIA DLSS](https://developer.nvidia.com/rtx/dlss/get-started) | 复用历史帧重建细节。 |
| Denoising | [NVIDIA Image Processing Technologies for Rendering](https://developer.nvidia.com/image-processing) | 传统降噪和 AI 降噪。 |

## 12. 小结

GAMES101 最重要的不是把每个公式背下来，而是把整条管线串起来。

- 变换负责把点送到正确的位置
- 光栅化负责把三角形变成像素
- 着色负责决定像素的颜色
- 光线追踪负责更真实地模拟光

把这几步理解清楚，后面学 OpenGL、Vulkan、PBR、Ray Tracing，都会顺很多。
