---
title: Set cell divide line
order: 4
nav:
  title: ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

Example 1, row separators for tables  
The default is to distinguish the background color of even lines, so there is no separation line  
First remove the background color that distinguishes the parity row,  
Grid.SelfOwnMaterial.RowBackColorMaterial.IsDiffOddAndEven is set to False,  
The dividing line of the table is set in Grid.SelfOwnMaterial.DrawGridCellDevideMatrial,  
IsDrawRowLine controls whether the row divider is displayed,  
DrawRowLineParam controls the color of the line divider,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image.png)


IsDrawRowBeginLine is used to control the display of the line start divider  
IsDrawRowEndLine is used to control the display of the line end divider  
All set to True, the effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-1.png)


Example 2, column divider of a table  
The dividing line of the table is set in Grid.SelfOwnMaterial.DrawGridCellDevideMatrial,  
IsDrawColLine is used to set the column separator line of the table,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-2.png)


The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-3.png)


IsDrawColBeginLine is used to control the display of the column start divider  
IsDrawColEndLine is used to control the display of the column end separator  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-4.png)

  
The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-5.png)



