---
title: Properties and Material
order: 0.1
nav:
  title: ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

ItemGrid is actually just another display method of ListBox. It displays the list item Item in the form of a table, so it is essentially just a ListBox, so the way of adding data is the same as that of ListBox.  
First, add table columns  

Right-click on the table and select Table Column Editor  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image.png)




Pop up the list editor, click the New button in the upper left corner to create a new table column  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-1.png)


Table columns have the following properties:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-2.png)



BindItemFieldName is set to ItemCaption, indicating that the column displays the Caption property in Item  

Caption is the title of the column  

After setting, the column will be displayed  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-3.png)

Double-click the ItemGrid to pop up the list item editor, add a list item, and set the Caption to "Zhang San"  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-4.png)
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-5.png)





 
Let's introduce the properties of the table  
As I said before, ItemGrid is actually a ListBox, but the display method is different. Many properties are the same as ListBox, so you can refer to ListBox for property introduction.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-6.png)


Columns: list of table columns  
ColumnsHeaderHeight: header height  
FixedCols: Fixed number of columns  
FooterRowCount: The number of rows in the statistical area, 0 means not to display the statistical area, 1 means to display the statistical area  
FooterRowHeight: Statistical area row height  
IndicatorWidth: The width of the line number indicator area  
ReadOnly: Whether the table is read-only 
The following properties are inherited from ListBox:  
IsAutoSelected: Whether to click to automatically select 
IsRowSelect: row selection/cell selection toggle  
ItemHeight: cell row height  
RowHeight: same as ItemHeight  
SelectedItemHeight: The row height of the selected row  
ItemHeightCalcType: Whether the height of each row is fixed  
Items: List of list items  
ItemSpace: List item separation  
ItemSpaceType: List item separation type  
MultiSelect: Whether to support multiple selection  
 
IsEmptyContent: Whether the content is set to empty  
EmptyContentCaption: The title displayed when the content is empty  
EmptyContentControln: The control displayed when the content is empty  
EmptyContentDescription: The description displayed when the content is empty  
EmptyContentPicture: The picture displayed when the content is empty  
 
VertCanOverRangeTypes: Whether the vertical direction can cross the boundary  
VertScrollBarShowType: How the vertical scroll bar is displayed  
HorzCanOverRangeTypes: Whether the horizontal direction can cross the border  
HorzScrollBarShowType: How the horizontal scroll bar is displayed  
 
EnableAutoPullDownRefreshPanel: Whether to enable automatic pull-down refresh  
EnableAutoPullUpLoadMorePanel: Whether to enable automatic pull-up to load more  

 
Let's introduce the properties of the table column TSkinItemGridColumn  

BindItemFieldName: What properties in the Item are displayed in the table column, which can be selected by drop-down  

BindItemFieldName1: The table column can additionally display what attributes in the Item,  
  
Caption: The title of the table column  

FooterValue: Static value of table column statistics row  

FooterValueFormat: The display format of the statistics row of the table column, such as %.2f with two decimal places, and Format is used internally to display the content of the statistics row  

FooterValueType: The statistics type of the table column statistics row,  

IsUseDefaultGridColumnCaptionParam: Whether to use the column header drawing parameters of the default column material of the table 

IsUseDefaultGridColumnMaterial: Whether to use the default cell drawing parameters,  

If True, then the column uses the default cell drawing material Grid.SelfOwnMaterial.DrawColumnMaterial to draw the header and cells,  

If False, then the column uses its own SelfOwnMaterial to draw headers and cells for custom column drawing  


  
ItemDesignerPanel: The design panel used by the table column, used to customize the display content of the cell, and controls such as pictures and buttons can be added.  

PickList: dropdown options when column editing  

ReadOnly: Whether the cell in this column can be edited  

SelfOwnMaterial: The column's own drawing parameters  

Visible: whether the column is displayed  

Width: the width of the column  


 
Add one more show checkbox table column  

Add a "gender" column to display the Checked property of Item, so BindItemFieldName is set to ItemChecked,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-7.png)





Double-click the table, select the list item in the pop-up list item editor, and set the Checked property to True  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-8.png)





The cell will display a check box  


 
 
Add another table column to display the image  

Add the "Photo" column to display the Item's Icon property, so BindItemFieldName is set to ItemIcon,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-9.png)





Double-click the table, select the list item in the pop-up list item editor, and set a picture for the Icon  

After adding, because the picture is displayed in the original size by default, it is very large.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-10.png)  





Expand ItemGrid.SelfOwnMaterial.DrawColumnMaterial.DrawCellPictureParam,  

  
Set IsAutoFit to True  
PictureHorzAlign set to Center  
PictureVertAlign set to Center  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-11.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-12.png)




 
 
 
Introduce the drawing parameters of the table  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-13.png)



BackColor: the background color of the table  

ColumnHeaderBackColor: The background color of the header  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-14.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-15.png)







DrawCheckBoxColorMaterial: The material of the check box in the cell  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-16.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-17.png)







DrawColumnDevideMaterial: The drawing material of the header divider  

DrawColLineParam: Column Separator  

DrawRowLineParam: line divider 

IsDrawColBeginLine: whether to draw the column start dividing line  

IsDrawColEndLine: whether to draw the column end separator  

IsDrawColLine: whether to draw column separator lines  

IsDrawRowBeginLine: whether to draw the row start divider  

IsDrawRowEndLine: whether to draw the row end divider  

IsDrawRowLine: whether to draw a row divider  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-18.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-19.png)





DrawColumnMaterial: The default cell drawing material  

BackColor: cell background color  

DrawCaptoinParam: Column header drawing parameter  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-20.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-21.png)










DrawCellPictureParam: The picture drawing parameter of the cell  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-22.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-23.png)









  
DrawCellTextParam: cell content drawing parameters  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-24.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-25.png)









DrawCellText1Param: cell additional content drawing parameters  

DrawFooterCellTextParam: Statistical area content drawing parameters  





DrawGridCellDevideMaterial: The drawing parameters of the cell's divider  

DrawColLineParam: Column Separator  

DrawRowLineParam: line divider  

IsDrawColBeginLine: whether to draw the column start dividing line  

IsDrawColEndLine: whether to draw the column end separator  

IsDrawColLine: whether to draw column separator lines  

IsDrawRowBeginLine: whether to draw the row start divider  

IsDrawRowEndLine: whether to draw the row end divider  

IsDrawRowLine: whether to draw a row divider  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-26.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-27.png)







DrawIndicatorCellBackColorMaterial: The background color of the cell in the row number indication area  

DrawIndicatorDevideMaterial: Drawing material for dividing lines in the line number indication area  

DrawIndicatorFooterCellBackColorMaterial: The background color drawing material of the statistical area below the line number indication area  

DrawIndicatorHeaderBackColor: The background color of the line number indicator area  

DrawIndicatorNumberParam: Line number drawing parameter in the line number indication area  

DrawSelectedCellBackColorParam: The drawing parameters of the selected cell  

FixedColumnHeaderBackColor: The header background color of the fixed column  

FooterRowBackColorMaterial: The row background color material of the statistical area  

IsDrawIndicatorNumber: Whether to draw the indicator number  

RowBackColorMaterial: row background color  

DrawEmptyContentCaptionParam: Caption drawing parameter without data tip  

DrawEmptyContentDescriptionParam: Description drawing parameters without data tips  

DrawEmptyContentPictureParam: Picture drawing parameters without data hints  


   
Custom column drawing, such as cell font and alignment  

Add a column of "occupation" to display Item.Detail,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-28.png)




Edit the Detail value of each list item  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-29.png)





By default, the column is drawn according to ItemGrid.SelfOwnMaterial.DrawColumnMaterial, so the "occupation" column and the "name" column are unified. Now we want to customize the drawing of this column, set the IsUseDefaultGridColumnMaterial of this column to False  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-30.png)





We can see that the fonts of the cells in the column have changed, and they have become the initial state. Then we expand the SelfOwnMaterial.DrawCellTextParam of the Column and set it as follows 
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-31.png)




Align the cell font left, center vertically, font red, size 14,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-32.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-33.png)



 
 
String cell editing function  

First enable the table editing function and set ItemGrid.Properties.ReadOnly to False  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-34.png)





Run to see the effect, first select the line to be edited,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-35.png)




 
Then click the cell "Zhang San" to edit  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-36.png)





Changed to "Zhang Wu"  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-37.png)





Click elsewhere in the cell to end editing  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-38.png)




 
 
Checked cell editing function  

select row first 
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-39.png)




You can uncheck the cell by clicking on it  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-40.png)




 
 
Drop-down cell editing function  

Add a list of options to the "Occupation" column  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-41.png)




Run it again to see the effect  

Click on a cell to edit  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-42.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-43.png)






Select "Designer" and change it  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-44.png)





