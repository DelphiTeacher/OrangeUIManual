---
title: 属性与素材
order: 0
nav:
  title: 单选框RadioButton
  path: /components
  order: 9
group:
  order: 90
---

单选框的Properties:TRadioButtonProperties里面的属性有:  
Checked	Boolean	是否勾选  
IsAutoChecked	Boolean	鼠标点击的时候是否自动勾选  
AutoSize	Boolean	是否自动调整控件的尺寸  



单选框的SelfOwnMaterial:TSkinRadioButtonDefaultMaterial的素材:  
BackColor	TDrawRectParam	背景颜色的绘制参数  
IsTransparent		Boolean 是否需要绘制背景颜色    
DrawCaptionParam	TDrawTextParam	标题的绘制参数    
NormalUnCheckedPicture	TDrawPicture	正常状态时未勾选图片  
NormalCheckedPicture	TDrawPicture	正常状态时已勾选图片  
HoverUnCheckedPicture	TDrawPicture	鼠标停靠时未勾选图片  
HoverCheckedPicture	TDrawPicture	鼠标停靠时已勾选图片  
DisabledUnCheckedPicture	TDrawPicture	禁用状态时未勾选图片  
DisabledCheckedPicture	TDrawPicture	禁用状态时已勾选图片  
DrawPictureParam	TDrawPictureParam	勾选框图片绘制参数  




讲解一下简单的RadioButton的设置:  
 
需要如下两张图片，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png):默认状态下单选框勾选的图片，  
设置给SelfOwnMaterial.NormalCheckedPicture  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png):默认状态下单选框未勾选的图片，  
设置给SelfOwnMaterial.NormalUnCheckedPicture  
IsAutoPosition:是否自动排列勾选框和标题的位置,要打上勾  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)

再设置勾选图片的显示大小，  
在SelfOwnMaterial.DrawPictureParam中设置，  
DrawPictureParam.IsAutoFit设置为True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)


再设置标题的显示，  
SelfOwnMaterial中有一个IsAutoPosition属性，  
它表示自动将标题显示在图片的右边，  
因此我们只需要让标题垂直居中显示就可以了，  
不需要再设置标题的左边距了，  
在SelfOwnMaterial.DrawCaptionParam中设置，  
DrawCaptionParam.FontVertAlign设置为fvaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


 
设置完之后，显示效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


将Porperties.Checked设置为True，显示如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)



