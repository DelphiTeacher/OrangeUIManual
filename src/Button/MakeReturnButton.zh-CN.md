---
title: 制作返回按钮
order: 7
nav:
  title: 按钮
  path: /components
  order: 3
---

如下图所示，这是一个非常普通的页面，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image001.png)

在界面顶部的工具栏左边有一个按钮，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image003.png)

它的左边是按钮的图标，右边是按钮的标题，  
用于返回上一页面，  
 
实现的步骤如下:  
拖一个Button到工具栏上，  
宽度设置为73，  
Align设置为alLeft,  
标题设置为”返回所有文件”，  
图标Icon设置为白色箭头图标，  
如下图所示：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image005.png)

再把标题的字体颜色设置成白色，  
属性为SelfOwnMaterial.DrawCaptionParam.DrawFont.FontColor.Color,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image007.png)

把图标绘制参数设置为自适应，  
属性为SelfOwnMaterial.DrawIconParam.IsAutoFit,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image009.png)

效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image011.png)

现在只需要把标题移动到箭头图标的右边就可以了，  
有两种方法，  
第一种方法，  
是把标题设置居中显示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image013.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image015.png)


第二种方法，  
需要涉及到调整标题的绘制矩形了,  
就是要把标题绘制在箭头图标右边，   
标题的绘制矩形是在SelfOwnMaterial.DrawCaptionParam.DrawRectSetting中设置，  
DrawRectSetting的属性有:  
Left:左边距，  
Top:上边距，  
Right:右边距，  
Bottom:底边距，  
Width:绘制区域的宽度，  
Height: 绘制区域的高度，  
设置的步骤如下:  
先把DrawCaptionParam.FontHorzAlign设置为fhaLeft，  
再把DrawRectSetting的Enabled设置为True，  
表示使用DrawRectSetting中设置的绘制区域来绘制标题，  
把SizeType设置为dpstPixel，  
表示它的位置和尺寸属性(Left,Top,Right,Bottom,Width,Height)的单位为像素，  
(注：SizeType为dpstPencent时，位置和尺寸属性单位为整个控件的百分比)，  
最后把Left设置为22，因为箭头图标差不多占了左边22个像素，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image017.png)

再看下显示的效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B4%20%E8%BF%94%E5%9B%9E%E6%8C%89%E9%92%AE).files/image019.png)



 


