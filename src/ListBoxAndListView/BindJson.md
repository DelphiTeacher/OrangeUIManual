---
title: Bind Json
order: 18
nav:
  title: ListBox&ListView
  path: /components
  order: 10
---


With the increasing use of Json, OrangeUI's list items support binding Json as the displayed data source  
The old binding mode is to assign data to ListBoxItem.Caption, Detail, Detail1~6,  
There are two disadvantages to this:  

It is troublesome to use, you must read the data returned by the interface and assign it to the properties such as Item.Caption and Detail. for example:  

```delphi | pure
AListBox.Caption:=’Soap’;  
AListBox.Detail:=’$99.00’;  
AListBox.Detail1:=’White’;  
```


The number of attributes is limited, and only about 10 pieces of data can be added to the Item and displayed on the interface.  

It is troublesome to read the data, and it is difficult for you to forget whether the data originally assigned to Item.Detail is the quantity or the amount.  


Next I will introduce the steps of how to bind Json using:  
1. Design the style of the list item  

In the OrangeUIStyles package, create a new list item style Frame. In this example, the Frame name is TFrameListItemStyle_SaleBill, and the unit name is: ListItemStyleFrame_SaleBill.pas  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-40.png)




Name each control, for example, the Label of lblClientName is used to display the customer name, and the Label of lblBillState is used to display the status of the document.  

Give the list item style a name  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-41.png)




Install the OrangeUIStyle package again,  

Then assign it to ListBox.Properties.DefaultItemStyle, and reference the style in the unit.  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-42.png)


2. Prepare test data  

I use the XSuperObject library that I often use as an example  

The following code says, I create Json of two documents and put them into a Json array.  

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


 
3. Add list items  

List items bound to Json cannot be added directly using ListBox.Properties.Items.Add, but need to refer to the uSkinItemJsonHelper unit, which is in the OrangeProjectCommon directory.  

Sample code:  

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


4. Bind the control above the list item style - set the BindItemFieldName property to the control.  
  
For example, I need to display the ClientName in Json to the Label of lblClientName,  

Display the BillState data in Json to the Label of lblBillState, etc.,  

It needs to be handled in the OnNewListItemStyleFrameCacheInit event of the ListBox  

The sample code is as follows:  

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





The display effect is as follows:  
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-46.png)









Of course, if your list item style Frame is only used by one page, you can also set the BindItemFieldName for the control directly on the list item style Frame.    
![](http://www.orangeui.cn/wordpress/wp-content/uploads/2022/03/word-image-47.png)






 
 
5. If you want to retrieve the data at the top of the list, such as ClientName, in the OnClickItem of the ListBox, you can use:   
AItem.Json.S[‘ClientName’]  



