---
title: Display nofity number icon
order: 1
nav:
  title: PageControl
  path: /components
  order: 12
group:
  order: 120
---

Sometimes,we need to display NotifyNumberIcon in TabButton of TabButton to notify user this TabSheet has unread messages,  
Like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image001.png>)

Absolutely, the simplest way is put a NotifyNumberIcon on TabButton,  
And set HitTest of NotifyNumberIcon as False,  
Like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image003.png>)

But in this way, when TabButton’s width changes,  
For example, when I change TabButton’s width from 320 to 500,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image005.png>)

Then the position of NotifyNumberIcon need to be recalculated,  
Another way is make NotifyNumberIcon bind TabSheet of TabButton,  
In this way, when TabButton changes size,  
Not need to reset NotifyNumberIcon’s position,

This is step:  
First prepare a TabButton,  
There are four TabSheets inside,  
Named the first TabSheet as tsMessage,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image007.png>)

Drag a NotifyNumberIcon into form,  
Named as nniMessage,  
Set material of nniMessage,  
Like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image009.png>)

We need to display NotifyNumberIcon on first page,  
So select first TabSheet(tsMessage) of TabButton,  
Set Properties.NotifyNumberIconControl of tsMessage as nniMessage,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image011.png>)

Let’s see effect,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image013.png>)

nniMessage is drawn on first TabButton,  
In default situation,  
When we bind NotifyNumberIcon with TabSheet,  
It will draw NotifyNumberIcon to assigned TabButton according to TabButton’s whole rectangle,  
So we need to adjust draw rectangle of TabButton in NotifyNumberIcon,  
In TabSheet.SelfOwnMaterial.DrawNotifyNumberIconRectSetting,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image015.png>)

Set width as 40,height as 30,and horizontally centered, offset 20 pix to right,  
Set DrawNotifyNumberIconRectSetting.Enabled as True,  
Set DrawNotifyNumberIconRectSetting.Width as 40,  
Set DrawNotifyNumberIconRectSetting.Height as 30,  
Set DrawNotifyNumberIconRectSetting.PositionHorzType as dpphtCenter,  
Set DrawNotifyNumberIconRectSetting.Left as 20,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image017.png>)

This is the effect:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image019.png>)

Now, no matter how PageControl’s width changes,  
We needn’t to reset the position of NotifyNumberIcon,  
For example I change TabButton’s width from 320 to 500,  
Like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/16.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8F%90%E9%86%92%E6%95%B0%E5%AD%97%E5%9B%BE%E6%A0%87%E6%8E%A7%E4%BB%B6NotifyNumberIcon)(%E7%A4%BA%E4%BE%8B4%20%E7%BB%91%E5%AE%9APageControl).files/image021.png>)
