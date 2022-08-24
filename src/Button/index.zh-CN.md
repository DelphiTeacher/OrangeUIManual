---
title: 属性与素材
order: 0.1
nav:
  title: 按钮Button
  path: /components
  order: 3
group:
  order: 30
---

按钮的Properties:TButtonProperties里面的属性有:  
IsAutoPush	Boolean	鼠标点击的时候是否自动设置按下属性  
StaticIsPushed	Boolean	静态地设置是否按下  
AutoSize	Boolean	自动设置尺寸   
SkinControlIntf	ISkinControl	皮肤控件接口    
SkinControl	TControl	皮肤控件  
AutoSize	Boolean	是否自动调整控件的尺寸  
IsPushed	Boolean	是否按下  
Icon	TDrawPicture	按钮图标  
PushedGroupIndex	Integer	按钮分组的下标  
PushedIcon	TDrawPicture	按下状态的按钮图标  
ButtonGroup	TSkinBaseButtonGroup	所属的按钮分组控件  
ButtonIndex	Integer	在按钮分组中的顺序下标  

按钮的SelfOwnMaterial:TSkinButtonDefaultMaterial里面的属性有:  
BackColor	TDrawPictureParam	背景颜色绘制参数		  
IsTransparent Boolean	是否需要绘制背景颜色		  
DrawCaptionParam	TDrawTextParam	按钮标题绘制参数  
DrawIconParam	TDrawPictureParam	按钮图标绘制参数  
NormalPicture	TDrawPicture	正常状态的背景图片  
DownPicture	TDrawPicture	鼠标按下状态的背景图片  
HoverPicture	TDrawPicture	鼠标停靠状态的背景图片  
DisabledPicture	TDrawPicture	禁用状态的背景图片  
PushedPicture	TDrawPicture	按下状态的背景图片  
FocusedPicture	TDrawPicture	得到焦点状态的背景图片  
DrawPictureParam	TDrawPictureParam	背景图片绘制参数  
DrawDetailParam	TDrawTextParam	明细的文本绘制参数  
DrawDetail1Param	TDrawTextParam	明细1的文本绘制参数  
		