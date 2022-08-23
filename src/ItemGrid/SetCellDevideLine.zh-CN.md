---
title: 设置单元格分隔线
order: 4
nav:
  title: 表格控件ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

示例一，表格的行分隔线  
默认是区分偶行的背景色的，所以没有加分隔线  
先把区分奇偶行的背景色去掉，  
Grid.SelfOwnMaterial.RowBackColorMaterial.IsDiffOddAndEven设置为False,  
表格的分隔线在Grid.SelfOwnMaterial.DrawGridCellDevideMatrial中设置的，  
IsDrawRowLine控制行分隔线是否显示,  
DrawRowLineParam控制行分隔线的颜色,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image.png)


IsDrawRowBeginLine用于控制行开始分隔线的显示  
IsDrawRowEndLine用于控制行结束分隔线的显示  
都设置为True,效果如下:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-1.png)


示例二，表格的列分隔线  
表格的分隔线在Grid.SelfOwnMaterial.DrawGridCellDevideMatrial中设置的，  
IsDrawColLine用于设置表格的列分隔线，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-2.png)


效果如下:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-3.png)


IsDrawColBeginLine用于控制列开始分隔线的显示  
IsDrawColEndLine用于控制列结束分隔线的显示  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-4.png)

  
效果如下:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-5.png)




