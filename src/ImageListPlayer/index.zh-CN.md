---
title: 属性与素材
order: 0.1
nav:
  title: 文档
  path: /components
  order: 15
group:
  title: 图片列表播放控件ImageListPlayer
  order: 150
---

图片列表播放控件的Properties:TImageListPlayerProperties的属性:  
AutoSize	Boolean	是否自动调整控件的尺寸  
ImageListSwitchingSpeed	Double	图片列表播放的切换效果速度  
ImageListSwitchEffectType	TAnimateSwitchEffectType	图片列表播放的切换效果类型  
ImageListSwitchingProgressIncement	Integer	图片列表播放的切换效果移动步长  
ImageListAnimateSpeed	Double	图片列表循环播放速度  
ImageListAnimateOrderType	TAnimateOrderType	图片列表循环播放的顺序类型  
ImageListAnimated	Boolean	图片列表循环播放  
Picture	TDrawPicture	图片  


图片列表播放控件的SelfOwnMaterial:TSkinImageListPlayerDefaultMaterial的素材:  
BackColor		TDrawRectParam 背景颜色的绘制参数  
IsTransparent		Boolean 是否需要绘制背景颜色  
DrawPictureParam	TDrawPictureParam	图片的绘制参数  




拖一个ImageList到窗体上，  
双击ImageList控件，  
在弹出的图片列表编辑器中添加以下四张图片:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)



再拖一个ImageListPlayer控件到窗体上，  
把它的Propertie.Picture.SkinImageList设置为之前的ImageList，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


 


并把Propertie.ImageListAnimated设置为True，  
表示循环切换显示ImageList中的图片，  
再把Propertie.AutoSize设置为True，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)




 
然后图片就会不停的循环切换显示了:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/66.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E5%B1%95%E7%A4%BA%E6%8E%A7%E4%BB%B6ImageListPlayer)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)

 


