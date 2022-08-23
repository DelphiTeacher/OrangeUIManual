---
title: 设置滚动条
order: 15
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBox和ListView，以及ScrollBox都继承自ScrollControl,  
ScrollControl是滚动控件的基类,  
它有两个属性可以设置水平滚动条和垂直滚动条，  
HorzScrollBarShowType:水平滚动条的显示类型，  
VertScrollBarShowType:垂直滚动条的显示类型，  
有如下选项:  
sbstNone:不使用滚动条，禁止滑动  
sbstHide:使用滚动条，但不显示，可以滑动  
sbstsbstAlwaysCoverShow:使用滚动条且显示，可以滑动  
 
 
在窗体上放一个ScrollControl,默认的滚动条设置如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image001.png)


当前HorzScrollBarShowType为sbstAlwaysCoverShow,表示水平滚动条显示，  
当前VertScrollBarShowType为sbstAlwaysCoverShow,表示垂直滚动条显示，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image003.png)


 
 
ListBox、ListView、TreeView等默认都是垂直滚动的，  
所以水平滚动条显示类型HorzScrollBarShowType默认为sbstNone,  
表示禁止水平滑动，没有水平滑动的功能，  
如下图所示: 
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image005.png)


而ListBox的垂直滚动条默认是需要的，  
如下图所示:  
VertScrollBarShowType为sbstAlwaysCoverShow:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/11.4.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E8%A7%86%E5%9B%BE%E6%8E%A7%E4%BB%B6ListView)(%E7%A4%BA%E4%BE%8B4%20%E6%BB%9A%E5%8A%A8%E6%9D%A1%E7%9A%84%E8%AE%BE%E7%BD%AE).files/image007.png)


 
 
如果想要ListBox禁止垂直滑动，  
把VertScrollBarShowType设置为sbstNone即可,  
 
如果想要给ListBox加上水平滚动条，  
那就把HorzScrollBarShowType设置为sbstAlwaysCoverShow即可,  
 


