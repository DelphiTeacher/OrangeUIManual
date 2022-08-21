---
title: 制作网页链接效果
order: 1
nav:
  title: 标签Label
  path: /components
  order: 4
---

网页链接的效果，  
就是正常状态下字体颜色为黑色，  
但是鼠标移上去的时候字体颜色就会变成蓝色，还有一条下划线。  
 
实现步骤如下:  
拖一个Label控件到窗体上，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image001.png)

然后展开SelfOwnMateiral下的DrawCaptionParam，  
里面有一个DrawEffectSetting属性，  
用于设置各种状态下的效果,  
它下面有三个属性，分别是:  
MouseDownEffect，用于设置鼠标点击状态的效果，  
MouseOverEffect，用于设置鼠标停靠状态的效果，  
PushedEffect，用于设置按下状态的效果，  
如下图所示：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image003.png)

展开MouseOverEffect会发现里面有很多很多属性，  
其中，EffectTypes是用于设置绘制参数需要哪些效果，  
有以下三个效果选项:  
dtpetFontColorChange:字体颜色变化效果，同时需要设置FontColor,  
勾选这个选项，当鼠标停靠在控件上面的时候，字体颜色会发生变化，  
dtpetFontSizeChange:字体大小变化效果,同时需要设置FontSize,  
勾选这个选项，当鼠标停靠在控件上面的时候，字体大小会发生变化，  
dtpetFontStyleChange:字体风格变化效果，同时需要设置FontStyle,  
勾选这个选项，当鼠标停靠在控件上面的时候，字体风格会发生变化，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image005.png)

这里我们只需要设置MouseOverEffect，  
在EffectTypes中勾选dtpetFontColorChange和dtpetFontStyleChange，  
表示需要字体颜色变化效果和字体风格变化效果，  
接着设置FontColor为蓝色，FontStyle为fsUnderLine，  
设置完如下显示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image007.png)

然后运行就能看到效果了，  
正常状态:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image009.png)

鼠标停靠状态:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B2%20%E7%BD%91%E9%A1%B5%E9%93%BE%E6%8E%A5%E6%95%88%E6%9E%9C).files/image011.png)



