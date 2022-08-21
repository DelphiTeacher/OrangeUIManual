---
title: 制作背景图片按钮
order: 8
nav:
  title: 按钮Button
  path: /components
  order: 3
---

OrangeUI控件使用说明(按钮控件Button)(示例1 基本功能)  
我们做个三态按钮来演示一下按钮的基本设置，  
三态按钮就是有三种状态:正常状态、鼠标停靠和鼠标点击状态，  
在这三种状态时，按钮使用不同的背景图片来表示当前所处哪个状态，  
举例，有如下三种状态，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png):正常状态的背景图片  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png):鼠标停靠时的背景图片  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png):鼠标点击时的背景图片  
 
把这三张图片分别设置给按钮SelfOwnMaterial的NormalPicture、HoverPicture、DownPicture属性(双击NormalPicture就能打开图片编辑器来设置),  
然后给按钮设置标题为“确定”，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

上图中，标题显示在了左上角，  
并且背景图片拉伸得有些模糊，  
所以要先把按钮的标题显示在中间位置，  
在属性编辑器中展开SelfOwnMaterial里的DrawCaptionParam（按钮标题绘制参数），  
里面有两个属性，  
把FontHorzAlign(水平对齐属性)设置为fhaCenter(水平居中)，  
把FontVertAlign(垂直对齐属性)设置为fvaCenter(垂直居中)，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)

如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)

还有一个问题需要解决,  
就是当控件变大，背景图片边缘会显得特别模糊，  
如下图(将按钮拉得比较大的时候):  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)

展开SelfOwnMaterial下的DrawPictureParam(背景图片绘制参数)，  
把StretchStyle设置为issSquare，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)

九宫格缩放规则:  
背景图片四个角不变,  
两条横向的边水平拉伸，  
两条纵向的边垂直拉伸，  
中间的方块放大，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image017.png)

设置完之后，就再也不担心放多大了  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image019.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image021.png)


接下来，在Windows平台下运行看下效果:  
正常状态:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image023.png)

鼠标停靠状态:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image025.png)

鼠标点击状态:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image027.png)

 
再讲一下如何设置来使按钮具有按下的动态效果，  
即在鼠标点击的时候标题往右下移动一个像素，  
展开SelfOwnMaterial->DrawCaptionParam->MouseDownEffect(鼠标点击效果)  
勾选dpcetOffsetChange,表示启用鼠标点击的时候标题位置移动效果  
Offset设置为1表示位置移动个1个像素,  
如下图进行设置:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image029.png)


 


