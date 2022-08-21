---
title: Properties and Material
order: 0
nav:
  title: Button
  path: /components
  order: 3
---


Properties in Button's Properties:TButtonProperties:  
IsAutoPush	Boolean	Whether to automatically set the IsPushed when the mouse is clicked  
AutoSize	Boolean	Automatically set size according to Caption   
IsPushed	Boolean	Is it pressed  
Icon	TDrawPicture	button icon  
PushedGroupIndex	Integer	button group  
PushedIcon	TDrawPicture	button icon pressed  
ButtonGroup	TSkinBaseButtonGroup	button group  
ButtonIndex	Integer	Order in ButtonGroup  

Properties in Button's SelfOwnMaterial:TSkinButtonDefaultMaterial:  
BackColor	TDrawPictureParam	Background color drawing parameters		  
IsTransparent Boolean	Do you need to draw the background color		  
DrawCaptionParam	TDrawTextParam	Button title drawing parameters  
DrawIconParam	TDrawPictureParam	Button Icon Drawing Parameters  
NormalPicture	TDrawPicture	normal Background image  
DownPicture	TDrawPicture	Background image of mouse down  
HoverPicture	TDrawPicture	Background image of the mouse in the docked state  
DisabledPicture	TDrawPicture	disabled Background image  
PushedPicture	TDrawPicture	Background image of pressed state  
FocusedPicture	TDrawPicture	Background image of focus state  
DrawPictureParam	TDrawPictureParam	Background image drawing parameters  
DrawDetailParam	TDrawTextParam	Detailed text drawing parameters  
DrawDetail1Param	TDrawTextParam	Detail 1 Text drawing parameters  
		