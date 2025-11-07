import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链配置
export const friendsConfig: FriendLink[] = [
  {
    title: "Stella’s TA Skills Share Blog",
    imgurl:
      "https://stellaastra.dpdns.org/favicon/icon2.png",
    desc: "一探索图形技术与分享的平台",
    siteurl: "https://stellaastra.dpdns.org/",
    tags: ["Blog"],
    weight: 10, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "yousen的博客",
    imgurl: "https://q.qlogo.cn/headimg_dl?dst_uin=1607737794&spec=640&img_type=png",
    desc: "机械结构工程师",
    siteurl: "https://yousen1.top",
    tags: ["Blog"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Firefly Docs",
    imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
    desc: "Firefly主题模板文档",
    siteurl: "https://docs-firefly.cuteleaf.cn",
    tags: ["Docs"],
    weight: 2,
    enabled: true,
  },
  {
    title: "Firefly",
    imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
    desc: "Firefly 一款清新美观的 Astro 博客主题模板",
    siteurl: "https://github.com/CuteLeaf/Firefly",
    tags: ["GitHub", "Theme"],
    weight: 2,
    enabled: true,
  },
  {
    title: "Astro",
    imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
    desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
    siteurl: "https://github.com/withastro/astro",
    tags: ["Framework"],
    weight: 1,
    enabled: true,
  },
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
  return friendsConfig
    .filter((friend) => friend.enabled)
    .sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
