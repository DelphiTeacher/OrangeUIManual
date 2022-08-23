---
title: list item click event
order: 14
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---
The main event of ListBox is the list item click event OnClickItem(AItem:TSkinItem),  
The parameter AItem of this event is the clicked list item,  
TSkinItem is the base class of TSkinListBoxItem, TSkinListViewItem, and TskinTreeViewItem.  
Need to refer to the uSkinItems unit,  
As shown in the ListBox as shown below, I click on the list item, and a dialog box pops up to display the title of the list item. Item.Caption,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image001.png)


Switch to the event page in the property viewer string, double-click the blank to the right of OnClickItem,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image003.png)


code show as below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image005.png)

 
Need to refer to the uSkinItems unit,  
````delphi | pure
procedure TFrameListBox_UseItemDesignerPanel.lbSimpleClickItem(
AItem: TSkinItem);
begin
  ShowMessage(AItem.Caption);
end;
````
 
Click the list item to see the effect at runtime,  
As shown below, I clicked the Documents list item and a dialog box popped up to prompt Documents:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image007.png)



Next, I will explain the event mechanism of clicking list items when ListBox uses the design panel ItemDesignerPanel.  
The design panel ItemDesignerPanel can put many sub-controls on it to design the display style of the list items.  
Under normal circumstances, the HitTest property of the child control needs to be set to False, which means that the child control is only used for display.  
There is no need to trigger the mouse click event OnClick,  
In some cases, some buttons (or check boxes, CheckBox, etc.) need to be placed on the ItemDesignerPanel.  
Used to implement a different function than clicking on a list item,  
Then set the button's HitTest to True, which means that when the button is clicked, it responds to the button's OnClick event.  
Instead of responding to the ListBox.OnClickItem event,  
When the click is outside the button, the ListBox.OnClickItem event is responded to,  
 
To illustrate with an example:  
We put a button btnShowDetail on the ItemDesignerPanel,  
When this button is clicked, a dialog box will pop up to display the Detail of the list item,  
As shown below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image009.png)


Set the HitTest property of btnShowDetail to True,  
Indicates that it responds to its OnClick event when it is clicked,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image011.png)


The HitTest of other Image and Label controls is set to False,  
Then write the OnClick event of btnShowDetail, the code is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image013.png)

````delphi | pure
procedure TFrameListBox_UseItemDesignerPanel.btnShowDetailClick(Sender: TObject);
begin
  ShowMessage(Self.lbSimple.Prop.InteractiveItem.Detail);
end;
````
 
In it, the property ListBox.Prop.InteractiveItem is called,  
Indicates the list item where the button is currently clicked,  
Notice:    
InteractiveItem is only valid in the OnClick event triggered by clicking the child control,  
 
Run and click btnShowDetail to see the effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image015.png)



