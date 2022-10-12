---
title: Edit item
order: 3
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

Usually we need to edit data of ListBoxItem on ListBox directly,  
Take an example of editing property Detail of ListBoxItem,  
These are steps:  
Double click ListBox, add three ListBoxItems in ItemsEditor,  
The caption of ListBoxItem is used for displaying names of goods,  
Property Detail of ListBoxItem represents the quantity we need to buy,  
Like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image001.png>)

Put a Edit on ItemDesignerPanel,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image003.png>)

Bind Edit with detail of ListBoxItem,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image005.png>)

Now Edit display Detail of every ListBoxItem,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image007.png>)

Make text in Edit of ListBoxItem display horizontally centered,  
You can set it in Edit.SelfOwnMaterial.DrawTextParam,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image009.png>)

Last, in event OnClick of Edit, call ListBox.StartEditingItem to start editing,  
These are codes:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image011.png>)

procedure TFrameListBox_UseItemEdit.edtCountClick(Sender: TObject);  
begin  
 //start editng  
 Self.lbEditTest.Properties.StartEditingItem(  
 Self.lbEditTest.Properties.MouseOverItem,  
 edtCount,  
 nil,  
 edtCount.SkinControlType.FMouseDownPt.X,  
 edtCount.SkinControlType.FMouseDownPt.Y  
 );  
end;

finally，call ListBox.StartEditingItem to finish editing.
