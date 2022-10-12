---
title: click event of the button in the list
order: 10
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

Add a click event to the button on the list item design panel,  
Mainly use the ListBox.Prop.InteractiveItem property,  
It represents the list item where the child control is clicked on the current design panel,

Prepare a ListBox,  
Add the following ItemDesignerPanel to the ListBox,  
And add three list items: Movies, Music, Documents,  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image001.png>)

Put a button on the ItemDesignerPanel,  
For example, the Name is set to "btnShowCaption"  
The button title is set to "Display Name",  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image003.png>)

Then set the background color of the button:  
SelfOwnMaterial.IsTransparent is set to False,  
SelfOwnMaterial.BackColor.IsFill is set to True,  
SelfOwnMaterial.BackColor.FilColor.Color is set to Deepskyblue,  
Then set the font center for the button:  
SelfOwnMaterial.DrawCaptionParam.FontVertAlign is set to fvaCenter,  
SelfOwnMaterial.DrawCaptionParam.FontHorzAlign is set to fhaCenter,  
The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image005.png>)

Then to achieve, click this button, a dialog box pops up, showing the title Item.Caption of the clicked list item,  
Set Button.HitTest to True, indicating that it responds to the click event OnClick,  
Double-click the Button and write the following code in the code editor:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image007.png>)

```delphi | pure
procedure TFrameListBox_UseItemDesignerPanel.btnShowCaptionClick(Sender: TObject);
begin
  ShowMessage(Self.lbSimple.Prop.InteractiveItem.Caption);
end;
```

Self.lbSimple.Prop.InteractiveItem represents the list item where the current button is clicked,  
Then we run the example, click the button, and see the effect:  
Click on the first list item, a dialog box pops up, showing "Movies",  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image009.png>)

Click on the third list item, a dialog box will pop up, showing "Documents",  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image011.png>)
