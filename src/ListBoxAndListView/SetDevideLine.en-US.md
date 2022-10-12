---
title: Set divider
order: 8
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

Add a divider to the ListBox,  
Just set SelfOwnMaterial.DrawItemDevideParam.IsFill to True,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image001.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image003.png>)

By default, ListBox.SelfOwnMaterial.IsSimpleDrawItemDevide is True,  
It means to use a simple and commonly used divider, that is, a thin line with a width of 1 pixel,  
So if you want to customize the width of the ListBox divider,  
Then set SelfOwnMaterial.IsSimpleDrawItemDevide to False first,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image005.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image007.png>)

Because after IsSimpleDrawItemDevide is False,  
DrawItemDevideParam will draw on the entire list item,  
This way, the entire list item is covered by the divider,  
Therefore, you also need to specify the height of the dividing line drawing parameters,  
Set DrawItemDevideParam.DrawRectSetting.Enabled to True,  
DrawItemDevideParam.DrawRectSetting.Height is set to 2,  
DrawItemDevideParam.DrawRectSetting.PositionVertType is set to dppvtBottom,  
DrawItemDevideParam.DrawRectSetting.SizeType is set to dpstPixel,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image009.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.11.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B11%20%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image011.png>)

ListBox adds a header divider, which is the line at the top of the first list item,  
Just set SelfOwnMaterial.DrawGroupBeginDevideParam.IsFill to True,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.12.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B12%20%E5%A4%B4%E5%B0%BE%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image001.png>)

ListBox adds a tail divider, which is the line at the bottom of the last list item,  
Just set SelfOwnMaterial.DrawGroupEndDevideParam.IsFill to True,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.12.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B12%20%E5%A4%B4%E5%B0%BE%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image003.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.12.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B12%20%E5%A4%B4%E5%B0%BE%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image005.png>)

By default, ListBox.SelfOwnMaterial.IsSimpleDrawGroupBeginDevide is True,  
ListBox.SelfOwnMaterial.IsSimpleDrawGroupEndDevide is True,  
It means to use a simple and common head and tail separator, that is, a thin line with a width of 1 pixel,  
So if you want to customize the width of the ListBox head and tail dividers,  
Then set SelfOwnMaterial.IsSimpleDrawGroupBeginDevide to False first,  
SelfOwnMaterial.IsSimpleDrawGroupEndDevide is set to False,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.12.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B12%20%E5%A4%B4%E5%B0%BE%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image007.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.12.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B12%20%E5%A4%B4%E5%B0%BE%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image009.png>)

Because IsSimpleDrawGroupBeginDevide and IsSimpleDrawGroupEndDevide are False,  
DrawGroupBeginDevideParam and DrawGroupEndDevideParam will be drawn on the entire list item,  
This way, the entire list item is covered by the divider,  
Therefore, you also need to specify the height of the drawing parameters of the head and tail separators,

Set DrawGroupBeginDevideParam.DrawEffectSetting.Enabled to True,  
DrawGroupBeginDevideParam.DrawEffectSetting.Height is set to 2,  
DrawGroupBeginDevideParam.DrawEffectSetting.PositionVertType is set to dppvtTop,  
DrawGroupBeginDevideParam.DrawEffectSetting.SizeType is set to dpstPixel,

Set DrawGroupEndDevideParam.DrawEffectSetting.Enabled to True,  
DrawGroupEndDevideParam.DrawEffectSetting.Height is set to 2,  
DrawGroupEndDevideParam.DrawEffectSetting.PositionVertType is set to dppvtBottom,  
DrawGroupEndDevideParam.DrawEffectSetting.SizeType is set to dpstPixel,

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.12.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B12%20%E5%A4%B4%E5%B0%BE%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image011.png>)

Then set the same divider color:  
DrawGroupBeginDevideParam.FillColor.Color is set to #80808080,  
DrawGroupEndDevideParam.FillColor.Color is set to #80808080,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.12.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B12%20%E5%A4%B4%E5%B0%BE%E5%88%86%E9%9A%94%E7%BA%BF%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image013.png>)
