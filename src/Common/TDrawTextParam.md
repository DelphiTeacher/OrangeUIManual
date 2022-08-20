---
nav:
  title: Common Properteis
  path: /components
  order: 2
group:
  order: 24

---

## TDrawTextParam
parameters while drawing text  
//you can use it to set font  
DrawFont: TDrawFont  
//when words are too long, whether to wrap it  
IsWordWrap:Boolean  
//when the screen can’t show whole font,type of trimming  
FontTrimming:TFontTrimmingType  
      fttNone:       no trimming  
      fttCharacter:  trim by characters  
      fftWord:       trim by words  
//style of horizontal align  
FontHorzAlign:TFontHorzAlign  
      fhaLeft:	     horizontal left  
      fhaCenter:     horizontal center  
      fhaRight:      horizontal right  
//style of vertical align  
FontVertAlign:TFontVertAlign  
      fvaTop:	     vertical top  
      fvaCenter:     vertical center  
      fvaBottom:     vertical bottom  
//whether to draw vertically  
IsDrawVert:Boolean  
      