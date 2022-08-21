---
title: 给颜色按钮添加点击效果
order: 2
nav:
  title: 按钮Button
  path: /components
  order: 3
---

SelfOwnMaterial中每个绘制参数DrawParam都有DrawEffectSeting属性，  
用于设置控件的动态效果，比如鼠标点击，鼠标停靠等，  
其中，DrawEffectSetting.MouseDownEffect用于设置鼠标点击效果，  
DrawEffectSetting.MouseOverEffect用于设置鼠标停靠效果，  
DrawEffectSetting.PushedEffect用于设置按下状态的效果，  
下面以按钮为例，设置它的点击效果，  
 
首先，拖一个FMXButton到窗体上,  
把SelfOwnMaterial.IsTransparent的勾去掉。  
然后展开SelfOwnMaterial.BackColor,  
把BackColor.IsFill属性也打勾:  
这时，在窗体上的按钮就有背景色了,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image001.png)

接下来，把背景色改为蓝色#FF438DF5，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image003.png)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image005.png)


接下来，给按钮设置标题为”登录”，  
字体大小设置为14,颜色设置为白色，并且居中显示，  
按钮标题的字体在SelfOwnMaterial.DrawCaptionParam中设置，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image007.png)

效果如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image009.png)

接下来我们可以通过设置BackColor的IsRound、RoundWidth、RoundHeight来设置圆角，  
把BackColor.IsRound打勾，就能设置背景为圆角矩形，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image011.png)

效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image013.png)

然后我们设置按钮的点击效果，  
展开SelfOwnMaterial.BackColor.DrawEffectSettin.MouseDownEffect,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image015.png)

其中，CommonEffectTypes用于设置通用效果，  
有dpcetOffsetChange, 改变绘制位置偏移的效果，  
有dpcetAlphaChange，改变绘制透明度的效果  
EffectTypes用于设置Param特有的效果，  
SelfOwnMaterial.BackColor是DrawRectParam,  
它特有的效果有：  
drpetFillColorChange:改变填充颜色的效果，  
drpetIsFillChange:改变是否填充的效果，    
drpetBorderWidthChange:改变边框宽度的效果，  
 
Offset属性用于设置dpcetOffsetChange效果的偏移量，  
Alpha属性用于设置dpcetAlphaChange效果的透明度，  
FillColor属性用于设置drpetFillColorChange效果的颜色，  
IsFill属性用于设置drpetIsFillChange效果的是否填充,  
BorderWidth属性用于设置drpetBorderWidthChange效果的边框宽度，  
 
我们把BackColor.DrawEffectSetting.MouseDownEffect.CommonEffectTypes中的dpcetAlphaChange打勾，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image017.png)

然后运行看一下效果,  
正常状态下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image019.png)

鼠标点击后,背景色的透明度变为了180,看起来变淡了:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B3%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C1).files/image021.png)





		