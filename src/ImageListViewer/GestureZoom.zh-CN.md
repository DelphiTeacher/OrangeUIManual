---
title: 手势缩放
order: 3
nav:
  title: 文档
  path: /components
  order: 16
group:
  title: 图片列表手势切换控件ImageListViewer
  order: 160
---


OrangeUI控件包中有一个图片列表查看控件，叫ImageListViewer，  
它一开始主要是用来做为APP首页广告轮播功能的，  
但也能用它来轻松实现一个支持手势切换和手势缩放的图片查看器  
比如查看订单商品的多张图片：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-android.gif)




怎么来实现呢？  
首先需要放一个SkinImageList，取名为imglistWelcome，  
将所有要显示的图片都添加进去  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image.png)



我们在Frame上放一个ImageListViewer控件，取名为imglistviewerCommon，  
将它的Align设置为Client，让它占满整个窗体，  
怎么让它来显示SkinImageList中的图片呢？  
将它的Properties.Picture.SkinImageList设置为我们上面添加的那个imglistWelcome即可  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-1.png)

来看一下效果：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-2.png)

因为我们添加的图片有点大的，是1080*1920的，但是我们的控件尺寸太小，显示不下，  
只需要将图片绘制参数设置为拉伸即可，尺寸自适应，避免变形，  
将它的SelfOwnMaterial.DrawPictureParam.IsStretch设置为True，IsAutoFit设置为True，  

目前效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-3.png)

可以看出来，图片是全部显示出来了，但是没在居中显示，  
所以还需要调整一下：  
将SelfOwnMaterial.DrawPictureParam.PictureHorzAlign设置为phaCenter，  
PictureVertAlign设置为pvaCenter，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-4.png)

效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-5.png)

显示相关的设置到此就结束了  




接下来设置手势切换  
设置它的Properties.CanGestureSwitch为True，即表示允许手势切换，  
还有一个属性叫CanGestureSwitchDistance，它表示手势切换超过多少距离才允许切换到下一张图片。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-6.png)

在Windows下我们可以用鼠标拖动来模拟手势切换：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows.gif)

但是这里还有一个细节，就是手势切换到最后一页，就切换不过去的，  
效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows-1.gif)

有些同学可能还需要还能再切换回第一页去，这样循环切换，  
只需要将它的Properties.GestureSwitchLooped设置为True即可：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-7.png)

效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows-2.gif)





最后设置手势缩放  
将它的Properties.CanGestureZoom设置为True：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-8.png)

这样还不够，  
我在之前一篇文章中讲过窗体有手势的Touch属性和OnGesture事件，  
当然控件也有Touch.InteractiveGestures属性和OnGesture事件，但是我在测试的过种中发现没有没有窗体的事件灵敏，  
并且我们还需要在窗体的OnTouch事件中获取缩放时两根手指所触摸的位置来确定缩放中心点，  
所以，我们还需要在窗体中做如下处理，  
将窗体设置为触发缩放和双击的手势：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-9.png)

在OnTouch事件中将手指的触摸位置和个数保存到gFormTouch*的全局变量中，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-10.png)

在OnGesture事件中对控件进行缩放：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-11.png)

在手机运行看下效果：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-12.png)


就这样，一个图片浏览器就做好了  
你就可以应用到你的项目中去啦！  
  
你也可以直接使用控件包中的ViewPictureListFrame，  
本文开头的两张图片都是直接调用这个页面的。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-13.png)


使用OrangeUI，带你轻松进入Delphi开发APP的世界！  
对OrangeUI感兴趣的朋友可以加入QQ群相互学习交流：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/img_256.jpeg)


也可以关注本公众号来获取更多Delphi相关的内容：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/img_256-1.jpeg)





