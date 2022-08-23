---
title: 在一个列表项中显示多张图片
order: 12
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

默认ListBoxItem只包含一个图片，也就是它的Icon属性，   
列表项设计面板ItemDesignerPanel上也只有一个ItemIconBindingControl来绑定Image,  
如果遇到一个列表项上需要显示多个图片，  
就需要用到ListBox的动态绑定功能了,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image019.png)


先讲解一下ListBox和ItemDesignerPanel之前的联系，  
OrangeUI中的ListBox是利用ItemDesignerPanel上面的所有控件来绘制的，  
虽然在ListBox中可以显示多个列表项，  
但是每个列表项是不会创建属于自己的ItemDesignerPanel的，  
那样做不仅会消耗大量的内存，也会使程序卡成一逼。  
因此ListBox使用公共的ItemDesignerPanel来绘制每个列表项。  
 
再来讲解一下OnPrepareDrawItem这个事件，  
在ListBox绘制一个列表项之前，先会调用OnPrepareDrawItem，  
把这个列表项传给OnPrepareDrawItem事件，  
用户可以在OnPrepareDrawItem事件中根据传入的列表项进行完全自定义的处理，  
处理完之后，再使用ItemDesignerPanel来绘制这个列表项，  
 
 
我先讲解一下常用的一种解决方式，  
先创建一个窗体，上面个一个ListBox,  
双击ListBox,预先创建好两个空白的列表项用于预览效果，  
并且不需要给列表项设置任何属性，  
ListBox的ItemHeight设置为100,  
 
再在ListBox上放一个ItemDesignerPanel,  
然后ItemDesignerPanel上放两个Image和两个Label,  
Image命名为imgPic1和imgPic2，用于显示两张商品图片，  
设置Image.SelfOwnMaterial.DrawPictureParam.IsAutoFit为True,  
并且先给两个Image设置好图片便于预览效果，  
   
Label命名为lblCaption1和lblCaption2,用于显示两个商品名称，  
设置Label.SelfOwnMaterial.DrawCaptionParam.FontHorzAlign为Center,  
再给两个Label设置好标题便于预览效果，  
 
不需要给ItemDesignerPanel绑定任何控件，  
效果如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image001.png)


 
定义一个商品对的类,类成员有两个商品名称，两张商品图片，代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image003.png)


````delphi | pure
type
  //商品对
  TGoodsPair=class(TObject)
  public
    //商品1名称
    Caption1:String;
    //商品2名称
    Caption2:String;
    //商品1图片
    Pic1:TDrawPicture;
    //商品2图片
    Pic2:TDrawPicture;
  public
    constructor Create;
    destructor Destroy;override;
  end;
{ TGoodsPair }
 
constructor TGoodsPair.Create;
begin
  Pic1:=TDrawPicture.Create;
  Pic2:=TDrawPicture.Create;
end;
 
destructor TGoodsPair.Destroy;
begin
  FreeAndNil(Pic1);
  FreeAndNil(Pic2);
  inherited;
end;
```` 
 
接下来，我们放个“点击加载”按钮，用于点击的时候加载列表项:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image007.png)


代码如下:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image009.png)


````delphi | pure
procedure TFrameListBox_BindingMultiPic.btnLoadClick(Sender: TObject);
var
  I: Integer;
  APicServerUrl:String;
  AGoodsPair:TGoodsPair;
  AListBoxItem:TSkinListBoxItem;
begin
  //加载
  Self.lbMultiPic.Prop.Items.BeginUpdate;
  try
    //释放之前的DataObject
    for I := 0 to Self.lbMultiPic.Prop.Items.Count-1 do
    begin
      Self.lbMultiPic.Prop.Items[I].DataObject.Free;
    end;
    //清空列表项
    Self.lbMultiPic.Prop.Items.Clear(True);
    
    //图片服务器链接地址
    APicServerUrl:='http://www.orangeui.cn/download/testdownloadpicturemanager/mobileposthumbpic/';
    
    
    //添加列表项
    AGoodsPair:=TGoodsPair.Create;
    AGoodsPair.Caption1:='阿尔代雪赤霞珠银标';
    AGoodsPair.Pic1.Url:=APicServerUrl+'阿尔代雪赤霞珠银标.jpg';
    AGoodsPair.Caption2:='阿尔岱雪丹娜斯';
    AGoodsPair.Pic2.Url:=APicServerUrl+'阿尔岱雪丹娜斯.jpg';
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.DataObject:=AGoodsPair;
    
    
    //添加列表项
    AGoodsPair:=TGoodsPair.Create;
    AGoodsPair.Caption1:='安溪铁观音';
    AGoodsPair.Pic1.Url:=APicServerUrl+'安溪铁观音.jpg';
    AGoodsPair.Caption2:='西湖龙井';
    AGoodsPair.Pic2.Url:=APicServerUrl+'西湖龙井.jpg';
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.DataObject:=AGoodsPair;
    
    //添加列表项
    AGoodsPair:=TGoodsPair.Create;
    AGoodsPair.Caption1:='安溪铁观音';
    AGoodsPair.Pic1.Url:=APicServerUrl+'安溪铁观音.jpg';
    AGoodsPair.Caption2:='西湖龙井';
    AGoodsPair.Pic2.Url:=APicServerUrl+'西湖龙井.jpg';
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.DataObject:=AGoodsPair;
    
    //添加列表项
    AGoodsPair:=TGoodsPair.Create;
    AGoodsPair.Caption1:='人鱼恋带鱼系列';
    AGoodsPair.Pic1.Url:=APicServerUrl+'人鱼恋带鱼系列.jpg';
    AGoodsPair.Caption2:='食品套餐128元';
    AGoodsPair.Pic2.Url:=APicServerUrl+'食品套餐128元.jpg';
    AListBoxItem:=Self.lbMultiPic.Prop.Items.Add;
    AListBoxItem.DataObject:=AGoodsPair;
    
  
  finally
    Self.lbMultiPic.Prop.Items.EndUpdate();
  end;
  
end;
````
 
 
上面代码的主要思路就是创建一个GoodsPair的对象，  
给对象设置好商品名称和商品图片链接，  
然后把对象放在列表项的DataObject中。  
 
 
 
接下来我们运行看一下示例,点击加载按钮:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image013.png)


如上图所示，虽然列表项加载出来了，  
但是列表项中的图片和标题没有显示对应的内容，  
那是因为我们没有进行绑定，  
所以ItemDesignerPanel上的Image和Label不知道显示什么内容，  
动态绑定是在ListBox.OnPrepareDrawItem事件中处理，  
 
重要的事件再声明一遍:  
先讲解一下ListBox和ItemDesignerPanel之前的联系，  
OrangeUI中的ListBox是利用ItemDesignerPanel上面的所有控件来绘制的，  
虽然在ListBox中可以显示多个列表项，  
但是每个列表项是不会创建属于自己的ItemDesignerPanel的，  
那样做不仅会消耗大量的内存，也会使程序卡成一逼。  
因此ListBox使用公共的ItemDesignerPanel来绘制每个列表项。  
 
再来讲解一下OnPrepareDrawItem这个事件，  
在ListBox绘制一个列表项之前，先会调用OnPrepareDrawItem，  
把这个列表项传给OnPrepareDrawItem事件，  
用户可以在OnPrepareDrawItem事件中根据传入的列表项进行完全自定义的处理，  
处理完之后，再使用ItemDesignerPanel来绘制这个列表项，  
 
好了，接下来我们完成动态绑定:  
双击ListBox.OnPrepareDrawItem事件，  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image015.png)


参数Item:TSkinItem就是绘时前所传入的列表项，  
需要在单元中引用如下几个单元:  
uDrawCanvas,  
uSkinItems,  
uDrawPicture,  
uSkinListBoxType,  
 
再写上如下代码:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image017.png)

````delphi | pure
procedure TFrameListBox_BindingMultiPic.lbMultiPicPrepareDrawItem(
Sender: TObject; Canvas: TDrawCanvas;
ItemDesignerPanel: TSkinFMXItemDesignerPanel; Item: TSkinItem;
ItemRect: TRect);
var
  AGoodsPair:TGoodsPair;
begin
  //取出设置在Item.DataObject中的GoodsPair对象
  AGoodsPair:=TGoodsPair(Item.DataObject);
  
  //把GoodsPair对象中的数据赋给ItemDesignerPanel上面的控件
  Self.lblCaption1.Caption:=AGoodsPair.Caption1;
  Self.imgPic1.Prop.Picture.RefDrawPicture:=AGoodsPair.Pic1;
  Self.imgPic1.Prop.Picture.PictureDrawType:=TPictureDrawType.pdtRefDrawPicture;
  
  Self.lblCaption2.Caption:=AGoodsPair.Caption2;
  Self.imgPic2.Prop.Picture.RefDrawPicture:=AGoodsPair.Pic2;
  Self.imgPic2.Prop.Picture.PictureDrawType:=TPictureDrawType.pdtRefDrawPicture;
  
end;
````
 
 
接下来再运行看一下示例:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image019.png)


看，每个列表项都显示对应的商品内容了  
 

