---
title: Properties and Material
order: 0.1
nav:
  title: Doc
  path: /components
  order: 15
group:
  title: ImageListPlayer
  order: 150
---

ImageListPlayer's Properties:TImageListPlayerProperties has:  
AutoSize Boolean Whether to automatically adjust the size of the control  
ImageListSwitchingSpeed Double The switching effect speed of image list playback  
ImageListSwitchEffectType TAnimateSwitchEffectType Type of switching effect for image list playback  
ImageListSwitchingProgressIncement Integer Switching effect moving step of image list playback  
ImageListAnimateSpeed Double Image list loop playback speed  
ImageListAnimateOrderType TAnimateOrderType The type of order in which the image list is looped  
ImageListAnimated Boolean Image list loop  
Picture TDrawPicture  


ImageListPlayer's SelfOwnMaterial:TSkinImageListPlayerDefaultMaterial has:  
BackColor TDrawRectParam drawing parameter of background color  
IsTransparent Boolean whether the background color needs to be drawn  
DrawPictureParam TDrawPictureParam drawing parameters of the picture  


Drag a ImageList into form,  
Double click ImageList,  
Add these pictures in the popped up picture list editor,   
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)



Drag a ImageListPlayer into form,  
Set its Propertie.Picture.SkinImageList as ImageList before,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


Set Propertie.ImageListAnimated as True,  
It means display picture of ImageList circularly switched.  
Set Propertie.AutoSize as True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


So the picture will keep circularly switched displaying:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)




