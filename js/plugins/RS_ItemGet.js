/*=================================================
 *	アイテム入手の規格化_ver.1.0
	release	:2015_1228
	update	:2016_0101
	owner	:てれりる(Twitter:@tereril_pm)
 *
 *update log
	0101
		Message表示を切り替えれる用変更
=================================================*/
/*:ja
 * @plugindesc 変数を元にアイテムを入手・メッセージを表示します
 * @author てれりる
 *
 * @param gettype
 * @desc 入手アイテムの種類を格納する変数
 * @default 2
 *
 * @param itemid
 * @desc 入手アイテムのIDを格納する変数
 * @default 3
 *
 * @param itemval
 * @desc 入手個数を格納する変数
 * @default 4
 *
 * @param MoneyUnit
 * @desc 金の単位
 * @default G
 *
 * @param PramMessage
 * @desc メッセージ表示の有無
 * @default true
 *
 * @help
 *
 *動作仕様:
 *gettype：0-3
 * 0:金
 * 1:アイテム
 * 2:武器
 * 3:防具
 *武器防具はitemvalの値にかかわらず1個ずつ入手
 *金の入手時にはitemidは指定不要Number
 */
var parameters 	= PluginManager.parameters('RS_ItemGet');
var Pramgettype 	= Number(parameters['gettype'] || 2);
var Pramitemid 		= Number(parameters['itemid'] || 3);
var Pramitemval 	= Number(parameters['itemval'] || 4);
var PramMoneyUnit	= String(parameters['MoneyUnit'] || 'G');
var PramMessage		= String(parameters['PramMessage'] || 'true');
function RS_ItemGet(){
	var msgstr;
	gettype 	= $gameVariables.value(Pramgettype);
	itemid 		= $gameVariables.value(Pramitemid);
	itemval 	= $gameVariables.value(Pramitemval);
	console.log(gettype);
	console.log(itemid);
	console.log(itemval);
	switch (gettype){
		case 0:
			$gameParty.gainGold(itemval);
			msgstr = itemval + PramMoneyUnit + "手に入れた"
			break;
		case 1:
			$gameParty.gainItem($dataItems[itemid], itemval);
			msgstr = itemval == 1 ? $dataItems[itemid].name+"を手に入れた！" : $dataItems[itemid].name+"を"+itemval+"個手に入れた！" ;
			break;
		case 2:
			$gameParty.gainItem($dataWeapons[itemid], 1);
			msgstr = $dataWeapons[itemid].name+"を手に入れた！";
			break;
		case 3:
			$gameParty.gainItem($dataArmors[itemid], 1);
			msgstr = $dataArmors[itemid].name+"を手に入れた！";
			break;
		default:
			msgstr="Parameter Err";
			break;
	}
	if(PramMessage=="true"){
		$gameMessage._positionType = 1;
		$gameMessage.newPage();
		$gameMessage.add(msgstr);
	}
}
/*
(function() {
	var parameters 	= PluginManager.parameters('RS_ItemGet');
	var Pramgettype 	= Number(parameters['gettype'] || 2);
	var Pramitemid 		= Number(parameters['itemid'] || 3);
	var Pramitemval 	= Number(parameters['itemval'] || 4);
	
	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'RANS_SPACE_ItemGet') {
            RS_ItemGet();
        }
    };
	function RS_ItemGet(){
		var msgstr;
		gettype 	= $gameVariables.value(Pramgettype);
		itemid 		= $gameVariables.value(Pramitemid);
		itemval 	= $gameVariables.value(Pramitemval);
		console.log(gettype);
		switch (gettype){
			case 0:
				$gameParty.gainGold(itemval);
				break;
			case 1:
				$gameParty.gainItem($dataItems[itemid], itemval);
				msgstr = itemval == 1 ? $dataItems[itemid].name+"を手に入れた！" : $dataItems[itemid].name+"を"+itemval+"個手に入れた！" ;
				break;
			case 2:
				$gameParty.gainItem($dataWeapons[itemid], 1);
				msgstr = $dataWeapons[itemid].name+"を手に入れた！";
				break;
			case 3:
				$gameParty.gainItem($dataArmors[itemid], 1);
				msgstr = $dataArmors[itemid].name+"を手に入れた！";
				break;
			default:
				msgstr="Parameter Err";
				break;
		}
		$gameMessage._positionType = 1;
		$gameMessage.newPage();
		$gameMessage.add(msgstr);
	}
})();
*/