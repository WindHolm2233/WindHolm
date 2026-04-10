import type { AnnouncementConfig } from "../../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "公告",
  content: `**【WindHolm 公告】${new Date()
    .toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".")}**

站点仍在持续打磨中，最近会优先更新这些内容：
- Markdown 写作与排版实践
- 配置说明与折腾记录
- 前端交互、性能与渲染优化

如果你有想看的主题、遇到的问题，或希望补充的教程，欢迎随时留言。
谢谢你的到访，愿你在这里看到一些有用、也有趣的东西。`,
  closable: true,
  link: {
    enable: true,
    text: "了解更多",
    url: "/about/",
    external: false,
  },
};

