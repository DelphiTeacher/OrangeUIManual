---
title: Make web link effects
order: 1
nav:
  title: Label
  path: /components
  order: 4
group:
  order: 40
---

Effect of web links,  
It means at normal state, font color is black,  
But when mouse hovering over, the color of font will become blue and with an underline.  

You can complete it by these steps:  
Drag a label into form,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image001.png)

Unfold DrawCaptionParam in SelfOwnMateiral,  
Find DrawEffectSetting,  
It is used for set effect of all kinds of states,  
It has three properties:  
MouseDownEffect, used for set effect of click state  
MouseOverEffect, used for set effect of hover state  
PushedEffect, used for set effect of pressed state  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image003.png)

Unfold MouseOverEffect, you will find lots of properties,  
Among these properties, EffectTypes means effects you need when you set draw parameters ,  
You have three options:  
dtpetFontColorChange: check this option, when mouse hovering over control, font color changes.    
dtpetFontSizeChange: check this option, when mouse hovering over control, font size changes.    
dtpetFontStyleChange: check this option, when mouse hovering over control, font style changes.    

Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image005.png)

Here, we only need to set MouseOverEffect,  
Check dtpetFontColorChange and dtpetFontStyleChange in EffectTypes,  
Then set FontColor as blue, FontStyle as fsUnderLine,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image007.png)

When you run it you can see effect,  
Normal state:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image009.png)

Hover state:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image011.png)





