---
title: 文件路径
order: 2
nav:
  title: App开发教程
  path: /delphiapp
  order: 3
group:
  title: 安卓App开发
  order: 1
---

应用的私有存储空间  
Android 下，你的应用是被运行在一个沙盒中的，  
默认的权限只能存取自己应用的文档目录，  
不能存取外部的存储空间的。  
文档目录是应用的私有存储空间，  
用于存储私密的数据，  
比如配置文件、当前所登录用户的个人信息、聊天数据等，  
应用卸载后会随之删除，  
当然，其他应用也不能访问你应用的私有存储空间。

Delphi 跨平台路径操作 TPath  
Delphi 有一个 System.IOUtils 单元，  
里面有一个 TPath，是一个跨平台的路径操作结构体，  
里面有获取常用路径的静态方法（不需要创建直接可以调用的方法）。

因为通常情况下，我们开发的应用会先在 Windows 平台下进行测试，  
所以先来看一下这些方法在 Windows 平台下都指向哪些目录：  
GetHomePath:  
C:\Users\ggggcexx\AppData\Roaming

GetDocumentsPath:  
C:\Users\ggggcexx\Documents

GetSharedDocumentsPath:  
C:\Users\Public\Documents

GetLibraryPath:  
C:\MyFiles\OrangeUIProduct\项目名称\APP\Win32\Debug\

GetCachePath:  
C:\Users\ggggcexx\AppData\Local

GetPublicPath:  
C:\ProgramData

GetPicturesPath:  
C:\Users\ggggcexx\Pictures

GetSharedPicturesPath:  
C:\Users\Public\Pictures

GetCameraPath:  
C:\Users\ggggcexx\Pictures

GetSharedCameraPath:  
C:\Users\Public\Pictures

GetDownloadsPath:  
C:\Users\ggggcexx\Downloads

GetSharedDownloadsPath:  
C:\Users\Public\Downloads

再来看下安卓平台下面都指定哪些目录，  
GetHomePath:  
/data/user/0/com.embarcadero.FirstAidExpert_FMX_D11/files

GetDocumentsPath:  
/data/user/0/com.embarcadero.FirstAidExpert_FMX_D11/files

GetSharedDocumentsPath:  
/storage/emulated/0/Documents

GetLibraryPath:  
/data/app/com.embarcadero.FirstAidExpert_FMX_D11-wlgPkLmXf6nZlWnaSyFsnw==/lib/arm

GetCachePath:  
/data/user/0/com.embarcadero.FirstAidExpert_FMX_D11/cache

GetPublicPath:  
/storage/emulated/0/Android/data/com.embarcadero.FirstAidExpert_FMX_D11/files

GetPicturesPath:  
/storage/emulated/0/Android/data/com.embarcadero.FirstAidExpert_FMX_D11/files/Pictures

GetSharedPicturesPath:  
/storage/emulated/0/Pictures

GetCameraPath:  
/storage/emulated/0/Android/data/com.embarcadero.FirstAidExpert_FMX_D11/files/DCIM

GetSharedCameraPath:  
/storage/emulated/0/DCIM

GetDownloadsPath:  
/storage/emulated/0/Android/data/com.embarcadero.FirstAidExpert_FMX_D11/files/Download

GetSharedDownloadsPath:  
/storage/emulated/0/Download

其中，  
GetDocumentsPath 就是应用的文档目录（私有存储空间），  
如果你要保存文件，一般将文件保存在文档目录。  
在 Android 下，GetHomePath 和 GetDocumentsPath 都指向同一个目录

GetCachePath 是缓存目录，可以保存比如临时下载的网络图片，  
手机上的清除应用缓存就是清理的这个目录。

还有一些带 Shared 的目录，  
GetSharedDocumentsPath、GetSharedPicturesPath、GetSharedCameraPath、GetSharedDownloadsPath，  
这些则是可以与其它应用共享的目录，都保存在外部存储空间中，  
其他应用可以访问到它们。

路径分隔符  
需要注意的是，安卓系统下面路径分隔符和 Windows 下不一样，  
Windows 下是\，Anroid 下面是/，  
那么我们平时写代码要拼路径的时候，该怎么办呢？  
Delphi 已经帮我们考虑好了，  
大家统一用常量 PathDelim 即可。  
比如你要将当前登录用户的账号密码保存到 Config.ini 中，  
那么你就可以通过 TPath.GetDocumentsPath+PathDelim+’Config.ini’来访问它。
