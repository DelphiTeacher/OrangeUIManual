---
title: 处理列表中按钮的点击事件
order: 10
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

给在列表项设计面板上的按钮添加点击事件，  
主要是使用ListBox.Prop.InteractiveItem属性，  
它表示当前设计面板上子控件点击所在的列表项，  
 
准备好一个ListBox,  
在ListBox上添加如下ItemDesignerPanel,  
并且添加好三个列表项：Movies,Music,Documents,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image001.png)


在ItemDesignerPanel上面放一个按钮，  
比如Name设置为”btnShowCaption”  
按钮标题设置为”显示名称”，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image003.png)


再给按钮设置一下背景色:  
SelfOwnMaterial.IsTransparent设置为False,  
SelfOwnMaterial.BackColor.IsFill设置为True,  
SelfOwnMaterial.BackColor.FilColor.Color设置为Deepskyblue,  
再给按钮设置一下字体居中:  
SelfOwnMaterial.DrawCaptionParam.FontVertAlign设置为fvaCenter,  
SelfOwnMaterial.DrawCaptionParam.FontHorzAlign设置为fhaCenter,  
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image005.png)


然后要实现，点击这个按钮，弹出一个对话框，显示点击所在列表项的标题Item.Caption,  
把Button.HitTest设置为True,表示响应点击事件OnClick,  
双击这个Button,在代码编辑器中写下如下代码:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image007.png)

```delphi | pure
procedure TFrameListBox_UseItemDesignerPanel.btnShowCaptionClick(Sender: TObject);  
begin  
  ShowMessage(Self.lbSimple.Prop.InteractiveItem.Caption);  
end;  
```

Self.lbSimple.Prop.InteractiveItem表示当前按钮点击所在的列表项，  
然后我们运行一下示例，点击按钮，看一下效果:  
点击第一个列表项，弹出对话框，显示”Movies”,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image009.png)


点击第三个列表项，弹出对话框，显示”Documents”,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.14.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B14%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E6%B7%BB%E5%8A%A0%E6%8C%89%E9%92%AE%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6).files/image011.png)


