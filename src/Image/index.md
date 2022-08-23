---
title: Properties and SelfOwnMaterial
order: 0
nav:
  title: Image
  path: /components
  order: 5
group:
  order: 50
---

Image's Properties:TImageProperties has:  
Picture	TDrawPicture	Picture  
AutoSize	Boolean	Whether to automatically adjust the size of the control according to the size of the picture  
IsToolBar	Boolean	Whether to use as a toolbar  
AnimateSpeed	Double	Speed of playing GIF images  
Animated	Boolean	If the current picture is a GIF picture, whether to play  


Image's SelfOwnMaterial:TSkinImageDefaultMaterial has:    
BackColor		TDrawRectParam Drawing parameters for background color    
IsTransparent		Boolean Do you need to draw the background color    
DrawPictureParam	TDrawPictureParam	drawing parameters of the picture    
DrawCaptionParam	TDrawTextParam	drawing parameters for the caption    
  

Double click property Picture,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)


The picture editor will come up, choose one picture,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)

 
Click ok ,you can see effect,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)


You can’t see whole picture, that’s because the size of picture is 256*256,  
But the size of control is 120*100,  
If you want to display whole picture,  
Set SelfOwnMaterial.IsStretch as True,  
StretchStyle as issTensile,  
It means stretch picture to fill whole control,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)

 



