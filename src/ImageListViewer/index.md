---
title: Properties
order: 0.1
nav:
  title: Doc
  path: /components
  order: 16
group:
  title: ImageListViewer
  order: 160
---

ImageListViewer's Properties:TImageListViewerProperties has:    
AutoSize Boolean Whether to automatically adjust the size of the control  
GestureSwitchLooped Boolean Whether it is possible to switch pictures in a loop through gestures  
CanGestureSwitch Boolean Whether gesture switching is possible  
ImageListAnimateOrderType TAnimateOrderType The type of order in which the image list is looped  
ImageListAnimateSpeed Double The speed at which the image list loops  
ImageListSwitchingProgressIncrement Integer Switching distance (percentage) when switching the image list looping  
ImageListSwitchEffectType TAnimateSwitchEffectType The type of switching effect (horizontal, vertical) when switching the image list looping playback  
ImageListSwitchingSpeed Double The switching speed when the image list is looped and switched  
ImageListAnimated Boolean The image list plays in a loop  
Picture TDrawPicture  
CanGestureSwitchDistance Double can switch to the next gesture movement distance  



ImageListViewer's SelfOwnMaterial:TSkinImageListViewerDefaultMaterial has:    
BackColor TDrawRectParam drawing parameter of background color  
IsTransparent Boolean whether the background color needs to be drawn  
DrawPictureParam TDrawPictureParam drawing parameters of the picture  



Usually there is a control on the top of APP’s home page to take turns to play advertisements,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image001.png)


Drag a ImageList into form,  
Double click Imaglist,  
Add these pictures in the popped up picture list editor,   
1.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image003.jpg)


2.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image005.jpg)


3.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image007.jpg)


4.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image009.jpg)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image011.png)




Drag a ImageListViewer into form,  
Set its Propertie.Picture.SkinImageList as ImageList before,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image013.png)


Set Propertie.ImageListAnimated as True,  
It means display picture of ImageList circularly switched.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image015.png)


Like this(the picture is switching)：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image017.png)


And set whether allow to switch pictures by gestures,  
Set Properties.CanGestureSwitch as True,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image019.png)


 


