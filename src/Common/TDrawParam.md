---
nav:
  title: Common Properties
  path: /components
  order: 2
group:
  order: 22

---

## TDrawParam
means base class of all draw parameters  
//transparency: a number from 0 to 255  
Alpha:Byte  

//which state the control is currently in  
EffectStates:TDPStates  
      dpstMouseDown:    state when mouse click  
      dpstMouseOver:    state when mouse hover  
      dpstPushed:       state when pressed  
//you can use it to set dynamic effect  
DrawEffectSetting:TDrawEffectSetting  
     MouseDownEffect:   effect when mouse click  
     MouseOverEffect:   effect when mouse hover  
     PushedEffect:	    effect when pressed  
//you can use it to costomizely draw rectangle or its position   
DrawRectSetting:TDrawRectSetting  
//whether to use self-defined rectangle  
Enabled:Boolean  
//you can set the unit as percent or px  
SizeType: TDPSizeType  
//position  
Left,Top:Double  
//right margin  
Right:Double  
//bottom margin  
Bottom:Double  
//width  
Width:Double  
//height  
Height:Double  
//type of horizontal position  
PositionHorzType:TDPPositionHorzType  
     dpphtNone:	null  
     dpphtLeft:   horizontal left  
     dpphtCenter: horizontal center  
     dpphtRight:  horizontal right  
//type of vertical position  
PositionVertType:TDPPositionVertType  
     dppvtNone:   null  
     dppvtTop:    vertical top  
     dppvtCenter: vertical center  
     dppvtBottom: vertical bottom  
     