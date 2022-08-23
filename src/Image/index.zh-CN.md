---
title: 属性与素材
order: 0
nav:
  title: 图片控件Image
  path: /components
  order: 5
group:
  order: 50
---

图片控件的Properties:TImageProperties里面的属性有:  
Picture	TDrawPicture	图片  
AutoSize	Boolean	是否自动根据图片的尺寸调整控件的大小  
IsToolBar	Boolean	是否作为工具栏使用  
AnimateSpeed	Double	播放GIF图片的速度  
Animated	Boolean	如果当前图片是GIF图片, 是否播放  


图片控件的SelfOwnMaterial:TSkinImageDefaultMaterial的素材:  
BackColor		TDrawRectParam 背景颜色的绘制参数  
IsTransparent		Boolean 是否需要绘制背景颜色  
DrawPictureParam	TDrawPictureParam	图片绘制参数  
DrawCaptionParam	TDrawTextParam	标题绘制参数  
  

双击Picture属性，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)

就会出现如下的图片编辑器，选择一张图片:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)


点击确定，然后看效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)


图片没有显示完整，因为图片尺寸为256x256，  
但是Image控件的尺寸只有120x100，  
如果要把图片全部显示出来，  
把SelfOwnMaterial.IsStretch设置为True，  
StretchStyle为issTensile,  
表示图片拉伸充满整个控件，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


