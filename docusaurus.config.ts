import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "G&N's Studio",
  tagline: 'Documentation',
  url: 'https://G-N-s-Studio.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'G-N-s-Studio', // Usually your GitHub org/user name.
  projectName: 'G-N-s-Studio.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/dolu/G-N-s-Studio.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/dolu/G-N-s-Studio.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css'
        },
      } satisfies Preset.Options
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "G&N's Studio",
      logo: {
        alt: 'gn_logo',
        src: 'img/gn_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog/team',
          label: 'About',
          position: 'left'
        },
        {
          href: 'https://gnstud.io/',
          label: 'Shop',
          position: 'right',
        },
        {
          href: 'https://fivem.gnstud.io/package/6078302',
          label: 'Subscription',
          position: 'right',
        },
        {
          href: 'https://github.com/G-N-s-Studio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/gnstudio',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@GNStudio_Team',
            },
            {
              label: 'X',
              href: 'https://twitter.com/GNStudio_Team',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} G&N's Studio`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
