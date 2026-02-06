import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "公告",
  content: `**【WindHolm 小站公告】${new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '.')}**

大家好！我是 WindHolm ✧*｡٩(ˊᗜˋ*)و✧

这里主要记录我学习/实战/踩坑/整理的各种编程与计算机图形相关内容～  
目前主要涉及的方向有：

• C/C++　｜　现代C++　｜　C#  
• Computer Graphics（光栅化 / 光追 / 着色器 / 引擎实践）  
• 前端（偶尔水水 HTML + CSS + JS/TS）  
• Java / JSON / XML 等“配置党”友好语言  
• Markdown 写文 / 配置指南 / 快速入门类文章

欢迎对以下任一关键词有兴趣的朋友关注或留言交流：  
快速入门 · 实战示例 · 踩坑记录 · 代码片段 · 视频学习笔记 · 渲染管线 · 游戏开发 · 面向对象设计 · ……

最近在持续更新：
- C++ 现代写法与工程实践系列
- 简单光栅化渲染器从零Copy
- Shader 写着玩小实验
- 一些乱七八糟但我踩过坑的 config 过程（.clang-format / CMake / vs code / …）

有想看的专题、想讨论的 bug都可以直接评论或私信丢过来（・∀・）

最后感谢每一位点进来看的你～  
我们代码里见！( •̀ ω •́ )✧

#C++ #ComputerGraphics #编程 #渲染 #学习笔记 #WindHolm`,
  closable: true,
  link: {
    enable: true,
    text: "了解更多",
    url: "/about/",
    external: false,
  },
};
