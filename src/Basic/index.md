---
nav:
  title: Basics
  path: /components
  order: 0
group:
  order: 10
---


When you want to drag an OrangeUI button, you will find that it is a bare control. For example, the title font is not centered, and the background color is not. To achieve the effect you want, you have to set it step by step, face to face For the many drawing parameters, you will sigh, this cock control is really fucking difficult to use.  
Here, I can only say to everyone: OrangeUI users, everyone has worked hard.  
How to change this status quo, then I will introduce our protagonist today, called the public material module. It is actually an alternative form of Delphi, DataMoudule, on which UI controls cannot be placed, but Delphi components can be placed. For example, we often place database connections, datasets, etc. on it for common use by business forms. Then the material component of the OrangeUI control is also a component, so you can put the designed material on it and use it for all pages. When I develop a project, I also put the same style of material on it. It is the EasyServiceCommonMaterialDataMoudle in the control package, which is located in the OrangeProjectCommon directory of the control package. Let's open it up and take a look:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-56.png)



To use it,

The first step, you need to add it to your project:
-----------------
Right-click your project in the project view and select 'Add...'  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-57.png)  
Find the OrangeProjectCommon directory,  
Select 'EasyServiceCommonMaterialDataMoudle.pas' and click 'Open'   
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-58.png)  
The public material module is added to your project  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-59.png)  



Use public materials in the page
-----------------
For example, I want to make a report query condition input page ReportFilterConditionFrame,  
use public material units  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-60.png)  



Determine the APP theme color
-----------------
Put a TSkinTheme component in the main form of the project, only one such component needs to be placed in the entire project  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-61.png)  
NavigationBarColor, the background color of the navigation bar  
NavigationBarFontColor, the font color of the navigation bar  
SkinThemeColor, theme color  
SkinThemeColor1, theme color 1  
SkinThemeColor2, theme color 2  
SkinThemeColor3, theme color 3  
So how to use this theme color in the material? For example, for the background color in the material, we can set BackColor.FillColor.UseThemeColor to ctThemeColor.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-62.png)  



Navigation bar public material
-----------------
Drag a Panel to ReportFilterConditionFrame, set its Align to Top, its height to 50, Properties.IsToolBar to True, its Name to pnlToolbar, and Caption to "Condition Settings"  
At this time, it has not yet set the material, it looks like this:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-63.png)  
Next, we set the public material for it, and click the arrow to the right of its RefMaterial property  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-64.png)  
It will list all the material components belonging to the control in the public material module  
We choose: dmEasyServiceCommonMaterial.pnlToolBarMaterial, its appearance is set, and we do not need to set the background color, title position, etc. separately.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-65.png)  





The public material of the return button
-----------------
We also need a return button, which is already included in the public material module  
We put a button on the navigation bar, set its Name to btnReturn, the width to 80, and the Align to Left  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-66.png)  
Set its RefMaterial to dmEasyServiceCommonMaterial.bdmReturnButton  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-67.png)  
This public material has already set a return arrow icon, so you don't need to set the icon.  



Public material of scroll box
-----------------
Put a ScrollBox, set the Name to sbScrollBox, set its Align to Client,  
ScrollBox also has a public material:  
dmEasyServiceCommonMaterial.sbDefaultColorBackgroundScrollBoxMaterial  
It is a light gray background  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-68.png)  
Put another ScrollBoxContent in the ScrollBox, set the Name to sbcContent, and set its Align to Top  



Edit
-----------------
We need to enter keywords,
Let's put a Panel in sbcContent first, use it as the background and title of the input item, name the Panel pnlKeyword, set the height to 45, set the Align to Top, and set the Caption to the keyword,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-69.png)  
Set its RefMaterial to:  
dmEasyServiceCommonMaterial.pnlInputBlackCaptionPanelMaterial, this material has a white background, the title is horizontally centered on the left and vertically, and the font size is 14. The effect is as shown below:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-70.png)  
Put an Edit in pnlKeyword, set its Name to edtKeyword, its left margin Margins.Left to 80, its Align to Client, and Properties.HelpText to "Please enter a keyword",  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-71.png)  
Edit also has public material, we set its RefMaterial to:  
dmEasyServiceCommonMaterial.edtInputEditHasHelpTextMaterial, the effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-72.png)  
This public material has a transparent background, and the prompt text font is gray and vertically centered.  



ComboBox
-----------------
First put an input area Panel, named pnlDoorStructure, to put the door structure drop-down selection box  
Put a ComboBox, name it cmbDoorStructure, set its left margin Margins.Left to 80, and set Items, ItemIndex is set to 0, Properties.HelpText is set to "Please select the door structure", the current effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-73.png)  
As you can see, the title position is inappropriate, and there is no drop-down arrow.  
Then we need to choose a public material for it:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-74.png)  



Options button
-----------------
Sometimes, we need to select an option by clicking a button and jumping to a special page. This button needs to have a jump prompt icon and prompt text.  
For example, if we want to select a customer, we first put an input area Panel-pnlSelectCompany, and then put a button btnSelectCompany in it, or similar to the above operation, we set the button's left margin Margins.  Left to 80, and Align to Client, Properties.HelpText is set to "Please select a client"  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-75.png)  
Then we choose a public material for it:  
dmEasyServiceCommonMaterial.btnSelectButtonMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-76.png)  





Choose a time frame
-----------------
We first put an input area Panel-pnlSelectDateArea, and then put a TSkinSelectDateAreaButton control in it, named btnSelectDateArea, this control has two properties, StartDate and EndDate, used to store the start date and end date, and then we put it The material settings are:  
dmEasyServiceCommonMaterial.btnSelectButtonMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-77.png)  
Next, we need to write its click event, so that clicking the button can jump to the page SelectFilterFrame that selects the time range, which is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-78.png)  
OK, let's start writing the click event:  
procedure TFrameReportFilterCondition.btnSelectDateAreaClick(Sender: TObject);  
begin  
//select date range  
//search  
HideFrame;  
ShowFrame(TFrame(GlobalSelectFilterFrame),TFrameSelectFilter,DoReturnFrameFromSelectDateArea);  
//Date of completion  
GlobalSelectFilterFrame.Load(  
btnSelectDateArea.StartDate,  
btnSelectDateArea.EndDate,  
''  
);  
GlobalSelectFilterFrame.pnlToolBar.Caption:='Select'+Self.pnlDateArea.Caption;  
end;  

When jumping to the page, you need to pass in a method to process the returned event DoReturnFrameFromSelectDateArea, which is used to assign the selected date range to the button. The method code is as follows:  
procedure TFrameReportFilterCondition.DoReturnFrameFromSelectDateArea(AFromFrame: TFrame);  
begin  
btnSelectDateArea.StartDate:=TFrameSelectFilter(AFromFrame).FStartDate;  
btnSelectDateArea.EndDate:=TFrameSelectFilter(AFromFrame).FEndDate;  
end;  



Checkbox
-----------------
If we want to check whether the document has been reviewed, we need to put a CheckBox in the input area, name it chkIsAudit, set its ComponentTypeUseKind to ctukName, and ComponentTypeName to Color,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-79.png)  
Then we also choose a public material for it:  
dmEasyServiceCommonMaterial.chkDefaultRectCheckBoxMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-80.png)  
Let's see what it looks like after it is checked:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-81.png)  
We can see that its background color is our theme color.  



RadioButton
-----------------
I need to choose whether there is an abnormality in the production order, and I need three options: all, no abnormality, and abnormality  
Put three RadioButtons in the new input area, named rbExceptionNone, rbExceptionNo, rbExceptionYes,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-82.png)  
Then we set the ComponentTypeUseKind of the three RadioButtons to ctukName, the ComponentTypeName to Color, the top and bottom margins to 10, and then set a common material for it as:  
dmEasyServiceCommonMaterial.rbRedRadioButtonMaterial  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-83.png)  





Function buttons
-----------------
After setting the conditions, we need to click the OK button to execute the query, so we need to put a Button named btnOK, the title is set to OK, the Align is also set to Top, and the top, left and right margins are set to 20,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-84.png)  
We select a public material for this button:  
dmEasyServiceCommonMaterial.btnSkinThemeColorMaterial, indicating that it is a button with a theme color  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-85.png)  
Let's take a look at how the theme color is used in this control material:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-86.png)  
is to set the BackColor.FillColor.UseThemeColor of the material to ctThemeColor, indicating that the theme color is used.  
Or some people like to put the button in the upper right corner of the navigation bar, it is also ok.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-87.png)  
We choose a public material for it:  
dmEasyServiceCommonMaterial.btnTransparentWhiteCaptionButtonMaterial, which is a button with a transparent background and a white title font, the effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-88.png)  


I will briefly introduce the use of public materials here. The common material module EasyServiceCommonMaterialDataMoudle also contains many other materials for other controls, which improves the efficiency of interface development. When developing projects, you can try to use public materials as much as possible. Put it in a DataModule and share it with other pages or other projects.