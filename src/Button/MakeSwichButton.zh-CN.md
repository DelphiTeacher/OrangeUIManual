---
title: 制作开关按钮
order: 6
nav:
  title: 按钮
  path: /components
  order: 3
---

开关按钮示例:  
这个示例是实现两种状态的按钮，用来表示网络是否连接，  
先准备需要的图标，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image001.png)
:表示网络已断开。  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image003.png):表示网络已连接。  
拖一个Button在窗体上，尺寸设置为44*44，  
然后设置Icon为上面第一个图标,  
设置PushedIcon为上面第二个图标，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image005.png)

设置完  
效果如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image007.png)

会发现图标太大了，显示不下，  
因为Button的尺寸是44*44,而图标的尺寸是75*75,  
如何解决这个问题?  
这就需要设置按钮图标的绘制参数DrawIconParam，  
把它的IsAutoFit设置为True，  
表示绘制图标的时候，根据控件的尺寸调整图标的大小,并且图标的比例保持不变，  
PictureHorzAlign设置为phaCenter，使图标水平居中，  
PictureVertAlign设置为pvaCenter，使图标垂直居中，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image009.png)

显示效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image011.png)
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image013.png)
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image015.png)
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image017.png)

如果把DrawIconParam的IsAutoFit设置为False,  
那么在拉伸按钮尺寸的时候,图标的显示比例也会随着按钮的尺寸发生变化,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image019.png)
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image021.png)

 
那么如何把按钮切换成网络连接的态呢?  
需要把按钮设置成按下的状态(IsPushed属性设置为True),  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image023.png)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image025.png)


 


