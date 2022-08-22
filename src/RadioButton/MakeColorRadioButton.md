---
title: Make Color RadioButton
order: 1
nav:
  title: RadioButton
  path: /components
  order: 8
---

Explain the settings of the color checkbox CheckBox:  
 
Drag a CheckBox onto the form,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image001.png)


Set its ComponentTypeName to Color,  
Its ComponentTypeUseKind is dtukName,  
Indicates the use of a color type checkbox,  
 
First explain the following material properties in SelfOwnMaterial,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image003.png)


DrawCheckRectParam: The rectangle drawing parameter of the check box  
DrawCheckStateParam: The path drawing parameters of the hook  
IsAutoPosition: Whether to automatically arrange the position of the check box and title, to tick  
IsSimpleDrawCheckState: Whether to automatically generate the drawing path of the hook, to be ticked  
 
Set the check box first,  
Set DrawCheckParam.BorderColor to Lightgray,  
Set DrawCheckParam.BorderWidth to 2,  
Indicates that in the unchecked state, a rectangle with a gray border and a thickness of 2 is displayed.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image005.png)


As shown below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image007.png)


Next, set the effect in the selected state,  
We set CheckBox.Properties.Checked to True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image009.png)


When Checked is True,  
All Params in CheckBox.SelfOwnMaterial enable their PushedEffect,  
So, to set the border color of the checkbox in the checked state,  
Set DrawCheckRectParam.DrawEffectSetting.PushedEffect.BorderColor.Color to Orangered,  
Then check drpetBorderColorChange in DrawCheckRectParam.DrawEffectSetting.PushedEffect.EffectTypes,  
Indicates that in the checked state, the color of the border changes to Orangered,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image011.png)


As shown below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image013.png)


Next, set the tick  
In the case where Checked is False, there is no need to display the tick,  
In the case where Checked is True, a tick is displayed,  
Set DrawCheckStateParam.DrawEffectSetting.PushedEffect.PenColor to OrangeRed,  
Check dppetPenWidthChange and dppetPenColorChange in DrawCheckStateParam.DrawEffectSetting.PushedEffect.EffectTypes,  
Indicates that in the checked state, a tick with a thickness of 2 and a color of Orangered will be displayed.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image015.png)


As shown below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image017.png)


Then set the display of the title,  
There is an IsAutoPosition property in SelfOwnMaterial,  
It means to automatically display the title to the right of the picture,  
So we just need to center the title vertically,  
No need to set the left margin of the title anymore,  
Set in SelfOwnMaterial.DrawCaptionParam,  
DrawCaptionParam.FontVertAlign is set to fvaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image019.png)


 
After setting, the display effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image021.png)


Setting Properties.Checked to False shows the following:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%A4%8D%E9%80%89%E6%A1%86).files/image023.png)



