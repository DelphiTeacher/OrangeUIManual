---
title: Set row and col devide line
order: 20
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

ListView's row and column divider settings require the following properties:  
SelfOwnMaterial.IsDrawRowLine: Whether to draw a row divider  
SelfOwnMaterial.IsDrawRowBeginLine: Whether to draw the first row start dividing line  
SelfOwnMaterial.IsDrawRowEndLine: Whether to draw the end line at the end of the line  
SelfOwnMaterial.DrawRowLineParam: Row separator line drawing parameters

SelfOwnMaterial.IsDrawColLine: Whether to draw column separator lines  
SelfOwnMaterial.IsDrawColBeginLine: Whether to draw the first column start separation line  
SelfOwnMaterial.IsDrawColEndLine: Whether to draw the end column separation line  
SelfOwnMaterial.DrawColLineParam: Column separator line drawing parameter

When the ViewType of the ListView is set to lvtIcon,  
Indicates the use of icon mode, as shown in the following figure:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image001.png>)

In this mode, row and column separators can be set,  
Let's set the line separator first, as follows:  
ListView.SelfOwnMaterial.IsDrawRowLine is set to True,  
ListView.SelfOwnMaterial.IsDrawRowBeginLine is set to True,  
ListView.SelfOwnMaterial.IsDrawRowEndLine is set to True,  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image003.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image005.png>)

Set the column separator again  
Set ListView.SelfOwnMaterial.IsDrawColBeginLine to True,  
ListView.SelfOwnMaterial.IsDrawColEndLine is set to True,  
ListView.SelfOwnMaterial.IsDrawColLine is set to True,  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image007.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image009.png>)

The color and thickness of the row divider are set in DrawRowLineParam,  
The color and thickness of the column divider are set in DrawColLineParam,  
For example, DrawRowLineParam.Color is set to red Red, PenWidth is set to 2,  
DrawColLineParam.Color is set to Blue, PenWidth is set to 2,  
The design-time effect is as follows (the design-time divider uses a dashed line):  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image011.png>)

The runtime effect is as follows (the runtime divider uses a solid line):  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image013.png>)
