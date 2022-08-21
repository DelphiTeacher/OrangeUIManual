---
title: Use code to set control material
order: 10
nav:
  title: Common Properties
  path: /components
  order: 1
group:
  order: 29
---

## Use code to set control material
Due to the special reasons of OrangeUI,  
The type of SelfOwnMaterial is TSkinControlMaterial by default,  
TSkinControlMaterial is the base type of the material,  
Has BackColor and IsTransparent two important properties,  
Each control has its own type of SelfOwnMaterial,  
For example, the actual type of the button's default SelfOwnMaterial is TSkinButtonDefaultMaterial,  
The inheritance relationship of TSkinButtonDefaultMaterial is:  
TSkinButtonDefaultMaterial->TSkinButtonMaterial->TSkinControlMaterial,  
Therefore, to set the material of the control in the code,  
Need to use the SelfOwnMaterialToDefault property of the control,  
Convert SelfOwnMaterial to TSkinButtonDefaultMaterial type,  

For example, I want to set the background color of the button to white:  
Button.SelfOwnMaterialToDefault.BackColor.FillColor.Color:=TAlphaColorRec.White;    
 
Example:  
Drag an FMXButton on the form,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image001.png)

In the click event of the button, write the following code:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image003.png)

procedure TFrameSetBackColor.btnSetColorByCodeClick(Sender: TObject);  
begin  
   
SkinFMXButton3.Caption:='我是代码设置的按钮';  
   
//set button to background opaque  
SkinFMXButton3.SelfOwnMaterialToDefault.IsTransparent:=False;  
//button background color fill  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.IsFill:=True;  
//set to rounded corners  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.IsRound:=True;   
//Button background color is set to blue  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.FillColor.Color:=TAlphaColorRec.Cornflowerblue;  
//button background color mouse click effect  
SkinFMXButton3.SelfOwnMaterialToDefault.BackColor.DrawEffectSetting.MouseDownEffect.CommonEffectTypes:=[dpcetAlphaChange];  
//Button title font set to white  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontColor:=TAlphaColorRec.White;   
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontSize:=14;  
//Button title vertically centered  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontVertAlign:=TFontVertAlign.fvaCenter;  
//Center the button title horizontally  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.FontHorzAlign:=TFontHorzAlign.fhaCenter;  
//button title mouse click effect  
SkinFMXButton3.SelfOwnMaterialToDefault.DrawCaptionParam.DrawEffectSetting.MouseDownEffect.CommonEffectTypes:=[dpcetAlphaChange];  
   
end;  
   
Then we run this example:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image005.png)

Click the button to see the effect:  
Look, the materials for the buttons are all set,   
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.5.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B5%20%E7%94%A8%E4%BB%A3%E7%A0%81%E8%AE%BE%E7%BD%AE%E6%8E%A7%E4%BB%B6%E7%B4%A0%E6%9D%90).files/image007.png)
