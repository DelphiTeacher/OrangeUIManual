---
title: Automatic pull down to refresh
order: 16
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

In versions before 1.70, if you want to implement a pull-down refresh panel,  
You need to drag a PullLoadPanel on the form,  
Then set it to ListBox.VertScrollBar.Prop.MinPullLoadPanel,  
Then write the pull-down refresh event in the OnExecuteLoad event of PullLoadPanel,  
causing great inconvenience to users,  
So in version 1.70,  
Added automatic pull-down refresh and pull-up loading more functions,  
The principle is to use PullLoadPanel, but it is automatically created in the control.

ListBox.Properties adds the following properties:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image001.png>)

EnableAutoPullDownRefreshPanel: Indicates that the function of automatically pulling down the refresh panel is enabled,  
EnableAutoPullUpLoadMorePanel: Indicates that the function of automatically pulling up and loading more panels is enabled.  
PullDownRefreshPanel: A custom pull-down refresh panel  
PullUpLoadMorePanel: Custom pull-up to load more panels

ListBox.SelfOwnMaterial adds the following properties:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image003.png>)

PullDownRefreshPanelMaterial: Automatic pull down to refresh the panel material  
PullUpLoadMorePanelMaterial: Automatically pull up and load more panel materials

ListBox adds two events:  
OnPullDownRefresh is the pull down refresh event,  
OnPullUpLoadMore is a pull-up load more event,

ListBox.Properties adds the following methods:  
StartPullDownRefresh: Start pull down refresh  
StartPullUpLoadMore: Start to pull up to load more  
StopPullDownRefresh: end pull down refresh  
StopPullUpLoadMore: End pull-up loading more

Next, an example is given,
First prepare the following ListBox,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image007.png>)

Select the ListBox, then scroll with the mouse wheel during the design period, the list item will move down,  
This is the method used to simulate a pull-to-refresh gesture at runtime,  
However, the pull-down refresh panel will not appear at this time.  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image009.png>)

We tick EnableAutoPullDownRefreshPanel,  
Indicates that the ability to automatically pull down to refresh the panel is enabled,  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image011.png>)

Then select the ListBox, and then scroll with the mouse wheel during the design period, and the pull-down refresh panel will appear.  
As shown below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image013.png>)

Pull down to refresh the panel will appear for three seconds at design time, and then disappear automatically,  
This pull-down refresh panel is a PullLoadPanel control automatically created based on the ListBox.SelfOwnMaterial.PullDownRefreshPanelMaterial material.  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image015.png>)

In the PullDownRefreshPanelMaterial material:  
LoadingCaption is the title when the drop-down panel is being refreshed, the default is "refreshing"  
DecidedLoadCapton is the title of the drop-down panel when it can be refreshed, the default is "release refresh"  
UnDecideLoadCaption is the title when the drop-down panel is pulled and cannot be refreshed, the default is "pull-down refresh"  
DrawLoadingCaptionParam is the font drawing parameter for drawing the title of the drop-down panel,  
LoadingPicture is a scrolling picture,  
When specifying an image, the image is automatically rotated to indicate loading  
When the SkinImageList is specified, all the pictures in the ImageList will be played in a loop to indicate that it is being refreshed.  
IndicatorColor is the color of the automatically created scrolling picture, the default is black,  
When LoadingPicture is empty, IndicatorColor is used to create twelve scrolling pictures  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image017.png>)

Then these twelve scrolling pictures form a SkinImageList and assign it to the Image on the drop-down panel,  
Looping these twelve images on pull-to-refresh means it's refreshing

For now, we just need to keep all the properties by default,  
Then run to see the effect:  
pull down a short distance  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image019.png>)

pull down a long distance  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image021.png>)

release your finger  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image023.png>)

Next, you also need to get data from the network when pulling down to refresh,  
Start the thread in the OnPullDownRefresh event,  
Execute in a thread to get data from the network,  
After the thread ends, load the data obtained from the network into the ListBox,

First put a thread task event component TTimerTaskEvent,  
Write in its OnExecute to get data from the network,  
code show as below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image025.png>)

```delphi | pure
procedure TFrameListBox_AutoPullDownRefresh.TimerTaskEvent1Execute(
Sender: TObject);
begin
   // Simulate getting data from the network
   Sleep(3000);
end;
```

Note: The OnExecute event runs in a thread,  
So you can't access UI components or set UI components in this event.  
If the fetch data is not executed in the thread, it will cause the interface to become unresponsive
Then write in its OnExecuteEnd to load the data obtained from the network into the ListBox,  
code show as below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image027.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image029.png>)

![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image031.png>)

```delphi | pure
procedure TFrameListBox_AutoPullDownRefresh.TimerTaskEvent1ExecuteEnd(
Sender: TObject);
var
  APicServerUrl:String;
  AListBoxItem:TSkinListBoxItem;
begin
  //Load the data obtained from the network into the ListBox
  //load
  Self.lbMultiPic.Prop.Items.BeginUpdate;
  try
    // clear the list item
    Self.lbMultiPic.Prop.Items.Clear(True);

    //Image server link address
    APicServerUrl:='http://www.orangeui.cn/download/'
    +'testdownloadpicturemanager/mobileposthumbpic/';


    //add list item
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='Aldai Snow Cabernet Sauvignon Silver Label';
    AListBoxItem.Icon.Url:=APicServerUrl+'Aldai Snow Cabernet Sauvignon Silver Label.jpg';

    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='Aldice Denas';
    AListBoxItem.Icon.Url:=APicServerUrl+'Aldice Danas.jpg';

    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='Anxi Tieguanyin';
    AListBoxItem.Icon.Url:=APicServerUrl+'Anxi Tieguanyin.jpg';

    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='Wahaha Tea Coffee';
    AListBoxItem.Icon.Url:=APicServerUrl+'Wahaha Tea Coffee.jpg';

    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='Wahaha Maoyuan Coffee';
    AListBoxItem.Icon.Url:=APicServerUrl+'Wahaha Maoyuan Coffee.jpg';

    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='Mermaid love hairtail series';
    AListBoxItem.Icon.Url:=APicServerUrl+'Mermaid love hairtail series.jpg';

    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.Caption:='Food package 128 yuan';
    AListBoxItem.Icon.Url:=APicServerUrl+'food package 128 yuan.jpg';

  finally
    Self.lbMultiPic.Prop.Items.EndUpdate();
    //end pull down to refresh
    Self.lbMultiPic.Prop.StopPullDownRefresh();
  end;
end;
```

Note: After loading the data, you need to call the StopPullDownRefresh method to end the pull-down refresh.  
The StopPullDownRefresh method has two parameters,  
ALoadingStopCaption, indicating whether the pull-down refresh succeeds or fails, the default value is "Refresh succeeded!",  
AWaitHintTime, which indicates how long the result of "Refresh is successful!" will be prompted at the end of the pull-down refresh. The default value is 600 milliseconds.  
The above parameters can be kept by default.

Then in the ListBox.OnPullDownRefresh event, start the thread,  
code show as below:  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image033.png>)

```delphi | pure
procedure TFrameListBox_AutoPullDownRefresh.lbMultiPicPullDownRefresh(
Sender: TTimerTask);
begin
   //implement
   TimerTaskEvent1.Run;
end;
```

Let's run to see the effect:  
Pull down a long distance and release  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image035.png>)

After three seconds, the data acquisition ends, loads on the ListBox, and ends the refresh,  
![](<http://www.orangeui.cn/orangeuiblog/OrangeUI/10.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B6%20%E8%87%AA%E5%8A%A8%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0).files/image037.png>)
