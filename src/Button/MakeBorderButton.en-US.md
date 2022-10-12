---
title: Make border button
order: 3
nav:
  title: Button
  path: /components
  order: 3
---

Each control in OrangeUI can set a border,  
Set in SelfOwnMaterial.BackColor,  
Use BackColor.BorderColor, BorderWidth, BorderEadges three properties,  
BackColor.BorderColor is used to set the border color  
BackColor.BorderWidth is used to set the border width  
BackColor.BorderEadges is used to set the edges

The following is an example of a commonly used Button:  
First drag an FMXButton on the form,  
Uncheck SelfOwnMaterial.IsTransparent,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image001.png>)

Then set SelfOwnMaterial.BackColor.BorderWidth to 1,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image003.png>)

Take a look at the effect:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image005.png>)

The border is out,  
Continue to set the border color, in BackColor.BorderColor,  
Set BackColor.BorderColor to #FF438DF5,  
Then set BackColor.IsFill to True,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image007.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image009.png>)

Next, set the title of the button to "Send verification code",  
The font color is set to #FF438DF5, and it is centered,  
The font of the button title is set in SelfOwnMaterial.DrawCaptionParam,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image011.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image013.png>)
