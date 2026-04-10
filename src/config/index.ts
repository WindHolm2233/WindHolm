// 配置索引文件 - 统一导出所有配置
// 这样组件可以一次性导入多个相关配置，减少重复的导入语句

// 核心配置
export { siteConfig } from "./core/siteConfig"; // 站点基础配置
export { profileConfig } from "./core/profileConfig"; // 用户资料配置

// 功能配置
export { commentConfig } from "./integrations/commentConfig"; // 评论系统配置
export { announcementConfig } from "./features/announcementConfig"; // 公告配置
export { licenseConfig } from "./features/licenseConfig"; // 许可证配置
export { footerConfig } from "./layout/footerConfig"; // 页脚配置

// 样式配置
export { expressiveCodeConfig } from "./theme/expressiveCodeConfig"; // 代码高亮配置
export { sakuraConfig } from "./theme/sakuraConfig"; // 樱花特效配置
export { fontConfig } from "./theme/fontConfig"; // 字体配置

// 布局配置
export { sidebarLayoutConfig } from "./layout/sidebarConfig"; // 侧边栏布局配置
export { navBarConfig } from "./layout/navBarConfig"; // 导航栏配置

// 组件配置
export { musicPlayerConfig } from "./integrations/musicConfig"; // 音乐播放器配置
export { spineModelConfig, live2dModelConfig } from "./integrations/pioConfig"; // 看板娘配置
export { adConfig1, adConfig2 } from "./features/adConfig"; // 广告配置
export { getEnabledFriends } from "./integrations/friendsConfig"; // 友链配置

// 类型导出
export type {
  SiteConfig,
  ProfileConfig,
  CommentConfig,
  AnnouncementConfig,
  LicenseConfig,
  FooterConfig,
  ExpressiveCodeConfig,
  SakuraConfig,
  MusicPlayerConfig,
  SidebarLayoutConfig,
  NavBarConfig,
  WidgetComponentConfig,
  WidgetComponentType,
} from "../types/config";
