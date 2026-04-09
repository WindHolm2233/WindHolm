import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "公告",
  content: `**【WindHolm 公告】${new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '.')}**

本站持续更新中，主要内容包括：
- Markdown 写作
- 配置指南
- 前端与渲染记录

欢迎留言交流想看的专题、问题或建议。

感谢你的到来，我们代码里见！
`,
  closable: true,
  link: {
    enable: true,
    text: "关于我",
    url: "/about/",
    external: false,
  },
};
