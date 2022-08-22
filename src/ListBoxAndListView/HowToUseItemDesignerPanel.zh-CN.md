---
title: 使用设计面板来设计样式
order: 1
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ItemDesignerPanel是设计列表项显示内容的控件，  
先拖一个ListBox到窗体上，  
再拖一个ItemDesignerPanel到ListBox上，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image001.png)


把ListBox.Properties.ItemDesignPanel属性设置为ItemDesignPanel，  
表示使用ItemDesignPanel来绘制列表项的内容，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image003.png)


双击ListBox,在项目编辑器中添加三个列表项,  
标题和图标分别为:  
“Movies”,![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image005.png)


“Music”,![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image007.png)


“Documents”, ![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image009.png)

,
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image011.png)


添加完之后，  
ListBox会调整ItemDesignerPanel的高度为列表项的高度，  
列表项的高度在属性ListBox.Properties.ItemHeight中设置，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image013.png)


拖一个Label到ItemDesignPanel上去，  
将它的Caption设置为”FolderName”,  
 
HitTest设置为False,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image015.png)


 

这时会发现我们添加的三个列表项都显示相同的标题”FolderName”,  
我们需要让每个列表项都显示自己的标题，  
需要将ItemDesignerPanel的ItemCaptionBindingControl设置为这个Label,  
表示将这个Label用于显示列表项的Caption,   
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image017.png)


效果如图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image019.png)


然后再拖一个Image控件上去，  
尺寸设置为40*40， 
HitTest设置为False,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image021.png)


并让这个Image来显示列表项的图标，  
需要将ItemDesignerPanel的ItemIconBindingControl设置为这个Image,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image023.png)


效果如图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image025.png)


因为这个图标的尺寸是60*60，  
比刚才拖上去Image控件尺寸(40*40)要大，  
所以要把SelfOwnMaterial.DrawPictrueParam.IsStretch设置为True，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image027.png)


再把ListBox的背景色设置成白色，  
步骤如下:  
SelfOwnMaterial.IsTransparent设置为False，  
SelfOwnMaterial.BackColor.IsFill设置为True，  
SelfOwnMaterial.BackColor.FillColor设置为白色，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image029.png)


给每个列表项之间添加分隔线，  
把SelfOwnMaterial.DrawItemDevideParam.IsFill设置为True就可以了,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image031.png)


再设置鼠标点击列表项的效果，  
将ItemDesignerPanel.SelfOwnMaterial.IsTransparent设置为False,  
展开ItemDesignerPanel.SelfOwnMaterial.BackColor.MouseDownEffect，  
EffectTypes设置为drpetFillColorChange和drpetIsFillChange，  
FillColor设置为LightGray,  
IsFill设置为True，  
表示在鼠标点击时改变列表项的背景颜色:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B2%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image035.png)


再设置列表项选中的效果，  
将ItemDesignerPanel.SelfOwnMaterial.IsTransparent设置为False,  
展开ItemDesignerPanel.SelfOwnMaterial.BackColor.PushedEffect，  
EffectTypes设置为drpetFillColorChange和drpetIsFillChange，  
FillColor设置为LightGray,  
IsFill设置为True，  
表示在鼠标选中时改变列表项的背景颜色。  
 


