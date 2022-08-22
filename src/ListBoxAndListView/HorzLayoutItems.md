---
title: Horizontal arrangement of list items
order: 5
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

ListBox usually displays ListBoxItem vertically aligned,  
Obviously, it can display horizontally aligned,   
Next we will introduce how to display ListBox of ListBoxItem horizontally aligned,  
This is the effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image001.png)

Drag a ListBox into form,  
Double click ListBox, add 7 ListBoxItems on the popped up ItemsEditor,  
Set the caption of ListBoxItem from “Monday” to ”Sunday”  
Set the Detail of ListBoxItem as the corresponding date,  
Set the first ListBoxItem’s Selected as True,  
It means the ListBoxItem is selected,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image003.png)


This is the effect after adding,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image005.png)


To make ListBoxItem display horizontally aligned,  
We need to set ListBox.Properties.ItemLayoutType as iltHorizontal,  
And set ListBox.Properties.ItemWidth as 60,  
Set ListBox.Properties.ItemHeight as 50,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image007.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image009.png)



We also need to align the drawing position of Caption and Detail,  
Make Detail displayed under Caption, and both is displayed horizontally aligned,  
Font of Caption is bigger, its color is black,  
Font of Detail is smaller, its color is #FF878787,  
When Caption and Detail are selected, both color is #FF46D2DC,  
Set the font of ListBoxItem’s caption in SelfOwnMaterial.DrawItemCaptionParam,  
Set the font of ListBoxItem’s detail in SelfOwnMaterial.DrawItemDetailParam,  
First set the display of Caption,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image011.png)


Then set the font color of Caption when the ListBoxItem is selected,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image013.png)

  
Next set the display of Detail,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image015.png)


 Then set the font color of Detail when the ListBoxItem is selected,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image017.png)


Now the effect is like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image019.png)


There is still an effect need to be added,  
That is when the ListBoxItem is selected, the width gets wider, on the bottom comes a cyan line.  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image021.png)

 
First set the width of the selected ListBoxItem,  
Set ItemWidthCalcType of ListBox as isctSeparate,  
Set SelectedItemWidth of ListBox as 120,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image023.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image025.png)



Set DrawItemBackColorParam.FillColor as #FF46D2DC,  
Check drpetIsFillChange of PushedEffect.EffectTypes,  
Set PushedEffect.IsFill as True,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image027.png)


Let’s see effect,  
We find background color is filled of ListBoxItem, we can’t see Caption and Detail,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image029.png)


Because DrawItemBackColorParam is supposed to set the background color of ListBoxItem,  
We need to make it thinner,  
Set it in DrawItemBackColorParam.DrawRectSetting,  
Height is 5px, position is on the bottom.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image031.png)  

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image033.png)
 

Select ”Friday” to see effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image035.png)



Default ListBox displays ListBoxItem vertically aligned, it can be dragged up and down,  
Display ListBox horizontally aligned, it can be dragged left and right,  
Set the type of vertical scroll bar as sbstNone, meaning there is no vertical scroll bar so it can’t be dragged,  
Set the type of horizontal scroll bar as sbstHide, meaning hide horizontal scroll bar, but it can be dragged.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.8.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B8%20%E6%B0%B4%E5%B9%B3ListBox).files/image037.png)



