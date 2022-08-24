---
title: Properties and Material
order: 0.1
nav:
  title: RadioButton
  path: /components
  order: 9
group:
  order: 90
---

RadioButton's Properties:TRadioButtonProperties has:    
Checked	Boolean	Whether the status is checked    
IsAutoChecked	Boolean	Whether to automatically check when the mouse is clicked    
AutoSize	Boolean	Whether to automatically adjust the size of the control    



RadioButton's SelfOwnMaterial:TSkinRadioButtonDefaultMaterial has:  
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

The following two pictures are required,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png): The picture selected by the radio box in the default state,  
Set to SelfOwnMaterial.NormalCheckedPicture  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png): The image whose radio button is not checked by default,  
Set to SelfOwnMaterial.NormalUnCheckedPicture  
IsAutoPosition: Whether to automatically arrange the position of the check box and title, to tick  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)  

Then set the display size of the selected picture,  
Set in SelfOwnMaterial.DrawPictureParam,  
DrawPictureParam.IsAutoFit is set to True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)


Then set the display of the title,  
There is an IsAutoPosition property in SelfOwnMaterial,  
It means to automatically display the title to the right of the picture,  
So we just need to center the title vertically,  
No need to set the left margin of the title anymore,  
Set in SelfOwnMaterial.DrawCaptionParam,  
DrawCaptionParam.FontVertAlign is set to fvaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


 
After setting, the display effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


Setting Properties.Checked to True shows the following:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


