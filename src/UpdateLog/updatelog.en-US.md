---
title: Update Log
order: 0.1
nav:
  title: Doc
  path: /components
  order: 1
group:
  title: Update Log
  order: 10
---

## 2022-10-01: 发布 OrangeUI FMX 2.1

1.加入图表控件  
2.完善表格在尺寸更改时重新计算表格列的显示尺寸，如果某一列的尺寸为百分比时。  
3.完善 ImageListViewer 的手势缩放功能  
4.加入 Linux 平台的支持（需要安装 FMXLinux）

## 2022-09-01: 发布 OrangeUI FMX 2.03

1.修复控件 BindItemFieldName 设置为 ItemExpanded 时绑定无效的问题

## 2022-05-05: 发布 OrangeUI FMX 2.02

1.修复 ComboEdit 点击下拉箭头弹出虚拟键盘挡住选项的问题  
2.每个 Item 在创建的时候可以通过 FItemStyleConfig 来简单设置样式 Frame

## 2022-03-18: 发布 OrangeUI FMX 2.0

1.ListBox 加入了 OnNewListItemStyleFrameCache 事件，可以在该事件中初始 ListItemStyleFrame，示例中加入了 ListBoxFrame_UseListItemStyleFrame 和 ListViewFrame_UseListItemStyleFrame 示例。  
2.ListBox 中关于 ListItemStyleFrame 的自定义也可以在 DefaultListItemStyleConfig 中。  
3.PageControl 支持标签图标超出绘制，IsAfterPaintTabIcon 设置为 True，并且在 OnCustomCalcTabIconDrawRect 事件中计算图标的绘制矩形。  
4.图片支持设置文件名，从本地加载  
(1)在 SkinTheme 组件中设置图片搜索路径，搜索目录配置在 SkinTheme 组件的 FilePictureSearchPaths 属性中。  
(2)在 Picture.FileName 中设置文件名，图片文件用英文名表示。在设计时即可显示预览效果  
(3)在移动平台上使用时请将该图片目录下的所有文件布署进去。  
(4)文件名可以支持多分辨率，加上后缀@2x,@3x  
5.修复 Label 自动大小尺寸计算的问题  
6.矩形绘制参数的调整：当圆角关径都为-1 时，半径为宽度和高度的一半，并取最小值。  
7.FrameContext 组件的 OnCanReturn 事件由原来的：  
 (Sender: TObject;var AIsCanReturn: Boolean)  
 改为：  
 (Sender: TObject;var AIsCanReturn: TFrameReturnActionType);  
(1)关于页面框架返回需要释放页面的问题，可以在 FrameContext 组件的 OnCanReturn 事件中返回 AIsCanReturn 为 fratReturnAndFree 即可  
(2)或者 Frame 实现 IFrameHistroyReturnEvent 接口，在接口方法 function CanReturn:TFrameReturnActionType;中返回 fratReturnAndFree

## 2021-09-17: 发布 OrangeUI FMX 1.90

1.VCL 窗体加入 DWM 阴影，但是  
a)去除了圆角窗体的功能  
b)去除了自定义标题栏高度的功能  
c)窗体边框颜色用 DrawClientRectParam+Form.Padding 来实现  
2.PageControl 加入两个事件，可以自定义标签头的矩形  
3.Button 的 Icon 可以绑定 ItemIcon  
4.滚动控件中的滚动条尺寸可以自定义，原来是都是定死的，宽度为 6  
5.VCL 下的 TSkinPicture 支持 IsClipRound 属性，将图片剪裁成圆形  
6.Item.ItemType 加入了 sitRowDevideLine 类型，表示行分隔线  
7.关于高清屏图片缩放的问题解决方案  
a)在 ImageList 中加入三张图片，分别命名为：图片 1,图片 1@2x,图片 1@3x，这样子，  
b)然后在 DrawPicture 中设置 ImageName 和 SkinImageList，  
c)OrangeUI 会根据名称和当前的 DPI 自动选择当前尺寸的图片  
8.DrawRectParam 加入了颜色加深和变浅的效果，可以用在按钮的背景切换效果  
9.支持 Delphi 11

## 2021-06-15: 发布 OrangeUI FMX 1.87

1.列表控件（ListBox,ListView,Grid）绘制优化：  
a)CalcDrawStartAndEndIndex 方法：  
i.搜索开始绘制的列表项下标，由原来的遍历搜索改为二分法  
ii.修复 ListItemStyleFrame 缓存的问题  
b)DoCalcAllSkinListItemRect 方法：  
i.计算内容宽高度由原来的遍历计算，改为使用计算绘制矩形后的值  
2.修复 PageControl 在中间一个 TabSheet 被删除之后，再添加一个 TabSheet 会导致 PageIndex 不连续的问题，问题描述为：  
a)比如原来 PageIndex 为 0,1,2,3  
b)删除了 2 之后，PageIndex 为 0,1,3  
c)再添加一个 TabSheet，PageIndex 变为 0，1，3，3

## 2021-05-20: 发布 OrangeUI FMX 1.86(FMX)

1.修复在 Android 64 位下控件面板上 OrangeUI 为灰色不可选择的问题  
2.因为大家使用了别的同名组件，控件中去除了 XSuperObject 的引用，如果要使用在线列表项样式，需要引用 uDownloadListItemStyleManager 单元

## 2021-05-05: 发布 OrangeUI FMX 1.85(VCL)

1.修复在高分屏下最小化最大化按钮显示过小的问题，SkinFormMaterial 加入了 SysBtnWidth 和 SysBtnHeight 的属性  
2.修复了双击标题栏不会最大化/还原的问题  
3.ListBox 和 Grid 的高分屏支持

## 2021-04-14: 发布 OrangeUI FMX 1.85 Beta

1.修复 MessageBoxFrame 弹不出来的问题  
2.XSuperObject 集成到了 OrangeUI 中，uBufferBitmap 单元改名为 uSkinBufferBitmap  
3.ListBox 加入在线样式功能、提供样式编译器，使用方式查看示例  
a)工作原理：将设计面板结构保存成一个 json 放在网站上，ListBox 会下载并缓存下来并生成实例做为列表项的样式。每次 APP 启动都会检测样式是否有更新。类似 Image 支持 Url 图片的模式。  
b)示例：OrangeUI Samples(Main Demo)\OrangeOnlineListItemStyle\App\  
c)设计器：OrangeUI Samples(Main Demo)\OrangeOnlineListItemStyle\Designer\  
 可以直接使用 D 区账号登录  
d)文件结构介绍 ：  
i.programs.json：程序说明  
ii.pages.json：包含样式列表  
iii.样式文件，比如 ListItemStyleFrame_ProcessTaskOrder2.json，里面有设计面板的控件结构。

## 2021-01-026: 发布 OrangeUI FMX 1.84

1.修复在 IOS 平台下 PageControl 直接放在 Form 上闪退的问题

## 2021-01-01: 发布 OrangeUI FMX 1.83

1.RoundImage 在 Android 下的抗锯齿处理  
2.圆角矩形在 Android 下的抗锯齿处理

## 2020-12-15: 发布 OrangeUI FMX 1.82

1.Frame 跳转框架加入了垂直切换和透明度切换的效果  
2.页面 Frame 跳转动画效果优化  
3.MessageBoxFrame 显示采用渐显效果，用户体验更高  
4.修复 ScrollBox 上滑动 SkinFMXEdit 控件会触发误编辑的问题

## 2020-10-20: 发布 OrangeUI FMX 1.80

1.表格的 Column 加入了 AutoSize 和 AutoSizeMinWidth 的属性  
2.对话框 MessageBoxFrame 的英文翻译完善  
3.SkinTheme 添加 NavigationBarColor 和 NavigationBarFontColor

## 2020-05-20: 发布 OrangeUI FMX 1.79 Beta

1.修复 FMXEdit 控件的 CanFocus 为 False 时不响应 OnClick 的问题。  
2.更改 Edit 在 Grid 上编辑时拖动 Edit 不滑动 Grid  
3.更改 CheckBox 在 Grid 上点击时直接更改 IsChecked 属性，而不需要先选中  
4.关于用户提出来页面切换卡顿的问题，建议在页面动画结束之后加载，方法为放一个 FrameContext 在 Frame 上，在它的 OnShow 或 OnShowEx 事件中写加载方法，它会在切换动画结束时调用，示例如下:  
 //先判断是正常显示还是返回显示  
if Self.FrameContext1.IsReturnShow then Exit;  
 //加载数据的代码  
.................................  
5.Frame 框架的使用建议:  
Frame 已经不再需要加一个 FrameHistroy:TFrameHistroy;  
显示一个页面:  
 HideFrame;  
 ShowFrame(TFrame(AFrame),TFrameA);  
返回上一页:  
 HideFrame;  
 ReturnFrame;  
6.NotifyNumberIcon 改动，支持绑定文本，

7.虚拟键盘自动处理，不需要在 MainForm 的虚拟键盘中加入处理的代码，有 ScrollBox 自动会抬高。  
8.Grid 加入了表头点击事件 OnClickColumn 事件  
9.完善 PageControl 在 iPhoneX 上底部自动抬高的功能，uComponentType 加入了 IsIPhoneX 方法。  
10.加入了正则表达式标记文本视图控件 RegExTagLabelView  
11.设计面板支持绑定 Item.SubItems 中的 Key  
值的设置：AListBoxItem.SubItems.Values[‘key’]:=’OrangeUI’;  
a)绑定方式 1：设计面板的 ItemStringsBindingControlCollection 中添加，然后设置 StringsKey 为’key’

b)绑定方式 2：直接设置控件的 BindItemFieldName 为 key

## 2020-03-28: 发布 OrangeUI FMX 1.78.3

1.MultiColorLabel 加入了 Color1~4,Text1~4 的属性，方便设置  
2.修复设计面板上的控件不能绑定 SubItems 第 10 个以上的字符串的问题

## 2020-03-08: 发布 OrangeUI FMX 1.78.2

1.DateEdit 控件完善放在 ScrollBox 中滑动时不会误弹选择框。  
2.ComboBox 控件完善放在 ScrollBox 中滑动时不会误弹选择框。  
3.TimeEdit 控件完善放在 ScrollBox 中滑动时不会误弹选择框，  
并加入了 IsShowUpDownButtonAtWindows 属性，控制上下箭头按钮的显示。

## 2020-02-18: 发布 OrangeUI FMX 1.78.1

1.加入了滚动文本 RollLabel 控件，并可以控制速度  
2.ListBox 加入了内容为空时显示的提示属性，如下:  
IsEmptyContent:是否启用该功能  
EmptyContentCaption:内容为空时的标题  
EmptyContentPicture:内容为空时的图片  
EmptyContentDescription:内容为空时的描述  
EmptyContentControl:内容为空时的自定义控件(比如按钮)

3.三方 SDK 加入了苹果三方登陆功能  
4.修复表格控件的单元格在编辑时会挡住表头的问题  
5.控件包去除了 XSuperObject 的引用，避免与其他控件冲突  
6.因为 OrangeUI 已分出付费版，故开放案例源码出来

## 2020-02-11: 发布 OrangeUI FMX 1.78

1．将 Hint 属性发布出来了，个别客户开发 Windows 程序需要  
2．控件设计器的菜单根据 Windows 设置的区域语言来自动切换中英文  
3．原来 OranegProjectCommon 中的很多公共文件基本都移动到了控件中  
 比如 XSuperObject，很多公共 Frame，uUIFunction 等  
4．ItemGrid 的改动  
 a．弃用了 Column 的 ItemDataType 和 SubItemsIndex 属性，改用 BindItemFieldName  
 b．修复统计区添加 Item、过滤 Item 后不刷新值的问题  
 c．开放 EditingCol 属性，表示当前在编辑哪个列  
 d．在官网上加入了使用说明  
5．MessageBoxFrame 界面更改，改成圆角模式  
6．完善 DBGrid 数据集关闭后，表格列被清空的问题  
7．添加 ListBox 等列表控件之后会自动添加 uDrawCanvas 和 uSkinItems 单元，避免使用 OnPrepareDrawItem 事件的时候需要手动添加的麻烦  
8．三方 SDK 免费版集成进入了 OrangeUI 控件包中，所有 SDK 能自动配置  
 支付宝支付、微信支付、文字转语音、个推推送、蓝牙打印等\  
 比如 OrangeUI 路径为:  
..\..\..\OrangeUIDesign\DCU\FMX\D10_3\$(Platform)\$(Config);  
那么三方 SDK 路径为:  
..\..\..\OrangeUIDesign\SDK\FMX\D10_3\$(Platform)\$(Config)  
具体收费请看官网  
9．OrangeUI 正式区分免费版和付费版分开独立下载，免费版有功能限制，超出使用限制会弹窗提醒，具体限制查看官网

## 2019-11-15: 发布 OrangeUI FMX 1.77 Beta for D10.3.2

1．Edit,ComboBox,ComboEdit 加入了 IsAutoEditInItem 属性,设置为 True,在 ListBox 中点击即可启动编辑,在 Windows 上按回车即可结束编辑  
2．自动添加单元https://www.debugease.com/delphi/2141089.html  
http://ishare.iask.sina.com.cn/f/1H4Uwue324Sc.html

## 2019-10-05: 发布 OrangeUI FMX 1.77 Beta for D10.3.2

1．PageControl 加入手势切换功能，支持上下左右切换分页  
2．加入手势切换分页控件 SwitchPageListPanel  
3．控件加入了 BindItemFieldName 属性，使设计面板的绑定方式更简单  
如要将设计面板上的 lblItemCaption 显示 Item.Caption，  
原来的绑定方式为设置 ItemDesignerPanel.Properties.ItemCaptionBindingControl 为 lblItemCaption，  
现在只需要把 lblItemCaption.BindItemFieldName 为 ItemCaption 即可  
4．由于功能需要，ListBox 支持新的列表项 TSkinJsonItem，  
TSkinJsonItem 和 TSkinListBoxItem 都继承于 TSkinItem  
升级时请注意  
ListBox.Prop.SelectedItem,InteractiveItem 等从原来的 TSkinListBoxItem 改为了 TSkinItem，  
ListView.Prop.SelectedItem,InteractiveItem 等从原来的 TSkinListViewItem 改为了 TSkinItem，  
TreeView.Prop.SelectedItem,InteractiveItem 等从原来的 TSkinTreeViewItem 改为了 TBaseSkinTreeViewItem  
设置 ItemDesignerPanel.Properties.PreviewItem.JsonStr 为  
{"时间":"2019-10-03 15:40","服务好":"1","服务一般":"0","服务差":"0"}  
通过下拉选择设计面板上控件的 BindItemFieldName 属性就可以指定要显示 Json 中的哪个值  
添加 TSkinJsonItem 的方法如下，  
只需要指定 Item.Json 属性，不再需要再指定 Item.Caption,Detail,Detail1,Detail2....  
4．表格 ItemGrid 的完善  
1．Column 支持设计面板和样式风格，但只能绑定一个值 GridCellValue，  
设计面板上控件的 BindItemFieldName 指定为 GridCellValue 即可。  
比如 ItemGrid.Column 的 BindItemFieldName 为 ItemDetail3,表示这一列显示 Item.Detail3，  
再将设计面板上的 Label 的 BindItemFieldName 设置为 GridCellValue，表示这个 Label 显示单元格的值  
给第一个 Item.Detail3 设置一个值  
表格就显示出来了  
2．当单元格被选中，还能再次响应 OnClickCell 事件  
3．弃用 ItemGrid.Column.ItemDataType 和 SubItemIndex，全部改用 BindItemFieldName，比如原来要 Column 显示为 Item.Caption，是设置 Column.ItemDataType 为 idtCaption，现在是将 BindItemFieldName 设置为 ItemCaption。  
5．公共页面中加入了通讯录的功能  


## 2019-07-19: 发布 OrangeUI FMX 1.76.1 for D10.3.2

## 2019-04-17: 发布 OrangeUI FMX 1.76.1 for D10.2.3~D10.3.1

1．修复示例升级到 10.3.1 拍照闪退的问题  
 如果大家的工程从 10.1 或 10.2 升级上来的，那么也需要做如下设置:  
2．在工程设置->EntitlementList->勾选 Secure File Sharing  
3．在 AndroidManifest.template.xml 中加入如下一断，要大家手动加一下<%provider%>的:  
4．动态权限申请  
5．修复 PageControl 在 iPhoneX 上底部被虚拟 Home 条遮挡的问题

## 2019-03-27: 发布 OrangeUI FMX 1.76 for D10.2.3~D10.3.1

1．修复在 10.2 以上的 Android 版本中使用圆角矩形会花屏的问题，仅限 OrangeUI 的控件。  
2．Image 添加另一个拉伸方式，填满整个控件但不变形  
3．DownloadPictureManager 加入了 FreeNoUsePicture  
 //释放超过几秒没有再使用过的图片  
procedure FreeNoUsePicture(ASecondsBetween:Integer);  
我们在项目中发现图片多的应用特别占内存，超过 300M 会被系统杀掉，需要定期清理自动下载图片所占用的内存

## 2019-01-27:

1．可以去掉 MainForm 中的 pnlVirtualKeyboard，以及 FormShow 中的如下代码:  
 //在 Windows 平台下的模拟虚拟键盘控件  
 SimulateWindowsVirtualKeyboardHeight:=160;  
 IsSimulateVirtualKeyboardOnWindows:=True;  
 GlobalAutoProcessVirtualKeyboardControlClass:=TSkinFMXPanel;  
 GlobalAutoProcessVirtualKeyboardControl:=pnlVirtualKeyBoard;  
 GlobalAutoProcessVirtualKeyboardControl.Visible:=False;  

{$IFNDEF MSWINDOWS}  
  pnlVirtualKeyBoard.SelfOwnMaterialToDefault.IsTransparent:=True;  
  pnlVirtualKeyBoard.Caption:='';  
  {$ENDIF}

2．主题色变量从 uUIFunction 单元移动到了 uGraphicCommon 单元，如果要设置的话，引用它即可  
 //主题色  
function SkinThemeColor:TDelphiColor;  
 //主题色 2
function SkinThemeColor1:TDelphiColor;

3．ListBox 加入了列表项风格 ItemStyle 的属性,  
DefaultItemStyle：ItemType 为 sitDefault 的列表项的风格  
Item1ItemStyle：ItemType 为 sitItem1 的列表项的风格  
..............
 如果使用了 ItemStyle，那么 ListBox 就有了缓存功能，可以不需要每次刷新都重复的调用 OnPrepareDrawItem 事件，但要实现一个获取缓存标记的 OnGetItemBufferCacheTag 事件，默认如下即可，非常适合在 ListBox。

 加入了一个 OnClickItemDesignerPanelChild 事件，用于在共享一个 ItemDesignerPanel 或者使用 ItemStyle 时时处理不同的子控件点击事件.  
 如何添加一个列表项风格 ListItemStyle:  
从 TFrameBaseListItemStyle 继承一个 Frame 下来,  
在 Frame 中添加:  
initialization  
 RegisterListItemStyle('PetchipArticle',TFramePetchipContentListItemStyle);  
finalization  
 UnRegisterListItemStyle('PetchipArticle');  
 我会整理出常用的 ListItemStyle,放在 github 上面  
https://github.com/DelphiTeacher/OrangeUIStyles.git  
大家可以自行下载或扩展。  
 将 ItemDesignerPanel 放在 Frame 中还有一个好处就是可以继承和复用。  
可以在基类的基础上自定义和进行扩展。  
并且大家可以将自己设置的 ListItemStyle 分享出来，放在我的 Github 上。  
 为此 ItemDesignerPanel 特别加入了 PreviewItem 和 IsPreview 这两个属性用于在 Frame 中单独设计时使用。  

4．TSkinPicture 加入了 IsClipRound，可以实现将图片剪裁成圆角.

5．Android 下面虚拟键盘隐藏与显示问题修正(参考了 QDAC 的代码)。

## 2018-11-30：发布 OrangeUI FMX 1.75 for D10.3 Beta

控件包里面的内容有:  
1．OrangeUI 控件  
a)丰富的界面控件：可以简单的实现非常美观的界面， www.orangeui.cn  
b)Frame 页面框架：简单高效的 APP 开发模式，并具有页面切换效果，比 Form 模式灵活稳定。  
c)稳定高效：十几年控件开发经验的老司机倾力之作，开车之稳，让你难以想像。  
d)提供资深客服司机，为你 7\*24 解决控件使用、APP 开发、IOS 证书配置、商店上架、三方 SDK 调用等问题  
e)付费版优惠的价格，付费版仅需 688/年（免费版不提供技术支持、版本更新）  
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
j)相册图片多选框，AllImageFrame，支持 IOS+Android  
3．控件示例:  
a)控件综合示例，OrangeUISampleOfTutorial:  
i.各个控件的效果功能展示，可以直接拷贝示例中配置好的控件，省心方便。  
ii.通用页面框架的使用示例，省去使用上的困扰。  
iii.  
b)ListView 的功能展示，OrangeUIListView：  
i.商城首页、商品购物、朋友圈、九宫格菜单等等等，只有你想不到，没有 ListView 做不到。  
c)朋友圈示例，OrangeUI Moments：  
i.提供全套资料：APP 端源码+服务端源码(DataSnap 的 Rest 模式)+  数据库（SQLServer 2008R2）。  
ii.APP 中包含常用的功能：注册、登录、主界面、忘记密码、修改密码、个人资料编辑、短信验证码发送等等，您甚至可以不用修改就可以直接拿到自己的项目中使用。  
iii.APP 中包含规范稳定的服务端接口调用模式，调用接口之间显示等待框，并且在线程中调用接口以避免卡顿，以及页面跳转等其他一些常用的 APP 开发规范。  
iv.服务端包含接口开发规范，并提供数据增删改查、注册登录等接口，使用自带的 DataSnap 来实现，简单稳定，可以轻松添加您所需要的接口。  
v.服务端使用 ADO 组件连接并操作数据数，数据集以 Json 规范传递，符合目前潮流。  
d)图片上传下载，Upload and Download Picture：客户端上传下载图片功能，服务端接收并保存上传的图片。  
e)其他示例：商城界面、聊天界面、新闻界面等  
f)等等等等。  
有 APP 开发的朋友可以加群一起交流: 群号:10900297

## 2018-10-25：发布 OrangeUI FMX 1.75

1．设计面板上的控件可以在设计时右键，绑定所需要的 Item 属性  
2．ShowFrame 加入了弹出样式的处理  
3．MessageBoxFrame 加上了输入的功能

## 2018-05-25：发布 OrangeUI FMX 1.74.1

1．修复 CheckBox 在 ScorllBox 上面的事件响应顺序问题  
2．优化属性设计器，右键 ItemDesignerPanel 上面的控件可以直接绑定  
3．优化 ScrollBox 上面放 ListBox 的手势处理  
4．修复 Label 自动计算尺寸的问题

## 2017-12-15：发布 OrangeUI FMX 1.74(升级前请先备份下您的项目代码)

1．ScrollBox 滑动的时候会不断弹出虚拟键盘的问题  
处理成:如果移动超过 5 个像素,那么 Edit 失去焦点  
 如果手动隐藏了键盘,那么 Edit 失去焦点  
2．NotifyNumberIcon 和 Button 结合  
3．Edit、Memo 改成默认不勾选 StyleSetting 中的 FontSize,不然手机上受 Style 控制字体会变大  
4．修复 RoundImage 不够圆的问题  
5．修复 Memo 会在 IOS 上弹出三个自定义菜单的问题  
6．修复 DrawPanel 保存图片会花屏的问题  
7．修复 ListBox 滚动条有时不会自动隐藏的问题  
8．为了照顾国外用户，目录和 OrangeUIDemo 示例改成英文了  
9．特别注意，Android 平台用了透明状态栏之后 WebBrowser 会下移，  
要用修复文件:OrangeProjectCommon\PasFix_D10_1\Android 透明任务栏 WebBrowser 会下移  
10．付费版用户赠送商城订单 APP 案例,支持 IOS+Android

11．OrangeUI 朋友圈客户端添加多选照片的功能(第一版),支持 IOS+Android,感谢[新手]提供 IOS 单元

12．CheckBox 和 RadioButton 加入 OnChange 事件，优化 CheckBox 和 RadioButton 在 ScrollBox 上滑动误点击  
13．ItemDesignerPanel 加入 OnPrepareDrawItem 事件，当 ListBox 绑定多个 ItemDesignerPanel 的时候可以分别处理  
14．修复文本尺寸计算不准确的问题，优化了 DrawCanvas 文本尺寸计算的方法，参考[红鱼儿]的方法  
15．ProgressBar 加入 IsClipPercentRect,可以剪裁前景，ProgressBarColorMaterial 中加入 IsReverse，可以反向绘制

16．支持 Delphi Tokyo 10.2.2  
17．DateEdit 完善在 Windows 平台下点击弹不出选择窗体的问题  
18．加入 CalloutRect 气泡控件

## 2017-07-30：发布 OrangeUI FMX 1.73 修复版

1．修复在 Tokyo 下 MultiColorLabel 设计期不能编辑 ColoText 的问题  
2．修复在 Tokyo 下 DBGrid 设计期不能编辑表格列的问题  
3．修复 DateEdit 显示重影的问题  
4．修复 TabSheet 设置 PageIndex 时的问题  
5．DownloadPictureManager 加入了添加图片到缓存的方法  
6．完善 NativeHttpControl 上传图片的示例  
7．修复设计面板绑定 CheckBox 和 RadioButton 的问题  
8．Button 加入了 HelpText 属性  
9．ImageListViewer 加入图片切换开始事件 OnImageListSwitchBegin  
10．OrangeUI 朋友圈示例完结，加入屏蔽和举报的功能，  
该示例已经是一个功能完善的内容发布 APP，  
包含账号注册、用户登录、发布朋友圈、朋友圈内容列表、评价和点赞朋友圈、修改个人资料等页面  
提供客户端和服务端的全部源码，  
有类似需求的朋友可以直接在此基础上修改即可。  
并已上架到 AppStore、应用宝、安智商店、华为应用市场，

## 2017-06-26：发布 OrangeUI FMX 1.73

1．控件编辑器改进  
 在 ListBox 列表项设计器中可以直接拖动改变顺序  
 修复右键 ListBox 可以直接添加列表项的功能  
 在 ImageList 设计器中可以直接拖动改变顺序  
 双击 MultiColorLabel 直接弹出编辑器  
 双击 DBGrid 可以直接弹出表格列编辑器  
2．重新整理完善 ListBox 编辑列表项的功能  
3．重新整理列表类的结构，ListBox->VirtualList->CustomList->ScrollControl,  
4．重新整理表格类的结构，DBGrid->VirtualGrid->CustomList->ScrollControl  
5．朋友圈示例加入了资料编辑的功能  
 可以修改昵称、性别、签名  
 可以剪裁并修改头像  
6．DBGrid 加入了简单的编辑功能。

## 2017-06-06：发布 OrangeUI FMX 1.73Beta

（升级版本 1.73 之前,请大家先备份一下工程代码以及老版本控件,特别是用了 DBGrid 的朋友们)  
1．增加了常用弹出框的页面，都放在 OrangeProjectCommon\CommonFrames\目录下  
对话框 MessageBoxFrame  
等待框 WaitingFrame 提示框 HintFrame  
单选页面 SingleSelectFrame 多选页面 MultiSelectFrame  
日期选择页面 SelectMonthFrame 省市选择页面 SelectCityFrame  
弹出菜单页面 PopupMenuFrame 选择照片菜单页面 TakePictureMenuFrame  
2．CheckBox 加入了颜色类型  
3．RadioButton 加入了颜色类型  
4．NotifyNumberIcon 加入了颜色类型  
5．DrawRectParam 中 RoundWidth 和 RoundHeight 设置为-1 可以实现圆形效果
6．ButtonGroup 中的 Button 在设计时设置了 Locked 为 True,避免误选中  
7．完善 DBGrid 控件(测试中)(仅建议在平板上使用)  
 可以动态添加列、删除列、清除列、设置列顺序、设置列的宽度、列的隐藏  
 可以显示指示列，显示指示列的序号，设置指示列的宽度  
 可以设置固定列，固定列的个数  
 可以设置统计行  
 可以设置表格行列分隔线、行背景色等素材  
 可以选中单元格或表格行  
 可以设置日期型字段的显示格式  
 可以设置浮点型字段的显示格式  
 可以设置浮点型统计值的显示格式  
 可以直接在设计时选择 DBGridColumn 的 FieldName  
示例在 OrangeUI Samples(其他)\OrangeGrid 目录中

8．添加 ItemGrid 控件(测试中)(仅建议在平板上使用)，  
可以添加列，  
可以像在 ListBox 中添加列表项一样的方式来添加数据行  
 示例在 OrangeUIDemo 中的 ItemGridFrame 单元中

9．ListBox 加入了平拖准备事件 OnPrepareItemPanDrag，  
可以在该事件中根据列表项来决定是否需要平拖，以及所需要的按钮，  
在 OrangeUIDemo 示例中的 ListBoxFrame_UseItemPanDrag 单元中  


## 2017-05-03：发布 OrangeUI FMX 1.72

1．Frame 框架的完善(循环跳转的修复，返回释放报错的问题)  
2．增加 ListView 的综合示例  
3．ListBox 分组头尾分隔线的完善

## 2017-04-20：发布 OrangeUI FMX 1.71

1．修复 ListView 布局的问题
2．修复 PageControl 的 Orientation 为 Left 和 Right 时，分页按钮排列不正确的问题  
3．修复 ListBox 列表项编辑时 Edit 绘制到其他列表项的问题  
4．修复 ListBox 清空时会触发下拉刷新的功能  
5．加入了 TTimerTaskEvent 线程任务事件组件

## 2017-04-15：发布 OrangeUI FMX 1.70

1．完善 OrangeUI 官网的文档内容http://www.orangeui.cn/document.php  
2．修复 ListBox.Prop.Items.Sort 排序的问题  
3．ListView 支持瀑布流功能，ListView.Properties.ViewType 设置为 vtWaterfall 即可，如非必要，请勿使用  
4．优化 ListBox 编辑列表项元素的功能  
之前是点击 ItemDesignerPanel 上面的 Edit，自动创建一个新的 Edit，把素材及事件复制过去，这样导致有些功能不全  
如今是使用原 Edit 进行编辑，能得到完全控制权  
5．DrawPicture 去掉 ColIndex,RowIndex,RowCount,ColCount 属性，给大家带来不便，抱歉  
6．ListBox 去掉了 ItemDrawType 属性，给大家带来不便，抱歉  
7．隐藏了 ListBoxItem.Icon 设计时的 SkinImageList，避免新人使用错误  
 请大家统一在 ListBox.Properties.SkinImageList 中设置,而不用每个 Item.Icon 都设置一次 SkinImageList  
8．完善 ListView 水平排列的功能  
9．修复 PageControl 在设计时设置按下字体颜色时不会立即刷新的问题  
10．ListBox、ListView 加入了列表间隔功能，如非必要，请勿使用  
 间隔宽度属性为 ListBox.Properties.ItemSpace,设置为大于 0 即可  
 间隔类型属性为 ListBox.Properties.ItemSpaceType  
11．修复了 ListBox 行分隔线颜色和宽度设置不起作用的 Bug(感谢网友绝代双椒)  
12．优化了手势处理，放置在 ItemDesignerPanel 上的 ImageListViewer 滑动切换图片时不会让 ListBox 垂直滑动  
 需要写 VertControlGestureManager.OnPrepareDecidedFirstGestureKind 事件  
 具体请看 XunKe 示例的 HomeFrame,ShopFrame 以及 OrangeUIDemo 中的 ListBoxFrame_MouseEventTest  
13．ScrollControl 自动下拉刷新上拉加载更多功能的实现，不再需要再手动拖一个 PullLoadPanel 来实现。  
 增加了 EnableAutoPullDownRefreshPanel 和 EnableAutoPullUpLoadMorePanel 这两个属性，  
EnableAutoPullDownRefreshPanel 表示自动创建下拉刷新的面板。  
EnableAutoPullUpLoadMorePanel 表示自动创建上拉加载更多的面板。  
 如果要自定义 PullLoadPanel,不再需要从 VertScrollBar.Properties.MinPullLoadPanel 和 MaxPullLoadPanel 中设置,  
 而是在 ScrollControl.Properties.PullDownRefreshPanel 和 PullUpLoadMorePanel 中设置。  
PullDownRefreshPanel 是自定义的下拉刷新的面板  
PullUpLoadMorePanel 是自定义的上拉加载更多的面板  
 自动创建的 PullLoadPanel 的素材设置，在 ScrollControl.SelfOwnMaterial.PullDownRefreshPanelMaterial 和 PullUpLoadMorePanelMaterial 中。  
 在 PullDownRefreshPanelMaterial 素材中,如果要自定义滚动提示的图片列表，请给 LoadingPicture.SkinImageList 赋值  
 如果不给 LoadingPicture 设置图片或图片列表，那么会自动创建 IndicatorColor 这个颜色的 SkinImageList 来做滚动提示图片。  
 手动下拉刷新，使用 ScrollControl.Properties.StartPullDownRefresh 和 StartPullUpLoadMore 方法  
 加载结束时,使用 ScrollControl.Properties.StopPullDownRefresh 和 StopPullUpLoadMore 方法  
14．增加 ControlGestureManager 的示例(ControlGestureManager 是滑动手势管理组件)  
15．增加 PanDragControlGestureManager 的示例(PanDragControlGestureManager 是平移列表项所使用的手势管理组件)  
16．修复 Panel 的边框为 1 时线很粗的问题

## 2017-04-05：发布 OrangeUI FMX 1.68

1．完善 OrangeUI 官网的文档内容http://www.orangeui.cn/document.php  
2．修复 ListBox.Prop.Items.Sort 排序的问题  
3．ListView 支持瀑布流功能，ListView.Properties.ViewType 设置为 vtWaterfall 即可，如非必要，请勿使用  
4．优化 ListBox 编辑列表项元素的功能  
之前是点击 ItemDesignerPanel 上面的 Edit，自动创建一个新的 Edit，把素材及事件复制过去，这样导致有些功能不全  
如今是使用原 Edit 进行编辑，能得到完全控制权  
5．DrawPicture 去掉 ColIndex,RowIndex,RowCount,ColCount 属性，给大家带来不便，抱歉  
6．ListBox 去掉了 ItemDrawType 属性，给大家带来不便，抱歉  
7．隐藏了 ListBoxItem.Icon 设计时的 SkinImageList，避免新人使用错误  
 请大家统一在 ListBox.Properties.SkinImageList 中设置,而不用每个 Item.Icon 都设置一次 SkinImageList  
8．完善 ListView 水平排列的功能  
9．修复 PageControl 在设计时设置按下字体颜色时不会立即刷新的问题

## 2017-03-15：发布 OrangeUI FMX 1.67

1．提高了 ListBox，ListView 惯性滑动的平顺度  
2．修复了切换 ListBox.Properties.VertScrollBarType 为 AutoClipShow 时报错的问题(感谢网友人人)  
3．完善了 ListBox 的点击，滑动的时候不再有点击效果，原地按下弹起才会有点击效果(感谢网友程序人生)  
4．完善了 Frame 框架以及切换的平顺度，具体请看 FrameTest 示例(释放 Frame,从 Frame 回传值,按返回键返回上一页等处理)  
5．完善了朋友圈示例，加入了注册、找加密码、修改密码、发送验证码

## 2017-02-25：发布 OrangeUI FMX 1.66

1.内置 TSystemHttpControl(uBaseHttpControl.pas)来下载图片,  
Image 下载 URL 图片不需要再添加 uIdHttpControl.pas 或 uNativeHttpControl，  
也不需要手动再指定 DownloadPictureHttpControlClass  
2.升级 DownloadPictureManager,  
DrawPicture(如 Image.Properties.Picture)和 ListBox 的图标(如 ListBoxItem.Icon) 默认使用全局的 GlobalDownloadPictureManager 来下载图片的  
可以为 DrawPicture 指定 DownloadPictureManager,  
如果 DrawPicture 之前设置过 URL,再设置新的 URL 之后,要等到新 URL 下载完成之后图片才会切换显示过来，  
可以为 ListBox 指定 DownloadPictureManager,这样可以把 ListBox 的图标单独放在一个文件夹里面，  
可以设置 DownloadPictureManager 在下载图片时的四种状态图片(等待下载,下载中,下载失败,图片出错)，  
具体请查看 OrangeUIDemo 中的 DownloadPictureManager 示例和 OrangeViewNews 示例。  
3.ListBox.Prop.Items 增加搜索 Item 的方法 FindIteByDetail,FindItemByDetail\*  
4.添加一个简单的图片上传下载客户端和服务端的简单示例  
5.添加一个微信朋友圈客户端和服务端的简单示例

## 2016-11-30：发布 OrangeUI FMX 1.65

1．修复连续点击造成不能返回上一个 Frame 的问题  
2．修复 Label 垂直绘制时显示不全的问题  
3．修复 PullLoadPanel 拖动的时候会盖住列表项的问题  
4．修复 ScrollBox 上的 Edit 滚动时 ScrollBox 不会滚动的问题  
5．修复 ListBox 在列表项高度不固定的时候绘制慢的问题  
6．付费版增加两个示例程序供学习(企业管理+平板点单)  
7．示例程序重新整理(TreeView,PullLoadPanel 等)  
8．内部结构调整(ButtonGroup,ListBox,ListView,DBGrid,TreeView 统一使用 ListLayoutManager 来布局,  
后续 PageControl 的表头等都会统一,减少无用代码,能增强原有控件的功能)

## 2016-08-23：发布 OrangeUI FMX 1.64 Beta

1．在控件面板中加入了 TClearEditButton 等，可以直接把它们放入 FMXEdit 控件中  
2．完善了 PullLoadPanel、PageControl、NotifyNumberIcon、FrameImage、RoundImage、MultiColorLabel 的教程  
3．ListBox 平拖列表项功能增强与完善(可以手动开始、结束平拖列表项,平拖时不会影响 ListBox 的垂直滚动)  
4．修复下拉 PullLoadPanel 的时候会挡住 ListBox 顶部的组分隔线的问题  
5．修复移动平台下自动下载的图片不会缓存的问题(感谢网友[.μρ2ц 清风])  
6．直接在 ScrollBoxContent 上放 OrangeUI 控件就能滚动,不需要再设置 ParentMouseEvent 属性(控件层级不要太深)  
7．修复 RadioButton 在点击的时候能取消勾选的问题(感谢网友[清风])  
8．修复 ComboBox 的 Text 属性能直接获取到文本  
9．修复 RoundImage 在某些电脑上会黑屏的问题  
10．TreeView 增加 LevelRightIsFitControlWidth 属性，当设置了 LevelLeftOffset 的时候，节点保持右对齐  
LevelRightIsFitControlWidth 为 False  
LevelRightIsFitControlWidth 为 True

## 2016-06-01：发布 OrangeUI FMX 1.63 Stable

（升级版本 1.63 之前，  
请大家先备份一下工程代码以及老版本控件，  
再逐个打开工程中的窗体，  
把不能认到的属性都忽略掉）  
1．NotifyNumberIcon 的素材添加 LongPicture，  
当提醒数字为 1 位数时(1~9)，使用 Picture 当作背景,  
为两位数时(10~99)，使用 LongPicture 当作背景，避免拉伸产生变形

2．Frame 切换增加简单的效果(HideFrame,ShowFrame 中都加入了是否使用切换效果的参数)  
3．增加教程和示例 (Frame 中虚拟键盘简单处理示例 2，FrameHistory 的使用说明，DownloadPictureManager 控件的使用说明)  
4．修复 ComoboBox 在设计时有黑色小箭头的 Bug  
5．ComboEdit 加入 InScrollBox 属性  
6．去掉了 Edit 的 BorderMargins 属性  
7．加入了 OrangeUI 类结构的帮助文档

## 2016-05-15：发布 OrangeUI FMX 1.63

（升级版本 1.63 之前，  
请大家先备份一下工程代码以及老版本控件，  
再逐个打开工程中的窗体，  
把不能认到的属性都忽略掉）  
1．去掉了 ScrollBar 的 StrictScrollPrecision 属性，加入了 StrictScrollAngle 属性(用于控制严格拖动的角度)。  
2．去掉了 ItemDesignerPanel 的 EnabledDesignTimePreviewBinding 属性(直接启用设计预览功能)  
3．修复了 ListView 中 Item.Visible 为 False 时没有隐藏的 Bug(感谢网友一二一)  
4．去掉了 ListBox 的 ItemSizeCalcType 属性,并将此属性名称替换为 ItemHeightCalcType  
5．去掉了 PageControl 素材的 IsDrawBackground 和 IsDrawTabHeaderPicture 属性  
6．DrawParam 在设计时显示所对应的参数名称  
7．将 ListBox,ListView,TreeView 的 OnClickItem 事件类型由 TNotifyEvent 转换成 TClickItemEvent  
8．TreeView 的素材添加 ParentItemMaterial(父节点列表项绘制素材)  
9．去掉了 TabSheet 素材的 IsDrawBackground 属性  
9．去掉了 ScrollBar 素材的 IsDrawBackground 属性  
10．将 ListBox,ListView,TreeView 的 OnClickItem 事件由 TNotifyEvent(Sender:TObject)  
转换为 TClickItemEvent(Sender:TSkinItem),记得需要引用 uSkinItems 单元  
11．加入 ListBox 自动下载图标的功能,记得添加 uNativeHttpControl .pas 或 uIdHttpControl.pas  
(只需要设置 Icon.Url,在绘制此 Item 的时候，会启动线程自动下载图片，下载完自动刷新，看 ListBox 的示例，或新闻的示例)  
12．加入下载图片管理 DownloadPictureManager 组件,记得添加 uNativeHttpControl .pas 或 uIdHttpControl.pas  
(看 DownloadPictureManager 的示例)  
13．OrangeProjectCommon 文件夹已更新(主要是 FMX.Platform.iOS.pas 等)

## 2016-02-16：发布 OrangeUI FMX 1.62

1．修复列表项属性编辑器在编辑 ListBoxItem 的 SubItems 属性时挡住 StringList 编辑器的问题  
2．废弃 ItemDesignerPanel 的 EnabledDesignTimePreviewBinding 属性  
3．完善了教程(加入了 绑定 ListBoxItem.SubItems、PageControl 效果设置、ScrollBox 处理虚拟键盘遮挡)  
4．加入了验货 APP 示例(仅供学习)

## 2015-11-20：发布 OrangeUI FMX 1.61 Beta

1．完善 DrawPanel 签名控件，加入撤消和恢复的功能  
2．加入 RoundImage 控件，可以在图片上绘制空心圆角矩形

3．修复了当 TabSheet 绑定 NotifyNumberIcon，更改 NotifyNumberIcon 的 Number，不立即刷新的问题，感谢网友Ｈ E Ｎ K Ｅ L  
4．应客户要求，ListBox 等加入了长按列表项的 OnLongTapItem 的事件  
5．设计时，ListBox 的列表项设计器会挡住图片选择框的问题  
6．ScrollBar 加入了 Mobile 的 ComponentType，如需使用，请作以下设置  

7．ScrollBar 修复滚动时有时候会自动隐藏的问题  
8．ScrollBar 默认皮肤

## 2015-09-09：发布 OrangeUI FMX 1.60

（升级版本 1.6 之前，请大家先备份一下工程代码）  
1．ListBox 加入 Edit 自动编辑功能  
2．ListBox 加入绘制圆角分组的功能  
3．修复 DrawRectParam 边框大于 1 时，填充色会填充到边框的 BUG  
4．支持 RAD 10 Seattle

## 2015-07-06：发布 OrangeUI FMX 1.50

（升级版本 1.5 之前，请大家先备份一下工程代码）  
1．加入 MultiColorLabel 控件，支持一个 Label 中多个字符串显示不同颜色的字体(在 Win 平台下此控件仅简单预览)  
2．加入简单的 DBGrid 控件（记住，是简单的）（应网友 Colin 的要求）  
3．修正 ButtonGroup 中 Button 仍使用自己的 BackColor 来绘制的 BUG（感谢网友 Jason）  
4．优化中文的绘制速度，优化控件的加载速度，大大减小.fmx 文件的体积（升级之前，请大家先备份一下工程代码）(感谢网友完全二叉树)  
5．修正多个 Image 引用 ImageList 中同一个 GIF 时不会动（感谢网友 Jason）  
6．修正在 ItemDesignerPanel 里的 Panel 中的 Edit 点击进行编辑时，显示的位置不正确，没有加上 Panel 的偏移(感谢网友完全二叉树)  
7．ListBox 的水平模式加入居中选择功能

## 2015-05-25：发布置 OrangeUI For FMX 1.49

1.OrangeUI 控件一些属性整体由 Integer 转换为 Double,TRect 转换为 TRectF(编译遇到问题，请立即联系我)  
2.ListBox 滑动流畅度提升（ScrollBox,TreeView,ListView 同样）  
3.PageControl 加入表头居中 IsTabHeaderCenter 属性(当 Tab 标签头未填满的时候)  
4.控件设计器加入了共享 Material 素材的功能  
在设置控件好素材后,右键点击此控件，在弹出菜单中选择“共享此 Mateiral”,  
控件的 SelfOwnMaterial 就会变成一个独立的控件，  
可以放在工程的 DataModule 中给同类型的控件使用(MaterialUseKind 设置为 mukRef,RefMaterial 为此素材)  
5.DrawRectParam 加入了设置四条边框、四个角隐藏和显示的属性  
6.Edit 加入 IsInScrollBox 属性(在 ScrollBox 中拖动的时候就不会弹出虚拟键盘)  
7.ListBox 加入居中选择模式(IsEnabledCenterItemSelectMode 属性，用于弹出选择，自定义 Combox 弹出的选择窗体)  
8.ItemDesignerPanel 支持动态绑定 SkinItem 的 SubItems，可以绑定无数个 Label  
为 Item 添加 SubItems  
选中 ItemDesignerPanel，双击 ItemStringsBindingControlCollection,  
添加绑定的控件和字符串 SubItems 的下标

## 2015-04-11：发布 OrangeUI FMX 1.48

1.支持 XE8  
2.TabSheet 增加 NotifyNumberIconControl 属性，用来绑定提醒图标控件  
3.Button 增加 Detail 属性

## 2015-03-27:发布 OrangeUI FMX 1.47

1.ListBox 增加数据编辑功能(应网友[江门]gzpochacco 要求)  
2.修正画分隔线高度为 1px 时，显示的却是 2px 的 Bug,以及 ButtonGroupMaterial 的效果不起作用的问题(感谢网友 carmas123)  
(XE 画细度为 1 的线，DrawLine(PointF(1,1),PointF(1,100))会显示两个像素，DrawLine(PointF(1-0.5,1),PointF(1-0.5,100))则是一个像素)  
3.修正 Edit 选不中里边文字的问题(感谢网友[西安]高勇)  
(Edit 如果高度太高且居中，会造成文字选不中，由 Edit 内部的实现机制造成的，  
可以通过设置 Edit 的 ContentMarginTop,ContentMarginBottom 将 Content 的高度限制在一定范围以内(IOS 40px,Android 30px))  
4.英文版控件设计器  
5.增加 ScrollBox 和虚拟键盘弹出输入再隐藏的使用示例  
6.Image 控件的 GIF 播放增加了间隔时间属性 GIFDelayExp(应网友[中国]-阿呆要求)  
7.ListBox 增加了编辑 DEMO(针对多个列表项所用编辑框相同的属性,如果每个列表项的编辑框属性要求各异，建议用 ScrollBox 来实现)

## 2015-02-10:发布 OrangeUI FMX 1.46

1.增加 ComboEdit,ComboBox,DateEdit,Popup(都是从自带控件继承)  
2.增加 SwitchBar 开关控件(应网友白雪公猪（傻大木）要求)

3.增强了 TreeView 控件 4.增加了新浪微博的初版 DEMO
5.DrawPicture 加入使用资源图片(在 Project->Resources and Images....中添加)、文件、链接的功能(属性 ResourceName、FileName、Url)
6.Edit 加入了 ClientMarginsLeft 属性，用来在 Edit 的左边放提示图标等控件

## 2015-01-15:发布 OrangeUI FMX 1.45

1.修复 Button 和 Action 的关联(感谢网友[温州]大量)  
2.SkinImageList 里的每一张图片增加了 ImageName，绘制图片的地方可以指定 ImageName（也可以指定 ImageIndex）  
3.增强 ItemDesignerPanel 中绑定 Item 控件的属性编辑器  
4.加入 OSX，Win64 平台  
5.一些小细节，DrawPictureParam 加入了 Alpha 属性，DrawRectParam 加入了 IsLine,LinePosition 属性  
6.完善了文档教程

## 2014-12-29:发布 OrangeUI FMX 1.4

1.NotifyNumberIcon 的 Number,NumberMax 属性由 Integer 类型转换为 Double 类型,并可以绑定到 SkinItem 的字符串属性  
2.PageControl 加入了 PageListAnimated 属性，点击标签头可以动态的切换分页  
3.加入了 SwitchPageListControlGestureManager 控件，用于实现切换分页的手势  
4.加入了 SwitchPageListPanel 控件，用于实现切换分页的控件  
5.控件加入了 ParentMouseEvent 属性(用于从当前的 Control 传递消息给它的 Parent，从而处理 Parent 的 Mouse 消息，应网友[佛山]网虫要求)  
6.PageControl 加入了手势切换功能(从原来的 TControl 继承到现在从 SwitchPageListPanel 继承，应网友[佛山]网虫要求)  
7.ListBox 为了缯加复杂 Item 的滑动流畅度，加入了 EnableBuffer 即启用缓存属性，并且增加了横向排列的模式  
8.加入了 TreeView 控件,请查看 OrangeQQ 这个 Demo  
9.完善了 OrangeQQ 这个 DEMO,加入了 OrangeGuide 这个 Demo

## 2014-11-19:发布 OrangeUI FMX and VCL 1.3 稳定版

1.增加 ListBox 的列表项水平拖动的功能，用于放置列表项删除按钮,或打电话等功能按钮或其他控件  
2.ListBox 的列表项的图标默认使用 ListBox 中设置的 SkinImageList  
3.ListView 不同列表项宽度的显示处理  
4.ImageListViewer 增加左右按键移动的功能  
5.基类控件增加 MouseDownFocus 属性(鼠标按下就获取焦点)  


## 2014-09-28:发布 OrangeUI FMX 1.2 稳定版

1.修复一些 BUG(感谢无为)  
2.所有控件增加透明度支持 Opacity  
3.所有控件添加了 RefMaterial 和 KeepSelfOwnMaterial,多个控件可以共享一个素材  
4.Demo 中添加 OrangeViewPicture,通用图片浏览界面  
5.添加 ProgressBar 进度条控件  
6.增强 ImageListViewer 控件，增加手势支持，缩放支持

## 2014-09-19:发布 OrangeUI FMX 1.2 正式版

老哥脑出血，本人一直陪在医院，抽出一些时间来完善 OrangeUI，医药费也用了 6 万多了，唉，大家保重身体，珍惜生命，人生艰苦，祸福自取！  
1.修复内存泄露的问题(感谢无为)  
2.增加 ImageListViewer 控件(手势翻页查看图片）  
3.增加 DrawPanel 画板控件  
4.加入 OrangeUIMobileDebugServer 程序,允许真机调试时远程输出日志

## 2014-08-28:发布 OrangeUI FMX 1.1.1 正式版

1.增加 PullLoadPanel 控件,简化并自定义 ListBox 的上拉和下拉刷新功能  
2.增强 ListBox 的设计时绑定功能,增强 ListBoxItem 的属性  
3.Memo 加入显示提示文字的功能

## 2014-08-18：发布 OrangeUI FMX 1.1 正式版

1.优化 ListBox 的效率，一两万条滚动顺畅  
2.增强 CheckBox,可以设置未勾选和已勾选的标题  
3.添加 NotifyNumberIcon,也就是通知提醒数字控件  
4.增加 ListBox 的简单实用的动态绑定功能

## 2014-06-08：发布 OrangeUI FMX and VCL1.0 Beta 版

1.按钮控件和图片控件免费使用  
2.FMXEdit 和 FMXMemo 修改成无边框的  
3.加入 ImageListPlayer 和 ButtonGroup 控件  
4.增强 ListBox，并加入 ListView 控件  
5.增加 SkinAnimator 和 SkinControlMoveAnimator 动态效果组件

## 2014-05-06：发布 OrangeUI FMX and VCL1.0 Preview 3 版

1.Image 控件，加入 GIF 图片支持，图片旋转，图片列表播放  
2.ListBox 控件功能增强，加入上下拉滚动刷新功能，加入分隔线功能  
3.框架调整，绘制参数加入根据控件状态动态效果切换的功能  
4.加入 OrangeUI For VCL  
5.其他的想不起来了

## 2014-04-15：发布 OrangeUI FMX 1.0 Preview 2 版

未记录

## 2014-04-01：发布 OrangeUI FMX 1.0 Preview 1 版

未记录
