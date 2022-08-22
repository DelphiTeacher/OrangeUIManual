---
title: 设置分隔线
order: 8
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox添加分隔线，  
只要把SelfOwnMaterial.DrawItemDevideParam.IsFill设置为True就可以了,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image001.png)


效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image003.png)


默认情况下，ListBox.SelfOwnMaterial.IsSimpleDrawItemDevide为True,  
它表示使用简单常用的分隔线，即宽度1个像素的细线,  
所以如果要自定义ListBox分隔线的宽度,  
那就要先把SelfOwnMaterial.IsSimpleDrawItemDevide设置为False,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image005.png)


效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image007.png)


因为IsSimpleDrawItemDevide为False了之后，  
DrawItemDevideParam会画在整个列表项上面，  
这样，整个列表项都被分隔线盖住了，  
所以，还需要指定分隔线绘制参数的高度,  
把DrawItemDevideParam.DrawRectSetting.Enabled设置为True,  
DrawItemDevideParam.DrawRectSetting.Height设置为2,  
DrawItemDevideParam.DrawRectSetting.PositionVertType设置为dppvtBottom,  
DrawItemDevideParam.DrawRectSetting.SizeType设置为dpstPixel,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image009.png)


效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image011.png)




 