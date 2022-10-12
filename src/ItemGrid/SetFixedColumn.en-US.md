---
title: Set fixed column
order: 2
nav:
  title: ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

The fixed column is also a less commonly used function. It fixes the specified number of columns on the left and keeps it still when sliding horizontally.  
We operate on the basis of simple use of tables

Set the FixedCols of the table to 1, indicating that the first column on the left remains fixed  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-58.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-59.png)

You will find that the header color of the fixed column has changed, and the color of the cell has also become much darker.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-60.png)

The default ItemGrid horizontal direction does not allow out-of-bounds scrolling, so we have to turn it on,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-61.png)

Run to see the effect, drag the table horizontally to the right, you can see that the column on the left does not move,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-62.png)

The relevant drawing parameters are as follows:

FixedColumnHeaderBackColor: The header background color of the fixed column  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-63.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-64.png)

RowBackColorMaterial: row background color
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-65.png)

BackColor: cell background color, used without distinguishing between odd and even rows
IsDiffOddAndEven: Whether to distinguish between parity lines
EvenBackColor: The cell background color of even rows
OddBackColor: cell background color for odd rows
IsDiffFixedCols: Whether to distinguish between fixed and non-fixed columns
FixedColsBackColor: The cell background color of the fixed column
FixedColsEvenBackColor: The cell background color of the fixed column even row
FixedColsOddBackColor: The cell background color of the fixed column odd row
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-66.png)

Drag the table horizontally to the left, and you can see that the column to the left has not moved.
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-67.png)
