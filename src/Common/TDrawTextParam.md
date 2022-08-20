---
nav:
  title: Common Properties
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
      


## Practice: Set the caption font of the button
Next, give the button a title of "Login"，  
The font size is set to 14, the color is set to white, and it is centered，  
The font of the button title is set in SelfOwnMaterial.DrawCaptionParam，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image015.png)

Well, a color button is completed, the effect is as follows：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image017.png)
