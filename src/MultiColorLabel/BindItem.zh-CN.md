---
title: 绑定列表项
order: 1
nav:
  title: Doc
  path: /components
  order: 14
group:
  title: 多彩文本MultiColorLabel
  order: 140
---

这个示例讲解MultiColorLabel如何绑定ListBoxItem的属性,  
 
拖一个MultiColorLabel控件到ItemDesignerPanel上，  
双击ListBox，  
再弹出的列表项编辑器中添加一个ListBoxItem,  
将它的Caption设置为”2”,  
Detail设置为”3”,  
Detail1设置为”4”,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)


再设置这个MultiColorLabel的ColorTextCollection,  
双击MultiColorLabel的ColorTextCollection属性，  
添加一个ColorTextCollectionItem,  
字体颜色设置为DrawFont.Color为Red,  
Name设置为’ItemCaption’,  
表示要绑定的是ListBoxItem的Caption属性，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)


最后，  
我们将ItemDesignerPanel的ItemCaptionBindingControl设置为这个MultiColorLabel,  
表示让MultiColorLabel中Name为”ItemCaption”的ColorTextCollectionItem显示列表项的Caption,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)


同理， 可以再新建多个ColorTextCollectionItem,  
它们的Name可以设置为ItemDetail,ItemDetail1,ItemDetail2,……  
来让MultiColorLabel绑定ListBoxItem的其他属性.  
 