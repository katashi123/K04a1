//=============================================================================
// Tales of Vesperia Custom Menu System
// Author: Soulpour777 of soulxregalia.wordpress.com
//=============================================================================

/*:
 * @plugindesc v1.0 Converts your default menu to the Tales of Vesperia Menu Style.
 * @author soulpour777 - soulxregalia.wordpress.com
 *
 * @param -- BASE --
 *
 * @param Bar Backdrop
 * @desc Image used for the gauge backdrop.
 * @default Bar
 *
 * @param HP Bar Image
 * @desc Image used for the HP bar gauge in the menu.
 * @default HP
 *
 * @param MP Bar Image
 * @desc Image used for the HP bar gauge in the menu.
 * @default HP
 *
 * @param EXP Bar Image
 * @desc Image used for the EXP bar gauge in the menu.
 * @default EXP
 *
 * @param Use Item Scene
 * @desc Do you want to use the Item scene from the menu?
 * @default true
 *
 * @param Use Skill Scene
 * @desc Do you want to use the Skill scene from the menu?
 * @default true
 *
 * @param Use Equip Scene
 * @desc Do you want to use the Equip scene from the menu?
 * @default true
 *
 * @param Use Status Scene
 * @desc Do you want to use the Status scene from the menu?
 * @default true
 *
 * @param Use Save Scene
 * @desc Do you want to use the Save scene from the menu?
 * @default true
 *
 * @param Use Options Scene
 * @desc Do you want to use the Options scene from the menu?
 * @default true
 *
 * @param Use End Scene
 * @desc Do you want to use the End scene from the menu?
 * @default true
 *
 * @param Background
 * @desc The bg used for the whole scenes. For the default backdrop, use this: SceneManager.backgroundBitmap()
 * @default ImageManager.loadVesperia('Background');
 *
 * @param Numeric Image
 * @desc The numeric image used to display the display number of your characters in the menu.
 * @default Number
 *
 * @param -- MAIN MENU CMD --
 *
 * @param X | Main Menu Command
 * @desc The x coordinate of your main menu commands. This is an eval.
 * @default Graphics.boxHeight
 *
 * @param Y | Main Menu Command
 * @desc The y coordinate of your main menu commands. This is an eval.
 * @default Graphics.boxWidth
 *
 * @param W | Main Menu Command
 * @desc The window width of your main menu commands. This is an eval.
 * @default Graphics.boxWidth
 *
 * @param C | Main Menu Command
 * @desc The max columns of your main menu commands. This is an eval.
 * @default 8
 *
 * @param O | Main Menu Command
 * @desc The window opacity of your main menu commands. This is an eval.
 * @default 0
 *
 * @param -- STATUS WINDOW --
 *
 * @param X | Main Menu Status
 * @desc The x coordinate of the status window of the main menu. This is an eval.
 * @default 0
 *
 * @param Y | Main Menu Status
 * @desc The y coordinate of the status window of the main menu. This is an eval.
 * @default 108
 *
 * @param W | Main Menu Status
 * @desc The width of the status window of the main menu. This is an eval.
 * @default Graphics.width
 *
 * @param C | Main Menu Status
 * @desc The maximum columns of the status window of the main menu. This is an eval.
 * @default 4
 *
 * @param O | Main Menu Status
 * @desc The oapcity of the status window of the main menu. This is an eval.
 * @default 0
 *
 * @param -- GOLD WINDOW --
 *
 * @param X | Main Menu Gold
 * @desc The x coordinate of the gold window of the main menu. This is an eval.
 * @default 0
 *
 * @param Y | Main Menu Gold
 * @desc The y coordinate of the gold window of the main menu. This is an eval.
 * @default 552
 *
 * @param O | Main Menu Gold
 * @desc The oapcity of the gold window of the main menu. This is an eval.
 * @default 0
 *
 * @param -- TIME WINDOW --
 *
 * @param X | Main Menu Time
 * @desc The x coordinate of the time window of the main menu. This is an eval.
 * @default 270
 *
 * @param Y | Main Menu Time
 * @desc The y coordinate of the time window of the main menu. This is an eval.
 * @default 552
 *
 * @param W | Main Menu Time
 * @desc The width of the time window of the main menu. This is an eval.
 * @default 300
 *
 * @param H | Main Menu Time
 * @desc The height of the time window of the main menu. This is an eval.
 * @default 75
 *
 * @param O | Main Menu Time
 * @desc The oapcity of the time window of the main menu. This is an eval.
 * @default 0
 *
 * @param -- EXP TEXT --
 *
 * @param Experience Text
 * @desc The text used to display the next experience needed.
 * @default NEXT
 *
 * @param -- LOCATION WINDOW --
 *
 * @param X | Main Menu Loc
 * @desc The x coordinate of the Location window of the main menu. This is an eval.
 * @default 540
 *
 * @param Y | Main Menu Loc
 * @desc The y coordinate of the Location window of the main menu. This is an eval.
 * @default 552
 *
 * @param W | Main Menu Loc
 * @desc The width of the Location window of the main menu. This is an eval.
 * @default 300
 *
 * @param H | Main Menu Loc
 * @desc The height of the Location window of the main menu. This is an eval.
 * @default 75
 *
 * @param O | Main Menu Loc
 * @desc The oapcity of the Location window of the main menu. This is an eval.
 * @default 0
 *
 * @param -- CURSOR --
 *
 * @param IMG | Cursor
 * @desc The name of the image used for the main cursor in the menu. 
 * @default Cursor
 *
 * @param IMG | Secondary Cursor
 * @desc The name of the image used for the secondary cursor in the menu. 
 * @default Cursor2
 *
 * @param -- LABEL --
 *
 * @param IMG | Main Menu Label
 * @desc The name of the image of the label shown on the bottom of the main menu.
 * @default Label_Frame
 *
 * @param X | Main Menu Label
 * @desc The x coordinate of the label image below on the main menu. This is an eval.
 * @default -30
 *
 * @param Y | Main Menu Label
 * @desc The y coordinate of the label image below on the main menu. This is an eval.
 * @default 540
 *
 * @param -- FACE FRAME --
 *
 * @param IMG | Main Menu Frame
 * @desc The name of the image of the frame shown below the faces in the the main menu.
 * @default Frame
 *
 * @param X | Main Menu Frame
 * @desc The x coordinate of the face below the faces in the main menu. This is an eval.
 * @default 200
 *
 * @param Y | Main Menu Frame
 * @desc The y coordinate of the face below the faces in the main menu. This is an eval.
 * @default 150
 *
 * @param -- WINDOW FRAME --
 *
 * @param IMG | Status Frame
 * @desc The name of the image of the window frames shown below the status window the main menu.
 * @default Frame_Glass
 *
 * @param X | Status Frame
 * @desc The x coordinate of the window frames shown below the status window the main menu. This is an eval.
 * @default 200
 *
 * @param Y | Status Frame
 * @desc The y coordinate of the window frames shown below the status window the main menu. This is an eval.
 * @default 120
 *
 * @param -- MENU BUTTONS --
 *
 * @param Menu | Item Button
 * @desc The image used for the item button in the main menu. (This is also clickable) 
 * @default Item_Button
 *  
 * @param Menu | Item Button X
 * @desc The x coordinate of the item button in the main menu.
 * @default 300
 * 
 * @param Menu | Item Button Y
 * @desc The y coordinate of the item button in the main menu.
 * @default 60
 *
 * @param Menu | Skill Button
 * @desc The image used for the Skill button in the main menu. (This is also clickable) 
 * @default Skills_Button
 *  
 * @param Menu | Skill Button X
 * @desc The x coordinate of the Skill button in the main menu.
 * @default 350
 * 
 * @param Menu | Skill Button Y
 * @desc The y coordinate of the Skill button in the main menu.
 * @default 60
 *
 * @param Menu | Equip Button
 * @desc The image used for the Equip button in the main menu. (This is also clickable) 
 * @default Equip_Button
 *  
 * @param Menu | Equip Button X
 * @desc The x coordinate of the Equip button in the main menu.
 * @default 400
 * 
 * @param Menu | Equip Button Y
 * @desc The y coordinate of the Equip button in the main menu.
 * @default 60
 *
 * @param Menu | Status Button
 * @desc The image used for the Status button in the main menu. (This is also clickable) 
 * @default Status_Button
 *  
 * @param Menu | Status Button X
 * @desc The x coordinate of the Status button in the main menu.
 * @default 450
 * 
 * @param Menu | Status Button Y
 * @desc The y coordinate of the Status button in the main menu.
 * @default 60
 *
 * @param Menu | Formation Button
 * @desc The image used for the Formation button in the main menu. (This is also clickable) 
 * @default Formation_Button
 *  
 * @param Menu | Formation Button X
 * @desc The x coordinate of the Formation button in the main menu.
 * @default 500
 * 
 * @param Menu | Formation Button Y
 * @desc The y coordinate of the Formation button in the main menu.
 * @default 60
 *
 * @param Menu | Options Button
 * @desc The image used for the Options button in the main menu. (This is also clickable) 
 * @default Options_Button
 *  
 * @param Menu | Options Button X
 * @desc The x coordinate of the Options button in the main menu.
 * @default 550
 * 
 * @param Menu | Options Button Y
 * @desc The y coordinate of the Options button in the main menu.
 * @default 60
 *
 * @param Menu | Save Button
 * @desc The image used for the Save button in the main menu. (This is also clickable) 
 * @default Save_Button
 *  
 * @param Menu | Save Button X
 * @desc The x coordinate of the Save button in the main menu.
 * @default 600
 * 
 * @param Menu | Save Button Y
 * @desc The y coordinate of the Save button in the main menu.
 * @default 60
 *
 * @param Menu | End Button
 * @desc The image used for the End button in the main menu. (This is also clickable) 
 * @default End_Button
 *  
 * @param Menu | End Button X
 * @desc The x coordinate of the End button in the main menu.
 * @default 650
 * 
 * @param Menu | End Button Y
 * @desc The y coordinate of the End button in the main menu.
 * @default 60
 *
 * @param -- HELP IMAGES --
 *
 * @param Menu | Item Help
 * @desc The image used for the Item Description in the main menu.
 * @default Item_Help
 *
 * @param Menu | Skills Help
 * @desc The image used for the Skills Description in the main menu.
 * @default Skill_Help
 *
 * @param Menu | Equip Help
 * @desc The image used for the Equip Description in the main menu.
 * @default Equip_Help
 *
 * @param Menu | Status Help
 * @desc The image used for the Status Description in the main menu.
 * @default Status_Help
 *
 * @param Menu | Formation Help
 * @desc The image used for the Formation Description in the main menu.
 * @default Formation_Help
 *
 * @param Menu | Options Help
 * @desc The image used for the Options Description in the main menu.
 * @default Options_Help
 *
 * @param Menu | Save Help
 * @desc The image used for the Save Description in the main menu.
 * @default Save_Help
 *
 * @param Menu | End Help
 * @desc The image used for the End Description in the main menu.
 * @default End_Help
 *
 * @param -- ITEM SCENE --
 *
 * @param COMMAND | X
 * @desc The x coordinate of the item category command window.
 * @default Graphics.width
 *
 * @param COMMAND | Y
 * @desc The y coordinate of the item category command window.
 * @default Graphics.height
 *
 * @param COMMAND | Width
 * @desc The width of the item category command window.
 * @default 900
 *
 * @param COMMAND | Height
 * @desc The width of the item category command window.
 * @default 500
 *
 * @param COMMAND | Opacity
 * @desc The opacity of the item category command window.
 * @default 0
 *
 * @param ITEM WINDOW | X
 * @desc The x coordinate of the item window in the Item Scene.
 * @default 0
 *
 * @param ITEM WINDOW | Y
 * @desc The y coordinate of the item window in the Item Scene.
 * @default 105
 *
 * @param ITEM WINDOW | Width
 * @desc The width of the item window in the Item Scene.
 * @default Graphics.width
 *
 * @param ITEM WINDOW | Height
 * @desc The width of the item window in the Item Scene.
 * @default 400
 *
 * @param ITEM WINDOW | Opacity
 * @desc The opacity of the item window in the Item Scene.
 * @default 0
 *
 * @param ITEM HELP | X
 * @desc The x coordinate of the help window in the Item Scene.
 * @default 0
 *
 * @param ITEM HELP | Y
 * @desc The y coordinate of the help window in the Item Scene.
 * @default 515
 *
 * @param ITEM HELP | Opacity
 * @desc The opacity of the help window in the Item Scene.
 * @default 0
 *
 * @param LABEL | Item Image
 * @desc The image used for the Item Scene Label on top in the Item Scene.
 * @default Item_Scene_Label
 *
 * @param LABEL | Item X
 * @desc The x coordinate of the icon used for the Item Scene Label on top in the Item Scene.
 * @default 0
 *
 * @param LABEL | Item Y
 * @desc The y coordinate of the icon used for the Item Scene Label on top in the Item Scene.
 * @default 0
 *
 * @param OPERATION | Item Image
 * @desc The image used for the Item Scene Operation Label on top in the Item Scene.
 * @default Item_Operation
 *
 * @param OPERATION | Item X
 * @desc The x coordinate of the icon used for the Item Scene Operation Label on top in the Item Scene.
 * @default 0
 *
 * @param OPERATION | Item Y
 * @desc The y coordinate of the icon used for the Item Scene Operation Label on top in the Item Scene.
 * @default 70
 *
 * @param DESC | Item Image
 * @desc The image used for the Item Description in the Item Scene.
 * @default Item_Description_Box
 *
 * @param DESC | Item X
 * @desc The x coordinate for the Item Description in the Item Scene.
 * @default 10
 *
 * @param DESC | Item Y
 * @desc The y coordinate for the Item Description in the Item Scene.
 * @default 520
 *
 * @param ITEM | Category Icon
 * @desc The image used for the Item Category in the Item Scene.
 * @default Item07
 *
 * @param ITEM Icon X
 * @desc The x coordinate of the icon used for the Item Category in the Item Scene.
 * @default 370
 *
 * @param ITEM Icon Y
 * @desc The y coordinate of the icon used for the Item Category in the Item Scene.
 * @default 20
 *
 * @param WEAPON | Category Icon
 * @desc The image used for the Weapon Category in the Item Scene.
 * @default Weapon01
 *
 * @param WEAPON Icon X
 * @desc The x coordinate of the icon used for the Weapon Category in the Item Scene.
 * @default 430
 *
 * @param WEAPON Icon Y
 * @desc The y coordinate of the icon used for the Weapon Category in the Item Scene.
 * @default 20
 *
 * @param ARMOR | Category Icon
 * @desc The image used for the Armor Category in the Item Scene.
 * @default Back03
 *
 * @param ARMOR Icon X
 * @desc The x coordinate of the icon used for the Armor Category in the Item Scene.
 * @default 490
 *
 * @param ARMOR Icon Y
 * @desc The y coordinate of the icon used for the Armor Category in the Item Scene.
 * @default 20
 *
 * @param KEY ITEM | Category Icon
 * @desc The image used for the Key Item Category in the Item Scene.
 * @default Item02
 *
 * @param KEY ITEM Icon X
 * @desc The x coordinate of the icon used for the Key Item Category in the Item Scene.
 * @default 560
 *
 * @param KEY ITEM Icon Y
 * @desc The y coordinate of the icon used for the Key Item Category in the Item Scene.
 * @default 20
 *
 * @param -- SKILL SCENE --
 *
 * @param ITEM WINDOW | Skill X
 * @desc The x coordinate of the item window in the Skill Scene.
 * @default 0
 *
 * @param ITEM WINDOW | Skill Y
 * @desc The y coordinate of the item window in the Skill Scene.
 * @default 288
 *
 * @param ITEM WINDOW | Skill Width
 * @desc The width of the status item in the Skill Scene.
 * @default 816
 *
 * @param ITEM WINDOW | Skill Height
 * @desc The height of the status item in the Skill Scene.
 * @default 247
 *
 * @param ITEM WINDOW | Skill Opacity
 * @desc The opacity of the item window in the Skill Scene.
 * @default 0
 *
 * @param STATUS WINDOW | Skill X
 * @desc The x coordinate of the status window in the Skill Scene.
 * @default 240
 *
 * @param STATUS WINDOW | Skill Y
 * @desc The y coordinate of the status window in the Skill Scene.
 * @default 108
 *
 * @param STATUS WINDOW | Skill Width
 * @desc The width of the status window in the Skill Scene.
 * @default 576
 *
 * @param STATUS WINDOW | Skill Height
 * @desc The height of the status window in the Skill Scene.
 * @default 180
 *
 * @param STATUS WINDOW | Skill Opacity
 * @desc The opacity of the status window in the Skill Scene.
 * @default 0
 *
 * @param ACTOR | Skill X
 * @desc The x coordinate of the icon used for the available actors on top in the Skill Scene.
 * @default 430
 *
 * @param ACTOR | Skill Y
 * @desc The y coordinate of the icon used for the available actors on top in the Skill Scene.
 * @default 35
 *
 * @param LABEL | Skill Image
 * @desc The image used for the Skill Scene Label on top in the Skill Scene.
 * @default Skills_Scene_Label
 *
 * @param LABEL | Skill X
 * @desc The x coordinate of the icon used for the Skill Scene Label on top in the Skill Scene.
 * @default 0
 *
 * @param LABEL | Skill Y
 * @desc The y coordinate of the icon used for the Skill Scene Label on top in the Skill Scene.
 * @default 0
 *
 * @param DESC | Skill Image
 * @desc The image used for the Skill Description in the Skill Scene.
 * @default Item_Description_Box
 *
 * @param DESC | Skill X
 * @desc The x coordinate of the image used for the Skill Description in the Skill Scene.
 * @default 10
 *
 * @param DESC | Skill Y
 * @desc The y coordinate of the image used for the Skill Description in the Skill Scene.
 * @default 510
 *
 * @param STATUS | Skill Image
 * @desc The image used for the Skill Status Box the Skill Scene.
 * @default Skill_Profile_Box
 *
 * @param STATUS | Skill X
 * @desc The x coordinate of the image used for the Skill Status Box the Skill Scene.
 * @default 240
 *
 * @param STATUS | Skill Y
 * @desc The y coordinate of the image used for the Skill Status Box the Skill Scene.
 * @default 110
 *
 * @param CATEGORY | Skill Image
 * @desc The image used for the Skill Category Box the Skill Scene.
 * @default Skill_Category_Box
 *
 * @param CATEGORY | Skill X
 * @desc The x coordinate of the image used for the Skill Category Box the Skill Scene.
 * @default 15
 *
 * @param CATEGORY | Skill Y
 * @desc The y coordinate of the image used for the Skill Category Box the Skill Scene.
 * @default 120
 *
 * @param SKILL LIST | Skill Image
 * @desc The image used for the Skill List Box the Skill Scene.
 * @default Skill_List_Ornament
 *
 * @param SKILL LIST | Skill X
 * @desc The x coordinate of the image used for the Skill List Box the Skill Scene.
 * @default 10
 *
 * @param SKILL LIST | Skill Y
 * @desc The y coordinate of the image used for the Skill List Box the Skill Scene.
 * @default 287
 *
 * @param -- EQUIP SCENE --
 *
 * @param COMMAND BOX | Equip Image
 * @desc The image used for the Equip Command Box the Equip Scene.
 * @default EquipCommand_Box
 *
 * @param COMMAND BOX | Equip X
 * @desc The x coordinate of the image used for the Skill List Box the Equip Scene.
 * @default 325
 *
 * @param COMMAND BOX | Equip Y
 * @desc The y coordinate of the image used for the Skill List Box the Equip Scene.
 * @default 290
 *
 * @param STATUS | Equip X
 * @desc The x coordinate of the status window the Equip Scene.
 * @default 0
 *
 * @param STATUS | Equip Y
 * @desc The y coordinate of the status window the Equip Scene.
 * @default 230
 *
 * @param STATUS | Equip Width
 * @desc The width of the status window the Equip Scene.
 * @default 312
 *
 * @param STATUS | Equip Height
 * @desc The height of the status window the Equip Scene.
 * @default 285
 *
 * @param STATUS | Equip Opacity
 * @desc Theopacity of the status window the Equip Scene.
 * @default 0
 *
 * @param COMMAND | Equip X
 * @desc The x coordinate of the command window the Equip Scene.
 * @default 312
 *
 * @param COMMAND | Equip Y
 * @desc The y coordinate of the command window the Equip Scene.
 * @default 292
 *
 * @param COMMAND | Equip Width
 * @desc The width of the status command the Equip Scene.
 * @default 504
 *
 * @param COMMAND | Equip Opacity
 * @desc The opacity of the status command the Equip Scene.
 * @default 0
 *
 * @param LABEL | Equip Image
 * @desc The image used for the Equip Label on top of the Equip Scene.
 * @default Equip_Scene_Label
 *
 * @param LABEL | Equip X
 * @desc The x coordinate of the image used for the Equip Label on top of the Equip Scene.
 * @default 0
 *
 * @param LABEL | Equip Y
 * @desc The y coordinate of the image used for the Equip Label on top of the Equip Scene.
 * @default 0
 *
 * @param PROFILE | Equip Image
 * @desc The image used for the Profile Box in the Equip Scene.
 * @default Profile_Scroll
 *
 * @param PROFILE | Equip X
 * @desc The x coordinate of the image used for the Profile Box in the Equip Scene.
 * @default -10
 *
 * @param PROFILE | Equip Y
 * @desc The y coordinate of the image used for the Profile Box in the Equip Scene.
 * @default 82
 *
 * @param STATUS | Equip Image
 * @desc The image used for the Status Box in the Equip Scene.
 * @default Status_Box
 *
 * @param DESC | Equip Image
 * @desc The image used for the Item Description Box in the Equip Scene.
 * @default Item_Description_Box
 *
 * @param DESC | Equip X
 * @desc The x coordinate of the image used for the Item Description Box in the Equip Scene.
 * @default 10
 *
 * @param DESC | Equip Y
 * @desc The y coordinate of the image used for the Item Description Box in the Equip Scene.
 * @default 520
 *
 * @param SLOT | Equip Image
 * @desc The image used for the Equip Slot Box in the Equip Scene.
 * @default Slot_Box
 *
 * @param SLOT | Equip X
 * @desc The x coordinate of the image used for the Equip Slot Box in the Equip Scene.
 * @default 290
 *
 * @param SLOT | Equip Y
 * @desc The y coordinate of the image used for the Equip Slot Box in the Equip Scene.
 * @default 70

 * @param -- OPTION SCENE --
 *
 * @param LABEL | Option Image
 * @desc The image used for the Option Label on top of the Options Scene.
 * @default Option_Scene_Label
 *
 * @param LABEL | Option X
 * @desc The x coordinate of the image used for the Option Label on top of the Options Scene.
 * @default 0
 *
 * @param LABEL | Option Y
 * @desc The y coordinate of the image used for the Option Label on top of the Options Scene.
 * @default 0
 *
 *
 * @param -- SAVE SCENE --
 *
 * @param LABEL | Save Image
 * @desc The image used for the Save Label on top of the Save Scene.
 * @default Option_Scene_Label
 *
 * @param LABEL | Save X
 * @desc The x coordinate of the image used for the Save Label on top of the Save Scene.
 * @default 0
 *
 * @param LABEL | Save Y
 * @desc The y coordinate of the image used for the Save Label on top of the Save Scene.
 * @default 0
 *
 * @param -- STATUS SCENE --
 *
 * @param STATUS | Status Image
 * @desc The image used for the Status Label on top of the Status Scene.
 * @default Status_Scene_Label
 *
 * @param STATUS | Status X
 * @desc The x coordinate of the image used for the Status Label on top of the Status Scene.
 * @default 0
 *
 * @param STATUS | Status Y
 * @desc The y coordinate of the image used for the Status Label on top of the Status Scene.
 * @default 0
 *
 * @param OPERATION | Status Image
 * @desc The image used for the Status Operation Label on top of the Status Scene.
 * @default Status_Operation
 *
 * @param OPERATION | Status X
 * @desc The x coordinate of the image used for the Status Operation Label on top of the Status Scene.
 * @default 0
 *
 * @param OPERATION | Status Y
 * @desc The y coordinate of the image used for the Status Operation Label on top of the Status Scene.
 * @default 560
 *
 * @param -- END SCENE --
 *
 * @param LABEL | End Image
 * @desc The image used for the End Label on top of the End Scene.
 * @default End_Scene_Label
 *
 * @param LABEL | End X
 * @desc The x coordinate of the image used for the End Label on top of the End Scene.
 * @default 0
 *
 * @param LABEL | End Y
 * @desc The y coordinate of the image used for the End Label on top of the End Scene.
 * @default 0
 *
 * @param -- PARTICLE --
 *
 * @param PARTICLE | Image
 * @desc The image used for the Particle Images scrolling on the menu.
 * @default Particle
 *
 * @param PARTICLE | Scroll X
 * @desc The x scrolling speed and direction of the particle images shown on each menu screen.
 * @default 3
 *
 * @param PARTICLE | Scroll Y
 * @desc The y scrolling speed and direction of the particle images shown on each menu screen.
 * @default 1
 *
 * @help 

Tales of Vesperia Custom Menu System
Author: Soulpour777

Date of Creation: July 8, 2016

Description:
This plugin converts your default menu to the Tales of Vesperia Menu Style.

Includes:
    - Main Menu Interface
    - Item Interface
    - Equip Interface
    - Skill Interface
    - Status Interface
    
    Three optional things added:

    - Options
    - Save
    - End

====================================
ATTENTION / STOP
====================================  

If you're looking for a easily customizable type of menu screen and compatible with
other plugins about menus, ToV menu is not one of them.

====================================
NOTE
====================================  

Many of the base plugins are recreated to avoid incompatibility with other core
scripts that people use. I also separated each scene so it's easier for 
wide use. For example, if you only want to use the main menu, you can always
disable everything using the BASE parameters.

This plugin also uses computer / mobile Date classes.

Instructions

Place all your images in the img / SOUL_MENU / Vesperia folder.
If it is not existent, please create the directory.

=====================================================
FLASHING ACTORS IN THE SKILL, STATUS AND EQUIP SCENES
=====================================================

The flashing actors are called Available Actors. You
must place their proper graphic by id significance.
For example, if your first actor is Harold, you
should place the actor's id as the name of the image.
Since Harold is Actor 1, then it should be 1.png.

The status busts should be according to the actor's
name.

====================================
BASE
====================================

The base parameters are all about the things that you want 
to do for the base of the menu. This includes if you want
to use only the main menu, the skill, etc.

It also includes the background you are going to use for
all the menu scenes. 

====================================
MAIN MENU COMMAND
====================================

The main menu command is the window such as the Item,
Skill, Equip and so on.

It is not shown on the screen because from the menu,
they are now represented via buttons, which is indicated
by the button and the floating cursor.

====================================
STATUS WINDOW
====================================

The status window is the ones that show the actor's
HP, MP and Experience meter. 

====================================
GOLD, TIME AND LOCATION WINDOW
====================================

Gold: Shows the Gold Window on the Main Menu.
Time: Shows the GAME TIME.
Location Window: Shows the display name of the map
the character is in.

====================================
EXPERIENCE TEXT
====================================

The Experience Text is talking about the word
'NEXT' to label the needed experience of the
character before his / her next level.

====================================
CURSOR
====================================

There are two cursors. The one used in the menu
and the ones used in selection. The selection
cursor is smaller due to the contraints of the
window cursor's rectangle.

====================================
LABELS
====================================

The label means the images shown on top of the menu
screen that tells you what and where you are in
the main menu. There are two sets, the one for the
main menu and the ones for each scene. They can
be individually changed from the plugin manager.

====================================
SUPPORT: Contact me at: https://soulxregalia.wordpress.com/
====================================

====================================
PATREON: Contact me at: https://www.patreon.com/Soulpour777
====================================


 */

var vesperia = PluginManager.parameters('SOUL_VesperiaCMS');

var Imported = Imported || {};
Imported.SOUL_VesperiaCMS = true;

var Soulpour777 = Soulpour777 || {};
Soulpour777.Vesperia = Soulpour777.Vesperia || {};

Soulpour777.Vesperia.commandX = Number(vesperia['COMMAND | X']);
Soulpour777.Vesperia.commandY = Number(vesperia['COMMAND | Y']);
Soulpour777.Vesperia.commandWidth = eval(vesperia['COMMAND | Width']);
Soulpour777.Vesperia.commandHeight = eval(vesperia['COMMAND | Height']);
Soulpour777.Vesperia.commandOpacity = Number(vesperia['COMMAND | Opacity']);

Soulpour777.Vesperia.itemWindowX = Number(vesperia['ITEM WINDOW | X']);
Soulpour777.Vesperia.itemWindowY = Number(vesperia['ITEM WINDOW | Y']);
Soulpour777.Vesperia.itemWindowW = vesperia['ITEM WINDOW | Width'];
Soulpour777.Vesperia.itemWindowH = vesperia['ITEM WINDOW | Height'];
Soulpour777.Vesperia.itemWindowO = Number(vesperia['ITEM WINDOW | Opacity']);

Soulpour777.Vesperia.itemHelpX = Number(vesperia['ITEM HELP | X']);
Soulpour777.Vesperia.itemHelpY = Number(vesperia['ITEM HELP | Y']);
Soulpour777.Vesperia.itemHelpO = Number(vesperia['ITEM HELP | Opacity']);


Soulpour777.Vesperia.cursorImage = vesperia['IMG | Cursor'];
Soulpour777.Vesperia.cursorImageX = vesperia['IMG | Secondary Cursor'];

Soulpour777.Vesperia.pX = Number(vesperia['PARTICLE | Scroll X']);
Soulpour777.Vesperia.pY = Number(vesperia['PARTICLE | Scroll Y']);

Soulpour777.Vesperia.numericImage = vesperia['Numeric Image'];
Soulpour777.Vesperia.bar1 = vesperia['HP Bar Image'];
Soulpour777.Vesperia.bar2 = vesperia['MP Bar Image'];
Soulpour777.Vesperia.bar3 = vesperia['EXP Bar Image'];
Soulpour777.Vesperia.backdrop = vesperia['Bar Backdrop'];

Soulpour777.Vesperia.exxx = vesperia['Experience Text'];
Soulpour777.Vesperia.bgx = vesperia['Background'];

Soulpour777.Vesperia.particle = vesperia['PARTICLE | Image'];

Soulpour777.Vesperia.cmdEquipBox = vesperia['COMMAND BOX | Equip Image'];
Soulpour777.Vesperia.cmdEquipBoxX = Number(vesperia['COMMAND BOX | Equip X']);
Soulpour777.Vesperia.cmdEquipBoxY = Number(vesperia['COMMAND BOX | Equip Y']);

Soulpour777.Vesperia.sEquipBoxX = Number(vesperia['STATUS | Equip X']);
Soulpour777.Vesperia.sEquipBoxY = Number(vesperia['STATUS | Equip Y']);
Soulpour777.Vesperia.sEquipBoxW = vesperia['STATUS | Equip Width'];
Soulpour777.Vesperia.sEquipBoxH = vesperia['STATUS | Equip Height'];
Soulpour777.Vesperia.sEquipBoxO = Number(vesperia['STATUS | Equip Opacity']);

Soulpour777.Vesperia.sxEquipBoxX = Number(vesperia['COMMAND | Equip X']);
Soulpour777.Vesperia.sxEquipBoxY = Number(vesperia['COMMAND | Equip Y']);
Soulpour777.Vesperia.sxEquipBoxW = vesperia['COMMAND | Equip Width'];
Soulpour777.Vesperia.sxEquipBoxO = Number(vesperia['COMMAND | Equip Opacity']);

Soulpour777.Vesperia.lbEquipBox = vesperia['LABEL | Equip Image'];
Soulpour777.Vesperia.lbEquipBoxX = Number(vesperia['LABEL | Equip X']);
Soulpour777.Vesperia.lbEquipBoxY = Number(vesperia['LABEL | Equip Y']);

Soulpour777.Vesperia.statE = vesperia['STATUS | Equip Image'];
Soulpour777.Vesperia.statEX = Number(vesperia['STATUS | Equip X']);
Soulpour777.Vesperia.statEY = Number(vesperia['STATUS | Equip Y']);

Soulpour777.Vesperia.descEq = vesperia['DESC | Equip Image'];
Soulpour777.Vesperia.descEqX = Number(vesperia['DESC | Equip X']);
Soulpour777.Vesperia.descEqY = Number(vesperia['DESC | Equip Y']);

Soulpour777.Vesperia.statSlotE = vesperia['SLOT | Equip Image'];
Soulpour777.Vesperia.statSlotEX = Number(vesperia['SLOT | Equip X']);
Soulpour777.Vesperia.statSlotEY = Number(vesperia['SLOT | Equip Y']);

Soulpour777.Vesperia.prEquipBox = vesperia['PROFILE | Equip Image'];
Soulpour777.Vesperia.prEquipBoxX = Number(vesperia['PROFILE | Equip X']);
Soulpour777.Vesperia.prEquipBoxY = Number(vesperia['PROFILE | Equip Y']);

Soulpour777.Vesperia.itemLabel = vesperia['LABEL | Item Image'];
Soulpour777.Vesperia.itemLabelX = Number(vesperia['LABEL | Item X']);
Soulpour777.Vesperia.itemLabelY = Number(vesperia['LABEL | Item Y']);

Soulpour777.Vesperia.statusLabel = vesperia['STATUS | Status Image'];
Soulpour777.Vesperia.statusLabelX = Number(vesperia['STATUS | Status X']);
Soulpour777.Vesperia.statusLabelY = Number(vesperia['STATUS | Status Y']);

Soulpour777.Vesperia.skillLabel = vesperia['LABEL | Skill Image'];
Soulpour777.Vesperia.skillLabelX = Number(vesperia['LABEL | Skill X']);
Soulpour777.Vesperia.skillLabelY = Number(vesperia['LABEL | Skill Y']);

Soulpour777.Vesperia.xxa = vesperia['OPERATION | Status Image'];
Soulpour777.Vesperia.xxaX = Number(vesperia['OPERATION | Status X']);
Soulpour777.Vesperia.xxaY = Number(vesperia['OPERATION | Status Y']);

Soulpour777.Vesperia.optLabel = vesperia['LABEL | Option Image'];
Soulpour777.Vesperia.optLabelX = Number(vesperia['LABEL | Option X']);
Soulpour777.Vesperia.optLabelY = Number(vesperia['LABEL | Option Y']);

Soulpour777.Vesperia.saveLabel = vesperia['LABEL | Save Image'];
Soulpour777.Vesperia.saveLabelX = Number(vesperia['LABEL | Save X']);
Soulpour777.Vesperia.saveLabelY = Number(vesperia['LABEL | Save Y']);

Soulpour777.Vesperia.endLabel = vesperia['LABEL | End Image'];
Soulpour777.Vesperia.endLabelX = Number(vesperia['LABEL | End X']);
Soulpour777.Vesperia.endLabelY = Number(vesperia['LABEL | End Y']);

Soulpour777.Vesperia.actorSkillX = Number(vesperia['ACTOR | Skill X']);
Soulpour777.Vesperia.actorSkillY = Number(vesperia['ACTOR | Skill Y']);

Soulpour777.Vesperia.itemdesc = vesperia['DESC | Item Image'];
Soulpour777.Vesperia.itemdescX = Number(vesperia['DESC | Item X']);
Soulpour777.Vesperia.itemdescY = Number(vesperia['DESC | Item Y']);

Soulpour777.Vesperia.skillitemdesc = vesperia['DESC | Skill Image'];
Soulpour777.Vesperia.skillitemdescX = Number(vesperia['DESC | Skill X']);
Soulpour777.Vesperia.skillitemdescY = Number(vesperia['DESC | Skill Y']);

Soulpour777.Vesperia.skillcategbox = vesperia['CATEGORY | Skill Image'];
Soulpour777.Vesperia.skillcategboxX = Number(vesperia['CATEGORY | Skill X']);
Soulpour777.Vesperia.skillcategboxY = Number(vesperia['CATEGORY | Skill Y']);

Soulpour777.Vesperia.pskillitemdesc = vesperia['STATUS | Skill Image'];
Soulpour777.Vesperia.pskillitemdescX = Number(vesperia['STATUS | Skill X']);
Soulpour777.Vesperia.pskillitemdescY = Number(vesperia['STATUS | Skill Y']);

Soulpour777.Vesperia.pskillitemdescx = vesperia['SKILL LIST | Skill Image'];
Soulpour777.Vesperia.pskillitemdescxX = Number(vesperia['SKILL LIST | Skill X']);
Soulpour777.Vesperia.pskillitemdescxY = Number(vesperia['SKILL LIST | Skill Y']);

Soulpour777.Vesperia.itemLabelOP = vesperia['OPERATION | Item Image'];
Soulpour777.Vesperia.itemLabelOPX = Number(vesperia['OPERATION | Item X']);
Soulpour777.Vesperia.itemLabelOPY = Number(vesperia['OPERATION | Item Y']);

Soulpour777.Vesperia.categoryImg1 = vesperia['ITEM | Category Icon'];
Soulpour777.Vesperia.categoryImg2 = vesperia['WEAPON | Category Icon'];
Soulpour777.Vesperia.categoryImg3 = vesperia['ARMOR | Category Icon'];
Soulpour777.Vesperia.categoryImg4 = vesperia['KEY ITEM | Category Icon'];

Soulpour777.Vesperia.categoryImg1X = Number(vesperia['ITEM Icon X']);
Soulpour777.Vesperia.categoryImg1Y = Number(vesperia['ITEM Icon Y']);
Soulpour777.Vesperia.categoryImg2X = Number(vesperia['WEAPON Icon X']);
Soulpour777.Vesperia.categoryImg2Y = Number(vesperia['WEAPON Icon Y']);
Soulpour777.Vesperia.categoryImg3X = Number(vesperia['ARMOR Icon X']);
Soulpour777.Vesperia.categoryImg3Y = Number(vesperia['ARMOR Icon Y']);
Soulpour777.Vesperia.categoryImg4X = Number(vesperia['KEY ITEM Icon X']);
Soulpour777.Vesperia.categoryImg4Y = Number(vesperia['KEY ITEM Icon Y']);

Soulpour777.Vesperia.help1 = vesperia['Menu | Item Help'];
Soulpour777.Vesperia.help2 = vesperia['Menu | Skills Help'];
Soulpour777.Vesperia.help3 = vesperia['Menu | Equip Help'];
Soulpour777.Vesperia.help4 = vesperia['Menu | Status Help'];
Soulpour777.Vesperia.help5 = vesperia['Menu | Formation Help'];
Soulpour777.Vesperia.help6 = vesperia['Menu | Options Help'];
Soulpour777.Vesperia.help7 = vesperia['Menu | Save Help'];
Soulpour777.Vesperia.help8 = vesperia['Menu | End Help'];

Soulpour777.Vesperia.useItemScene = vesperia['Use Item Scene'];
Soulpour777.Vesperia.useSkillScene = vesperia['Use Skill Scene'];
Soulpour777.Vesperia.useEquipScene = vesperia['Use Equip Scene'];
Soulpour777.Vesperia.useSaveScene = vesperia['Use Save Scene'];
Soulpour777.Vesperia.useStatusScene = vesperia['Use Status Scene'];
Soulpour777.Vesperia.useOptionsScene = vesperia['Use Options Scene'];
Soulpour777.Vesperia.useEndScene = vesperia['Use End Scene'];

Soulpour777.Vesperia.menuItemButton = vesperia['Menu | Item Button'];
Soulpour777.Vesperia.menuItemButtonX = vesperia['Menu | Item Button X'];
Soulpour777.Vesperia.menuItemButtonY = vesperia['Menu | Item Button Y'];

Soulpour777.Vesperia.skillItemButton = vesperia['Menu | Skill Button'];
Soulpour777.Vesperia.skillItemButtonX = vesperia['Menu | Skill Button X'];
Soulpour777.Vesperia.skillItemButtonY = vesperia['Menu | Skill Button Y'];

Soulpour777.Vesperia.equipItemButton = vesperia['Menu | Equip Button'];
Soulpour777.Vesperia.equipItemButtonX = vesperia['Menu | Equip Button X'];
Soulpour777.Vesperia.equipItemButtonY = vesperia['Menu | Equip Button Y'];

Soulpour777.Vesperia.statusItemButton = vesperia['Menu | Status Button'];
Soulpour777.Vesperia.statusItemButtonX = vesperia['Menu | Status Button X'];
Soulpour777.Vesperia.statusItemButtonY = vesperia['Menu | Status Button Y'];

Soulpour777.Vesperia.formationItemButton = vesperia['Menu | Formation Button'];
Soulpour777.Vesperia.formationItemButtonX = vesperia['Menu | Formation Button X'];
Soulpour777.Vesperia.formationItemButtonY = vesperia['Menu | Formation Button Y'];

Soulpour777.Vesperia.optionsItemButton = vesperia['Menu | Options Button'];
Soulpour777.Vesperia.optionsItemButtonX = vesperia['Menu | Options Button X'];
Soulpour777.Vesperia.optionsItemButtonY = vesperia['Menu | Options Button Y'];

Soulpour777.Vesperia.saveItemButton = vesperia['Menu | Save Button'];
Soulpour777.Vesperia.saveItemButtonX = vesperia['Menu | Save Button X'];
Soulpour777.Vesperia.saveItemButtonY = vesperia['Menu | Save Button Y'];

Soulpour777.Vesperia.endItemButton = vesperia['Menu | End Button'];
Soulpour777.Vesperia.endItemButtonX = vesperia['Menu | End Button X'];
Soulpour777.Vesperia.endItemButtonY = vesperia['Menu | End Button Y'];

Soulpour777.Vesperia.menu_windowX = vesperia['X | Main Menu Command'];
Soulpour777.Vesperia.menu_windowY = vesperia['Y | Main Menu Command'];
Soulpour777.Vesperia.menu_windowWidth = vesperia['W | Main Menu Command'];
Soulpour777.Vesperia.menu_windowMaxCols = vesperia['C | Main Menu Command'];

Soulpour777.Vesperia.status_windowX = vesperia['X | Main Menu Status'];
Soulpour777.Vesperia.status_windowY = vesperia['Y | Main Menu Status'];
Soulpour777.Vesperia.status_windowOpacity = vesperia['O | Main Menu Status'];
Soulpour777.Vesperia.status_windowWidth = vesperia['W | Main Menu Status'];
Soulpour777.Vesperia.status_windowMaxCols = vesperia['C | Main Menu Status'];

Soulpour777.Vesperia.gold_windowX = vesperia['X | Main Menu Gold'];
Soulpour777.Vesperia.gold_windowY = vesperia['Y | Main Menu Gold'];
Soulpour777.Vesperia.gold_windowOpacity = vesperia['O | Main Menu Gold'];

Soulpour777.Vesperia.time_windowX = vesperia['X | Main Menu Time'];
Soulpour777.Vesperia.time_windowY = vesperia['Y | Main Menu Time'];
Soulpour777.Vesperia.time_windowW = vesperia['W | Main Menu Time'];
Soulpour777.Vesperia.time_windowH = vesperia['H | Main Menu Time'];
Soulpour777.Vesperia.time_windowOpacity = vesperia['O | Main Menu Time'];

Soulpour777.Vesperia.location_windowX = vesperia['X | Main Menu Loc'];
Soulpour777.Vesperia.location_windowY = vesperia['Y | Main Menu Loc'];
Soulpour777.Vesperia.location_windowW = vesperia['W | Main Menu Loc'];
Soulpour777.Vesperia.location_windowH = vesperia['H | Main Menu Loc'];
Soulpour777.Vesperia.location_windowOpacity = vesperia['O | Main Menu Loc'];

Soulpour777.Vesperia.label_windowImage = vesperia['IMG | Main Menu Label'];
Soulpour777.Vesperia.label_windowX = vesperia['X | Main Menu Label'];
Soulpour777.Vesperia.label_windowY = vesperia['Y | Main Menu Label'];

Soulpour777.Vesperia.frame_windowImage = vesperia['IMG | Main Menu Frame'];
Soulpour777.Vesperia.frame_windowX = vesperia['X | Main Menu Frame'];
Soulpour777.Vesperia.frame_windowY = vesperia['Y | Main Menu Frame'];

Soulpour777.Vesperia.framex_windowImage = vesperia['IMG | Status Frame'];
Soulpour777.Vesperia.framex_windowX = vesperia['X | Status Frame'];
Soulpour777.Vesperia.framex_windowY = vesperia['Y | Status Frame'];

Soulpour777.Vesperia.statusWinZ_X = Number(vesperia['STATUS WINDOW | Skill X']);
Soulpour777.Vesperia.statusWinZ_Y = Number(vesperia['STATUS WINDOW | Skill Y']);
Soulpour777.Vesperia.statusWinZ_W = vesperia['STATUS WINDOW | Skill Width'];
Soulpour777.Vesperia.statusWinZ_H = vesperia['STATUS WINDOW | Skill Height'];
Soulpour777.Vesperia.statusWinZ_O = Number(vesperia['STATUS WINDOW | Skill Opacity']);

Soulpour777.Vesperia.itemWinZ_X = Number(vesperia['ITEM WINDOW | Skill X']);
Soulpour777.Vesperia.itemWinZ_Y = Number(vesperia['ITEM WINDOW | Skill Y']);
Soulpour777.Vesperia.itemWinZ_W = vesperia['ITEM WINDOW | Skill Width'];
Soulpour777.Vesperia.itemWinZ_H = vesperia['ITEM WINDOW | Skill Height'];
Soulpour777.Vesperia.itemWinZ_O = Number(vesperia['ITEM WINDOW | Skill Opacity']);

ImageManager.loadVesperia = function(filename, hue) {
    return this.loadBitmap('img/SOUL_MENU/Vesperia/', filename, hue, true);
};


(function($) {
    $.prototype.drawGaugeHP = function(x, y, width, rate, background, foreground,foregroundhue) {
        var backMap = ImageManager.loadVesperia(Soulpour777.Vesperia.backdrop);
        var foreMap = ImageManager.loadVesperia(Soulpour777.Vesperia.bar1);
        var fillW = Math.floor(width * rate);
        var gaugeY = y + this.lineHeight() - 11;
        this.contents.blt(backMap,0,0,174,backMap.height,x,gaugeY + 5);
        this.contents.blt(foreMap,0,0, fillW,15,x, gaugeY + 5);
    };  
    $.prototype.drawGaugeMP = function(x, y, width, rate, background, foreground,foregroundhue) {
        var backMap = ImageManager.loadVesperia(Soulpour777.Vesperia.backdrop);
        var foreMap = ImageManager.loadVesperia(Soulpour777.Vesperia.bar2);
        var fillW = Math.floor(width * rate);
        var gaugeY = y + this.lineHeight() - 11;
        this.contents.blt(backMap,0,0,174,backMap.height,x,gaugeY + 5);
        this.contents.blt(foreMap,0,0, fillW,15,x, gaugeY + 5);
    };
    $.prototype.drawGaugeTP = function(x, y, width, rate, background, foreground,foregroundhue) {
        var backMap = ImageManager.loadVesperia(Soulpour777.Vesperia.backdrop);
        var foreMap = ImageManager.loadVesperia('TP');
        var fillW = Math.floor(width * rate);
        var gaugeY = y + this.lineHeight() - 11;
        this.contents.blt(backMap,0,0,174,backMap.height,x,gaugeY + 5);
        this.contents.blt(foreMap,0,0, fillW,15,x, gaugeY + 5);
    };    
    $.prototype.drawGaugeEXP = function(x, y, width, rate, background, foreground,foregroundhue) {
        var backMap = ImageManager.loadVesperia('Bar');
        var foreMap = ImageManager.loadVesperia(Soulpour777.Vesperia.bar3);
        var fillW = Math.floor(width * rate);
        var gaugeY = y + this.lineHeight() - 11;
        this.contents.blt(backMap,0,0,174,backMap.height,x,gaugeY + 5);
        this.contents.blt(foreMap,0,0, fillW,15,x, gaugeY + 5);
    };
    $.prototype.drawActorLevel = function(actor, x, y) {
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.levelA, x, y, 48);
        this.resetTextColor();
        this.drawText(actor.level, x + 44, y, 36, 'right');
    };
    $.prototype.drawActorEXP = function(actor, x, y, width) {
        width = width || 186;
        var color1 = this.hpGaugeColor1();
        var color2 = this.hpGaugeColor2();
        var exp = actor.currentExp() - actor.expForLevel(actor._level);
        var exp_eq = actor.expForLevel(actor._level + 1) - actor.expForLevel(actor._level);
        var exp_rate = (exp / exp_eq);
        this.drawGaugeEXP(x - 5, y, width, exp_rate, color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(Soulpour777.Vesperia.exxx, x, y, 50);
        this.changeTextColor(this.normalColor());
        this.drawText(actor.currentExp(), x + 70, y, 1000);
    };
    $.prototype.drawNumber = function (x, y, value) {
        var bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.numericImage);
        var string = Math.abs(value).toString();
        var digitWidth = bitmap.width / 10;
        var digitHeight = bitmap.height / 5;

        for (var i = 0; i < string.length; i++) {
            var bitmapX = x + (i * digitWidth);
            var n = Number(string[i]);
            var sx = n * digitWidth;
            this.contents.blt(bitmap, sx, 0, digitWidth,
                    digitHeight, bitmapX, y);
        }
    };

    $.prototype.drawActorHpx = function(actor, x, y, width) {
        width = width || 186;
        var color1 = this.hpGaugeColor1();
        var color2 = this.hpGaugeColor2();
        this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.hpA, x, y, 44);
        this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
                               this.hpColor(actor), this.normalColor());
    };

    $.prototype.drawActorMpx = function(actor, x, y, width) {
        width = width || 186;
        var color1 = this.mpGaugeColor1();
        var color2 = this.mpGaugeColor2();
        this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.mpA, x, y, 44);
        this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
                               this.mpColor(actor), this.normalColor());
    };     
})(Window_Base);

(function($){
    $.prototype.windowWidth = function() {
        return eval(Soulpour777.Vesperia.status_windowWidth);
    };

    $.prototype.windowHeight = function() {
        var h1 = this.fittingHeight(1);
        var h2 = this.fittingHeight(2);
        return Graphics.boxHeight - h1 - h2;
    };

    $.prototype.maxCols = function() {
        return Soulpour777.Vesperia.status_windowMaxCols;
    };

    $.prototype.numVisibleRows = function() {
        return 1;
    };

    $.prototype.drawItemImage = function(index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRectForText(index);
        var w = Math.min(rect.width, 144);
        var h = Math.min(rect.height, 144);
        var lineHeight = this.lineHeight();
        this.changePaintOpacity(actor.isBattleMember());
        this.drawActorFace(actor, rect.x + 10, rect.y + lineHeight * 1, w, h);
        this.changePaintOpacity(true);
    };

    $.prototype.drawItemStatus = function(index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRectForText(index);
        var x = rect.x;
        var y = rect.y;
        var width = rect.width;
        var bottom = y + rect.height;
        var lineHeight = this.lineHeight();
        this.drawActorName(actor, x + 30, y + lineHeight * 4, width);
        this.drawActorLevel(actor, x + 50, y + lineHeight * 5, width);
        this.drawActorHp(actor, x, bottom - lineHeight * 5, width);
        this.drawActorMp(actor, x, bottom - lineHeight * 4 + 10, width);
        this.drawActorEXP(actor, x, bottom - lineHeight * 3 + 30, width);
        this.drawActorIcons(actor, x, bottom - lineHeight * 10 + 10 , width);
        this.drawNumber(x, y, index+1);
    };

    $.prototype.drawActorHp = function(actor, x, y, width) {
        width = width || 186;
        var color1 = this.hpGaugeColor1();
        var color2 = this.hpGaugeColor2();
        this.drawGaugeHP(x - 5, y, width, actor.hpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.hpA, x , y, 44);
        this.drawCurrentAndMax(actor.hp, actor.mhp, x - 15, y, width,
                               this.hpColor(actor), this.normalColor());
    };

    $.prototype._createAllParts = function() {
        this._windowSpriteContainer = new PIXI.DisplayObjectContainer();
        this._windowBackSprite = new Sprite();
        this._windowCursorSprite = new Sprite();
        this._windowFrameSprite = new Sprite();
        this._windowContentsSprite = new Sprite();
        this._downArrowSprite = new Sprite();
        this._upArrowSprite = new Sprite();
        this._windowPauseSignSprite = new Sprite();
        this._windowBackSprite.bitmap = new Bitmap(1, 1);
        this._windowBackSprite.alpha = 192 / 255;
        this.addChild(this._windowSpriteContainer);
        this._windowSpriteContainer.addChild(this._windowBackSprite);
        this._windowSpriteContainer.addChild(this._windowFrameSprite);
        
        this.addChild(this._windowContentsSprite);
        this.addChild(this._downArrowSprite);
        this.addChild(this._upArrowSprite);
        this.addChild(this._windowPauseSignSprite);
        this.addChild(this._windowCursorSprite);
    };


    $.prototype.drawActorMp = function(actor, x, y, width) {
        width = width || 186;
        var color1 = this.mpGaugeColor1();
        var color2 = this.mpGaugeColor2();
        this.drawGaugeMP(x - 5, y, width, actor.mpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.mpA, x, y, 44);
        this.drawCurrentAndMax(actor.mp, actor.mmp, x - 15, y, width,
                               this.mpColor(actor), this.normalColor());
    };
    $.prototype._refreshCursor = function() {
        var pad = this._padding;
        var x = this._cursorRect.x + pad - this.origin.x;
        var y = this._cursorRect.y + pad - this.origin.y;
        var w = this._cursorRect.width;
        var h = this._cursorRect.height;
        var m = 4;
        var x2 = Math.max(x, pad);
        var y2 = Math.max(y, pad);
        var ox = x - x2;
        var oy = y - y2;
        var w2 = Math.min(w, this._width - pad - x2);
        var h2 = Math.min(h, this._height - pad - y2);
        var bitmap = new Bitmap(w2, h2);

        this._windowCursorSprite.bitmap = ImageManager.loadVesperia('');

        this._windowCursorSprite.setFrame(0, 0, w2, h2);
        this._windowCursorSprite.move(x2, y2);

        if (w > 0 && h > 0 && this._windowskin) {
            var skin = this._windowskin;
            var p = 96;
            var q = 48;
            bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
            bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
            bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
            bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
            bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
            bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
            bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
            bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
            bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
        }
    };       
    $.prototype._updateCursor = function() {
        var blinkCount = 0;
        var cursorOpacity = this.contentsOpacity;
        var xvx = new Date().getTime() / this._windowCursorSprite.width;
        if (this.active) {
            if (blinkCount < 20) {
                cursorOpacity -= blinkCount * 8;
                cursorOpacity -= blinkCount * 8;
                this._windowCursorSprite.y = 40 + Math.cos(parseFloat(xvx)) * 5;                
            } else {
                cursorOpacity -= (40 - blinkCount) * 8;
            }
        }
        this._windowCursorSprite.alpha = cursorOpacity / 255;
        this._windowCursorSprite.visible = this.isOpen();
    };    
})(Window_MenuStatus);

(function($){

})();

(function($){
    Soulpour777.Vesperia.Scene_Menu_create = Scene_Menu.prototype.create;
    $.prototype.create = function() {
        Soulpour777.Vesperia.Scene_Menu_create.call(this);
        this._statusWindow.x = eval(Soulpour777.Vesperia.status_windowX);
        this._statusWindow.y = eval(Soulpour777.Vesperia.status_windowY);
        this._goldWindow.x = eval(Soulpour777.Vesperia.gold_windowX);
        this._goldWindow.y = eval(Soulpour777.Vesperia.gold_windowY);
        this._frameCount = 0;
        this.createParticles();
        this.createVesperiaFrame();
        this.createVesperiaFrameGlass();
        this.createVesperiaIcons();
        this.createVesperiaMenuHelp();
        this.createVesperiaWindowTime();
        this.createVesperiaWindowLocation();
        this.createVesperiaLabelFrame();
        this.createVesperiaCursor();        
    };  
    $.prototype.createVesperiaCursor = function() {
        this._cursor = new Sprite();
        this._cursor.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.cursorImage);
        this.addChild(this._cursor);
    }
    $.prototype.createVesperiaLabelFrame = function() {
        this._labelFrame = new Sprite();
        this._labelFrame.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.label_windowImage);
        this._labelFrame.x = eval(Soulpour777.Vesperia.label_windowX);
        this._labelFrame.y = eval(Soulpour777.Vesperia.label_windowY);
        this.addChild(this._labelFrame);
    }

    function Window_Location() {
        this.initialize.apply(this, arguments);
    }

    Window_Location.prototype = Object.create(Window_Base.prototype);
    Window_Location.prototype.constructor = Window_Location;

    Window_Location.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };

    Window_Location.prototype.windowWidth = function() {
        return eval(Soulpour777.Vesperia.location_windowW);
    };

    Window_Location.prototype.windowHeight = function() {
        return eval(Soulpour777.Vesperia.location_windowH);
    };

    Window_Location.prototype.refresh = function() {
        var x = this.textPadding();
        var width = this.contents.width - this.textPadding() * 2;
        this.contents.clear();
        this.drawTextEx($dataMap.displayName, 0, 0);
    };

    Window_Location.prototype.open = function() {
        this.refresh();
        Window_Base.prototype.open.call(this);
    };

    $.prototype.createVesperiaWindowLocation = function() {
        this._windowLocation = new Window_Location();
        this._windowLocation.x = eval(Soulpour777.Vesperia.location_windowX);
        this._windowLocation.y = eval(Soulpour777.Vesperia.location_windowY);
        this._windowLocation.opacity = eval(Soulpour777.Vesperia.location_windowOpacity);
        this.addChild(this._windowLocation);
    }

    function Window_Time() {
        this.initialize.apply(this, arguments);
    }

    Window_Time.prototype = Object.create(Window_Base.prototype);
    Window_Time.prototype.constructor = Window_Time;

    Window_Time.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };

    Window_Time.prototype.windowWidth = function() {
        return eval(Soulpour777.Vesperia.time_windowW);
    };

    Window_Time.prototype.windowHeight = function() {
        return eval(Soulpour777.Vesperia.time_windowH);
    };

    Window_Time.prototype.refresh = function() {
        var x = this.textPadding();
        var width = this.contents.width - this.textPadding() * 2;
        this.contents.clear();
        this.drawTextEx(String($gameSystem.playtimeText()), 0, 0 );
    };

    Window_Time.prototype.open = function() {
        this.refresh();
        Window_Base.prototype.open.call(this);
    };

    $.prototype.createVesperiaWindowTime = function() {
        this._windowTime = new Window_Time();
        this._windowTime.x = eval(Soulpour777.Vesperia.time_windowX);
        this._windowTime.y = eval(Soulpour777.Vesperia.time_windowY);
        this._windowTime.opacity = eval(Soulpour777.Vesperia.time_windowOpacity);
        this.addChild(this._windowTime);
    }

    $.prototype.createVesperiaFrame = function() {
        this.vesperiaFrames = [];
        for (var i = 0; i < $gameParty.members().length; i++) {
            var x = new Sprite();
            x.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.frame_windowImage);
            x.x = eval(Soulpour777.Vesperia.frame_windowX) * i + 22;
            x.y = eval(Soulpour777.Vesperia.frame_windowY);
            this.vesperiaFrames.push(x);
            this.addChildAt(this.vesperiaFrames[i], 2);
        }
    }

    $.prototype.createVesperiaFrameGlass = function() {
        this.vesperiaFrameGlass = [];
        for (var i = 0; i < $gameParty.members().length; i++) {
            var x = new Sprite();
            x.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.framex_windowImage);
            x.x = eval(Soulpour777.Vesperia.framex_windowX) * i + 10;
            x.y = eval(Soulpour777.Vesperia.framex_windowY);
            this.vesperiaFrameGlass.push(x);
            this.addChildAt(this.vesperiaFrameGlass[i], 2);
        }
    }


    $.prototype.createVesperiaMenuHelp = function() {
        this.vesperiaHelp = new Sprite();
        this.vesperiaHelp.x = 0;
        this.vesperiaHelp.y = 0;
        this.addChild(this.vesperiaHelp);
    }

    $.prototype.update = function() {
        Scene_MenuBase.prototype.update.call(this);
        this._frameCount++;
        this._frameCount %= 20;
        var xvx = new Date().getTime() / this._cursor.width;
        
        this._vesperiaSprites = [this._vesperiaItem, this._vesperiaSkills, this._vesperiaEquip, this._vesperiaStatus, this._vesperiaFormation, this._vesperiaOptions, this._vesperiaSave, this._vesperiaEnd];
        this._windowTime.refresh();
        if (this._statusWindow.active) {
            this._cursor.opacity = 0;
            this._statusWindow._windowCursorSprite.opacity = 255;
            this._statusWindow._windowCursorSprite.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.cursorImage);
        } else {
            this._statusWindow._windowCursorSprite.opacity = 0;
            this._cursor.opacity = 255;
        }
        if (this._commandWindow.active) {
            this._statusWindow._windowCursorSprite.opacity = 0;
        }
        var x = (20 - this._frameCount) * 6;
        switch(this._commandWindow._index) {
            case 0:
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help1);
                this._vesperiaSprites[this._commandWindow._index + 1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 3].setColorTone([0, 0, 0, 0]);    
                this._vesperiaSprites[this._commandWindow._index + 4].setColorTone([0, 0, 0, 0]);   
                this._vesperiaSprites[this._commandWindow._index + 5].setColorTone([0, 0, 0, 0]);  
                this._vesperiaSprites[this._commandWindow._index + 6].setColorTone([0, 0, 0, 0]); 
                this._vesperiaSprites[this._commandWindow._index + 7].setColorTone([0, 0, 0, 0]); 
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);              
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);
                break;
            case 1:
                this._vesperiaSprites[this._commandWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 3].setColorTone([0, 0, 0, 0]);    
                this._vesperiaSprites[this._commandWindow._index + 4].setColorTone([0, 0, 0, 0]);   
                this._vesperiaSprites[this._commandWindow._index + 5].setColorTone([0, 0, 0, 0]);  
                this._vesperiaSprites[this._commandWindow._index + 6].setColorTone([0, 0, 0, 0]);              
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help2); 
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);           
                break;
            case 2:
                this._vesperiaSprites[this._commandWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 3].setColorTone([0, 0, 0, 0]);    
                this._vesperiaSprites[this._commandWindow._index + 4].setColorTone([0, 0, 0, 0]);   
                this._vesperiaSprites[this._commandWindow._index + 5].setColorTone([0, 0, 0, 0]);              
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help3);
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);
                break;
            case 3:
                this._vesperiaSprites[this._commandWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 3].setColorTone([0, 0, 0, 0]);    
                this._vesperiaSprites[this._commandWindow._index + 4].setColorTone([0, 0, 0, 0]);            
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help4);
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);
                break;
            case 4:
                this._vesperiaSprites[this._commandWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-3].setColorTone([0, 0, 0, 0]); 
                this._vesperiaSprites[this._commandWindow._index + 1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 3].setColorTone([0, 0, 0, 0]);                 
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help5);
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);
                break;
            case 5:
                this._vesperiaSprites[this._commandWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-3].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-4].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index + 2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help6);
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);
                break;
            case 6:
                this._vesperiaSprites[this._commandWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-3].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-4].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-5].setColorTone([0, 0, 0, 0]); 
                this._vesperiaSprites[this._commandWindow._index + 1].setColorTone([0, 0, 0, 0]);               
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help7);
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);
                break;
            case 7:
                this._vesperiaSprites[this._commandWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-2].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-3].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-4].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-5].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index-6].setColorTone([0, 0, 0, 0]);
                this._vesperiaSprites[this._commandWindow._index].setColorTone([x, x, x, 0]);
                this.vesperiaHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.help8);
                this._cursor.x = this._vesperiaSprites[this._commandWindow._index].x - 40;
                this._cursor.y = this._vesperiaSprites[this._commandWindow._index].y + (40 + Math.cos(parseFloat(xvx)) * 5);
                break;
        }
    }


    $.prototype.commandSkillX = function() {
        SceneManager.push(Scene_Skill);
    }

    $.prototype.commandEquipX = function() {
        SceneManager.push(Scene_Equip);
    }    

    $.prototype.commandStatusX = function() {
        SceneManager.push(Scene_Status);
    }    


    $.prototype.createVesperiaIcons = function() {
        this._vesperiaItem = new Sprite_Button();
        this._vesperiaItem.setClickHandler(this.commandItem.bind(this));
        this._vesperiaItem.x = eval(Soulpour777.Vesperia.menuItemButtonX);
        this._vesperiaItem.y = eval(Soulpour777.Vesperia.menuItemButtonY);
        this._vesperiaItem.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.menuItemButton);
        this.addChild(this._vesperiaItem);

        this._vesperiaSkills = new Sprite_Button();
        this._vesperiaSkills.setClickHandler(this.commandSkillX.bind(this));
        this._vesperiaSkills.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.skillItemButton);
        this.addChild(this._vesperiaSkills);
        this._vesperiaSkills.x = eval(Soulpour777.Vesperia.skillItemButtonX);
        this._vesperiaSkills.y = eval(Soulpour777.Vesperia.skillItemButtonY);

        this._vesperiaEquip = new Sprite_Button();
        this._vesperiaEquip.setClickHandler(this.commandEquipX.bind(this));
        this._vesperiaEquip.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.equipItemButton);
        this._vesperiaEquip.x = eval(Soulpour777.Vesperia.equipItemButtonX);        
        this._vesperiaEquip.y = eval(Soulpour777.Vesperia.equipItemButtonY);
        this.addChild(this._vesperiaEquip);        

        this._vesperiaStatus = new Sprite_Button();
        this._vesperiaStatus.setClickHandler(this.commandStatusX.bind(this));
        this._vesperiaStatus.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.statusItemButton);
        this._vesperiaStatus.x = eval(Soulpour777.Vesperia.statusItemButtonX);        
        this._vesperiaStatus.y = eval(Soulpour777.Vesperia.statusItemButtonY);
        this.addChild(this._vesperiaStatus);         
        

        this._vesperiaFormation = new Sprite_Button();
        this._vesperiaStatus.setClickHandler(this.commandFormation.bind(this));
        this._vesperiaFormation.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.formationItemButton);
        this._vesperiaFormation.x = eval(Soulpour777.Vesperia.formationItemButtonX);
        this._vesperiaFormation.y = eval(Soulpour777.Vesperia.formationItemButtonY);        
        this.addChild(this._vesperiaFormation);         

        this._vesperiaOptions = new Sprite_Button();
        this._vesperiaOptions.setClickHandler(this.commandOptions.bind(this));
        this._vesperiaOptions.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.optionsItemButton);
        this._vesperiaOptions.x = eval(Soulpour777.Vesperia.optionsItemButtonX);    
        this._vesperiaOptions.y = eval(Soulpour777.Vesperia.optionsItemButtonY);    
        this.addChild(this._vesperiaOptions);  

        this._vesperiaSave = new Sprite_Button();
        this._vesperiaSave.setClickHandler(this.commandSave.bind(this));
        this._vesperiaSave.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.saveItemButton);
        this._vesperiaSave.x = eval(Soulpour777.Vesperia.saveItemButtonX); 
        this._vesperiaSave.y = eval(Soulpour777.Vesperia.saveItemButtonY);       
        this.addChild(this._vesperiaSave);  

        this._vesperiaEnd = new Sprite_Button();
        this._vesperiaEnd.setClickHandler(this.commandGameEnd.bind(this));
        this._vesperiaEnd.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.endItemButton);
        this._vesperiaEnd.x = eval(Soulpour777.Vesperia.endItemButtonX);   
        this._vesperiaEnd.y = eval(Soulpour777.Vesperia.endItemButtonY);     
        this.addChild(this._vesperiaEnd);                  

    }

    $.prototype.createStatusWindow = function() {
        this._statusWindow = new Window_MenuStatus(Soulpour777.Vesperia.status_windowX, Soulpour777.Vesperia.status_windowY);
        this._statusWindow.opacity = eval(Soulpour777.Vesperia.status_windowOpacity);
        this.addChild(this._statusWindow);
    };

    var xScene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    $.prototype.createCommandWindow = function() {
        xScene_Menu_createCommandWindow.call(this);
        this._commandWindow.x = eval(Soulpour777.Vesperia.menu_windowX);
        this._commandWindow.y = eval(Soulpour777.Vesperia.menu_windowY);
        this.addChild(this._commandWindow);
    };    

    var xScene_Menu_createGoldWindow = Scene_Menu.prototype.createGoldWindow;
    $.prototype.createGoldWindow = function() {
        xScene_Menu_createGoldWindow.call(this);
        this._goldWindow.opacity = eval(Soulpour777.Vesperia.gold_windowOpacity);
        this.addChild(this._goldWindow);
    };  
})(Scene_Menu);

(function($){
    $.prototype.maxCols = function() {
        return eval(Soulpour777.Vesperia.menu_windowMaxCols);
    }

    $.prototype.windowWidth = function() {
        return eval(Soulpour777.Vesperia.menu_windowWidth);
    };


    $.prototype.numVisibleRows = function() {
        return 2;
    };

})(Window_MenuCommand);

(function($){
    function MenuParticleX() {
        this.initialize.apply(this, arguments);
    }

    MenuParticleX.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
    MenuParticleX.prototype.constructor = MenuParticleX;

    MenuParticleX.prototype.initialize = function() {
        PIXI.DisplayObjectContainer.call(this);

        this._width = Graphics.width;
        this._height = Graphics.height;
        this._sprites = [];

        this._createBitmaps();


        this.type = 'snow';


        this.power = 10;

        this.origin = new Point();
    };


    MenuParticleX.prototype.update = function() {
        this._updateAllSprites();
    };


    MenuParticleX.prototype._createBitmaps = function() {
        this._snowBitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.particle);
    };


    MenuParticleX.prototype._updateDimmer = function() {
        this._dimmerSprite.opacity = Math.floor(this.power * 6);
    };
    MenuParticleX.prototype._updateAllSprites = function() {
        var maxSprites = Math.floor(this.power * 10);
        while (this._sprites.length < maxSprites) {
            this._addSprite();
        }
        while (this._sprites.length > maxSprites) {
            this._removeSprite();
        }
        this._sprites.forEach(function(sprite) {
            this._updateSprite(sprite);
            sprite.x = sprite.ax - this.origin.x;
            sprite.y = sprite.ay - this.origin.y;
        }, this);
    };

    MenuParticleX.prototype._addSprite = function() {
        var sprite = new Sprite(this.viewport);
        sprite.opacity = 0;
        this._sprites.push(sprite);
        this.addChild(sprite);
    };


    MenuParticleX.prototype._removeSprite = function() {
        this.removeChild(this._sprites.pop());
    };


    MenuParticleX.prototype._updateSprite = function(sprite) {
        switch (this.type) {
        case 'snow':
            this._updateSnowSprite(sprite);
            break;
        }
        if (sprite.opacity < 40) {
            this._rebornSprite(sprite);
        }
    };


    MenuParticleX.prototype._updateSnowSprite = function(sprite) {
        sprite.bitmap = this._snowBitmap;
        sprite.rotation = Math.PI / 16;
        sprite.ax -= Soulpour777.Vesperia.pX * Math.sin(sprite.rotation);
        sprite.ay -= Soulpour777.Vesperia.pY * Math.cos(sprite.rotation);
        sprite.opacity -= 3;
    };

    MenuParticleX.prototype._rebornSprite = function(sprite) {
        sprite.ax = Math.randomInt(Graphics.width + 100) - 100 + this.origin.x;
        sprite.ay = Math.randomInt(Graphics.height + 200) - 200 + this.origin.y;
        sprite.opacity = 160 + Math.randomInt(60);
    };    
    $.prototype.createParticles = function() {
        this.particles = new MenuParticleX();
        this.addChildAt(this.particles,1);
    }   
})(Scene_MenuBase);


(function($){
    var _Window_MenuActor_initialize = Window_MenuActor.prototype.initialize;
    $.prototype.initialize = function() {
        _Window_MenuActor_initialize.call(this);
        this.y = this.fittingHeight(2);
    };    
    $.prototype._refreshCursor = function() {
        var pad = this._padding;
        var x = this._cursorRect.x + pad - this.origin.x;
        var y = this._cursorRect.y + pad - this.origin.y;
        var w = this._cursorRect.width;
        var h = this._cursorRect.height;
        var m = 4;
        var x2 = Math.max(x, pad);
        var y2 = Math.max(y, pad);
        var ox = x - x2;
        var oy = y - y2;
        var w2 = Math.min(w, this._width - pad - x2);
        var h2 = Math.min(h, this._height - pad - y2);
        var bitmap = new Bitmap(w2, h2);

        this._windowCursorSprite.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.cursorImage);

        this._windowCursorSprite.setFrame(0, 0, w2, h2);
        this._windowCursorSprite.move(x2, y2);

        if (w > 0 && h > 0 && this._windowskin) {
            var skin = this._windowskin;
            var p = 96;
            var q = 48;
            bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
            bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
            bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
            bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
            bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
            bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
            bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
            bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
            bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
        }
    };     
    $.prototype._updateCursor = function() {
        var blinkCount = 0;
        var cursorOpacity = this.contentsOpacity;
        var xvx = new Date().getTime() / this._windowCursorSprite.width;
        if (this.active) {
            if (blinkCount < 20) {
                cursorOpacity -= blinkCount * 8;
                cursorOpacity -= blinkCount * 8;
                this._windowCursorSprite.y = 20 + Math.cos(parseFloat(xvx)) * 5;                
            } else {
                cursorOpacity -= (40 - blinkCount) * 8;
            }
        }
        this._windowCursorSprite.alpha = cursorOpacity / 255;
        this._windowCursorSprite.visible = this.isOpen();
    };      
})(Window_MenuActor);

(function($){
    function Window_HelpX() {
        this.initialize.apply(this, arguments);
    }

    Window_HelpX.prototype = Object.create(Window_Base.prototype);
    Window_HelpX.prototype.constructor = Window_HelpX;

    Window_HelpX.prototype.initialize = function(numLines) {
        var width = Graphics.boxWidth;
        var height = this.fittingHeight(numLines || 2);
        Window_Base.prototype.initialize.call(this, 0, 0, width, height);
        this._text = '';
        this.iconImage = new Sprite();
        this.addChild(this.iconImage);
    };

    Window_HelpX.prototype.windowWidth = function() {
        return Graphics.width;
    }

    Window_HelpX.prototype.windowHeight = function() {
        return Graphics.height;
    }

    Window_HelpX.prototype.setText = function(text) {
        if (this._text !== text) {
            this._text = text;
            this.refresh();
        }
    };

    Window_HelpX.prototype.clear = function() {
        this.setText('');
    };

    Window_HelpX.prototype.setItem = function(item) {
        this.setText(item ? item.description : '');  
    };

    Window_HelpX.prototype.refresh = function() {
        this.contents.clear();
        this.drawTextEx(this._text, this.textPadding(), 0);
    };    

    $.prototype.initialize = function() {
        Scene_ItemBase.prototype.initialize.call(this);
        this._frameCount = 0;
    };    

    $.prototype.createActorWindow = function() {
        if (eval(Soulpour777.Vesperia.useItemScene)) {
            this._actorWindow = new Window_MenuActor();
            this._actorWindow.setHandler('ok',     this.onActorOk.bind(this));
            this._actorWindow.setHandler('cancel', this.onActorCancel.bind(this));
            this._actorWindow.opacity = 0;
            this.addChildAt(this._actorWindow, 5);
        } else {
            Scene_ItemBase.prototype.createActorWindow.call(this);
        }
    };
    Soulpour777.Vesperia.Scene_Item_create = Scene_Item.prototype.create;
    $.prototype.create = function() {
        Soulpour777.Vesperia.Scene_Item_create.call(this);
        this._allIconsItems = [];
        if (eval(Soulpour777.Vesperia.useItemScene))this.createItemDescriptionBox();
        if (eval(Soulpour777.Vesperia.useItemScene))this.createItemLabel();
        if (eval(Soulpour777.Vesperia.useItemScene))this.createItemCategoryIcons();
        if (eval(Soulpour777.Vesperia.useItemScene))this.createOperationImage();
        if (eval(Soulpour777.Vesperia.useItemScene))this.createParticles();
    };    

    $.prototype.createItemCategoryIcons = function() {
        this._itemCategoryIcon = new Sprite();
        this._itemCategoryIcon.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.categoryImg1);
        this._itemCategoryIcon.x = Soulpour777.Vesperia.categoryImg1X;
        this._itemCategoryIcon.y = Soulpour777.Vesperia.categoryImg1Y;
        this._allIconsItems.push(this._itemCategoryIcon);
        this.addChild(this._itemCategoryIcon);
        this._weaponCategoryIcon = new Sprite();
        this._weaponCategoryIcon.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.categoryImg2);
        this._weaponCategoryIcon.x = Soulpour777.Vesperia.categoryImg2X;
        this._weaponCategoryIcon.y = Soulpour777.Vesperia.categoryImg2Y;
        this._allIconsItems.push(this._weaponCategoryIcon);
        this.addChild(this._weaponCategoryIcon);
        this._armorCategoryIcon = new Sprite();
        this._armorCategoryIcon.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.categoryImg3);
        this._armorCategoryIcon.x = Soulpour777.Vesperia.categoryImg3X;
        this._armorCategoryIcon.y = Soulpour777.Vesperia.categoryImg3Y;
        this._allIconsItems.push(this._armorCategoryIcon);
        this.addChild(this._armorCategoryIcon);
        this._keyCategoryIcon = new Sprite();
        this._keyCategoryIcon.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.categoryImg4);
        this._keyCategoryIcon.x = Soulpour777.Vesperia.categoryImg4X;
        this._keyCategoryIcon.y = Soulpour777.Vesperia.categoryImg4Y;
        this._allIconsItems.push(this._keyCategoryIcon);
        this.addChild(this._keyCategoryIcon);                       
    }    

    $.prototype.updateItemIcons = function(){
        this._frameCount++;
        this._frameCount %= 20;
        var x = (20 - this._frameCount) * 6;

        switch(this._categoryWindow._index) {
            case 0: // Items
                this._allIconsItems[this._categoryWindow._index].setColorTone([x, x, x, 0]);
                this._allIconsItems[this._categoryWindow._index+1].setColorTone([0, 0, 0, 0]);
                this._allIconsItems[this._categoryWindow._index+2].setColorTone([0, 0, 0, 0]);
                this._allIconsItems[this._categoryWindow._index+3].setColorTone([0, 0, 0, 0]);
                break;
            case 1: // Weapons
                this._allIconsItems[this._categoryWindow._index].setColorTone([x, x, x, 0]);
                this._allIconsItems[this._categoryWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._allIconsItems[this._categoryWindow._index+1].setColorTone([0, 0, 0, 0]);
                break;
            case 2: //Armors
                this._allIconsItems[this._categoryWindow._index].setColorTone([x, x, x, 0]);
                this._allIconsItems[this._categoryWindow._index-1].setColorTone([0, 0, 0, 0]);
                this._allIconsItems[this._categoryWindow._index+1].setColorTone([0, 0, 0, 0]);
                break;
            case 3: //Key Items
                this._allIconsItems[this._categoryWindow._index].setColorTone([x, x, x, 0]);
                this._allIconsItems[this._categoryWindow._index-3].setColorTone([0, 0, 0, 0]);
                this._allIconsItems[this._categoryWindow._index-2].setColorTone([0, 0, 0, 0]);
                this._allIconsItems[this._categoryWindow._index-1].setColorTone([0, 0, 0, 0]);
                break;                                                
        }        
    }


    $.prototype.update = function() {
        Scene_ItemBase.prototype.update.call(this); 
        if (eval(Soulpour777.Vesperia.useItemScene)) {
            this.updateItemIcons();
        }
    }

    $.prototype.createItemDescriptionBox = function() {
        this._itemDescBox = new Sprite();
        this._itemDescBox.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.itemdesc);
        this._itemDescBox.x = Soulpour777.Vesperia.itemdescX;
        this._itemDescBox.y = Soulpour777.Vesperia.itemdescY;
        this.addChildAt(this._itemDescBox,1);
    }

    $.prototype.createItemLabel = function() {
        this._itemLbl = new Sprite();
        this._itemLbl.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.itemLabel);
        this._itemLbl.x = Soulpour777.Vesperia.itemLabelX;
        this._itemLbl.y = Soulpour777.Vesperia.itemLabelY;
        this.addChildAt(this._itemLbl,1);
    }     
    Soulpour777.Vesperia.Scene_Item_createCategoryWindow = Scene_Item.prototype.createCategoryWindow;
    $.prototype.createCategoryWindow = function() {
        Soulpour777.Vesperia.Scene_Item_createCategoryWindow.call(this);
        if (eval(Soulpour777.Vesperia.useItemScene)) {
            this._categoryWindow.width = Soulpour777.Vesperia.commandWidth;         
            this._categoryWindow.x = Soulpour777.Vesperia.commandX;
            this._categoryWindow.y = Soulpour777.Vesperia.commandY;
            this._categoryWindow.opacity = Soulpour777.Vesperia.commandOpacity;
            this.addChild(this._categoryWindow);   
        }

    };    


    $.prototype.createOperationImage = function() {
        this._operationImageItem = new Sprite();
        this._operationImageItem.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.itemLabelOP);
        this._operationImageItem.x = Soulpour777.Vesperia.itemLabelOPX;
        this._operationImageItem.y = Soulpour777.Vesperia.itemLabelOPY;
        this.addChild(this._operationImageItem);
    }

    Soulpour777.Vesperia.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
    $.prototype.createItemWindow = function() {
        Soulpour777.Vesperia.Scene_Item_createItemWindow.call(this);
        if (eval(Soulpour777.Vesperia.useItemScene)) { 
            this._itemWindow = new Window_ItemList(Soulpour777.Vesperia.itemWindowX, Soulpour777.Vesperia.itemWindowY, eval(Soulpour777.Vesperia.itemWindowW), eval(Soulpour777.Vesperia.itemWindowH));
            this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
            this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));            
            this._itemWindow.opacity = Soulpour777.Vesperia.itemWindowO;
            this._itemWindow.setHelpWindow(this._helpWindow);
            this.addChild(this._itemWindow);
            this._categoryWindow.setItemWindow(this._itemWindow);
        }

    };

    $.prototype.createHelpWindow = function() {
        if (eval(Soulpour777.Vesperia.useItemScene)) { 
            this._helpWindow = new Window_HelpX();
            this._helpWindow.x = Soulpour777.Vesperia.itemHelpX;
            this._helpWindow.y = Soulpour777.Vesperia.itemHelpY;
            this._helpWindow.opacity = Soulpour777.Vesperia.itemHelpO;
            this.addChild(this._helpWindow);
        } else {
            Scene_MenuBase.prototype.createHelpWindow.call(this);
        }

    };    
})(Scene_Item);


Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = eval(Soulpour777.Vesperia.bgx);
    this.addChild(this._backgroundSprite);
};


(function($){
    function Window_SkillStatusEx() {
        this.initialize.apply(this, arguments);
    }

    Window_SkillStatusEx.prototype = Object.create(Window_Base.prototype);
    Window_SkillStatusEx.prototype.constructor = Window_SkillStatusEx;

    Window_SkillStatusEx.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this._actor = null;
    };

    Window_SkillStatusEx.prototype.setActor = function(actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
        }
    };

    Window_SkillStatusEx.prototype.refresh = function() {
        this.contents.clear();
        if (this._actor) {
            var w = this.width - this.padding * 2;
            var h = this.height - this.padding * 2;
            var y = h / 2 - this.lineHeight() * 1.5;
            var width = w - 162 - this.textPadding();
            this.drawActorFace(this._actor, 80, 0, 144, h);
            this.drawActorSimpleStatus(this._actor, 162, y, width);
        }
    };

    Window_SkillStatusEx.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
        var lineHeight = this.lineHeight();
        var x2 = x + 180;
        var width2 = Math.min(200, width - 180 - this.textPadding());
        this.drawActorName(actor, 0, y);
        this.drawActorHpx(actor, 0, y + lineHeight * 2, 100);
        this.drawActorMpx(actor, x, y + lineHeight * 2, 100);
    };

    Soulpour777.Vesperia.Scene_Equip_create = Scene_Equip.prototype.create;
    $.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this._frameCount = 0;
        this._statusCounter = 0;
        if(eval(Soulpour777.Vesperia.useEquipScene)) {
            this.createHelpWindow();
            this.createStatusWindow();
            this.createStatusWindowEx();
            this.createCommandWindow();
            this.createSlotWindow();
            this.createItemWindow();
            this.createEquipSceneLabel();
            this.createProfileScroll();
            this.createStatusBox();
            this.createSlotBox();
            this.createItemDescriptionBox();
            this.createAvailableActors();
            this.createEquipCommandBox();
            this.refreshActor();   
        } else {
            Soulpour777.Vesperia.Scene_Equip_create.call(this);
        }

    };    

    $.prototype.createEquipCommandBox = function() {
        this.equipSceneEquipCommandBox = new Sprite();
        this.equipSceneEquipCommandBox.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.cmdEquipBox);
        this.equipSceneEquipCommandBox.x = Soulpour777.Vesperia.cmdEquipBoxX;
        this.equipSceneEquipCommandBox.y = Soulpour777.Vesperia.cmdEquipBoxY;
        this.addChildAt(this.equipSceneEquipCommandBox, 1);
    }

    $.prototype.nextActor = function() {
        var actor = this.actor();
        $gameParty.makeMenuActorNext(); 
        this._statusCounter++; 
        this.updateActor();
        this.onActorChange();
    };

    $.prototype.previousActor = function() {
        $gameParty.makeMenuActorPrevious();
        this._statusCounter--;
        this.updateActor();
        this.onActorChange();
        var actor = this.actor();      
    };
    $.prototype.createEquipSceneLabel = function() {
        this.equipSceneLabel = new Sprite();
        this.equipSceneLabel.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.lbEquipBox);
        this.equipSceneLabel.x = Soulpour777.Vesperia.lbEquipBoxX;
        this.equipSceneLabel.y = Soulpour777.Vesperia.lbEquipBoxY;
        this.addChild(this.equipSceneLabel);
    }

    $.prototype.createProfileScroll = function() {
        this.equipSceneProfScroll = new Sprite();
        this.equipSceneProfScroll.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.prEquipBox);
        this.equipSceneProfScroll.x = Soulpour777.Vesperia.prEquipBoxX;
        this.equipSceneProfScroll.y = Soulpour777.Vesperia.prEquipBoxY;
        this.addChildAt(this.equipSceneProfScroll, 2);
    }

    $.prototype.createStatusBox = function() {
        this.equipSceneStatusBox = new Sprite();
        this.equipSceneStatusBox.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.statE);
        this.equipSceneStatusBox.x = Soulpour777.Vesperia.statEX;
        this.equipSceneStatusBox.y = Soulpour777.Vesperia.statEY;
        this.addChildAt(this.equipSceneStatusBox, 2);
    }

    $.prototype.createItemDescriptionBox = function() {
        this._itemDescBox = new Sprite();
        this._itemDescBox.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.descEq);
        this._itemDescBox.x = Soulpour777.Vesperia.descEqX;
        this._itemDescBox.y = Soulpour777.Vesperia.descEqY;
        this.addChildAt(this._itemDescBox,1);
    }    

    $.prototype.createSlotBox = function() {
        this.equipSceneSlotBox = new Sprite();
        this.equipSceneSlotBox.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.statSlotE);
        this.equipSceneSlotBox.x = Soulpour777.Vesperia.statSlotEX;
        this.equipSceneSlotBox.y = Soulpour777.Vesperia.statSlotEY;
        this.addChildAt(this.equipSceneSlotBox, 2);
    }

    $.prototype.createAvailableActors = function() {
        this._availableActors = [];
        for (var i = 0; i < $gameParty.members().length; i++) {
            var sprite = new Sprite();
            sprite.bitmap = ImageManager.loadVesperia($gameParty.members()[i]._actorId);
            sprite.x = 430 + (i * 40);
            sprite.y = 35;
            this._availableActors.push(sprite);
            this.addChild(this._availableActors[i]);
        }
    }

    $.prototype.update = function() {
        Scene_MenuBase.prototype.update.call(this);
        this._frameCount++;
        this._frameCount %= 20;
        

        if (this._slotWindow.active) {
            this._slotWindow._windowCursorSprite.opacity = 255;
        } else {
            this._slotWindow._windowCursorSprite.opacity = 0;
        }

        if (this._commandWindow.active) {
            this._slotWindow._windowCursorSprite.opacity = 0;
        }

        if(eval(Soulpour777.Vesperia.useEquipScene))this.updateAction();
    }

    $.prototype.updateAction = function() {
        var actor = this.actor();      
        var x = (20 - this._frameCount) * 6;
        switch(this.actor()._actorId) {
            case 1:
                this._availableActors[0].setColorTone([x, x, x, 0]);
                for (var i = 1; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }            
                break;
            case 2:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([x, x, x, 0]);
                for (var i = 2; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }            
                break;
            case 3:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([x, x, x, 0]);
                for (var i = 3; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }  
                break;
            case 4:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([x, x, x, 0]);
                for (var i = 4; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }              
                break;
            case 5:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([x, x, x, 0]);
                for (var i = 5; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }             
                break;
            case 6:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([x, x, x, 0]);
                for (var i = 6; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }             
                break;
            case 7:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([x, x, x, 0]);
                for (var i = 7; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }              
                break;
            case 8:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([0, 0, 0, 0]);
                this._availableActors[7].setColorTone([x, x, x, 0]);
                for (var i = 8; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }               
                break;
            case 9:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([0, 0, 0, 0]);
                this._availableActors[7].setColorTone([0, 0, 0, 0]);
                this._availableActors[8].setColorTone([x, x, x, 0]);
                for (var i = 9; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }               
                break;                                                                                                                                                                                                                                                                                                                              
        }         
    }

    Soulpour777.Vesperia.Scene_Equip_createStatusWindow = Scene_Equip.prototype.createStatusWindow;
    $.prototype.createStatusWindow = function() {
        
        if(eval(Soulpour777.Vesperia.useEquipScene)) {
            this._statusWindow = new Window_EquipStatus();
            this._statusWindow.x = Soulpour777.Vesperia.sEquipBoxX;
            this._statusWindow.y = Soulpour777.Vesperia.sEquipBoxY;
            this._statusWindow.width = eval(Soulpour777.Vesperia.sEquipBoxW);
            this._statusWindow.height = eval(Soulpour777.Vesperia.sEquipBoxH);
            this._statusWindow.opacity = Soulpour777.Vesperia.sEquipBoxO;
            this.addChild(this._statusWindow);
        } else {
            Soulpour777.Vesperia.Scene_Equip_createStatusWindow.call(this);
        }

    };

    Soulpour777.Vesperia.Scene_Equip_createCommandWindow = Scene_Equip.prototype.createCommandWindow;
    $.prototype.createCommandWindow = function() {
        
        if(eval(Soulpour777.Vesperia.useEquipScene)) {
            Soulpour777.Vesperia.Scene_Equip_createCommandWindow.call(this);
            var wx = Soulpour777.Vesperia.sxEquipBoxX;
            var wy = Soulpour777.Vesperia.sxEquipBoxY;
            var ww = eval(Soulpour777.Vesperia.sxEquipBoxW);          
            this._commandWindow.x = wx;
            this._commandWindow.y = wy;
            this._commandWindow.width = ww;
            this._commandWindow.opacity = Soulpour777.Vesperia.sxEquipBoxO;
            this.addChildAt(this._commandWindow, 4);
        } else {
            Soulpour777.Vesperia.Scene_Equip_createCommandWindow.call(this);
        }

    };

    Soulpour777.Vesperia.Scene_Equip_createSlotWindow = Scene_Equip.prototype.createSlotWindow;
    $.prototype.createSlotWindow = function() {
        

        if(eval(Soulpour777.Vesperia.useEquipScene)) {
            var wx = 312;
            var wy = 80;
            var ww = 504;
            var wh = 216;
            Soulpour777.Vesperia.Scene_Equip_createSlotWindow.call(this);
            this._slotWindow.setHelpWindow(this._helpWindow);
            this._slotWindow.setStatusWindow(this._statusWindow);           
            this._slotWindow.x = wx;
            this._slotWindow.y = wy;
            this._slotWindow.width = ww;
            this._slotWindow.height = wh;
            this._slotWindow.opacity = 0;
            this.addChild(this._slotWindow);

        } else {
            Soulpour777.Vesperia.Scene_Equip_createSlotWindow.call(this);
        }

    };
    Soulpour777.Vesperia.Scene_Equip_createItemWindow = Scene_Equip.prototype.createItemWindow;
    $.prototype.createItemWindow = function() {
        

        if(eval(Soulpour777.Vesperia.useEquipScene)) {
            var wx = 312;
            var wy = 362;
            var ww = 505;
            var wh = 152;
            Soulpour777.Vesperia.Scene_Equip_createItemWindow.call(this);
            this._itemWindow.setHelpWindow(this._helpWindow);
            this._itemWindow.setStatusWindow(this._statusWindow);
            this._slotWindow.setItemWindow(this._itemWindow);            
            this._itemWindow.x = wx;
            this._itemWindow.y = wy;
            this._itemWindow.width = ww;
            this._itemWindow.height = wh;
            this._itemWindow.opacity = 0;
            this.addChild(this._itemWindow);
        } else {
            Soulpour777.Vesperia.Scene_Equip_createItemWindow.call(this);
        }

    };

    $.prototype.createStatusWindowEx = function() {
        var wx = 0;
        var wy = 80;
        var ww = 312;
        var wh = 150;
        this._statusWindowEx = new Window_SkillStatusEx(wx, wy, ww, wh);
        this._statusWindowEx.opacity = 0;
        this.addChild(this._statusWindowEx);
    };    


    Soulpour777.Vesperia.Scene_Equip_refreshActor = Scene_Equip.prototype.refreshActor;
    $.prototype.refreshActor = function() {
        var actor = this.actor();
        Soulpour777.Vesperia.Scene_Equip_refreshActor.call(this);
        if(eval(Soulpour777.Vesperia.useEquipScene))this._statusWindowEx.setActor(actor);
    };


    $.prototype.createHelpWindow = function() {
        if(eval(Soulpour777.Vesperia.useEquipScene)) {
            this._helpWindow = new Window_Help();
            this._helpWindow.x = 0;
            this._helpWindow.y = 515;
            this._helpWindow.opacity = 0;
            this.addChild(this._helpWindow);
        } else {
        this._helpWindow = new Window_Help();
            this.addWindow(this._helpWindow);            
        }

    };    
})(Scene_Equip);

(function() {

    Window_Gold.prototype.refresh = function() {
        var x = this.textPadding();
        var width = this.contents.width - this.textPadding() * 2;
        this.contents.clear();
        this.drawTextEx(String($gameParty.gold()), x, 0);
    };

    Game_BattlerBase.prototype.exRate = function() {
        return this.mmp > 0 ? this.mp / this.mmp : 0;
    };

    Window_ItemList.prototype.initialize = function(x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this._category = 'none';
        this._data = [];
    };     


    Window_EquipCommand.prototype._refreshCursor = function() {
        var pad = this._padding;
        var x = this._cursorRect.x + pad - this.origin.x;
        var y = this._cursorRect.y + pad - this.origin.y;
        var w = this._cursorRect.width;
        var h = this._cursorRect.height;
        var m = 4;
        var x2 = Math.max(x, pad);
        var y2 = Math.max(y, pad);
        var ox = x - x2;
        var oy = y - y2;
        var w2 = Math.min(w, this._width - pad - x2);
        var h2 = Math.min(h, this._height - pad - y2);
        var bitmap = new Bitmap(w2, h2);

        this._windowCursorSprite.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.cursorImageX);

        this._windowCursorSprite.setFrame(0, 0, w2, h2);
        this._windowCursorSprite.move(x2, y2);

        if (w > 0 && h > 0 && this._windowskin) {
            var skin = this._windowskin;
            var p = 96;
            var q = 48;
            bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
            bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
            bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
            bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
            bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
            bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
            bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
            bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
            bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
        }
    };  


    Window_EquipCommand.prototype._updateCursor = function() {
        var blinkCount = 0;
        var cursorOpacity = this.contentsOpacity;
        var xvx = new Date().getTime() / this._windowCursorSprite.width;
        if (this.active) {
            if (blinkCount < 20) {
                cursorOpacity -= blinkCount * 8;
                cursorOpacity -= blinkCount * 8;
                 this._windowCursorSprite.x + 10;
                this._windowCursorSprite.y = 40 + Math.cos(parseFloat(xvx)) * 5;                
            } else {
                cursorOpacity -= (40 - blinkCount) * 8;
            }
        }
        this._windowCursorSprite.alpha = cursorOpacity / 255;
        this._windowCursorSprite.visible = this.isOpen();
    };

    Window_EquipSlot.prototype._refreshCursor = function() {
        var pad = this._padding;
        var x = this._cursorRect.x + pad - this.origin.x;
        var y = this._cursorRect.y + pad - this.origin.y;
        var w = this._cursorRect.width;
        var h = this._cursorRect.height;
        var m = 4;
        var x2 = Math.max(x, pad);
        var y2 = Math.max(y, pad);
        var ox = x - x2;
        var oy = y - y2;
        var w2 = Math.min(w, this._width - pad - x2);
        var h2 = Math.min(h, this._height - pad - y2);
        var bitmap = new Bitmap(w2, h2);

        if (SceneManager._scene instanceof Scene_Equip) {
            if (!SceneManager._scene._commandWindow.active) {
                this._windowCursorSprite.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.cursorImageX);
            } else {
                this._windowCursorSprite.bitmap = ImageManager.loadVesperia(null);
            }
        }

        

        this._windowCursorSprite.setFrame(0, 0, w2, h2);
        this._windowCursorSprite.move(x2 - 20, y2 + 10);

        if (w > 0 && h > 0 && this._windowskin) {
            var skin = this._windowskin;
            var p = 96;
            var q = 48;
            bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
            bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
            bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
            bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
            bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
            bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
            bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
            bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
            bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
        }
    }; 

    Soulpour777.Vesperia.Window_Status_refresh = Window_Status.prototype.refresh;
    Window_Status.prototype.refresh = function() {
        if(eval(Soulpour777.Vesperia.useStatusScene)) {
            this.contents.clear();
            if (this._actor) {
                var lineHeight = this.lineHeight();
                this.drawBlock1(lineHeight * 2);
                // this.drawHorzLine(lineHeight * 1);
                this.drawBlock2(lineHeight * 7);
                // this.drawHorzLine(lineHeight * 6);
                this.drawBlock3(lineHeight * 7);
                // this.drawHorzLine(lineHeight * 13);
                // this.drawBlock4(lineHeight * 14);
            } 
        } else {
            Soulpour777.Vesperia.Window_Status_refresh.call(this);
        }

    };

    Soulpour777.Vesperia.Window_Status_drawBlock3 = Window_Status.prototype.drawBlock3;
    Window_Status.prototype.drawBlock3 = function(y) {
        if(eval(Soulpour777.Vesperia.useStatusScene)) {
            this.drawParameters(220, y);
        } else {
            Soulpour777.Vesperia.Window_Status_drawBlock3.call(this, y);
        }
        
    };

    Soulpour777.Vesperia.Window_Status_drawBlock1 = Window_Status.prototype.drawBlock1;
    Window_Status.prototype.drawBlock1 = function(y) {
        if(eval(Soulpour777.Vesperia.useStatusScene)) {
            this.drawTextEx('Name', 6, y + 30);
            this.drawTextEx('Class', 6, 150);
            this.drawTextEx('Nickname', 6, 200);
            this.drawActorName(this._actor, 150, y + 30);
            this.drawActorClass(this._actor, 150, 150);
            this.drawActorNickname(this._actor, 150, 200);
            this.drawEquipments(390, y);
        } else {
            Soulpour777.Vesperia.Window_Status_drawBlock1.call(this, y);
        }

    };

    Soulpour777.Vesperia.Window_Status_drawBlock2 = Window_Status.prototype.drawBlock2;
    Window_Status.prototype.drawBlock2 = function(y) {
        if(eval(Soulpour777.Vesperia.useStatusScene)) {
            this.drawBasicInfo(12, y);
            this.drawExpInfo(12, y + 210);
        } else {
            Soulpour777.Vesperia.Window_Status_drawBlock2.call(this, y);
        }

    };   

    Soulpour777.Vesperia.Window_Status_drawExpInfo = Window_Status.prototype.drawExpInfo;
    Window_Status.prototype.drawExpInfo = function(x, y) {
        if(eval(Soulpour777.Vesperia.useStatusScene)) {
            var lineHeight = this.lineHeight();
            var expTotal = TextManager.expTotal.format(TextManager.exp);
            var expNext = TextManager.expNext.format(TextManager.level);
            var value1 = this._actor.currentExp();
            var value2 = this._actor.nextRequiredExp();
            if (this._actor.isMaxLevel()) {
                value1 = '-------';
                value2 = '-------';
            }
            this.changeTextColor(this.systemColor());
            this.drawText(expTotal, x, y + lineHeight * 0, 270);
            this.resetTextColor();
            this.drawText(value1, x, y + lineHeight * 1, 270, 'left');
        } else {
            Soulpour777.Vesperia.Window_Status_drawExpInfo.call(this, x , y);
        }

    };

    Soulpour777.Vesperia.Window_Status_drawBasicInfo = Window_Status.prototype.drawBasicInfo;
    Window_Status.prototype.drawBasicInfo = function(x, y) {
        if(eval(Soulpour777.Vesperia.useStatusScene)) {
            var lineHeight = this.lineHeight();
            this.drawActorLevel(this._actor, x, y + lineHeight * 0);
            this.drawActorIcons(this._actor, x, y + lineHeight * 1);
            this.drawActorHp(this._actor, x, y + lineHeight * 2);
            this.drawActorMp(this._actor, x, y + lineHeight * 3 + 10);
            this.drawActorTpX(this._actor, x, y + lineHeight * 4 + 20);
        } else {
            Soulpour777.Vesperia.Window_Status_drawBasicInfo.call(this, x, y);
        }

    };

    Window_Status.prototype.drawActorTpX = function(actor, x, y, width) {
        width = width || 186;
        var color1 = this.tpGaugeColor1();
        var color2 = this.tpGaugeColor2();
        this.drawGaugeTP(x - 5, y, width, actor.tpRate(), color1, color2);
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.tpA, x , y, 44);
        this.drawCurrentAndMax(actor.tp, 100, x - 15, y, width,
                               this.tpColor(actor), this.normalColor());
    };


    Soulpour777.Vesperia.Scene_Status_create = Scene_Status.prototype.create;
    Scene_Status.prototype.create = function() {
        Soulpour777.Vesperia.Scene_Status_create.call(this);
        if(eval(Soulpour777.Vesperia.useStatusScene)) {
            this._statusWindow.opacity = 0;
            this._statusBust = new Sprite();
            this._statusBust.x = 450;
            this._statusBust.y = 150;
            this.addChildAt(this._statusBust, 1);
            this._frameCount = 0;
            this._statusCounter = 0;
            this.createParticles();
            this.createStatusHelpLabel();
            this.createAvailableActors();
            this.createOperationImage();
        }
    };

    Scene_Status.prototype.createOperationImage = function() {
        this._operationImage = new Sprite();
        this._operationImage.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.xxa);
        this._operationImage.x = Soulpour777.Vesperia.xxaX;
        this._operationImage.y = Soulpour777.Vesperia.xxaY;
        this.addChild(this._operationImage);
    }

    Scene_Status.prototype.createAvailableActors = function() {
        this._availableActors = [];
        for (var i = 0; i < $gameParty.members().length; i++) {
            var sprite = new Sprite();
            sprite.bitmap = ImageManager.loadVesperia($gameParty.members()[i]._actorId);
            sprite.x = 330 + (i * 40);
            sprite.y = 25;
            this._availableActors.push(sprite);
            this.addChild(this._availableActors[i]);
        }
    }


    Scene_GameEnd.prototype.createGameEndLabel = function() {
        this._gameEndLabel = new Sprite();
        this._gameEndLabel.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.endLabel);
        this._gameEndLabel.x = Soulpour777.Vesperia.endLabelX;
        this._gameEndLabel.y = Soulpour777.Vesperia.endLabelY;
        this.addChild(this._gameEndLabel);
    }    

    Scene_Status.prototype.createStatusHelpLabel = function() {
        this._statusHelp = new Sprite();
        this._statusHelp.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.statusLabel);
        this._statusHelp.x = Soulpour777.Vesperia.statusLabelX;
        this._statusHelp.y = Soulpour777.Vesperia.statusLabelY;
        this.addChild(this._statusHelp);
    }

    Scene_Status.prototype.update = function() {
        Scene_MenuBase.prototype.update.call(this);
        if(eval(Soulpour777.Vesperia.useStatusScene))this.updateAvailableActors();
    }

    Scene_Status.prototype.updateAvailableActors = function() {
        this._frameCount++;
        this._frameCount %= 20;
        var x = (20 - this._frameCount) * 6;
        var actor = this.actor();      
        this._statusBust.bitmap = ImageManager.loadVesperia(actor._name);
        switch(this.actor()._actorId) {
            case 1:
                this._availableActors[0].setColorTone([x, x, x, 0]);
                for (var i = 1; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }            
                break;
            case 2:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([x, x, x, 0]);
                for (var i = 2; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }            
                break;
            case 3:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([x, x, x, 0]);
                for (var i = 3; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }  
                break;
            case 4:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([x, x, x, 0]);
                for (var i = 4; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }              
                break;
            case 5:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([x, x, x, 0]);
                for (var i = 5; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }             
                break;
            case 6:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([x, x, x, 0]);
                for (var i = 6; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }             
                break;
            case 7:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([x, x, x, 0]);
                for (var i = 7; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }              
                break;
            case 8:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([0, 0, 0, 0]);
                this._availableActors[7].setColorTone([x, x, x, 0]);
                for (var i = 8; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }               
                break;
            case 9:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([0, 0, 0, 0]);
                this._availableActors[7].setColorTone([0, 0, 0, 0]);
                this._availableActors[8].setColorTone([x, x, x, 0]);
                for (var i = 9; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }               
                break;                                                                                                                                                                                                                                                                                                                              
        }         
    }


    Scene_Status.prototype.refreshActor = function() {
        var actor = this.actor();
        this._statusWindow.setActor(actor);
    };



    Scene_Status.prototype.nextActor = function() {
        var actor = this.actor();
        $gameParty.makeMenuActorNext(); 
        this._statusCounter++; 
        this.updateActor();
        this.onActorChange();
        if(this._availableActors[actor._actorId]) {
            if (actor._actorId === this._availableActors.length) {
                this._availableActors[this._availableActors.length].setColorTone([0, 0, 0, 0]);
            } else {
                this._availableActors[actor._actorId-1].setColorTone([0, 0, 0, 0]);
            }
            
        }       
    };

    Scene_Status.prototype.previousActor = function() {
        $gameParty.makeMenuActorPrevious();
        this._statusCounter--;
        this.updateActor();
        this.onActorChange();
    };

    Soulpour777.Vesperia.Scene_File_create = Scene_File.prototype.create;
    Scene_File.prototype.create = function() {
        Soulpour777.Vesperia.Scene_File_create.call(this);
        if(eval(Soulpour777.Vesperia.useSaveScene))this.createParticles();
    };


    Soulpour777.Vesperia.Scene_GameEnd_create = Scene_GameEnd.prototype.create;
    Scene_GameEnd.prototype.create = function() {
        Soulpour777.Vesperia.Scene_GameEnd_create.call(this);
        if(eval(Soulpour777.Vesperia.useEndScene))this.createGameEndLabel();
        if(eval(Soulpour777.Vesperia.useEndScene))this.createParticles();
    };

    Soulpour777.Vesperia.Scene_Options_create = Scene_Options.prototype.create;
    Scene_Options.prototype.create = function() {
        Soulpour777.Vesperia.Scene_Options_create.call(this);
        if(eval(Soulpour777.Vesperia.useOptionsScene))this.createParticles();
        if(eval(Soulpour777.Vesperia.useOptionsScene))this.createOptionsLabel();
    };

    Scene_Options.prototype.createOptionsLabel = function() {
        this._optionsLbl = new Sprite();
        this._optionsLbl.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.optLabel);
        this._optionsLbl.x = Soulpour777.Vesperia.optLabelX;
        this._optionsLbl.y = Soulpour777.Vesperia.optLabelY;
        this.addChild(this._optionsLbl);
    }   

    Window_ItemList.prototype.windowWidth = function() {
        return Graphics.width;
    }

    Window_ItemList.prototype.windowHeight = function() {
        return Graphics.height;
    }

    Window_EquipItem.prototype.maxCols = function() {
        return 1;
    };

    Window_ItemList.prototype.drawItem = function(index) {
        var item = this._data[index];
        if (item) {
            var numberWidth = this.numberWidth();
            var rect = this.itemRect(index);
            rect.width -= this.textPadding();
            this.changePaintOpacity(this.isEnabled(item));
            this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
            this.drawItemNumber(item, rect.x - 20, rect.y, rect.width);
            this.changePaintOpacity(1);
        }
    };


})();

(function($){
    Soulpour777.Vesperia.Scene_Skill_create = Scene_Skill.prototype.create;
    $.prototype.create = function() {
        Soulpour777.Vesperia.Scene_Skill_create.call(this);
        this._frameCount = 0;
        if(eval(Soulpour777.Vesperia.useSkillScene)) {
            this.createParticles();
            this.createVesperiaSkillLabel();
            this.createVesperiaSkillHelp();
            this.createVesperiaSkillProfileBox();
            this.createVesperiaSkillCategoryBox();
            this.createVesperiaSkillList();
            this.createAvailableActors();
        }
    };

    $.prototype.createVesperiaSkillLabel = function() {
        this._vskillLabel = new Sprite();
        this._vskillLabel.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.skillLabel);
        this._vskillLabel.x = Soulpour777.Vesperia.skillLabelX;
        this._vskillLabel.y = Soulpour777.Vesperia.skillLabelY;
        this.addChild(this._vskillLabel);
    }

    $.prototype.createVesperiaSkillHelp = function() {
        this._vskillhelpLabel = new Sprite();
        this._vskillhelpLabel.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.skillitemdesc);
        this._vskillhelpLabel.x = Soulpour777.Vesperia.skillitemdescX;
        this._vskillhelpLabel.y = Soulpour777.Vesperia.skillitemdescY
        this.addChildAt(this._vskillhelpLabel,1);
    }    

    $.prototype.createVesperiaSkillProfileBox = function() {
        this._vskillprofileBox = new Sprite();
        this._vskillprofileBox.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.pskillitemdesc);
        this._vskillprofileBox.x = Soulpour777.Vesperia.pskillitemdescX;
        this._vskillprofileBox.y = Soulpour777.Vesperia.pskillitemdescY;
        this.addChildAt(this._vskillprofileBox,1);
    } 

    $.prototype.createVesperiaSkillCategoryBox = function() {
        this._vskillskillcategoryBox = new Sprite();
        this._vskillskillcategoryBox.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.skillcategbox);
        this._vskillskillcategoryBox.x = Soulpour777.Vesperia.skillcategboxX;
        this._vskillskillcategoryBox.y = Soulpour777.Vesperia.skillcategboxY;
        this.addChildAt(this._vskillskillcategoryBox,1);
    }  

    $.prototype.createVesperiaSkillList = function() {
        this._vskillskillList = new Sprite();
        this._vskillskillList.bitmap = ImageManager.loadVesperia(Soulpour777.Vesperia.pskillitemdescx);
        this._vskillskillList.x = Soulpour777.Vesperia.pskillitemdescxX;
        this._vskillskillList.y = Soulpour777.Vesperia.pskillitemdescxY;
        this.addChildAt(this._vskillskillList,1);
    }           

    $.prototype.createHelpWindow = function() {
        if(eval(Soulpour777.Vesperia.useSkillScene)) {
            this._helpWindow = new Window_Help();
            this._helpWindow.x = 0;
            this._helpWindow.y = 515;
            this._helpWindow.opacity = 0;
            this.addChild(this._helpWindow);
        } else {
            this._helpWindow = new Window_Help();
            this.addWindow(this._helpWindow);
        }
    };    

    Soulpour777.Vesperia.Scene_Skill_createSkillTypeWindow = Scene_Skill.prototype.createSkillTypeWindow;
    $.prototype.createSkillTypeWindow = function() {
        if(eval(Soulpour777.Vesperia.useSkillScene)) {
            var xwx = 0;
            var xwy = 108;
            this._skillTypeWindow = new Window_SkillType(xwx, xwy);
            this._skillTypeWindow.opacity = 0;
            this._skillTypeWindow.setHelpWindow(this._helpWindow);
            this._skillTypeWindow.setHandler('skill',    this.commandSkill.bind(this));
            this._skillTypeWindow.setHandler('cancel',   this.popScene.bind(this));
            this._skillTypeWindow.setHandler('pagedown', this.nextActor.bind(this));
            this._skillTypeWindow.setHandler('pageup',   this.previousActor.bind(this));
            this.addChild(this._skillTypeWindow);
        } else {
            Soulpour777.Vesperia.Scene_Skill_createSkillTypeWindow.call(this);
        }

    };

    Soulpour777.Vesperia.Scene_Skill_createStatusWindow = Scene_Skill.prototype.createStatusWindow;
    $.prototype.createStatusWindow = function() {
        if(eval(Soulpour777.Vesperia.useSkillScene)) {
            var xwx = Soulpour777.Vesperia.statusWinZ_X;
            var xwy = Soulpour777.Vesperia.statusWinZ_Y;
            var xww = Soulpour777.Vesperia.statusWinZ_W;
            var xwh = Soulpour777.Vesperia.statusWinZ_H;
            this._statusWindow = new Window_SkillStatus(xwx, xwy, xww, xwh);
            this._statusWindow.opacity = Soulpour777.Vesperia.statusWinZ_O;
            this.addChild(this._statusWindow);
        } else {
            Soulpour777.Vesperia.Scene_Skill_createStatusWindow.call(this);
        }

    };

    $.prototype.createAvailableActors = function() {
        this._availableActors = [];
        for (var i = 0; i < $gameParty.members().length; i++) {
            var sprite = new Sprite();
            sprite.bitmap = ImageManager.loadVesperia($gameParty.members()[i]._actorId);
            sprite.x = Soulpour777.Vesperia.actorSkillX + (i * 40);
            sprite.y = Soulpour777.Vesperia.actorSkillY;
            this._availableActors.push(sprite);
            this.addChild(this._availableActors[i]);
        }
    }    

    Soulpour777.Vesperia.Scene_Skill_createItemWindow = Scene_Skill.prototype.createItemWindow;
    $.prototype.createItemWindow = function() {
        if(eval(Soulpour777.Vesperia.useSkillScene)) {
            var xwx = Soulpour777.Vesperia.itemWinZ_X;
            var xwy = Soulpour777.Vesperia.itemWinZ_Y;
            var xww = eval(Soulpour777.Vesperia.itemWinZ_W);
            var xwh = eval(Soulpour777.Vesperia.itemWinZ_H);
            this._itemWindow = new Window_SkillList(xwx, xwy, xww, xwh);
            this._itemWindow.opacity = Soulpour777.Vesperia.itemWinZ_O;
            this._itemWindow.setHelpWindow(this._helpWindow);
            this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
            this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
            this._skillTypeWindow.setSkillWindow(this._itemWindow);
            this.addChild(this._itemWindow);
        } else {
            Soulpour777.Vesperia.Scene_Skill_createItemWindow.call(this);
        }

    };

    $.prototype.update = function() {
        Scene_MenuBase.prototype.update.call(this);
    
        if(eval(Soulpour777.Vesperia.useSkillScene))this.updateActorMovement(); 
    }

   $.prototype.updateActorMovement = function() {
        this._frameCount++;
        this._frameCount %= 20;
        var x = (20 - this._frameCount) * 6;
        var actor = this.actor();      
        switch(this.actor()._actorId) {
            case 1:
                this._availableActors[0].setColorTone([x, x, x, 0]);
                for (var i = 1; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }            
                break;
            case 2:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([x, x, x, 0]);
                for (var i = 2; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }            
                break;
            case 3:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([x, x, x, 0]);
                for (var i = 3; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }  
                break;
            case 4:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([x, x, x, 0]);
                for (var i = 4; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }              
                break;
            case 5:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([x, x, x, 0]);
                for (var i = 5; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }             
                break;
            case 6:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([x, x, x, 0]);
                for (var i = 6; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }             
                break;
            case 7:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([x, x, x, 0]);
                for (var i = 7; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }              
                break;
            case 8:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([0, 0, 0, 0]);
                this._availableActors[7].setColorTone([x, x, x, 0]);
                for (var i = 8; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }               
                break;
            case 9:
                this._availableActors[0].setColorTone([0, 0, 0, 0]);
                this._availableActors[1].setColorTone([0, 0, 0, 0]);
                this._availableActors[2].setColorTone([0, 0, 0, 0]);
                this._availableActors[3].setColorTone([0, 0, 0, 0]);
                this._availableActors[4].setColorTone([0, 0, 0, 0]);
                this._availableActors[5].setColorTone([0, 0, 0, 0]); 
                this._availableActors[6].setColorTone([0, 0, 0, 0]);
                this._availableActors[7].setColorTone([0, 0, 0, 0]);
                this._availableActors[8].setColorTone([x, x, x, 0]);
                for (var i = 9; i < this._availableActors.length; i++) {
                    this._availableActors[i].setColorTone([0, 0, 0, 0]);
                }               
                break;                                                                                                                                                                                                                                                                                                                              
        }
   }     
})(Scene_Skill);
