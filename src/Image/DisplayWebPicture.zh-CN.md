---
title: 显示网络图片
order: 2
nav:
  title: 图片控件Image
  path: /components
  order: 5
---

Image控件可以显示网络上的图片,  
下面以显示我博客上头像来举例，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B6%20%E4%BD%BF%E7%94%A8%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87).files/image001.png)


头像链接为: http://avatar.csdn.net/7/9/6/1_delphiteacher.jpg,  
 
实现步骤如下:  
设置Image控件的Properties.Picture.Url  
为http://avatar.csdn.net/7/9/6/1_delphiteacher.jpg,  
如图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B6%20%E4%BD%BF%E7%94%A8%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87).files/image003.png)


不一会儿,头像就显示出来了，   
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.6.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B6%20%E4%BD%BF%E7%94%A8%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87).files/image005.png)


接下来讲一下OrangeUI显示网络图片的实现机制:  
当给Image控件设置Url时，  
DownloadPictureManager(一个图片下载管理组件)在后台会启动线程来下载网络图片，  
图片会被保存在程序目录下的OrangeUIDownloadPictures文件夹中  
（注:OrangeUI 1.66以下需要在工程中需要添加uIdHttpControl.pas或uNativeHttpControl.pas）  


