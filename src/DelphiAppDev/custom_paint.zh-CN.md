---
title: 画布与自绘
order: 2
nav:
  title: App开发教程
  path: /delphiapp
  order: 3
group:
  title: 安卓App开发
  order: 1
---

FireMonkey 下的画布  
接触过自绘的同学都知道在 VCL 下窗体和控件都有一个画布属性叫 Canvas，它有画笔、画刷的属性，还有绘制文本、矩形等方法，控件也有 OnPaint 方法允许开发者自绘。

在 Delphi 开发安卓 App 时，如果也遇到需要自绘一些东西，跨平台的 FireMonkey 控件中也有 Canvas，也有 OnPaint 事件，在事件中也提供 Canvas 参数可以直接使用。  
因此，大部分是差不多的。

但是，  
VCL 下 Canvas 的画刷属性是 Brush，画笔是 Pen，  
VCL 下的颜色类型是 TColor，不支持透明度，内部颜色分量 RGB 的位顺序是 BGR，颜色常量直接使用 clRed、clBlack、clWhite 等。  
FireMonkey 下，Canvas 画刷属性为 Fill，画笔属性为 Stroke，  
颜色类型则是使用 TAlphaColor 类型，其中 Alpha 表示透明度的意思，对的，FireMonkey 下的颜色支持透明度，  
内部颜色分量 RGB 的位顺序为 ARGB，颜色常量使用 TAlphaColorRec.Red、TAlphaColorRec.White 等。

我们先来看一下画刷，  
放一个 Panel，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-4.png)  
然后在它的 OnPaint 事件中写上如下代码：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-5.png)  
要注意的是，颜色常量比如白色、黑色、红色等都放在了 TAlphaColorRec 这个结构体中了，用像 TAlphaColorRec.Red 这样子去指定，定义在了 System.UITypes 单元中。  
而不像 VCL 下用 clWhite、clBlack、clRed。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-6.png)  
FillRect 则功能更强，支持圆角功能，支持指定透明度。  
看下效果吧：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-7.png)  
圆角：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-8.png)  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-9.png)

再来看一下画笔：  
在 Panel 的 OnPaint 事件中写上如下代码：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-10.png)  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-11.png)

文本的绘制：  
VCL 下文本的绘制只需要设置 Canvas 的 Font 属性，字体颜色可以通过 Font.Color 去指定，  
而 FireMonkey 下文本是填度上去的，所以要指定文本的颜色，是指定 Canvas.Fill.Color。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-12.png)  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-13.png)

在 OnPaint 外绘制  
还有，如果你没有在 OnPaint 中来绘制，或者使用 Bitmap 的 Canvas 来绘制，  
那么，需要自己包上 BeginSence 和 EndSence，不然是画不上去的。  
比如点击按钮画一条对角线：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-14.png)  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-15.png)

大致就这些啦！

最近疫情放开，一些网友都感染了新冠，大家要平时要多注意休息和营养，少加班和熬夜，药物只能让人好受些，靠自身的抵抗力才能战胜新冠，祝大家都无症状吧！
