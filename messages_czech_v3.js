/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 *
 * After modifying this file, run `npm run translate` from the root directory
 * to regenerate `./msg/json/en.json`.
 * IMPORTANT:
 * All message strings must use single quotes for the scripts to work properly
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = 'opakuj stále';
Blockly.Msg.CONTROL_REPEAT = 'opakuj %1 krát';
Blockly.Msg.CONTROL_IF = 'když %1 tak';
Blockly.Msg.CONTROL_ELSE = 'jinak';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'čekej %1 sekund';
Blockly.Msg.CONTROL_WAIT_MILLISECONDS = 'čekej %1 milisekund';
Blockly.Msg.CONTROL_WAITUNTIL = 'čekej dokud nenastane %1';
Blockly.Msg.CONTROL_REPEATUNTIL = 'opakuj dokud nenastane %1';
Blockly.Msg.CONTROL_WHILE = 'while %1';
Blockly.Msg.CONTROL_FOREACH = 'for each %1 in %2';
Blockly.Msg.CONTROL_STARTASCLONE = 'when I start as a clone';
Blockly.Msg.CONTROL_CREATECLONEOF = 'create clone of %1';
Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF = 'myself';
Blockly.Msg.CONTROL_DELETETHISCLONE = 'delete this clone';
Blockly.Msg.CONTROL_COUNTER = 'counter';
Blockly.Msg.CONTROL_INCRCOUNTER = 'increment counter';
Blockly.Msg.CONTROL_CLEARCOUNTER = 'clear counter';
Blockly.Msg.CONTROL_ALLATONCE = 'all at once';

// Data blocks
Blockly.Msg.DATA_BUTTONCREATE = 'Vytvoř proměnnou';
Blockly.Msg.DATA_BUTTONMANAGE = 'Spravuj proměnné';
Blockly.Msg.DATA_SETVARIABLETO = 'nastav %1 na %2';
Blockly.Msg.DATA_INCVARIABLE = 'zvyš o jedna %1';
Blockly.Msg.DATA_DECVARIABLE = 'sniž o jedna %1';
Blockly.Msg.DATA_BITSHIFTLEFT = 'udělej bitový posun proměnné %1 doleva o %2';
Blockly.Msg.DATA_BITSHIFTRIGHT = 'udělej bitový posun proměnné %1 doprava o %2';


Blockly.Msg.DATA_CHANGEVARIABLEBY = 'change %1 by %2';
Blockly.Msg.DATA_SHOWVARIABLE = 'show variable %1';
Blockly.Msg.DATA_HIDEVARIABLE = 'hide variable %1';
Blockly.Msg.DATA_ADDTOLIST = 'add %1 to %2';
Blockly.Msg.DATA_DELETEOFLIST = 'delete %1 of %2';
Blockly.Msg.DATA_DELETEALLOFLIST = 'delete all of %1';
Blockly.Msg.DATA_INSERTATLIST = 'insert %1 at %2 of %3';
Blockly.Msg.DATA_REPLACEITEMOFLIST = 'replace item %1 of %2 with %3';
Blockly.Msg.DATA_ITEMOFLIST = 'item %1 of %2';
Blockly.Msg.DATA_ITEMNUMOFLIST = 'item # of %1 in %2';
Blockly.Msg.DATA_LENGTHOFLIST = 'length of %1';
Blockly.Msg.DATA_LISTCONTAINSITEM = '%1 contains %2?';
Blockly.Msg.DATA_SHOWLIST = 'show list %1';
Blockly.Msg.DATA_HIDELIST = 'hide list %1';
Blockly.Msg.DATA_INDEX_ALL = 'all';
Blockly.Msg.DATA_INDEX_LAST = 'last';
Blockly.Msg.DATA_INDEX_RANDOM = 'random';

// Event blocks
Blockly.Msg.EVENT_ANY_OBSTACLE = 'Zjištěna překážka';
Blockly.Msg.EVENT_OBSTACLE_AHEAD = 'Zjištěna překážka vepředu';
Blockly.Msg.EVENT_OBSTACLE_LEFT = 'Zjištěna překážka vlevo';
Blockly.Msg.EVENT_OBSTACLE_RIGHT = 'Zjištěna překážka vpravo';
Blockly.Msg.EVENT_CLAP = 'Tlesknutí';
Blockly.Msg.EVENT_BUTTON_TRIANGLE = 'Trojúhelníkové tlačítko zmáčknuto';
Blockly.Msg.EVENT_BUTTON_ROUND = 'Kulaté tlačítko zmáčknuto';
Blockly.Msg.EVENT_LINE_REFLECTIVE = 'Senzor sledování čáry na odrazivém povrchu';
Blockly.Msg.EVENT_LINE_NON_REFLECTIVE = 'Senzor sledování čáry na neodrazivém povrchu';
Blockly.Msg.EVENT_LINE_CHANGE = 'Senzor sledování čáry zaznamenal změnu povrchu';
Blockly.Msg.EVENT_MESSAGE = 'IR zpráva přijata';
Blockly.Msg.EVENT_REMOTE = 'Kód z ovladače přijat';
Blockly.Msg.EVENT_START = 'Start';




// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = 'say %1 for %2 seconds';
Blockly.Msg.LOOKS_SAY = 'say %1';
Blockly.Msg.LOOKS_HELLO = 'Hello!';
Blockly.Msg.LOOKS_THINKFORSECS = 'think %1 for %2 seconds';
Blockly.Msg.LOOKS_THINK = 'think %1';
Blockly.Msg.LOOKS_HMM = 'Hmm...';
Blockly.Msg.LOOKS_SHOW = 'show';
Blockly.Msg.LOOKS_HIDE = 'hide';
Blockly.Msg.LOOKS_HIDEALLSPRITES = 'hide all sprites';
Blockly.Msg.LOOKS_EFFECT_COLOR = 'color';
Blockly.Msg.LOOKS_EFFECT_FISHEYE = 'fisheye';
Blockly.Msg.LOOKS_EFFECT_WHIRL = 'whirl';
Blockly.Msg.LOOKS_EFFECT_PIXELATE = 'pixelate';
Blockly.Msg.LOOKS_EFFECT_MOSAIC = 'mosaic';
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = 'brightness';
Blockly.Msg.LOOKS_EFFECT_GHOST = 'ghost';
Blockly.Msg.LOOKS_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.LOOKS_SETEFFECTTO = 'set %1 effect to %2';
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = 'clear graphic effects';
Blockly.Msg.LOOKS_CHANGESIZEBY = 'change size by %1';
Blockly.Msg.LOOKS_SETSIZETO = 'set size to %1 %';
Blockly.Msg.LOOKS_SIZE = 'size';
Blockly.Msg.LOOKS_CHANGESTRETCHBY = 'change stretch by %1';
Blockly.Msg.LOOKS_SETSTRETCHTO = 'set stretch to %1 %';
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = 'switch costume to %1';
Blockly.Msg.LOOKS_NEXTCOSTUME = 'next costume';
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = 'switch backdrop to %1';
Blockly.Msg.LOOKS_GOTOFRONTBACK = 'go to %1 layer';
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = 'front';
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = 'back';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = 'go %1 %2 layers';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = 'forward';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = 'backward';
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = 'backdrop %1';
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = 'costume %1';
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = 'number';
Blockly.Msg.LOOKS_NUMBERNAME_NAME = 'name';
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = 'switch backdrop to %1 and wait';
Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK = 'next backdrop';
Blockly.Msg.LOOKS_NEXTBACKDROP = 'next backdrop';
Blockly.Msg.LOOKS_PREVIOUSBACKDROP = 'previous backdrop';
Blockly.Msg.LOOKS_RANDOMBACKDROP = 'random backdrop';

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = 'move %1 steps';
Blockly.Msg.MOTION_TURNLEFT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_TURNRIGHT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_POINTINDIRECTION = 'point in direction %1';
Blockly.Msg.MOTION_POINTTOWARDS = 'point towards %1';
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_POINTTOWARDS_RANDOM = 'random direction';
Blockly.Msg.MOTION_GOTO = 'go to %1';
Blockly.Msg.MOTION_GOTO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GOTO_RANDOM = 'random position';
Blockly.Msg.MOTION_GOTOXY = 'go to x: %1 y: %2';
Blockly.Msg.MOTION_GLIDESECSTOXY = 'glide %1 secs to x: %2 y: %3';
Blockly.Msg.MOTION_GLIDETO = 'glide %1 secs to %2';
Blockly.Msg.MOTION_GLIDETO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GLIDETO_RANDOM = 'random position';
Blockly.Msg.MOTION_CHANGEXBY = 'change x by %1';
Blockly.Msg.MOTION_SETX = 'set x to %1';
Blockly.Msg.MOTION_CHANGEYBY = 'change y by %1';
Blockly.Msg.MOTION_SETY = 'set y to %1';
Blockly.Msg.MOTION_IFONEDGEBOUNCE = 'if on edge, bounce';
Blockly.Msg.MOTION_SETROTATIONSTYLE = 'set rotation style %1';
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = 'left-right';
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = 'don\'t rotate';
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = 'all around';
Blockly.Msg.MOTION_XPOSITION = 'x position';
Blockly.Msg.MOTION_YPOSITION = 'y position';
Blockly.Msg.MOTION_DIRECTION = 'direction';
Blockly.Msg.MOTION_SCROLLRIGHT = 'scroll right %1';
Blockly.Msg.MOTION_SCROLLUP = 'scroll up %1';
Blockly.Msg.MOTION_ALIGNSCENE = 'align scene %1';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = 'bottom-left';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = 'bottom-right';
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = 'middle';
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = 'top-left';
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = 'top-right';
Blockly.Msg.MOTION_XSCROLL = 'x scroll';
Blockly.Msg.MOTION_YSCROLL = 'y scroll';
Blockly.Msg.MOTION_STAGE_SELECTED = 'Stage selected: no motion blocks';

// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'náhodné číslo mezi %1 a %2';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_LT_EQUAL = '%1 <= %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_GT_EQUAL = '%1 >= %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_AND = '%1 a zároveň %2';
Blockly.Msg.OPERATORS_OR = '%1 nebo %2';
Blockly.Msg.OPERATORS_NOT_EQUALS = '%1 != %2';
Blockly.Msg.OPERATORS_NOT = 'neplatí, že %1';
Blockly.Msg.OPERATORS_ABS = 'absolutní hodnota z %1';
Blockly.Msg.OPERATORS_BETWEEN = '%1 je mezi %2 a %3';



// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// Sensing blocks
Blockly.Msg.SENSING_TURN_LINE_TRACKING_LED = 'senzor sledování čáry %1';
Blockly.Msg.SENSING_TURN_OBSTACLE_BEAM = 'paprsek pro zjišťování překážek %1';
Blockly.Msg.SENSING_CLEAR_SENSOR = 'smaž data %1';
Blockly.Msg.SENSING_CLAP_DETECTED = 'tlesknutí';
Blockly.Msg.SENSING_BUTTON_PRESSED = '%1 tlačítko zmáčknuto';
Blockly.Msg.SENSING_OBSTACLE = 'překážka zjištěna %1';
Blockly.Msg.SENSING_LINE_TRACKER = 'senzor sledování čáry na %1 povrchu';
Blockly.Msg.SENSING_REMOTE_NUM = 'kód z ovladače';
Blockly.Msg.SENSING_IR_MESSAGE_DETECTED = 'přijata IR zpráva';
Blockly.Msg.SENSING_IR_MESSAGE = 'číslo přijaté IR zprávy';
Blockly.Msg.SENSING_LIGHT_LEVEL = 'úroveň osvětlení z %1';

Blockly.Msg.COMMENT_USER_COMMENT = 'komentář: %1';

Blockly.Msg.ADVANCED_USB_SEND_DATA = 'pošli %1 přes USB';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA = 'data received from USB';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA_VAR = 'čekej na data z USB a ulož je do %1';


// Sound blocks
Blockly.Msg.SOUND_BEEP = "pípni";
Blockly.Msg.SOUND_PLAY_NOTE = 'zahraj %1 notu %2 %3';
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_WHOLE = "celou";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_HALF = "půlovou";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_QUARTER = "čtvrťovou";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_EIGHTH = "osminovou";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_C = "C";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_B = "H";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_A = "A";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_G = "G";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_F = "F";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_E = "E";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_D = "D";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_MID_C = "střední C";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_LOW_B = "nízké H";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_NOTE_REST = "pomlku";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_NORMAL = " - ";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_SHARP = "křížek";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_MOD_FLAT = "béčko";

Blockly.Msg.SOUND_SET_TEMPO = "nastav tempo na %1";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_SLOW = "velmi pomalé";
Blockly.Msg.SOUND_SET_TEMPO_DROP_SLOW = "pomalé";
Blockly.Msg.SOUND_SET_TEMPO_DROP_MEDIUM = "střední";
Blockly.Msg.SOUND_SET_TEMPO_DROP_FAST= "rychlé";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_FAST = "velmi rychlé";

Blockly.Msg.SOUND_PLAY_IN_BACKGROUND = "hraj hudbu na pozadí";


Blockly.Msg.SOUND_PLAY = 'start sound %1';
Blockly.Msg.SOUND_PLAYUNTILDONE = 'play sound %1 until done';
Blockly.Msg.SOUND_STOPALLSOUNDS = 'stop all sounds';
Blockly.Msg.SOUND_SETEFFECTO = 'set %1 effect to %2';
Blockly.Msg.SOUND_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.SOUND_CLEAREFFECTS = 'clear sound effects';
Blockly.Msg.SOUND_EFFECTS_PITCH = 'pitch';
Blockly.Msg.SOUND_EFFECTS_PAN = 'pan left/right';
Blockly.Msg.SOUND_CHANGEVOLUMEBY = 'change volume by %1';
Blockly.Msg.SOUND_SETVOLUMETO = 'set volume to %1%';
Blockly.Msg.SOUND_VOLUME = 'volume';
Blockly.Msg.SOUND_RECORD = 'record...';

// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';

Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Zvuk';
Blockly.Msg.CATEGORY_EVENTS = 'Události';
Blockly.Msg.CATEGORY_CONTROL = 'Ovládání';
Blockly.Msg.CATEGORY_SENSING = 'Vnímání';
Blockly.Msg.CATEGORY_OPERATORS = 'Operátory';
Blockly.Msg.CATEGORY_VARIABLES = 'Proměnné';
Blockly.Msg.CATEGORY_MYBLOCKS = 'My Blocks';

Blockly.Msg.CATEGORY_DRIVE = 'Pohyb';
Blockly.Msg.CATEGORY_COMMENT = 'Komentář';
Blockly.Msg.CATEGORY_LEDs = 'Světla';
Blockly.Msg.CATEGORY_ADVANCED = 'Pokročilé';

// Context menus
Blockly.Msg.DUPLICATE = 'Duplicate';
Blockly.Msg.DELETE = 'Delete';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';
Blockly.Msg.EDIT_PROCEDURE = 'Edit';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = 'Go to definition';
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = 'Color';
Blockly.Msg.COLOUR_SATURATION_LABEL = 'Saturation';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = 'Brightness';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Make a Block';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = 'Make a List';
Blockly.Msg.NEW_LIST_TITLE = 'New list name:';
Blockly.Msg.LIST_MODAL_TITLE = 'New List';
Blockly.Msg.LIST_ALREADY_EXISTS = 'A list named "%1" already exists.';
Blockly.Msg.RENAME_LIST_TITLE = 'Rename all "%1" lists to:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = 'Rename List';
Blockly.Msg.DEFAULT_LIST_ITEM = 'thing';
Blockly.Msg.DELETE_LIST = 'Delete the "%1" list';
Blockly.Msg.RENAME_LIST = 'Rename list';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = 'New message';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = 'New message name:';
Blockly.Msg.BROADCAST_MODAL_TITLE = 'New Message';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = 'message1';

//Drive block Messages
Blockly.Msg.DRIVE_FORWARDS_DISTANCE = "jeď vpřed %1 %2 rychlostí %3";
Blockly.Msg.DRIVE_BACKWARDS_DISTANCE = "jeď vzad %1 %2 rychlostí %3";
Blockly.Msg.DRIVE_LEFT_DISTANCE = "%1 doleva o %2 %3 rychlostí %4";
Blockly.Msg.DRIVE_RIGHT_DISTANCE = "%1 doprava o %2 %3 rychlostí %4";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_CM = "cm";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_INCH = "palců";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_SECONDS = "sekund";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_DEGREES = "stupňů";
Blockly.Msg.DRIVE_TURN_DROPDOWN_SPIN = "otoč se";
Blockly.Msg.DRIVE_TURN_DROPDOWN_FORWARDS = "zatoč dopředu";
Blockly.Msg.DRIVE_TURN_DROPDOWN_BACKWARDS = "zatoč dozadu";
Blockly.Msg.DRIVE_FORWARDS_UNTIL = "jeď vpřed dokud nenastane %1 rychlostí %2";
Blockly.Msg.DRIVE_BACKWARDS_UNTIL = "jeď vzad dokud nenastane %1 rychlostí %2";
Blockly.Msg.DRIVE_LEFT_UNTIL = "%1 doleva dokud nenastane %2 rychlostí %3";
Blockly.Msg.DRIVE_RIGHT_UNTIL = "%1 doprava dokud nenastane %2 rychlostí %3";
Blockly.Msg.DRIVE_SET_LEFT_MOTOR = "nastav levý motor na jízdu %1 rychlostí %2";
Blockly.Msg.DRIVE_SET_RIGHT_MOTOR = "nastav pravý motor na jízdu %1 rychlostí %2";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_FORWARDS = "vpřed";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_BACKWARDS = "vzad";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR = "nastav oba motory na %1 rychlostí %2";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_FORWARDS = "jízdu vpřed";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_BACKWARDS = "jízdu vzad";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_LEFT = "otáčení doleva";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_RIGHT = "otáčení doprava";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_LEFT = "zatáčení doleva";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_RIGHT = "zatáčení doprava";
Blockly.Msg.DRIVE_STOP = "zastav %1";
Blockly.Msg.DRIVE_STOP_DROPDOWN_BOTH = "oba motory";
Blockly.Msg.DRIVE_STOP_DROPDOWN_LEFT = "levý motor";
Blockly.Msg.DRIVE_STOP_DROPDOWN_RIGHT = "pravý motor";


//LED Block Messages
Blockly.Msg.LED_LEFT = "levou LED %1";
Blockly.Msg.LED_RIGHT = "pravou LED %1";
Blockly.Msg.LED_DROPDOWN_ON = "zapni";
Blockly.Msg.LED_DROPDOWN_OFF = "vypni";
Blockly.Msg.LED_SEND_MESSAGE = "pošli IR zprávu s číslem %1";

//Demo messages
Blockly.Msg.DEMO_TEST_PROGRAM = "Test program";
Blockly.Msg.DEMO_TEST_PROGRAM_DISC = "Tests drive, LEDs and speaker";
Blockly.Msg.DEMO_MOVE_WITH_MUSIC = "Move with music";
Blockly.Msg.DEMO_MOVE_WITH_MUSIC_DISC = "Drive while playing music";
Blockly.Msg.DEMO_FOLLOW_A_LINE = "Follow a line";
Blockly.Msg.DEMO_FOLLOW_A_LINE_DISC = "Use the line sensor to follow a black line";
Blockly.Msg.DEMO_BOUNCE_IN_BORDERS = "Bounce in borders";
Blockly.Msg.DEMO_BOUNCE_IN_BORDERS_DISC = "Use the line sensor to stay inside a black line border";
Blockly.Msg.DEMO_WARNINGS = "Warning messages demo";
Blockly.Msg.DEMO_WARNINGS_DISC = "Demonstrates red error messages and yellow warning messages";
Blockly.Msg.DEMO_CLAP_CONTROL = "Clap controlled driving";
Blockly.Msg.DEMO_CLAP_CONTROL_DISC = "Clap once to turn, clap twice to drive forwards";
Blockly.Msg.DEMO_AVOID_OBSTACLES = "Avoid obstacles";
Blockly.Msg.DEMO_AVOID_OBSTACLES_DISC = "Use the obstacle sensor to avoid driving into obstacles";
Blockly.Msg.DEMO_FOLLOW_TORCH = "Follow a torch";
Blockly.Msg.DEMO_FOLLOW_TORCH_DISC = "Use the light sensors to follow a flash light";
Blockly.Msg.DEMO_FOLLOW_A_LINE_IF = "Follow a line using if statements";
Blockly.Msg.DEMO_FOLLOW_A_LINE_IF_DISC = "A different way to use the line sensor to follow a line using an ‘if’ block";
