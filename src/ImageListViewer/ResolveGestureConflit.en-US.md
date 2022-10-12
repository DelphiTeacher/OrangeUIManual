---
title: Resolve gesture conflit
order: 1
nav:
  title: Doc
  path: /components
  order: 16
group:
  title: ImageListViewer
  order: 160
---

Usually, we will put an ImageListViewer on the scroll control of the App home page,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image001.png>)

The scroll control can be a ScollBox, ListBox or ListView,  
They all have the function of sliding up and down,  
And ImageListViewer has the function of switching pictures left and right,  
This way, when I switch images left and right in the ImageListViewer,  
It is easy to cause the scroll control to slide up and down,  
greatly affect the user experience.

The correct effect should be,  
When I switch vertically on ImageListViewer, the scroll control will slide up and down,  
In other cases, ImageListViewer should be able to switch pictures,

How to resolve this gesture conflict?

All scroll controls inherit from ScrollControl,  
ScrollControl has two gesture management components,  
VertControlGestureManager and HorzControlGestureManager,  
VertControlGestureManager is used to handle up and down sliding, up and down inertial scrolling, etc.,  
We need to set VertControlGestureManager.IsNeedDecideFirstGestureKind to True,  
After IsNeedDecideFirstGestureKind is True,  
It means that every time you start to slide the ScrollControl with a gesture, you need to slide a certain distance first.  
Then VertControlGestureManager determines that the sliding direction is the vertical direction up and down,  
Only in response to scrolling up and down,  
When the ImageListViewer is placed on the ScrollControl,  
It is only necessary to judge the vertical direction of the up and down when the gesture is swiped on the ImageListViewer.  
There is no need to judge in places other than ImageListViewer.  
As shown by the arrow below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image003.png>)

Then write the VertControlGestureManager.OnPrepareDecidedFirstGestureKind event,  
This event will pass in the position where the mouse is sliding,  
If the mouse sliding position is in ImageListViewer,  
Then you need to judge the vertical direction up and down,  
If it is not in ImageListViewer, then there is no need to judge the direction,  
The code handled by the ScrollBox is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image005.png>)

```delphi | pure
procedure TFrameHome.DoScrollBoxVertManagerPrepareDecidedFirstGestureKind(
        Sender: TObject; AMouseMoveX, AMouseMoveY: Double;
        var AIsDecidedFirstGestureKind: Boolean;
        var ADecidedFirstGestureKind: TGestureKind);
var
    APlayerOriginPoint:TPointF;
    AFirstItemRect:TRectF;
begin
    //The absolute coordinates of the relative form are passed to the ScrollBox
    //The drawing area of the ImageListViewer item
    APlayerOriginPoint:=PointF(0,0);
    APlayerOriginPoint:=imgPlayer.LocalToAbsolute(APlayerOriginPoint);
    AFirstItemRect:=RectF(APlayerOriginPoint.X,APlayerOriginPoint.Y,
                            APlayerOriginPoint.X+Self.imgPlayer.Width,
                            APlayerOriginPoint.Y+Self.imgPlayer.Height
                            );
    if PtInRect(AFirstItemRect,PointF(AMouseMoveX,AMouseMoveY)) then
    begin
        //inside the ImageListViewer, then check the initial gesture direction
    end
    else
    begin
        //Not in the ImageListViewer, then slide freely
        //AIsDecidedFirstGestureKind means that I have determined the direction, no need to judge anymore
        //ADecidedFirstGestureKind indicates a good direction to judge        AIsDecidedFirstGestureKind:=True;
        ADecidedFirstGestureKind:=TGestureKind.gmkVertical;
    end;
end;
```

The initial setup code is as follows:

```delphi | pure
Self.sbClient.Prop.VertControlGestureManager.IsNeedDecideFirstGestureKind:=True;
Self.sbClient.Prop.VertControlGestureManager.OnPrepareDecidedFirstGestureKind:=Self.DoScrollBoxVertManagerPrepareDecidedFirstGestureKind;
```

The code for ListBox processing is as follows:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image007.png>)

```delphi | pure
procedure TFrameShop.DoListBoxVertManagerPrepareDecidedFirstGestureKind(
            Sender: TObject; AMouseMoveX, AMouseMoveY: Double;
            var AIsDecidedFirstGestureKind: Boolean;
            var ADecidedFirstGestureKind: TGestureKind);
var
    AFirstItemRect:TRectF;
begin
    //The drawing area of the ImageListViewer item
    AFirstItemRect:=Self.lbHome.Prop.Items[0].ItemDrawRect;
    if PtInRect(AFirstItemRect,PointF(AMouseMoveX,AMouseMoveY)) then
    begin
        //inside the ImageListViewer, then check the initial gesture direction
    end
    else
    begin
        //Not in the ImageListViewer, then swipe at will
        AIsDecidedFirstGestureKind:=True;
        ADecidedFirstGestureKind:=TGestureKind.gmkVertical;
    end;
end;
```

The initial setup code is as follows:

```delphi | pure
Self.lbHome.Prop.VertControlGestureManager.IsNeedDecideFirstGestureKind:=True;
Self.lbHome.Prop.VertControlGestureManager.OnPrepareDecidedFirstGestureKind:=Self.DoListBoxVertManagerPrepareDecidedFirstGestureKind;
```
