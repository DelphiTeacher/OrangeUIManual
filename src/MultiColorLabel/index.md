---
title: Properties and Material
order: 0
nav:
  title: Doc
  path: /components
  order: 13
group:
  title: MultiColorLabel
  order: 130
---

MultiColorLabel's Properties:TMultiColorLabelProperties has:   
AutoSize Boolean Whether to automatically adjust the size of the control  
ColorTextCollection TColorTextCollection Collection of multicolor text items		  

MultiColorLabel's SelfOwnMaterial:TSkinMultiColorLabelDefaultMaterial has:    
DrawCaptionParam TDrawTextParam Caption drawing parameters  
BackColor TDrawRectParam drawing parameter of background color  
IsTransparent Boolean whether the background color needs to be drawn  




Drag a MultiColorLabel into form,  
Double click its property ColorTextCollection,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)


Click AddButton to add two TColorTextItems,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)


These are TColorTextItem’s properties:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)


Set the first ColorTextItem’s Text as ‘499’, means the integer part of price,  
Set the second ColorTextItem’s Text as ‘00’, means the fraction part of price,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)


And set the first ColorTextItem’s FontColor as Blue,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


So the number ‘499’ becomes blue,  
We still need to enlarge ‘499’ s font,  
We need to uncheck IsUseDefaultDrawFont,  
Means not use default font,  
Then set DrawFont.Size as 20,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


Set the second ColorTextItem’s FontColor as Red,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


This is the final effect,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)



