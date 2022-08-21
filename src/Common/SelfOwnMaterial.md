---
title: Control Style
order: 1
nav:
  title: Common Properties
  path: /components
  order: 1
group:
  order: 21
---

## Control Style

## SelfOwnMaterial:TSkinControlMaterial;
Material: it means pictures, color, draw parameters of text,  
SelfOwnMaterial:it means control’s own skin or draw parameters etc.  
The two basic properties of SelfOwnMaterial are  
BackColor:TDrawRectParam(background color)  
IsTransparent:Boolean(whether background is transparent),  
If IsTransparent is False,  
Then we will use Backcolor to draw background,  
If transparent is True,  
Then the control will be transparent,  
	
For example ,there are some materials of button :  
NormalPicture: means normal state of background picture  
DownPicture: means background picture when you click mouse   
DrawCaptionParam: means draw parameters of button’s caption  
DrawPictureParam: means draw parameters of background picture  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.0.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E8%AD%A6%E5%91%8A;%E5%BF%85%E7%9C%8B).files/image003.png)
 

## MaterialUseKind:TMaterialUseKind;
//usekind of material
mukSelfOwn:		means use SelfOwnMaterial
mukDefault:		means use default material of skin
mukName:		means use a named material of skin
mukRef:		    means use property RefMaterial


## MaterialName:String;
Material name (the material name in the skin pack), valid when MaterialUseKind is set to mukName
 
## RefMaterial:TSkinMaterial;
The referenced material, valid when MaterialUseKind is set to mukRef, can specify the material in the public material module
 

## KeepSelfOwnMaterial:Boolean;
whether store SelfOwnMaterial
           If it is false,then the control don’t use SelfOwnMaterial,
           And SelfOwnMaterial is nil.



## ComponentTypeUseKind:TComponentTypeUseKind;
usekind of component type
ComponentTypeUseKind:TComponentTypeUseKind;
  ctukDefault: means use default component type
	ctukName: means use assigned name of component type
 
## ComponentTypeName:String;
name of component-type,for example “Default”, “normal”
  