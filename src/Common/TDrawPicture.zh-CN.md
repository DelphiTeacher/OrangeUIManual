---
nav:
  title: 控件公共属性
  path: /components
  order: 2
group:
  order: 26
---

## 图片TDrawPicture
OrangeUI下使用的图片类为TDrawPicture，  
 
TDrawPicture的属性有:  
 
//所绑定的SkinImageList控件  
SkinImageList:  
//所绘制的图片在SkinImagelist中的下标  
ImageIndex:Integer  
//所绘制的图片在SkinImagelist中的名称(比使用下标更具有可读性)  
ImageName:String  
//图片绘制的类型，绘制自身，绘制子图片，绘制图片列表  
PictureDrawType:TPictureDrawType  
pdtAuto:          自动判断  
pdtPicture:       绘制时使用自身设置的图片  
pdtImageList:     绘制时使用图片列表中由ImageIndex指定的图片来绘制  
pdtImageName:     绘制时使用图片列表中由ImageName指定的图片列表  
pdtReference:     绘制时使用图片引用RefPicture  
pdtFile:          绘制时使用文件  
pdtResource:      绘制时使用资源图片  
pdtUrl:           绘制时使用链接  
//图片文件路径  
FileName:String  
//图片资源名称  
ResourceName:String  
//图片链接  
Url:String  

