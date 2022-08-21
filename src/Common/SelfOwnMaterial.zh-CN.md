---
title: 控件样式
order: 1
nav:
  title: 控件公共属性
  path: /components
  order: 1
group:
  order: 21
---

## 控件样式

## SelfOwnMaterial:TSkinControlMaterial;
Material-素材，素材就是图片，颜色，文本绘制参数等，  
SelfOwnMaterial，就是控件自己的皮肤素材以及绘制参数的设置，  
 
SelfOwnMaterial中最基本的两个属性是:  
BackColor:TDrawRectParam(背景色),  
IsTransparent:Boolean(是否背景透明),  
 
如果IsTransparent为False,  
那么会使用BackColor绘制背景，  
如果IsTransparent为True,  
那么控件就是背景透明的，  
 
比如按钮的素材有:  
正常状态下的背景图片NormalPicture，  
鼠标点击时的背景图片DownPicture，  
按钮标题的绘制参数DrawCaptionParam，  
背景图片的绘制参数DrawPictureParam,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.0.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E8%AD%A6%E5%91%8A;%E5%BF%85%E7%9C%8B).files/image003.png)
 

## MaterialUseKind:TMaterialUseKind;
素材使用类型
mukSelfOwn:     使用控件自身的素材
mukDefault:     使用皮肤包默认的素材
mukName:        指定使用皮肤包中某名称的素材
mukRef:         使用引用素材
 

## MaterialName:String;
素材名称(皮肤包里面的素材名称)，当MaterialUseKind设置为mukName时有效

 
## RefMaterial:TSkinMaterial;
引用的素材，当MaterialUseKind设置为mukRef时有效，可以指定公共素材模块中的素材

 

## KeepSelfOwnMaterial:Boolean;
是否保留自己的素材，如果为False，就会清空SelfOwnMaterial


## ComponentTypeUseKind:TComponentTypeUseKind;
组件类型使用类型
  ctukDefault使用默认的组件类型，
  ctukName则使用指定名称的组件类型
  
## ComponentTypeName:String;
组件类型名称,
比如”Default”,”Normal”
