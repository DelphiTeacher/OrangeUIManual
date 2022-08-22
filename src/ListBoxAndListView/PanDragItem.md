---
title: List item pan menu
order: 6
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

In listbox we can drag ListBoxItem horizontally, and operate in the slid menu,  
For example , in the common used email APP, we can delete an email in the slid menu,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image001.png)


You can complete it by these steps:  
Drag a ItemDesignerPanel into ListBox,  
Put two buttons on ItemDesignerPanel,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image003.png)


Set ListBox.Properties.ItemPanDragDesignerPanel as this ItemDesignerPanel,  
And set ItemPanDragGestureDirection as ipdgdtLeft, it means fingers drag from right to left can slide out ItemDesignerPanel.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image005.png)


Let’s see the effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image007.png)


When ItemPanDragGestureDirection is ipdgdtRight, it means fingers drag from left to right can slide out ItemDesignerPanel,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image009.png)


When clicking one button of ItemDerPanesignel , in the button’s OnClick event, we need to call method StopItemPanDrag of ListBox to stop dragging.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image011.png)


procedure TFrameListBox_UseItemPanDrag.btnCallClick(Sender: TObject);  
begin  
  Self.lbAppList.Prop.StopItemPanDrag;  
end;  

