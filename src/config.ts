import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.nocobase.com/",
  author: "NocoBase team",
  desc: "NocoBase is a scalability-first, open-source no-code/low-code platform to build internal tools.",
  title: "NocoBase",
  ogImage: "nocobase-og.png",
  lightAndDarkMode: true,
  postPerPage: 20,
};

export const LOCALE = ["zh-CN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/nocobase/nocobase",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hello@nocobase.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  // {
  //   name: "Facebook",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Facebook`,
  //   active: true,
  // },
  // {
  //   name: "Instagram",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Instagram`,
  //   active: true,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on LinkedIn`,
  //   active: true,
  // },
  // {
  //   name: "Twitter",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Twitter`,
  //   active: false,
  // },
  // {
  //   name: "Twitch",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Twitch`,
  //   active: false,
  // },
  // {
  //   name: "YouTube",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on YouTube`,
  //   active: false,
  // },
  // {
  //   name: "WhatsApp",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: "Snapchat",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Snapchat`,
  //   active: false,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
  // {
  //   name: "TikTok",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on TikTok`,
  //   active: false,
  // },
  // {
  //   name: "CodePen",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
  // {
  //   name: "Discord",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Discord`,
  //   active: false,
  // },
  // {
  //   name: "GitLab",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on GitLab`,
  //   active: false,
  // },
  // {
  //   name: "Reddit",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Reddit`,
  //   active: false,
  // },
  // {
  //   name: "Skype",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Skype`,
  //   active: false,
  // },
  // {
  //   name: "Steam",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Steam`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
  // {
  //   name: "Mastodon",
  //   href: "https://github.com/nocobase/nocobase",
  //   linkTitle: `${SITE.title} on Mastodon`,
  //   active: false,
  // },
];
