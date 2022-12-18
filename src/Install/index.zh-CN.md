---
title: 安装
nav:
  title: 文档
  path: /components
  order: 0
group:
  title: 安装
  order: 0
---

OrangeUI 的安装方法如下:

(以 Delphi 10.1 Berlin 为示例)

**一，先安装控件包**
用 Delphi 10.1 打开控件根目录下的 OrangeUIGroup_FMX_D10_1.groupproj 这个工程组文件，
打开后，在工程管理视图中就能看到 OrangeUI 的控件包（OrangeUIDesign_FMX_D10_1.bpl）:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image001.png)

右键上图中的 OrangeUIDesign_FMX_D10_1.bpl,

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image003.png)

弹出如下快捷菜单:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image005.png)

点击“Install”，弹出如下对话框:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image007.png)

OrangeUI 已经成功安装了

**二．配置工程的引用路径**

如果自己新建了一个工程，想要使用 OrangeUI，  
那就把 OrangeUI 的路径添加到工程的 SearchPath 中去，  
首先要区分您电脑上所装的 XE 版本（XE8、XE10、D10_1）  
然后根据版本号找到对应文件或目录，
搜索路径的配置规则如下：  
**绝对目录\OrangeUIDesign\DCU\FMX\Delphi 版本号\\\$(Platform)\Release**  
比如控件存放在 **C:\MyFiles\OrangeUI**,  
用 Delphi 10.4，则要配置的 SearchPath 为:  
**C:\MyFiles\OrangeUI\OrangeUIDesign\DCU\FMX\D10_4\\\$(Platform)\Release**  
用 Delphi 11，则要配置的 SearchPath 为:  
**C:\MyFiles\OrangeUI\OrangeUIDesign\DCU\FMX\D11\\\$(Platform)\Release**

因为 DCU 版控件没有 Debug 编译模式下的 DCU 文件，所以都使用 Release 编译的 DCU。  
比如右键 OrangeQQ_FMX_D10_1.dproj 这个示例工程，  
在弹出菜单中选中 Option,在目标平台中选择“All CConfiguations - All platforms”,将路径添加到 Delphi Compiler->SearchPath 中:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image009.png)
