---
title: 属性与素材
order: 0
nav:
  title: 表格控件ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

ItemGrid其实就是ListBox的另一种展示方式而已，以表格的形式来显示列表项Item，所以它本质上还只是一个ListBox而已，所以添加数据的方式和ListBox是一样的。  
首先，添加表格列  

右键表格，选择表格列编辑器  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image.png)




弹出列表编辑器，点击左上角的新建按钮来新建一个表格列  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-1.png)


表格列有如下属性：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-2.png)



BindItemFieldName设置为ItemCaption，表示该列显示Item中的Caption属性  

Caption是列的标题  

设置好之后列就显示出来了  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-3.png)





双击ItemGrid，弹出列表项编辑器，添加一个列表项，将Caption设置为”张三”  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-4.png)
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-5.png)






 
 
再来介绍一下表格的属性  
之前说了，ItemGrid其实就是一个ListBox，只是展示方式不一样而已，很多属性都是和ListBox是一样的，所以属性介绍可以参考ListBox  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-6.png)


Columns：表格列列表  
ColumnsHeaderHeight：表头高度  
FixedCols：固定列个数  
FooterRowCount：统计区行数，0表示不显示统计区，1表示显示统计区  
FooterRowHeight：统计区行高  
IndicatorWidth：行号指示区的宽度  
ReadOnly：表格是否只读  
下面这些属性继承自ListBox:  
IsAutoSelected：是否点击自动选中  
IsRowSelect：行选择/单元格选择切换  
ItemHeight：单元格行高  
RowHeight：同ItemHeight  
SelectedItemHeight：选中行的行高  
ItemHeightCalcType：每行高度是否固定  
Items：列表项列表  
ItemSpace：列表项分隔  
ItemSpaceType：列表项分隔类型  
MultiSelect：是否支持多选 
 
IsEmptyContent：内容是否设置为空  
EmptyContentCaption：内容为空时显示的标题  
EmptyContentControln：内容为空时显示的控件  
EmptyContentDescription：内容为空时显示的描述  
EmptyContentPicture：内容为空时显示的图片  
 
VertCanOverRangeTypes：垂直方向是否可以越界  
VertScrollBarShowType：垂直滚动条的显示方式  
HorzCanOverRangeTypes：水平方向是否可以越界  
HorzScrollBarShowType：水平滚动条的显示方式  
 
EnableAutoPullDownRefreshPanel：是否启动自动下拉刷新  
EnableAutoPullUpLoadMorePanel：是否启动自动上拉加载更多  
PullDownRefreshPanel：向下兼容  
PullUpLoadMorePanel：向下兼容  
 
 
 
再介绍一下表格列TSkinItemGridColumn的属性  

BindItemFieldName：表格列显示Item中的什么属性，可以下拉选择  

BindItemFieldName1：表格列可以附加显示Item中的什么属性，  
  
Caption：表格列的标题  

FooterValue：表格列统计行的静态值  

FooterValueFormat：表格列统计行的显示格式，比如保留两位小数%.2f，内部是用Format来显示统计行的内容的  

FooterValueType：表格列统计行的统计类型，  

IsUseDefaultGridColumnCaptionParam：是否使用表格默认列素材的列标题绘制参数  

IsUseDefaultGridColumnMaterial：是否使用默认的单元格绘制参数，  

如果为True，那么该列使用默认的单元格绘制素材Grid.SelfOwnMaterial.DrawColumnMaterial来绘制表头和单元格，  

如果为False，那么该列使用自己的SelfOwnMaterial来绘制表头和单元格，用于自定义列的绘制  


  
ItemDesignerPanel：表格列所使用的设计面板，用于自定义单元格的显示内容，可以加入图片、按钮等控件。  

PickList：当列编辑时的下拉选项  

ReadOnly：该列单元格是否可以编辑  

SelfOwnMaterial：该列自己的绘制参数  

Visible：该列是否显示  

Width：该列的宽度  


 
 
再添加一个显示勾选框表格列  

添加“性别”列，用于显示Item的Checked属性，所以BindItemFieldName设置为ItemChecked，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-7.png)





双击表格，在弹出的列表项编辑器中选中将列表项，将Checked属性设置为True  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-8.png)





单元格就会显示一个勾选框  


 
 
再添加一个显示图片的表格列  

添加”照片“列，用于显示Item的Icon属性，所以BindItemFieldName设置为ItemIcon，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-9.png)





双击表格，在弹出的列表项编辑器中选中将列表项，给Icon设置一张图片  

添加好之后，由于图片默认显示的是原始尺寸，非常大了，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-10.png)





展开ItemGrid.SelfOwnMaterial.DrawColumnMaterial.DrawCellPictureParam，  

  
将IsAutoFit设置为True  
PictureHorzAlign设置为Center  
PictureVertAlign设置为Center  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-11.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-12.png)




 
 
 
介绍一下表格的绘制参数  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-13.png)



BackColor：表格的背景颜色  

ColumnHeaderBackColor：表头的背景色 
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-14.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-15.png)







DrawCheckBoxColorMaterial：单元格中勾选框的素材  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-16.png)  

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-17.png)







DrawColumnDevideMaterial：表头分隔线的绘制素材  

DrawColLineParam：列分隔线  

DrawRowLineParam：行分隔线  

IsDrawColBeginLine：是否绘制列开始分隔线  

IsDrawColEndLine：是否绘制列结束分隔线  

IsDrawColLine：是否绘制列分隔线  

IsDrawRowBeginLine：是否绘制行开始分隔线  

IsDrawRowEndLine：是否绘制行结束分隔线  

IsDrawRowLine：是否绘制行分隔线  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-18.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-19.png)








DrawColumnMaterial：默认的单元格绘制素材  

BackColor：单元格背景颜色  

DrawCaptoinParam：列标题绘制参数  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-20.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-21.png)










DrawCellPictureParam：单元格的图片绘制参数  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-22.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-23.png)









  
DrawCellTextParam：单元格内容绘制参数  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-24.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-25.png)










DrawCellText1Param：单元格附加内容绘制参数  

DrawFooterCellTextParam：统计区内容绘制参数  





DrawGridCellDevideMaterial：单元格的分隔线的绘制参数  

DrawColLineParam：列分隔线  

DrawRowLineParam：行分隔线  

IsDrawColBeginLine：是否绘制列开始分隔线  

IsDrawColEndLine：是否绘制列结束分隔线  

IsDrawColLine：是否绘制列分隔线  

IsDrawRowBeginLine：是否绘制行开始分隔线  

IsDrawRowEndLine：是否绘制行结束分隔线  

IsDrawRowLine：是否绘制行分隔线  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-26.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-27.png)








DrawIndicatorCellBackColorMaterial：行号指示区单元格的背景色  

DrawIndicatorDevideMaterial：行号指示区的分隔线绘制素材  

DrawIndicatorFooterCellBackColorMaterial：行号指示区下面统计区的背景色绘制素材  

DrawIndicatorHeaderBackColor：行号指示区的背景色  

DrawIndicatorNumberParam：行号指示区的行号绘制参数  

DrawSelectedCellBackColorParam：选中单元格的绘制参数  

FixedColumnHeaderBackColor：固定列的表头背景色  

FooterRowBackColorMaterial：统计区的行背景色素材  

IsDrawIndicatorNumber：是否绘制指示数字  

RowBackColorMaterial：行背景色  

DrawEmptyContentCaptionParam：无数据提示的标题绘制参数  

DrawEmptyContentDescriptionParam：无数据提示的描述绘制参数  

DrawEmptyContentPictureParam：无数据提示的图片绘制参数  


   
自定义列的绘制，比如单元格的字体和对齐  

再加一列”职业”，用于显示Item.Detail，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-28.png)





编辑好各列表项的Detail值 
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-29.png)





默认该列是根据ItemGrid.SelfOwnMaterial.DrawColumnMaterial来绘制的，所以”职业”列和”姓名”列是统一的，现在我们要自定义该列的绘制，就把该列的IsUseDefaultGridColumnMaterial设置为False  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-30.png)





我们可以看到该列的单元格的字体都变了，都变成初始状态了，然后我们展开Column的SelfOwnMaterial.DrawCellTextParam，设置如下  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-31.png)




让单元格字体左对齐，垂直居中，字体红色，14号大小,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-32.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-33.png)



 
 
字符串单元格编辑功能  

先启用表格编辑功能，将ItemGrid.Properties.ReadOnly设置为False  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-34.png)





运行看一下效果，先选中要编辑的行，    
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-35.png)




 
再点击”张三”这个单元格，就可以编辑了   
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-36.png)





改成”张五”  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-37.png)





点击单元格的其他地方就可以结束编辑   
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-38.png)




 
 
勾选型单元格编辑功能  

先选中行  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-39.png)




在点击勾选型单元格，就可以取消勾选 
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-40.png)




 
 
下拉型单元格编辑功能  

给”职业”列添加选项列表  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-41.png)




再运行看一下效果  

点击单元格进行编辑  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-42.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-43.png)






选择”设计师”，就改过来了  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-44.png)





