---
title: 矩形绘制参数TDrawRectParam
order: 3
nav:
  title: 控件公共属性
  path: /components
  order: 2
group:
  order: 22
---

## 矩形绘制参数TDrawRectParam

//是否填充  
IsFill:Boolean  
//填充的颜色  
FillColor: TDrawColor  
//是否圆角  
IsRound:Boolean  
//圆角宽高度  
RoundWidth和RoundHeight:Double  
//边框颜色  
BorderColor:TDrawColor  
//边框宽度  
BorderWidth:Double  
//边框  
BorderEadges:TDRPBorderEadges  
beLeft:         左边框  
beTop:          上边框  
beRight:        右边框  
beBottom:       底边框  
//边角  
RectCorners:TDRPRectCorners  
rcTopLeft:      左上角  
rcTopRight:     右上角  
rcBottomLeft:   左下角  
rcBottomRight:  右下角   
//是否是线段  
IsLine:Boolean  
//线段位置  
LinePosition: TDRPLinePosition  
lpLeft:     线段在左边  
lpTop:      线段在上边  
lpRight:    线段在右边  
lpBottom:   线段在下边  



## 实践：给按钮设置背景色

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
