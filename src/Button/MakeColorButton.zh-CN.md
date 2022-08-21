---
title: 制作颜色按钮
order: 1
nav:
  title: 按钮
  path: /components
  order: 3
---

OrangeUI所有控件都具有SelfOwnMaterial属性，  
在SelfOwnMaterial的BackColor中能方便直接的设置背景色，  
下面我们以按钮为例:  
 
首先，拖一个FMXButton到窗体上,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image001.png)

在对象查看器Object Inspector中展开它的SelfOwnMaterial属性，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image003.png)

SelfOwnMaterial中最基本的两个属性是:  
BackColor:TDrawRectParam(背景色),  
IsTransparent:Boolean(是否背景透明),  
 
如果IsTransparent为False,  
那么会使用BackColor绘制背景，  
如果IsTransparent为True,  
那么控件就是背景透明的，  
 
默认IsTransparent是打勾的，表示不使用BackColor来绘制控件的背景，  
所以要先把IsTransparent的勾去掉。  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image005.png)

然后展开BackColor,  
默认BackColor.FillColor为白色，  
并且BackColor.IsFill是不打勾的，表示不用背景色填充，  
所以还要把BackColor.IsFill属性也打勾:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image007.png)

这时，在窗体上的按钮就有背景色了,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image009.png)

接下来，把背景色改为蓝色#FF438DF5，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image011.png)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image013.png)


接下来，给按钮设置标题为”登录”，  
字体大小设置为14,颜色设置为白色，并且居中显示，  
按钮标题的字体在SelfOwnMaterial.DrawCaptionParam中设置，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image015.png)

好了，一个颜色按钮完成了,效果如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image017.png)

接下来我们可以通过设置BackColor的IsRound、RoundWidth、RoundHeight来设置圆角，  
把BackColor.IsRound打勾，就能设置背景为圆角矩形，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image019.png)

效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image021.png)

		