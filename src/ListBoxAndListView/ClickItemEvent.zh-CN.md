---
title: 列表项点击事件
order: 14
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox的主要事件就是列表项点击事件OnClickItem(AItem:TSkinItem),  
这个事件的参数AItem就是所点击的列表项，  
TSkinItem是TSkinListBoxItem、TSkinListViewItem、TskinTreeViewItem的基类，  
需要引用uSkinItems单元，  
如下图的ListBox,我点击其中的列表项，弹出对话框显示列表项的标题Item.Caption,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image001.png)


在属性查看器串切换到事件页，双击OnClickItem右边的空白，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image003.png)


代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image005.png)

 
需要引用uSkinItems单元，  
````delphi | pure
procedure TFrameListBox_UseItemDesignerPanel.lbSimpleClickItem(
AItem: TSkinItem);
begin
  ShowMessage(AItem.Caption);
end;
````
 
运行时点击列表项看一下效果，  
如下图，我点击了Documents这个列表项弹出对话框提示Documents:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image007.png)


 
接下来讲解一下ListBox使用设计面板ItemDesignerPanel时点击列表项的事件机制，  
设计面板ItemDesignerPanel上面可以放很多子控件，用于设计列表项的显示样式，  
通常情况下子控件的HitTest属性需要设置为False,表示此子控件仅用于显示，  
不需要触发鼠标点击事件OnClick，  
某些情况下ItemDesignerPanel上面需要放一些按钮(或复选框CheckBox等)，  
用于实现与点击列表项不同的功能，  
那就要把按钮的HitTest设置为True,表示点击此按钮时响应按钮的OnClick事件，  
而不再响应ListBox.OnClickItem事件，  
当点击在按钮之外的地方时，才响应ListBox.OnClickItem事件，  
 
举例说明一下:  
我们在ItemDesignerPanel上面放一个按钮btnShowDetail，  
点击此按钮时弹出对话框显示列表项的Detail,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image009.png)


把btnShowDetail的HitTest属性设置为True,  
表示点击它时响应它的OnClick事件，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image011.png)


而其他的Image和Label控件的HitTest设置为False,  
再写btnShowDetail的OnClick事件，代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image013.png)

````delphi | pure
procedure TFrameListBox_UseItemDesignerPanel.btnShowDetailClick(Sender: TObject);
begin
  ShowMessage(Self.lbSimple.Prop.InteractiveItem.Detail);
end;
````
 
在里面调用了ListBox.Prop.InteractiveItem这个属性，  
表示当前点击按钮所在的列表项，  
注意:    
InteractiveItem仅在点击子控件触发的OnClick事件中有效，  
 
运行点击btnShowDetail看一下效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.18.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B18%20%E7%82%B9%E5%87%BB%E5%88%97%E8%A1%A8%E9%A1%B9%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86).files/image015.png)




