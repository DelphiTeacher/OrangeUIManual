---
title: 属性与素材
order: 0
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox&ListView的Properties:TRadioButtonProperties里面的属性有:    
ItemHeight	Double	列表项高度  
ItemWidth	Double	列表项宽度  
Items	TSkinItems	列表项列表   
ItemLayoutType	TItemLayoutType	列表项的排列类型  
MultiSelect	Boolean	启用多选   
ItemWidthCalcType	TItemSizeCalcType	列表项宽度计算方式  
ItemHeightCalcType	TItemSizeCalcType	列表项高度计算方式  
IsAutoSelected	Boolean	  

ItemDesignerPanel	TItemDesignerPanel	默认的列表项设计面板  
Item1DesignerPanel	TItemDesignerPanel	  
Item2DesignerPanel	TItemDesignerPanel	  
Item3DesignerPanel	TItemDesignerPanel	   
Item4DesignerPanel	TItemDesignerPanel	  
FooterDesignerPanel	TItemDesignerPanel	分组脚的列表项设计面板  
HeaderDesignerPanel	TItemDesignerPanel	分组头的列表项设计面板  
SearchBarDesignerPanel	TItemDesignerPanel	搜索框的列表项设计面板  

SelectedItemHeight	Double	选中的列表项高度  
SelectedItemWidth	Double	选中的列表项宽度  

SelectedItem	TSkinItem	选中的列表项  
EditingItem	TSkinItem	获取当前编辑的项  
InteractiveItem	TSkinItem	获取当前交互的项  
PanDragItem	TSkinItem	平拖的列表项  
CenterItem	TSkinItem	居中的列表项  
MouseDownItem	TSkinItem	按下的列表项  
MouseOverItem	TSkinItem	停靠的列表项  

HorzScrollBarShowType	TScrollBarShowType	水平滚动条显示类型  
VertScrollBarShowType	TScrollBarShowType	垂直滚动条显示类型  
IsEnabledCenterItemSelectMode		居中选择模式  
DownloadPictureManager	TDownloadPictureManager	图片下载管理者  
SkinImageList	TSkinImageList	图标列表  
ItemColorType	TSkinItemColorType	列表项颜色类型  
ListLayoutsManager	TSkinListBoxLayoutsManager	列表逻辑  
IsEnabledCenterItemSelectMode	Boolean	  

EnableItemPanDrag	Boolean	启用列表项平拖  
ItemPanDragGestureDirection	TPanDragGestureDirectionType	  
ItemPanDragDesignerPanel	TItemDesignerPanel	  




列表项的属性有：
//标题  
Caption: String;  
//明细  
Detail: String;  

//图标(延迟创建,调用Icon属性时才会创建,避免资源占用过多)  
Icon:TBaseDrawPicture;  
//宽度,如果为-1,表示使用列表项的默认宽度ListBox.Prop.ItemWidth  
Width:Double;  

//颜色  
Color:TDelphiColor;  
//名字  
Name: String;  


//图片(延迟创建,调用Pic属性时才会创建,避免资源占用过多)  
Pic:TBaseDrawPicture;  
//标记  
Tag:Integer;  
//标记1  
Tag1:Integer;  
//列表项类型(决定根据哪个ItemDesignerPanel来绘制)  
ItemType:TSkinItemType;  

//颜色  
Color:TDelphiColor;  
//名字  
Name: String;  
//宽度,如果为-1,表示使用列表项的默认宽度ListBox.Prop.ItemWidth  
Width:Double;  

//明细1  
Detail1: String;  
//明细2  
Detail2: String;  
//明细3  
Detail3: String;  
//明细4  
Detail4: String;  
//明细5   
Detail5: String;  
//明细6  
Detail6: String;  
//附加数据字符串列表  
SubItems:TStringList;  
//隐藏或显示绑定的控件  
Accessory:TSkinAccessoryType;  





ListBox&ListView的SelfOwnMaterial:TSkinListBoxDefaultMaterial的素材:    
DrawItemBackColorParam	TDrawRectParam	列表项的背景颜色绘制参数  
DrawItemIconParam	TDrawPictureParam	列表项的图标绘制参数  
DrawItemCaptionParam	TDrawTextParam	列表项的标题绘制参数  
DrawItemDetailParam	TDrawTextParam	列表项的明细绘制参数  
DrawItemDetail1Param	TDrawTextParam	列表项的明细1绘制参数  
DrawItemDetail2Param	TDrawTextParam	列表项的明细2绘制参数  
DrawItemDetail3Param	TDrawTextParam	列表项的明细3绘制参数  
DrawItemDetail4Param	TDrawTextParam	列表项的明细4绘制参数  
DrawItemDetail5Param	TDrawTextParam	列表项的明细5绘制参数  
DrawItemDetail6Param	TDrawTextParam	列表项的明细6绘制参数  
DrawSpaceParam	TDrawRectParam	空白项绘制参数  
DrawItemDevideParam	TDrawRectParam	分隔线绘制参数  

IsSimpleDrawItemDevide	Boolean	是否简单绘制分隔线  
IsSimpleDrawGroupEndDevide	Boolean	是否简单绘制分组结束分隔线  
IsSimpleDrawGroupRoundRect	Boolean	是否简单绘制分组矩形  
IsSimpleDrawGroupBeginDevide	Boolean	是否简单绘制分组开始分隔线  
DrawGroupEndDevideParam	TDrawRectParam	分组结束分隔线绘制参数  
DrawGroupBeginDevideParam	TDrawRectParam	分组开始分隔线绘制参数  

ItemBackDownPicture	TDrawPicture	列表项的鼠标按下状态图片  
ItemBackHoverPicture	TDrawPicture	列表项的鼠标停靠状态图片  
ItemBackNormalPicture	TDrawPicture	列表项的正常状态图片  
ItemBackPushedPicture	TDrawPicture	列表项的按下状态图片  
DrawItemBackGndPictureParam	TDrawPictureParam	列表项的背景图片绘制参数  

DrawItemAccessoryPictureParam	TDrawPictureParam	列表项的展开图片绘制参数
ItemAccessoryPicture	TDrawPicture	列表项的展开图片

DrawCenterItemRectParam	TDrawRectParam	中心矩形块绘制参数
IsDrawCenterItemRect	Boolean	是否绘制中心矩形块
DefaultTypeItemMaterial	TSkinVirtualListItemMaterial	默认类型列表项绘制素材





拖一个ListBox到窗体上,  
双击ListBox就能弹出项目编辑器，  
用于添加、编辑、删除列表项，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)

点击项目编辑器上的”添加”按钮，  
添加多个ListBoxItem，  
并设置好ListBoxItem的标题和图标:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)


由于默认的ListBox没有自己的样式，  
会出现显示重叠的情况(标题默认在左上角，图标默认也显示原始尺寸)  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)


我们先调整一下图标,让它自适应大小,并且垂直居中:  
DrawItemIconParam.IsAutoFit设置为True,  
DrawItemIconParam.PictureVertAlign设置为pvaCenter，  
这样图标不会显示得太大:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)


接着我们调整标题，让它显示在图标的右边，并且字体稍微设大一点，  
DrawItemCaption.DrawFont.Size设置为14,  
DrawItemCaption.DrawRectSetting.Enabled设置为True，  
DrawItemCaption.DrawRectSetting.SizeType设置为dpstPixel，  
DrawItemCaption.DrawRectSetting.Left设置为65，  
DrawItemCaption.DrawRectSetting.Top设置为10，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)



上面图标显示得太大了，需要调整得小一点，  
DrawItemIconParam.DrawRectSetting.Enabled设置为True，  
DrawItemIconParam.DrawRectSetting.SizeType设置为dpstPixel，  
DrawItemIconParam.DrawRectSetting.Left设置6，  
DrawItemIconParam.DrawRectSetting.Height设置为50，  
DrawItemIconParam.DrawRectSetting.PositionVertType设置为dppvtCenter，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


再把ListBox的背景色设置成白色，  
SelfOwnMaterial.IsTransparent设置为False，  
SelfOwnMaterial.BackColor.IsFill设置为True，  
SelfOwnMaterial.BackColor.FillColor设置为白色，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)


还需完善下面两点，  
第一点是每个列表项之间添加分隔线，  
把SelfOwnMaterial.DrawItemDevideParam.IsFill设置为True就可以了,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image017.png)


第二点是鼠标点击列表项的时候显示淡灰的背景色，  
找到DrawItemBackColorParam.DrawEffectSetting.MouseDownEffect，  
EffectTypes设置为drpetFillColorChange和drpetIsFillChange，  
FillColor设置为LightGray,  
IsFill设置为True，  
在运行时用鼠标点击一下试试:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image019.png)



