---
title: 解决手势冲突
order: 1
nav:
  title: Doc
  path: /components
  order: 16
group:
  title: 图片列表手势切换控件ImageListViewer
  order: 160
---



通常，我们会在App首页的滚动控件上放一个ImageListViewer，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image001.png)


滚动控件可以是ScollBox，ListBox或ListView，  
它们都具有上下滑动的功能，  
而ImageListViewer具有左右切换图片的功能，  
这样一来，当我在ImageListViewer左右切换图片时，  
很容易造成滚动控件的上下滑动，  
十分影响用户体验，  
 
正确的效果应该是，  
我在ImageListViewer上垂直切换时滚动控件才会上下滑动，  
其他情况下，ImageListViewer都应该能切换图片，  
   
如何解决这种手势冲突呢?  
 
所有滚动控件都是从ScrollControl继承的，  
ScrollControl有两个手势管理组件，  
VertControlGestureManager和HorzControlGestureManager，  
VertControlGestureManager用来处理上下滑动，上下惯性滚动等，  
我们需要把VertControlGestureManager.IsNeedDecideFirstGestureKind设置为True，  
IsNeedDecideFirstGestureKind为True了之后，  
表示每次开始手势滑动ScrollControl时，都需要先滑动一段距离，  
然后VertControlGestureManager判断出滑动的方向为上下垂直方向之后，  
才响应上下滚动，  
当ScrollControl上面放了ImageListViewer之后，  
只需要手势滑动在ImageListViewer上时需要判断上下垂直方向，  
在ImageListViewer之外的地方则不需要判断，  
如下箭头所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image003.png)


那就要编写VertControlGestureManager.OnPrepareDecidedFirstGestureKind事件，  
这个事件会传入鼠标滑动所在的位置，  
如果鼠标滑动位置在ImageListViewer中，  
那么需要判断上下垂直方向，  
如果不在ImageListViewer中，那么不需要判断方向，  
ScrollBox处理的代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image005.png)

```delphi | pure
procedure TFrameHome.DoScrollBoxVertManagerPrepareDecidedFirstGestureKind(
        Sender: TObject; AMouseMoveX, AMouseMoveY: Double;
        var AIsDecidedFirstGestureKind: Boolean;
        var ADecidedFirstGestureKind: TGestureKind);
var
    APlayerOriginPoint:TPointF;
    AFirstItemRect:TRectF;
begin
    //传给ScrollBox的是相对窗体的绝对坐标
    //广告轮播Item的绘制区域
    APlayerOriginPoint:=PointF(0,0);
    APlayerOriginPoint:=imgPlayer.LocalToAbsolute(APlayerOriginPoint);
    AFirstItemRect:=RectF(APlayerOriginPoint.X,APlayerOriginPoint.Y,
                            APlayerOriginPoint.X+Self.imgPlayer.Width,
                            APlayerOriginPoint.Y+Self.imgPlayer.Height
                            );
    if PtInRect(AFirstItemRect,PointF(AMouseMoveX,AMouseMoveY)) then
    begin
        //在广告轮播控件内,那么要检查初始手势方向
    end
    else
    begin
        //不在在广告轮播控件内,那么随意滑动
        //AIsDecidedFirstGestureKind表示我已经确定好方向了，不需要再判断了
        //ADecidedFirstGestureKind表示判断好的方向
        AIsDecidedFirstGestureKind:=True;
        ADecidedFirstGestureKind:=TGestureKind.gmkVertical;
    end;
end;
```
 
初始设置代码如下:
```delphi | pure
Self.sbClient.Prop.VertControlGestureManager.IsNeedDecideFirstGestureKind:=True;
Self.sbClient.Prop.VertControlGestureManager.OnPrepareDecidedFirstGestureKind:=Self.DoScrollBoxVertManagerPrepareDecidedFirstGestureKind;
```
 
 
ListBox处理的代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/18.3.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E5%88%97%E8%A1%A8%E6%9F%A5%E7%9C%8B%E6%8E%A7%E4%BB%B6ImageListViewer)(%E7%A4%BA%E4%BE%8B3%20%E8%A7%A3%E5%86%B3%E4%B8%8E%E6%BB%9A%E5%8A%A8%E6%8E%A7%E4%BB%B6%E7%9A%84%E6%89%8B%E5%8A%BF%E5%86%B2%E7%AA%81).files/image007.png)

```delphi | pure
procedure TFrameShop.DoListBoxVertManagerPrepareDecidedFirstGestureKind(
            Sender: TObject; AMouseMoveX, AMouseMoveY: Double;
            var AIsDecidedFirstGestureKind: Boolean;
            var ADecidedFirstGestureKind: TGestureKind);
var
    AFirstItemRect:TRectF;
begin
    //广告轮播Item的绘制区域
    AFirstItemRect:=Self.lbHome.Prop.Items[0].ItemDrawRect;
    if PtInRect(AFirstItemRect,PointF(AMouseMoveX,AMouseMoveY)) then
    begin
        //在广告轮播控件内,那么要检查初始手势方向
    end
    else
    begin
        //不在在广告轮播控件内,那么随意滑动
        AIsDecidedFirstGestureKind:=True;
        ADecidedFirstGestureKind:=TGestureKind.gmkVertical;
    end;
end;
```
 
初始设置代码如下:
```delphi | pure
Self.lbHome.Prop.VertControlGestureManager.IsNeedDecideFirstGestureKind:=True;
Self.lbHome.Prop.VertControlGestureManager.OnPrepareDecidedFirstGestureKind:=Self.DoListBoxVertManagerPrepareDecidedFirstGestureKind;
```
 


