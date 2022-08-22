---
title: 在样式中使用多个Label
order: 4
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

ListBoxItem有一个SubItems的属性，  
它的类型是字符串列表TStringList,  
SubItems可以添加无数个字符串,  
比如添加三个字符串 “aa”,“bb”,“cc”,  
 
拖一个ListBox到窗体上，  
再拖一个ItemDesignerPanel到ListBox中去,  
命名为idpSubItems,  
将ListBox.Properties.ItemDesignerPanel设置为idpSubItems,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image001.png)

双击ListBox,添加一个ListBoxItem,  
再双击ListBoxItem的SubItems属性,弹出字符串列表编辑窗体，  
输入三个字符串,为“aa”,“bb”,“cc”,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image003.png)


再拖三个Label到ItemDesignerPanel上面，  
分别取名为lblSubItemsIndex1,lblSubItemsIndex2,lblSubItemsIndex3,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image005.png)


选中ItemDesignerPanel,  
双击它的ItemStringBindingControlCollection,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image007.png)


添加三个项,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image009.png)


选中第一个项,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image011.png)


在属性编辑器中，  
把它的BindingControl属性设置为lblSubItemsIndex1,StringsIndex属性设置为0,  
表示让其显示SubItems中下标为0的字符串”aa”,  
选中第二个项，  
把它的BindingControl属性设置为lblSubItemsIndex2,StringsIndex属性设置为1,  
表示让其显示SubItems中下标为1的字符串”bb”,  
选中第三个项,  
把它的BindingControl属性设置为lblSubItemsIndex3,StringsIndex属性设置为2,  
表示让其显示SubItems中下标为2的字符串”bb”,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image013.png)


我们可以再添加一个ListBoxItem,   
把SubItems设置为”11”,”22”,”33”，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B7%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E7%BD%AE%E9%9D%A2%E6%9D%BF%20%E7%BB%91%E5%AE%9A%E6%97%A0%E6%95%B0%E4%B8%AALabel).files/image015.png)


因此，  
我们可以把多个数据填入SubItems中去，  
再绑定ItemDesignerPanel中的多个Label来呈现在ListBox中  


