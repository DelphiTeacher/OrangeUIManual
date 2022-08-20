---
nav:
  title: 控件公共属性
  path: /components
  order: 2
group:
  order: 22

---

## TDrawRectParam
parameters while drawing rectangle  
//whether fill this rectangle  
IsFill:Boolean  
//color of this filled rectangle  
FillColor: TDrawColor  
//whether the angle of rectangle is round  
IsRound:Boolean  
//width and height of round angle  
RoundWidth and RoundHeight:Double  
//color of border  
BorderColor:TDrawColor  
//width of border  
BorderWidth:Double  
//border of rectangle  
BorderEadges:TDRPBorderEadges  
      beLeft:   left border  
      beTop:    top border  
      beRight:  right border  
      beBottom:	bottom border  
//corner of rectangle  
RectCorners:TDRPRectCorners  
      rcTopLeft:     top left corner of rectangle  
      rcTopRight:    top right corner of rectangle  
      rcBottomLeft:  bottom left corner of rectangle  
      rcBottomRight: bottom right corner of rectangle  
//whether it is line  
IsLine:Boolean  
//position of line   
LinePosition: TDRPLinePosition  
      lpLeft:	the line is on the left  
      lpTop:	the line is on the top  
      lpRight:  the line is on the right  
      lpBottom: the line is on the bottom  
      