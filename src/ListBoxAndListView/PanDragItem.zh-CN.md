---
title: 列表项平移菜单
order: 6
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

在ListBox可以平拖列表项，在滑出的菜单中进行各种操作，  
比如常用的邮件APP,可以在滑出的菜单中删除某一封邮件，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image001.png)



实现步骤如下:  
拖一个ItemDesignerPanel到ListBox上，  
在ItemDesignerPanel上放两个按钮，  
如图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image003.png)


设置ListBox.Properties.ItemPanDragDesignerPanel为此ItemDesignerPanel,  
再设置ItemPanDragGestureDirection为ipdgdtLeft,表示手指从右向左拖动时滑出ItemDesignerPanel，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image005.png)


好了，我们来看下效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image007.png)


当ItemPanDragGestureDirection为ipdgdtRight时,表示手指从左向右拖动时滑出ItemDesignerPanel，  
如图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image009.png)


当点击ItemDesignerPanel中的其中一个按钮时，需要在该按钮的OnClick事件中调用ListBox的StopItemPanDrag方法来结束平拖:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.9.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B9%20%E5%B9%B3%E7%A7%BB%E5%88%97%E8%A1%A8%E9%A1%B9).files/image011.png)


procedure TFrameListBox_UseItemPanDrag.btnCallClick(Sender: TObject);  
begin  
Self.lbAppList.Prop.StopItemPanDrag;  
end;  
 
