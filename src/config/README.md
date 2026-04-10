# 配置文件说明

本目录包含 Firefly 主题的所有配置文件，采用模块化设计，每个文件负责特定的功能模块。

## 📁 配置文件结构

```
src/config/
├── index.ts                    # 配置索引文件 - 统一导出
├── core/
│   ├── siteConfig.ts          # 站点基础配置
│   └── profileConfig.ts       # 用户资料配置
├── layout/
│   ├── navBarConfig.ts        # 导航栏配置
│   ├── sidebarConfig.ts       # 侧边栏配置
│   ├── footerConfig.ts        # 页脚配置
│   └── FooterConfig.html      # 页脚HTML内容
├── theme/
│   ├── fontConfig.ts          # 字体配置
│   ├── sakuraConfig.ts        # 樱花特效配置
│   └── expressiveCodeConfig.ts # 代码高亮配置
├── features/
│   ├── announcementConfig.ts  # 公告配置
│   ├── licenseConfig.ts       # 许可证配置
│   └── adConfig.ts            # 广告配置
├── integrations/
│   ├── commentConfig.ts       # 评论系统配置
│   ├── musicConfig.ts         # 音乐播放器配置
│   ├── pioConfig.ts           # Pio 模型配置
│   └── friendsConfig.ts       # 友链配置
└── README.md                  # 本文件
```

## 🚀 使用方式

### 推荐：使用配置索引（统一导入）
```typescript
import { siteConfig, profileConfig, musicPlayerConfig } from '../config';
```

### 直接导入单个配置
```typescript
import { siteConfig } from '../config/core/siteConfig';
import { profileConfig } from '../config/core/profileConfig';
```

## 📋 配置文件列表

- `core/siteConfig.ts` - 站点基础配置（标题、描述、主题色等）
- `core/profileConfig.ts` - 用户资料配置（头像、姓名、社交链接等）
- `layout/navBarConfig.ts` - 导航栏配置（链接、样式等）
- `layout/sidebarConfig.ts` - 侧边栏配置（组件布局等）
- `layout/footerConfig.ts` - 页脚配置（HTML 注入等）
- `theme/fontConfig.ts` - 字体配置（字体族、大小等）
- `theme/sakuraConfig.ts` - 樱花特效配置（数量、速度、尺寸等）
- `theme/expressiveCodeConfig.ts` - 代码高亮配置（主题等）
- `features/announcementConfig.ts` - 公告配置（标题、内容、链接等）
- `features/licenseConfig.ts` - 许可证配置（CC 协议等）
- `features/adConfig.ts` - 广告配置（广告位设置等）
- `integrations/commentConfig.ts` - 评论系统配置（Twikoo 评论和文章访问量统计）
- `integrations/musicConfig.ts` - 音乐播放器配置（播放列表、行为设置等）
- `integrations/pioConfig.ts` - Pio 模型配置（Spine、Live2D 等）
- `integrations/friendsConfig.ts` - 友链配置（友链列表等）


```
