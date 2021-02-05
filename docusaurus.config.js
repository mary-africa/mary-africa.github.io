module.exports = {
  title: 'Nena API',
  tagline: 'Get to build swahili first tools with Nena',
  url: 'https://inspiredideas.github.io',
  baseUrl: '/nena-docs',
  onBrokenLinks: 'warn', // later should change back to 'throw'
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'inspiredideas', // Usually your GitHub org/user name.
  projectName: 'inspiredideas.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started with Nena',
              to: 'docs/getting-started',
            },
            {
              label: 'API Reference',
              to: 'docs/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/maryforafrica',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/maryforafrica',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Nena Dashboard (Coming soon)',
              to: '#nena-coming-soon',
            },
            {
              label: 'Mary.Africa',
              to: 'https://mary.africa',
            },
            {
              label: 'Inspired Ideas',
              to: 'https://inspiredideas.io',
            },
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} Nena, a Mary.Africa project. All rights reserved`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/inspiredideas/nena-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/inspiredideas/nena-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
