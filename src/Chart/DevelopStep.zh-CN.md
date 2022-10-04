---
title: 实现思路
order: 1
nav:
  title: 文档
  path: /components
  order: 17
group:
  title: 图表控件Chart
  order: 170
---






经常看到市面上的Web界面，一个个高大上，特别是图表这一块，效果非常炫，  
我也心动了，要是我的OrangeUI有一个漂亮的图表控件该多好啊，  
但是内心也是非常的忐忑呢，这一定很难吧，没这么多时间啊，我ECharts用的也好着呢，虽然要套个WebView，  
趁着中秋放假有三天假期，心一横，再难也要把你干掉！  

我看了几个Web界面和百度ECharts的效果，  
大致了解了这个具体要达到哪些功能。  
比如：  
柱状图表bar：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-43.png)     
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-44.png)     



鼠标移上去还有弹框，填充色有改变，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-45.png)     
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-46.png)     




可以叠起来，每个横坐标刻度可以显示多个柱子  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-47.png)     

柱子还可以横过来，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-48.png)     



其实简单的柱状图可以用ListBox来实现，因为每个柱子都可以看成是一个Item，Item里面显示一个进度条。  
图表样式可以切换：柱形、饼图、线图、圈图等  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-49.png)   
  

线形图line：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-50.png)     
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-51.png)     
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-52.png)   









饼图pie：    
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-53.png)     
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-54.png)     




  

  
首先需要考虑控件需要哪些属性  
比如柱形图  
需要有X轴的刻度列表，比如[Mon，Tue，Wed，Thu，Fri，Sat，Sun]，每一项，有标题，  
如底部红框中的这些：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-55.png)       
  
将这个属性取名为：XAxisItems:TSkinListViewItems  
  
还需要有Y轴的刻度列表，比如[0，50，100，150，200]，每一项是一个数值，用来展示统计百分比，  
当然这些刻度是自动计算出来的。  
如左边红框中的这些：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-56.png)       
  
将这个属性取名为：YAxisItems:TSkinListViewItems  
  
还需要序列Series，用来存储数据集，比如[120，200，150，80，70，110，130]，  
可以有多个序列，比如同时显示两个星期的数据，需要两个序列，以便进行比较，  
默认只要有一个就行，  
如下图是当一个图片有两个序列的样子：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-57.png)       

将这个属性取名为：SeriesList:TVirtualChartSeriesList  
每个Series的类型为TVirtualChartSeries，里面有DataItems:TVirtualChartSeriesDataItems用来存储数据项列  表，每个数据项有Value属性，用来存储数值  
序列的某一个数据项：TVirtualChartSeriesDataItem  



配置测试数据  
  //X轴坐标  
  FSkinVirtualChart.Properties.XAxisItems.Add.Caption:='Mon';  
  FSkinVirtualChart.Properties.XAxisItems.Add.Caption:='Tue';  
  FSkinVirtualChart.Properties.XAxisItems.Add.Caption:='Wed';  
  FSkinVirtualChart.Properties.XAxisItems.Add.Caption:='Thu';  
  FSkinVirtualChart.Properties.XAxisItems.Add.Caption:='Fri';  
  FSkinVirtualChart.Properties.XAxisItems.Add.Caption:='Sat';  
  FSkinVirtualChart.Properties.XAxisItems.Add.Caption:='Sun';  
    
  //序列数据  
  ASeries:=TVirtualChartSeries(FSkinVirtualChart.Properties.SeriesList.Add);  
  ASeries.Caption:='本星期金额';  
    
  ASeries.ChartType:=sctBar;//柱状图  
  
  ADataItem:=ASeries.DataItems.Add;  
  ADataItem.Caption:='Mon';  
  ADataItem.Value:=300;  
  
  ADataItem:=ASeries.DataItems.Add;  
  ADataItem.Caption:='Tue';  
  ADataItem.Value:=600;  
  
  ADataItem:=ASeries.DataItems.Add;  
  ADataItem.Caption:='Wed';  
  ADataItem.Value:=700;  
  
  ADataItem:=ASeries.DataItems.Add;  
  ADataItem.Caption:='Thu';  
  ADataItem.Value:=900;  
  
  ADataItem:=ASeries.DataItems.Add;  
  ADataItem.Caption:='Fri';  
  ADataItem.Value:=1300;  
  
  ADataItem:=ASeries.DataItems.Add;  
  ADataItem.Caption:='Sat';  
  ADataItem.Value:=1600;  
  
  ADataItem:=ASeries.DataItems.Add;  
  ADataItem.Caption:='Sun';  
  ADataItem.Value:=1800;  




绘制实现思路：  
因为图表控件需要支持多种类型，有柱状、线状、饼状等，  
所以我定义了TVirtualChartSeriesDrawer基类来绘制图表，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-58.png)     

继承出TVirtualChartSeriesBarDrawer来绘制柱状图，  
继承出TVirtualChartSeriesLineDrawer来绘制线状图，  
继承出TVirtualChartSeriesPieDrawer来绘制饼状图  



横坐标的绘制：
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-59.png)     

先在底部画一条横线，  
横坐标有多少刻度，将控件的宽度平均分，  
每一份上画上刻度标线，再画上刻度标题  




纵坐标的绘制：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-60.png)     

它的列表项的排列是反的，底下这个是最小的，最上面的那个数值是最大的  
序列数据设置完之后，要确定纵坐标的值区间，是多少，有几个？  
如何确定坐标刻度的最大值，刻度之间的间隔？  
比如[120，200，150，80，70，110，130]  
最大值是200，  
如上图，分五份，  
0，50，100，150，200  
直接参考现成的代码：  
https://blog.csdn.net/u013755728/article/details/50445559  
https://www.cnblogs.com/pengcl/p/3278388.html  
确定好刻度之后，有几个刻度，就将控件高度分成几份，  
然后画上横线和对应的刻度值  
  
  
  
  
确定序列Series中每个数据项的区域  
先要确定每个柱子的矩形区域  
不仅柱子要画在这个区域里面，  
还需要有鼠标移上去显示数据项提示框的功能，  
区域很好确定，X轴有几个刻度，就平确分成几份即可。  
  
    
确定序列Series中每个数据项的绘制path列表    
绘制Path，也就是绘制路径，了解过gdi+的同学就知道了，    
就相当于一支画笔在画布上的移动轨迹吧，可以画出任何图形。     
柱状有柱状的path，是一个矩形rectangle，  
线状有线状的path，是一条线line，  
饼状有饼状的path，是一个弧arc，  
然后确定柱子的高度  
柱子主要是确定每根柱子的百分比，  
根据当前Y轴刻度的最大值，计算出百分比  
根据百分比计算出柱子的绘制路径Path和矩形，  
放在数据项TVirtualChartSeriesDataItem.FBarPathDrawRect中去，  
  
并且需要一个绘制柱的矩形绘制参数，然后把填充色设置为蓝色  
绘制的代码如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-61.png)     
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-62.png)     
  
  
每个柱子都占满了，不好看，  
所以绘制参数需要加入：柱子宽度的百分比BarSizePercent，  
默认设置为0.5，表示占坐标轴刻度的一半，  
效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-63.png)     



数据项区域鼠标移动变色效果  
将判断柱子是否鼠标停靠状态的判断放入Items的布局管理TSkinListLayoutsManager.CustomMouseMove方法中去，让它去确定当前哪个Item是鼠标停靠的状态，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-64.png)      
  
数据项TVirtualChartSeriesDataItem加入PtInItem(TPointF)方法，用来判断鼠标是不是在数据项中，  
柱状图比较简单，只需要用PtInRect方法来判断点是否在矩形内即可，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-65.png)      
  
如果在里面，则表示鼠标停靠在上面，  
重绘一下，并且需要有变色的效果：  
效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-66.png)      




数据项区域鼠标移动弹出提示框  
鼠标移上去，会有提示框显示出来  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-67.png)      
  
弹窗用动态创建一个设计面板来做，  
有三项需要显示，一个是图表项的名称，比如是金额，一个是当前分类，是Mon还是Tue，一个是值，是200，还有一个是颜色，  
以上这些控件都动态创建出来  
再将它们画在图表控件上面，  
  
数据的绑定：  
X轴刻度名称，做为Item.Caption  
序列名称做为Item.Detail  
数据项的值做为Item.Detail1  
数据项的颜色做为Item.Color  
  
还得有阴影，  
每次重新赋值，重新计算一下弹窗的宽度，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-68.png)      





整理下，简单的柱状图就做好了  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-69.png)      

  
  
  


饼图的实现分析：  
画圆，需要一块正方形的区域，控件正中间，  
从正上方中间开始画一块块扇形，  
鼠标停靠效果，需要做到：  
有填充颜色加深，变大，  
如下图所示：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-70.png)      
  
圆一共有360度，每个数据项根据所占的百分比来分，  
一共12种颜色轮换，所以素材那里需要配置一个默认的颜色列表，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-71.png)      






为每个数据项生成扇形的绘制path  
先根据控件的尺寸，计算出所能绘制的圆的正方形区域和它的半径，  
再确定这个数据项所占百分比，  
比如一个数据项占25%，那么一个圆的25%，就是90度，  
那么这个扇形就需要90度，  
然后根据这个正方形区域和绘制起始角度来绘制扇形，  
画一个圆是简单的，  
效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-72.png)      





如何判断鼠标在某一个扇形里面
因为我在VCL下是使用GDI+来绘制，
GDI+有Region类，能根据扇形Path，生成一个Region，它有IsVisible方法用来判断鼠标是不是在这个区域内，将Region保存起来。
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-73.png)      

就可以判断出来了：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-74.png)      








在扇形边上要能有线条和标题来标记  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-75.png)      
  
找到扇形边的中心点，然后画一条折线，然后再画标题，这个比较难  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-76.png)      

先确定扇形边上的中心点坐标：  
我是参考的如下这篇博客：  
https://www.jianshu.com/p/87f738905e7f  
pointX = x + radius * cos(angle * PI / 2)  
pointY = y + radius * sin(angle * PI / 2)  
这些三角函数我已经全部忘光，还给老师了。  
线画出来了：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-77.png)      
  
说明这个点是计算正确了  
但是线条不是水平的，  
所以接下来再计算出来从圆心到这一点的延伸点，以便画一条标记线：  
找到了如下的代码：  
https://blog.csdn.net/weixin_41907774/article/details/103644618?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-103644618-blog-72953604.pc_relevant_aa_2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-103644618-blog-72953604.pc_relevant_aa_2&utm_relevant_index=1  
终于画出来了：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-78.png)      








左边的提示列表，比较简单，用一个ListView来实现即可
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-79.png)      









线状图的实现：  
线状图就简单了，生成点，用线连起来，然后在点上画一个小圆即可  
线状图的提示框不需要把颜色显示出来  
鼠标移动优化:  
用Region来判断可能会耗时，判断的时候，先指定大矩形区域，再指定小矩形区域，还在里面的话，再判断是否在region里面。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-80.png)      







让控件支持FireMonkey  
既然VCL下面都实现了，那么FMX也是很轻易的事情，只不过绘制引擎不一样，  
VCL下我用的是GDI+，而在FMX下面，我直接用控件的画布Canvas来画。  
问题1：FMX下判断鼠标是否在扇形内的问题  
原来图片我是在VCL下用GDI+实现的，GDI+能根据扇形的路径Path创建一个Region，有现成的方法判断某个点在不在这个区域内，但是很遗憾，FMX下没有，所以得另找方法了。  
解决方法：  
首先，判断鼠标位置与圆心的距离,如果比圆的半径大，那肯定不在里面，  
再判断鼠标位置和圆心的角度，如果角度在扇形的角度范围之内，那鼠标就在扇形里面，  
  
问题2：FMX下提示框的阴影的问题  
在FMX有TShadowEffect这个组件，可以给控件加上阴影效果，  
因为我这个提示框是自己画上去的，并不能直接使用TShadowEffect，  
看了FMX.Controls.pas，  
控件Paint之前先调用ApplyEffect来处理效果，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-81.png)      
    
TControl.ApplyEffect做了哪些事情呢？  
先调用TShadowEffect.ProcessEffect方法将控件绘制到FEffectBitmap上，  
然后生成根据FEffectBitmap生成阴影，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/aaab.png)      
  
阴影做为底图，再绘制一次控件到阴影上。  
我就按这种方使用TShadowEffect生成阴影，画在提示框底部，阴影就完成了。  
解决后的效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-82.png)      





解决在项目中实际使用中遇到的问题  
问题1：数据太多，饼图的时候，标题画不下挤在一起，不好看，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-83.png)      
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-84.png)      
  
  
解决方法：  
记录下每个数据项标题的绘制矩形，标题在右边的，左上角不能重叠，标题在右边的，右下角不能重叠，因为画的时候是顺时针开始画的。其实只要判断前一个画的数据项的标题矩形和现在要画的这个数据项标题矩形没有重叠即可。  
解决后的效果：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-85.png)      
  
  
    
  
问题2：添加好数据之后，图表不显示，需要重新计算并刷新  
  
问题3：当有多个序列的时候，比如同时显示两个线图，那么线的颜色要不一样，并且顶上需要显示哪个颜色代表什么序列。  
问题图片如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-86.png)      
  
解决：在绘制的时候，判断某个序列是第几个，然后从颜色列表中对应取第几个颜色  
解决后的效果：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-87.png)      
  
  
  
问题4：当有多个柱状序列的时候，重叠在一起了，有几个数据项被覆盖了，  
解决方法：  
提供一个属性，让用户可以选择是覆盖还是并排显示  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-88.png)      
  
解决后的效果如下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-89.png)      
  
  
  
  
安装控件   
建一个Package包工程，  
建个单元，实现一个Register方法，在这个方法里面调用Classes单元的RegisterComponents方法  
就能将控件安装到控件面板上去  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-90.png)        
  
第一个参数page:String，表示安装到哪个分类下，  
第二个参数ComponentClasses: array of TComponentClass，表示要安装哪些控件列表，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-91.png)      
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-92.png)      

  
  
  
  
处理设计时  
添加一个控件  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-93.png)      
  
  
设计时看不到任何属性，  
因为之前属性我都是public状态，设计时只能看到published公布状态的属性，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-94.png)      
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-95.png)      
  
所以只要将public改为published，再重新安装一遍控件，  
就出来了：    
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-96.png)      
    
添加X轴刻度，    
这个属性还不能编辑，    
给这个控件指定控件编辑器TVirtualChartEditor：  
同样需要注册一下：  
RegisterComponentEditor(TSkinVirtualChart,TVirtualChartEditor);  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-97.png)      
  
添加好X轴刻度：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-98.png)      
    
再给序列指定属性编辑器TVirtualChartSeriesListProperty：  
  RegisterPropertyEditor(TypeInfo(TVirtualChartSeriesList),  
                          TVirtualChartProperties,  
                          'SeriesList',  
                          TVirtualChartSeriesListProperty);  
双击属性就能弹出编辑器：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-99.png)      
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-100.png)      
  
  
  
添加一个序列：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-101.png)      
    
填上标题、图表类型  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-102.png)      
  
填上数据项列表  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-103.png)      
  
图表就显示出来了：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-104.png)      
  
改下图表类型：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-105.png)      
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/word-image-106.png)      
  
  
  
  
最后，准备好说明文档和示例  
打包发布，这样一个控件算是初步完成了，  
最终它将面临各种用户不同的应用，  
肯定还是会需要不断的调整、优化和增强。  
  
以上就是一个Delphi控件的诞生过程了，我写的非常的简略，相信大家有了一个初步的认识了。  
代码放在了Github上了，大家可以参考下：  
https://github.com/DelphiTeacher/OrangeUI/blob/main/OrangeUIControl/Source/Controls/uSkinVirtualChartType.pas  
  
  
题外话：  
1.开发图表的过程中，用到了很多数学方面的知识，奈何本人已经将它们还给老师了，感觉学以致用很重要，填鸭式的教育只能应付下考试，考完就忘。  
2.遇到了很多问题，网上都有答案，只是语言不一样，有java的，有C的等等，但是基本上语法都差不多，都能直接转成delphi  
3.实现一个功能，重要的是思路，只要有思路，用什么语言都能实现。  
  
  
图表控件将在国庆随着OrangeUI FMX 2.10版本发布出来，  
大家敬请期待！  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/09/imsu6nf9fzmxx1noz0.png)      



 


