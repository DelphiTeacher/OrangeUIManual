---
title: 属性与素材
order: 0
nav:
  title: 面板Panel
  path: /components
  order: 7
---

面板的Properties:TPanelProperties里面的属性有:  
IsToolBar	Boolean	是否是工具栏  

面板的SelfOwnMaterial:TSkinPanelDefaultMaterial的素材:  
BackColor	TDrawRectParam	背景颜色的绘制参数  
IsTransparent		Boolean 是否需要绘制背景颜色  
DrawCaptionParam	TDrawTextParam	标题的绘制参数  




Panel控件可以当作窗体的工具栏来使用,  
步骤如下:  
拖一个Panel到窗体上，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image001.png)

要把它放在窗体的顶部，并且设置它的背景色，  
步骤如下:  
设置它的Align为alTop,  
Height为50，  
SelfOwnMaterial.IsTransparent为False,  
SelfOwnMaterial.BackColor.IsFill设置为True,  
SelfOwnMaterial.BackColor设置为桔黄色,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image003.png)


接着需要让工具栏显示标题,  
步骤如下:  
再设置Panel的Caption为”ToolBar Example”,  
SelfOwnMaterial.DrawCaptionParam.Font.Size设置为16,  
SelfOwnMaterial.DrawCaptionParam.Font.Color设置为白色,  
SelfOwnMaterial.DrawCaptionParam.FontHorzAlign设置为fhaCenter,  
SelfOwnMaterial.DrawCaptionParam.FontVertAlign设置为fvaCenter,  
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image005.png)


现在可以在iPhone手机上看一下实际的效果:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image007.png)


如果想让工具栏把iPhone的状态栏也填满，  
需要设置IsToolBar属性为True,  
并且在工程中添加修改过FMX.Platform.iOS.pas(在OrangeUI示例中的OrangeUIProjectCommon目录中)。  
最终效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/6.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E9%9D%A2%E6%9D%BF%E6%8E%A7%E4%BB%B6Panel)(%E7%A4%BA%E4%BE%8B1%20%E5%B7%A5%E5%85%B7%E6%A0%8F).files/image009.png)

