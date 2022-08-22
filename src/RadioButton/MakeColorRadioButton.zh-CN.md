---
title: 制作颜色单选框
order: 1
nav:
  title: 单选框RadioButton
  path: /components
  order: 9
---

讲解一下颜色单选框RadioButton的设置:  
 
拖一个RadioButton到窗体上，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image001.png)

设置它的ComponentTypeName为Color,  
它的ComponentTypeUseKind为dtukName,  
表示使用颜色类型的单选框，  
 
先讲解SelfOwnMaterial中如下两个素材属性，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image003.png)


DrawCheckRectParam:勾选框的矩形绘制参数  
DrawCheckStateParam:勾勾的矩形绘制参数  
IsAutoPosition:是否自动排列勾选框和标题的位置,要打上勾  
 
 
先设置勾选框，  
把DrawCheckParam.BorderColor设置为Lightgray,  
把DrawCheckParam.BorderWidth设置2，  
表示在没有勾选的状态下，显示一个边框为灰色、粗细为2的矩形,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image005.png)


如下图所示：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image007.png)


接下来设置勾选状态下的效果，  
我们把RadioButton.Properties.Checked设置为True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image009.png)


当Checked为True时，  
RadioButton.SelfOwnMaterial中的所有Param就启用它们的PushedEffect,  
所以，要设置勾选状态下的勾选框的边框颜色，  
把DrawCheckRectParam.DrawEffectSetting.PushedEffect.BorderColor.Color设置为Orangered,  
再勾选DrawCheckRectParam.DrawEffectSetting.PushedEffect.EffectTypes中的drpetBorderColorChange,  
表示在勾选状态下，边框的颜色变为Orangered,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image011.png)


如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image013.png)


接下来再设置勾勾，  
在Checked为False的情况下，不需要显示勾勾，  
在Checked为True的情况下，显示勾勾，  
设置DrawCheckStateParam.DrawRectSetting.Enabled为True,  
DrawCheckStateParam.DrawRectSetting.SizeType为dpstPixel,  
DrawCheckStateParam.DrawRectSetting.Left,Top,Right,Bottom为4,  
表示勾勾是一个边距为4的矩形，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image015.png)


再设置DrawCheckStateParam.DrawEffectSetting.PushedEffect.FillColor为OrangeRed,  
DrawCheckStateParam.DrawEffectSetting.PushedEffect.IsFill为True,  
勾选DrawCheckStateParam.DrawEffectSetting.PushedEffect.EffectTypes中的drpetIsFillChange和drpetFillColorChange,  
表示在勾选状态下，填充一个颜色为Orangered的勾勾矩形，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image017.png)


如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image019.png)


再设置标题的显示，  
SelfOwnMaterial中有一个IsAutoPosition属性，  
它表示自动将标题显示在图片的右边，  
因此我们只需要让标题垂直居中显示就可以了，  
不需要再设置标题的左边距了，  
在SelfOwnMaterial.DrawCaptionParam中设置，  
DrawCaptionParam.FontVertAlign设置为fvaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image021.png)


 
设置完之后，显示效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image023.png)


将Porperties.Checked设置为False，显示如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/8.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%8D%95%E9%80%89%E6%A1%86%E6%8E%A7%E4%BB%B6RadioButton)(%E7%A4%BA%E4%BE%8B2%20%E9%A2%9C%E8%89%B2%E5%8D%95%E9%80%89%E6%A1%86).files/image025.png)


 


