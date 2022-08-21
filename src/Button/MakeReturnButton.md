---
title: Make back button
order: 7
nav:
  title: Button
  path: /components
  order: 3
---

As the picture below, this is a common page,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image001.png)

On the top of page, there is a button on the left of toolbar,  
Like this,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image003.png)

 
The left is the icon of button, right is the caption of button,  
It is used for return to previous page.  

These are the steps to complete it:  
Drag a button to toolbar,  
Set Width as 73,  
Set Align as alLeft,  
Set Caption as “返回所有文件”,  
Set Icon as a white arrow,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image005.png)


Set font color of caption as white,  
SelfOwnMaterial.DrawCaptionParam.DrawFont.FontColor.Color,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image007.png)


Set draw parameters of icon as automatically adjust,  
SelfOwnMaterial.DrawIconParam.IsAutoFit,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image009.png)


Here is the effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image011.png)


Now we only need to move caption to the right side of arrow icon,  
We have two methods:  
The first method,  
Set the caption as center display ,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image013.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image015.png)



The second method,  
We need to adjust the drawing area of caption,  
That means we need to draw caption on the right of arrow icon,  
We can set the drawn rectangle of caption in SelfOwnMaterial.DrawCaptionParam.DrawRectSetting,  
Properties of DrawRectSetting are these:  
	Left: margin to left  
	Top: margin to top  
	Right: margin to right  
	Bottom: margin to bottom  
	Width: width of drawing area  
	Height: height of drawing area  
These are the steps of setting:  
First set DrawCaptionParam, FontHorzAlign as fhaLeft，  
Then set Enabled of DrawRectSetting as True,  
It means use the DrawRectSetting to adjust the position and size of caption,  
Set SizeType as dpstPixel,  
It means the unit of its position and size(Left,Top,Right,Bottom,Width,Height) is px,  
(ps: when set dpstPencent as SizeType, the unit of position and size represent the percent of whole control).  
Last set Left as 22,that’s because the arrow icon almost occupy 22pxs of left .  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image017.png)


This is the effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image019.png)




 


