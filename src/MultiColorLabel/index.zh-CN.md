---
title: 属性与素材
order: 0
nav:
  title: Doc
  path: /components
  order: 13
group:
  title: 多彩文本MultiColorLabel
  order: 130
---

多彩文本的Properties:TMultiColorLabelProperties的属性有:  
AutoSize	Boolean	是否自动调整控件的尺寸    
ColorTextCollection	TColorTextCollection	多颜色文本项的集合  
		

多彩文本的SelfOwnMaterial:TSkinMultiColorLabelDefaultMaterial的素材:  
DrawCaptionParam	TDrawTextParam	标题的绘制参数  
BackColor		TDrawRectParam 背景颜色的绘制参数  
IsTransparent		Boolean 是否需要绘制背景颜色  


拖一个MultiColorLabel控件到窗体上，  
双击它的ColorTextCollection属性，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)


点击添加按钮添加两个TColorTextItem,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)


TColorTextItem的属性如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)


设置第一个ColorTextItem的Text为’499’,表示价格的整数，  
设置第二个ColorTextItem的Text属性为’.00’,表示价格的小数，  
显示如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)


然后把第一个ColorTextItem的FontColor设置为蓝色Blue,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


这样前面的“499”就变成蓝色的了,  
我们还需要增大“499”的字体，  
就要把IsUseDefaultDrawFont的勾去掉，  
表示不使用默认字体，  
再设置DrawFont.Size为20,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


然后设置第二个ColorTextItem的FontColor设置为红色Red,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


这就是最终的效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)



