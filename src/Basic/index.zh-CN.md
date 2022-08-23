---
title: 使用基础
nav:
  title: Doc
  path: /components
  order: 1
group:
  title: 使用基础
  order: 10
---

当你想拖一个OrangeUI的按钮时，你会发现它是一个光禿禿的控件，比如标题字体也不居中，背景色也没有，要想实现你想要的效果，得从从一步步的设置，面对众多绘制参数，你会感叹道，这屌鸡巴控件，真他妈的难用。
在这里，我只能向大家说声：OrangeUI的用户，大家辛苦了。
如何改变这个现状，接下来我就给大家介绍我们今天的主角，叫做公共素材模块。它其实就是一个Delphi的另类窗体DataMoudule，在它上面不可以放界面控件，但可以放置Delphi组件，比如我们经常将数据库连接、数据集等放在它的上面给业务窗体共同使用。那么OrangeUI控件的素材组件也是组件，因此大家可以将设计好的素材放在它上面，给所有页面共同使用。我在开发项目的时候，也会把相同样式的素材放在上面，它就是控件包中的 __EasyServiceCommonMaterialDataMoudle__ ，位于控件包的OrangeProjectCommon目录中。我们来打开它看一下：
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-56.png)

要想使用它，

第一步，你需要将它添加到你的工程：  
-----------------
在工程视图中右键你的工程，选择‘Add...’    
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-57.png)  
找到OrangeProjectCommon目录，  
选择‘EasyServiceCommonMaterialDataMoudle.pas’，点击‘打开’  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-58.png)  
公共素材模块就添加到了你的项目中  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-59.png)  







第二步，在页面中使用公共素材
-----------------
比如我要做一个报表查询条件输入页面ReportFilterConditionFrame，  
引用公共素材单元  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-60.png)  





第三步，确定APP主题色SkinTheme
-----------------
在工程主窗体中放一个TSkinTheme组件，整个项目只需要放一个这样的组件  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-61.png)  
NavigationBarColor，导航栏背景色  
NavigationBarFontColor，导航栏字体颜色  
SkinThemeColor，主题色  
SkinThemeColor1，主题色1  
SkinThemeColor2，主题色2  
SkinThemeColor3，主题色3
那么如何在素材中使用这个主题色呢？比如素材中的背景色，我们可以将BackColor.FillColor.UseThemeColor设置为ctThemeColor即可。  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-62.png)  





导航栏Toolbar公共素材
-----------------
拖一个Panel到ReportFilterConditionFrame，将它的Align设置为Top，高度设置为50，Properties.IsToolBar设置为True，它的Name设置为pnlToolbar，Caption设置为“条件设置”  
此时它还没有设置过素材，看起来是这个样子的：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-63.png)  
接下来，我们就给它设置公共素材，点击它的RefMaterial属性右边的箭头  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-64.png)  
它会将在公共素材模块中属于该控件的素材组件都列举出来  
我们选择：dmEasyServiceCommonMaterial.pnlToolBarMaterial，它的样子就设置好了，不需要我们再单独设置背景色、标题位置等。  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-65.png)  





返回按钮Button的公共素材
-----------------
我们还需要一个返回按钮，公共素材模块也已经包含了这个素材  
我们放一个按钮在导航栏上，将它的Name设置为btnReturn，宽度设置为80，Align设置为Left  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-66.png)  
将它的RefMaterial设置为dmEasyServiceCommonMaterial.bdmReturnButton  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-67.png)  
这个公共素材已经设置好一个返回的箭头图标，所以你也不需要去设置图标了。  



滚动框ScrollBox的公共素材
-----------------
放一个ScrollBox，Name设置为sbScrollBox，将它的Align设置为Client，  
ScrollBox也有一个公共素材：  
dmEasyServiceCommonMaterial.sbDefaultColorBackgroundScrollBoxMaterial  
它是一个浅灰色的背景  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-68.png)  
再放一个ScrollBoxContent在ScrollBox里面，Name设置为sbcContent，将它的Align设置为Top  



输入框Edit
-----------------
我们需要输入关键字，  
我们先放个Panel在sbcContent中，用做输入项背景和标题，将Panel命名为pnlKeyword，高度设置为45，Align设置为Top，Caption设置为关键字，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-69.png)  
将它的RefMaterial设置为：  
dmEasyServiceCommonMaterial.pnlInputBlackCaptionPanelMaterial，这个素材拥有白色背景，标题水平居左垂直居中，字体大小为14，效果如下图所示：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-70.png)  
再放一个输入框在pnlKeyword中，将它的Name设置为edtKeyword，它的左边距Margins.Left设置为80，它的Align设置为Client，Properties.HelpText设置为“请输入关键字”，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-71.png)  
Edit也有公共素材，我们将它的RefMaterial设置为：  
dmEasyServiceCommonMaterial.edtInputEditHasHelpTextMaterial，效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-72.png)  
这个公共素材是背景透明，提示文本字体灰色且垂直居中的。  



下拉框ComboBox
-----------------
先放一个输入区Panel，取名为pnlDoorStructure，用来放门结构下拉选择框  
放一个下拉选择框，取名为cmbDoorStructure，将它的左边距Margins.Left设置为80，Items设置为： 空字符串（表示不过滤）、四开、主中三开、双开、单门、豪华单门、豪华四开、中固三开、立柱四开，ItemIndex设置为0，Properties.HelpText设置为“请选择门结构”，目前效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-73.png)  
大家可以看到，标题位置不合适，并且连下拉箭头都没有。  
那么我们就需要给它选择一个公共素材：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-74.png)  





选项按钮Button
-----------------
有时候，我们会需要通过点击一个按钮，跳转到一个专门的页面来选择一个选项。这个按钮需要有一个跳转的提示图标以及提示文字。  
比如我们要选择客户，我们先放一个输入区Panel-pnlSelectCompany，再在里面放一个按钮btnSelectCompany，还是和上面的操作类似，我们将按钮的左边距Margins.Left设置为80，Align设置为Client，Properties.HelpText设置为“请选择客户”  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-75.png)  
然后我们给它选择一个公共素材：  
dmEasyServiceCommonMaterial.btnSelectButtonMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-76.png)  





选择时间范围的按钮SelectDateAreaButton
-----------------
我们先放一个输入区Panel-pnlSelectDateArea，再在里面放一个TSkinSelectDateAreaButton控件，取名为btnSelectDateArea，这个控件有两个属性，StartDate和EndDate，用于存放开始日期和结束日期，然后我们将它的素材设置为：  
dmEasyServiceCommonMaterial.btnSelectButtonMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-77.png)  
接下来我们需要写它的点击事件，以便点击该按钮可以跳转到选择时间范围的页面SelectFilterFrame，该页面如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-78.png)  
好，我们开始写点击事件:  

procedure TFrameReportFilterCondition.btnSelectDateAreaClick(Sender: TObject);  
begin  
  //选择日期范围  
  //搜索  
  HideFrame;  
  ShowFrame(TFrame(GlobalSelectFilterFrame),TFrameSelectFilter,DoReturnFrameFromSelectDateArea);  
  //完成日期  
  GlobalSelectFilterFrame.Load(  
    btnSelectDateArea.StartDate,  
    btnSelectDateArea.EndDate,  
    ''  
    );  
  GlobalSelectFilterFrame.pnlToolBar.Caption:='选择'+Self.pnlDateArea.Caption;  
end;  


在跳转到页面去的时候，需要传入一个方法用于处理返回的事件DoReturnFrameFromSelectDateArea，用于将选择好的日期范围赋值给按钮，该方法代码如下：  

procedure TFrameReportFilterCondition.DoReturnFrameFromSelectDateArea(AFromFrame: TFrame);  
begin  
  btnSelectDateArea.StartDate:=TFrameSelectFilter(AFromFrame).FStartDate;  
  btnSelectDateArea.EndDate:=TFrameSelectFilter(AFromFrame).FEndDate;  
end;  



复选框CheckBox
-----------------
我们要查询是否审核过的单据，就需要放一个CheckBox到输入区中，取名为chkIsAudit，将它的ComponentTypeUseKind设置为ctukName，ComponentTypeName设置为Color，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-79.png)    
然后我们也给它选择一个公共素材：  
dmEasyServiceCommonMaterial.chkDefaultRectCheckBoxMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-80.png)  
来看看它勾选后的样子：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-81.png)  
我们可以看到它的背景色就是我们的主题色。  



单选框RadioButton
-----------------
我需要选择生产任务单是否有异常，需要三个选项：全部、无异常、有异常  
放三个RadioButton到新建的输入区中，分别命名为rbExceptionNone，rbExceptionNo，rbExceptionYes，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-82.png)  
然后我们给三个RadioButton的ComponentTypeUseKind设置为ctukName，ComponentTypeName设置为Color，上下边距设置为10，再给它设置一个公共素材为：  
dmEasyServiceCommonMaterial.rbRedRadioButtonMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-83.png)  





功能按钮Button
-----------------
设置好条件之后，我们需要点击确定按钮，执行查询，因此需要放一个Button，命名为btnOK，标题设置为确定，Align也设置为Top，上，左，右边距各设置为20，  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-84.png)    
我们给这个按钮选择一个公共素材：  
dmEasyServiceCommonMaterial.btnSkinThemeColorMaterial，表示它是一个主题色的按钮  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-85.png)  
我们来看一下这个控件素材中是如何使用主题色的：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-86.png)  
是将素材的BackColor.FillColor.UseThemeColor设置为ctThemeColor，表示使用主题色。  
或者有些人喜欢把按钮放在导航栏的右上角，也是可以的。  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-87.png)  
我们给它选择一个公共素材：  
dmEasyServiceCommonMaterial.btnTransparentWhiteCaptionButtonMaterial，它是一个透明背景、标题字体是白色的按钮，效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-88.png)  






公共素材的使用我就简单介绍到这里了，在EasyServiceCommonMaterialDataMoudle这个公共素材模块中还包含了很多其他控件的其他素材，提高了界面开发的效率，大家在开发项目的时候，也可以尽量把公共的素材放在一个DataModule里面，共享给其他页面或者其他项目使用。


