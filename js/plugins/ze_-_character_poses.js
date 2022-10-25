/*:
 * @plugindesc Allows actor and event sprites to have different poses. These are controlled by plugin commands.
 * <pluginID ZE - Character Poses>
 * @author Zalerinian
 *
 * @param Dash Pose
 * @desc When dashing, this pose will be set. Default: [dsh]
 * @default [dsh]
 *
 * @param Jump Pose
 * @desc When jumping, this pose will be set. Default: [jmp]
 * @default [jmp]
 *
 * @param Adaptive Filenames
 * @desc Please see help. Default: false
 * @default false
 *
 * @param Restrict Auto Pose
 * @desc Only change poses for jumping, etc for the player. Default: true
 * @default true
 *
 * @param Enable Multi Frame
 * @desc Enables the plugin to work with Shaz's MoreCharacterFrames plugin. Please see help. Default: false
 * @default false
 *
 * @help
 * ==============================================================================
 *    Support
 * ==============================================================================
 *
 * Have an issue, question, or suggestion? My preferred method of contact would
 * be on the RMW forums, preferably by posing in one of my topics, but if you
 * really need to reach me directly, feel free to PM me, or send me an email
 * using the address below.
 *
 * Author: Zalerinian
 * email: support at razelon.com
 *
 * ==============================================================================
 *    Introduction
 * ==============================================================================
 *
 * ZE - Character Frames allows you to have different character graphics for
 * different actions in the game. It's easier than just setting the character
 * image in an event, and it also allows other plugins to use the pose system to
 * automatically change events or actor's appearances based on the action
 * currently taking place.
 *
 * This plugin will not crash or break down when loading it into an old save
 * file. It aliases the extractSaveContents function of DataManager to add in the
 * needed information, if it is not already there.
 *
 * ==============================================================================
 *    Parameters
 * ==============================================================================
 *
 * Adaptive Filenames
 * ------------------------------------------------------------------------------
 *
 * If this setting is enabled, we will try to match the pose name partially. This
 * means that if only certain poses have multiple frames, then this will try to
 * match those files.
 *
 * Please note that this feature requires the ZE - File List plugin, which
 * maintains a list of all files in the project.
 *
 * Enable Multi Frame
 * ------------------------------------------------------------------------------
 *
 * If this parameter is set to true, instead of directly editing the character's
 * image file, this will call the old, aliased version of setImage. The reason
 * that this feature must be enabled is that by default, setImage will clear the
 * current pose. By calling the alias of the function directly, the pose is not
 * reset, and any changes to setImage in plugins before this will take affect.
 *
 * Please Note: Any changes in setImage will NOT take affect when changing the
 * character's poses if the changes are made in plugins loaded AFTER Character
 * Poses. In order for those changes to take affect when changing character
 * poses with Mutli Frame support, you must place those plugins above this one.
 *
 * ==============================================================================
 *    Plugin Commands
 * ==============================================================================
 *
 * To interact with this plugin via events and plugin commands, we'll be using
 * the CharacterPose, or CharPose, command. Either form is acceptable, and are
 * case-insensitive.
 *
 *
 * There are several different ways to interact with a character's poses.
 *  * Set
 *  * Add
 *  * Play
 *  * Queue
 *  * Loop
 *  * QueueLoop
 *  * Remove
 *  * Clear / Reset
 *
 * The general format for plugin commands is CharPose mode type id pose, where
 *
 * Mode is one of the above commands.
 *
 * Type is "actor", "ev", or "event".
 * 'ev' and 'event' both target events on the map, while 'actor' targets the
 * player's party.
 *
 * ID is the event's ID, as seen in the editor, or the party member's index.
 * Actor IDs start at 0, indicating the party leader, while Event IDs start at 1.
 *
 * There are several ways to define IDs:
 * A single number will indicate one event or actor.
 * A number range, such as 5-8, will apply the change to all events or actors in
 *  that range. The range is inclusive.
 * A list of IDs, separated by commas, such as 1,2,3,4,5. Please note that these
 *  cannot be separated by a space.
 * A game variable can be used by using v[id], where id is the variable's ID.
 *  This is referred to as 'variable notation'.
 *  If the value of a game variable is an array, it will be treated as a list of
 *  IDs.
 *
 * Pose the pose we want to set, add, play, loop, queue, remove, etc.
 * The pose CAN contain spaces. The pose can be any string of characters, but it
 * is generally recommended that poses are wrapped in square brackets ([]).
 *
 *
 * For the Loop and QueueLoop modes, an additional value is needed, to indicate
 * number of times the pose should loop. The format for these commands is
 * CharPose mode loops type id pose.
 *
 * loops < 0 indicates that the pose will loop infinitely, until manually
 * changed.
 * loops == 0 indicates that the pose will be cleared, and the last pose will be
 * reset onto the target.
 * loops > 0 indicates how many times that pose will be looped before it is
 * stopped.
 *
 *
 * Set
 * ------------------------------------------------------------------------------
 *
 * Setting a pose is the most basic way of doing things. This will clear out the
 * current pose that's playing, and favor the supplied pose instead. All other
 * pose modes will internally call this to change the pose.
 *
 * Examples:
 *
 * To set the party leader's pose to "[dsh]", use:
 * CharPose set actor 0 [dsh]
 *
 * To set the pose for events in the range 4 through 12 to [sit], use:
 * CharPose set event 4-12 [sit]
 *
 * To set the pose of an actor whose ID is in variable 2 to [walk], use:
 * CharPose set actor v[2] [walk]
 *
 * Add
 * ------------------------------------------------------------------------------
 *
 * The given pose will be appended to the current pose. This will check to make
 * sure that the current pose is not the one being added.
 *
 * Examples:
 *
 * To add the [dsh] pose to the party leader, use:
 * CharPose add actor 0 [dsh]
 *
 *
 * To add the [fly] pose to event 7, use:
 * CharPose add ev 7 [fly].
 *  * Remember, both 'ev' and 'event' refer to events on the map!
 *
 *
 * Play
 * ------------------------------------------------------------------------------
 *
 * Sets the pose on the character (Sets, not adds), and prevents the character
 * moving. If you want to allow the character to move while playing a pose,
 * you'll need to use set.
 *
 * Examples:
 *
 * To have event 1 play the [hit] pose, use:
 * CharPose play event 1 [hit]
 *
 * To have the 1st follower play the [nod] pose, use:
 * CharPose play actor 1 [nod]
 *
 * Queue
 * ------------------------------------------------------------------------------
 *
 * Adds the pose to the pose queue. If the queue was empty before this call, it
 * will be played immediately. If not, it will be added to the queue to be
 * played when its turn comes. This will only queue a pose to be played once
 * before it will stop. To queue a pose to play more than once, use QueueLoop.
 *
 * Examples:
 *
 * To queue the [charge] pose on events 4, 7, 8, and 11, use:
 * Charpose queue ev 4,7,8,11 [charge]
 *
 * To queue the [fall] pose on event 3, use:
 * CharPose queue event 3 [fall]
 *
 * Loop
 * ------------------------------------------------------------------------------
 *
 * NOTICE: The Loop and QueueLoop commands have a slightly different format,
 * because you need to specify how many loops the pose should do. The modified
 * format is:
 *
 * CharPose loop <loops> <type> <id> <pose>, where <loops> should be replaced by
 * the number of loops, or variable notation.
 *
 *
 * Sets the pose on the character, and prevents the character from moving. Unlike
 * play, this allows a pose to be looped instead of just running once. You can
 * specify the number of loops to perform. 0 or below will loop infinitely, while
 * any number above 0 will make the pose loop that many times.
 *
 * loops < 0: Loop until manually cleared.
 * 0: clears loop
 * loops > 0: Loops the specified number of times.
 *
 *
 * Sometimes, though, you want to get a value from a variable for the number of
 * loops to do. In order to get a value from a variable, instead of specifying a
 * number for the use the format v[#], where # is the Variable ID. The V is
 * case-insensitive. Variable values follow the same rules as directly inputting
 * a number. 0 and below results in an infinite loop, anything higher than 0 will
 * loop that many times.
 *
 *
 * Examples:
 *
 * To loop the [tired] pose 5 times on event 12, use:
 * CharPose loop 5 ev 12 [tired]
 *
 * To infinitely loop the [sleep] pose on event 3 until manually changes, use:
 * CharPose loop -1 ev 3 [sleep]
 *
 * To stop a loop on the party leader, and to return to the pose that was played
 * before this, use:
 * CharPose loop 0 actor 0
 *
 * QueueLoop
 * ------------------------------------------------------------------------------
 *
 * NOTICE: The Loop and QueueLoop commands have a slightly different format,
 * because you need to specify how many loops the pose should do. The modified
 * format is:
 *
 * CharPose queueloop <loops> <type> <id> <pose>, where <loops> should be
 * replaced by the number of loops, or variable notation.
 *
 *
 * Just like queue, this will set the given pose to be played when it is able to.
 * The difference, however, is that you must not specify the number of loops you
 * want it to do. If you don't specify a number, an error will be thrown.
 *
 * Examples:
 *
 * To queue the [sing] pose to loop 4 times on the 2nd follower, use:
 * CharPose QueueLoop 4 actor 2 [sing]
 *
 * To queue the [talk] pose to loop twice on event 10, use:
 * CharPose QueueLoop 2 event 10 [talk]
 *
 * Remove
 * ------------------------------------------------------------------------------
 *
 * This will remove the specified pose from the character. Please note, this will
 * only work if the pose you want to remove is on the END of the list. If you
 * want to remove multiple poses at once, you can put them all in one composite
 * plugin command, but keep in mind that the new pose still has to exist as a
 * file, or the character will disappear and an error will be thrown on the next
 * scene change.
 *
 * Examples:
 *
 * To remove the [jmp] pose from the party leader and first 2 followers, use:
 * CharPose remove actor 0-2 [jmp]
 *
 * To remove the [sit] pose from event 4, use:
 * CharPose remove event 4 [sit]
 *
 * Clear / Reset
 * ------------------------------------------------------------------------------
 *
 * This will remove all poses from the character, and set them back to their
 * default sprites.
 *
 * Examples:
 *
 * To rest the party leader back to their base sprite, use:
 * CharPose clear actor 0
 */

 (function() {
  if(Imported.MVCommons && PluginManager.version("MVCommons", ">=", "1.5.0")) {
    var author = [{
      email: "support@razelon.com",
      name: "Zalerinian",
      website: "http://www.razelon.com"
      }];
    var v = PluginManager.register("ZE - Character Poses", "1.1.1", PluginManager.getBasicPlugin("ZE - Character Poses").description, author, "2015-12-05");
    if (v === false){
      PluginManager.printPlugin("ZE - Character Poses");
      throw new Error("Unable to load ZE - Character Poses due to registration failure! Is there another version running?");
    }
  } else {
    throw new Error("ZE - Character Poses requires the MVCommons plugin, version 1.5.0 or higher");
  }
})();

var Imported = Imported || {};
var Zale = Zale || {};
Zale.CharPose = {};

(function(){
  var params = PluginManager.parameters("ZE - Character Poses");
  Zale.CharPose.PARAMS   = params;
  Zale.CharPose.DASHPOSE = params["Dash Pose"];
  Zale.CharPose.JUMPPOSE = params["Jump Pose"];
  Zale.CharPose.ADAPTIVE = MVC.Boolean(params["Adaptive Filenames"]);
  Zale.CharPose.RESTRICT = MVC.Boolean(params["Restrict Auto Pose"]);
  Zale.CharPose.MULTIFRM = MVC.Boolean(params["Enable Multi Frame"]);

  /*
   * Game_Interpreter.prototype._charposeGetLoops(str)
   * @param {String} str The string indicating loop settings.
   * @note
   * This function interprets the give string and returns the number of loops the
   * pose will perform. If no loop count could be found, an error is thrown.
   *
   * This function only supports variable notation (v[id]), and directly
   * inserting a number for how many loops to do.
   *
   * @return {Number} The number of loops.
   */
  Game_Interpreter.prototype._charposeGetLoops = function(str) {
    var tmp;
    if(tmp = str.match(/v\[(\d+)\]/i)) {
      return $gameVariables.value(Number(tmp[1]));
    } else if(tmp = str.match(/(\d+)/)) {
      return Number(tmp[1]);
    } else {
      throw new Error("No number of loops specified for " + mode + " pose change.<br/>\nev" + this._eventId + ":" + this._index);
    }
  }

  /*
   * Game_Interpreter.prototype._charposeGetID(str)
   * @param {String} str The string indicating character ID settings.
   * @note
   * This function interprets the give string and returns an array of IDs that
   * the current pose change should affect.
   *
   * This function supports variable notation (v[id]), range notation (1-5),
   * comma notation (1,2,3,4,5), and directly inserting an ID to use.
   *
   * With variable notation, if the value received is an array already, it is
   * returned as-is, assuming that it is properly formatted as all ID numbers.
   * If the variable is not an array, it is returned as it is in a new array.
   *
   * If no ID format could be found, an error is thrown.
   *
   * @return {Array} An array of IDs to act on.
   */
  Game_Interpreter.prototype._charposeGetID = function(str) {
    var tmp;
    if(tmp = str.match(/v\[(\d+)\]/i)) {
      var v = $gameVariables.value(Number(tmp[1]));
      if(MVC.isArray(v)) {
        return v;
      }
      return [$gameVariables.value(Number(tmp[1]))];
    } else if(tmp = str.match(/(\d+)-(\d+)/)) {
      var ret = [];
      for(var i = Number(tmp[1]); i <= Number(tmp[2]); i++) {
        ret.push(i);
      }
      return ret;
    } else if(tmp = str.match(/,/)) {
      return str.split(',').map(function(v) {
        return Number(v);
      })
    } else if(tmp = str.match(/(\d+)/)) {
      return [Number(tmp[1])];
    } else {
      throw new Error("No target ID specified for " + mode + " pose change.<br/>\nev" + this._eventId + ":" + this._index);
    }
  }

  /*
   * Game_Interpreter.prototype.pluginCommand(cmd, args)
   * @param {String} cmd The command identifier.
   * @param {Array} args An array of strings indicating command parameters.
   * @note
   * This function is the main point of interaction for the plugin. It will
   * ensure that the command is CharPose, or CharacterPose, case-insensitive,
   * and from there all required information is pulled from the arguments.
   *
   * In order to support affecting multiple characters at one time, the code that
   * actually changes poses is in a for loop, and the characters are changed in
   * reverse order of that from the array. This is to reduce the number of times
   * 'ids.length' is called, as that is a function call that will slightly
   * increase run time per loop. Going backwards allows us to avoid this.
   *
   * If a valid target could not be selected, an error is thrown.
   *
   */
  Zale.CharPose.GI_pcmd_IOnabqiuABXZCV4w = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(cmd, args) {
    if(cmd.match(/Char(?:acter)?Pose/i)) {
      var command = cmd + " " + args.join(" ");
      var tmp    = "";
      var mode   = args.shift().toLowerCase();
      var loops  = 0;
      if(["loop", "queueloop"].contains(mode)) {
        loops = this._charposeGetLoops(args.shift())
      }
      if(loops < 0) {
        console.warn("An infinite pose loop has been started by Event " + this._eventId + ", line " + this._index);
      }
      var ttype  = args.shift();
      var ids    = this._charposeGetID(args.shift());
      var pose   = args.join(" ");
      for(var i = ids.length - 1; i >= 0; i--) {
        var target = null;
        var id = ids[i] - 1;
        if(ttype.match(/ev(?:ent)?/i)){
          target = $gameMap.events()[id];
          ttype = "Event";
        } else if(ttype.match(/actor/i)) {
          target = [$gamePlayer].concat($gamePlayer.followers().visibleFollowers())[id];
          ttype = "Actor";
        }
        if(!target) {
          throw new Error("Invalid target! Event: " + this._eventId + ":" + this._index + ". Command: " + command + "<br/>\nMode: " + mode + " | ID: " + id + " | Pose: \'" + pose + "\' | Target: " + target + " | Target Type: " + ttype);
        }
        switch(mode) {
          case "add":
            target.addPose(pose);
            break;
          case "remove":
            target.removePose(pose);
            break;
          case "play":
            target.playPose(pose);
            break;
          case "queue":
            target.queuePose({pose: pose, loop: 1});
            break;
          case "loop":
            target.loopPose({pose: pose, loops: loops});
            break;
          case "queueloop":
            target.queuePose({pose: pose, loops: loops});
            break;
          case "clear":
          case "reset":
            target.clearPose();
            break;
          case "set":
          default:
            target.setPose(pose);
            break;
        }
      }
    }
    Zale.CharPose.GI_pcmd_IOnabqiuABXZCV4w.call(this, cmd, args);
  }

  /*
   * DataManager.extractSaveContents(contents)
   * @param {Object} contents The JS object that has all the sae data.
   * @note
   * This function has been aliased to allow the plugin to fix itself when the
   * plugin is installed in a game, and then used with new saves. We don't need
   * to worry about updating all the map events to support the new data, because
   * part of Scene_Load checks an internal version ID that's stored in
   * $gameSystem, and if the ID in $dataSystem is different than that of
   * $gameSystem, then the whole map is reloaded to ensure we aren't missing any
   * data (Because the map you save on is stored in the save file as well).
   */
  Zale.CharPose.DM_extractSaveContents = DataManager.extractSaveContents;
  DataManager.extractSaveContents = function(contents) {
    Zale.CharPose.DM_extractSaveContents.call(this, contents);
    if($gamePlayer._currentPose === undefined) {
      $gamePlayer._currentPose  = "";
      $gamePlayer._originalName = "";
      $gamePlayer._lastPose     = "";
      $gamePlayer._poseQueue    = [];
      $gamePlayer._loopCount    = 0;
      $gamePlayer._posePlaying  = false;
      $gamePlayer._poseLooping  = false;
    }
  }


  /*
   * Game_CharacterBase.prototype.isMoving()
   * @note
   * This function was aliased to return true if a pose is currently being played
   * for the current character. This both ensure that the character's pattern is
   * updated, and also that the character cannot move until the pose is finished
   * playing.
   */
  Zale.CharPose.GCB_ismov_BOivqicb42c = Game_CharacterBase.prototype.isMoving;
  Game_CharacterBase.prototype.isMoving = function() {
    if(this._posePlaying) {
      return true;
    } else {
      return Zale.CharPose.GCB_ismov_BOivqicb42c.call(this);
    }
  }

  /*
   * Game_CharacterBase.prototype.initMembers()
   * @note
   * This function is aliased in order to add in variables to each character so
   * that we may properly track and update the poses each character will have.
   */
  Zale.CharPose.GCB_initm_IONCOIEvbiehrewih = Game_CharacterBase.prototype.initMembers;
  Game_CharacterBase.prototype.initMembers = function() {
    Zale.CharPose.GCB_initm_IONCOIEvbiehrewih.call(this);
    this._currentPose  = "";
    this._originalName = "";
    this._lastPose     = "";
    this._poseQueue    = [];
    this._loopCount    = 0;
    this._posePlaying  = false;
    this._poseLooping  = false;
  }

  /*
   * Game_CharacterBase.prototype.setImage(cname, cindex)
   * @param {String} cname The image name for the character sheet.
   * @param {Number} cindex The index of the character on the spritesheet.
   * @note
   * This function is aliased so that when the character's image is set, all pose
   * information is cleared, as the character's base has changed.
   */
  Zale.CharPose.GCB_simg_NVbe8vhll = Game_CharacterBase.prototype.setImage;
  Game_CharacterBase.prototype.setImage = function(cname, cindex) {
    Zale.CharPose.GCB_simg_NVbe8vhll.call(this, cname, cindex);
    this._originalName = cname;
    this._currentPose  = "";
    this._lastPose     = "";
    this._poseQueue    = [];
    this._loopCount    = 0;
    this._posePlaying  = false;
    this._poseLooping  = false;
  }

  /*
   * Game_CharacterBase.prototype.updatePattern()
   * @note
   * This function was aliased to allow us to check when a pose has run one
   * complete animation. By using isOriginalPattern, we are more likely to be
   * compatible with other plugins that change how the spritesheets work, such
   * as Shaz' MoreCharacterFrames plugin.
   *
   * This is also where we check out loop counters, and decrease it if necessary.
   */
  Zale.CharPose.GCB_upattern_Qhdn19vbejA = Game_CharacterBase.prototype.updatePattern;
  Game_CharacterBase.prototype.updatePattern = function() {
    Zale.CharPose.GCB_upattern_Qhdn19vbejA.call(this);
    if(this.isOriginalPattern() && this._posePlaying && (this._isMultiFrame || !this._isMultiFrame && this._pattern !== 3)) {
      if(!this._poseLooping || this._posePlaying && this._loopCount === 0) {
        this.setPose(this._lastPose);
        this.checkPoseQueue();
      }
      if(this._loopCount > 0) {
        --this._loopCount;
      }
    }
  }

  /*
   * Game_CharacterBase.prototype.updateStop()
   * This function is aliased to remove the dash pose if we're stopped moving.
   * This will only take affect if the Restrict setting is false or the setting
   * is true and this object is a Game_Player, and if the current pose is the
   * dashing pose.
   */
  Zale.CharPose.GCB_ustop_BXovinocwio49c = Game_CharacterBase.prototype.updateStop;
  Game_CharacterBase.prototype.updateStop = function() {
    Zale.CharPose.GCB_ustop_BXovinocwio49c.call();
    if((!Zale.CharPose.RESTRICT || Zale.CharPose.RESTRICT && this instanceof Game_Player) && this.poseIs(Zale.CharPose.DASHPOSE)) {
      this.removePose(Zale.CharPose.DASHPOSE);
    }
  }

  /*
   * Game_CharacterBase.prototype.jump(xp, yp)
   * @param {Number} xp The addition to the X coordinate.
   * @param {Number} yp The addition to the Y coordinate.
   * @note
   * Similar to updateStop, but this function will add the jump pose if the
   * conditions allow.
   */
  Zale.CharPose.GCB_jump_IObinbqdoif = Game_CharacterBase.prototype.jump;
  Game_CharacterBase.prototype.jump = function(xp, yp) {
    Zale.CharPose.GCB_jump_IObinbqdoif.call(this, xp, yp);
    if(!Zale.CharPose.RESTRICT || Zale.CharPose.RESTRICT && this instanceof Game_Player) {
      this.setPose(Zale.CharPose.JUMPPOSE);
    }
  }

  /*
   * Game_CharacterBase.prototype.updateJump()
   * @note
   * Also similar to updateStop, this function will remove the jump pose if the
   * conditions apply.
   */
  Zale.CharPose.GCB_ujump_Bve9b42o9chnq = Game_CharacterBase.prototype.updateJump;
  Game_CharacterBase.prototype.updateJump = function() {
    Zale.CharPose.GCB_ujump_Bve9b42o9chnq.call(this);
    if((!Zale.CharPose.RESTRICT || Zale.CharPose.RESTRICT && this instanceof Game_Player) && this._jumpCount === 0) {
      this.removePose(Zale.CharPose.JUMPPOSE);
    }
  }

  /*
   * Game_CharaterBase.prototype.updateMove()
   * @note
   * This function was aliased to both add and remove the dash pose for a
   * character, depending on whether or not they're dashing or not. As with other
   * functions, this is subject to the Restrict setting for only allowing the
   * player to change poses automatically.
   */
  Zale.CharPose.GCB_umove_Bc99eboiufg = Game_CharacterBase.prototype.updateMove;
  Game_CharacterBase.prototype.updateMove = function() {
    Zale.CharPose.GCB_umove_Bc99eboiufg.call(this);
    if(!Zale.CharPose.RESTRICT || Zale.CharPose.RESTRICT && this instanceof Game_Player) {
      if(this.isMoving()) {
        if(this.isDashing()) {
          this.setPose(Zale.CharPose.DASHPOSE);
        } else {
          this.removePose(Zale.CharPose.DASHPOSE);
        }
      }
    }
  }

  /*
   * Game_CharacterBase.prototype.poseIs(pose)
   * @param {String} pose The pose to check for
   * @note
   * This function will take the given pose, and return true if that is he last
   * pose on the current list. Keep in mind that checking if the pose ends with
   * an empty string, i.e. "" or '', will return true for any value.
   */
  Game_CharacterBase.prototype.poseIs = function(pose) {
    return this._currentPose.endsWith(pose);
  }

  /*
   * Game_CharacterBase.prototype.setPose(pose)
   * @param {String} pose The pose to set the character to
   * @note
   * This function is the main one, and is internally called by all others. This
   * function takes into consideration a few things to ensure compatibility, and
   * functionality.
   * As noted in it's description in the Help Text, the adaptive filename feature
   * will only work if the ZE - File List plugin is included in the game. As long
   * as the pose we want to set to isn't empty, the adaptive filenames feature
   * will try it's best to match the character's original name and new pose with
   * an existing image file. If the search didn't return any results, we fall
   * back to using the character's current name and new pose as their image.
   *
   * The reason we have the Enable Multi Frame parameter is because the setImage
   * function was aliased and changed to reset all pose information when set.
   * However, that's also where Shaz' MoreCharacterFrames plugin sets up its
   * data. Rather than just building in compatibility with that plugin alone, I
   * opted to have this function call the alias of setImage, which is the
   * function as it worked before this plugin was loaded in. This allows us to
   * still use the changes people made before us, without resetting the pose
   * data.
   *
   * And then finally we just clear some flags and set the current pose to the
   * one we're currently on.
   */
  Game_CharacterBase.prototype.setPose = function(pose) {
    if(pose !== this._currentPose && (!this.poseIs(pose) || pose === "")) {
      this._lastPose = this._currentPose;
      var img = this._originalName;
      if(Zale.CharPose.ADAPTIVE && Imported["ZE - File List"] && FileList._list) {
        if(pose !== "") {
          var regex = new RegExp("characters\/" + this._originalName.escape() + "[\\-\\[\\]\+A-Za-z0-9 ]*" + pose.escape(), "i");
          var img = FileList.scanWithPath(regex);
          if(MVC.isArray(img) && img.length === 0){
            img = this._originalName + pose
          } else {
            img = img[0].basename(".png");
          }
        }
      } else {
        img = this._originalName + pose;
      }
      if(Zale.CharPose.MULTIFRM) {
        Zale.CharPose.GCB_simg_NVbe8vhll.call(this, img, this._characterIndex);
      } else {
        this._characterName = img;
      }
      this._currentPose = pose;
      this._posePlaying = false;
      this._poseLooping = false;
      this._loopCount   = 0;
    }
  }

  /*
   * Game_CharacterBase.prototype.addPose(pose)
   * @param {String} pose The pose to add onto the character
   * @note
   * This function takes the given pose and appends it onto the character's
   * current pose, rather than setting the whole thing directly. This will make
   * sure that the current pose is not already the one we're adding, so as to not
   * duplicate the current pose.
   */
  Game_CharacterBase.prototype.addPose = function(pose) {
    if(!this.poseIs(pose)) {
      this.setPose(this._currentPose + pose);
    }
  }

  /*
   * Game_CharacterBase.prototype.removePose(pose)
   * @param {String} pose The pose to remove.
   * @note
   * This function will remove the given pose from the current pose. This will
   * not make sure that the new pose exists. If it doesn't, the character will be
   * assigned an empty sprite automatically, and will appear to has vanished.
   * Additionally, since this results in a bitmap not loading properly, going
   * to the menu scene will crash the game when it check for errors in the
   * ImageManager.
   *
   * I had considered making an error handler for the Bitmap class, and removing
   * the error should this occur, but have not implemented it. If there is a need
   * for it later on, I can add it in, but for now it is not included.
   *
   * @return The new pose, or null if the pose couldn't be removed.
   */
  Game_CharacterBase.prototype.removePose = function(pose) {
    if(this._currentPose.lastIndexOf(pose) >= 0) {
      this.setPose(this._currentPose.splice(this._currentPose.lastIndexOf(pose), pose.length));
      return this._currentPose;
    }
    return null;
  }

  /*
   * Game_CharacterBase.prototype.clearPose()
   * @note
   * this function will clear the pose by setting it to an empty string.
   */
  Game_CharacterBase.prototype.clearPose = function() {
    this.setPose("");
  }

  /*
   * Game_CharacterBase.prototype.clearPoseQueue()
   * @note
   * This function clears the pose queue by setting it back to an empty array.
   */
  Game_CharacterBase.prototype.clearPoseQueue = function() {
    this._poseQueue = [];
  }

  /*
   * Game_CharacterBase.prototype.queuePose(poseObj)
   * @param {Object} poseObj A JS object with 'pose' and 'loops' properties.
   * @note
   * This function will add the given pose object to the queue, and then call the
   * checkPoseQueue function if no pose is currently playing.
   */
  Game_CharacterBase.prototype.queuePose = function(poseObj) {
    this._poseQueue.push(poseObj);
    if(!this._posePlaying) {
      this.checkPoseQueue();
    }
  }

  /*
   * Game_CharacterBase.prototype.poseQueueEmpty()
   * @note
   * This function will return true if the pose queue is empty.
   * @return {Boolean} Whether or not the pose queue is emtpy.
   */
  Game_CharacterBase.prototype.poseQueueEmpty = function() {
    return this._poseQueue.length === 0;
  }

  /*
   * Game_CharacterBase.prototype.checkPoseQueue()
   * @note
   * This function will check if the the pose queue is empty. If it isn't, the
   * first pose in the list will be taken out, and sent to loopPose. Keep in
   * mind, the pose queue is based on First In, First Out (FIFO).
   */
  Game_CharacterBase.prototype.checkPoseQueue = function() {
    if(!this.poseQueueEmpty()) {
      var pose = this._poseQueue.shift();
      this.loopPose(pose.pose, pose.loops);
    }
  }

  /*
   * Game_CharacterBase.prototype.playPose(pose)
   * @param {String} pose The pose to play.
   * @note
   * This will set the character's pose to the one given to this function, and
   * then set some flags to indicate that this pose is being played. The
   * character will not be able to move until the pose is complete.
   */
  Game_CharacterBase.prototype.playPose = function(pose) {
    this.setPose(pose);
    this._poseLooping = false;
    this._posePlaying = true;
    this.resetStopCount();
    this.resetPattern();
  }

  /*
   * Game_CharacterBase.prototype.loopPose(pose, loops)
   * @param {String} pose The pose to loop on the character.
   * @param {Number} loops The number of times to loop the pose.
   * @note
   * This function will call playPose on the given pose, but also set an
   * additional flag indicating that the pose is looping, and a loop
   * counter, indiciating how many more loops are left on the current pose.
   *
   * One is subtracted from the loop counter before it begins, because otherwise
   * it would loop one too many times, as the counter is, in reality, the number
   * of times the pose has to be replayed. We subtract one here to show that it's
   * been played once already, since the counter is not updated again until after
   * the pose is done playing.
   */
  Game_CharacterBase.prototype.loopPose = function(pose, loops) {
    if(loops === 0) {
      console.log("0 loops requested - Setting pose to last stored value.");
      this.setPose(this._lastPose);
      return;
    }
    this.playPose(pose);
    this._loopCount   = (--loops || 0);
    this._poseLooping = true;
  }
})();