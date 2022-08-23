---
title: 显示数字提示图标
order: 1
nav:
  title: 分页控件PageControl
  path: /components
  order: 12
group:
  order: 120
---



有时候，我们需要在PageControl的分页按钮(TabButton)上显示NotifyNumberIcon,  
用于提示用户这个分页(TabSheet)有未读的消息，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image001.png)


 
当然,最简单的实现方式是直接在PageControl上面放一个NotifyNumberIcon,  
并且设置NotifyNumberIcon的HitTest属性为False,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image003.png)


但是这种方式下，在PageControl的宽度改变的时候，  
比如我把PageControl的宽度从320更改为500,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image005.png)


那么NotifyNumberIcon的位置就需要重新计算。  
 
另一种方式是让NotifyNumberIcon绑定PageControl上面的TabSheet,  
这种方式下，PageControl更改尺寸的时候，  
不需要重新设置NotifyNumberIcon的位置。  
 
步骤如下:  
先准备好一个PageControl,  
里面有四个TabSheet,  
第一个TabSheet取名为tsMessage,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image007.png)


再拖一个NotifyNumberIcon控件到窗体上，  
命名为nniMessage,  
设置好nniMessage的素材，  
如下图所示：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image009.png)


 
我们要把NotifyNumberIcon显示在第一个分页上，  
所以先选中PageControl上的第一个TabSheet(tsMessage),  
设置tsMessage的Properties.NotifyNumberIconControl为nniMessage  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image011.png)


 
来看下效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image013.png)


nniMessage绘制在第一个分页按钮上了,  
默认情况下，  
NotifyNumberIcon绑定到TabSheet上时，  
会根据分组按钮的整个矩形把NotifyNumberIcon绘制到指定分页按钮上去,  
所以我们需要调整NotifyNumberIcon在分页按钮中的绘制矩形,  
在TabSheet.SelfOwnMaterial.DrawNotifyNumberIconRectSetting中设置，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image015.png)


把宽度设置成40,高度设置成30,并且水平居中，稍微靠右偏移20个像素，  
把DrawNotifyNumberIconRectSetting.Enabled设置为True,  
DrawNotifyNumberIconRectSetting.SizeType设置为dpstPixel,  
DrawNotifyNumberIconRectSetting.Width设置为40,  
DrawNotifyNumberIconRectSetting.Height设置为30,  
DrawNotifyNumberIconRectSetting.PositionHorzType设置为dpphtCenter,  
DrawNotifyNumberIconRectSetting.Left设置为20,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image017.png)


效果如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image019.png)


这时候，不管PageControl的宽度怎么改变,  
NotifyNumberIcon的位置都不需要重新设置  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image021.png)







