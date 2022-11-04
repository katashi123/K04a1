// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"AltSaveScreen","status":true,"description":"セーブ／ロード画面のレイアウトを変更します。","parameters":{}},
{"name":"MrTS_MapDestinationImage","status":true,"description":"Changes map destination graphic and can disable it's effect. Can be animated.","parameters":{"Disable Effect":"True","Animated Destination":"false","Frames":"4","Speed":"10"}},
{"name":"CRTA_TimerManager","status":true,"description":"v1.1.0 タイマー関係の管理プラグイン","parameters":{"Font Size":"16","Width":"96","Height":"48","Position X":"1000","Position Y":"1000"}},
{"name":"playerposition","status":true,"description":"スクリーンに対してのプレイヤーの位置を変更します。","parameters":{"Shift_X":"-3","Shift_Y":"0"}},
{"name":"WindowResize","status":true,"description":"ゲーム起動時のウィンドウサイズを変更します。","parameters":{"width":"864","height":"480"}},
{"name":"ChangeTileSize","status":true,"description":"48x48以外のグリッドサイズのマップを使用可能にします。","parameters":{"Tile Size":"24","Tileset Image Folder":"img/tilesets24/","Parallax Image Folder":"img/parallaxes24/"}},
{"name":"TDDP_FluidTimestep","status":true,"description":"1.0.2 Fixes MV's framerate dependent timestepping. Makes the gamespeed the same regardless of framerate.","parameters":{}},
{"name":"MBS_MapZoom","status":true,"description":"Makes it possible to zoom in and out the game map\n\n<MBS MapZoom>","parameters":{"Reset on map change":"true","Default zoom":"2"}},
{"name":"messagese","status":true,"description":"メッセージ中にSEを演奏する","parameters":{"SeData1":"Miss","SeData2":"30","SeData3":"150","SeData4":"0","SeWait":"6","StopSeSw":"1"}},
{"name":"OmitTarget","status":true,"description":"戦闘画面でターゲット選択時、対象が一つの場合は省略します。","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"戦闘システムをカスタムし、様々な要素を変更することができます","parameters":{"---一般---":"","Action Speed":"agi","Immortal State ID":"3","Default System":"dtb","---アニメーション---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"0","Reflect Animation":"42","Motion Waiting":"false","---フロントビュー---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","---サイドビュー---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","---ダメージポップアップ---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---ウィンドウセッティング---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"false","---選択ヘルプ---":"","Select Help Window":"true","User Help Text":"ユーザー","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"全ての %1","Random Help Text":"%2 ランダムな %1","---エネミーセレクト---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---アクターセレクト---":"","Visual Actor Select":"true","---バトルログ---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"TMEventItemEx","status":true,"description":"アイテム選択の処理にヘルプウィンドウを追加し、\n個数表示の有無と表示行数をアイテムタイプごとに設定できます。","parameters":{"helpWindowEnabledItem":"1","helpWindowEnabledKey":"1","helpWindowEnabledA":"1","helpWindowEnabledB":"1","showItemNumberItem":"1","showItemNumberKey":"1","showItemNumberA":"1","showItemNumberB":"1","numVisibleRowsItem":"6","numVisibleRowsKey":"4","numVisibleRowsA":"4","numVisibleRowsB":"4"}},
{"name":"YEP_X_SVEnemyFolder","status":true,"description":"v1.01 (Requires YEP_X_AnimatedSVEnemies.js) This plugin lets\r\nyou use have folders for Sideview Enemies!","parameters":{"---Folder 1---":"","Enemy Folder 1":"img\\sv_actors\\","Image Prefix 1":"[M1]","---Folder 2---":"","Enemy Folder 2":"img\\sv_actors\\","Image Prefix 2":"[M2]","---Folder 3---":"","Enemy Folder 3":"img\\sv_actors\\","Image Prefix 3":"[M3]","---Folder 4---":"","Enemy Folder 4":"img\\sv_actors\\","Image Prefix 4":"[M4]","---Folder 5---":"","Enemy Folder 5":"img\\sv_actors\\","Image Prefix 5":"[M5]","---Folder 6---":"","Enemy Folder 6":"img\\sv_actors\\","Image Prefix 6":"[M6]","---Folder 7---":"","Enemy Folder 7":"img\\sv_actors\\","Image Prefix 7":"[M7]","---Folder 8---":"","Enemy Folder 8":"img\\sv_actors\\","Image Prefix 8":"[M8]","---Folder 9---":"","Enemy Folder 9":"img\\sv_actors\\","Image Prefix 9":"[M9]","---Folder 10---":"","Enemy Folder 10":"img\\sv_actors\\","Image Prefix 10":"[M10]","---Folder 11---":"","Enemy Folder 11":"img\\sv_actors\\","Image Prefix 11":"[M11]","---Folder 12---":"","Enemy Folder 12":"img\\sv_actors\\","Image Prefix 12":"[M12]","---Folder 13---":"","Enemy Folder 13":"img\\sv_actors\\","Image Prefix 13":"[M13]","---Folder 14---":"","Enemy Folder 14":"img\\sv_actors\\","Image Prefix 14":"[M14]","---Folder 15---":"","Enemy Folder 15":"img\\sv_actors\\","Image Prefix 15":"[M15]","---Folder 16---":"","Enemy Folder 16":"img\\sv_actors\\","Image Prefix 16":"[M16]","---Folder 17---":"","Enemy Folder 17":"img\\sv_actors\\","Image Prefix 17":"[M17]","---Folder 18---":"","Enemy Folder 18":"img\\sv_actors\\","Image Prefix 18":"[M18]","---Folder 19---":"","Enemy Folder 19":"img\\sv_actors\\","Image Prefix 19":"[M19]","---Folder 20---":"","Enemy Folder 20":"img\\sv_actors\\","Image Prefix 20":"[M20]","---Folder 21---":"","Enemy Folder 21":"img\\sv_actors\\","Image Prefix 21":"[M21]","---Folder 22---":"","Enemy Folder 22":"img\\sv_actors\\","Image Prefix 22":"[M22]","---Folder 23---":"","Enemy Folder 23":"img\\sv_actors\\","Image Prefix 23":"[M23]","---Folder 24---":"","Enemy Folder 24":"img\\sv_actors\\","Image Prefix 24":"[M24]","---Folder 25---":"","Enemy Folder 25":"img\\sv_actors\\","Image Prefix 25":"[M25]","---Folder 26---":"","Enemy Folder 26":"img\\sv_actors\\","Image Prefix 26":"[M26]","---Folder 27---":"","Enemy Folder 27":"img\\sv_actors\\","Image Prefix 27":"[M27]","---Folder 28---":"","Enemy Folder 28":"img\\sv_actors\\","Image Prefix 28":"[M28]","---Folder 29---":"","Enemy Folder 29":"img\\sv_actors\\","Image Prefix 29":"[M29]","---Folder 30---":"","Enemy Folder 30":"img\\sv_actors\\","Image Prefix 30":"[M30]","---Folder 31---":"","Enemy Folder 31":"img\\sv_actors\\","Image Prefix 31":"[M31]","---Folder 32---":"","Enemy Folder 32":"img\\sv_actors\\","Image Prefix 32":"[M32]","---Folder 33---":"","Enemy Folder 33":"img\\sv_actors\\","Image Prefix 33":"[M33]","---Folder 34---":"","Enemy Folder 34":"img\\sv_actors\\","Image Prefix 34":"[M34]","---Folder 35---":"","Enemy Folder 35":"img\\sv_actors\\","Image Prefix 35":"[M35]","---Folder 36---":"","Enemy Folder 36":"img\\sv_actors\\","Image Prefix 36":"[M36]","---Folder 37---":"","Enemy Folder 37":"img\\sv_actors\\","Image Prefix 37":"[M37]","---Folder 38---":"","Enemy Folder 38":"img\\sv_actors\\","Image Prefix 38":"[M38]","---Folder 39---":"","Enemy Folder 39":"img\\sv_actors\\","Image Prefix 39":"[M39]","---Folder 40---":"","Enemy Folder 40":"img\\sv_actors\\","Image Prefix 40":"[M40]"}},
{"name":"MrTS_NoItemCategories","status":true,"description":"Removes item categories from item menu scene and from shop scene.","parameters":{"Hide Menu":"True","Hide Shop":"True"}},
{"name":"MrTS_EmptyMenu","status":true,"description":"Removes actor data and moves command window.","parameters":{"Show Gold Window":"false","Command X":"Graphics.boxWidth/2 - this._commandWindow.width/2","Command Y":"Graphics.boxHeight/2 - this._commandWindow.height/2","Gold X":"this._commandWindow.x","Gold Y":"this._commandWindow.y + this._commandWindow.height"}},
{"name":"Exhydra_FollowerControl","status":true,"description":"Options to control and enhance interaction with followers.","parameters":{"Interpreter Commands":"205,212,213"}},
{"name":"extramovementframes","status":true,"description":"Set sprites with more than 3 frames of animation","parameters":{"Cycle Time":"48","Default Idle Frame":"0","Default Pattern":"[]"}},
{"name":"BG_not_blur","status":true,"description":"背景ぼかさないよ","parameters":{}},
{"name":"PictureAnimation","status":true,"description":"ピクチャのアニメーションプラグイン","parameters":{}},
{"name":"SAN_CleatChoiceWindows","status":true,"description":"滑り止め選択ウィンドウ ver1.10\r\n選択肢・数値入力・アイテム選択の誤入力を防止","parameters":{"ShowChoices":"ON","InputNumber":"OFF","SelectItem":"OFF","Buzzer":"OFF"}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"control","Show Trace":"false"}},
{"name":"Titlewindow_riru","status":true,"description":"タイトルのコマンドウィンドウのの選択画面を変更します。","parameters":{"Window X":"330","Window Y":"250","Background":"2","Width":"240","Maxcols":"1","Align":"0","Font Size":"30","SPFont Color":"#ffffff","SPColorTone_r":"0","SPColorTone_g":"0","SPColorTone_b":"0","SPColorTone_gr":"0","SPFont Y":"0","Opacity":"128"}},
{"name":"TMOmitEquipCommand","status":true,"description":"装備シーンからコマンドウィンドウを削除し、\nスロットウィンドウに２行分のスペースを追加します。","parameters":{}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"True","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"false","DPad Visible":"true","DPad Size":"150","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"80","ActionBtn Margin":"100; 10","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"80","CancelBtn Margin":"10; 90","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false"}},
{"name":"YEP_TouchInputDisabler","status":true,"description":"v1.00 Sometimes, we just want to disable mouse and touch input\nfor our games.","parameters":{"---Mouse---":"","Press Check":"false","Trigger Check":"false","Repeat Check":"false","Long Press Check":"false","Cancel Check":"false","Move Check":"false","Release Check":"false","Wheel Check":"false","Map Move Check":"false"}},
{"name":"AudioStreaming","status":true,"description":"Load audio faster and use only ogg files.","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"stbvorbis_stream","status":false,"description":"","parameters":{}},
{"name":"stbvorbis_stream_asm","status":false,"description":"","parameters":{}}
];
