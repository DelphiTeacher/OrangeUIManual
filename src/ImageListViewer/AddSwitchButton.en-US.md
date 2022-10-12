---
title: Add switch button
order: 2
nav:
  title: Doc
  path: /components
  order: 16
group:
  title: ImageListViewer
  order: 160
---

First drag a SkinImageList on the form,  
named imglistPlayer,  
Add the following 6 pictures:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image001.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image003.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image005.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image007.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image009.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image0011.png>)

Put another ImageListViewer on the form,
Align is set to Top, Height is set to 150,  
Then set imglistPlayer to ImageListViewer.Properties.Picture.SkinImageList,  
ImageListViewer.Properties.ImageListAnimated is set to True,  
ImageListViewer.SelfOwnMaterial.DrawPictureParam.IsStretch is set to True,  
The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image013.png>)

Next drag a ButtonGroup in the ImageListViewer,  
Because we have 6 images this time, we need 6 button widths,  
We set the Height of the ButtonGroup to 20,  
ButtonGroup.Properties.ButtonSize is set to 20,  
means the width of each button is 20,  
ButtonGroup.Properties.ButtonSizeCalcType is set to bsctFixed,  
Indicates that the size of each button is uniform,  
Width is set to 20x6=120,  
And set its Anchors property to [akTop, akRight],  
make it adapt to different sizes of mobile phones,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image015.png>)

After ImageListViewer binds ButtonGroup,  
The button will be created according to the number of pictures in the SkinImageList,  
And set the click event for the automatically created button,  
Click the button above to automatically switch to the corresponding picture,

Next, set the material of the button on the ButtonGroup,  
There are three types of button materials in ButtonGroup,  
FirstButtonMaterial: The material of the first button,  
MiddleButtonMaterial: The material of the middle button,  
LastButtonMaterial: The material of the last button,  
The default material of the button is set in ButtonGroup.SelfOwnMaterial.MiddleButtonMaterial,  
MiddleButtonMaterial.IsTransparent is set to False,  
MiddleButtonMaterial.BackColor.IsFill is set to True,  
MiddleButtonMaterial.BackColor.IsRound is set to True,  
MiddleButtonMaterial.BackColor.RoundWidth is set to 10,  
MiddleButtonMaterial.BackColor.RoundHeight is set to 10,  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image017.png>)

The effect is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image019.png>)

Every time ImageListViewer switches pictures,  
The IsPushed property of the Button corresponding to the serial number on the ButtonGroup will be set to True,  
to indicate which picture is currently displayed,  
So to set the ButtonGroup.MiddleButtonMaterial.BackColor.PushedEffect effect,  
drpetFillColorChange in PushedEffect.EffectTypes is ticked,  
PushedEffect.FillColor is set to black,  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image021.png>)

The effect is as follows：  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.2.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B2%20%E7%BB%91%E5%AE%9AButtonGroup).files/image023.png>)
