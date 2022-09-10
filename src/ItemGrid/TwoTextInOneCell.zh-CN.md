---
title: 单元格显示两个字段
order: 6
nav:
  title: 表格控件ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

比如：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-9.png)   




1.设置表格列
-----------------
这个表格有四列，分别为商品名称、价格、数量、总计，  

右键表格，在弹出的菜单中选择“表格列编辑器”，添加以上四个列，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-10.png)  

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-11.png)  






点击商品名称列，可以看到列除了有一个BindItemFieldName用来绑定字段之外，  

还有一个BindItemFieldName1，用来绑定另外一个字段，  

将商品名称列的BindItemFieldName设置为ItemCaption，BindItemFieldName1设置为ItemDetail，  

再将价格列的绑定字段分别设置为ItemDetail1和ItemDetail2  

将数量列的绑定字段分别设置为ItemDetail3和ItemDetail4  

总计列的绑定字段设置为ItemDetail5和ItemDetail6，  





2.添加测试数据
-----------------

右键表格，在弹出菜单中点击“项目编辑器”，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-12.png)  




添加一个列表项，并且设置好它的Caption、Detail这些：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-13.png)  




目前表格显示是这样的，一个单元格中，两个字段的值是重叠显示在一起的，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-14.png)  




3.调整单元格文本和文本1的显示
-----------------
我们点开表格控件的SelfOwnMaterial.DrawColumnMaterial，这是表格列的默认绘制参数，  

可以看到里面有:  

BackColor:TDrawRectParam;//该列的列头背景  

DrawCaptionParam:TDrawTextParam;//列标题绘制参数  

DrawCellPicture:TDrawPictureParam;//列图片绘制参数  

DrawCellTextParam:TDrawTextParam;//单元格文本绘制参数  

DrawCellText1Param:TDrawTextParam;//单元格文本1的绘制参数  

DrawFooterCellTextParam:TDrawTextParam;//该列的统计文本绘制参数  

所以接下来我们需要设置DrawCellTextParam和DrawCellText1Param，  

先设置DrawCellTextParam，将它的字体调整为12，左边空出10个像素的边距即可  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-15.png)  




再设置DrawCellText1Param，字体略小，设置为11，左边也空出10个像素，字体颜色设置为灰色，并且显示在下面一点，也就是调整上边距为20，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-16.png)  




看下显示效果  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-17.png)  




商品名称列有点窄，我们将它的宽度设置为0.4，表示占40%的宽度，其他三列分别设置为0.2，表示分别占20%的宽度：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-18.png)  




效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-19.png)  




4.表格其他属性微调
-----------------
这个表格没有列头，所以我们先去掉列头，将ColumnHeaderHeight设置为0  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-20.png)  




效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-21.png)  




5.设置行分隔线
-----------------
我们先多添加几个列表项  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-22.png)  




找到设置表格分格线的地方：SelfOwnMaterial.DrawGridCellDevideMaterial，显示行分隔线和行尾分隔线，并将分隔线的颜色设置为浅灰色，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-23.png)  




显示效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-24.png)  




文本太上面了，我们调整下文本的上边距，最终效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/09/word-image-25.png)  





