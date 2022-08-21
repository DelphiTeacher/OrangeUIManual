---
title: Make backgroud picture button
order: 8
nav:
  title: Button
  path: /components
  order: 3
---

Let us make a three-states button to show basic settings of button  
Three-states button is a button with three states: normal state, hover state , click state  
We use three different pictures to judge which state the button is in  
For example, here are three pictures:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png): background picture of normal state  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png):background picture of hover state  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png):background picture of click state  

Set the three pictures respectively to properties NormalPicture、HoverPicture、DownPicture of button SelfOwnMaterial(you can open picture editor by double click NormalPicture )  
Then set the button’s caption as “确定”,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png)

In the above picture, the caption is on left top corner,  
We need to put button’s caption in middle position ,  
Unfold DrawCaptionParam in SelfOwnMaterial (draw parameters of button caption),  
There are two parameters:  
Set FontHorzAlign(parameters of horizontally align) as fhaCenter(horizontally center)  
Set FontVertAlign (parameters of vertically align) as fvaCenter (vertically center)  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


There is one more problem we need to solve:  
When the control is stretched bigger, the edge of background picture will get blurs,  
Like this(when you stretch the button too big):  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


Unfold DrawPictureParam(draw parameters of background picture) in SelfOwnMaterial ,  
Set StretchStyle as issSquare  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)


Rules of issSquare:  
Four corners of background picture will keep the same,  
Two horizontal edges will stretch horizontally,  
Two vertical edges will stretch vertically,  
The middle square will be magnified,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image017.png)


When you set up, you needn’t to worry about magnify,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image019.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image021.png)



Next run it on platform Windows to see effect:  
Normal state:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image023.png)


Hover state:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image025.png)


Click state:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image027.png)


You can make the button has dynamic effects by these steps,  
Which is too say , when you click mouse the caption will move 1px to right and down,  
Unfold SelfOwnMaterial->DrawCaptionParam->MouseDownEffect(effect when mouse click),  
Check dpcetOffsetChange, it means move effect of caption’s position when you click mouse,  
Set Offset as 1, means caption position moves 1px,  
Set like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/2.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%8C%89%E9%92%AE%E6%8E%A7%E4%BB%B6Button)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image029.png)




 


