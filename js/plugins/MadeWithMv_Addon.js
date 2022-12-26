(function() {
 
  var alias_Scene_Splash_start = Scene_Splash.prototype.start;
  Scene_Splash.prototype.start = function() {
      alias_Scene_Splash_start.call(this);
      AudioManager.playBgm($dataSystem.titleBgm);
  };


  
})();