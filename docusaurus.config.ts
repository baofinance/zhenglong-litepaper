import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Zhenglong",
  tagline:
    "Decentralized platform for issuing and trading data-pegged synthetic assets",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://baofinance.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/zhenglong-litepaper/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "baofinance", // Usually your GitHub org/user name.
  projectName: "zhenglong-litepaper", // Usually your repo name.
  deploymentBranch: "gh-pages", // Branch that GitHub Pages will deploy from

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/baofinance/zhenglong-litepaper/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/baofinance/zhenglong-litepaper/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Zhenglong",
      logo: {
        alt: "Zhenglong Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Litepaper",
        },
        {
          href: "https://github.com/baofinance/zhenglong-litepaper",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Litepaper",
              to: "/docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/zhenglong",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/zhenglongprotocol",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/baofinance/zhenglong-litepaper",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zhenglong. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
