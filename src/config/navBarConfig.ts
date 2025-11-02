import type { NavBarConfig, NavBarLink } from "../types/config";
import { LinkPreset } from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: (NavBarLink | LinkPreset)[] = [
    LinkPreset.Home,
    LinkPreset.Archive,
  ];

  // 根据配置决定是否添加追番页面
  if (siteConfig.pages.anime) {
    links.push(LinkPreset.Anime);
  }

  // 支持自定义导航栏链接,并且支持多级菜单
  links.push({
    name: "链接",
    url: "/links/",
    icon: "material-symbols:link",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/Parssama2233",
        external: true,
        icon: "fa6-brands:github",
      },
      {
        name: "Bilibili",
        url: "https://space.bilibili.com/285874096",
        external: true,
        icon: "fa6-brands:bilibili",
      },
      {
        name: "X",
        icon: "fa6-brands:x-twitter",
        external: true,
        url: "https://x.com/SLKaFAGNHI11131",
      },
      {
        name: "开往",
        external: true,
        url: "https://www.travellings.cn/train.html",
     },
    ],
  });

  links.push(LinkPreset.Friends);

  links.push({
    name: "关于",
    url: "/content/",
    icon: "material-symbols:info",
    children: [LinkPreset.About],
  });
  return { links };
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
