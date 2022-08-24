---
title: 属性与素材
order: 0
nav:
  title: 文档
  path: /components
  order: 16
group:
  title: 图片列表手势切换控件ImageListViewer
  order: 160
---

图片列表手势切换控件的Properties:TImageListViewerProperties的属性:    
AutoSize	Boolean	是否自动调整控件的尺寸    
GestureSwitchLooped	Boolean	是否可以通过手势循环切换图片  
CanGestureSwitch	Boolean	是否可以手势切换  
ImageListAnimateOrderType	TAnimateOrderType	图片列表循环播放的顺序类型  
ImageListAnimateSpeed	Double	图片列表循环播放的速度  
ImageListSwitchingProgressIncrement	Integer	图片列表循环播放的切换时的切换移动距离(百分比)  
ImageListSwitchEffectType	TAnimateSwitchEffectType	图片列表循环播放的切换时的切换效果类型(水平,垂直)  
ImageListSwitchingSpeed	Double	图片列表循环播放切换时的切换速度  
ImageListAnimated	Boolean	图片列表循环地播放  
Picture	TDrawPicture	图片  
CanGestureSwitchDistance	Double	可以切换到下一张的手势移动距离  


图片列表手势切换控件的SelfOwnMaterial:TSkinImageListViewerDefaultMaterial的素材:  
BackColor		TDrawRectParam 背景颜色的绘制参数  
IsTransparent		Boolean 是否需要绘制背景颜色  
DrawPictureParam	TDrawPictureParam	图片的绘制参数    




应用首页上方通常会放置一个广告轮播的控件，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image001.png)


拖一个ImageList到窗体上，  
双击ImageList控件，  
在弹出的图片列表编辑器中添加如下四张图片:  
1.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image003.jpg)


2.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image005.jpg)


3.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image007.jpg)


4.![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image009.jpg)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image011.png)



再拖一个ImageListViewer控件到窗体上，  
把它的Propertie.Picture.SkinImageList设置为之前的ImageList，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image013.png)


并把Propertie.ImageListAnimated设置为True，  
表示循环切换显示ImageList中的图片，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image015.png)


如下图所示(图片正在切换)：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image017.png)


再设置是否允许手势切换图片，  
把Properties.CanGestureSwitch设置为True，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B1%20%E9%A6%96%E9%A1%B5%E5%B9%BF%E5%91%8A%E8%BD%AE%E6%92%AD).files/image019.png)


 
 


