---
title: 属性与素材
order: 0.1
nav:
  title: 分页控件PageControl
  path: /components
  order: 12
group:
  order: 120
---

分页控件的Properties:TPageControlProperties的属性有:  
TabHeaderHeight	Integer	标签头的高度  
Orientation	TTabOrientation	标签头的摆放位置类型  
TabSize	Integer	标签按钮的宽度  
TabSizeCalcType	TTabSizeCalcType	标签按钮尺寸计算类型  
IsTabHeaderCenter	Boolean	标签头居中  
ActivePageIndex	Integer	当前选中的页下标  





这个示例我们要实现PageControl的常用效果，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image001.jpg)


拖一个PageControl到窗体上，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image003.png)


右键PageControl->New TabSheet，添加三个TabSheet,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image005.png)


一个TabSheet需要两个状态的图标， 
一个是普通状态，一个是激活状态的。  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image008.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image011.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image013.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image015.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image017.png)




拖一个ImageList，把这几个图标添加进去，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image019.png)


三个分页的标题分别设置为”课表”,”校园”,”我”  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image021.png)


把PageControl.Properties.Orientation设置为Bottom,  
表示将TabHeader放到底部,  
PageControl.Properties.TabHeaderHeight设置为60,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image023.png)


把PageControl的Align设置为Client,  
分别设置三个TabSheet的Icon和PushedIcon,  
方法为Icon.SkinImageList为刚才我们添加的imglistIcons,  
Icon.ImageIndex为0,  
PushedIcon.SkinImageList也为imglistIcons, ImageIndex为1,  
(注: 在设计时双击TabHeader可以切换当前分页)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image025.png)


接下来先设置标题，让它底部水平居中，默认字体颜色设置为#FF878787,  
标题的绘制参数在PageControl.SelfOwnMaterial.DrawTabCaptionParam中，  
展开PageControl.SelfOwnMaterial.DrawTabCaptionParam， 
把它的DrawFont.FontColor设置为#FF878787，  
FontHorzAlign设置为fvaCenter,  
FontVertAlign设置为fvaBottom,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image027.png)


再设置当页面激活时标题的颜色，  
展开DrawTabCaptionParam.DrawEffectSetting.PushedEffect,  
勾选EffectTypes中的depetFontColorChange,  
并且把FontColor设置为#FF46D2DC,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image029.png)


效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image031.png)


接下来设置图标，  
图标绘制参数在DrawTabIconParam中设置，  
先把图标设置为水平居中，  
DrawTabIconParam.PictureHorzAlign设置为phaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image033.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image035.png)


图标大小是50x50,看起来有点大了，需要缩小一点，  
设置IsStrech为True,  
IsAutoFit也为True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image037.png)


然后设置图标的绘制尺寸,  
在DrawTabIconParam.DrawRectSetting中设置，  
Enabled设置为True,  
Height设置为44,  
SizeType设置为Pixel,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image039.png)


OK，设置完成了,双击TabHeader切换看效果，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image041.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image043.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/12.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A1%B5%E6%8E%A7%E4%BB%B6PageControl)(%E7%A4%BA%E4%BE%8B2%20%E5%B8%B8%E7%94%A8%E6%95%88%E6%9E%9C).files/image045.png)









