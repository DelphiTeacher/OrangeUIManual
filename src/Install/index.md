---
nav:
  title: Install
  path: /components
  order: 0
---


The installation method of OrangeUI is as follows:

(Take Delphi 10.1 Berlin as an example)

__1, first install the control package__

Open the project group file OrangeUIGroup_FMX_D10_1.groupproj in the root directory of the control with Delphi 10.1,
After opening, you can see the OrangeUI control package (OrangeUIDesign_FMX_D10_1.bpl) in the project management view:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image001.png)

Right-click OrangeUIDesign_FMX_D10_1.bpl in the image above,

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image003.png)

The following shortcut menu pops up:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image005.png)

Click "Install", the following dialog box will pop up:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image007.png)

OrangeUI has been successfully installed
 
__2. Configuration project reference path__

If you create a new project and want to use OrangeUI,  
Then add the path of OrangeUI to the SearchPath of the project,  
First of all, distinguish the version of XE installed on your computer (XE8, XE10, D10_1)  
Then find the corresponding file or directory according to the version number,  
For example, for the latest D10_1, the SearchPath to be configured is:  
Absolute directory __\OrangeUIDesign\DCU\FMX\D10_1\$(Platform)\Release__  
Because the DCU version of the control does not have a DCU file in the Debug compilation mode, the DCU compiled by Release is used.  
For example, right-click the example project OrangeQQ_FMX_D10_1.dproj,  
Select Option in the pop-up menu, select "All CConfiguations - All platforms" in the target platform, and add the path to Delphi Compiler->SearchPath:

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/install/image009.png)
