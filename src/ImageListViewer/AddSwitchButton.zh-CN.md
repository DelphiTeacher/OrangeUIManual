---
title: 添加切换按钮
order: 2
nav:
  title: 文档
  path: /components
  order: 16
group:
  title: 图片列表手势切换控件ImageListViewer
  order: 160
---



先拖一个SkinImageList在窗体上，  
取名为imglistPlayer,  
添加如下6张图片:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image001.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image003.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image005.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image009.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image0011.png)



再放一个ImageListViewer在窗体上，  
Align设置为Top,Height设置为150,  
然后把imglistPlayer设置给ImageListViewer.Properties.Picture.SkinImageList,  
ImageListViewer.Properties.ImageListAnimated设置为True,  
ImageListViewer.SelfOwnMaterial.DrawPictureParam.IsStretch设置为True,  
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image013.png)


接下来拖一个ButtonGroup在ImageListViewer中，  
因为我们这次是6张图片，需要6个按钮的宽度，  
我们把ButtonGroup的Height设置为20，  
ButtonGroup.Properties.ButtonSize设置为了20，  
表示每个按钮的宽度为20，  
ButtonGroup.Properties.ButtonSizeCalcType设置为bsctFixed,  
表示每个按钮的尺寸都统一，  
Width设置为20*6=120，  
并把它的Anchors属性设置为[akTop,akRight]，  
让它适应不同尺寸的手机，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image015.png)


ImageListViewer绑定ButtonGroup之后，  
会根据SkinImageList中的图片个数来创建按钮，  
并且给自动创建的按钮设置点击事件，  
点击上面的按钮自动切换到对应的图片，  
 
接下来设置ButtonGroup上按钮的素材，  
ButtonGroup中有三个类型的按钮素材，  
FirstButtonMaterial:第一个按钮的素材，  
MiddleButtonMaterial:中间按钮的素材，  
LastButtonMaterial:最后一个按钮的素材，  
按钮的默认素材在ButtonGroup.SelfOwnMaterial.MiddleButtonMaterial中设置，  
MiddleButtonMaterial.IsTransparent设置为False，  
MiddleButtonMaterial.BackColor.IsFill设置为True，  
MiddleButtonMaterial.BackColor.IsRound设置为True，  
MiddleButtonMaterial.BackColor.RoundWidth设置为10,  
MiddleButtonMaterial.BackColor.RoundHeight设置为10,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image017.png)


效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image019.png)


ImageListViewer每次切换图片的时候，  
会把ButtonGroup上对应序号的Button的IsPushed属性设置为True,  
来指示出当前显示的是第几张图片，  
因此要设置ButtonGroup.MiddleButtonMaterial.BackColor.PushedEffect效果，  
PushedEffect.EffectTypes中的drpetFillColorChange打勾，  
PushedEffect.FillColor设置为黑色，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image021.png)


效果如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image023.png)




