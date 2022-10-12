---
title: Use item style frame
order: 17
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---

Disadvantages of placing the design panel on the ListBox - cannot be reused:  
With the old method, a design panel must be placed on top of each ListBox, such as a page in the example OrangeUISampleOfTutorial ListViewFrame_TestComplexLayout.pas:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image.png)

The design panel in the red frame is a commonly used style and is used as a menu item.  
If I want to use this style on another page, I have to copy this design panel in the old way,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-1.png)

It is very complicated to use, and when there are multiple design panels on the interface, the design interface will appear very cluttered. For example this page:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-2.png)

Therefore, in order to solve this problem, ListBox has added a property that specifies the style of the list item,  
For example, DefaultItemStyle: String, used to specify the style of the list item whose ItemType is sitDefault,  
HeaderItemStyle: String, used to specify the style of the list item when the ItemType is ditHeader  
and many more  
The use steps are as follows:

First, you need to install the OrangeUIStyles package in the control package.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-3.png)

A list item style is actually a Frame containing a design panel. In this package, there are designed common list item styles Frame, they are all in the OrangeUIStyles directory,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-4.png)

Now I describe how to specify the default list item style for ListBox:

First find the list item style Frame you need in the OrangeUIStyles package

The meaning of the root file name, such as ListItemStyleFrame_IconTopCenter_CaptionBottomCenterBlack.pas, indicates that this style has the icon at the top, the title at the bottom, and the font is black.

Let's double-click to open it to see:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-5.png)

There is only one design panel in this Frame, the one on the right is the display effect in the default state, and the one on the lower right is the display effect in the selected state.

Let's take a look at the initialization part of this Frame code, which is a style registration code:

RegisterListItemStyle('IconTopCenter_CaptionBottomCenterBlack',TFrameListItemStyle_IconTopCenter_CaptionBottomCenterBlack);

Indicates that the name of this style is: IconTopCenter_CaptionBottomCenterBlack

Next, we apply this style to the ListBox. After setting the DefaultItemStyle of the ListView to IconTopCenter_CaptionBottomCenterBlack, the top of the list is displayed in this style.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-6.png)

This style needs to be referenced in this page  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-7.png)

If we want to use this style on another page, it's very simple, just use the same settings  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-8.png)

Use the special handling of the list item style - the click event of the child control:

ListBox has added the OnClickItemDesignerPanelChild event,

OnClickItemDesignerPanelChild(Sender: TObject;AItem: TBaseSkinItem; AItemDesignerPanel: TSkinFMXItemDesignerPanel;AChild: TFmxObject);

It will pass in the currently clicked list item AItem and the clicked child control AChild. We can use AChild.Name to determine which control is clicked, and then do the corresponding operations.

Customization of list item style Frame

For example there is a page where I want the title font in the list item style to be bigger.

There are three methods:

There is an OnNewListItemStyleFrameCacheInit event in the ListBox for the initial list item style Frame

ListBox has an OnPrepareDrawItem event that is called when the list item is drawn

ListBox also has a DefaultItemStyleConfig property, which is used to configure the style of list items. For example, we enter code in it:

lblItemCaption.Material.DrawCaptionParam.FontSize:=16;  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-9.png)

The displayed title font in the list item becomes larger.

How to add a list item style Frame:

Create a new Frame in the OrangeUIStyles package

Add a settings panel control to the Frame,  
Frame needs to implement the IFrameBaseListItemStyle interface and return the design panel in GetItemDesignerPanel.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-10.png)

Then add the following code to the initialization section and finalization of the Frame unit:

initialization  
RegisterListItemStyle(style name, current Frame class);  
finalization  
UnRegisterListItemStyle style);  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-11.png)

Reinstall the OrangeUIStyles package.
