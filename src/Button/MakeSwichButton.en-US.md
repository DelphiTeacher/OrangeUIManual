---
title: Make switch button
order: 5
nav:
  title: Button
  path: /components
  order: 3
---

These are two states of button,to show if the internet is on.  
First prepare the necessary icons:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image001.png>): means network disconnected,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image003.png>):means network connected.  
Drag a button in form, set width and height both as 44,  
Set Icon as the first icon above,  
Set PushedIcon as the second icon above.  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image005.png>)

when you set up ,you will find,the size of button is 44x44,but the size of icon is 75x75, obviously it is too big to show the whole.  
like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image007.png>)

You need to set the DrawIconParam,  
Set IsAutoFit as true,  
it means when you are drawing icon,the icon will adjust its size automatically to the control . and the scale of icon won’t be distorted..  
Set PictureHorzAlign as phaCenter,means center horizontal,  
Set PictureVertAlign as pvaCenter,means vertical horizontal  
Like this,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image009.png>)

Here is the effect of display:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image011.png>)
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image013.png>)
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image015.png>)
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image017.png>)

If you set IsAutoFit of DrawIconParam as False,  
The scale of icon will be distorted while you stretching the button.  
Like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image019.png>)
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image021.png>)

So how can you switch the button to the state of network connected?  
You need to set button as pressed state(set IsPushed as True ),  
Like this:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image023.png>)
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/2.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B2%20%E5%BC%80%E5%85%B3%E6%8C%89%E9%92%AE).files/image025.png>)
