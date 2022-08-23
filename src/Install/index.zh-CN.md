---
title: 安装
nav:
  title: Doc
  path: /components
  order: 0
group:
  title: 安装
  order: 0
---

OrangeUI的安装方法如下:

(以Delphi 10.1 Berlin为示例)

__一，先安装控件包__
用Delphi 10.1打开控件根目录下的OrangeUIGroup_FMX_D10_1.groupproj这个工程组文件，
打开后，在工程管理视图中就能看到OrangeUI的控件包（OrangeUIDesign_FMX_D10_1.bpl）:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image001.png)

右键上图中的OrangeUIDesign_FMX_D10_1.bpl,

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image003.png)

弹出如下快捷菜单:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image005.png)

点击“Install”，弹出如下对话框:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image007.png)

OrangeUI已经成功安装了
 
__二．配置工程的引用路径__

如果自己新建了一个工程，想要使用OrangeUI，  
那就把OrangeUI的路径添加到工程的SearchPath中去，  
首先要区分您电脑上所装的XE版本（XE8、XE10、D10_1）  
然后根据版本号找到对应文件或目录，  
比如目前最新的D10_1，要配置的SearchPath为:  
绝对目录 __\OrangeUIDesign\DCU\FMX\D10_1\$(Platform)\Release__  
因为DCU版控件没有Debug编译模式下的DCU文件，所以都使用Release编译的DCU。  
比如右键OrangeQQ_FMX_D10_1.dproj这个示例工程，  
在弹出菜单中选中Option,在目标平台中选择“All CConfiguations - All platforms”,将路径添加到Delphi Compiler->SearchPath中:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image009.png)


