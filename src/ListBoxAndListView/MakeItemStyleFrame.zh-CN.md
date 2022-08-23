---
title: 使用样式Frame
order: 17
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

设计面板放在ListBox上的缺点-不能复用：  
用旧的方法，必须在每个ListBox上面都放置一个设计面板，比如示例OrangeUISampleOfTutorial中的一个页面ListViewFrame_TestComplexLayout.pas：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image.png)


红框里面这个设计面板是常用的一个样式，被用来当做菜单项，  
如果我在另一个页面也想用这个样式，用旧的方法就必须把这个设计面板复制过来，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-1.png)


使用起来非常复杂，而且，当界面上有多个设计面板的时候，设计界面会显示非常的杂乱。比如下面这个页面：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-2.png)


因此，为了解决这个问题，ListBox加入了指定列表项样式的属性,  
比如DefaultItemStyle：String，用于指定ItemType为sitDefault的列表项的样式，  
HeaderItemStyle：String，用于指定ItemType为ditHeader时的列表项样式  
等等  
使用步骤如下：  


首先需要安装控件包中的OrangeUIStyles包。  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-3.png)


列表项样式其实是一个包含有设计面板的Frame。这个包里面都是设计好的常用的列表项样式Frame,它们都在OrangeUIStyles目录中，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-4.png)






现在我介绍一下如何为ListBox指定默认列表项样式：  

先在OrangeUIStyles包中找到自己需要的列表项样式Frame  

根所文件名的含义，比如ListItemStyleFrame_IconTopCenter_CaptionBottomCenterBlack.pas，表明这个样式是图标在上面，标题在底部，并且字体是黑色的。  

我们双击打开查看一下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-5.png)


这个Frame里面就只有一个设计面板，右边那个是默认状态下的显示效果，右下边那个是选中状态下的显示效果。  

我们看一下这个Frame代码的initialization部分，是一段样式注册代码：  

RegisterListItemStyle('IconTopCenter_CaptionBottomCenterBlack',TFrameListItemStyle_IconTopCenter_CaptionBottomCenterBlack);  

表明这个样式的名称为：IconTopCenter_CaptionBottomCenterBlack  

接下来我们将这个样式使用到ListBox上面，设置该ListView的DefaultItemStyle为IconTopCenter_CaptionBottomCenterBlack之后 ，列表顶就显示为该样式。  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-6.png)


需要在该页面中引用该样式  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-7.png)


如果我们在另一个页面也想用这个样式，非常简单，用同样的设置即可  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-8.png)


使用列表项样式的特殊处理-子控件的点击事件：  

ListBox加入了OnClickItemDesignerPanelChild事件，  

OnClickItemDesignerPanelChild(Sender: TObject;AItem: TBaseSkinItem; AItemDesignerPanel: TSkinFMXItemDesignerPanel;AChild: TFmxObject);  

它会传入当前点击的列表项AItem和点击的子控件AChild过来，我们可以用AChild.Name来判断所点击的是哪个控件，再做相应的操作。  









列表项样式Frame的自定义  

比如有一个页面，我希望列表项样式中的标题字体大一点。  

有三个方法：  

ListBox中有一个OnNewListItemStyleFrameCacheInit事件，用于初始列表样项式Frame  

ListBox有一个OnPrepareDrawItem事件，会在绘制列表项时调用  

ListBox还有一个DefaultItemStyleConfig属性，用于配置列表项样式，比如我们在里面输入代码：  

lblItemCaption.Material.DrawCaptionParam.FontSize:=16;  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-9.png)

列表项中的显示的标题字体就变大了。  






如何添加一个列表项风格Frame:  

在OrangeUIStyles包中新建一个Frame  

在Frame中添加设置面板控件，  
Frame需要实现IFrameBaseListItemStyle接口，在GetItemDesignerPanel中返回设计面板。  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-10.png)


再在Frame单元的initialization部分和finalization加入如下代码：  

initialization  
RegisterListItemStyle(样式名称,当前Frame类);  
finalization  
UnRegisterListItemStyle样式);  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-11.png)


重新Install这个OrangeUIStyles包。   



