---
title: Use images from ImageList
order: 4
nav:
  title: Image
  path: /components
  order: 5
---

Put a SkinImageList on the form, named imglistFileExt,  
Indicates the icon used to store the file type,  
Double-click ImageList on the form, and the image list editor will pop up.  
Click Add to add the picture to the list,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image001.png)


Then put an Image on the form, named imgFileExtByImageIndex  
Expand Image.Properties.Picture,  
The default ImageIndex is -1, SkinImageList is empty,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image003.png)


Next we set SkinImageList to imglistFileExt,  
Set ImageIndex to 0,  
Indicates that the first picture in imglistFileExt is displayed  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image005.png)


As shown below:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image007.png)


Results as shown below:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image009.png)


If you want to display the second image in ImageList,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image011.png)


Just set ImageIndex to 1:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image013.png)


Results as shown below:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image015.png)



