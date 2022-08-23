---
title: 自定义列样式
order: 3
nav:
  title: 表格控件ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

给列绑定设计面板  

添加一个列，标题取为”操作”，  

拖一个设计面板在表格上，取名为idpOperation  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-81.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-82.png)






放一个按钮在设计面板idpOperation中，命名为btnDelRow  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-83.png)





整列就会显示成该设计面板的样子的  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-84.png)





 
自定义每行设计面板的显示，比如指定某行按钮不可用  

双击ItemGrid.OnPrepareDrawItem事件，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-85.png)





让Caption为”张三”的项的按钮可用，其他的项不可用  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-86.png)





运行效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-87.png)




 
 
 
给设计面板上的控件添加事件，比如删除所在行  

为了让按钮响应点击事件，需要将HitTest设置为True，不然不会响应  

双击按钮btnDelRow的OnClick事件，写如下代码:  


//删除所在行  
Self.SkinFMXItemGrid1.Prop.Items.Remove(SkinFMXItemGrid1.Prop.InteractiveItem);  

SkinFMXItemGrid1.Prop.InteractiveItem表示按钮所在行。  

点击之后，该行就被删除了  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-88.png)






