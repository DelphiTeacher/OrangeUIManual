---
title: 属性与素材
order: 0.1
nav:
  title: 文档
  path: /components
  order: 17
group:
  title: 图表控件Chart
  order: 170
---



图表控件的属性有：  
AxisItems:TSkinListViewItems，坐标刻度的列表  
SeriesList:TVirtualChartSeriesList，图表序列的列表  
ShowTooltip:Boolean，是否需要显示数据项提示框  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-14.png)     

目前开放出来的素材的属性有：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-15.png)     
  
BarSizePercent:Double，柱子的宽度占每个数据项宽度的百分比，0.7表示占70%  
BarsStackType:Double，多个序列时，柱子的叠加类型，是并排显示还是覆盖上去  
  
MarginsLeft，MarginsTop，MarginsRight，MarginsBottom:Double，留空的间隔  
PieInfoVisible:Boolean，是否需要绘制每个扇形的说明  
PieRadiusPercent:Double，大圆的半径所占百分比  
PieInnerRadiusPercent:Double，内部空心小圆的半径所占百分比，用作环形图时使用  
SeriesLegendListViewVisible:Boolean，是否需要显示序列说明的ListView  
XAxisCaptionHeight:Double，留给X坐标刻度标题的绘制高度  
YAxisCaptionWidth:Double，留给Y坐标刻度标题的绘制宽度  


使用步骤如下：  
添加一个控件  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-16.png)   


添加X轴刻度，  
右键控件，在弹出的菜单中选择“坐标刻度列表编辑器”：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-17.png)   

会弹出编辑器：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-18.png)   

在编辑器中添加好坐标刻度：    
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-19.png)   



再设置图表序列：  
在控件右键弹出的菜单中选择“序列列表编辑器”：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-20.png)   
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-21.png)   


点击左上角的“新建”按钮进行添加，  
并设置这个序列的标题和图表类型ChartType，有柱状图sctBar、线状图sctLine和饼状图sctPie，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-22.png)   

再给这个序列添加数据项，  
双击DataItems即可弹出编辑器进行添加：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-23.png)   

给每个数据项设置标题和值Value：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-24.png)   
  
效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-25.png)   
  
  
改下图表类型：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-26.png)   
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-27.png)   





















 
 


