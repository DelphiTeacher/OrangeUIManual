---
title: 文件的打包布署
order: 3
nav:
  title: App开发教程
  path: /delphiapp
  order: 3
group:
  title: 安卓App开发
  order: 1
---

**安装文件的布署**  
比如你想将打包一个空的 sqlite 数据库文件 database.db 到 apk 中，  
那么打开 Project->Deployment，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-16.png)

工程的布署管理：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-17.png)

将上面平台选择为”All configurations - Android 32-bit platform”，  
再点击左上的添加文件按钮，会弹出文件选择对话框，选择好文件，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-18.png)

注意红框中的“Remote Path”，默认是布署到“.\”目录的，代表安装包的根目录，  
在安卓平台，你要将它布署到“assets\internal\”中，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-19.png)

这样应用启动的时候，它会被复制到应用的文档目录，  
你就能通过 TPath.GetDocumentsPath+PathDelim+’database.db’访问到它啦。

**System.StartUpCopy**  
布署到 assets\internal\的文件，都是通过一个叫 System.StartUpCopy 的单元将它们从安装包中复制到文档目录的。  
大家如果新建一个 FireMonkey 的工程，  
查看工程文件的代码，第一个就是它了：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-20.png)

而这个单元初始的时候就会调用 CopyStartUpFiles 来将布署到 assets\internal\的文件复制到应用的文档目录。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-21.png)

**布署安卓动态链接库 so 文件**  
Windows 下面的程序要调用一个 DLL，则直接将它们放到 EXE 根目录即可，  
安卓下则不同，  
首先，安卓下面的动态链接库后缀为.so，  
其次，都需要布署到应用的动态链接库目录，  
32 位 app 下是 library\lib\armeabi-v7a\，  
64 位 app 下是 library\lib\arm64-v8a\，  
比如，从 Delphi 11 开始，如果要使用 sqlite，需要自已布署 libsqlite.so，  
或者说你用 indy 需要访问 SSL 的网站，则需要布署 libssl.so 等，

如下图：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-21.png)

此外，我会将这一系列的文章都放到 OrangeUI 的官网，方便大家需要的时候能找到！  
http://www.orangeui.cn

![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-22.png)
