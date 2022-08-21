---
title: 文本绘制参数TDrawTextParam
order: 4
nav:
  title: 控件公共属性
  path: /components
  order: 2
group:
  order: 24
---

## 文本绘制参数TDrawTextParam
//字体  
DrawFont: TDrawFont  
//文本过长是否换行  
IsWordWrap:Boolean  
//文本显示不下时的截断类型  
FontTrimming:TFontTrimmingType  
fttNone:        不截断  
fttCharacter:   按字母截断  
fftWord:        按单词截断  
//水平对齐风格  
FontHorzAlign:TFontHorzAlign  
fhaLeft:    水平居左  
fhaCenter:  水平居中  
fhaRight:   水平居右  
//垂直对齐风格  
FontVertAlign:TFontVertAlign  
fvaTop:     垂直居上  
fvaCenter:  垂直居中  
fvaBottom:  垂直居下  
//是否垂直绘制  
IsDrawVert:Boolean  


## 实践：给按钮设置标题绘制参数
给按钮设置标题为”登录”，  
字体大小设置为14,颜色设置为白色，并且居中显示，  
按钮标题的字体在SelfOwnMaterial.DrawCaptionParam中设置，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image015.png)

好了，一个颜色按钮完成了,效果如下：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B1%20%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E8%83%8C%E6%99%AF%E8%89%B2).files/image017.png)
