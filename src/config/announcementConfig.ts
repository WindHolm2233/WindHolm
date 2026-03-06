import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "公告",
  content: `**【WindHolm 小站公告】${new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '.')}**

大家好！我是 WindHolm ✧*｡٩(ˊᗜˋ*)و✧
目前主要涉及的方向有：
• Java / JSON / XML 等“配置党”友好语言  
• Markdown 写文 / 配置指南 / 快速入门类文章

最近在持续更新：
- 简单光栅化渲染器从零Copy
- 一些乱七八糟但我踩过坑的 config 过程（.clang-format / CMake / vs code / …）

有想看的专题、想讨论的 bug都可以直接评论或私信丢过来（・∀・）

最后感谢每一位点进来看的你～  
我们代码里见！( •̀ ω •́ )✧
  closable: true,
  link: {
    enable: true,
    text: "了解更多",
    url: "/about/",
    external: false,
  },
};
