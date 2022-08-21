---
title: TDrawRectParamEffect
order: 8
nav:
  title: Common Properties
  path: /components
  order: 2
group:
  order: 27
---

## TDrawRectParamEffect



## Practice: button click background color fade effect

Each drawing parameter DrawParam in SelfOwnMaterial has the DrawEffectSeting property,  
Used to set the dynamic effects of controls, such as mouse clicks, mouse docking, etc.,  
Among them, DrawEffectSetting.MouseDownEffect is used to set the mouse click effect,  
DrawEffectSetting.MouseOverEffect is used to set the mouse docking effect,  
DrawEffectSetting.PushedEffect is used to set the effect of the pressed state,  
The following takes the button as an example to set its click effect,  
 
First, drag an FMXButton onto the form,  
Uncheck SelfOwnMaterial.IsTransparent.  
Then expand SelfOwnMaterial.BackColor,   
Tick the BackColor.IsFill property as well:  
At this time, the button on the form has a background color,  
As shown below:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image001.png)

Next, change the background color to blue #FF438DF5,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image003.png)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image005.png)


Next, give the button a title of "Login",  
The font size is set to 14, the color is set to white, and it is centered,  
The font of the button title is set in SelfOwnMaterial.DrawCaptionParam,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image007.png)

The effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image009.png)

Next, we can set the rounded corners by setting the IsRound, RoundWidth, and RoundHeight of BackColor,  
Tick BackColor.IsRound to set the background to a rounded rectangle.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image011.png)

The effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image013.png)
  
Then we set the click effect of the button,  
ExpandSelfOwnMaterial.BackColor.DrawEffectSettin.MouseDownEffect,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image015.png)

Among them, CommonEffectTypes is used to set common effects,  
There is dpcetOffsetChange, the effect of changing the drawing position offset,  
There is dpcetAlphaChange, which changes the effect of drawing transparency  
EffectTypes are used to set Param-specific effects,  
SelfOwnMaterial.BackColor is DrawRectParam,  
Its unique effects are:  
drpetFillColorChange: The effect of changing the fill color,  
drpetIsFillChange: Change the effect of filling,  
drpetBorderWidthChange: The effect of changing the border width,  
   
The Offset property is used to set the offset of the dpcetOffsetChange effect,  
The Alpha property is used to set the transparency of the dpcetAlphaChange effect,  
The FillColor property is used to set the color of the drpetFillColorChange effect,  
The IsFill property is used to set whether the drpetIsFillChange effect is filled or not.  
The BorderWidth property is used to set the border width of the drpetBorderWidthChange effect,  
 
We tick dpcetAlphaChange in BackColor.DrawEffectSetting.MouseDownEffect.CommonEffectTypes,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image017.png)

Then run to see the effect,  
Under normal conditions:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image019.png)

After the mouse click, the transparency of the background color changes to 180, which looks faded: 
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image021.png)



