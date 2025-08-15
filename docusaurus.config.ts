import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Jaine Documentation',
  tagline: 'AI-Powered Decentralized Exchange on 0G',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.jaine.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: '0glabs', // Usually your GitHub org/user name.
  projectName: 'jaine-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0glabs/jaine-docs/tree/main/',
          routeBasePath: '/', // Docs at root
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/jaine-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Jaine Docs',
      logo: {
        alt: 'Jaine Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'mainSidebar',
        //   position: 'left',
        //   label: 'Documentation',
        // },
        {
          href: 'https://test.jaine.app',
          label: 'Launch App',
          position: 'right',
          className: 'header-launch-link',
        },
        {
          href: 'https://github.com/0glabs/jane-amm-contracts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'What is Jaine',
              to: '/',
            },
            {
              label: 'Perpetuals',
              to: '/perps/what-are-perps',
            },
            {
              label: 'Testnet App',
              href: 'https://test.jaine.app',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Getting Started',
              to: '/developers/overview',
            },
            {
              label: 'Smart Contracts',
              href: 'https://github.com/0glabs/jane-amm-contracts',
            },
            {
              label: 'API Reference',
              to: '/developers/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '#', // TODO: Add Discord link
            },
            {
              label: 'Twitter',
              href: '#', // TODO: Add Twitter link
            },
            {
              label: 'Telegram',
              href: '#', // TODO: Add Telegram link
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Audits',
              to: '/security/audits',
            },
            {
              label: 'FAQ',
              to: '/resources/faq',
            },
            {
              label: 'Faucet',
              href: 'https://faucet.0g.ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jaine. Built on 0G Network.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;