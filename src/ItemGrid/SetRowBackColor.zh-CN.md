---
title: 设置行背景色
order: 5
nav:
  title: 表格控件ItemGrid
  path: /components
  order: 11
group:
  order: 110
---


应用一，表格所有行的颜色保持一致:  
默认表格是区分奇偶行颜色的，  
因为Grid.SelfOwnMaterial.IsDiffOddAndEvent默认是为True的，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-11.png)


效果如下:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-12.png)


如果要将所有行的颜色统一用白色的，  
就需要将Grid.SelfOwnMaterial.RowBackColorMaterial.IsDiffOddAndEven设置为False,  
背景色就没有了，这时候，  
行的背景色由Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor控制，  
把它的IsFill设置为True,FillColor设置为White，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-13.png)


效果如下图所示:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-14.png)


这样，表格行的背景色就统计了  
应用二，在运行时自定义行的颜色:  
在OnPrepareDrawItem事件中，  
根据Item来指定Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor，  
比如我们要把”李四”那一行的背景色设置为红色，代码如下:  
```delphi | pure
procedure TFrameItemGrid_CustomRowColor.SkinFMXItemGrid1PrepareDrawItem(
Sender: TObject; ACanvas: TDrawCanvas; AItem: TBaseSkinItem;
AItemDrawRect: TRect);
begin
  if TSkinItem(AItem).Caption='李四' then
  begin
    Self.SkinFMXItemGrid1.Material.RowBackColor:=TAlphaColorRec.Red;
  end
  else
  begin
    Self.SkinFMXItemGrid1.Material.RowBackColor:=TAlphaColorRec.White;
  end;
end;
```
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-15.png)


效果如下:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-16.png)


应用三，设置行选中的背景颜色:  
行的背景颜色在Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor，那么选中的颜色是在它的PushedEffect中，我们将选中的颜色设置为灰色:  
先在设计时先”王一”那一行设置为选中，Item.Selected设置为True，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-17.png)


将Grid.SelfOwnMaterial.RowBackColorMaterial.BackColor.PushedEffect.FillColor设置为Gray，将BackColor.PushedEffect.EffectTypes中勾选drpetFillColorChange，表示选中的时候要改背景色变为灰色，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-18.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/03/word-image-19.png)







