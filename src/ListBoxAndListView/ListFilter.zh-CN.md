---
title: 列表过滤
order: 11
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox过滤的思路如下:  
遍历ListBox中的每个列表项，如果符合过滤条件，那么把列表项的Visible设置为True,反之，如果不符合过滤条件，就把列表项的Visible设置为False.  
 
先准备如下界面,顶部放一个Panel,  
上面放一个Edit用于输入过滤关键字，再在Edit上放一个ClearEditButton,  
底下放一个ListBox,用于显示过滤结果，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image001.png)


接下来设置Edit的ReturnKeyType为Search,表示回车键上的字母设置为”Search”,  
Edit的KillFocusByReturn设置为True,表示按回车键，Edit就失去焦点，隐藏虚拟键盘，  
 
再写一个DoFilter方法，用于关键字过滤，  
在方法中遍历每个列表项,判断关键字是否在列表项的Caption中，  
如果存在，则设置这个列表项显示，如果不存在，则不显示，  
并且加入简拼过滤的功能，在工程中用HzSpell.pas,  
在OrangeProjectCommon\HzSpell目录中，  
代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image003.png)

````delphi | pure
procedure TFrameListBox_FilterItems.DoFilter;
var
  I: Integer;
  AFilter:String;
  AListBoxItem:TSkinListBoxItem;
begin
  AFilter:=Trim(Self.edtFilter.Text);
  
  //过滤
  Self.lvGoodsList.Properties.Items.BeginUpdate;
  try
    
    for I := 0 to Self.lvGoodsList.Properties.Items.Count-1 do
    begin
    //名称过滤
    Self.lvGoodsList.Properties.Items[I].Visible:=(
          //没有输入过滤关键字,则全部显示
          (AFilter='')
          //关键字符合过滤条件
          or (Pos(AFilter,Self.lvGoodsList.Properties.Items[I].Caption)>0)
          //关键字符合过滤条件-简拼
          or (Pos(LowerCase(AFilter),GetHzPy(Self.lvGoodsList.Properties.Items[I].Caption))>0)
          );
    end;
    
  finally
    Self.lvGoodsList.VertScrollBar.Prop.Position:=0;
    Self.lvGoodsList.Properties.Items.EndUpdate;
  end;
end;
````
 
 
然后在Edit的OnChange事件和OnChangeTracking事件中调用这个过滤方法DoFilter,    
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
 
再在Edit.OnKeyUp事件中，也调用DoFilter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image007.png)


````delphi | pure
procedure TFrameListBox_FilterItems.edtFilterKeyUp(Sender: TObject;
var Key: Word; var KeyChar: Char; Shift: TShiftState);
begin
  if Key=vkReturn then
  begin
    //搜索
    DoFilter;
  end;
end;
````

 
然后我们运行一下这个示例:  
初始状态下所有列表项都是显示的,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image009.png)


输入百威,效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image011.png)


输入简拼A,效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image013.png)


输入简拼bgz,白瓜子的简拼，效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.15.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B15%20%E5%88%97%E8%A1%A8%E8%BF%87%E6%BB%A4).files/image015.png)



