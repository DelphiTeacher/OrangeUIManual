---
title: Make Grid-Style Menu
order: 19
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

Drag a ListView into form,  
Double click ListView,  
Add these four ListViewItems in the popped up ItemsEditor,  
The captions and icons of four ListViewItems are:  
通知公告![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png>)

监督管理![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png>)

产品检测![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png>)

监管对象![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png>)

This is the current effect:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png>)

Next set ViewType as lvtIcon,  
Means use icon display mode,  
Set ItemHeight as 80,  
Set ItemWidth as 106,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png>)

Next set icon, minimize icon and make it display horizontally centered,  
Set DrawItemIconParam.IsAutoFit as True,  
Set DrawItemIconParam.PicureHorzAlign as phaCenter，  
Set DrawItemIconParam.PictureVertAlign as pvaTop,  
Unfold DrawItemIconParam.DrawRectSetting，  
Set DrawRectSetting.Enabled as True,  
Set DrawRectSetting.PositionHorzType as dpphtCenter，  
Set DrawRectSetting.SizeType as dpstPercent,  
Set DrawRectSetting.Top as 10,  
Set DrawRectSetting.Height as 65,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image017.png>)

Set caption’s font as horizontal center, vertically down,  
Set DrawItemCaptionParam.FontHorzAlign as fhaCenter  
Set DrawItemCaptionParam.FontVertAlign as fvaBottom,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image019.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image021.png>)
