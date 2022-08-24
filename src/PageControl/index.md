---
title: Properties and Material
order: 0.1
nav:
  title: PageControl
  path: /components
  order: 12
group:
  order: 120
---

PageControl's Properties:TPageControlProperties has:  
TabHeaderHeight Integer The height of the tab header  
Orientation TTabOrientation Label header placement type  
TabSize Integer The width of the tab button  
TabSizeCalcType TTabSizeCalcType Tab button size calculation type  
IsTabHeaderCenter Boolean Tab header is centered  
ActivePageIndex Integer The index of the currently selected page   



In this example we will complete usual effect of PageControl.  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image001.jpg)


Drag a PageControl into form,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image003.png)


Right-click PageControl->New TabSheet, add three TabSheet,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image005.png)


every TabSheet needs two icons,  
One is for normal state, the other is for active state.  
 ![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image009.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image011.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image013.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image015.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image017.png)




Drag a ImageList, add these icons in.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image019.png)


Captions of the three pages are“课表”，“校园”，“我”，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image021.png)


Set PageControl.Properties.Orientation as Bottom,   
it means put TabHeader on the bottom.  
Set PageControl.Properties.TabHeaderHeight as 60,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image023.png)


Set Align of PageControl as Client,  
Set Icon and PushedIcon of three TabSheet respectively,  
The method is set Icon.SkinImageList as imglistIcons we added just now,  
Set Icon.ImageIndex as 0,   
Set PushedIcon.SkinImageList as imglistIcons , ImageIndex as 1,  
While designing, double click TabHeader, you can switch ActivePage,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image025.png)


First set caption, make it horizontally center on the bottom, set default color of font as #FF878787,  
The drawing parameters of caption is in PageControl.SelfOwnMaterial.DrawTabCaptionParam,  
Unfold PageControl.SelfOwnMaterial.DrawTabCaptionParam，  
Set its DrawFont.FontColor as #FF878787,  
Set FontHorzAlign as fvaCenter,  
Set FontVertAlign as fvaBottom  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image027.png)


Set caption clolor of active page,  
Unfold DrawTabCaptionParam.DrawEffectSetting.PushedEffect,  
Check depetFontColorChange of EffectTypes,   
and set FontColor as # FF46D2DC,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image029.png)


The setting of font is over.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image031.png)


Next set icon, the drawing parameter of icon is in DrawTabIconParam,  
Set icon as horizontally center, set PictureHorzAlign as phaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image033.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image035.png)



The size of icon is 50x50, it seems a little big, minimize it,  
Set IsStrech as True, IsAutoFit also as True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image037.png)



And then set the drawing size of icon,   
syou can set it in DrawTabIconParam.DrawRectSetting,  
Set Enabled as True,  
Set Height as 44,  
Set SizeType as Pixel,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image039.png)


Ok, set over, double click TabHeader and switch page to see effect.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image041.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image043.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image045.png)



 

