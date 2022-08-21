---
title: 给边框按钮添加点击效果
order: 4
nav:
  title: 按钮Button
  path: /components
  order: 3
---

如果一个控件在鼠标点击的时候，要同时更改背景色和标题字体颜色，  
该怎么设置?  
 
下面以常用的Button来举例:  
先拖一个FMXButton在窗体上，  
把SelfOwnMaterial.IsTransparent的勾去掉，  
再把SelfOwnMaterial.BackColor.BorderWidth设置为1，  
看一下效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image001.png)

边框出来了，  
继续设置边框颜色，在BackColor.BorderColor中，  
把BackColor.BorderColor设置为#FF438DF5,  
再设置BackColor.IsFill为True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image003.png)

效果如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image005.png)

接下来，给按钮设置标题为”发送验证码”，  
字体颜色设置为#FF438DF5，并且居中显示，  
按钮标题的字体在SelfOwnMaterial.DrawCaptionParam中设置，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image007.png)

效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image009.png)

接下来我们设置鼠标点击的时候，把按钮的背景色切换为#FF438DF5，  
在SelfOwnMaterial.BackColor.DrawEffectSetting.MouseDownEffect中设置:  
MouseDownEffect.EffectTypes中的drpetFillColorChange打勾，  
MouseDownEffect.FillColor.Color设置为#FF438DF5,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image011.png)

运行查看效果,  
正常状态:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image013.png)

鼠标点击状态:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image015.png)

发现按钮的标题不见了.  
这是因为标题的颜色和鼠标点击切换后的背景颜色一致了，  
所以在鼠标点击的时候，需要同时设置标题鼠标点击时的颜色,比如设置为白色，  
在SelfOwnMaterial.DrawCaptionParam.DarwEffectSetting.MouseDownEffect中设置:  
MouseDownEffect.EffectTypes.dtpetFontColorChange打勾，  
MouseDownEffect.FontColor.Color设置为白色，  
表示鼠标点击的时候，标题字体颜色更改为白色，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image017.png)

接下来运行点击按钮再看一下效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B4%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%82%B9%E5%87%BB%E6%95%88%E6%9E%9C2).files/image019.png)

标题字体切换成白色。  
 
 
 


