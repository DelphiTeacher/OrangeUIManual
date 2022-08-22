---
title: Properties
order: 0
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

ListBox&ListView's Properties:TRadioButtonProperties has:    
ItemHeight Double List item height  
ItemWidth Double List item width  
Items TSkinItems list item list  
ItemLayoutType TItemLayoutType List item arrangement type  
MultiSelect Boolean Enables multiple selection  
ItemWidthCalcType TItemSizeCalcType List item width calculation method  
ItemHeightCalcType TItemSizeCalcType List item height calculation method  
IsAutoSelected Boolean  

ItemDesignerPanel TItemDesignerPanel Default list item design panel  
Item1DesignerPanel TItemDesignerPanel  
Item2DesignerPanel TItemDesignerPanel  
Item3DesignerPanel TItemDesignerPanel  
Item4DesignerPanel TItemDesignerPanel  
FooterDesignerPanel TItemDesignerPanel List item design panel for grouping feet  
HeaderDesignerPanel TItemDesignerPanel List item design panel for grouping headers  
SearchBarDesignerPanel TItemDesignerPanel The list item design panel of the search box  

SelectedItemHeight Double The height of the selected list item  
SelectedItemWidth Double The width of the selected list item  

SelectedItem TSkinItem selected list item  
EditingItem TSkinItem Get the currently edited item  
InteractiveItem TSkinItem Get the current interactive item  
PanDragItem TSkinItem flat dragged list item  
CenterItem TSkinItem Centered list item  
MouseDownItem TSkinItem pressed list item  
MouseOverItem TSkinItem docked list item  

HorzScrollBarShowType TScrollBarShowType Horizontal scroll bar display type  
VertScrollBarShowType TScrollBarShowType Vertical scroll bar display type  
IsEnabledCenterItemSelectMode Center selection mode  
DownloadPictureManager TDownloadPictureManager Picture download manager  
SkinImageList TSkinImageList Icon list  
ItemColorType TSkinItemColorType List item color type  
ListLayoutsManager TSkinListBoxLayoutsManager list logic  
IsEnabledCenterItemSelectMode Boolean  

EnableItemPanDrag Boolean Enables pan dragging of list items  
ItemPanDragGestureDirection TPanDragGestureDirectionType  
ItemPanDragDesignerPanel TItemDesignerPanel  








Item's Properties are：
Caption: String;  
Detail: String;  

Icon:TBaseDrawPicture;  
Width:Double;  

Color:TDelphiColor;  
Name: String;  

Pic:TBaseDrawPicture;  
Tag:Integer;  
Tag1:Integer;  
ItemType:TSkinItemType;  

Detail1: String;  
Detail2: String;  
Detail3: String;  
Detail4: String;  
Detail5: String;  
Detail6: String;  
SubItems:TStringList;  
Accessory:TSkinAccessoryType;  






ListBox&ListView's SelfOwnMaterial:TSkinListBoxDefaultMaterial has:  
DrawItemBackColorParam TDrawRectParam The background color drawing parameter of the list item  
DrawItemIconParam TDrawPictureParam Icon drawing parameter of list item  
DrawItemCaptionParam TDrawTextParam Caption drawing parameter of list item  
DrawItemDetailParam TDrawTextParam Detailed drawing parameters of list items  
DrawItemDetail1Param TDrawTextParam The detail 1 drawing parameter of the list item  
DrawItemDetail2Param TDrawTextParam List item detail 2 drawing parameters  
DrawItemDetail3Param TDrawTextParam The detail 3 drawing parameters of the list item  
DrawItemDetail4Param TDrawTextParam Detail 4 drawing parameters of the list item  
DrawItemDetail5Param TDrawTextParam List item detail 5 drawing parameters  
DrawItemDetail6Param TDrawTextParam List item detail 6 drawing parameters  
DrawSpaceParam TDrawRectParam blank item drawing parameter  
DrawItemDevideParam TDrawRectParam dividing line drawing parameters  

IsSimpleDrawItemDevide Boolean Whether to simply draw the divider  
IsSimpleDrawGroupEndDevide Boolean Whether to simply draw the group end divider  
IsSimpleDrawGroupRoundRect Boolean Whether to simply draw the grouping rectangle  
IsSimpleDrawGroupBeginDevide Boolean Whether to simply draw the group start divider  
DrawGroupEndDevideParam TDrawRectParam grouping end dividing line drawing parameters  
DrawGroupBeginDevideParam TDrawRectParam group start dividing line drawing parameters  

ItemBackDownPicture TDrawPicture The mouse down state picture of the list item  
ItemBackHoverPicture TDrawPicture The mouse-over state picture of the list item  
ItemBackNormalPicture TDrawPicture Normal state picture of list item  
ItemBackPushedPicture TDrawPicture The picture of the pressed state of the list item  
DrawItemBackGndPictureParam TDrawPictureParam Background picture drawing parameter of list item  

DrawItemAccessoryPictureParam TDrawPictureParam Expanded picture drawing parameter of list item  
ItemAccessoryPicture TDrawPicture Expanded picture of list item  

DrawCenterItemRectParam TDrawRectParam Center rectangle drawing parameters  
IsDrawCenterItemRect Boolean Whether to draw the center rectangle  
DefaultTypeItemMaterial TSkinVirtualListItemMaterial Default type list item drawing material  




Drag a ListBox into form,  
Double click ListBox will pop up ItemsEditor,  
You can use ItemsEditor to add, edit or delete ListBoxItem,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)


Click button “add” on project editor,  
Add some ListBoxItem,  
Set the icon and caption of ListBoxItem,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)


Because of default ListBox doesn’t have its own style,  
The icon and caption will be displayed overlapping (caption will be displayed on left top corner by default, icon will be displayed original size also by default).  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png)

 
First we adjust icon to make it fit size automatically and vertically centered,  
Set DrawItemIconParam.IsAutoFit as True,  
Set DrawItemIconParam.PictureVertAlign as pvaCenter,  
So the icon won’t be displayed too big.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)


Next we adjust caption to make it displayed on the right of icon, and set the font a little bigger,  
Set DrawItemCaption.DrawFont.Size as 14,  
Set DrawItemCaption.DrawRectSetting.Enabled as True,  
Set DrawItemCaption.DrawRectSetting.SizeType as dpstPixel,  
Set DrawItemCaption.DrawRectSetting.Left as 65,  
Set DrawItemCaption.DrawRectSetting.Top as 10,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)



The icon above is too bigger, we need to make it smaller,  
Set DrawItemIconParam.DrawRectSetting.Enabled as True,  
Set DrawItemIconParam.DrawRectSetting.SizeType as dpstPixel,  
Set DrawItemIconParam.DrawRectSetting.Left as 6,  
Set DrawItemIconParam.DrawRectSetting.Height as 50,  
Set DrawItemIconParam.DrawRectSetting.PositionVertType as dppvtCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


Set background color of ListBox as white,  
Set SelfOwnMaterial.IsTransparent as False,  
Set SelfOwnMaterial.BackColor.IsFill as True,  
Set SelfOwnMaterial.BackColor.FillColor as white,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)


We still have two steps to do,  
First we need to add split line between every ListBoxItem,  
We only need to set SelfOwnMaterial.DrawItemDevideParam.IsFill as True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image017.png)


Second when mouse clicking ListBoxItem, the background color will be displayed as light gray,  
Find DrawItemBackColorParam.DrawEffectSetting.MouseDownEffect,  
Set EffectTypes as drpetFillColorChange and drpetIsFillChange,  
Set FillColor as LightGray,  
Set IsFill as true,  
Try to click mouse when you run it,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image019.png)




