---
title: Add checkbox to style
order: 2
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

Next we will introduce how to operate controls of ItemDesignerPanel to set properties of ListBoxItem when running ,  
We take the example of adding a CheckBox in ItemDesignerPanel ,  
This is the effect we want to achieve:  
If ListBoxItem’s Checked is True, then CheckBox displays checked,  
If ListBoxItem’s Checked is False, then CheckBox displays unchecked,  
And when we click CheckBox ,we can set ListBoxItem’s Checked.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image001.png)


First ,   
According to every ListBoxItem’s Checked to make CheckBox display whether checked,  
We can use event OnPrepareDrawItem of ListBox to complete,  
Call OnPrepareDrawItem when beginning to draw every ListBoxItem,  
In this event, you can set the properties of ItemDesignerPanel’s child controls according to ListBoxItem,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image003.png)


This is the code:  
uses unit uDrawCanvas and uSkinItems,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image005.png)

  
 procedure TFrameListBox_UseRunTimeBinding.lbFileListPrepareDrawItem(
  Sender: TObject; Canvas: TDrawCanvas;
  ItemDesignerPanel: TSkinFMXItemDesignerPanel; Item: TSkinItem;
  ItemRect: TRect);
Begin
  //Canvas is used for drawing ListBoxItem, TDrawCanvas is defined in uDrawCanvas,
  //Item is the ListBoxItem you are drawing, TSkinItem is defined in uSkinItems,
  //ItemRect, display rectangle of this ListBoxItem,
Self.chkItemChecked.Prop.StaticChecked:=Item.Checked;
end;

Next, set HitTest of CheckBox as True, to make it respond to the event of mouse clicking,
Write this code in event:
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image007.png)


procedure TFrameListBox_UseRunTimeBinding.chkItemCheckedClick(Sender: TObject);
begin
	//InteractiveItem is the ListBoxItem of mouse clicking, 
    Self.lbFileList.Properties.InteractiveItem.Checked:=
      Not Self.lbFileList.Properties.InteractiveItem.Checked;
end;





