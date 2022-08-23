---
title: 列表排序
order: 9
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox列表项的排序，  
就是调用ListBox.Prop.Items.Sort(Compare: TListSortCompare);方法，  
TListSortCompare = function (Item1, Item2: Pointer): Integer;  
   
先准备一个界面,  
顶部一个Panel,上面三个按钮,下面放个ListBox,如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image001.png)


点击”名称”按钮表示按名称排序(名称保存在Item.Caption属性)，  
点击”日期”按钮表示按日期排序(日期保存在Item.Detail属性)，  
点击”大小”按钮表示按大小排序(大小保存在Item.Detail属性)，  
ListBox添加如下四个列表项:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image003.png)


接下来我们要实现点击”名称”按钮排序,  
先定义一个排序方法，  
方法的类型必须为TListSortCompare = function (Item1, Item2: Pointer): Integer;  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image005.png)

```delphi | pure
//按名称升序排序方法  
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
```

然后我们写”名称”按钮的OnClick事件:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image007.png)

```delphi | pure
procedure TFrameListBox_SortItems.btnSortByNameClick(Sender: TObject);  
begin  
  //按名称排序  
  Self.lbFileList.Properties.Items.Sort(ListCompareByNameAsc);  
end;    
```

运行，效果如下，5，1，3，2:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image009.png)


点击”名称”按钮,1，2，3，5，看，按升序排列了:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.13.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B13%20%E5%88%97%E8%A1%A8%E6%8E%92%E5%BA%8F).files/image011.png)


