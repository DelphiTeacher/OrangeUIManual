---
title: TDrawRectParam
order: 3
nav:
  title: Common Properties
  path: /components
  order: 2
group:
  order: 22
---

## TDrawRectParam

parameters while drawing rectangle  
//whether fill this rectangle  
IsFill:Boolean  
//color of this filled rectangle  
FillColor: TDrawColor  
//whether the angle of rectangle is round  
IsRound:Boolean  
//width and height of round angle  
RoundWidth and RoundHeight:Double  
//color of border  
BorderColor:TDrawColor  
//width of border  
BorderWidth:Double  
//border of rectangle  
BorderEadges:TDRPBorderEadges  
 beLeft: left border  
 beTop: top border  
 beRight: right border  
 beBottom: bottom border  
//corner of rectangle  
RectCorners:TDRPRectCorners  
 rcTopLeft: top left corner of rectangle  
 rcTopRight: top right corner of rectangle  
 rcBottomLeft: bottom left corner of rectangle  
 rcBottomRight: bottom right corner of rectangle  
//whether it is line  
IsLine:Boolean  
//position of line  
LinePosition: TDRPLinePosition  
 lpLeft: the line is on the left  
 lpTop: the line is on the top  
 lpRight: the line is on the right  
 lpBottom: the line is on the bottom

## Practice: Set the background color of the button

All OrangeUI controls have the SelfOwnMaterial property，  
The background color can be easily and directly set in the BackColor of SelfOwnMaterial，  
Let's take the button as an example:

First, drag an FMXButton onto the form,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image001.png>)

Expand its SelfOwnMaterial property in the Object Inspector，  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image003.png>)

The two most basic properties in SelfOwnMaterial are:  
BackColor:TDrawRectParam(background color),  
IsTransparent:Boolean(Whether the background is transparent),

If IsTransparent is False,  
Then the background will be drawn using BackColor,  
If IsTransparent is True,  
Then the control has a transparent background.

The default IsTransparent is ticked, indicating that BackColor is not used to draw the background of the control，  
So first uncheck IsTransparent。  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image005.png>)

Then expand BackColor,  
Default BackColor.FillColor is white,  
And BackColor.IsFill is not ticked, which means that the background color is not filled,  
So also check the BackColor.IsFill property:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image007.png>)

At this time, the button on the form has a background color,  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image009.png>)

Next, change the background color to blue #FF438DF5,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image011.png>)  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image013.png>)

Next, give the button a title of "Login"，  
The font size is set to 14, the color is set to white, and it is centered，  
The font of the button title is set in SelfOwnMaterial.DrawCaptionParam，  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image015.png>)

Well, a color button is completed, the effect is as follows：  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image017.png>)

Next, we can set the rounded corners by setting the IsRound, RoundWidth, and RoundHeight of BackColor，  
Check BackColor.IsRound to set the background to a rounded rectangle，  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image019.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image021.png>)
