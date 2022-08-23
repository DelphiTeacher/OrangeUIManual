---
title: List filter
order: 11
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

The idea of ​​ListBox filtering is as follows:  
Traverse each list item in the ListBox, if it meets the filter conditions, set the Visible of the list item to True, otherwise, if it does not meet the filter conditions, set the Visible of the list item to False.  
 
First prepare the following interface, put a Panel at the top,  
Put an Edit on it to input filter keywords, and then put a ClearEditButton on Edit,  
Put a ListBox at the bottom to display the filtered results,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image001.png)


Next, set the ReturnKeyType of Edit to Search, indicating that the letter on the Enter key is set to "Search",  
Edit's KillFocusByReturn is set to True, which means that when the Enter key is pressed, Edit will lose focus and hide the virtual keyboard.  
 
Write another DoFilter method for keyword filtering,  
Traverse each list item in the method to determine whether the keyword is in the Caption of the list item,  
If it exists, set this list item to display, if it does not exist, it will not display,  
And add the function of simple spelling filtering, use HzSpell.pas in the project,  
In the OrangeProjectCommon\HzSpell directory,  
code show as below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image003.png)

````delphi | pure
procedure TFrameListBox_FilterItems.DoFilter;
var
  I: Integer;
  AFilter:String;
  AListBoxItem:TSkinListBoxItem;
begin
  AFilter:=Trim(Self.edtFilter.Text);
  
  //filter
  Self.lvGoodsList.Properties.Items.BeginUpdate;
  try
    
    for I := 0 to Self.lvGoodsList.Properties.Items.Count-1 do
    begin
    // filter by name
    Self.lvGoodsList.Properties.Items[I].Visible:=(
          //If no filter keyword is entered, all are displayed
          (AFilter='')
          //Keyword matches the filter criteria
          or (Pos(AFilter,Self.lvGoodsList.Properties.Items[I].Caption)>0)
          //Keywords match the filter conditions - simple spelling
          or (Pos(LowerCase(AFilter),GetHzPy(Self.lvGoodsList.Properties.Items[I].Caption))>0)
          );
    end;
    
  finally
    Self.lvGoodsList.VertScrollBar.Prop.Position:=0;
    Self.lvGoodsList.Properties.Items.EndUpdate;
  end;
end;
````
 
 
Then call this filter method DoFilter in the Edit's OnChange event and OnChangeTracking event,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image005.png)


````delphi | pure
procedure TFrameListBox_FilterItems.edtFilterChange(Sender: TObject);
begin
  DoFilter;
end;
 
procedure TFrameListBox_FilterItems.edtFilterChangeTracking(Sender: TObject);
begin
  DoFilter;
end;
````
 
In the Edit.OnKeyUp event, DoFilter is also called,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image007.png)


````delphi | pure
procedure TFrameListBox_FilterItems.edtFilterKeyUp(Sender: TObject;
var Key: Word; var KeyChar: Char; Shift: TShiftState);
begin
  if Key=vkReturn then
  begin
    //search
    DoFilter;
  end;
end;
````

 
Then let's run the example:  
All list items are displayed in the initial state,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image009.png)


Enter Budweiser, the effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image011.png)

 
Enter simple spelling A, the effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image013.png)


Enter the simple spelling bgz, the simple spelling of white melon seeds, the effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image015.png)


