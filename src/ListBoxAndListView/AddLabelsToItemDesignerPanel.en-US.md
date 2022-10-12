---
title: Using Multiple Labels in Style
order: 4
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

ListBoxItem has a property called SubItems,  
Its type is TStringList,  
You can use SubItems to add innumerable strings,  
Such as add three strings ‘aa’, ‘bb’, ‘cc’ .  
Drag a ListBox into form,  
Then drag a ItemDesignerPanel into ListBox,  
Named as idpSubItems,  
Set ListBox.Properties.ItemDesignerPanel as idpSubItems,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image001.png>)

Double click ListBox, add a ListBoxItem,  
Double click ListBoxItem’s property SubItems, pop up form StringListEditor,  
Input three strings , ‘aa’, ‘bb’, ‘cc’  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image003.png>)

Then drag three Labels into ItemDesignerPanel,  
Named as lblSubItemsIndex1,lblSubItemsIndex2,lblSubItemsIndex3 respectively.  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image005.png>)

Select ItemDesignerPanel,  
Double click its ItemStringBindingControlCollection,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image007.png>)

Add three items,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image009.png>)

Select the first item,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image011.png>)

In property editor,  
set its property BindingControl as lblSubItemsIndex1, property StringsIndex as 0,  
To make it display string ‘aa’, whose index is 0 in SubItems,  
Select the second item,  
set its property BindingControl as lblSubItemsIndex2, property StringsIndex as 1,  
To make it display string ‘bb’, whose index is 1 in SubItems,  
Select the third item,  
set its property BindingControl as lblSubItemsIndex3, property StringsIndex as 2,  
To make it display string ‘cc’, whose index is 2 in SubItems,  
Like this :  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image013.png>)

We could add a ListBoxItem again,  
Set SubItems as ‘11’, ‘22’, ‘33’,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image015.png>)

So ,we can fill multiple data into SubIItems,  
And then bind multiple Labels in ItemDesignerPanel to display in ListBox.
