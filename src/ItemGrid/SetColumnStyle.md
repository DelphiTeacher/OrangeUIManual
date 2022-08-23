---
title: Custom column style
order: 3
nav:
  title: ItemGrid
  path: /components
  order: 11
group:
  order: 110
---

Bind the design panel to the column  

Add a column titled "Actions",  

Drag a design panel on the table and name it idpOperation  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-81.png)

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-82.png)






Put a button in the design panel idpOperation named btnDelRow  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-83.png)





The entire column will be displayed as the design panel looks like  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-84.png)





 
Customize the display of each row of design panels, such as specifying that a row of buttons is unavailable  

Double-click the ItemGrid.OnPrepareDrawItem event,  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-85.png)





Make the button of the item whose Caption is "Zhang San" available, and other items unavailable  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-86.png)





The operation effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-87.png)




 
 
 
Add events to controls on the design panel, such as delete the row  

In order for the button to respond to the click event, HitTest needs to be set to True, otherwise it will not respond  

Double-click the OnClick event of the button btnDelRow and write the following code:  


// delete the row  
Self.SkinFMXItemGrid1.Prop.Items.Remove(SkinFMXItemGrid1.Prop.InteractiveItem);  

SkinFMXItemGrid1.Prop.InteractiveItem represents the row where the button is located.  

After clicking, the row is deleted  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2020/02/word-image-88.png)




