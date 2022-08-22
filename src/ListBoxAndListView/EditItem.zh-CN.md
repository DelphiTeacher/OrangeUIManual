---
title: 编辑列表项
order: 3
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

通常我们需要直接在列表框上面对列表项的数据进行编辑，  
下面以编辑列表项的Detail属性来举例,  
步骤如下:  
双击ListBox,在项目编辑器中添加三个列表项，  
列表项的标题用于表示商品名称，  
列表项的Detail属性用于表示需要购买的数量，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image001.png)


在ItemDesignerPanel上面放置一个Edit控件,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image003.png)


将Edit与列表项的Detail进行绑定，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image005.png)


现在Edit显示每个列表项的Detail属性了:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image007.png)


将列表项中Edit的文本居中显示,  
在Edit.SelfOwnMaterial.DrawTextParam中进行设置:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image009.png)


最后，在Edit的OnClick事件中，调用ListBox.StartEditingItem来启动编辑，  
代码示例如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B5%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E7%BC%96%E8%BE%91%E5%88%97%E8%A1%A8%E9%A1%B9).files/image011.png)


procedure TFrameListBox_UseItemEdit.edtCountClick(Sender: TObject);  
begin  
//启动编辑
Self.lbEditTest.Properties.StartEditingItem(  
Self.lbEditTest.Properties.MouseOverItem,  
edtCount,  
nil,  
edtCount.SkinControlType.FMouseDownPt.X,  
edtCount.SkinControlType.FMouseDownPt.Y  
);  
end;  
 
最后，可以调用ListBox.StopEditingItem来结束编辑  


