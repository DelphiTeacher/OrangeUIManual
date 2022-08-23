---
title: 设置固定列
order: 2
nav:
  title: 表格控件ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

固定列也是不太常用的功能，将左边指定个数的列固定起来，水平滑动时保持不动。  
我们在会简单使用表格的基础上来操作  

将表格的FixedCols设置为1，表示左边第一列保持固定  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-58.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-59.png)



你会发现，固定列的表头颜色变了，单元格的颜色也变暗了许多  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-60.png)

默认ItemGrid水平方向是不允许越界滚动的，所以我们要开启它，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-61.png)


运行看一下效果，将表格水平向右拖动，可以看到左边的列没有移动，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-62.png)


 
 
 
相关的绘制参数如下:  

FixedColumnHeaderBackColor：固定列的表头背景色  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-63.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-64.png)






RowBackColorMaterial：行背景色  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-65.png)




BackColor：单元格背景色，不区分奇偶行的情况下使用  
IsDiffOddAndEven：是否区分奇偶行  
EvenBackColor：偶行的单元格背景色  
OddBackColor：奇行的单元格背景色  
IsDiffFixedCols：是否区分固定列和非固定列  
FixedColsBackColor：固定列的单元格背景色  
FixedColsEvenBackColor：固定列偶行的单元格背景色  
FixedColsOddBackColor：固定列奇行的单元格背景色  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-66.png)


将表格水平向左拖动，可以看到位左边的列也没有移动，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-67.png)





