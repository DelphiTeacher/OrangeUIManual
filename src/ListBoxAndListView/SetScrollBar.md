---
title: Set scrollbar
order: 15
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

ListBox and ListView, as well as ScrollBox inherit from ScrollControl,  
ScrollControl is the base class of scroll controls,  
It has two properties to set horizontal scroll bar and vertical scroll bar,  
HorzScrollBarShowType: The display type of the horizontal scroll bar,  
VertScrollBarShowType: The display type of the vertical scroll bar,  
There are the following options:  
sbstNone: do not use the scroll bar, prohibit sliding  
sbstHide: use the scroll bar, but not display, you can slide  
sbstsbstAlwaysCoverShow: use the scroll bar and display, you can slide  
 
 
Put a ScrollControl on the form, the default scroll bar settings are as shown below:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image001.png)


The current HorzScrollBarShowType is sbstAlwaysCoverShow, which means the horizontal scroll bar is displayed.  
The current VertScrollBarShowType is sbstAlwaysCoverShow, which means the vertical scroll bar is displayed.  
As shown below:    
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image003.png)


 
 
ListBox, ListView, TreeView, etc. are vertically scrolled by default.  
So the horizontal scroll bar display type HorzScrollBarShowType defaults to sbstNone,  
Indicates that horizontal sliding is prohibited, and there is no horizontal sliding function.  
As shown below:   
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image005.png)


The vertical scroll bar of the ListBox is required by default.  
As shown below:    
VertScrollBarShowType is sbstAlwaysCoverShow:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image007.png)


 
 
If you want the ListBox to prohibit vertical sliding,  
Just set VertScrollBarShowType to sbstNone,  
 
If you want to add a horizontal scroll bar to the ListBox,  
Then set HorzScrollBarShowType to sbstAlwaysCoverShow,  