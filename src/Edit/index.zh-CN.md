---
title: 属性与素材
order: 0
nav:
  title: 文本框Edit
  path: /components
  order: 6
---

文本框的Properties:TEditProperties里面的属性有:  
IsDrawHelpWhenFocused	Boolean	是否在获取焦点的时候绘制提示文本和提示图标
HelpText	String	提示文本
HelpIcon	TDrawPicture	提示图标

文本框的SelfOwnMaterial:TSkinEditDefaultMaterial的素材:  
BackColor	TDrawRectParam	背景颜色的绘制参数
IsTransparent		Boolean 是否需要绘制背景颜色
DrawHelpTextParam	TDrawTextParam	提示文本的绘制参数
DrawHelpIconParam	TDrawPictureParam	提示图标绘制参数
HoverPicture	TDrawPicture	鼠标停靠状态图片
FocusedPicture	TDrawPicture	获取焦点状态下的图片
DisabledPicture	TDrawPicture	禁用状态图片
NormalPicture	TDrawPicture	正常状态图片
DrawPictureParam	TDrawPictureParam	图片绘制参数
DrawTextParam	TDrawTextParam	在ListBox中文本的绘制参数




OrangeUI的Edit目前没有什么特殊的功能，  
是从自带的TEdit继承的，  
只不过把TEdit自带的Style去掉了，  
所以放在窗体上是透明的，  
但我们可以自定义它的背景颜色或背景图片。  
 
Edit的字体设置仍旧在TextSetting属性中，  
而不是在SelfOwnMaterial.DrawTextParam里面。  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)


SelfOwnMaterial.DrawTextParam属性是用在当Edit放在ItemDesignerPanel时，  
ListBox使用它来绘制此Edit.  
 
再讲解一下Edit的子控件Content,Content是在Edit中用于输入文字,  
Content在IOS,Android上的高度是有限制的  
当Content的高度大于25时，Edit将不能用手指定位输入光标,  
因此当Edit的高度大于25时，就要设置Content的上边距ContentMarginTop和  
下边距ContentMarginBottom,避免不能定位输入光标,  
ContentMarginLeft:Content相对于Edit的左边距  
ContentMarginTop:Content相对于Edit的上边距  
ContentMarginRight:Content相对于Edit右左边距  
ContentMarginBottom:Content相对于Edit下左边距  
 
 
Edit控件的属性在Properties中，有:  
HelpIcon:提示图标  
HelpText:提示文本(当Text为空的时候显示的提示信息)  
IsDrawHelpWhenFocused:当Text为空时，获得焦点时是否也需要显示HelpText  
 
接下来我们做一个用户名密码输入框，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)


上图中，用户名输入框和密码输入框的样式是一样的，  
都是提示图标显示在左边，输入提示文本居中显示，  
需要如下两个图标,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png):用户名输入框的提示图标  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png):密码输入框的提示图标  
 
我们拖两个Edit到窗体上,  
一个命名为edtUser,为用户名输入框，  
一个命名为edtPass,为密码输入框，  
 
先设置edtUser的提示图标:  
把Properties.HelpIcon设置为![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png),  
让HelpIcon垂直居中显示,大小设置成24x24,  
在SelfOwnMaterial.DrawHelpIconParam中设置，  
DrawHelpIconParam.IsAutoFit设置为True,  
DrawHelpIconParam.PictureHorzAlign设置为phaCenter,  
DrawHelpIconParam.PictureVertAlign设置为pvaCenter,  
DrawHelpIconParam.DrawRectSetting.Enabled设置为True,  
DrawHelpIconParam.DrawRectSetting.SizeType设置为dpstPixel,  
DrawHelpIconParam.DrawRectSetting.Width和Height设置为24,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


再设置edtUser的提示文本:  
Properties.HelpText设置为: “账号/手机号”，  
让HelpText居中显示，并且字体颜色设置成灰色，  
在SelfOwnMaterial.DrawHelpTextParam中设置，  
DrawHelpTextParam.DrawFont.Color设置为灰色Gray,  
DrawHelpTextParam.FontHorzAlign设置为fhaCenter,  
DrawHelpTextParam.FontVertAlign设置为fvaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)


还需要设置edtUser的TextSetting,让文本居中，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)


看一下edtUser的高度，为40,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)


因此需要设置一下Content的上边距和下边距，都设置为8,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image017.png)


再拖一个ClearEditButton到Edit上面，用来一次性清除输入的内容，  
 
好了，设置完成，显示效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image019.png)


输入用户名，居中显示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image021.png)


 
按上面的步骤设置edtPass,  
因为edtPass是用来输入密码的，  
因此把edtPass的Password属性打上勾，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image023.png)


输入密码:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image025.png)



