---
title: Gesture Zoom
order: 3
nav:
  title: Doc
  path: /components
  order: 16
group:
  title: ImageListViewer
  order: 160
---

There is a picture list view control in the OrangeUI control package, called ImageListViewer,  
At the beginning, it was mainly used as an advertisement rotation function on the APP homepage.  
But it can also be used to easily implement an image viewer that supports gesture switching and gesture zooming  
For example, to view multiple pictures of an order item:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-android.gif)

How to achieve it?  
First, you need to put a SkinImageList named imglistWelcome,  
Add all the pictures you want to display  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image.png)

We put an ImageListViewer control on the Frame, named imglistviewerCommon,  
Set its Align to Client and let it occupy the entire form,  
How to make it display the pictures in SkinImageList?  
Set its Properties.Picture.SkinImageList to the imglistWelcome we added above  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-1.png)

Take a look at the effect:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-2.png)

Because the picture we added is a bit large, it is 1080\*1920, but our control size is too small to display,  
You only need to set the picture drawing parameters to stretch, and the size is adaptive to avoid deformation.  
Set its SelfOwnMaterial.DrawPictureParam.IsStretch to True and IsAutoFit to True,  
The current effect is as follows:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-3.png)

It can be seen that the pictures are all displayed, but they are not displayed in the center.  
So it needs to be adjusted:  
Set SelfOwnMaterial.DrawPictureParam.PictureHorzAlign to phaCenter,  
PictureVertAlign is set to pvaCenter,  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-4.png)

The effect is as follows:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-5.png)

This is the end of the display related settings

Next, set up gesture switching  
Set its Properties.CanGestureSwitch to True, which means that gesture switching is allowed,  
There is also a property called CanGestureSwitchDistance, which indicates how far the gesture switch exceeds before it is allowed to switch to the next picture.  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-6.png)

Under Windows, we can use mouse drag to simulate gesture switching:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows.gif)

But there is another detail here, that is, when the gesture switches to the last page, it cannot be switched.  
The effect is as follows:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows-1.gif)

Some students may also need to switch back to the first page, so that the loop switches,  
Just set its Properties.GestureSwitchLooped to True:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-7.png)

The effect is as follows:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/imagelistviewer-windows-2.gif)

Finally set the gesture zoom  
Set its Properties.CanGestureZoom to True:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-8.png)

Set the ImageListViewer to enable scrolling, as the image zooms in and needs to be scrolled to see the occluded parts:  
ImageListViewer.Properties.VertScrollBarShowType is set to sbstAutoCoverShow,  
ImageListViewer.Properties.HorzScrollBarShowType is set to sbstAutoCoverShow,

That's not enough,  
I talked about the touch property and OnGesture event of gestures on the form in a previous article,  
Of course, the control also has the Touch.InteractiveGestures property and the OnGesture event, but I found in the test that there is no event sensitive without a form,  
And we also need to get the position touched by two fingers when zooming in the OnTouch event of the form to determine the zoom center point,  
Therefore, we also need to do the following processing in the form,  
Set the form to trigger zoom and double tap gestures:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-9.png)

In the OnTouch event, save the touch position and number of fingers to the global variable of gFormTouch\*,  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-10.png)

Scale the control in the OnGesture event:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-11.png)

Run it on your phone to see the effect:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-12.png)

In this way, a picture browser is ready  
You can apply it to your project!

You can also directly use the ViewPictureListFrame in the control package,  
The two pictures at the beginning of this article both call this page directly.  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/word-image-13.png)

With OrangeUI, you can easily enter the world of developing APP in Delphi!  
Friends who are interested in OrangeUI can join the QQ group to learn and communicate with each other:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/img_256.jpeg)

You can also follow this official account to get more Delphi related content:  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/10/img_256-1.jpeg)
