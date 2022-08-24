---
title: Properties and Material
order: 0.1
nav:
  title: CheckBox
  path: /components
  order: 8
group:
  order: 80
---

ChekBox's Properties:TCheckBoxProperties has:  
Checked	Boolean	Whether the status is checked  
IsAutoChecked	Boolean	Whether to automatically check when the mouse is clicked  
AutoSize	Boolean	Whether to automatically adjust the size of the control  



CheckBox's SelfOwnMaterial:TSkinCheckBoxDefaultMaterial has:  
BackColor	TDrawRectParam	Drawing parameters for background color  
IsTransparent		Boolean Do you need to draw the background color    
DrawCaptionParam	TDrawTextParam	drawing parameters for the caption    
NormalUnCheckedPicture	TDrawPicture	The picture of the unchecked state in the normal state  
NormalCheckedPicture	TDrawPicture	The picture of the checked state in the normal state  
HoverUnCheckedPicture	TDrawPicture	Picture of the unchecked state when the mouse is docked  
HoverCheckedPicture	TDrawPicture	Picture of the checked state when the mouse is docked  
DisabledUnCheckedPicture	TDrawPicture	Image of unchecked state when state is disabled  
DisabledCheckedPicture	TDrawPicture	Picture of the checked state when the state is disabled  
DrawPictureParam	TDrawPictureParam	Check box picture drawing parameters  



Explain simple setting of CheckBox,  
We need these two pictures:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png) : checked picture of CheckBox in default state, set to SelfOwnMaterial.NormalCheckedPicture,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png): unchecked pictureof CheckBox in default state, set to SelfOwnMaterial.NormalUnCheckedPicture  
Set display size of picture,  
In SelfOwnMaterial.DrawPictureParam,  
Set DrawPictureParam.IsAutoFit as True,  
Set DrawPictureParam.DrawRectSetting.Enabled as True,  
Set DrawPictureParam.DrawRectSetting.Height as 80,  
Set DrawPictureParam.DrawRectSetting.PositionVertType as dppvtCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)

Next set caption’s displaying,  
There is a property called IsAutoPosition in SelfOwnMaterial,  
It means display caption on right of picture automatically,  
So we only need to make caption display vertically centered,  
Don’t need to set caption’s left margin.  
In SelfOwnMaterial.DrawCaptionParam,  
Set DrawCaptionParam.FontVertAlign as fvaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

Set over, this is display effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)



Set Porperties.Checked as True, display like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/7.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%8D%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6CheckBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)




