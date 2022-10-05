---
title: 更新日志
order: 0.1
nav:
  title: 文档
  path: /components
  order: 1
group:
  title: 更新日志
  order: 10
---

2022-10-05: 发布OrangeUI FMX 2.1
-----------------
1.加入图表控件       
2.完善表格在尺寸更改时重新计算表格列的显示尺寸，如果某一列的尺寸为百分比时。    
3.完善ImageListViewer的手势缩放功能    
4.加入Linux平台的支持（需要安装FMXLinux）    


2022-09-01: 发布OrangeUI FMX 2.03
-----------------
1.修复控件BindItemFieldName设置为ItemExpanded时绑定无效的问题  


2022-05-05: 发布OrangeUI FMX 2.02
-----------------
1.修复ComboEdit点击下拉箭头弹出虚拟键盘挡住选项的问题  
2.每个Item在创建的时候可以通过FItemStyleConfig来简单设置样式Frame  


2022-03-18: 发布OrangeUI FMX 2.0
-----------------
1.ListBox加入了OnNewListItemStyleFrameCache事件，可以在该事件中初始ListItemStyleFrame，示例中加入了ListBoxFrame_UseListItemStyleFrame和ListViewFrame_UseListItemStyleFrame示例。  
2.ListBox中关于ListItemStyleFrame的自定义也可以在DefaultListItemStyleConfig中。  
3.PageControl支持标签图标超出绘制，IsAfterPaintTabIcon设置为True，并且在OnCustomCalcTabIconDrawRect事件中计算图标的绘制矩形。  
4.图片支持设置文件名，从本地加载  
(1)在SkinTheme组件中设置图片搜索路径，搜索目录配置在SkinTheme组件的FilePictureSearchPaths属性中。  
(2)在Picture.FileName中设置文件名，图片文件用英文名表示。在设计时即可显示预览效果  
(3)在移动平台上使用时请将该图片目录下的所有文件布署进去。  
(4)文件名可以支持多分辨率，加上后缀@2x,@3x  
5.修复Label自动大小尺寸计算的问题  
6.矩形绘制参数的调整：当圆角关径都为-1时，半径为宽度和高度的一半，并取最小值。  
7.FrameContext组件的OnCanReturn事件由原来的：  
	(Sender: TObject;var AIsCanReturn: Boolean)  
	改为：  
	(Sender: TObject;var AIsCanReturn: TFrameReturnActionType);  
(1)关于页面框架返回需要释放页面的问题，可以在FrameContext组件的OnCanReturn事件中返回AIsCanReturn为fratReturnAndFree即可  
(2)或者Frame实现IFrameHistroyReturnEvent接口，在接口方法function CanReturn:TFrameReturnActionType;中返回fratReturnAndFree  




2021-09-17: 发布OrangeUI FMX 1.90
-----------------
1.VCL窗体加入DWM阴影，但是  
a)去除了圆角窗体的功能  
b)去除了自定义标题栏高度的功能  
c)窗体边框颜色用DrawClientRectParam+Form.Padding来实现  
2.PageControl加入两个事件，可以自定义标签头的矩形  
3.Button的Icon可以绑定ItemIcon  
4.滚动控件中的滚动条尺寸可以自定义，原来是都是定死的，宽度为6  
5.VCL下的TSkinPicture支持IsClipRound属性，将图片剪裁成圆形  
6.Item.ItemType加入了sitRowDevideLine类型，表示行分隔线  
7.关于高清屏图片缩放的问题解决方案  
a)在ImageList中加入三张图片，分别命名为：图片1,图片1@2x,图片1@3x，这样子，  
b)然后在DrawPicture中设置ImageName和SkinImageList，  
c)OrangeUI会根据名称和当前的DPI自动选择当前尺寸的图片  
8.DrawRectParam加入了颜色加深和变浅的效果，可以用在按钮的背景切换效果  
9.支持Delphi 11  



2021-06-15: 发布OrangeUI FMX 1.87
-----------------
1.列表控件（ListBox,ListView,Grid）绘制优化：  
a)CalcDrawStartAndEndIndex方法：  
i.搜索开始绘制的列表项下标，由原来的遍历搜索改为二分法  
ii.修复ListItemStyleFrame缓存的问题  
b)DoCalcAllSkinListItemRect方法：  
i.计算内容宽高度由原来的遍历计算，改为使用计算绘制矩形后的值  
2.修复PageControl在中间一个TabSheet被删除之后，再添加一个TabSheet会导致PageIndex不连续的问题，问题描述为：  
a)比如原来PageIndex为0,1,2,3  
b)删除了2之后，PageIndex为0,1,3  
c)再添加一个TabSheet，PageIndex变为0，1，3，3 



2021-05-20: 发布OrangeUI FMX 1.86(FMX)
-----------------
1.修复在Android 64位下控件面板上OrangeUI为灰色不可选择的问题  
2.因为大家使用了别的同名组件，控件中去除了XSuperObject的引用，如果要使用在线列表项样式，需要引用uDownloadListItemStyleManager单元  



2021-05-05: 发布OrangeUI FMX 1.85(VCL)
-----------------
1.修复在高分屏下最小化最大化按钮显示过小的问题，SkinFormMaterial加入了SysBtnWidth和SysBtnHeight的属性  
2.修复了双击标题栏不会最大化/还原的问题  
3.ListBox和Grid的高分屏支持  



2021-04-14: 发布OrangeUI FMX 1.85 Beta
-----------------
1.修复MessageBoxFrame弹不出来的问题  
2.XSuperObject集成到了OrangeUI中，uBufferBitmap单元改名为uSkinBufferBitmap  
3.ListBox加入在线样式功能、提供样式编译器，使用方式查看示例  
a)工作原理：将设计面板结构保存成一个json放在网站上，ListBox会下载并缓存下来并生成实例做为列表项的样式。每次APP启动都会检测样式是否有更新。类似Image支持Url图片的模式。  
b)示例：OrangeUI Samples(Main Demo)\OrangeOnlineListItemStyle\App\  
c)设计器：OrangeUI Samples(Main Demo)\OrangeOnlineListItemStyle\Designer\  
	可以直接使用D区账号登录  
d)文件结构介绍 ：  
i.programs.json：程序说明  
ii.pages.json：包含样式列表  
iii.样式文件，比如ListItemStyleFrame_ProcessTaskOrder2.json，里面有设计面板的控件结构。  



2021-01-026: 发布OrangeUI FMX 1.84
-----------------
1.修复在IOS平台下PageControl直接放在Form上闪退的问题  




2021-01-01: 发布OrangeUI FMX 1.83
-----------------
1.RoundImage在Android下的抗锯齿处理  
2.圆角矩形在Android下的抗锯齿处理  


2020-12-15: 发布OrangeUI FMX 1.82
-----------------
1.Frame跳转框架加入了垂直切换和透明度切换的效果  
2.页面Frame跳转动画效果优化  
3.MessageBoxFrame显示采用渐显效果，用户体验更高  
4.修复ScrollBox上滑动SkinFMXEdit控件会触发误编辑的问题  




2020-10-20: 发布OrangeUI FMX 1.80
-----------------
1.表格的Column加入了AutoSize和AutoSizeMinWidth的属性  
2.对话框MessageBoxFrame的英文翻译完善  
3.SkinTheme添加NavigationBarColor和NavigationBarFontColor  


2020-05-20: 发布OrangeUI FMX 1.79 Beta
-----------------
1.修复FMXEdit控件的CanFocus为False时不响应OnClick的问题。   
2.更改Edit在Grid上编辑时拖动Edit不滑动Grid  
3.更改CheckBox在Grid上点击时直接更改IsChecked属性，而不需要先选中  
4.关于用户提出来页面切换卡顿的问题，建议在页面动画结束之后加载，方法为放一个FrameContext在Frame上，在它的OnShow或OnShowEx事件中写加载方法，它会在切换动画结束时调用，示例如下:  
	//先判断是正常显示还是返回显示  
if Self.FrameContext1.IsReturnShow then Exit;  
	//加载数据的代码  
.................................  
5.Frame框架的使用建议:  
Frame已经不再需要加一个FrameHistroy:TFrameHistroy;  
显示一个页面:  
	HideFrame;  
	ShowFrame(TFrame(AFrame),TFrameA);  
返回上一页:  
	HideFrame;  
	ReturnFrame;  
6.NotifyNumberIcon改动，支持绑定文本，  

7.虚拟键盘自动处理，不需要在MainForm的虚拟键盘中加入处理的代码，有ScrollBox自动会抬高。  
8.Grid加入了表头点击事件OnClickColumn事件  
9.完善PageControl在iPhoneX上底部自动抬高的功能，uComponentType加入了IsIPhoneX方法。  
10.加入了正则表达式标记文本视图控件RegExTagLabelView  
11.设计面板支持绑定Item.SubItems中的Key  
值的设置：AListBoxItem.SubItems.Values[‘key’]:=’OrangeUI’;  
a)绑定方式1：设计面板的ItemStringsBindingControlCollection中添加，然后设置StringsKey为’key’  

b)绑定方式2：直接设置控件的BindItemFieldName为key  






2020-03-28: 发布OrangeUI FMX 1.78.3
-----------------
1.MultiColorLabel加入了Color1~4,Text1~4的属性，方便设置  
2.修复设计面板上的控件不能绑定SubItems第10个以上的字符串的问题  


2020-03-08: 发布OrangeUI FMX 1.78.2
-----------------
1.DateEdit控件完善放在ScrollBox中滑动时不会误弹选择框。  
2.ComboBox控件完善放在ScrollBox中滑动时不会误弹选择框。  
3.TimeEdit控件完善放在ScrollBox中滑动时不会误弹选择框，  
并加入了IsShowUpDownButtonAtWindows属性，控制上下箭头按钮的显示。  



2020-02-18: 发布OrangeUI FMX 1.78.1
-----------------
1.加入了滚动文本RollLabel控件，并可以控制速度  
2.ListBox加入了内容为空时显示的提示属性，如下:  
IsEmptyContent:是否启用该功能  
EmptyContentCaption:内容为空时的标题  
EmptyContentPicture:内容为空时的图片  
EmptyContentDescription:内容为空时的描述  
EmptyContentControl:内容为空时的自定义控件(比如按钮)  

3.三方SDK加入了苹果三方登陆功能  
4.修复表格控件的单元格在编辑时会挡住表头的问题  
5.控件包去除了XSuperObject的引用，避免与其他控件冲突  
6.因为OrangeUI已分出付费版，故开放案例源码出来  
  



2020-02-11: 发布OrangeUI FMX 1.78
-----------------
1．将Hint属性发布出来了，个别客户开发Windows程序需要  
2．控件设计器的菜单根据Windows设置的区域语言来自动切换中英文  
3．原来OranegProjectCommon中的很多公共文件基本都移动到了控件中  
	比如XSuperObject，很多公共Frame，uUIFunction等  
4．ItemGrid的改动  
	a．弃用了Column的ItemDataType和SubItemsIndex属性，改用BindItemFieldName  
	b．修复统计区添加Item、过滤Item后不刷新值的问题  
	c．开放EditingCol属性，表示当前在编辑哪个列  
	d．在官网上加入了使用说明  
5．MessageBoxFrame界面更改，改成圆角模式  
6．完善DBGrid数据集关闭后，表格列被清空的问题  
7．添加ListBox等列表控件之后会自动添加uDrawCanvas和uSkinItems单元，避免使用OnPrepareDrawItem事件的时候需要手动添加的麻烦  
8．三方SDK免费版集成进入了OrangeUI控件包中，所有SDK能自动配置  
	支付宝支付、微信支付、文字转语音、个推推送、蓝牙打印等\  
	比如OrangeUI路径为:  
..\..\..\OrangeUIDesign\DCU\FMX\D10_3\$(Platform)\$(Config);  
那么三方SDK路径为:  
..\..\..\OrangeUIDesign\SDK\FMX\D10_3\$(Platform)\$(Config)  
具体收费请看官网  
9．OrangeUI正式区分免费版和付费版分开独立下载，免费版有功能限制，超出使用限制会弹窗提醒，具体限制查看官网  









2019-11-15: 发布OrangeUI FMX 1.77 Beta for D10.3.2
-----------------
1．Edit,ComboBox,ComboEdit加入了IsAutoEditInItem属性,设置为True,在ListBox中点击即可启动编辑,在Windows上按回车即可结束编辑  
2．自动添加单元https://www.debugease.com/delphi/2141089.html  
http://ishare.iask.sina.com.cn/f/1H4Uwue324Sc.html  




2019-10-05: 发布OrangeUI FMX 1.77 Beta for D10.3.2
-----------------
1．PageControl加入手势切换功能，支持上下左右切换分页  
2．加入手势切换分页控件SwitchPageListPanel  
3．控件加入了BindItemFieldName属性，使设计面板的绑定方式更简单  
如要将设计面板上的lblItemCaption显示Item.Caption，  
原来的绑定方式为设置ItemDesignerPanel.Properties.ItemCaptionBindingControl为lblItemCaption，  
现在只需要把lblItemCaption.BindItemFieldName为ItemCaption即可  
4．由于功能需要，ListBox支持新的列表项TSkinJsonItem，  
TSkinJsonItem和TSkinListBoxItem都继承于TSkinItem  
升级时请注意  
ListBox.Prop.SelectedItem,InteractiveItem等从原来的TSkinListBoxItem改为了TSkinItem，  
ListView.Prop.SelectedItem,InteractiveItem等从原来的TSkinListViewItem改为了TSkinItem，  
TreeView.Prop.SelectedItem,InteractiveItem等从原来的TSkinTreeViewItem改为了TBaseSkinTreeViewItem  
设置ItemDesignerPanel.Properties.PreviewItem.JsonStr为  
{"时间":"2019-10-03 15:40","服务好":"1","服务一般":"0","服务差":"0"}  
通过下拉选择设计面板上控件的BindItemFieldName属性就可以指定要显示Json中的哪个值  
添加TSkinJsonItem的方法如下，  
只需要指定Item.Json属性，不再需要再指定Item.Caption,Detail,Detail1,Detail2....  
4．表格ItemGrid的完善    
1．Column支持设计面板和样式风格，但只能绑定一个值GridCellValue，  
设计面板上控件的BindItemFieldName指定为GridCellValue即可。  
比如ItemGrid.Column的BindItemFieldName为ItemDetail3,表示这一列显示Item.Detail3，  
再将设计面板上的Label的BindItemFieldName设置为GridCellValue，表示这个Label显示单元格的值  
给第一个Item.Detail3设置一个值  
表格就显示出来了  
2．当单元格被选中，还能再次响应OnClickCell事件  
3．弃用ItemGrid.Column.ItemDataType和SubItemIndex，全部改用BindItemFieldName，比如原来要Column显示为Item.Caption，是设置Column.ItemDataType为idtCaption，现在是将BindItemFieldName设置为ItemCaption。  
5．公共页面中加入了通讯录的功能  
	













2019-07-19: 发布OrangeUI FMX 1.76.1 for D10.3.2
-----------------





2019-04-17: 发布OrangeUI FMX 1.76.1 for D10.2.3~D10.3.1
-----------------
1．修复示例升级到10.3.1拍照闪退的问题  
	如果大家的工程从10.1或10.2升级上来的，那么也需要做如下设置:  
2．在工程设置->EntitlementList->勾选Secure File Sharing  
3．在AndroidManifest.template.xml中加入如下一断，要大家手动加一下<%provider%>的:  
4．动态权限申请  
5．修复PageControl在iPhoneX上底部被虚拟Home条遮挡的问题  









2019-03-27: 发布OrangeUI FMX 1.76 for D10.2.3~D10.3.1
-----------------
1．修复在10.2以上的Android版本中使用圆角矩形会花屏的问题，仅限OrangeUI的控件。  
2．Image添加另一个拉伸方式，填满整个控件但不变形  
3．DownloadPictureManager加入了FreeNoUsePicture  
    //释放超过几秒没有再使用过的图片  
procedure FreeNoUsePicture(ASecondsBetween:Integer);  
我们在项目中发现图片多的应用特别占内存，超过300M会被系统杀掉，需要定期清理自动下载图片所占用的内存  







2019-01-27:
-----------------
1．可以去掉MainForm中的pnlVirtualKeyboard，以及FormShow中的如下代码:  
  //在Windows平台下的模拟虚拟键盘控件  
  SimulateWindowsVirtualKeyboardHeight:=160;  
  IsSimulateVirtualKeyboardOnWindows:=True;  
  GlobalAutoProcessVirtualKeyboardControlClass:=TSkinFMXPanel;  
  GlobalAutoProcessVirtualKeyboardControl:=pnlVirtualKeyBoard;  
  GlobalAutoProcessVirtualKeyboardControl.Visible:=False;  
	
  {$IFNDEF MSWINDOWS}  
  pnlVirtualKeyBoard.SelfOwnMaterialToDefault.IsTransparent:=True;  
  pnlVirtualKeyBoard.Caption:='';  
  {$ENDIF}  

2．主题色变量从uUIFunction单元移动到了uGraphicCommon单元，如果要设置的话，引用它即可  
  	//主题色  
function SkinThemeColor:TDelphiColor;  
  	//主题色2
function SkinThemeColor1:TDelphiColor;  

3．ListBox加入了列表项风格ItemStyle的属性,  
DefaultItemStyle：ItemType为sitDefault的列表项的风格  
Item1ItemStyle：ItemType为sitItem1的列表项的风格  
..............
如果使用了ItemStyle，那么ListBox就有了缓存功能，可以不需要每次刷新都重复的调用OnPrepareDrawItem事件，但要实现一个获取缓存标记的OnGetItemBufferCacheTag事件，默认如下即可，非常适合在ListBox。  

加入了一个OnClickItemDesignerPanelChild事件，用于在共享一个ItemDesignerPanel或者使用ItemStyle时时处理不同的子控件点击事件.  
如何添加一个列表项风格ListItemStyle:  
从TFrameBaseListItemStyle继承一个Frame下来,  
在Frame中添加:  
initialization  
  RegisterListItemStyle('PetchipArticle',TFramePetchipContentListItemStyle);  
finalization  
  UnRegisterListItemStyle('PetchipArticle');  
我会整理出常用的ListItemStyle,放在github上面  
https://github.com/DelphiTeacher/OrangeUIStyles.git  
大家可以自行下载或扩展。  
将ItemDesignerPanel放在Frame中还有一个好处就是可以继承和复用。  
可以在基类的基础上自定义和进行扩展。  
并且大家可以将自己设置的ListItemStyle分享出来，放在我的Github上。  
为此ItemDesignerPanel特别加入了PreviewItem和IsPreview这两个属性用于在Frame中单独设计时使用。  
	
4．TSkinPicture加入了IsClipRound，可以实现将图片剪裁成圆角.  

5．Android下面虚拟键盘隐藏与显示问题修正(参考了QDAC的代码)。  









2018-11-30：发布OrangeUI FMX 1.75 for D10.3 Beta
-----------------
控件包里面的内容有:  
1．OrangeUI控件  
a)丰富的界面控件：可以简单的实现非常美观的界面， www.orangeui.cn  
b)Frame页面框架：简单高效的APP开发模式，并具有页面切换效果，比Form模式灵活稳定。  
c)稳定高效：十几年控件开发经验的老司机倾力之作，开车之稳，让你难以想像。  
d)提供资深客服司机，为你7*24解决控件使用、APP开发、IOS证书配置、商店上架、三方SDK调用等问题  
e)付费版优惠的价格，付费版仅需688/年（免费版不提供技术支持、版本更新）  
2．通用页面框架，真的非常通用  
a)对话框，MessageBoxFrame：简洁美观，支持输入、自定义内容控件。  
b)弹出菜单框，PopupMenuFrame：使用简单，仅需传入字符串数组。  
c)头像剪裁页面，ClipHeaderFrame：支持手势放大缩小滑动，并且可以设置剪裁区域的大小。  
d)提示框，HintFrame  
e)等待框，WaitingFrame  
f)省市区选择框，SelectCityFrame，SelectAreaFrame  
g)选择照片弹出菜单框，TakePictureMenuFrame  
h)图片列表展示页面，ViewPictureListFrame  
i)单选/多选框，SingleSelectFrame/ MultiSelectFrame  
j)相册图片多选框，AllImageFrame，支持IOS+Android  
3．控件示例:  
a)控件综合示例，OrangeUISampleOfTutorial:  
i.各个控件的效果功能展示，可以直接拷贝示例中配置好的控件，省心方便。  
ii.通用页面框架的使用示例，省去使用上的困扰。  
iii.  
b)ListView的功能展示，OrangeUIListView：  
i.商城首页、商品购物、朋友圈、九宫格菜单等等等，只有你想不到，没有ListView做不到。  
c)朋友圈示例，OrangeUI Moments：  
i.提供全套资料：APP端源码+服务端源码(DataSnap的Rest模式)+ 数据库（SQLServer 2008R2）。  
ii.APP中包含常用的功能：注册、登录、主界面、忘记密码、修改密码、个人资料编辑、短信验证码发送等等，您甚至可以不用修改就可以直接拿到自己的项目中使用。  
iii.APP中包含规范稳定的服务端接口调用模式，调用接口之间显示等待框，并且在线程中调用接口以避免卡顿，以及页面跳转等其他一些常用的APP开发规范。  
iv.服务端包含接口开发规范，并提供数据增删改查、注册登录等接口，使用自带的DataSnap来实现，简单稳定，可以轻松添加您所需要的接口。  
v.服务端使用ADO组件连接并操作数据数，数据集以Json规范传递，符合目前潮流。  
d)图片上传下载，Upload and Download Picture：客户端上传下载图片功能，服务端接收并保存上传的图片。  
e)其他示例：商城界面、聊天界面、新闻界面等  
f)等等等等。  
有APP开发的朋友可以加群一起交流: 群号:10900297  







2018-10-25：发布OrangeUI FMX 1.75
-----------------
1．设计面板上的控件可以在设计时右键，绑定所需要的Item属性  
2．ShowFrame加入了弹出样式的处理  
3．MessageBoxFrame加上了输入的功能  







2018-05-25：发布OrangeUI FMX 1.74.1
-----------------
1．修复CheckBox在ScorllBox上面的事件响应顺序问题  
2．优化属性设计器，右键ItemDesignerPanel上面的控件可以直接绑定  
3．优化ScrollBox上面放ListBox的手势处理  
4．修复Label自动计算尺寸的问题  






2017-12-15：发布OrangeUI FMX 1.74(升级前请先备份下您的项目代码)
-----------------
1．ScrollBox滑动的时候会不断弹出虚拟键盘的问题  
处理成:如果移动超过5个像素,那么Edit失去焦点  
		如果手动隐藏了键盘,那么Edit失去焦点  
2．NotifyNumberIcon和Button结合  
3．Edit、Memo改成默认不勾选StyleSetting中的FontSize,不然手机上受Style控制字体会变大  
4．修复RoundImage不够圆的问题  
5．修复Memo会在IOS上弹出三个自定义菜单的问题  
6．修复DrawPanel保存图片会花屏的问题  
7．修复ListBox滚动条有时不会自动隐藏的问题  
8．为了照顾国外用户，目录和OrangeUIDemo示例改成英文了  
9．特别注意，Android平台用了透明状态栏之后WebBrowser会下移，  
要用修复文件:OrangeProjectCommon\PasFix_D10_1\Android透明任务栏WebBrowser会下移  
10．付费版用户赠送商城订单APP案例,支持IOS+Android  
   
11．OrangeUI朋友圈客户端添加多选照片的功能(第一版),支持IOS+Android,感谢[新手]提供IOS单元  
 
12．CheckBox和RadioButton加入OnChange事件，优化CheckBox和RadioButton在ScrollBox上滑动误点击  
13．ItemDesignerPanel加入OnPrepareDrawItem事件，当ListBox绑定多个ItemDesignerPanel的时候可以分别处理   
14．修复文本尺寸计算不准确的问题，优化了DrawCanvas文本尺寸计算的方法，参考[红鱼儿]的方法  
15．ProgressBar加入IsClipPercentRect,可以剪裁前景，ProgressBarColorMaterial中加入IsReverse，可以反向绘制  

16．支持Delphi Tokyo 10.2.2  
17．DateEdit完善在Windows平台下点击弹不出选择窗体的问题  
18．加入CalloutRect气泡控件  







2017-07-30：发布OrangeUI FMX 1.73 修复版
-----------------
1．修复在Tokyo下MultiColorLabel设计期不能编辑ColoText的问题  
2．修复在Tokyo下DBGrid设计期不能编辑表格列的问题  
3．修复DateEdit显示重影的问题  
4．修复TabSheet设置PageIndex时的问题  
5．DownloadPictureManager加入了添加图片到缓存的方法  
6．完善NativeHttpControl上传图片的示例  
7．修复设计面板绑定CheckBox和RadioButton的问题  
8．Button加入了HelpText属性  
9．ImageListViewer加入图片切换开始事件OnImageListSwitchBegin  
10．OrangeUI朋友圈示例完结，加入屏蔽和举报的功能，  
该示例已经是一个功能完善的内容发布APP，  
包含账号注册、用户登录、发布朋友圈、朋友圈内容列表、评价和点赞朋友圈、修改个人资料等页面  
提供客户端和服务端的全部源码，  
有类似需求的朋友可以直接在此基础上修改即可。  
并已上架到AppStore、应用宝、安智商店、华为应用市场，  







2017-06-26：发布OrangeUI FMX 1.73
-----------------
1．控件编辑器改进  
在ListBox列表项设计器中可以直接拖动改变顺序  
修复右键ListBox可以直接添加列表项的功能  
在ImageList设计器中可以直接拖动改变顺序  
双击MultiColorLabel直接弹出编辑器   
双击DBGrid可以直接弹出表格列编辑器  
2．重新整理完善ListBox编辑列表项的功能  
3．重新整理列表类的结构，ListBox->VirtualList->CustomList->ScrollControl,  
4．重新整理表格类的结构，DBGrid->VirtualGrid->CustomList->ScrollControl  
5．朋友圈示例加入了资料编辑的功能  
	可以修改昵称、性别、签名  
	可以剪裁并修改头像  
6．DBGrid加入了简单的编辑功能。  




2017-06-06：发布OrangeUI FMX 1.73Beta
-----------------
（升级版本1.73之前,请大家先备份一下工程代码以及老版本控件,特别是用了DBGrid的朋友们)  
1．增加了常用弹出框的页面，都放在OrangeProjectCommon\CommonFrames\目录下  
对话框MessageBoxFrame   
等待框WaitingFrame提示框HintFrame  
单选页面SingleSelectFrame多选页面MultiSelectFrame  
日期选择页面SelectMonthFrame省市选择页面SelectCityFrame  
弹出菜单页面PopupMenuFrame选择照片菜单页面TakePictureMenuFrame  
2．CheckBox加入了颜色类型  
3．RadioButton加入了颜色类型  
4．NotifyNumberIcon加入了颜色类型  
5．DrawRectParam中RoundWidth和RoundHeight设置为-1可以实现圆形效果 
6．ButtonGroup中的Button在设计时设置了Locked为True,避免误选中  
7．完善DBGrid控件(测试中)(仅建议在平板上使用)  
可以动态添加列、删除列、清除列、设置列顺序、设置列的宽度、列的隐藏  
可以显示指示列，显示指示列的序号，设置指示列的宽度  
可以设置固定列，固定列的个数  
可以设置统计行  
可以设置表格行列分隔线、行背景色等素材  
可以选中单元格或表格行  
可以设置日期型字段的显示格式  
可以设置浮点型字段的显示格式  
可以设置浮点型统计值的显示格式  
可以直接在设计时选择DBGridColumn的FieldName  
示例在OrangeUI Samples(其他)\OrangeGrid目录中  

8．添加ItemGrid控件(测试中)(仅建议在平板上使用)，  
可以添加列，  
可以像在ListBox中添加列表项一样的方式来添加数据行  
	示例在OrangeUIDemo中的ItemGridFrame单元中  

9．ListBox加入了平拖准备事件OnPrepareItemPanDrag，  
可以在该事件中根据列表项来决定是否需要平拖，以及所需要的按钮，  
在OrangeUIDemo示例中的ListBoxFrame_UseItemPanDrag单元中  
	 








2017-05-03：发布OrangeUI FMX 1.72
-----------------
1．Frame框架的完善(循环跳转的修复，返回释放报错的问题)  
2．增加ListView的综合示例  
3．ListBox分组头尾分隔线的完善  






2017-04-20：发布OrangeUI FMX 1.71
-----------------
1．修复ListView布局的问题
2．修复PageControl的Orientation为Left和Right时，分页按钮排列不正确的问题  
3．修复ListBox列表项编辑时Edit绘制到其他列表项的问题  
4．修复ListBox清空时会触发下拉刷新的功能  
5．加入了TTimerTaskEvent线程任务事件组件  



2017-04-15：发布OrangeUI FMX 1.70
-----------------
1．完善OrangeUI官网的文档内容http://www.orangeui.cn/document.php  
2．修复ListBox.Prop.Items.Sort排序的问题  
3．ListView支持瀑布流功能，ListView.Properties.ViewType设置为vtWaterfall即可，如非必要，请勿使用  
4．优化ListBox编辑列表项元素的功能  
之前是点击ItemDesignerPanel上面的Edit，自动创建一个新的Edit，把素材及事件复制过去，这样导致有些功能不全  
如今是使用原Edit进行编辑，能得到完全控制权  
5．DrawPicture去掉ColIndex,RowIndex,RowCount,ColCount属性，给大家带来不便，抱歉  
6．ListBox去掉了ItemDrawType属性，给大家带来不便，抱歉  
7．隐藏了ListBoxItem.Icon设计时的SkinImageList，避免新人使用错误  
请大家统一在ListBox.Properties.SkinImageList中设置,而不用每个Item.Icon都设置一次SkinImageList  
8．完善ListView水平排列的功能  
9．修复PageControl在设计时设置按下字体颜色时不会立即刷新的问题  
10．ListBox、ListView加入了列表间隔功能，如非必要，请勿使用  
间隔宽度属性为ListBox.Properties.ItemSpace,设置为大于0即可  
间隔类型属性为ListBox.Properties.ItemSpaceType  
11．修复了ListBox行分隔线颜色和宽度设置不起作用的Bug(感谢网友绝代双椒)  
12．优化了手势处理，放置在ItemDesignerPanel上的ImageListViewer滑动切换图片时不会让ListBox垂直滑动  
需要写VertControlGestureManager.OnPrepareDecidedFirstGestureKind事件  
具体请看XunKe示例的HomeFrame,ShopFrame以及OrangeUIDemo中的ListBoxFrame_MouseEventTest  
13．ScrollControl自动下拉刷新上拉加载更多功能的实现，不再需要再手动拖一个PullLoadPanel来实现。  
增加了EnableAutoPullDownRefreshPanel和EnableAutoPullUpLoadMorePanel这两个属性，  
EnableAutoPullDownRefreshPanel表示自动创建下拉刷新的面板。  
EnableAutoPullUpLoadMorePanel表示自动创建上拉加载更多的面板。  
如果要自定义PullLoadPanel,不再需要从VertScrollBar.Properties.MinPullLoadPanel和MaxPullLoadPanel中设置,  
而是在ScrollControl.Properties.PullDownRefreshPanel和PullUpLoadMorePanel中设置。  
PullDownRefreshPanel是自定义的下拉刷新的面板  
PullUpLoadMorePanel是自定义的上拉加载更多的面板  
自动创建的PullLoadPanel的素材设置，在ScrollControl.SelfOwnMaterial.PullDownRefreshPanelMaterial和PullUpLoadMorePanelMaterial中。  
在PullDownRefreshPanelMaterial素材中,如果要自定义滚动提示的图片列表，请给LoadingPicture.SkinImageList赋值  
如果不给LoadingPicture设置图片或图片列表，那么会自动创建IndicatorColor这个颜色的SkinImageList来做滚动提示图片。  
手动下拉刷新，使用ScrollControl.Properties.StartPullDownRefresh和StartPullUpLoadMore方法  
加载结束时,使用ScrollControl.Properties.StopPullDownRefresh和StopPullUpLoadMore方法  
14．增加ControlGestureManager的示例(ControlGestureManager是滑动手势管理组件)  
15．增加PanDragControlGestureManager的示例(PanDragControlGestureManager是平移列表项所使用的手势管理组件)  
16．修复Panel的边框为1时线很粗的问题  






2017-04-05：发布OrangeUI FMX 1.68
-----------------
1．完善OrangeUI官网的文档内容http://www.orangeui.cn/document.php  
2．修复ListBox.Prop.Items.Sort排序的问题  
3．ListView支持瀑布流功能，ListView.Properties.ViewType设置为vtWaterfall即可，如非必要，请勿使用  
4．优化ListBox编辑列表项元素的功能  
之前是点击ItemDesignerPanel上面的Edit，自动创建一个新的Edit，把素材及事件复制过去，这样导致有些功能不全  
如今是使用原Edit进行编辑，能得到完全控制权  
5．DrawPicture去掉ColIndex,RowIndex,RowCount,ColCount属性，给大家带来不便，抱歉  
6．ListBox去掉了ItemDrawType属性，给大家带来不便，抱歉  
7．隐藏了ListBoxItem.Icon设计时的SkinImageList，避免新人使用错误  
请大家统一在ListBox.Properties.SkinImageList中设置,而不用每个Item.Icon都设置一次SkinImageList  
8．完善ListView水平排列的功能      
9．修复PageControl在设计时设置按下字体颜色时不会立即刷新的问题  





2017-03-15：发布OrangeUI FMX 1.67
-----------------
1．提高了ListBox，ListView惯性滑动的平顺度  
2．修复了切换ListBox.Properties.VertScrollBarType为AutoClipShow时报错的问题(感谢网友人人)  
3．完善了ListBox的点击，滑动的时候不再有点击效果，原地按下弹起才会有点击效果(感谢网友程序人生)  
4．完善了Frame框架以及切换的平顺度，具体请看FrameTest示例(释放Frame,从Frame回传值,按返回键返回上一页等处理)   
5．完善了朋友圈示例，加入了注册、找加密码、修改密码、发送验证码  






2017-02-25：发布OrangeUI FMX 1.66
-----------------
1.内置TSystemHttpControl(uBaseHttpControl.pas)来下载图片,  
Image下载URL图片不需要再添加uIdHttpControl.pas或uNativeHttpControl，  
也不需要手动再指定DownloadPictureHttpControlClass  
2.升级DownloadPictureManager,  
DrawPicture(如Image.Properties.Picture)和ListBox的图标(如ListBoxItem.Icon) 默认使用全局的GlobalDownloadPictureManager来下载图片的  
可以为DrawPicture指定DownloadPictureManager,  
如果DrawPicture之前设置过URL,再设置新的URL之后,要等到新URL下载完成之后图片才会切换显示过来，  
可以为ListBox指定DownloadPictureManager,这样可以把ListBox的图标单独放在一个文件夹里面，  
可以设置DownloadPictureManager在下载图片时的四种状态图片(等待下载,下载中,下载失败,图片出错)，  
具体请查看OrangeUIDemo中的DownloadPictureManager示例和OrangeViewNews示例。  
3.ListBox.Prop.Items增加搜索Item的方法FindIteByDetail,FindItemByDetail*  
4.添加一个简单的图片上传下载客户端和服务端的简单示例  
5.添加一个微信朋友圈客户端和服务端的简单示例  







2016-11-30：发布OrangeUI FMX 1.65
-----------------
1．修复连续点击造成不能返回上一个Frame的问题  
2．修复Label垂直绘制时显示不全的问题  
3．修复PullLoadPanel拖动的时候会盖住列表项的问题  
4．修复ScrollBox上的Edit滚动时ScrollBox不会滚动的问题  
5．修复ListBox在列表项高度不固定的时候绘制慢的问题  
6．付费版增加两个示例程序供学习(企业管理+平板点单)  
7．示例程序重新整理(TreeView,PullLoadPanel等)  
8．内部结构调整(ButtonGroup,ListBox,ListView,DBGrid,TreeView统一使用ListLayoutManager来布局,  
后续PageControl的表头等都会统一,减少无用代码,能增强原有控件的功能)  








2016-08-23：发布OrangeUI FMX 1.64 Beta
-----------------
1．在控件面板中加入了TClearEditButton等，可以直接把它们放入FMXEdit控件中  
2．完善了PullLoadPanel、PageControl、NotifyNumberIcon、FrameImage、RoundImage、MultiColorLabel的教程  
3．ListBox平拖列表项功能增强与完善(可以手动开始、结束平拖列表项,平拖时不会影响ListBox的垂直滚动)  
4．修复下拉PullLoadPanel的时候会挡住ListBox顶部的组分隔线的问题  
5．修复移动平台下自动下载的图片不会缓存的问题(感谢网友[.μρ2ц清风])  
6．直接在ScrollBoxContent上放OrangeUI控件就能滚动,不需要再设置ParentMouseEvent属性(控件层级不要太深)  
7．修复RadioButton在点击的时候能取消勾选的问题(感谢网友[清风])  
8．修复ComboBox的Text属性能直接获取到文本  
9．修复RoundImage在某些电脑上会黑屏的问题  
10．TreeView增加LevelRightIsFitControlWidth属性，当设置了LevelLeftOffset的时候，节点保持右对齐  
LevelRightIsFitControlWidth为False  
LevelRightIsFitControlWidth为True  













2016-06-01：发布OrangeUI FMX 1.63 Stable
-----------------
（升级版本1.63之前，  
请大家先备份一下工程代码以及老版本控件，  
再逐个打开工程中的窗体，  
把不能认到的属性都忽略掉）  
1．NotifyNumberIcon的素材添加LongPicture，  
当提醒数字为1位数时(1~9)，使用Picture当作背景,  
为两位数时(10~99)，使用LongPicture当作背景，避免拉伸产生变形  

2．Frame切换增加简单的效果(HideFrame,ShowFrame中都加入了是否使用切换效果的参数)  
3．增加教程和示例 (Frame中虚拟键盘简单处理示例2，FrameHistory的使用说明，DownloadPictureManager控件的使用说明)  
4．修复ComoboBox在设计时有黑色小箭头的Bug  
5．ComboEdit加入InScrollBox属性  
6．去掉了Edit的BorderMargins属性  
7．加入了OrangeUI类结构的帮助文档  






	

2016-05-15：发布OrangeUI FMX 1.63
-----------------
（升级版本1.63之前，  
请大家先备份一下工程代码以及老版本控件，  
再逐个打开工程中的窗体，  
把不能认到的属性都忽略掉）  
1．去掉了ScrollBar的StrictScrollPrecision属性，加入了StrictScrollAngle属性(用于控制严格拖动的角度)。  
2．去掉了ItemDesignerPanel 的EnabledDesignTimePreviewBinding属性(直接启用设计预览功能)  
3．修复了ListView中Item.Visible为False时没有隐藏的Bug(感谢网友一二一)  
4．去掉了ListBox的ItemSizeCalcType属性,并将此属性名称替换为ItemHeightCalcType  
5．去掉了PageControl素材的IsDrawBackground和IsDrawTabHeaderPicture属性  
6．DrawParam在设计时显示所对应的参数名称  
7．将ListBox,ListView,TreeView的OnClickItem事件类型由TNotifyEvent转换成TClickItemEvent  
8．TreeView的素材添加ParentItemMaterial(父节点列表项绘制素材)  
9．去掉了TabSheet素材的IsDrawBackground属性  
9．去掉了ScrollBar素材的IsDrawBackground属性  
10．将ListBox,ListView,TreeView的OnClickItem事件由TNotifyEvent(Sender:TObject)  
转换为TClickItemEvent(Sender:TSkinItem),记得需要引用uSkinItems单元  
11．加入ListBox自动下载图标的功能,记得添加uNativeHttpControl .pas或uIdHttpControl.pas   
(只需要设置Icon.Url,在绘制此Item的时候，会启动线程自动下载图片，下载完自动刷新，看ListBox的示例，或新闻的示例)  
12．加入下载图片管理DownloadPictureManager组件,记得添加uNativeHttpControl .pas或uIdHttpControl.pas   
(看DownloadPictureManager的示例)  
13．OrangeProjectCommon文件夹已更新(主要是FMX.Platform.iOS.pas等)  







2016-02-16：发布OrangeUI FMX 1.62
-----------------
1．修复列表项属性编辑器在编辑ListBoxItem的SubItems属性时挡住StringList编辑器的问题  
2．废弃ItemDesignerPanel的EnabledDesignTimePreviewBinding属性  
3．完善了教程(加入了 绑定ListBoxItem.SubItems、PageControl效果设置、ScrollBox处理虚拟键盘遮挡)  
4．加入了验货APP示例(仅供学习)  
 









2015-11-20：发布OrangeUI FMX 1.61 Beta
-----------------
1．完善DrawPanel签名控件，加入撤消和恢复的功能  
2．加入RoundImage控件，可以在图片上绘制空心圆角矩形  

3．修复了当TabSheet绑定NotifyNumberIcon，更改NotifyNumberIcon的Number，不立即刷新的问题，感谢网友ＨEＮKＥL  
4．应客户要求，ListBox等加入了长按列表项的OnLongTapItem的事件  
5．设计时，ListBox的列表项设计器会挡住图片选择框的问题  
6．ScrollBar加入了Mobile的ComponentType，如需使用，请作以下设置  
	
7．ScrollBar修复滚动时有时候会自动隐藏的问题  
8．ScrollBar默认皮肤  











2015-09-09：发布OrangeUI FMX 1.60
-----------------
（升级版本1.6之前，请大家先备份一下工程代码）  
1．ListBox加入Edit自动编辑功能  
2．ListBox加入绘制圆角分组的功能  
3．修复DrawRectParam边框大于1时，填充色会填充到边框的BUG  
4．支持RAD 10 Seattle  












2015-07-06：发布OrangeUI FMX 1.50
-----------------
（升级版本1.5之前，请大家先备份一下工程代码）  
1．加入MultiColorLabel控件，支持一个Label中多个字符串显示不同颜色的字体(在Win平台下此控件仅简单预览)  
2．加入简单的DBGrid控件（记住，是简单的）（应网友Colin的要求）  
3．修正ButtonGroup中Button仍使用自己的BackColor来绘制的BUG（感谢网友Jason）  
4．优化中文的绘制速度，优化控件的加载速度，大大减小.fmx文件的体积（升级之前，请大家先备份一下工程代码）(感谢网友完全二叉树)  
5．修正多个Image引用ImageList中同一个GIF时不会动（感谢网友Jason）  
6．修正在ItemDesignerPanel里的Panel中的Edit点击进行编辑时，显示的位置不正确，没有加上Panel的偏移(感谢网友完全二叉树)  
7．ListBox的水平模式加入居中选择功能  













2015-05-25：发布置OrangeUI For FMX 1.49 
-----------------
1.OrangeUI控件一些属性整体由Integer转换为Double,TRect转换为TRectF(编译遇到问题，请立即联系我)   
2.ListBox滑动流畅度提升（ScrollBox,TreeView,ListView同样）  
3.PageControl加入表头居中IsTabHeaderCenter属性(当Tab标签头未填满的时候)  
4.控件设计器加入了共享Material素材的功能  
在设置控件好素材后,右键点击此控件，在弹出菜单中选择“共享此Mateiral”,  
控件的SelfOwnMaterial就会变成一个独立的控件，  
可以放在工程的DataModule中给同类型的控件使用(MaterialUseKind设置为mukRef,RefMaterial为此素材)  
5.DrawRectParam加入了设置四条边框、四个角隐藏和显示的属性  
6.Edit加入IsInScrollBox属性(在ScrollBox中拖动的时候就不会弹出虚拟键盘)  
7.ListBox加入居中选择模式(IsEnabledCenterItemSelectMode属性，用于弹出选择，自定义Combox弹出的选择窗体)  
8.ItemDesignerPanel支持动态绑定SkinItem的SubItems，可以绑定无数个Label  
为Item添加SubItems  
选中ItemDesignerPanel，双击ItemStringsBindingControlCollection,  
添加绑定的控件和字符串SubItems的下标  











2015-04-11：发布OrangeUI FMX 1.48
-----------------
1.支持XE8  
2.TabSheet增加NotifyNumberIconControl属性，用来绑定提醒图标控件  
3.Button增加Detail属性  









2015-03-27:发布OrangeUI FMX 1.47
-----------------
1.ListBox增加数据编辑功能(应网友[江门]gzpochacco要求)  
2.修正画分隔线高度为1px时，显示的却是2px的Bug,以及ButtonGroupMaterial的效果不起作用的问题(感谢网友carmas123)  
(XE画细度为1的线，DrawLine(PointF(1,1),PointF(1,100))会显示两个像素，DrawLine(PointF(1-0.5,1),PointF(1-0.5,100))则是一个像素)  
3.修正Edit选不中里边文字的问题(感谢网友[西安]高勇)  
(Edit如果高度太高且居中，会造成文字选不中，由Edit内部的实现机制造成的，  
可以通过设置Edit的ContentMarginTop,ContentMarginBottom将Content的高度限制在一定范围以内(IOS 40px,Android 30px))  
4.英文版控件设计器  
5.增加ScrollBox和虚拟键盘弹出输入再隐藏的使用示例  
6.Image控件的GIF播放增加了间隔时间属性GIFDelayExp(应网友[中国]-阿呆要求)   
7.ListBox增加了编辑DEMO(针对多个列表项所用编辑框相同的属性,如果每个列表项的编辑框属性要求各异，建议用ScrollBox来实现)  











2015-02-10:发布OrangeUI FMX 1.46
-----------------
1.增加ComboEdit,ComboBox,DateEdit,Popup(都是从自带控件继承)  
2.增加SwitchBar开关控件(应网友白雪公猪（傻大木）要求)  

3.增强了TreeView控件
4.增加了新浪微博的初版DEMO
5.DrawPicture加入使用资源图片(在Project->Resources and Images....中添加)、文件、链接的功能(属性ResourceName、FileName、Url)
6.Edit加入了ClientMarginsLeft属性，用来在Edit的左边放提示图标等控件















2015-01-15:发布OrangeUI FMX 1.45
-----------------
1.修复Button和Action的关联(感谢网友[温州]大量)  
2.SkinImageList里的每一张图片增加了ImageName，绘制图片的地方可以指定ImageName（也可以指定ImageIndex）  
3.增强ItemDesignerPanel中绑定Item控件的属性编辑器  
4.加入OSX，Win64平台  
5.一些小细节，DrawPictureParam加入了Alpha属性，DrawRectParam加入了IsLine,LinePosition属性  
6.完善了文档教程  











2014-12-29:发布OrangeUI FMX 1.4 
-----------------
1.NotifyNumberIcon的Number,NumberMax属性由Integer类型转换为Double类型,并可以绑定到SkinItem的字符串属性  
2.PageControl加入了PageListAnimated属性，点击标签头可以动态的切换分页  
3.加入了SwitchPageListControlGestureManager控件，用于实现切换分页的手势  
4.加入了SwitchPageListPanel控件，用于实现切换分页的控件  
5.控件加入了ParentMouseEvent属性(用于从当前的Control传递消息给它的Parent，从而处理Parent的Mouse消息，应网友[佛山]网虫要求)  
6.PageControl加入了手势切换功能(从原来的TControl继承到现在从SwitchPageListPanel继承，应网友[佛山]网虫要求)  
7.ListBox为了缯加复杂Item的滑动流畅度，加入了EnableBuffer即启用缓存属性，并且增加了横向排列的模式  
8.加入了TreeView控件,请查看OrangeQQ这个Demo  
9.完善了OrangeQQ这个DEMO,加入了OrangeGuide这个Demo  

















2014-11-19:发布OrangeUI FMX and VCL 1.3 稳定版
-----------------
1.增加ListBox的列表项水平拖动的功能，用于放置列表项删除按钮,或打电话等功能按钮或其他控件  
2.ListBox的列表项的图标默认使用ListBox中设置的SkinImageList  
3.ListView不同列表项宽度的显示处理  
4.ImageListViewer增加左右按键移动的功能  
5.基类控件增加MouseDownFocus属性(鼠标按下就获取焦点)  
	







2014-09-28:发布OrangeUI FMX 1.2稳定版
-----------------
1.修复一些BUG(感谢无为)  
2.所有控件增加透明度支持Opacity  
3.所有控件添加了RefMaterial和KeepSelfOwnMaterial,多个控件可以共享一个素材  
4.Demo中添加OrangeViewPicture,通用图片浏览界面  
5.添加ProgressBar进度条控件  
6.增强ImageListViewer控件，增加手势支持，缩放支持  











2014-09-19:发布OrangeUI FMX 1.2正式版
-----------------
老哥脑出血，本人一直陪在医院，抽出一些时间来完善OrangeUI，医药费也用了6万多了，唉，大家保重身体，珍惜生命，人生艰苦，祸福自取！  
1.修复内存泄露的问题(感谢无为)  
2.增加ImageListViewer控件(手势翻页查看图片）  
3.增加DrawPanel画板控件  
4.加入OrangeUIMobileDebugServer程序,允许真机调试时远程输出日志  














2014-08-28:发布OrangeUI FMX 1.1.1 正式版
-----------------
1.增加PullLoadPanel控件,简化并自定义ListBox的上拉和下拉刷新功能  
2.增强ListBox的设计时绑定功能,增强ListBoxItem的属性  
3.Memo加入显示提示文字的功能  












2014-08-18：发布OrangeUI FMX 1.1 正式版
-----------------
1.优化ListBox的效率，一两万条滚动顺畅  
2.增强CheckBox,可以设置未勾选和已勾选的标题  
3.添加NotifyNumberIcon,也就是通知提醒数字控件  
4.增加ListBox的简单实用的动态绑定功能  











2014-06-08：发布OrangeUI FMX and VCL1.0 Beta版
-----------------
1.按钮控件和图片控件免费使用  
2.FMXEdit和FMXMemo修改成无边框的  
3.加入ImageListPlayer和ButtonGroup控件  
4.增强ListBox，并加入ListView控件  
5.增加SkinAnimator和SkinControlMoveAnimator动态效果组件  








2014-05-06：发布OrangeUI FMX and VCL1.0 Preview 3版
-----------------
1.Image控件，加入GIF图片支持，图片旋转，图片列表播放  
2.ListBox控件功能增强，加入上下拉滚动刷新功能，加入分隔线功能  
3.框架调整，绘制参数加入根据控件状态动态效果切换的功能  
4.加入OrangeUI For VCL  
5.其他的想不起来了  









2014-04-15：发布OrangeUI FMX 1.0 Preview 2版
-----------------
未记录  


2014-04-01：发布OrangeUI FMX 1.0 Preview 1版
-----------------
未记录  

