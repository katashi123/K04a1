//=============================================================================
// UCHU_MobileOperation.js
// Version: 1.1.4
//----------------------------------------------------------------------------
// Copyright (c) 2015 uchuzine
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
@plugindesc
�X�}�z����p�v���O�C���B������/�c�����ɑΉ��������z�{�^���A
�^�b�`����̕��@��ǉ��g�����A�X�}�z�v���C�����K�ɂ��܂��B
@author
uchuzine
@help
UCHU_MobileOperation (Version: 1.1.4)
------------------------------------------------------------------------------
���X�V����
------------------------------------------------------------------------------
1.1.4 2015/12/04  ��ʉ������b�Z�[�W�\����ɉ��L�̖�肪�Ĕ�����s����C��
1.1.3 2015/11/29  ��ʍ���Ƀ{�^����ݒu�����ۂɃ{�^���������Ȃ��s����C��
1.1.2 2015/11/24  �p�����[�^��ύX�ł��Ȃ��s����C��
1.1.1 2015/11/23  PC��ł̉��z�{�^�����쎞�̕s����C��
1.1.0 2015/11/17  �uAnalogMove.js�v�g�p���̃A�i���O�ړ��ɑΉ��B���L�������Q��
1.0.0 2015/11/15 �v���O�C�����J

------------------------------------------------------------------------------
������
------------------------------------------------------------------------------
�v���O�C���쐬�ɂ�����Apor Masked����MBS_MobileDirPad.js���Q�l�ɂ��Ă��܂��B

���{�v���O�C���̓���
�E�Q�[����ʊO(���ѕ���)�Ƀ{�^����ݒu���邽�߁A�v���C��ʂɊ����ɂ���
�E�p�b�h��{�^���͌ʂɕ\���^��\���̐؂�ւ����\
�E�{�^���̊�_����ʎl���̂����ꂩ�Ɏw��ł��A�c��������ɑΉ��\
�E�����p�b�h�̑��쐫���d�����A�^�b�`����̈�A�΂ߕ����̊��x�Ȃǒ����\
�@�i�ڍׂ͉��L�̐������Q�Ɓj
�E�����p�b�h�ɂ��ړ��ƁA�f�t�H���g�̖ړI�n�^�b�`�ɂ��ړ��𕹗p�\
�E����̃^�b�`����A�W�F�X�`���[�ɂ��{�^������̊g��

�����𗘗p���A

�E���z�\���L�[�͎g�킸�ɁAMENU�{�^���ƌ���{�^���̂ݎg�p
�E�{�^���͑S�Ďg�p�����A��ʒ������ŃI�[�g�A�ŁA��ʊO�^�b�`�Ń��j���[�ďo

�Ƃ������g�������ł��܂��B

------------------------------------------------------------------------------
���ꕔ�̃p�����[�^�̐���
------------------------------------------------------------------------------
�� DPad OpelationRange�i�����p�b�h�쓮�̈�j�d�d
�����p�b�h�摜�̕\���T�C�Y�ɑ΂���A�^�b�`����̈�̑傫����{���Ŏw�肵�܂��B
���l���グ�Ă������ڂ͕ς��܂��񂪁A�摜�̒��S����O���ɔ��肪�L����܂��B
��j
�u1�v�̂Ƃ��d�d�摜�̃T�C�Y���^�b�`����̑傫���ɂȂ�i�摜�̓��ډ~�̒��̂݁j
�u2�v�̂Ƃ��d�d�^�b�`����̑傫�����c���Q�{�ɂȂ�i�摜�̊O����50%���L����j

���l���グ�邱�Ƃő���~�X��h���A���쐫���グ�邱�Ƃ��ł��܂���
�グ�߂��đ��̃{�^�����ɏd�Ȃ��Ă��܂�Ȃ��悤�ɒ��ӂ��Ă��������B

�� DPad DiagonalRange�i�����p�b�h�̎΂ߕ����͈́j�d�d
�����̔���́A�p�b�h�摜�̑Ίp�������E���ɂ��ď㉺���E�ɕ����Ă��܂����A
���̐��l���グ��ƁA�Ίp������^�b�`�����Ƃ��ɂ��̗����̕������I���ɂȂ�
�i�u�E�v�{�u��v�Ȃǁj�A�W�������肪�ł���悤�ɂȂ�܂��B
�W�����ړ��̃v���O�C�����g�p���Ă��鎞�Ȃǂ́A���̐��l��ݒ肵�Ă��������B

���l�̑傫�����΂ߔ���p�x�̍L���ƂȂ�A�u0�`1�v�͈̔͂Ŏw�肵�܂�
��)
�u0�v�̂Ƃ��d�d�㉺���E�̂S�����̂ݓ��͉\�B
�u0.5�v�̂Ƃ��d�ϓ��W�����̂W�������͂��\�B
�u1�v�̂Ƃ��d�d�u�E��v�u�E���v�u����v�u�����v�̂S�������́B

���l���グ��قǁA�u����������肪�E��ɂȂ��Ă����v���̃~�X���N���邽��
�S�����Ŗ��Ȃ��ꍇ�́A�u0�v���w�肷��Ƒ���~�X���ŏ����ɂȂ�܂��B


�ivar1.1.0���ǉ��j
�� AnalogMove�i�A�i���O�ړ��j�d�d
�T���V���l�̃v���O�C���uAnalogMove.js�v�g�p���ɁA�A�i���O�ړ����\�ɂ��܂��B
�����p�b�h�̒��S����^�b�`�ʒu�̋����Ɗp�x�ŁA�h�b�g�P�ʂ̈ړ����ł��܂��B
�g�p�̍ۂ̓v���O�C���}�l�[�W���[�ŁA��ɁuAnalogMove.js�v��ǂݍ���
������̃p�����[�^�uAnalogMove�v��true�ɕς��Ă��������B
���A�i���O�ړ��g�p���́A�uDPad DiagonalRange�v�̐��l�͖�������܂��B

�� AnalogSensitivity�i���͊��x�j�d�d
�uAnalogSensitivity�v�͓��͊��x�ŁA���l���グ��ق�
�ő�l�i�ő�X�s�[�h�j�܂œ��͂���̂ɕK�v�Ȏw�̓������������Ȃ�܂��B
��)
�u1�v�̂Ƃ��d�d���͔���̊O�[�ōő�l�ɁB�傫�Ȏw�̈ړ����K�v�B
�uDPad OpelationRange�v�Ɠ����Ƃ��d�d�����p�b�h�摜�̊O�[�ōő�l�ɁB

DPad OpelationRange�����傫�߂̐��l���w�肷��ƁA���͂��y�ɂȂ�܂��B
�iDPad OpelationRange�̏����l1.3�ɑ΂��AAnalogSensitivity�̏����l��1.8�ł�)

------------------------------------------------------------------------------
���p�b�h�A�{�^���摜�ɂ���
------------------------------------------------------------------------------
�E�摜�t�@�C���͔C�ӂ̃T�C�Y�ō쐬�\�ł����A�c����1:1�ō쐬���Ă��������B
�@�\���̍ۂ́A�uDPad Size�v�Ŏw�肵��pixel���Ƀ��T�C�Y����܂��B
�@�{�^���摜�����l�ł��B
�E�����p�b�h�̃O���t�B�b�N�̒��S���摜�̒��S�ɂȂ�悤�ɂ��Ă��������B



@param ---PC Option---
@default

@param PC BtnDisplay
@desc PC�Ŏ��s�����A���z�{�^����\������:true ���Ȃ�:false
�����l:false
@default false

@param PC TouchExtend
@desc PC�Ŏ��s�����A�^�b�`�̑���g����L���ɂ���:true ���Ȃ�:false
�����l:true;
@default true

@param ---File Path---
@default

@param DPad Image
@desc �����p�b�h�摜�̃t�@�C���p�X
@default ./img/system/DirPad.png

@param ActionBtn Image
@desc ����{�^���摜�̃t�@�C���p�X
@default ./img/system/ActionButton.png

@param CancelBtn Image
@desc �L�����Z���i���j���[�j�{�^���摜�̃t�@�C���p�X
@default ./img/system/CancelButton.png

@param ---Button Customize---
@default

@param Button Opacity
@desc �{�^���̕s�����x(0�`1) �����l:0.7
@default 0.7

@param Vertical BtnZoom
@desc �X�}�z�c�����ŕ\�������Ƃ��̑S�{�^���̊g�嗦
�����l:1.7
@default 1.7

@param Tablet BtnZoom
@desc �^�u���b�g�������ŕ\�������Ƃ��̑S�{�^���̊g�嗦
�����l:0.8
@default 0.8

@param TabVertical BtnZoom
@desc �^�u���b�g�c�����ŕ\�������Ƃ��̑S�{�^���̊g�嗦
�����l:1.1
@default 1.1

@param HideButton OnMessage
@desc ��ʉ����Ƀ��b�Z�[�W�\�����A���z�{�^���̕\�����ʂ��Q�[����ʂ̉��ɉ�����:true ���̂܂�:false
�����l:true
@default true

@param DPad Visible
@desc �����p�b�h��\������Ftrue ���Ȃ�:false  �����l:true
@default true

@param DPad Size
@desc �����p�b�h�̑傫��(px�j�B �����l:200
@default 200

@param DPad Margin
@desc �����p�b�h�摜�̈ʒu�B��ʒ[����̌��Ԃ̑傫���Ŏw��B
 (������̕�; ������̕�) �����l:10; 10
@default 10; 10

@param DPad Orientation
@desc �����p�b�h�̊�ʒu���A�����ȊO�ɕς������ꍇ�B
left �� right; top �� bottom �Ŏw��B �����l:left; bottom
@default left; bottom

@param DPad OpelationRange
@desc �����p�b�h�摜�ɑ΂���A�^�b�`�̍쓮�͈�(�{���A1�`)
�摜�̊O���Ƀ^�b�`������L���A����~�X��h���B�����l:1.3
@default 1.3

@param DPad DiagonalRange
@desc �����p�b�h�΂ߕ����̔���̍L��(0�`1)�B�΂߂ɓ���₷��������A���삪�u���₷���Ȃ�B4�����ł悢�ꍇ��0�ɁB�����l:0.3;
@default 0.3

@param ActionBtn Visible
@desc ����{�^����\������:true ���Ȃ�:false  �����l:true
@default true

@param ActionBtn Size
@desc ����{�^���̑傫��(px�j�B �����l:100
@default 100

@param ActionBtn Margin
@desc ����{�^���̈ʒu�B��ʒ[����̌��Ԃ̑傫���Ŏw��B
 (�E����̕�; ������̕�) �����l:10; 90
@default 10; 90

@param ActionBtn Orientation
@desc ����{�^���̊�ʒu���A�E���ȊO�ɕς������ꍇ�B
left �� right; top �� bottom �Ŏw��B �����l:right; bottom
@default right; bottom

@param CancelBtn Visible
@desc �L�����Z���i���j���[�j�{�^����\������:true ���Ȃ�:false
�����l:true
@default true

@param CancelBtn Size
@desc �L�����Z���{�^���̑傫��(px�j�B �����l:100
@default 100

@param CancelBtn Margin
@desc �L�����Z���{�^���̈ʒu�B��ʒ[����̌��Ԃ̑傫���Ŏw��B
 (�E����̕�; ������̕�) �����l:110; 10
@default 110; 10

@param CancelBtn Orientation
@desc �L�����Z���{�^���̊�ʒu���A�E���ȊO�ɕς������ꍇ�B
left �� right; top �� bottom�Ŏw��B �����l:right; bottom
@default right; bottom


@param ---TouchInput Extend---
@default 

@param Flick PageUp-PageDown
@desc ��ʏ�����E�Ƀt���b�N����ƁAPageUp/PageDown����ɂȂ�B
�X�e�[�^�X��ʂŃL������؂�ւ��������ȂǂɁB�����l:true
@default true

@param HoldCanvas ActionBtn
@desc ��ʂ𒷉�������ƁA����{�^������������ԂɂȂ�B
�����l:true
@default true

@param OutCanvas CancelBtn
@desc �Q�[����ʊO�̍��ѕ����S�̂��A�L�����Z���{�^�������ɂȂ�B
�����l:false
@default false

@param OutCanvas ActionBtn
@desc �Q�[����ʊO�̍��ѕ����S�̂��A����{�^�������ɂȂ�B
�����l:false
@default false

@param --!need AnalogMove.js!--
@default

@param Analog Move
@desc [��AnalogMove.js���ɓǂݍ���ł�������]
�����p�b�h�ŃA�i���O�ړ����ł���悤�ɂ���B�����l:false
@default false

@param Analog Sensitivity
@desc �A�i���O�ړ��̓��͊��x�B���l���グ��ƁA�ׂ����w�̓����ŃL�������傫�������B
�����l:1.8
@default 1.8

*/

var Imported = Imported || {};
Imported.UCHU_MobileOperation = "1.1.4";

var UCHU_MobileOperation = {};

(function() {
    "use strict";
	
	//-----------------------------------------------------------------------------
	// Setup
	
	var Parameters = PluginManager.parameters('UCHU_MobileOperation');
	var PRM = PRM || {};
	
	PRM.url=[];
	PRM.visible=[];
	PRM.size=[];
	PRM.pos=[];
	PRM.spot=[];
	
	PRM.pcBtn = Boolean(Parameters["PC BtnDisplay"] === 'true' || false);
	PRM.pcExt = Boolean(Parameters["PC TouchExtend"] === 'true' || false);
	PRM.url[0] = String(Parameters["DPad Image"]);
	PRM.url[1] = String(Parameters["ActionBtn Image"]);
	PRM.url[2] = String(Parameters["CancelBtn Image"]);
	PRM.opacity = Number(Parameters["Button Opacity"]);
	PRM.vZoom = Number(Parameters["Vertical BtnZoom"]);
	PRM.tabZoom = Number(Parameters["Tablet BtnZoom"]);
	PRM.tabvZoom = Number(Parameters["TabVertical BtnZoom"]);
	PRM.hideBtn = Boolean(Parameters["HideButton OnMessage"] === 'true' || false);
	PRM.visible[0] = Boolean(Parameters["DPad Visible"] === 'true' || false);
	PRM.size[0] = Number(Parameters["DPad Size"]);
	PRM.pos[0] =Parameters["DPad Margin"].split(";");
	PRM.spot[0] = Parameters["DPad Orientation"].split(";");
	PRM.pad_scale = Number(Parameters["DPad OpelationRange"]);
	PRM.pad_dia = Math.max(0,Math.min(1,(1-Number(Parameters["DPad DiagonalRange"]))));
	PRM.visible[1] = Boolean(Parameters["ActionBtn Visible"] === 'true' || false);
	PRM.size[1] = Number(Parameters["ActionBtn Size"]);
	PRM.pos[1] = Parameters["ActionBtn Margin"].split(";");
	PRM.spot[1] = Parameters["ActionBtn Orientation"].split(";");
	PRM.visible[2] = Boolean(Parameters["CancelBtn Visible"] === 'true' || false);
	PRM.size[2] = Number(Parameters["CancelBtn Size"]);
	PRM.pos[2] = Parameters["CancelBtn Margin"].split(";");
	PRM.spot[2] = Parameters["CancelBtn Orientation"].split(";");
	PRM.flickpage = Boolean(Parameters["Flick PageUp-PageDown"] === 'true' || false);
	PRM.holdaction = Boolean(Parameters["HoldCanvas ActionBtn"] === 'true' || false);
	PRM.outcansel = Boolean(Parameters["OutCanvas CancelBtn"] === 'true' || false);
	PRM.outaction = Boolean(Parameters["OutCanvas ActionBtn"] === 'true' || false);
	PRM.analogmove = Boolean(Parameters["Analog Move"] === 'true' || false);
	PRM.sensitivity = Number(Parameters["Analog Sensitivity"]);
	
	var btn_id=["DirPad","ok","escape"];
	var current_zoom=1;	
	var st_x = 0;
	var st_y = 0;
	var pad_range=PRM.size[0]*PRM.pad_scale;
	var pad_size=pad_range*current_zoom/2;
	var Btn_ready=false;
	var Btn_hide=false;
	var PressBtn=false;
	var dirx=0;
	var diry=0;
	var touchx=0;
	var touchy=0;
	var autofire=false;
	var hvzoom=[1, PRM.vZoom];
	var ua = (function(u){
	  return {
	    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1) || u.indexOf("ipad") != -1 || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1
	  };
	})(window.navigator.userAgent.toLowerCase());

	if(ua.Tablet){
		hvzoom=[PRM.tabZoom, PRM.tabvZoom];
	}
	if (!Utils.isMobileDevice() && !PRM.pcBtn) {PRM.visible[0]=PRM.visible[1]=PRM.visible[2]=false;}

	//-----------------------------------------------------------------------------
	// Locate_DirPad

	function Locate_DirPad() {
		this.initialize.apply(this, arguments);
	}


	Locate_DirPad.prototype.initialize = function() {
		var img = new Image();
		var url = PRM.url[0];
		img.onerror = function() {Graphics.printError('DirPad Image was Not Found:',url);};
		img.src = url;
		img = null;
		this.Div = document.createElement("div");
		this.Div.id = 'Dirpad';
		this.Div.style.position = 'fixed';
		this.Div.style[PRM.spot[0][0].replace(/\s+/g, "")] = String(PRM.pos[0][0]-(pad_range-PRM.size[0])/2)+'px';
		this.Div.style[PRM.spot[0][1].replace(/\s+/g, "")] = String(PRM.pos[0][1]-(pad_range-PRM.size[0])/2)+'px';
		this.Div.style.width = pad_range+'px';
		this.Div.style.height = pad_range+'px';
		this.Div.style.opacity = PRM.opacity;
		this.Div.style.zIndex = '11';
		this.Div.style.userSelect="none";
		this.Div.style["-webkit-tap-highlight-color"]="rgba(0,0,0,0)";
		this.Div.style.background = 'url('+PRM.url[0]+') 50% 50% / '+String(Math.round(PRM.size[0]/pad_range*100))+'% no-repeat';
		
		if(!Utils.isMobileDevice() && PRM.pcBtn){
			this.Div.addEventListener('mousedown', function(e) {
			  if (!SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,true);PressBtn=true;}
			}, false);
			this.Div.addEventListener('mousemove', function(e) {
			  if(PressBtn && !SceneManager.isSceneChanging()){dirope(e.layerX,e.layerY,false);}
			}, false);
			this.Div.addEventListener('mouseup', function() {
				disope();PressBtn=false;
			}, false);
			this.Div.addEventListener('mouseout', function() {
			    disope();PressBtn=false;
			}, false);
		}
		this.Div.addEventListener('touchstart', function(e) {
			PressBtn=true;
			if (!SceneManager.isSceneChanging()){dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,true)};
		}, false);
		this.Div.addEventListener('touchmove', function(e) {
			if (!SceneManager.isSceneChanging()){dirope(e.touches[0].clientX-dirx, e.touches[0].clientY-diry,false)};
			PressBtn=true;
		}, false);
		this.Div.addEventListener('touchend', function() {
			disope();PressBtn=false;
		}, false);
			document.body.appendChild(this.Div);
	};
	
	function dirope(xx,yy,st) {
		touchx=(xx-pad_size)/pad_size;
		touchy=(yy-pad_size)/pad_size;
		if(st && Math.sqrt(touchx*touchx+touchy*touchy)>1){
			disope();
		}else{
			if(touchx>Math.abs(touchy)*PRM.pad_dia){Input._currentState['right']=true;Input._currentState['left']=false;}
			else if(touchx<-Math.abs(touchy)*PRM.pad_dia){Input._currentState['left']=true;Input._currentState['right']=false;}
			else{Input._currentState['left']=false;Input._currentState['right']=false;}
			if(touchy>Math.abs(touchx)*PRM.pad_dia){Input._currentState['down']=true;Input._currentState['up']=false;}
			else if(touchy<-Math.abs(touchx)*PRM.pad_dia){Input._currentState['up']=true;Input._currentState['down']=false;}
			else{Input._currentState['up']=false;Input._currentState['down']=false;}
		}
	}
	function disope() {
		touchx=0; touchy=0;
		Input._currentState['up']=false;
		Input._currentState['down']=false;
		Input._currentState['left']=false;
		Input._currentState['right']=false;
	}
	
	//-----------------------------------------------------------------------------
	// Locate_Button

	function Locate_Button() {
		this.initialize.apply(this, arguments);
	}
	Locate_Button.prototype.initialize = function(type) {
		var img = new Image();
		var url = PRM.url[type];
		img.onerror = function() {Graphics.printError('Button Image was Not Found:',url);};
		img.src = url;
		img = null;
		this.Div = document.createElement("div");
		this.Div.id = btn_id[type]+'Btn';
		this.Div.style.position = 'fixed';
		this.Div.style[PRM.spot[type][0].replace(/\s+/g, "")] = PRM.pos[type][0]+'px';
		this.Div.style[PRM.spot[type][1].replace(/\s+/g, "")] = PRM.pos[type][1]+'px';
		this.Div.style.width = PRM.size[type]+'px';
		this.Div.style.height = PRM.size[type]+'px';
		this.Div.style.opacity = PRM.opacity;
		this.Div.style.zIndex = '11';
		this.Div.style.userSelect="none";
		this.Div.style.background = 'url('+PRM.url[type]+') 0 0 / cover no-repeat';
		
		if(!Utils.isMobileDevice() && PRM.pcBtn){
			this.Div.addEventListener('mousedown', function() {
				Input._currentState[btn_id[type]] = true;PressBtn=true;
			}, false);
			this.Div.addEventListener('mouseover', function() {
			  if(TouchInput.isPressed()){Input._currentState[btn_id[type]] = true;PressBtn=true;return false;}
			}, false);
			this.Div.addEventListener('mouseup', function() {
			  Input._currentState[btn_id[type]] = false;PressBtn=false;
			}, false);
			this.Div.addEventListener('mouseout', function() {
			  Input._currentState[btn_id[type]] = false;PressBtn=false;
			}, false);
		}
		
		this.Div.addEventListener('touchstart', function() {
			if (!SceneManager.isSceneChanging()){Input._currentState[btn_id[type]] = true;PressBtn=true;}
		}, false);
		this.Div.addEventListener('touchend', function() {
			Input._currentState[btn_id[type]] = false;PressBtn=false;
		}, false);
		
		document.body.appendChild(this.Div);
	};

	//-----------------------------------------------------------------------------
	// Replace function
			
	var Scene_Base_start = Scene_Base.prototype.start;
	Scene_Base.prototype.start = function() {
		Scene_Base_start.call(this);
	    if (Utils.isMobileDevice() || PRM.pcBtn) {
			if(!Btn_ready){
				Btn_ready=true;
				if(PRM.visible[0]){this.DirPad = new Locate_DirPad();}
				if(PRM.visible[1]){this.okButton = new Locate_Button(1);}
				if(PRM.visible[2]){this.canselButton = new Locate_Button(2);}
				Graphics._updateRealScale();
				document.documentElement.style["-webkit-user-select"]="none";
				document.addEventListener("touchmove", function(evt) {evt.preventDefault();}, false);
			}
		}
	};
		
	if(PRM.visible[0] || PRM.visible[1] || PRM.visible[2]){
	
		var Game_Temp_setDestination = Game_Temp.prototype.setDestination;
		Game_Temp.prototype.setDestination = function(x, y) {
			Game_Temp_setDestination.apply(this, arguments);
			if(PressBtn){
				this._destinationX = null;
				this._destinationY = null;
			}
		};
		
		var Graphics_updateRealScale = Graphics._updateRealScale;
		Graphics._updateRealScale = function() {
			Graphics_updateRealScale.call(this);
			if (this._stretchEnabled) {
				if(document.getElementById("Dirpad")){
				if(window.innerWidth<window.innerHeight){current_zoom=hvzoom[1];}else{current_zoom=hvzoom[0];}
					pad_size=pad_range*current_zoom/2;
					if(PRM.visible[0]){
						document.getElementById("Dirpad").style.zoom=current_zoom;
						dirx=document.getElementById("Dirpad").offsetLeft*current_zoom;
						diry=document.getElementById("Dirpad").offsetTop*current_zoom;
					}
					if(PRM.visible[1]){document.getElementById("okBtn").style.zoom=current_zoom;}
					if(PRM.visible[2]){document.getElementById("escapeBtn").style.zoom=current_zoom;}
				}
			}
		};
	}
	
	//-----------------------------------------------------------------------------
	// Option

	if(PRM.hideBtn){
		Scene_Base.prototype.hideUserInterface = function() {
			if (Utils.isMobileDevice() || PRM.pcBtn) {Btn_hide=true;
				if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '0';}
				if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '0';}
				if(PRM.visible[2]){document.getElementById("escapeBtn").style.zIndex = '0';}
			}
		};
		Scene_Base.prototype.showUserInterface = function() {
			if (Utils.isMobileDevice() && !Btn_hide || PRM.pcBtn && !Btn_hide) {
				if(PRM.visible[0]){document.getElementById("Dirpad").style.zIndex = '11';}
				if(PRM.visible[1]){document.getElementById("okBtn").style.zIndex = '11';}
				if(PRM.visible[2]){document.getElementById("escapeBtn").style.zIndex = '11';}
			}
		};
	
		var Scene_Map_createMessageWindows = Scene_Map.prototype.createMessageWindow;
		var Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
		var Scene_Map_terminate = Scene_Map.prototype.terminate;
		
		Scene_Map.prototype.createMessageWindow = function() {
			Scene_Map_createMessageWindows.call(this);
			var oldStartMessage = this._messageWindow.startMessage;
			var oldTerminateMessage = this._messageWindow.terminateMessage;
			var scene = this;
			
			this._messageWindow.startMessage = function() {	
				oldStartMessage.apply(this, arguments);
				if($gameMessage.positionType()==2){
					scene.hideUserInterface();
				}
			};
			Window_Message.prototype.terminateMessage = function() {
				oldTerminateMessage.apply(this, arguments);
				Btn_hide=false;
				setTimeout("Scene_Base.prototype.showUserInterface();", 200);
			};
		};
		
		var Scene_Battle_createMessageWindow = Scene_Battle.prototype.createMessageWindow;
		Scene_Battle.prototype.createMessageWindow = function() {
			Scene_Battle_createMessageWindow.call(this);
			var oldStartMessage = this._messageWindow.startMessage;
			var oldTerminateMessage = this._messageWindow.terminateMessage;
			var scene = this;
			this._messageWindow.startMessage = function() {
				oldStartMessage.apply(this, arguments);
				if($gameMessage.positionType()==2){
					scene.hideUserInterface();
				}
			};
			Window_Message.prototype.terminateMessage = function() {
				oldTerminateMessage.apply(this, arguments);
				Btn_hide=false;
				setTimeout("Scene_Base.prototype.showUserInterface();", 200);
			};
		};
	}

	if(Utils.isMobileDevice() || PRM.pcExt){
		if(PRM.holdaction){
			var TouchInput_update = TouchInput.update;
			TouchInput.update = function() {
				TouchInput_update.call(this);
				if (!PressBtn && TouchInput.isLongPressed()) {
					Input._currentState['ok']=true;autofire=true;
				}
				if(!TouchInput.isPressed() && autofire){
					Input._currentState['ok']=false;autofire=false;
				}
			};
		}
		
		if(PRM.flickpage || PRM.outcansel || PRM.outaction){
			TouchInput._endRequest= function(type) {
				Input._currentState[type]=false;
			}
			if(Utils.isMobileDevice()){
				var TouchInput_onTouchStart = TouchInput._onTouchStart;
				TouchInput._onTouchStart = function(event) {
				    TouchInput_onTouchStart.apply(this, arguments);
					var touch = event.changedTouches[0];
					if(!PressBtn){
						st_x = Graphics.pageToCanvasX(touch.pageX);
						st_y = Graphics.pageToCanvasY(touch.pageY);
						if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
							if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
							if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
						}
					}
				};
			}else{
				var TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
				TouchInput._onLeftButtonDown = function(event) {
					TouchInput_onLeftButtonDown.apply(this, arguments);
					if(!PressBtn){
						st_x = Graphics.pageToCanvasX(event.pageX);
						st_y = Graphics.pageToCanvasY(event.pageY);
						if(st_x<0 || st_y<0 || st_x>Graphics.boxWidth || st_y>Graphics.boxHeight){
							if(PRM.outcansel){Input._currentState['escape']=true;setTimeout("TouchInput._endRequest('escape');", 100);}
							if(PRM.outaction){Input._currentState['ok']=true;setTimeout("TouchInput._endRequest('ok');", 100);}
						}
					}
				};
			}
		}
			
		if(PRM.flickpage){
			var TouchInput_onMove = TouchInput._onMove;
			TouchInput._onMove = function(x, y) {
				TouchInput_onMove.apply(this, arguments);
				if(!PressBtn){
					if((st_x-x)<-50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pageup']=true;setTimeout("TouchInput._endRequest('pageup');", 100);}
					if((st_x-x)>50 && Math.abs(st_y-y)<100){st_y=9999;Input._currentState['pagedown']=true;setTimeout("TouchInput._endRequest('pagedown');", 100);}
				}
			}
		}
	}
	
	//AnalogMove.js
	if(PRM.analogmove && Utils.isMobileDevice() || PRM.analogmove && PRM.pcBtn){
		Input.leftStick = function() {
			var threshold = 0.1;
			var x = touchx;
			var y = touchy;
			var tilt = Math.min(1,Math.sqrt(touchx*touchx+touchy*touchy)*PRM.sensitivity);
			var direction = 0.0;
			if (x === 0.0) {
				direction = (-y > 0 ? Math.PI * 0.0 : Math.PI * 1.0);
			} else if (y === 0.0) {
				direction = (-x > 0 ? Math.PI * 0.5 : Math.PI * 1.5);
			} else {
				direction = Math.atan2(-x, -y);
			}
			return {tilt: tilt, direction: direction};
		};
	}
})(UCHU_MobileOperation);
