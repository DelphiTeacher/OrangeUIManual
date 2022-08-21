---
title: 使用ImageList中的图片
order: 4
nav:
  title: 图片控件Image
  path: /components
  order: 5
---

在窗体上放一个SkinImageList,取名为imglistFileExt,  
表示用来存放表示文件类型的图标，  
在窗体上双击ImageList，就会弹出图片列表编辑器，  
点击添加，把图片添加到列表中去，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image001.png)


再在窗体上放一个Image,取名为imgFileExtByImageIndex  
展开Image.Properties.Picture,  
默认ImageIndex为-1,SkinImageList为空，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image003.png)


接下来我们设置SkinImageList为imglistFileExt,  
设置ImageIndex为0,  
表示显示imglistFileExt中的第1张图片  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image005.png)


如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image007.png)


效果如下图所示：  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image009.png)


如果要显示ImageList中的第二张图片，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image011.png)


只需要把ImageIndex设置为1即可:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image013.png)


效果如下图所示:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/5.7.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%9B%BE%E7%89%87%E6%8E%A7%E4%BB%B6Image)(%E7%A4%BA%E4%BE%8B7%20%E6%98%BE%E7%A4%BAImageList%E4%B8%AD%E7%9A%84%E5%9B%BE%E7%89%87).files/image015.png)



