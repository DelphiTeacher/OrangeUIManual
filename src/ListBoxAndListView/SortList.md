---
title: Sort
order: 9
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

Sorting of ListBox list items,  
is to call the ListBox.Prop.Items.Sort(Compare: TListSortCompare); method,  
TListSortCompare = function (Item1, Item2: Pointer): Integer;  
   
Prepare an interface first,  
There is a Panel on the top, three buttons on the top, and a ListBox on the bottom, as shown in the following figure:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image001.png)


Click the "Name" button to sort by name (the name is stored in the Item.Caption property),  
Click the "Date" button to sort by date (the date is stored in the Item.Detail property),  
Click the "Size" button to sort by size (the size is stored in the Item.Detail property), 
ListBox adds the following four list items:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image003.png)


Next we want to achieve sorting by clicking the "Name" button,  
First define a sorting method,  
Method must be of type TListSortCompare = function (Item1, Item2: Pointer): Integer;  
As shown below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image005.png)

````delphi | pure
//Sort method by name in ascending order
function ListCompareByNameAsc(Item1, Item2: Pointer): Integer;
begin
  Result:=0;
  if LowerCase(TSkinListBoxItem(Item1).Caption)>LowerCase(TSkinListBoxItem(Item2).Caption) then
  begin
    Result:=1;
  end
  else if LowerCase(TSkinListBoxItem(Item1).Caption)<LowerCase(TSkinListBoxItem(Item2).Caption) then
  begin
    Result:=-1;
  end;
end;
````

Then we write the OnClick event of the "name" button:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image007.png)

````delphi | pure
procedure TFrameListBox_SortItems.btnSortByNameClick(Sender: TObject);
begin
  //sort by name
  Self.lbFileList.Properties.Items.Sort(ListCompareByNameAsc);
end;
````

Run, the effect is as follows, 5, 1, 3, 2:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image009.png)


Click the "Name" button, 1, 2, 3, 5, see, in ascending order:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image011.png)