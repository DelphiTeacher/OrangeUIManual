---
title: 多列表项样式
order: 13
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

当ListBox中需要两种不同样式的列表项时，我们可以让ListBox使用多设计面板来实现。  
如下图所示:  
第一个列表项，用于展示账号信息，  
下面几个列表项，是功能菜单，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image001.png)


 
 
先准备一个ListBox,  
ListBox.Properties.ItemHeight设置为48,表示默认列表项的高度为48,  
双击ListBox,添加如下列表项，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image003.png)

|Item.Caption        |Item.Detail         |Item.ItemType       |Item.Height  |
|  ----  | ----  | ----  | ----  |
|Viva                |讯客号:happy520    |sitHeader          |80 |
|           |                   |sitSpace                   |20   |
|相册               |                    |sitDefault         |-1  |
|收藏               |                    |sitDefault         |-1  |
|钱包               |                    |sitDefault         |-1  |
|           |                   |sitSpace                   |20   |
|钱包               |                    |sitDefault         |-1  |
|           |                   |sitSpace                   |20   |
|设置               |                    |sitDefault         |-1  |

效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image005.png)


给第一个列表项viva设置图标Item.Icon为![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image007.png)


再给相册、收藏、钱包、表情、设置这5个菜单项设置如下图标  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image009.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image011.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image013.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image015.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image017.png)


效果如下:   
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image019.png)



再拖一个ItemDesignerPanel到ListBox上面，命名为idpHeader,  
设置ListBox.Properties.HeaderDesignerPanel为idpHeader,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image021.png)


表示当Item.ItemType为sitHeader时，此Item使用idpHeader的样式，  
接下来再在idpHeader上放一个Image,取名为imgHead，用于显示Item.Icon,  
放一个Label,取名为lblNickName,用于显示Item.Caption,  
再放一个Label,取名为lblAccount,用于显示Item.Detail,  
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image023.png)


接下来设置idpHeader的绑定，  
imgHead用来显示Item.Icon,  
所以把idpHeader.Properties.ItemIconBindingControl设置为imgHead,  
lblNickName用来显示Item.Caption,  
所以把idpHeader.Properties.ItemCaptionBindingControl设置为lblNickName,  
lblAccount用来显示Item.Detail,  
所以把idpHeader.Properties.ItemDetailBindingControl设置为lblAccount,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image025.png)


再把idpHeader的背景色设置为白色，  
设置idpHeader.SelfOwnMaterial.IsTransparent为False,  
idpHeader.SelfOwnMaterial.BackColor.IsFill为True,  
idpHeader.SelfOwnMaterial.BackColor.FillColor.Color设置为White,  
 
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image027.png)


 
接下去再拖一个ItemDesignerPanel，取名为idpMenu,用于设计菜单项的显示样式，  
把ListBox.Properties.ItemDesignerPanel设置为idpMenu,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image029.png)


当Item.ItemType为sitDefault时，使用ListBox.Properties.ItemDesignerPanel为绘制，  
在idpMenu上放一个Image,取名为imgMenuIcon,用于显示Item.Icon,  
再放一个Label,取名为lblMenuCaption,用于显示Item.Caption,  
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image031.png)


设置idpMenu的绑定，  
imgMenuIcon用来显示Item.Icon,  
所以把idpMenu.Properties.ItemIconBindingControl设置为imgMenuIcon,  
lblMenuCaption用来显示Item.Caption,  
所以把idpHeader.Properties.ItemCaptionBindingControl设置为lblMenuCaption,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image033.png)


再把idpMenu的背景色设置为白色，  
设置idpMenu.SelfOwnMaterial.IsTransparent为False,  
idpMenu.SelfOwnMaterial.BackColor.IsFill为True,  
idpMenu.SelfOwnMaterial.BackColor.FillColor.Color设置为White,  
 
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image035.png)


再设置ListBox的背景色为#FFEDEDED  
设置ListBox.SelfOwnMaterial.IsTransparent为False,  
ListBox.SelfOwnMaterial.BackColor.IsFill为True,  
ListBox.SelfOwnMaterial.BackColor.FillColor.Color设置为# FFEDEDED,  
还需要添加分隔线，  
设置ListBox.SelfOwnMaterial.DrawItemDevideParam.IsFill为Ture,  
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image037.png)





