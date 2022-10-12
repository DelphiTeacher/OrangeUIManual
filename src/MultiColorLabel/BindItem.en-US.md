---
title: Bind Item
order: 1
nav:
  title: 文档
  path: /components
  order: 14
group:
  title: MultiColorLabel
  order: 140
---

In this example we will introduce how to use MultiColorLabel to bind property of ListBoxItem,  
Drag a MultiColorLabel into ItemDesignerPanel,  
Double click ListBox,  
Add a ListBoxItem in the popped up ListItem Editor,  
Set its caption as “2”,  
Set Detail as “3”,  
Set Detail1 as “4”,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png>)

Set ColorTextCollection of this MultiColorLabel,  
Double click ColorTextCollection of MultiColorLabel,  
Add a ColorTextCollectionItem,  
Set DrawFont.Color as Red,  
Set name as ‘ItemCaption’,  
Means bind Caption of ListBoxItem,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png>)

Finally ,  
Set ItemCaptionBindingControl of ItemDesignerPanel as this MultiColorLabel,  
Means make ColorTextCollectionItem whose name is ”ItemCaption” in MultiColorLabel display caption of lIstItem,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/32.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%A4%9A%E9%A2%9C%E8%89%B2%E6%A0%87%E7%AD%BE%E6%8E%A7%E4%BB%B6MultiColorLabel)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png>)

In the same way, we can new multiple ColorTextCollectionItem,  
Set their names as ItemDetail,ItemDetail1,ItemDetail2,……  
To bind ListBoxItem’s other properties with MultiColorLabel.  

