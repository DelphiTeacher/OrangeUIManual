---
title: 自动下拉刷新
order: 16
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

在1.70以前的版本中，如果要实现下拉刷新面板，  
需要拖一个PullLoadPanel在窗体上，  
然后把它设置给ListBox.VertScrollBar.Prop.MinPullLoadPanel,  
再在PullLoadPanel的OnExecuteLoad事件中写下拉刷新事件，  
给用户造成很大的不便，  
因此在1.70版本中，  
加入了自动下拉刷新和上拉加载更多的功能，  
原理还是使用PullLoadPanel,只不过放在控件中自动创建而已，  
 
ListBox.Properties添加了如下属性:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image001.png)



EnableAutoPullDownRefreshPanel:表示启用自动下拉刷新面板的功能，  
EnableAutoPullUpLoadMorePanel:表示启用自动上拉加载更多面板的功能，  
PullDownRefreshPanel:自定义的下拉刷新的面板  
PullUpLoadMorePanel:自定义的上拉加载更多的面板  
 
ListBox.SelfOwnMaterial添加了如下属性:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image003.png)


PullDownRefreshPanelMaterial:自动下拉刷新面板的素材  
PullUpLoadMorePanelMaterial:自动上拉加载更多面板的素材  
 
ListBox添加了两个事件:  
OnPullDownRefresh是下拉刷新事件，  
OnPullUpLoadMore是上拉加载更多事件，  
 
ListBox.Properties添加了如下方法:  
StartPullDownRefresh:开始下拉刷新  
StartPullUpLoadMore:开始上拉加载更多  
StopPullDownRefresh:结束下拉刷新  
StopPullUpLoadMore:结束上拉加载更多  
 
 
接下来举例说明，  
先准备如下ListBox,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image007.png)


选中该ListBox,然后在设计期用鼠标滚轮滚动，列表项会下移，  
这是用来模拟在运行时手势下拉刷新的方法，  
但此时并不会出现下拉刷新面板，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image009.png)


我们把EnableAutoPullDownRefreshPanel打上勾，  
表示启用自动下拉刷新面板的功能，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image011.png)


再选中该ListBox,然后在设计期用鼠标滚轮滚动，就会出现下拉刷新面板，  
如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image013.png)


在设计时下拉刷新面板会出现三秒，然后自动消失，  
这个下拉刷新面板是根据ListBox.SelfOwnMaterial.PullDownRefreshPanelMaterial素材而自动创建的PullLoadPanel控件，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image015.png)


在PullDownRefreshPanelMaterial素材中:  
LoadingCaption为下拉面板正在刷新时的标题，默认为”正在刷新”  
DecidedLoadCapton为下拉面板拉到可以刷新时的标题，默认为”松开刷新”  
UnDecideLoadCaption为下拉面板拉到还不可以刷新时的标题，默认为”下拉刷新”  
DrawLoadingCaptionParam为绘制下拉面板标题的字体绘制参数，  
LoadingPicture为滚动图片，  
当指定一张图片时，会自动旋转这张图片来表示正在加载  
当指定SkinImageList时，会循环播放ImageList中的所有图片来表示正在刷新，  
IndicatorColor为自动创建的滚动图片的颜色，默认为黑色，  
当LoadingPicture为空时，会使用IndicatorColor来创建十二张滚动图片  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image017.png)


然后这十二张滚动图片组成一个SkinImageList赋给下拉面板上的Image,  
在下拉刷新时循环播放这十二张图片表示正在刷新  
 
目前我们只需要把所有属性保持默认即可，  
然后运行看一下效果:  
下拉一小段距离  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image019.png)


下拉一大段距离  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image021.png)


松开手指  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image023.png)


接下来还需要在下拉刷新时从网络获取数据，  
在OnPullDownRefresh事件中启动线程，  
在线程中执行从网络获取数据，  
在线程结束后把从网络获取到的数据加载到ListBox中， 
 
 
先放一个线程任务事件组件TTimerTaskEvent,  
在它的OnExecute中编写从网络获取数据,  
代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image025.png)


```delphi | pure
procedure TFrameListBox_AutoPullDownRefresh.TimerTaskEvent1Execute(
Sender: TObject);
begin
  //模拟从网络获取数据
  Sleep(3000);
end;
```

注意:OnExecute事件在线程中运行，  
因此不能在此事件中访问UI组件或设置UI组件。  
如果取数据不放在线程中执行，会造成界面无响应  
 
 
再在它的OnExecuteEnd中编写把从网络获取到的数据加载到ListBox中，  
代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image027.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image029.png)

![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image031.png)



```delphi | pure
procedure TFrameListBox_AutoPullDownRefresh.TimerTaskEvent1ExecuteEnd(
Sender: TObject);
var
  APicServerUrl:String;
  AListBoxItem:TSkinListBoxItem;
begin
  //把从网络获取到的数据加载到ListBox中
  //加载
  Self.lbMultiPic.Prop.Items.BeginUpdate;
  try
    //清空列表项
    Self.lbMultiPic.Prop.Items.Clear(True);
    
    //图片服务器链接地址
    APicServerUrl:='http://www.orangeui.cn/download/'
    +'testdownloadpicturemanager/mobileposthumbpic/';
    
    
    //添加列表项
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='阿尔代雪赤霞珠银标';
    AListBoxItem.Icon.Url:=APicServerUrl+'阿尔代雪赤霞珠银标.jpg';
    
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='阿尔岱雪丹娜斯';
    AListBoxItem.Icon.Url:=APicServerUrl+'阿尔岱雪丹娜斯.jpg';
    
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='安溪铁观音';
    AListBoxItem.Icon.Url:=APicServerUrl+'安溪铁观音.jpg';
    
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='娃哈哈茶咖';
    AListBoxItem.Icon.Url:=APicServerUrl+'娃哈哈茶咖.jpg';
    
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='娃哈哈猫缘咖啡';
    AListBoxItem.Icon.Url:=APicServerUrl+'娃哈哈猫缘咖啡.jpg';
    
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='人鱼恋带鱼系列';
    AListBoxItem.Icon.Url:=APicServerUrl+'人鱼恋带鱼系列.jpg';
    
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='食品套餐128元';
    AListBoxItem.Icon.Url:=APicServerUrl+'食品套餐128元.jpg';
  
  finally
    Self.lbMultiPic.Prop.Items.EndUpdate();
    //结束下拉刷新
    Self.lbMultiPic.Prop.StopPullDownRefresh();
  end;
end;
```
 
注意:在加载数据结束之后，需要调用StopPullDownRefresh方法结束下拉刷新，  
StopPullDownRefresh方法有两个参数， 
ALoadingStopCaption，表示此次下拉刷新是成功还是失败，默认值是”刷新成功!”,  
AWaitHintTime，表示下拉刷新结束时提示”刷新成功!”结果多少时间，默认值是600毫秒，  
以上参数保持默认即可。  
 
再在ListBox.OnPullDownRefresh事件中，启动线程，  
代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image033.png)


```delphi | pure
procedure TFrameListBox_AutoPullDownRefresh.lbMultiPicPullDownRefresh(
Sender: TTimerTask);
begin
  //执行
  TimerTaskEvent1.Run;
end;
```
 
 
我们运行看一下效果:  
下拉一大段距离后松开  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image035.png)


三秒之后，数据获取结束，加载到ListBox上，并结束刷新，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image037.png)




