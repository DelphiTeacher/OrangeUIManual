---
title: 在样式中添加复选框
order: 2
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

接下来要讲的在是运行时操作ItemDesignerPanel中的控件来设置列表项的属性，  
我们在ItemDesignerPanel中添加一个CheckBox来举例。  
要达到的效果:  
如果列表项的Checked为True,那么CheckBox显示打勾，  
如果列表项的Checked为False,那么CheckBox显示不打勾，  
并且点击CheckBox的时候可以设置列表项的Checked属性，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image001.png)


首先，  
根据每个列表项的Checked属性来让CheckBox显示是否勾选，  
这在ListBox的OnPrepareDrawItem事件中处理，  
OnPrepareDrawItem在每个列表项开始绘制的时候调用，  
可以在这个事件里面根据列表项来设置ItemDesignerPanel上子控件的属性:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image003.png)


代码如下:  
引用uDrawCanvas,uSkinItems这两个单元,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image005.png)


procedure TFrameListBox_UseRunTimeBinding.lbFileListPrepareDrawItem(  
Sender: TObject; Canvas: TDrawCanvas;  
ItemDesignerPanel: TSkinFMXItemDesignerPanel; Item: TSkinItem;  
ItemRect: TRect);  
Begin  
//Canvas用于绘制列表项，TDrawCanvas在uDrawCanvas中定义  
//Item是当前绘制的列表项，TSkinItem在uSkinItems中定义  
//ItemRect，此列表项的显示矩形  
Self.chkItemChecked.Prop.StaticChecked:=Item.Checked;  
end;  
 
接着，将CheckBox的HitTest设置成True,让其响应鼠标点击事件，  
在事件中写如下代码:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B3%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A).files/image007.png)


procedure TFrameListBox_UseRunTimeBinding.chkItemCheckedClick(Sender: TObject);  
begin  
//InteractiveItem是鼠标当前点击所在列表项。  
Self.lbFileList.Properties.InteractiveItem.Checked:=  
Not Self.lbFileList.Properties.InteractiveItem.Checked;  
end;  
 


