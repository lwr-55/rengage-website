import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rengage website',
  tagline: 'Rengage website2.0',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Rengage Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'Product',
          position: 'left',
          items: [
            {to: '/product/journey-moments', label: 'Journey Moments'},
            {to: '/product/journey-builder', label: 'Journey Builder'},
            {to: '/product/journey-insights', label: 'Journey Insights'},
          ]
        },
        {
          type: 'dropdown',
          label: 'Solutions',
          position: 'left',
          items: [
            {to: '/Solutions/solutions', label: 'Solutions'},
            {to: '/Solutions/case-studies', label: 'Case Studies'},
            {to: '/Solutions/integrations', label: 'Integrations'},
          ]
        },
        {
          content: 'Book a demo',
          type: 'custom-button-navbar-item',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'PRODUCT',
          items: [
            {
              label: 'Journey Moments',
              to: '/product/journey-moments',
            },
            {
              label: 'Journey Builder',
              to: '/product/journey-builder',
            },
            {
              label: 'Journey Insights',
              to: '/product/journey-insights',
            },
          ],
        },
        {
          title: 'SOLUTIONS',
          items: [
            {
              label: 'Case Studies',
              to: '/solutions/case-studies',
            },
            {
              label: 'Solutions',
              to: '/solutions/solutions',
            },
            {
              label: 'Integrations',
              to: '/solutions/integrations',
            },
          ],
        },
        {
          title: 'RESOURSES',
          items: [
            {
              label: 'Blog',
              to: '/resourses/blog',
            },
            {
              label: 'Documents',
              to: '/resourses/documents',
            },
          ],
        },
        {
          title: 'COMPANY',
          items: [
            {
              label: 'About Us',
              to: '/company/aboutus',
            },
            {
              label: 'Contacts',
              to: '/company/contacts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
