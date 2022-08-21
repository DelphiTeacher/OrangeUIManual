---
title: Make color button
order: 1
nav:
  title: Button
  path: /components
  order: 3
---

All OrangeUI controls have the SelfOwnMaterial property,  
The background color can be set conveniently and directly in the BackColor of SelfOwnMaterial.  
Let's take the button as an example:  

First, drag an FMXButton onto the form,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image001.png)

Expand its SelfOwnMaterial property in the Object Inspector，    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image003.png)

The two most basic properties in SelfOwnMaterial are:  
BackColor:TDrawRectParam (background color),  
IsTransparent:Boolean (whether the background is transparent),  
 
If IsTransparent is False,  
Then the background will be drawn using BackColor,  
If IsTransparent is True,  
Then the control has a transparent background.  
 
The default IsTransparent is ticked, indicating that BackColor is not used to draw the background of the control,  
So first uncheck IsTransparent.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image005.png)

Then expand BackColor,  
Default BackColor.FillColor is white,  
And BackColor.IsFill is not ticked, which means that the background color is not filled,  
So also check the BackColor.IsFill property:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image007.png)

At this time, the button on the form has a background color,  
As shown below:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image009.png)

Next, change the background color to blue #FF438DF5,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image011.png)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image013.png)


Next, give the button a title of "Login",  
The font size is set to 14, the color is set to white, and it is centered,  
The font of the button title is set in SelfOwnMaterial.DrawCaptionParam,    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image015.png)

Well, a color button is completed, the effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image017.png)

Next, we can set the rounded corners by setting the IsRound, RoundWidth, and RoundHeight of BackColor,  
Tick BackColor.IsRound to set the background to a rounded rectangle.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image019.png)

The effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image021.png)

		