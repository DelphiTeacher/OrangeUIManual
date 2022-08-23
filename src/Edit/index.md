---
title: Properties and Material
order: 0
nav:
  title: Edit
  path: /components
  order: 6
group:
  order: 60
---

Edit's Properties:TEditProperties has:  
IsDrawHelpWhenFocused	Boolean	Whether to draw the prompt text and prompt icon when the focus is obtained  
HelpText	String	Prompt text, displayed when Text is empty  
HelpIcon	TDrawPicture	

Edit's SelfOwnMaterial:TSkinEditDefaultMaterial has:    
BackColor	TDrawRectParam	Drawing parameters for background color  
IsTransparent		Boolean Do you need to draw the background color  
DrawHelpTextParam	TDrawTextParam	Drawing parameters for the prompt text  
DrawHelpIconParam	TDrawPictureParam	Tips icon drawing parameters   
HoverPicture	TDrawPicture	Backgroud picture of the mouse docked state  
FocusedPicture	TDrawPicture	Backgroud picture of focus state  
DisabledPicture	TDrawPicture	Disable status Backgroud picture  
NormalPicture	TDrawPicture	Normal state Backgroud picture  
DrawPictureParam	TDrawPictureParam	Picture drawing parameters  
DrawTextParam	TDrawTextParam	Drawing parameters for text in ListBox  




Edit of OrangeUI doesn’t have any special functions currently,  
It is inherit from TEdit,  
But remove Style of TEdit,  
So it is transparent on form,  
But we can customize its background color or background picture,  

The font setting of Edit is in property TextSetting,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image001.png)


Property SelfOwnMaterial.DrawTextParam is used for when Edit is put on   
ItemDesignerPanel, ListBox use it to draw this Edit.  
Then explain Edit’s child control Content, Content is used for inputting text in Edit,  

In IOS,Android Content’s height is limited,  
When Content’s height is bigger than 25, Edit can’t locate input cursor by finger,  
So when Edit’s height is bigger than 25, we need to set Content’s ContentMarginTop and ContentMarginBottom to avoid can’t locate input cursor.  
ContentMarginLeft: Content’s left margin relative to Edit ContentMarginTop: Content’s top margin relative to Edit    
ContentMarginRight: Content’s right margin relative to Edit ContentMarginBottom: Content’s bottom margin relative to Edit  
Edit’s properties are:  
HelpIcon: Icon for prompt  
HelpText: text for prompt (When Text is empty, it will show help  information)  
IsDrawHelpWhenFocused: when Text is empty and get focused whether need to display HelpText.  

Next we will make user name edit and password edit,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image003.png)

 
In the above picture, the style of UserName edit is same as password edit, HelpIcon is displayed in the left, HelpText is displayed centered,  
We need these two icons:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png):HelpIcon of UserName edit.  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image007.png): HelpIcon of password edit.  
We drag two edits into form,  
One named edtUser, as for UserName edit,  
The other named edtPass, as for password edit,  
First set edtUser,  
Set Properties.HelpIcon as ![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image005.png),  
Make HelpIcon display vertically centered, set size as 24x24,  
In SelfOwnMaterial.DrawHelpIconParam,  
Set DrawHelpIconParam.IsAutoFit as True,  
Set DrawHelpIconParam.PictureHorzAlign as phaCenter,  
Set DrawHelpIconParam.PictureVertAlign as pvaCenter,  
Set DrawHelpIconParam.DrawRectSetting.Enabled as True,  
Set DrawHelpIconParam.DrawRectSetting.SizeType as dpstPixel,  
Set DrawHelpIconParam.DrawRectSetting.Width and Height as 24,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image009.png)


Set Properties.HelpText as “账号/手机号”,  
Make HelpText display centered, and set font color as gray,  
Set DrawHelpTextParam.FontHorzAlign as fhaCenter,  
Set DrawHelpTextParam.FontVertAlign as fvaCenter,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image011.png)

We still need to set Edit’s TextSetting, make text centered,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image013.png)

Look at edtUser’s current height, 40,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image015.png)

So we need to set Content’s top margin and bottom margin as 8,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image017.png)

Drag a ClearEditButton into edtUser, to clear input content entirely,  
Ok, the setting is over, this is the effect:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image019.png)

Input user name, display centered,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image021.png)

Set edtPass as the steps above,  
Because edtPass is used for input password,  
So check edtPass’s property Password,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image023.png)

Input password,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/13.1.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E6%96%87%E6%9C%AC%E6%A1%86%E6%8E%A7%E4%BB%B6Edit)(%E7%A4%BA%E4%BE%8B1%20%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD).files/image025.png)


