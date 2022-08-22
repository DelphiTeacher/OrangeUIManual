---
title: 列表项水平排列
order: 5
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox通常是垂直排列显示列表项的，  
当然，水平排列显示也是可以的，  
接下来就给大家演示一下列表项水平排列显示的ListBox,  
目标效果如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image001.png)


先拖一个ListBox到窗体上，  
双击ListBox，添加7个列表项,  
设置列表项的Caption为“周一”至“周日”,  
设置列表项的Detail为对应的日期,  
把第一个列表项的Selected设置True,  
表示该列表项为选中状态,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image003.png)


添加完是这个样子的:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image005.png)


因为ListBox默认是垂直排列显示列表项的，  
所以要把ListBox拉高一点，才能看到其他列表项:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image007.png)


要让ListBoxItem水平排列显示列表项，  
需要设置ListBox.Properties.ItemLayoutType为iltHorizontal，  
再设置ListBox.Properties.ItemWidth为60,  
设置ListBox.Properties.ItemHeight为50,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image009.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image011.png)



还需要排列一下Caption和Detail的绘制位置，  
让Detail显示在Caption下面，并且两者都水平居中，  
Caption的字体偏大，颜色为黑色，  
Detail的字体偏小，颜色为灰色#FF878787，  
当选中的时候Caption和Detail的字体颜色均为#FF46D2DC  
在SelfOwnMaterial.DrawItemCaptionParam中设置列表顶标题的字体，  
在SelfOwnMaterial.DrawItemDetailParam中设置列表项Detil的字体，  
先设置Caption的显示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image013.png)


再设置当列表项选中时Caption的字体颜色：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image015.png)


再接下来设置Detail的显示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image017.png)


再设置当列表项选中时Detail字体颜色:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image019.png)


现在效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image021.png)


还需要添加一个效果，  
就是列表项选中的时候宽度变宽，并且底下有一条青色的线，  
如下图:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image023.png)


先设置列表项选中的宽度,  
将ListBox的ItemWidthCalcType为isctSeparate,  
将ListBox的SelectedItemWidth为120,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image025.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image027.png)



再设置DrawItemBackColorParam.FillColor为#FF46D2DC,  
PushedEffect.EffectTypes把drpetIsFillChange打勾，  
PushedEffect.IsFill设置为True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image029.png)


先看一下效果，  
发现背景色充满整个了列表项,都看不见Caption和Detail了:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image031.png)


因为这个DrawItemBackColorParam是设置列表项的背景颜色的，  
要把它变细一点，  
在DrawItemBackColorParam.DrawRectSetting中设置，  
高度设置为5个像素，位置在底部，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image033.png)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image035.png)



把”周五”选中看看效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image037.png)


默认ListBox是垂直排列显示列表项的，可以上下拖动的，  
水平排列显示ListBox需要可以左右拖动，  
需要设置垂直滚动条类型为sbstNone，表示没有垂直滚动条，因此不允许上下拖动，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image039.png)

[o1]改成:需要设置垂直滚动条类型为sbstNone，表示没有垂直滚动条，因此不允许上下拖动，  
设置水平滚动条类型为sbstHide，表示隐藏水平滚动条，但允许左右拖动  
 