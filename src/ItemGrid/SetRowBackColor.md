---
title: Set row back color
order: 5
nav:
  title: ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

Application 1, the color of all rows in the table remains the same:  
The default table is to distinguish the color of odd and even rows,  
Because Grid.SelfOwnMaterial.IsDiffOddAndEvent is True by default,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-11.png)


The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-12.png)


If you want to unify the color of all rows with white,  
You need to set Grid.SelfOwnMaterial.RowBackColorMaterial.IsDiffOddAndEven to False,  
The background color is gone. At this time,  
The background color of the row is controlled by Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor,  
Set its IsFill to True and FillColor to White,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-13.png)


Results as shown below:    
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-14.png)


In this way, the background color of the table row is counted  
Application two, customize the color of the row at runtime:  
In the OnPrepareDrawItem event,  
Specify Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor according to Item,  
For example, we want to set the background color of the line "Li Si" to red, the code is as follows:  
````delphi | pure
procedure TFrameItemGrid_CustomRowColor.SkinFMXItemGrid1PrepareDrawItem(
Sender: TObject; ACanvas: TDrawCanvas; AItem: TBaseSkinItem;
AItemDrawRect: TRect);
begin
  if TSkinItem(AItem).Caption='Li Si' then
  begin
    Self.SkinFMXItemGrid1.Material.RowBackColor:=TAlphaColorRec.Red;
  end
  else
  begin
    Self.SkinFMXItemGrid1.Material.RowBackColor:=TAlphaColorRec.White;
  end;
end;
````
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-15.png)


The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-16.png)


Application three, set the background color of the row selection:  
The background color of the row is in Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor, then the selected color is in its PushedEffect, we set the selected color to gray:  
First, set the line "Wang Yi" to be selected when designing, and set Item.Selected to True. 
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-17.png)


Set Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor.PushedEffect.FillColor to Gray, and check drpetFillColorChange in BackColor.PushedEffect.EffectTypes, indicating that the background color should be changed to gray when selected.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-18.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-19.png)




Example 1, distinguish the background color of odd and even lines  
The default is to distinguish the background color of the hall and even rows.  
Grid.SelfOwnMaterial.RowBackColorMaterial.IsDiffOddAndEven is True,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-6.png)


The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-7.png)


Example 2, change the background color of the parity row  
The odd row background color is set in Grid.SelfOwnMaterial.RowBackColorMaterial.OddRowBackColor,  
Even row background color is set in Grid.SelfOwnMaterial.RowBackColorMaterial.EvenRowBackColor,  
We set the odd row background color to green and the even row background color to red,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-8.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-9.png)



The effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-10.png)

