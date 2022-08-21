---
title: 绘制参数基类TDrawParam
order: 2
nav:
  title: 控件公共属性
  path: /components
  order: 2
group:
  order: 22
---

## 绘制参数基类TDrawParam

TDrawParam:所有绘制参数的基类, 提供基本的绘制参数

//透明度，0~255之间的值  
Alpha:Byte  
 
//当前状态，表示控件当前所处的状态  
EffectStates:TDPStates  
dpstMouseDown:    鼠标点击状态    
dpstMouseOver:    鼠标停靠状态  
dpstPushed:       按下状态  
 
绘制区域设置DrawRectSetting：可以设置绘制的相对区域，偏移等,  
位置和尺寸：Left,Top,Width,Height(单位根据SizeType属性)  
相对偏移：Right,Bottom(单位根据SizeType属性)  
是否启用：Enabled  
尺寸计算类型：SizeType(百分比dpstPercent,像素dpstPixel)  
水平位置：PositionHorzType(dpphtNone,dpphtLeft,dpphtCenter,dpphtRight)  
垂直位置：PositionVertType(dppvtNone,dppvtTop,dppvtCenter,dppvtBottom)  
//效果参数设置 (重要)：可以设置动态效果  
DrawEffectSetting:TDrawEffectSetting  
MouseDownEffect:  鼠标按下的效果设置  
MouseOverEffect:  鼠标停靠的效果设置  
PushedEffect:     按下状态的效果设置  
 
//绘制矩形设置 (重要)：可以自定义绘制矩形(位置)  
DrawRectSetting:TDrawRectSetting  
//是否启用自定义绘制矩形  
Enabled:Boolean  
//尺寸单位类型，是百分比还是像素为单位  
SizeType: TDPSizeType  
//位置  
Left,Top:Double  
//右边距  
Right:Double  
//底边距  
Bottom:Double  
//宽度  
Width:Double  
//高度  
Height:Double  
//水平位置类型  
PositionHorzType:TDPPositionHorzType  
dpphtNone:      无  
dpphtLeft:      水平居左  
dpphtCenter:    水平居中  
dpphtRight:     水平居右  
//垂直位置类型  
PositionVertType:TDPPositionVertType  
dppvtNone:      无  
dppvtTop:       垂直居上  
dppvtCenter:    垂直居中  
dppvtBottom:    垂直居下  

