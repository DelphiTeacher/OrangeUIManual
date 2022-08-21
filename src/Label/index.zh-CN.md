---
title: 标签的属性与素材
order: 0
nav:
  title: 标签Label
  path: /components
  order: 4
---

Label的Properties:TLabelProperties里面的属性有:  
AutoSize	Boolean	是否自动调整控件的尺寸  

Label的SelfOwnMaterial:TSkinLabelDefaultMaterial里面的属性有:  
DrawCaptionParam	TDrawTextParam	标题文本绘制参数  
BackColor		TDrawRectParam  背景颜色绘制参数  
IsTransparent		Boolean  是否绘制背景颜色  


拖一个Label控件到窗体上，  
设置Label的Caption属性，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)

标题的字体在DrawCaptionParam.DrawFont属性中设置，  
可以设置字体大小,字体颜色,字体风格以及字体对齐等，  
如下图:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)

显示效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)

FontHorzAlign为字体水平对齐类型，  
左对齐:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

右对齐:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)

FontVertAlign为字体垂直对齐类型，  
上对齐:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)

下对齐:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/3.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6Label)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)



