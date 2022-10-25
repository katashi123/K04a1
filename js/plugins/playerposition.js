//=============================================================================
// プレイヤーポジション修正js
//=============================================================================

 
/*:ja
 * @plugindesc スクリーンに対してのプレイヤーの位置を変更します。
 * @author くがしら
 *
 * @param Shift_X
 * @desc プレイヤーが画面に対して、-1なら左に1マス分 2なら右に2マス分ずれます。
 * default: 0
 * @default 0
 *
 * @param Shift_Y
 * @desc プレイヤーが画面に対して、-1なら上に1マス分 2なら下に2マス分ずれます。
 * デフォルト : 0 
 * default: 0
 * @default 0
 *
 * @help =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
 * Information
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
 *
 *マップ上でのプレイヤーの画面位置を、中心から動かします。
 *ここで設定した位置が、画面に対してのプレイヤーのデフォルト位置になります。
 *
 *画面の片側に常時キャラクターを置いたり、UIが増えた時などの
 *画面のバランス調整にお使い下さい。
 *
 *商法利用、改造等は自由ですので安心してお使い下さい。
 *再配布は禁止とします。
 *
 *強制ではありませんが、もしご利用の際はクレジット表示をして頂けると有難いです。
 *
 */
 
 
 
(function() {
	
  var parameters = PluginManager.parameters('playerposition');
    var Shift_X = Number(parameters['Shift_X'] );
	var Shift_Y = Number(parameters['Shift_Y'] );
   
var _Game_Player_centerX = Game_Player.prototype.centerX
Game_Player.prototype.centerX = function() {
    return (Graphics.width / $gameMap.tileWidth() - 1) / 2.0 +  Shift_X;

};
var _Game_Player_centerY = Game_Player.prototype.centerY
Game_Player.prototype.centerY = function() {
    return (Graphics.height / $gameMap.tileHeight() - 1) / 2.0 + Shift_Y;
};


})();

