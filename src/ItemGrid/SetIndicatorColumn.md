---
title: Set indicator column
order: 1
nav:
  title: ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

The indicator column is only used to display the row number, of course, it can also be solved by adding a column, but the table basically has this function, so this function is done separately.
We operate on the basis of simple use of tables  

Set the table's IndicatorWidth to 30  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-45.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-46.png)



There will be an extra column on the left, but the line number is not displayed  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-47.png)

To set SelfOwnMaterial.IsDrawIndicatorNumber to True  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-48.png)


 
 
 
The relevant drawing parameters are as follows:  

DrawIndicatorHeaderBackColor: The background color of the indicator area  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-49.png)



The background color of the top left  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-50.png)


DrawIndicatorNumberParam: The text drawing parameter of the indication area  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-51.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-52.png)





DrawIndicatorCellBackColorMaterial: The background color of the cell in the indicator area  


BackColor: cell background color, used without distinguishing between odd and even rows  
IsDiffOddAndEven: Whether to distinguish between parity lines  
EvenBackColor: The cell background color of even rows  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-53.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-54.png)


OddBackColor: cell background color for odd rows  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-55.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-56.png)



DrawIndicatorDevideMaterial: The dividing line drawing material of the indicator area  

DrawIndicatorFooterCellBackColorMaterial: The background color drawing material of the statistical area below the indicator area  

IsDrawIndicatorNumber: Whether to draw the indicator number  



