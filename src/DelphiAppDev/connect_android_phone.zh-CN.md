---
title: 连接安卓手机
order: 1
nav:
  title: App开发教程
  path: /delphiapp
  order: 3
group:
  title: 安卓App开发
  order: 1
---

最近在与个别 D 友交流的过程中发现，他们开发安卓应用的时候，并不是通过 Delphi 直接将 app 运行到手机上的，而是先生成 Debug 模式下的 apk，然后通过手机 QQ 或者微信发到手机上，再安装运行，比较复杂。

我们 Delphi 是可以直接将工程运行到手机的。

首先，安卓手机需要开启开发者模式，  
拿我的红米手机来说，  
启用 USB 调试的步骤是这样的：  
点击我的设备：

![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-30-24-332_com-android-se.jpeg)

全部参数：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-30-32-569_com-android-se.jpeg)

”MIUI 版本”这里连续点击个五下：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-32-35-389_com-android-se.jpeg)

它会提示你再点多少下就能进入开发者模式。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-32-38-588_com-android-se.jpeg)

这样开发者模式就打开了，  
每个品牌的手机大致都差不多，有些是点击内核版本号才会出来。

再启用 USB 调试  
打开之后，在手机的更多设置那里就会多出来一个“开发者选项”的菜单，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-32-56-560_com-android-se.jpeg)

点击 USB 调试右边的开关，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-33-10-035_com-android-se.jpeg)

会弹出来一个确认框  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-33-22-933_com-miui-secur.jpeg)  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-06-20-33-33-709_com-android-se.jpeg)

USB 调试就打开了

然后，最关键的一步，需要手机允许该台电脑进行调试  
第一次与电脑连接调试，会弹出一个允许本电脑调试的确认框。  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-07-09-03-50-264_com-android-sy.jpeg)

如果还没有弹出来，  
尝试多次插拔数据线，  
或者换个 USB 口试一下，  
再不行，重启手机和电脑试一下。

最后，在你工程的 Target Platforms->Android 32->Target 那里右键刷新一下，就会出来你的手机，  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image.png)  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-1.png)  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-2.png)

按 F9，  
手机第一次安装你的 APP 时会弹出确认框：  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/screenshot_2022-12-07-09-02-51-051_com-miui-secur.jpeg)

点继续安装，就能将你的程序直接跑在安卓手机上啦！

当然如果你没有点继续安装，则会弹出一个报错的  
![](http://www.orangeui.cn:8080/wordpress/wp-content/uploads/2022/12/word-image-3.png)
