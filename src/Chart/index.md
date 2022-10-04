---
title: Properties and Material
order: 0.1
nav:
  title: Doc
  path: /components
  order: 17
group:
  title: Chart
  order: 170
---



The properties of the chart control are:
AxisItems:TSkinListViewItems，list of axis's coordinate   
SeriesList:TVirtualChartSeriesList，list of chart series  
ShowTooltip:Boolean，Whether to display the data item tooltip  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-14.png)     

The properties of the currently open materials are:：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-15.png)     
  
BarSizePercent:Double，The width of the column as a percentage of the width of each data item, 0.7 means 70%  
BarsStackType:Double，When there are multiple series, the superposition type of the columns, whether they are displayed side by side or covered  
  
MarginsLeft，MarginsTop，MarginsRight，MarginsBottom:Double，space left blank  
PieInfoVisible:Boolean，Whether instructions for drawing each sector are required  
PieRadiusPercent:Double，Percentage of the radius of the big circle  
PieInnerRadiusPercent:Double，The percentage of the radius of the inner hollow circle, used as a donut chart  
SeriesLegendListViewVisible:Boolean，Do I need a ListView showing series descriptions  
XAxisCaptionHeight:Double，The drawing height left for the X-coordinate tick title  
YAxisCaptionWidth:Double，The drawing width left for the Y-coordinate tick title  


The use steps are as follows：  
add a control  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-16.png)   


Add X-axis ticks，  
Right-click the control and select "Axis Items Editor" from the pop-up menu：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-17.png)   

The editor will pop up：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-18.png)   

Add coordinate ticks in the editor：    
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-19.png)   



Set up the chart series again：  
Select "Series List Editor" in the pop-up menu of the right-click control：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-20.png)   
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-21.png)   


Click the "New" button in the upper left corner to add，  
And set the title and chart type ChartType of this series, there are column chart sctBar, line chart sctLine and pie chart sctPie，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-22.png)   

Add data items to this series，  
Double-click DataItems to pop up the editor to add：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-23.png)   

Set title and value for each data item：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-24.png)   
  
The effect is as follows：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-25.png)   
  
  
Change the chart type：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-26.png)   
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-27.png)   





















 
 


