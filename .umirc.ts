import { defineConfig } from 'dumi';

const repo = 'OrangeUI';

export default defineConfig({
  title: repo,
  favicon: 'http://www.orangeui.cn/image/logo_60.png',
  logo: 'http://www.orangeui.cn/image/logo_60.png',
  outputPath: 'dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  exportStatic: {},
  navs: [
    null,
    // {
    //   title: 'Install',
    //   path: '/components/install',
    // },
    // {
    //   title: 'Download',
    //   path: '/components/install/download',
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/DelphiTeacher/OrangeUI',
    },
    {
      title: 'Blog',
      path: 'http://www.orangeui.cn/wordpress/',
    },
    {
      title: 'VIP',
      path: 'http://www.orangeui.cn/delphi_area_index.html',
    },
  ],
  // locales: [['zh-CN', '中文'], ['en-US', 'English']],
});
