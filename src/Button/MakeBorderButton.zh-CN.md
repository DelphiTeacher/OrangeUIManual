---
title: 制作边框按钮
order: 3
nav:
  title: 按钮
  path: /components
  order: 3
---

OrangeUI中每个控件都可以设置边框，  
在SelfOwnMaterial.BackColor中设置，  
用到BackColor.BorderColor,BorderWidth,BorderEadges三个属性，  
BackColor.BorderColor用于设置边框颜色  
BackColor.BorderWidth用于设置边框宽度  
BackColor. BorderEadges用于设置边  
 
下面以常用的Button来举例:  
先拖一个FMXButton在窗体上，  
把SelfOwnMaterial.IsTransparent的勾去掉，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image001.png)

再把SelfOwnMaterial.BackColor.BorderWidth设置为1，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image003.png)

看一下效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image005.png)

边框出来了，  
继续设置边框颜色，在BackColor.BorderColor中，  
把BackColor.BorderColor设置为#FF438DF5,  
再设置BackColor.IsFill为True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image007.png)

效果如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image009.png)

接下来，给按钮设置标题为”发送验证码”，  
字体颜色设置为#FF438DF5，并且居中显示，  
按钮标题的字体在SelfOwnMaterial.DrawCaptionParam中设置，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image011.png)

效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B2%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%BE%B9%E6%A1%86).files/image013.png)

		