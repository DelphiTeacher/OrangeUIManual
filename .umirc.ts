import { defineConfig } from 'dumi';

const repo = 'OrangeUI';

export default defineConfig({
  title: repo,
  favicon:
    'http://www.orangeui.cn/image/logo_60.png',
  logo:
    'http://www.orangeui.cn/image/logo_60.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    // {
    //   title: 'Install',
    //   path: '/components/Install',
    // },
    {
      title: 'GitHub',
      path: 'https://github.com/DelphiTeacher/OrangeUI',
    },
    {
      title: 'Blog',
      path: 'http://www.orangeui.cn/wordpress/',
    },
  ],
  // locales: [['zh-CN', '中文'], ['en-US', 'English']],
  
});
