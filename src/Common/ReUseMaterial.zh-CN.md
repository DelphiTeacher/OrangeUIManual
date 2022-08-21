---
title: 重复利用你设置好的素材
order: 11
nav:
  title: 控件公共属性
  path: /components
  order: 1
group:
  order: 29
---

## 重复利用你设置好的素材
当设置好一个控件的素材之后，  
希望别的控件也使用相同的素材，  
这就要用到素材共享模式了，  
 
接下来以按钮控件来举例:  
先设置如下登录按钮btnLogin,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B6%20%E7%B4%A0%E6%9D%90%E5%85%B1%E4%BA%AB).files/image001.png)

右键按钮，在弹出的菜单中选择”使用RefMaterial模式”,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B6%20%E7%B4%A0%E6%9D%90%E5%85%B1%E4%BA%AB).files/image003.png)

此时窗体上会生成一个Material组件btnLogin_Material，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B6%20%E7%B4%A0%E6%9D%90%E5%85%B1%E4%BA%AB).files/image005.png)

这个btnLogin_Material就是btnLogin原来的SelfOwnMaterial,  
之后btnLogin的SelfOwnMaterial就会变为空，  
btnLogin.MaterialUseKind为mukRef,  
表示使用RefMaterial来绘制控件，  
btnLogin.RefMaterial会设置为btnLogin_Material，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B6%20%E7%B4%A0%E6%9D%90%E5%85%B1%E4%BA%AB).files/image007.png)

再在窗体上放一个按钮btnOK，Caption设置为”确定”,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B6%20%E7%B4%A0%E6%9D%90%E5%85%B1%E4%BA%AB).files/image009.png)

然后把btnOK.MaterialUseKind设置为mukRef,  
btnOK.RefMaterial设置为btnLogin_Material,  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B6%20%E7%B4%A0%E6%9D%90%E5%85%B1%E4%BA%AB).files/image011.png)

效果如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/1.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80(%E7%A4%BA%E4%BE%8B6%20%E7%B4%A0%E6%9D%90%E5%85%B1%E4%BA%AB).files/image013.png)

就这样，这个Material组件共享给了两个按钮使用。  



