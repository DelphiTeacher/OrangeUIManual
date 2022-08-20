---
nav:
  title: 控件公共属性
  path: /components
  order: 2
group:
  order: 22
---

## 矩形绘制参数TDrawRectParam

//是否填充
IsFill:Boolean
//填充的颜色
FillColor: TDrawColor
//是否圆角
IsRound:Boolean
//圆角宽高度
RoundWidth和RoundHeight:Double
//边框颜色
BorderColor:TDrawColor
//边框宽度
BorderWidth:Double
//边框
BorderEadges:TDRPBorderEadges
beLeft:         左边框
beTop:          上边框
beRight:        右边框
beBottom:       底边框
//边角
RectCorners:TDRPRectCorners
rcTopLeft:      左上角
rcTopRight:     右上角
rcBottomLeft:   左下角
rcBottomRight:  右下角
//是否是线段
IsLine:Boolean
//线段位置
LinePosition: TDRPLinePosition
lpLeft:     线段在左边
lpTop:      线段在上边
lpRight:    线段在右边
lpBottom:   线段在下边