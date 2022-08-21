---
title: 使用代码设置控件素材
order: 10
nav:
  title: 控件公共属性
  path: /components
  order: 1
group:
  order: 29
---

## 使用代码设置控件素材
由于OrangeUI特殊的原因，  
SelfOwnMaterial的类型默认是TSkinControlMaterial，  
TSkinControlMaterial是素材的基类型，  
拥有BackColor和IsTransparent两个重要的属性，  
每个控件都有自己类型的SelfOwnMaterial,  
比如按钮默认的SelfOwnMaterial实际的类型是TSkinButtonDefaultMaterial,  
TSkinButtonDefaultMaterial的继承关系为:  
TSkinButtonDefaultMaterial->TSkinButtonMaterial->TSkinControlMaterial,  
因此要在代码中设置控件的素材，  
需要使用控件的SelfOwnMaterialToDefault属性，  
把SelfOwnMaterial转换为TSkinButtonDefaultMaterial类型，  
 
比如我要设置按钮的背景色为白色:  
Button.SelfOwnMaterialToDefault.BackColor.FillColor.Color:=TAlphaColorRec.White;  
 
举例:  
在窗体上拖一个FMXButton,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image001.png)

在按钮的点击事件中，写上如下代码:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image003.png)

procedure TFrameSetBackColor.btnSetColorByCodeClick(Sender: TObject);  
begin  
   
SkinFMXButton3.Caption:='我是代码设置的按钮';  
   
//设置按钮为不透明  
SkinFMXButton3.SelfOwnMaterialToDefault.IsTransparent:=False;  
//按钮背景颜色填充  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.IsFill:=True;  
//设置为圆角  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.IsRound:=True;   
//按钮背景颜色设置为蓝色  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.FillColor.Color:=TAlphaColorRec.Cornflowerblue;  
//按钮背景颜色鼠标点击效果  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.DrawEffectSetting.MouseDownEffect.CommonEffectTypes:=[dpcetAlphaChange];  
//按钮标题字体设置为白色  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontColor:=TAlphaColorRec.White;   
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontSize:=14;  
//按钮标题垂直居中  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontVertAlign:=TFontVertAlign.fvaCenter;  
//按钮标题水平居中  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontHorzAlign:=TFontHorzAlign.fhaCenter;  
//按钮标题鼠标点击效果  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.DrawEffectSetting.MouseDownEffect.CommonEffectTypes:=[dpcetAlphaChange];  
   
end;  
   
然后我们运行这个示例:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image005.png)

点击按钮看一下效果:  
看，按钮的素材都设置好了，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image007.png)
