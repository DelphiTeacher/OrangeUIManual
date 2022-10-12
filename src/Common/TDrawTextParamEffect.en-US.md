---
title: TDrawTextParamEffect
order: 9
nav:
  title: Common Properties
  path: /components
group:
  order: 28
---

## TDrawTextParamEffect

## Practice: button click font color change effect

If a control needs to change the background color and title font color at the same time when the mouse is clicked,  
How to set it up?

The following is an example of a commonly used Button:  
First drag an FMXButton on the form,  
Uncheck SelfOwnMaterial.IsTransparent,  
Then set SelfOwnMaterial.BackColor.BorderWidth to 1,  
Take a look at the effect:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image001.png>)

The border is out,  
Continue to set the border color, in BackColor.BorderColor,  
Set BackColor.BorderColor to #FF438DF5,  
Then set BackColor.IsFill to True,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image003.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image005.png>)

Next, set the title of the button to "Send verification code",  
The font color is set to #FF438DF5, and it is centered,  
The font of the button title is set in SelfOwnMaterial.DrawCaptionParam,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image007.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image009.png>)

Next, we set the background color of the button to #FF438DF5 when the mouse is clicked.  
Set in SelfOwnMaterial.BackColor.DrawEffectSetting.MouseDownEffect:  
drpetFillColorChange in MouseDownEffect.EffectTypes is ticked,  
MouseDownEffect.FillColor.Color is set to #FF438DF5,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image011.png>)

run to see the effect,  
normal status:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image013.png>)

Mouse click status:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image015.png>)

Found that the title of the button is missing.  
This is because the color of the title is the same as the background color after the mouse click is switched.  
Therefore, when the mouse is clicked, it is necessary to set the color of the title when the mouse is clicked, for example, set it to white,  
Set in SelfOwnMaterial.DrawCaptionParam.DarwEffectSetting.MouseDownEffect:  
MouseDownEffect.EffectTypes.dtpetFontColorChange ticked,
MouseDownEffect.FontColor.Color is set to white,  
Indicates that when the mouse is clicked, the title font color changes to white,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image017.png>)

Next, run and click the button to see the effect:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image019.png>)

The title font is switched to white.
