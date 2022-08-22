---
title: 用代码添加列表项
order: 7
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox添加Item的代码如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.10.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B10%20%E7%94%A8%E4%BB%A3%E7%A0%81%E6%B7%BB%E5%8A%A0%E5%88%A0%E9%99%A4Item).files/image001.png)

```delphi | pure
procedure TFrameListBox_ItemOperCode.btnAddItemClick(Sender: TObject);  
var  
  I: Integer;  
  AListBoxItem:TSkinListBoxItem;  
begin  
  //准备批量添加  
  Self.lbTicketProductList.Prop.Items.BeginUpdate;  
  try  
  //先清空所有Item  
  Self.lbTicketProductList.Prop.Items.Clear(True);  
    
  for I := 0 to 20-1 do  
  begin  
    //添加Item  
    AListBoxItem:=Self.lbTicketProductList.Prop.Items.Add;  
    AListBoxItem.Caption:=IntToStr(I)+'南靖土楼云水谣相当好玩你来不来';  
    AListBoxItem.Detail:='南靖土楼小区12栋';  
    AListBoxItem.Detail1:='109';  
    AListBoxItem.Detail2:='100';  
    //如果有图片的网址,那么可以直接指定Icon的Url  
    if I mod 2 = 0 then  
    begin  
      AListBoxItem.Icon.Url:='http://www.orangeui.cn/download/testdownloadpicturemanager/TicketProduct1.png';  
    end  
    else  
    begin  
      AListBoxItem.Icon.Url:='http://www.orangeui.cn/download/testdownloadpicturemanager/TicketProduct2.png';  
    end;  
    //      //如果图标是文件,则可以使用LoadFromFile  
    //      AListBoxItem.Icon.LoadFromFile(AFilePath);  
    //      //如果图标是数据流,则可以使用LoadFromStream  
    //      AListBoxItem.Icon.LoadFromStream(AMemoryStream);  
    end;  
    
  finally  
    Self.lbTicketProductList.Prop.Items.EndUpdate();  
  end;  
end;  
```

 
ListBox清空所有Item的代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.10.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B10%20%E7%94%A8%E4%BB%A3%E7%A0%81%E6%B7%BB%E5%8A%A0%E5%88%A0%E9%99%A4Item).files/image003.png)


```delphi | pure
procedure TFrameListBox_ItemOperCode.btnClearItemClick(Sender: TObject);  
var  
  I: Integer;  
  AListBoxItem:TSkinListBoxItem;  
begin  
  //准备批量添加  
  Self.lbTicketProductList.Prop.Items.BeginUpdate;  
  try  
    //清空所有Item  
    Self.lbTicketProductList.Prop.Items.Clear(True);  
    
  finally  
    Self.lbTicketProductList.Prop.Items.EndUpdate();  
  end;  
end;  
```
 
 
 
ListBox删除指定Item的代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.10.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B10%20%E7%94%A8%E4%BB%A3%E7%A0%81%E6%B7%BB%E5%8A%A0%E5%88%A0%E9%99%A4Item).files/image005.png)


```delphi | pure
procedure TFrameListBox_ItemOperCode.btnDelItemClick(Sender: TObject);  
begin  
  if Self.lbTicketProductList.Prop.Items.Count>0 then  
  begin  
    Self.lbTicketProductList.Prop.Items.Delete(0);
    //或使用Remove()  
    //Self.lbTicketProductList.Prop.Items.Remove(AListBoxItem);  
  end;  
end;  
```
 
 
 
 
ListBox插入Item的代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.10.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B10%20%E7%94%A8%E4%BB%A3%E7%A0%81%E6%B7%BB%E5%8A%A0%E5%88%A0%E9%99%A4Item).files/image007.png)


```delphi | pure
procedure TFrameListBox_ItemOperCode.btnInsertItemClick(Sender: TObject);  
var  
  AListBoxItem:TSkinListBoxItem;   
begin  
  //插入Item  
  AListBoxItem:=Self.lbTicketProductList.Prop.Items.Insert(0);  
  AListBoxItem.Caption:='南靖土楼云水谣相当好玩你来不来';  
  AListBoxItem.Detail:='南靖土楼小区12栋';  
  AListBoxItem.Detail1:='109';  
  AListBoxItem.Detail2:='100';  
  AListBoxItem.Icon.Url:='http://www.orangeui.cn/download/testdownloadpicturemanager/TicketProduct1.png';  
end;  
```
 
 