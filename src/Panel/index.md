---
title: Properties and Material
order: 0
nav:
  title: Panel
  path: /components
  order: 7
group:
  order: 70
---

Panel's Properties:TPanelProperties has:  
IsToolBar	Boolean	Is it a toolbar  

Panel's SelfOwnMaterial:TSkinPanelDefaultMaterial has:  
BackColor	TDrawRectParam	Drawing parameters for background color  
IsTransparent		Boolean Do you need to draw the background color  
DrawCaptionParam	TDrawTextParam	drawing parameters for the title  




Panel can be used as toolbar of form,
These are steps:
Drag a panel into form,
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image001.png)


Put it on the top of form, and set its background color,
These are steps:
Set its Align as alTop,
Height as 50,
SelfOwnMaterial.IsTransparent as False,
Set SelfOwnMaterial.BackColor.IsFill as True,
Set SelfOwnMaterial.BackColor as orange,
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image003.png)


Next we need to make toolbar display caption,
Here are steps:
Set panel’s caption as “ToolBar Example”,
Set SelfOwnMaterial.DrawCaptionParam.Font.Size as 16,
Set SelfOwnMaterial.DrawCaptionParam.Font.Color as white,
Set SelfOwnMaterial.DrawCaptionParam.FontHorzAlign as fhaCenter,
Set SelfOwnMaterial.DrawCaptionParam.FontVerzAlign as fvaCenter,
This is the effect:
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image005.png)


This is the effect on iphone,
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image007.png)


If we want toolbar to fill status bar of iphone,
We need to set IsToolBar as True,
And also add modified FMX.Platform.iOS.pas (in directory OrangeUIProjectCommon of OrangeUI examples) in project
The final effect is like this:
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image009.png)







