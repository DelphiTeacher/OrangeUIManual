---
title: 绑定Json
order: 18
nav:
  title: 列表控件ListBox&ListView
  path: /components
  order: 10
---

随着Json的使用越来越广，OrangeUI的列表项支持绑定Json，做为显示的数据源  
旧的绑定模式，是将数据赋给ListBoxItem.Caption、Detail、Detail1~6，  
这样的缺点有两个：  

使用麻烦，你必须将接口返回的数据读取出来一一赋给Item.Caption、Detail等属性。比如：  

```delphi | pure
AListBox.Caption:=’Soap’;  
AListBox.Detail:=’$99.00’;  
AListBox.Detail1:=’White’;  
```



属性个数有限，最多只能将10个左右的数据添加到Item并显示到界面上。  

读取数据麻烦，你很难容易忘记当初赋给Item.Detail的数据是数量还是金额等。  


接下来我将介绍如何使用绑定Json的步骤：  
1.设计好列表项样式  

在OrangeUIStyles包中，新建一个列表项样式Frame,在该示例中Frame名为TFrameListItemStyle_SaleBill，单元名为：ListItemStyleFrame_SaleBill.pas  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-40.png)




给每个控件命好名字,比如lblClientName这个Label表示用于显示客户名称，lblBillState这个Label表示用于显示单据状态。  

再给列表项样式命好名字  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-41.png)




再安装一次OrangeUIStyle包， 

再赋给ListBox.Properties.DefaultItemStyle，并在单元中引用该样式。  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-42.png)





 
2.准备测试数据  

我以我经常使用的XSuperObject库作为示例  

以下代码表示，我创建了两个单据的Json并将它们放入一个Json数组中。  

```delphi | pure
var
ASuperObject:ISuperObject;
ASuperArray:ISuperArray;
//添加测试数据
ASuperArray:=SA();
ASuperObject:=SO();
ASuperObject.S['ClientName']:='ABC';
ASuperObject.S['Date']:='2021-01-01 15:03';
ASuperObject.S['BillState']:='已审核';
ASuperObject.S['RealMoney']:='￥176';
ASuperObject.S['OrderMoney']:='￥176';
ASuperObject.S['Stock']:='仓库';
ASuperObject.S['Count']:='2种2件';
ASuperObject.S['Emp']:='业务员';
ASuperObject.S['PrintCount']:='0次';
ASuperArray.O[ASuperArray.Length]:=ASuperObject;
ASuperObject:=SO();
ASuperObject.S['ClientName']:='成都某某商贸有限公司';
ASuperObject.S['Date']:='2021-01-02 15:03';
ASuperObject.S['BillState']:='已审核';
ASuperObject.S['RealMoney']:='￥86';
ASuperObject.S['OrderMoney']:='￥86';
ASuperObject.S['Stock']:='主仓库';
ASuperObject.S['Count']:='1种2件';
ASuperObject.S['Emp']:='向芳';
ASuperObject.S['PrintCount']:='1次';
ASuperArray.O[ASuperArray.Length]:=ASuperObject;
```

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-43.png)


 
 
3.添加列表项  

绑定Json的列表项，不能直接使用ListBox.Properties.Items.Add去添加，而是需要引用 uSkinItemJsonHelper单元，它在OrangeProjectCommon目录中。  

示例代码：  

```delphi | pure
var
  I:Integer;
  ASkinItem:TSkinJsonItem;

lstBillList.Properties.Items.BeginUpdate;
try
  lstBillList.Properties.Items.Clear;
  for I := 0 to ASuperArray.Length-1 do
  begin
    ASkinItem:=TSkinJsonItem.Create;
    ASkinItem.Json:=ASuperArray.O[I];
    Self.lstBillList.Prop.Items.Add(ASkinItem);
  end;
finally
  lstBillList.Properties.Items.EndUpdate();
end;
```

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-44.png)


 
 
4.绑定列表项样式上面的控件-给控件设置BindItemFieldName属性。  
  
比如我需要将Json中的ClientName显示到lblClientName这个Label中去，  

将Json中的BillState数据显示到lblBillState这个Label中去等，  

需要在ListBox的OnNewListItemStyleFrameCacheInit事件中进行处理  

示例代码如下：  

```delphi | pure
procedure TfmBillList.lstBillListNewListItemStyleFrameCacheInit(Sender: TObject;
AListItemTypeStyleSetting: TListItemTypeStyleSetting;
ANewListItemStyleFrameCache: TListItemStyleFrameCache);
var
  ASaleBillFrame:TFrameListItemStyle_SaleBill;
begin
  inherited;
  //wn
  if ANewListItemStyleFrameCache.FItemStyleFrame is TFrameListItemStyle_SaleBill then
  begin
    ASaleBillFrame:=TFrameListItemStyle_SaleBill(ANewListItemStyleFrameCache.FItemStyleFrame);
    ASaleBillFrame.lblClientName.BindItemFieldName:='ClientName';
    ASaleBillFrame.lblBillState.BindItemFieldName:='BillState';
    ASaleBillFrame.lblOrderMoney.BindItemFieldName:='OrderMoney';
    ASaleBillFrame.lblRealMoney.BindItemFieldName:='RealMoney';
    ASaleBillFrame.lblPrintCount.BindItemFieldName:='PrintCount';
    ASaleBillFrame.lblBillNO.BindItemFieldName:='BillNO';
    ASaleBillFrame.lblCount.BindItemFieldName:='Count';
    ASaleBillFrame.lblEmp.BindItemFieldName:='Emp';
  end;
end;
```

![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-45.png)





显示效果如下：  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-46.png)









当然如果你的列表项样式Frame只为一个页面所使用，你也可以直接在列表项样式Frame上给控件设置好BindItemFieldName  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-47.png)






 
 
5.如果你想在ListBox的OnClickItem中取出列表顶的数据,比如ClientName，你可以使用：  
AItem.Json.S[‘ClientName’]  



