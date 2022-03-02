// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const Constants = {
  OrgName: '4lch4',
  ProjectName: 'Ansel-Home',
  ProjectDescription:
    'Ansel-Home is a website, built w/ Docusaurus, that provides documentation for the Ansel API.'
}

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '4lch4/Ansel-Home',
  tagline:
    'The homepage for Project Ansel, an API for interacting with S3/B2 compatible storage methods.',
  url: 'https://docs.ansel.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '4lch4',
  projectName: 'Ansel-Home',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '4lch4/Ansel-Home',
        logo: {
          alt: 'Ansel-Home Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial'
          },
          {
            href: 'https://github.com/4lch4/Ansel-Home',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/W72x4Ks'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/4lch4'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/4lch4/Ansel-Home'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 4lch4 Industries, LLC. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
