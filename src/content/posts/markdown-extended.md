---
title: Markdown 扩展功能速览
published: 2024-05-01
updated: 2024-11-29
description: 介绍 WindHolm 里常用的 Markdown 扩展写法和展示效果。
image: ''
tags: [演示, 示例, Markdown, Firefly]
category: '文章示例'
draft: false
---

这篇文章主要是把 WindHolm 支持的几个 Markdown 扩展集中放在一起，方便你快速看懂它们长什么样、怎么写、适合用在哪。

## GitHub 仓库卡片

你可以在文章里插入 GitHub 仓库卡片。页面加载后，仓库信息会自动显示出来，适合放项目主页或推荐仓库。

::github{repo="CuteLeaf/Firefly"}

使用 `::github{repo="CuteLeaf/Firefly"}` 就能插入一个仓库卡片。

```markdown
::github{repo="CuteLeaf/Firefly"}
```

## 提醒框

支持以下类型的提醒框：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户应该考虑的信息，即使在快速浏览时也是如此。
:::

:::tip
可选信息，帮助用户更成功。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
由于潜在风险需要用户立即注意的关键内容。
:::

:::caution
行动的负面潜在后果。
:::

### 基本语法

```markdown
:::note
突出显示用户应该考虑的信息，即使在快速浏览时也是如此。
:::

:::tip
可选信息，帮助用户更成功。
:::
```

### 自定义标题

可以自定义提醒框的标题。

:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::
```

### GitHub 语法

> [!TIP]
> 也支持 [GitHub 语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> 也支持 GitHub 语法。

> [!TIP]
> 也支持 GitHub 语法。
```

### 剧透

您可以为文本添加剧透。文本也支持 **Markdown** 语法。

内容 :spoiler[被隐藏了 **哈哈**]！

```markdown
内容 :spoiler[被隐藏了 **哈哈**]！
