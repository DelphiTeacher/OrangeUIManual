---
title: Multiple list item styles
order: 13
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

When two different styles of list items are required in the ListBox, we can make the ListBox use multiple design panels to achieve it.  
As shown below:  
The first list item is used to display account information,  
The following list items are the function menu,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image001.png>)

First prepare a ListBox,  
ListBox.Properties.ItemHeight is set to 48, indicating that the default list item height is 48,  
Double-click the ListBox to add the following list items,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image003.png>)

| Item.Caption | Item.Detail                   | Item.ItemType | Item.Height |
| ------------ | ----------------------------- | ------------- | ----------- |
| Viva         | Communication number:happy520 | sitHeader     | 80          |
|              |                               | sitSpace      | 20          |
| Album        |                               | sitDefault    | -1          |
| Favorites    |                               | sitDefault    | -1          |
| Wallet       |                               | sitDefault    | -1          |
|              |                               | sitSpace      | 20          |
| Wallet       |                               | sitDefault    | -1          |
|              |                               | sitSpace      | 20          |
| set          |                               | sitDefault    | -1          |

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image005.png>)

Set the icon Item.Icon for the first list item viva to ![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image007.png>)

Then set the following icons for the five menu items of album, collection, wallet, emoji, and settings  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image009.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image011.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image013.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image015.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image017.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image019.png>)

Drag another ItemDesignerPanel to the ListBox and name it idpHeader,  
Set ListBox.Properties.HeaderDesignerPanel to idpHeader,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image021.png>)

Indicates that when Item.ItemType is sitHeader, this Item uses the style of idpHeader,  
Next, put an Image on the idpHeader, named imgHead, to display Item.Icon,  
Put a Label named lblNickName to display Item.Caption,  
Put another Label, named lblAccount, to display Item.Detail,  
The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image023.png>)

Next, set the binding of idpHeader,  
imgHead is used to display Item.Icon,  
So set idpHeader.Properties.ItemIconBindingControl to imgHead,  
lblNickName is used to display Item.Caption,  
So set idpHeader.Properties.ItemCaptionBindingControl to lblNickName,  
lblAccount is used to display Item.Detail,  
So set idpHeader.Properties.ItemDetailBindingControl to lblAccount,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image025.png>)

Then set the background color of idpHeader to white,  
Set idpHeader.SelfOwnMaterial.IsTransparent to False,  
idpHeader.SelfOwnMaterial.BackColor.IsFill is True,  
idpHeader.SelfOwnMaterial.BackColor.FillColor.Color is set to White,

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image027.png>)

Next, drag an ItemDesignerPanel named idpMenu, which is used to design the display style of menu items.  
Set ListBox.Properties.ItemDesignerPanel to idpMenu,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image029.png>)

When Item.ItemType is sitDefault, use ListBox.Properties.ItemDesignerPanel for drawing,  
Put an Image on idpMenu, named imgMenuIcon, used to display Item.Icon,  
Put another Label, named lblMenuCaption, to display Item.Caption,  
The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image031.png>)

set the binding of idpMenu,  
imgMenuIcon is used to display Item.Icon,  
So set idpMenu.Properties.ItemIconBindingControl to imgMenuIcon,  
lblMenuCaption is used to display Item.Caption,  
So set idpHeader.Properties.ItemCaptionBindingControl to lblMenuCaption,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image033.png>)

Then set the background color of idpMenu to white,  
Set idpMenu.SelfOwnMaterial.IsTransparent to False,  
idpMenu.SelfOwnMaterial.BackColor.IsFill is True,  
idpMenu.SelfOwnMaterial.BackColor.FillColor.Color is set to White,

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image035.png>)

Then set the background color of the ListBox to #FFEDEDED  
Set ListBox.SelfOwnMaterial.IsTransparent to False,  
ListBox.SelfOwnMaterial.BackColor.IsFill is True,  
ListBox.SelfOwnMaterial.BackColor.FillColor.Color is set to #FFEDEDED,  
Also need to add divider,  
Set ListBox.SelfOwnMaterial.DrawItemDevideParam.IsFill to True,  
The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.17.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B17%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF).files/image037.png>)
