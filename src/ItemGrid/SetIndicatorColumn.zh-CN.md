---
title: 设置指定列
order: 1
nav:
  title: 表格控件ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

指示列只是用于显示行号的，当然也可以通过添加一个列来解决，不过表格基本都是有这个功能的，所以单独做了这个功能。  
我们在会简单使用表格的基础上来操作  

将表格的IndicatorWidth设置为30  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-45.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-46.png)



左边会多出一列来，但是行号没有显示出来  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-47.png)

要将SelfOwnMaterial.IsDrawIndicatorNumber设置为True  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-48.png)


 
 
 
相关的绘制参数如下:  

DrawIndicatorHeaderBackColor：指示区的背景色  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-49.png)



左上角那一块的背景色  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-50.png)


DrawIndicatorNumberParam：指示区的文字绘制参数  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-51.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-52.png)





DrawIndicatorCellBackColorMaterial：指示区单元格的背景色  


BackColor：单元格背景色，不区分奇偶行的情况下使用  
IsDiffOddAndEven：是否区分奇偶行  
EvenBackColor：偶行的单元格背景色  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-53.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-54.png)


OddBackColor：奇行的单元格背景色  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-55.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-56.png)



DrawIndicatorDevideMaterial：指示区的分隔线绘制素材  

DrawIndicatorFooterCellBackColorMaterial：指示区下面统计区的背景色绘制素材  

IsDrawIndicatorNumber：是否绘制指示数字  



