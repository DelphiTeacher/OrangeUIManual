---
title: Display web image
order: 2
nav:
  title: Image
  path: /components
  order: 5
---

ImageControl can display pictures from internet,  
Take my blog avatar as an example,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B6%20%E4%BD%BF%E7%94%A8%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87).files/image001.png)


This is the link of avatar: http://avatar.csdn.net/7/9/6/1_delphiteacher.jpg  
These are steps to complete it:  
Set Properties.Picture.Url   
As http://avatar.csdn.net/7/9/6/1_delphiteacher.jpg,  
Like this:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B6%20%E4%BD%BF%E7%94%A8%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87).files/image003.png)


Just a moment, the avatar is displayed,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B6%20%E4%BD%BF%E7%94%A8%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87).files/image005.png)


This is the mechanism of displaying internet picture in OrangeUI,  
When we set url for ImageControl,  
DownloadPictureManager will start a thread to download pictures from internet in background,  
The pictures will be stored in folder OrangeUIDownloadPictures of program directory,  
(ps: we need to add uIdHttpControl.pas or uNativeHttpControl.pas in project)  


