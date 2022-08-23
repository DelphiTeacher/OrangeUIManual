---
title: Show multiple pictures in item
order: 12
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---


The default ListBoxItem contains only one picture, which is its Icon property,  
There is only one ItemIconBindingControl on the list item design panel ItemDesignerPanel to bind Image,  
If you encounter multiple images that need to be displayed on a list item,  
You need to use the dynamic binding function of ListBox,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image019.png)


First explain the connection between ListBox and ItemDesignerPanel,  
The ListBox in OrangeUI is drawn using all the controls on the ItemDesignerPanel.  
Although multiple list items can be displayed in a ListBox,  
But each list item will not create its own ItemDesignerPanel,  
Doing so will not only consume a lot of memory, but also make the program freeze.  
So ListBox uses the public ItemDesignerPanel to draw each list item.  
 
Let's talk about the OnPrepareDrawItem event,  
Before the ListBox draws a list item, OnPrepareDrawItem is called,  
Pass this list item to the OnPrepareDrawItem event,  
Users can fully customize the processing based on the incoming list item in the OnPrepareDrawItem event,  
After processing, use ItemDesignerPanel to draw the list item,  
 
 
Let me explain a common solution first.  
First create a form with a ListBox on it,  
Double-click the ListBox to pre-create two blank list items for previewing the effect.  
And you don't need to set any properties to the list items,  
The ItemHeight of the ListBox is set to 100,  
 
Put another ItemDesignerPanel on the ListBox,  
Then put two Images and two Labels on the ItemDesignerPanel,  
Image named imgPic1 and imgPic2, used to display two product pictures,  
Set Image.SelfOwnMaterial.DrawPictureParam.IsAutoFit to True,  
And first set the picture for the two images to facilitate the preview effect,  
   
Label named lblCaption1 and lblCaption2, used to display two commodity names,  
Set Label.SelfOwnMaterial.DrawCaptionParam.FontHorzAlign to Center,  
Then set the title for the two Labels to facilitate the preview effect.  
 
No need to bind any controls to ItemDesignerPanel,  
The effect is as follows:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image001.png)


 
Define a class for a product pair. The class members have two product names and two product images. The code is as follows:  
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

Next, we put a "click to load" button to load list items when clicked:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image007.png)


code show as below:    
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

The main idea of ​​the above code is to create a GoodsPair object,  
Set the product name and product image link for the object,  
Then put the object in the DataObject of the list item.  
 
 
 
Next, let's run the example and click the load button:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image013.png)


As shown above, although the list item is loaded,  
However, the pictures and titles in the list items do not display the corresponding content.  
That's because we're not binding,  
So the Image and Label on the ItemDesignerPanel don't know what to display,  
Dynamic binding is handled in the ListBox.OnPrepareDrawItem event,  
 
Important event to state again:  
First explain the connection between ListBox and ItemDesignerPanel,  
The ListBox in OrangeUI is drawn using all the controls on the ItemDesignerPanel.  
Although multiple list items can be displayed in a ListBox,  
But each list item will not create its own ItemDesignerPanel,  
Doing so will not only consume a lot of memory, but also make the program freeze.  
So ListBox uses the public ItemDesignerPanel to draw each list item.  
 
Let's talk about the OnPrepareDrawItem event,  
Before the ListBox draws a list item, OnPrepareDrawItem is called,  
Pass this list item to the OnPrepareDrawItem event,  
Users can fully customize the processing based on the incoming list item in the OnPrepareDrawItem event,  
After processing, use ItemDesignerPanel to draw the list item,  
 
Well, next we complete the dynamic binding:  
Double-click the ListBox.OnPrepareDrawItem event,  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image015.png)


The parameter Item:TSkinItem is the list item passed in before drawing,  
The following units need to be referenced in the unit:  
uDrawCanvas,  
uSkinItems,  
uDrawPicture,  
uSkinListBoxType,  
 
Then write the following code:  
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


Next, run it again to see the example:  
![](http://www.orangeui.cn/orangeuiblog/OrangeUI/10.16.OrangeUI%E6%8E%A7%E4%BB%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E(%E5%88%97%E8%A1%A8%E6%A1%86%E6%8E%A7%E4%BB%B6ListBox)(%E7%A4%BA%E4%BE%8B16%20%E4%BD%BF%E7%94%A8%E5%88%97%E8%A1%A8%E9%A1%B9%E8%AE%BE%E8%AE%A1%E9%9D%A2%E6%9D%BF%20%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A%E5%A4%9A%E4%B8%AA%E5%9B%BE%E7%89%87).files/image019.png)


Look, each list item displays the corresponding product content  

