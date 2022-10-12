---
title: Two texts in one cell
order: 6
nav:
  title: ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

for example:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-9.png)

## 1.Set up table columns

This table has four columns, namely commodity name, price, quantity, total,

Right-click the table, select "Table Column Editor" in the pop-up menu, and add the above four columns,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-10.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-11.png)

Click on the product name column, you can see that the column has a BindItemFieldName to bind the field,

There is also a BindItemFieldName1 to bind another field,

Set the BindItemFieldName of the item name column to ItemCaption and BindItemFieldName1 to ItemDetail,

Then set the binding fields of the price column to ItemDetail1 and ItemDetail2 respectively

Set the bound fields of the quantity column to ItemDetail3 and ItemDetail4 respectively

The bound fields of the total column are set to ItemDetail5 and ItemDetail6,

## 2.Add test data

Right-click the table and click "Project Editor" in the pop-up menu,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-12.png)

Add a list item and set its Caption and Detail:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-13.png)

The current table display is like this. In one cell, the values ​​of two fields are displayed together.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-14.png)

## 3.Adjust the display of cell text and text1

We click on SelfOwnMaterial.DrawColumnMaterial of the table control, which is the default drawing parameter of the table column,

It can be seen that there are:

BackColor:TDrawRectParam;//The column header background of this column

DrawCaptionParam:TDrawTextParam;//Column title drawing parameters

DrawCellPicture:TDrawPictureParam;//Column picture drawing parameters

DrawCellTextParam:TDrawTextParam;//Cell text drawing parameters

DrawCellText1Param:TDrawTextParam;//Drawing parameters of cell text1

DrawFooterCellTextParam:TDrawTextParam;//Statistical text drawing parameters of this column

So next we need to set DrawCellTextParam and DrawCellText1Param,

First set the DrawCellTextParam, adjust its font to 12, and leave a 10-pixel margin on the left.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-15.png)

Then set DrawCellText1Param, the font is slightly smaller, set to 11, 10 pixels are left on the left, the font color is set to gray, and it is displayed at the bottom, that is, adjust the top margin to 20,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-16.png)

Look at the display effect  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-17.png)

The product name column is a bit narrow, we set its width to 0.4, which means 40% of the width, and the other three columns are set to 0.2, which means 20% of the width:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-18.png)

The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-19.png)

## 4.Other properties of the table are fine-tuned

This table has no column headers, so we first remove the column headers and set the ColumnHeaderHeight to 0  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-20.png)

The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-21.png)

## 5.Set Line Separator

Let's add a few more list items first  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-22.png)

Find the place to set the grid line: SelfOwnMaterial.DrawGridCellDevideMaterial, display the line divider and line end divider, and set the color of the divider to light gray,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-23.png)

The display effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-24.png)

The text is too high, we adjust the top margin of the text, and the final effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-25.png)
