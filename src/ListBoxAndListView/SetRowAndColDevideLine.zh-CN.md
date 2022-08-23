---
title: 设置行列分隔线
order: 20
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---
 
ListView的行列分隔线设置需要如下属性:  
SelfOwnMaterial.IsDrawRowLine:是否绘制行分隔线  
SelfOwnMaterial.IsDrawRowBeginLine:是否绘制首行开始分隔线  
SelfOwnMaterial.IsDrawRowEndLine:是否绘制尾行结束分隔线  
SelfOwnMaterial.DrawRowLineParam:行分隔线绘制参数  
 
SelfOwnMaterial.IsDrawColLine:是否绘制列分隔线  
SelfOwnMaterial.IsDrawColBeginLine:是否绘制首列开始分隔线  
SelfOwnMaterial.IsDrawColEndLine:是否绘制尾列结束分隔线  
SelfOwnMaterial.DrawColLineParam: 列分隔线绘制参数  
 
当ListView的ViewType设置为lvtIcon时，  
表示使用图标模式，如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image001.png)


在此模式下可以设置行列分隔线，  
我们先设置行分隔线，方法如下:  
ListView.SelfOwnMaterial.IsDrawRowLine设置为True,  
ListView.SelfOwnMaterial.IsDrawRowBeginLine设置为True,  
ListView.SelfOwnMaterial.IsDrawRowEndLine设置为True,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image003.png)


效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image005.png)


再设置列分隔线  
把ListView.SelfOwnMaterial.IsDrawColBeginLine设置为True,  
ListView.SelfOwnMaterial.IsDrawColEndLine设置为True,  
ListView.SelfOwnMaterial.IsDrawColLine设置为True,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image007.png)


效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image009.png)


 
行分隔线的颜色和粗细都在DrawRowLineParam中设置，  
列分隔线的颜色和粗细都在DrawColLineParam中设置，  
比如DrawRowLineParam.Color设置为红色Red,PenWidth设置为2,  
DrawColLineParam.Color设置为蓝色Blue,PenWidth设置2,  
设计时效果如下(设计时分隔线使用虚线):  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image011.png)


运行时效果如下(运行时分隔线使用实线):  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B2%20%E8%A1%8C%E5%88%97%E5%88%86%E9%9A%94%E7%BA%BF).files/image013.png)








