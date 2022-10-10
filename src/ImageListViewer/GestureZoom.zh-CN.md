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

OrangeUI 控件包中有一个图片列表查看控件，叫 ImageListViewer，  
它一开始主要是用来做为 APP 首页广告轮播功能的，  
但也能用它来轻松实现一个支持手势切换和手势缩放的图片查看器  
比如查看订单商品的多张图片：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-android.gif)

怎么来实现呢？  
首先需要放一个 SkinImageList，取名为 imglistWelcome，  
将所有要显示的图片都添加进去  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image.png)

我们在 Frame 上放一个 ImageListViewer 控件，取名为 imglistviewerCommon，  
将它的 Align 设置为 Client，让它占满整个窗体，  
怎么让它来显示 SkinImageList 中的图片呢？  
将它的 Properties.Picture.SkinImageList 设置为我们上面添加的那个 imglistWelcome 即可  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-1.png)

来看一下效果：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-2.png)

因为我们添加的图片有点大的，是 1080\*1920 的，但是我们的控件尺寸太小，显示不下，  
只需要将图片绘制参数设置为拉伸即可，尺寸自适应，避免变形，  
将它的 SelfOwnMaterial.DrawPictureParam.IsStretch 设置为 True，IsAutoFit 设置为 True，

目前效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-3.png)

可以看出来，图片是全部显示出来了，但是没在居中显示，  
所以还需要调整一下：  
将 SelfOwnMaterial.DrawPictureParam.PictureHorzAlign 设置为 phaCenter，  
PictureVertAlign 设置为 pvaCenter，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-4.png)

效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-5.png)

显示相关的设置到此就结束了

接下来设置手势切换  
设置它的 Properties.CanGestureSwitch 为 True，即表示允许手势切换，  
还有一个属性叫 CanGestureSwitchDistance，它表示手势切换超过多少距离才允许切换到下一张图片。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-6.png)

在 Windows 下我们可以用鼠标拖动来模拟手势切换：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows.gif)

但是这里还有一个细节，就是手势切换到最后一页，就切换不过去的，  
效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows-1.gif)

有些同学可能还需要还能再切换回第一页去，这样循环切换，  
只需要将它的 Properties.GestureSwitchLooped 设置为 True 即可：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-7.png)

效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows-2.gif)

最后设置手势缩放  
将它的 Properties.CanGestureZoom 设置为 True：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-8.png)

将 ImageListViewer 设置为启用滚动，因为图片放大了需要滚动以看到被挡住的部分：  
ImageListViewer.Properties.VertScrollBarShowType 设置为 sbstAutoCoverShow,  
ImageListViewer.Properties.HorzScrollBarShowType 设置为 sbstAutoCoverShow,

这样还不够，  
我在之前一篇文章中讲过窗体有手势的 Touch 属性和 OnGesture 事件，  
当然控件也有 Touch.InteractiveGestures 属性和 OnGesture 事件，但是我在测试的过种中发现没有没有窗体的事件灵敏，  
并且我们还需要在窗体的 OnTouch 事件中获取缩放时两根手指所触摸的位置来确定缩放中心点，  
所以，我们还需要在窗体中做如下处理，

将窗体设置为触发缩放和双击的手势：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-9.png)

在 OnTouch 事件中将手指的触摸位置和个数保存到 gFormTouch\*的全局变量中，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-10.png)

在 OnGesture 事件中对控件进行缩放：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-11.png)

在手机运行看下效果：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-12.png)

就这样，一个图片浏览器就做好了  
你就可以应用到你的项目中去啦！

你也可以直接使用控件包中的 ViewPictureListFrame，  
本文开头的两张图片都是直接调用这个页面的。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-13.png)

使用 OrangeUI，带你轻松进入 Delphi 开发 APP 的世界！  
对 OrangeUI 感兴趣的朋友可以加入 QQ 群相互学习交流：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/img_256.jpeg)

也可以关注本公众号来获取更多 Delphi 相关的内容：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/img_256-1.jpeg)
