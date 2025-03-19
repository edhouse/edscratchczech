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
Blockly.Msg.CONTROL_REPEAT = 'opakuj';
Blockly.Msg.CONTROL_IF = 'když';
Blockly.Msg.CONTROL_THAN = 'potom';
Blockly.Msg.CONTROL_ELSE = 'jinak';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'čekej';
Blockly.Msg.CONTROL_WAIT_SEC = 'sekund';
Blockly.Msg.CONTROL_WAIT_MILLISECONDS = 'milisekund';
Blockly.Msg.CONTROL_WAITUNTIL = 'čekej dokud nenastane';
Blockly.Msg.CONTROL_REPEATUNTIL = 'opakuj dokud nenastane';
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
//Blockly.Msg.DATA_SETVARIABLETO = '';
Blockly.Msg.DATA_SET = "nastav";
Blockly.Msg.DATA_TO = "na";
Blockly.Msg.DATA_INCVARIABLE = 'zvyš o jedna';
Blockly.Msg.DATA_DECVARIABLE = 'sniž o jedna';
Blockly.Msg.DATA_BITSHIFT = "udělej bitový posun proměnné";
Blockly.Msg.DATA_BITSHIFTLEFT = 'doleva o';
Blockly.Msg.DATA_BITSHIFTRIGHT = 'doprava o';


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
Blockly.Msg.EVENT_DRIVE_STRAIN = 'Motory zablokovány';
Blockly.Msg.EVENT_START = 'Start';




// Looks blocks

// Motion blocks
// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'náhodné číslo mezi';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_LT_EQUAL = '%1 <= %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_GT_EQUAL = '%1 >= %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_AND = 'a';
Blockly.Msg.OPERATORS_OR = 'nebo';
Blockly.Msg.OPERATORS_NOT_EQUALS = '%1 != %2';
Blockly.Msg.OPERATORS_NOT = 'neplatí, že';
Blockly.Msg.OPERATORS_ABS = 'absolutní hodnota z';
Blockly.Msg.OPERATORS_BETWEEN = 'je mezi';




// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// Sensing blocks
Blockly.Msg.SENSING_TURN_LINE_TRACKING_LED = 'senzor sledování čáry';
Blockly.Msg.SENSING_TURN_OBSTACLE_BEAM = 'paprsek pro zjišťování překážek';
Blockly.Msg.SENSING_CLEAR = 'smaž data';
Blockly.Msg.SENSING_SENSOR = '';
Blockly.Msg.SENSING_CLAP_DETECTED = 'tlesknutí';
Blockly.Msg.SENSING_BUTTON_PRESSED = 'tlačítko zmáčknuto';
Blockly.Msg.SENSING_OBSTACLE = 'překážka zjištěna';
Blockly.Msg.SENSING_LINE_TRACKER = 'senzor sledování čáry na';
Blockly.Msg.SENSING_LINE_SURFACE = "povrchu";
Blockly.Msg.SENSING_REMOTE_NUM = 'kód z ovladače';
Blockly.Msg.SENSING_REMOTE_BOOL = 'kód z ovladače';
Blockly.Msg.SENSING_REMOTE_RECEIVED = 'přijat';
Blockly.Msg.SENSING_IR_MESSAGE_DETECTED = 'přijata IR zpráva';
Blockly.Msg.SENSING_IR_MESSAGE = 'číslo přijaté IR zprávy';
Blockly.Msg.SENSING_LIGHT_LEVEL = 'úroveň osvětlení z';
Blockly.Msg.SENSING_LIGHT_SENSOR = 'senzoru';
Blockly.Msg.SENSING_DRIVE_STRAIN = 'zjištěno zablokování motorů';

Blockly.Msg.SENSING_DROPDOWN_ON = "zapnout";
Blockly.Msg.SENSING_DROPDOWN_OFF = "vypnout";

Blockly.Msg.SENSING_CLEAR_DROPDOWN_CLAP = "detektoru tlesknutí";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_KEY = "zmáčknuté klávesy";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_OBS = "detektoru překážek";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_REMOTE = "kódu z ovladače";
Blockly.Msg.SENSING_CLEAR_DROPDOWN_IR = "IR zprávy";

Blockly.Msg.SENSING_KEY_DROPDOWN_ROUND = "kulaté";
Blockly.Msg.SENSING_KEY_DROPDOWN_TRIANGLE = "trojúhelníkové";

Blockly.Msg.SENSING_OBS_DROPDOWN_ANY = "kdekoliv";
Blockly.Msg.SENSING_OBS_DROPDOWN_AHEAD = "vepředu";
Blockly.Msg.SENSING_OBS_DROPDOWN_LEFT = "vlevo";
Blockly.Msg.SENSING_OBS_DROPDOWN_RIGHT = "vpravo";

Blockly.Msg.SENSING_LINE_DROPDOWN_WHITE = "odrazivém";
Blockly.Msg.SENSING_LINE_DROPDOWN_BLACK = "neodrazivém";

Blockly.Msg.SENSING_LIGHT_DROPDOWN_LEFT = "levého světelného";
Blockly.Msg.SENSING_LIGHT_DROPDOWN_RIGHT = "pravého světelného";
Blockly.Msg.SENSING_LIGHT_DROPDOWN_LINE = "sledování čáry";

Blockly.Msg.COMMENT_USER_COMMENT = 'komentář:';

Blockly.Msg.ADVANCED_USB_SEND_DATA = 'pošli';
Blockly.Msg.ADVANCED_USB_SEND_VIA = 'přes USB';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA = 'data received from USB';
Blockly.Msg.ADVANCED_USB_RECEIVED_DATA_VAR = 'čekej na data z USB a ulož je do';

// Sound blocks
Blockly.Msg.SOUND_BEEP = "pípni";
Blockly.Msg.SOUND_PLAY_NOTE = 'zahraj';
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_WHOLE = "celou notu";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_HALF = "půlovou notu";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_QUARTER = "čtvrťovou notu";
Blockly.Msg.SOUND_PLAY_NOTE_DROP_DURATION_EIGHTH = "osminovou notu";
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

Blockly.Msg.SOUND_SET_TEMPO = "nastav tempo na";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_SLOW = "velmi pomalé";
Blockly.Msg.SOUND_SET_TEMPO_DROP_SLOW = "pomalé";
Blockly.Msg.SOUND_SET_TEMPO_DROP_MEDIUM = "střední";
Blockly.Msg.SOUND_SET_TEMPO_DROP_FAST= "rychlé";
Blockly.Msg.SOUND_SET_TEMPO_DROP_VERY_FAST = "velmi rychlé";

Blockly.Msg.SOUND_PLAY_IN_BACKGROUND = "hraj hudbu na pozadí";


// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';

Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Zvuk'; //
Blockly.Msg.CATEGORY_EVENTS = 'Události'; //
Blockly.Msg.CATEGORY_CONTROL = 'Ovládání'; //
Blockly.Msg.CATEGORY_SENSING = 'Vnímání'; //
Blockly.Msg.CATEGORY_OPERATORS = 'Operátory'; //
Blockly.Msg.CATEGORY_VARIABLES = 'Proměnné'; //
Blockly.Msg.CATEGORY_MYBLOCKS = 'Funkce'; //

Blockly.Msg.CATEGORY_DRIVE = 'Pohyb'; //
Blockly.Msg.CATEGORY_COMMENT = 'Komentář'; //
Blockly.Msg.CATEGORY_LED = 'Světla'; //
Blockly.Msg.CATEGORY_ADVANCED = 'Pokročilé'; //

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
Blockly.Msg.NEW_PROCEDURE = 'Vytvoř funkci';
Blockly.Msg.MANAGE_PROCEDURE = 'Spravuj funkce';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';



//Drive block Messages

Blockly.Msg.DRIVE_FORWARDS_DISTANCE = "jeď vpřed";
Blockly.Msg.DRIVE_BACKWARDS_DISTANCE = "jeď vzad";
Blockly.Msg.DRIVE_LEFT_DISTANCE = "doleva o";
Blockly.Msg.DRIVE_RIGHT_DISTANCE = "doprava o";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_CM = "cm";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_INCH = "palců";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_SECONDS = "sekund";
Blockly.Msg.DRIVE_DISTANCE_DROPDOWN_DEGREES = "stupňů";
Blockly.Msg.DRIVE_TURN_DROPDOWN_SPIN = "otoč se";
Blockly.Msg.DRIVE_TURN_DROPDOWN_FORWARDS = "zatoč dopředu";
Blockly.Msg.DRIVE_TURN_DROPDOWN_BACKWARDS = "zatoč dozadu";
Blockly.Msg.DRIVE_FORWARDS_UNTIL = "jeď vpřed dokud nenastane";
Blockly.Msg.DRIVE_BACKWARDS_UNTIL = "jeď vzad dokud nenastane";
Blockly.Msg.DRIVE_LEFT_UNTIL = "doleva dokud nenastane";
Blockly.Msg.DRIVE_RIGHT_UNTIL = "doprava dokud nenastane";
Blockly.Msg.DRIVE_SET_LEFT_MOTOR = "nastav levý motor na jízdu";
Blockly.Msg.DRIVE_SET_RIGHT_MOTOR = "nastav pravý motor na jízdu";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_FORWARDS = "vpřed";
Blockly.Msg.DRIVE_SET_MOTOR_DROPDOWN_BACKWARDS = "vzad";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR = "nastav oba motory na";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_FORWARDS = "jízdu vpřed";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_BACKWARDS = "jízdu vzad";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_LEFT = "otáčení doleva";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_SPIN_RIGHT = "otáčení doprava";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_LEFT = "zatáčení doleva";
Blockly.Msg.DRIVE_SET_BOTH_MOTOR_DROPDOWN_TURN_RIGHT = "zatáčení doprava";
Blockly.Msg.DRIVE_AT_SPEED = "rychlostí";
Blockly.Msg.DRIVE_STOP = "zastav";
Blockly.Msg.DRIVE_STOP_DROPDOWN_BOTH = "oba motory";
Blockly.Msg.DRIVE_STOP_DROPDOWN_LEFT = "levý motor";
Blockly.Msg.DRIVE_STOP_DROPDOWN_RIGHT = "pravý motor";


//LED Block Messages
Blockly.Msg.LED_LEFT = "levou LED";
Blockly.Msg.LED_RIGHT = "pravou LED";
Blockly.Msg.LED_DROPDOWN_ON = "zapni";
Blockly.Msg.LED_DROPDOWN_OFF = "vypni";
Blockly.Msg.LED_SEND_MESSAGE = "pošli IR zprávu s číslem";



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


Blockly.Msg.MENU_DROP_MENU = "Menu"; //navMenuTop
Blockly.Msg.MENU_DROP_NEW = "Nový"; //navNew
Blockly.Msg.MENU_DROP_LOAD_DEMO = "Otevři demo"; //navPopLoadDemo
Blockly.Msg.MENU_DROP_LOAD_LOCAL = "Otevři z počítače"; //navPopLoadLocal
Blockly.Msg.MENU_DROP_SAVE_LOCAL = "Ulož do počítače"; //navPopLoadSave
Blockly.Msg.MENU_DROP_UPDATE_FIRMWARE = "Aktualizuj firmware"; //navPopFirmwareUpdate
Blockly.Msg.MENU_DROP_DIAGNOSTICS = "Diagnostika"; //navPopHelp
Blockly.Msg.MENU_DROP_ABOUT = "O EdScratch"; //navPopAbout
Blockly.Msg.MENU_DROP_TERMS = "Podmínky užití"; //navPopTerms


Blockly.Msg.MENU_USB = "USB"; //navPopUSB
Blockly.Msg.MENU_SAVE = " Uložit"; //navPopLoadSaveAlt

Blockly.Msg.MENU_VERSION_MAIN = " Edison V3"; //navVersionTop
Blockly.Msg.MENU_VERSION_SWITCH = "Přepni na Edison V1/V2"; //navVersionSwitch
Blockly.Msg.MENU_VERSION_WHICH_VERSION = "Jakou mám verzi?"; //navVersionHelp
Blockly.Msg.MENU_PROGRAM = " Programuj"; //navProgram
Blockly.Msg.MENU_PROGRAM_FLASH = " Programuj"; //navProgramFlash


Blockly.Msg.MODAL_CREATE_VAR = "Vytvoř proměnnou"; //divCreateVarsTitle
Blockly.Msg.MODAL_CREATE_VAR_NAME = "Název proměnné"; //divCreateVarslabel
Blockly.Msg.MODAL_CREATE_VAR_BUTTON = "Vytvoř proměnnou"; //btnCreateVar
Blockly.Msg.MODAL_CREATE_VAR_EXIT = "Odejít"; //btnCreateVarDone
Blockly.Msg.MODAL_CREATE_VAR_SUCCESS = "Nová proměnná úspěšně vytvořena."; //in file 1511 and 1488 but here for sure

Blockly.Msg.MODAL_MANAGE_VAR = "Proměnné "; //divManageVarslabel
Blockly.Msg.MODAL_MANAGE_VAR_NAME = "Název proměnné"; //divManageVarsName
Blockly.Msg.MODAL_MANAGE_VAR_ACTION = "Akce"; //divManageVarsAction
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_DELETE = "smazat"; //in code workspace setup 655
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_RENAME = "přejmenovat"; //in code workspace setup 656
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_CONFIRM = "potvrdit"; // in code 1378
Blockly.Msg.MODAL_MANAGE_VAR_BUTTON_CANCEL = "zrušit"; // in code 1378
Blockly.Msg.MODAL_MANAGE_VAR_CONFIRM_NOT_CHANGED = "Nezměnil jsi název proměnné. Zkus to znovu."; //in code 1401
Blockly.Msg.MODAL_MANAGE_VAR_CONFIRM_SUCCESS = "Proměnná úspěšně přejmenována!"; //in code 1423

Blockly.Msg.MODAL_MANAGE_VAR_NAME_NONE = "Zadej prosím název proměnné."; //in code 1554
Blockly.Msg.MODAL_MANAGE_VAR_NAME_IN_USE = "Už máš proměnnou s tímto názvem."; //in code 1558
Blockly.Msg.MODAL_MANAGE_VAR_NAME_UNSUPPORTED = "Název proměnné obsahuje nepodporované znaky. Názvy proměnných mohou obsahovat pouze malá a velká písmena anglické abecedy, čísla a podtržítka ( _ )."; //line 1563
Blockly.Msg.MODAL_MANAGE_VAR_NAME_NUMBER_START = "Název proměnné nemůže začínat číslem."; //in code 1567

Blockly.Msg.MODAL_MANAGE_VAR_DELETE_IN_USE = "Tato proměnná je používaná ve tvém programu. Chceš ji opravdu smazat?"; //in code 11619
Blockly.Msg.MODAL_MANAGE_VAR_DELETE_CONFIRM = "Ano"; //in code line 1619
Blockly.Msg.MODAL_MANAGE_VAR_DELETE_DECLINE = "Ne"; //in code line 1619

Blockly.Msg.MODAL_CREATE_FUNCT = "Vytvoř funkci"; //divCreateFunctTitle
Blockly.Msg.MODAL_CREATE_FUNCT_NAME = "Název funkce"; //divCreateFunctLabel
Blockly.Msg.MODAL_CREATE_FUNCT_WARNING = "Název funkce může obsahovat pouze alfanumerické znaky a nesmí začínat číslem."; //divCreateFunctWarning
Blockly.Msg.MODAL_CREATE_FUNCT_BUTTON = "Vytvoř funkci"; //btnCreateFunc
Blockly.Msg.MODAL_CREATE_FUNCT_BUTTON_EXIT = "Odejít"; //btnCreateFuncDone
Blockly.Msg.MODAL_CREATE_FUNCT_SUCCESS = "Nová funkce úspěšně vytvořena.";

Blockly.Msg.MODAL_MANAGE_FUNCT = "Funkce "; //divManageFunctlabel
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME = "Název funkce"; //divManageFunctName
Blockly.Msg.MODAL_MANAGE_FUNCT_ACTION = "Akce"; //divManageFunctAction
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_DELETE = "smazat"; //in code workspace setup 655
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_RENAME = "přejmenovat"; //in code workspace setup 656
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_CONFIRM = "potvrdit"; // in code 1378
Blockly.Msg.MODAL_MANAGE_FUNCT_BUTTON_CANCEL = "zrušit"; // in code 1378
Blockly.Msg.MODAL_MANAGE_FUNCT_CONFIRM_NOT_CHANGED = "Nezměnil jsi název funkce. Zkus to znovu."; //in code 1401
Blockly.Msg.MODAL_MANAGE_FUNCT_CONFIRM_SUCCESS = "Funkce úspěšně přejmenována!"; //in code 1423

Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_NONE = "Zadej prosím název funkce."; //in code
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_IN_USE = "Už máš funkci s tímto názvem."; //in code
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_START_WITH = "Název funkce nesmí začínat";
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_UNSUPPORTED = "Název funkce obsahuje nepodporované znaky. Názvy funkcí mohou obsahovat pouze malá a velká písmena anglické abecedy, čísla a podtržítka ( _ )."; //line
Blockly.Msg.MODAL_MANAGE_FUNCT_NAME_NUMBER_START = "Název funkce nesmí začínat číslem."; //in code 1567

Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_IN_USE = "Tato funkce je používaná ve tvém programu. Chceš ji opravdu smazat?"; //in code 11619
Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_CONFIRM = "Ano"; //in code line 1619
Blockly.Msg.MODAL_MANAGE_FUNCT_DELETE_DECLINE = "Ne"; //in code line 1619

Blockly.Msg.MODAL_SAVE_TITLE = "Ulož do počítače"; //no ID yet
Blockly.Msg.MODAL_SAVE_PROG_TITLE = "Název programu"; //no ID yet
Blockly.Msg.MODAL_SAVE_BUTTON = "Ulož do počítače"; //no ID yet
Blockly.Msg.MODAL_SAVE_ERROR_NO_NAME = "Zadej prosím název tvého programu. Abys mohl program uložit, musíš mu dát nějaký název."; //1050 in function, replace
Blockly.Msg.MODAL_SAVE_ERROR_LONG_NAME = "Ups, nastal problém s názvem programu. Název programu nesmí být delší než 255 znaků."; //1052 in function, replace
Blockly.Msg.MODAL_SAVE_SAVING = "OK! Tvůj program se ukládá. Stahování tvého programu brzy začne."; //268 in function, replace

Blockly.Msg.MODAL_LOAD_PC_TITLE = "Otevři z počítače"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_1 = "Vyber prosím EdScratch soubor."; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_2 = "Všechny EdScratch soubory jsou typu"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_ERROR_3 = ".edscratch"; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_FILE_BUTTON = "Vyber soubor k načtení..."; //no ID yet
Blockly.Msg.MODAL_LOAD_PC_BUTTON = "Načti program"; //btnLoadLocal
Blockly.Msg.MODAL_LOAD_PC_NO_FILE_ERROR_1 = "Nevybral jsi soubor. Vyber prosím nejdřív EdScratch soubor z tvého počítače, potom klikni na Načti program. [Všechny EdScratch soubory jsou typu (.edscratch).]"; //IN FILE 398
Blockly.Msg.MODAL_LOAD_PC_FILE_DATA_ERROR_1 = "Ouvej. Data v souboru nejsou správná."; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_DATA_ERROR_2 = "Načti prosím jiný EdScratch soubor. [Všechny EdScratch soubory jsou typu (.edscratch).]"; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_TYPE_ERROR_1 = "Ouvej. Načetl jsi nesprávný typ souboru."; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_TYPE_ERROR_2 = "Načti prosím EdScratch soubor. [Všechny EdScratch soubory jsou typu (.edscratch).]"; //IN FILE 417
Blockly.Msg.MODAL_LOAD_PC_FILE_READY = "Tento program je připraven k načtení:";


Blockly.Msg.MODAL_LOAD_DEMO_TITLE = "Načti demo"; //no ID yet
Blockly.Msg.MODAL_LOAD_DEMO_BUTTON = "Načti program"; //471 IN FILE


Blockly.Msg.MODAL_ABOUT_TITLE = "About EdScratch"; //divAboutLabel
Blockly.Msg.MODAL_ABOUT_COPYRIGHT = "Copyright 2023 Microbric Pty Ltd"; //divAboutCopyright
Blockly.Msg.MODAL_ABOUT_BODY_1 = "The EdScratch app was developed using the Scratch Blocks code base developed by MIT. Scratch Blocks was built on the Blockly code base developed by Google."//divAboutMIT
Blockly.Msg.MODAL_ABOUT_BODY_2 = "Contributions and credits:"; // divAboutCredits
Blockly.Msg.MODAL_ABOUT_BODY_3 = "EdScratch programming language and block compiler developed by Ben Hayton, Microbric"// divAboutCreditsBen
Blockly.Msg.MODAL_ABOUT_BODY_4 = "EdScratch user interface developed by Sean Killian, Killian Web Development"// divAboutCreditsSean
Blockly.Msg.MODAL_ABOUT_BODY_5 = "Edison V3 firmware developed by Damien George, George Robotics (MicroPython code base)"// divAboutCreditsDamien


Blockly.Msg.MODAL_DIAGNOSTICS = "Diagnostics"; //divDiagnosticsLabel
Blockly.Msg.MODAL_DIAGNOSTICS_CONNECT_ISSUES_TITLE = "Connectivity issues"; //divDiagnosticsConnectLabel
Blockly.Msg.MODAL_DIAGNOSTICS_CONNECT_ISSUES_BODY = "To ensure that your program can be compiled and sent to the Edison robot, it is a good idea to check your connection with the EdScratch compiler."; //divDiagnosticsConnectBody
Blockly.Msg.MODAL_DIAGNOSTICS_CONNECT_ISSUES_BUTTON = "Run the connection checker"; //navPopHelpConnection
Blockly.Msg.MODAL_DIAGNOSTICS_FIRMWARE_TITLE = "Firmware"; //divDiagnosticsFirmwareLabel
Blockly.Msg.MODAL_DIAGNOSTICS_FIRMWARE_BODY = "The firmware version in your Edison can be useful to know when talking to our tech support team. Check that here:"; //divDiagnosticsFirmwareBody
Blockly.Msg.MODAL_DIAGNOSTICS_FIRMWARE_BUTTON = "Get firmware version"; //navPopHelpGetStatus
Blockly.Msg.MODAL_DIAGNOSTICS_PROGRAMMING_TITLE = "Programming method"; //divDiagnosticsProgLabel
Blockly.Msg.MODAL_DIAGNOSTICS_PROGRAMMING_BODY = "This option enables you to swtich between USB and screen flash programming on this device."; //divDiagnosticsProgBody
Blockly.Msg.MODAL_DIAGNOSTICS_PROGRAMMING_BUTTON = "Change programming method"; //navPopProgrammingMethod
Blockly.Msg.MODAL_DIAGNOSTICS_IR_TITLE = "Clear learned IR remote commands"; //divDiagnosticsIRLabel
Blockly.Msg.MODAL_DIAGNOSTICS_IR_BODY = "This option allows you to clear all learned IR remote control commands from an Edison V3 robot."; //divDiagnosticsIRBody
Blockly.Msg.MODAL_DIAGNOSTICS_IR_BUTTON = "Clear remote codes"; //doClearRemoteCodes
Blockly.Msg.MODAL_DIAGNOSTICS_IR_SUCCESS = "Remote codes have been cleared."; // in file 347
Blockly.Msg.MODAL_DIAGNOSTICS_IR_ERROR = "An error has occurred."; // in file 349

Blockly.Msg.MODAL_CONNECTION = "Connection"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_1 = "If the test above has the result "; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_EXAMPLE = "NO SERVER FOUND"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_2 = " then a firewall may be blocking access to the compiler."; //no ID yet
Blockly.Msg.MODAL_CONNECTION_TEST_3 = "To rectify this, ask your network administrator to whitelist these addresses:"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_PORTS = "The network administrator also needs to unblock ports 80, 8080, 443 and 8443."; //no ID yet
Blockly.Msg.MODAL_CONNECTION_BACK = "Back to diagnostics"; //no ID yet
Blockly.Msg.MODAL_CONNECTION_SERVER = "Server: "; //in code
Blockly.Msg.MODAL_CONNECTION_SERVER_SEARCHING = "searching";
Blockly.Msg.MODAL_CONNECTION_SERVER_NONE = "NO SERVER FOUND"; //in code
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST = "Compile Test: "; //in code
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST_WORKING = "working";
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST_ERROR = "compile error"; //in code
Blockly.Msg.MODAL_CONNECTION_COMIPLE_TEST_COMPLETE = "compile complete in "; //in code




Blockly.Msg.MODAL_STATUS_TITLE = "Firmware version"; //divFirmwareStatusLabel
Blockly.Msg.MODAL_STATUS_BUTTON = "Connect Edison"; //btnStatusHubConnect
Blockly.Msg.MODAL_STATUS_STATUS_LABEL= "Status:"; //divFirmwareStatusOutputStatus
Blockly.Msg.MODAL_STATUS_STATUS_NOT_CONNECTED= "not connected"; // 688
Blockly.Msg.MODAL_STATUS_STATUS_CONNECTED= "connected"; // 665 647
Blockly.Msg.MODAL_STATUS_FIRMWARE_LABEL= "Firmware version:"; //divFirmwareStatusOutputFirmware
Blockly.Msg.MODAL_STATUS_FIRMWARE_BOOT_MODE= "bootloader mode";//698
Blockly.Msg.MODAL_STATUS_FIRMWARE_FACTORY_MODE= "factory application mode";//700
Blockly.Msg.MODAL_STATUS_FIRMWARE_USER_MODE= "user application mode"//702;
Blockly.Msg.MODAL_STATUS_FIRMWARE_TAG= "firmware";//708
Blockly.Msg.MODAL_STATUS_BOOT_TAG= "boot";//708
Blockly.Msg.MODAL_STATUS_FIRMWARE_UPDATE = "A firmware update";
Blockly.Msg.MODAL_STATUS_FIRMWARE_UPDATE_AVAILABLE = "is available"; //
Blockly.Msg.MODAL_STATUS_BOOT_UPDATE = "A boot update";
Blockly.Msg.MODAL_STATUS_FIRMWARE_UPDATE_BUTTON = "Update Firmware";
Blockly.Msg.MODAL_STATUS_FIRMWARE_UP_TO_DATE = "Your Edison is up to date.";
Blockly.Msg.MODAL_PROGRAMING_METHOD_TITLE = "Programming method"; //divProgMethodLabel
Blockly.Msg.MODAL_PROGRAMING_METHOD_BODY = "Screen flash programming has been developed for Apple iPads. This is because Apple do not allow normal access to the iPad's data port. Therefore, screen flash programming is only fully supported for iPads. However, the screen flasher does work with some Android devices. The option below enables screen flash programming on this device. If this device is not an iPad then it is not guaranteed to work.";//divProgMethodBody
//need the text for displaying current method
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL = "Currently using"; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL_USB = "USB"; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL_FLASH = "FLASH"; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_CURRENT_LABEL_METHOD = "method."; //code
Blockly.Msg.MODAL_PROGRAMING_METHOD_BUTTON_USB = "Set to USB method"; //btnChangeUSBMethod
Blockly.Msg.MODAL_PROGRAMING_METHOD_BUTTON_FLASH = "Set to FLASH method"; //btnChangeFlashMethod
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BUTTON_FLASH_GUARANTEE = "Why is screen flashing not guaranteed to work with Android devices?"; //btnProgMethodFlashGuarantee
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BODY_FLASH_GUARANTEE = "Android devices are made by many different manufacturers and there are thousands of different models. This means there is also a lot of different screen technologies. It is not possible to test and customise screen flashing for all Android devices."; //divProgMethodFlashGuarantee
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BUTTON_FLASH_SETTINGS = "Are there settings that might help my Android device work with screen flashing?"; //btnProgMethodFlashSettings
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BODY_FLASH_SETTINGS = "Yes, on the screen flash popup window there is a 'reliable/fast' setting that has four positions. Try each one of the four positions. Also, try adjusting the screen brightness. Test with 50%, 75%, 90% and 100% brightness."; //divProgMethodFlashSettings
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BUTTON_FLASH_FAIL = "What do I do if screen flashing does not work on my Android device?"; //btnProgMethodFlashFail
Blockly.Msg.MODAL_PROGRAMING_METHOD_ACCORD_BODY_FLASH_FAIL = "To program you will need to plug the Edison V3 cable into the Android device's data port via an adaptor cable. These are common and cheaply available from ebay, Amazon etc."; //divProgMethodFlashFail
Blockly.Msg.MODAL_PROGRAMING_METHOD_BACK = "Back to diagnostics"; //divProgMethodBack


Blockly.Msg.MODAL_PROGRAMING = "Program"; //divProgrammingLabel
//NEED MESSAGES
Blockly.Msg.MODAL_PROGRAMING_ERROR_NO_BLOCK = "Cannot download with no blocks connected to the start block.";//code
Blockly.Msg.MODAL_PROGRAMING_ERROR_RED = "Cannot download with Red Errors.";
Blockly.Msg.MODAL_PROGRAMING_UPDATE_FIRMWARE = "To program your Edison you will need to update the firmware to the latest version"; //code
Blockly.Msg.MODAL_PROGRAMING_UPDATE_FIRMWARE_BUTTON = "Update firmware";
Blockly.Msg.MODAL_PROGRAMING_UPDATE_FIRMWARE_NOW = "Firmware updated required. Updating now...";
Blockly.Msg.MODAL_PROGRAMING_FIRMWARE_UPDATED = "Firmware updated.";
Blockly.Msg.MODAL_PROGRAMING_FIRMWARE_UPDATE_INCOMPLETE = "Incomplete firmware update.";
Blockly.Msg.MODAL_PROGRAMING_DONE = "OK! The program has loaded to your Edison.";
Blockly.Msg.MODAL_PROGRAMING_ERROR_JSON = "Response is not JSON!";
Blockly.Msg.MODAL_PROGRAMING_ERROR_UNKNOWN = "Unknown Error!";

Blockly.Msg.MODAL_FIRMWARE_UPDATE_TITLE = "Firmware update"; //divFirmwareUpdateLabel
Blockly.Msg.MODAL_FIRMWARE_UPDATE_LATEST = "The latest Edison V3 firmware version is: "; //divFirmwareLatestVersion
Blockly.Msg.MODAL_FIRMWARE_UPDATE_POPUP = "Use this pop-up to update the firmware in your Edison."; //divFirmwareUseThis
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE1 = "To update Edison V3 firmware:"; //divFirmwareToUpdate
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE2 = "Plug in your Edison and click the 'Update firmware' button below then follow the prompts."; //divFirmwareFollowPrompts
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_UPDATE_BUTTON = "Update firmware "; //btnFUHubConnect
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TO_RECONNECT_BUTTON = "Reconnect Edison "; //btnFUHubReconnect
Blockly.Msg.MODAL_FIRMWARE_UPDATE_FEEDBACK_START = "Ready..."; //811 IN FILE
//need text from the update process
Blockly.Msg.MODAL_FIRMWARE_UPDATE_TWO_STEP_START = "A two step firmware update is starting";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_BOOT_COMPLETE = "Bootloader update complete.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_PLEASE_CLICK = "Please click";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ISSUE_LOADING = "Issue loading firmware";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ONE_STEP_START = "A firmware update is starting";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ERROR_ISSUE_LOADING = "Error: Issue loading firmware.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_ERROR_ISSUE_DOWNLOADING = "Error: Issue downloading firmware.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_FIRM_COMPLETE = "Firmware update complete.";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_NONE_NEEDED = "No update required: the firmware on your Edison is up to date.";


Blockly.Msg.MODAL_USB_CONTROL = "USB Ovládání"; //no ID yet
Blockly.Msg.MODAL_USB_RUN_BUTTON = "Spusť USB"; //usbRun
Blockly.Msg.MODAL_USB_CONNECTED_STATUS = "PŘIPOJENO"; //IN FILE 583
Blockly.Msg.MODAL_USB_DISCONNECTED_STATUS = "ODPOJENO"; //IN FILE 590 AND 601
Blockly.Msg.MODAL_USB_RUNNING_STATUS = "PROBÍHÁ"; //IN FILE 595
Blockly.Msg.MODAL_USB_DATA_TO = "Data do USB"; //no ID yet
Blockly.Msg.MODAL_USB_DATA_TO_BUTTON = "Pošli přes USB"; //usbSend
Blockly.Msg.MODAL_USB_DATA_FROM = "Data z USB"; //no ID yet
Blockly.Msg.MODAL_USB_DATA_FROM_CLEAR = "Vyčistit"; //usbClear
Blockly.Msg.MODAL_USB_DATA_FROM_COPY = "Zkopírovat do schránky"; //usbExport AND 614 IN CODE
Blockly.Msg.MODAL_USB_DATA_FROM_COPIED = "Zkopírováno!"; //612 IN CODE


Blockly.Msg.MODAL_BAD_BROWSER_TITLE = "Unsupported browser"; //divBrowserLabel
Blockly.Msg.MODAL_BAD_BROWSER_USING = "You appear to be using: "; //divBrowserAppearUsing
Blockly.Msg.MODAL_BAD_BROWSER_WEB_USB = "The Edison V3 is programmed directly from your web browser via USB. This requires that your web browser supports USB connections.";
//divBrowserNeedUSB
Blockly.Msg.MODAL_BAD_BROWSER_UNFORTUNATLY = "Unfortunately"; //divBrowserUnfortunately
Blockly.Msg.MODAL_BAD_BROWSER_UNSUPORTED = "does not currently support USB connections, so cannot program your Edison V3 robot.";
//divBrowserNotSupported
Blockly.Msg.MODAL_BAD_BROWSER_USE_CHROME = "We recommend using Google Chrome."; //divBrowserRecommendChrome
Blockly.Msg.MODAL_BAD_BROWSER_GET_CHROME = "Get Chrome."; //divBrowserChrome

Blockly.Msg.MODAL_LOADING = "Načítání prostředí..."; //divLoadingLabel

Blockly.Msg.MODAL_FLASHER_TITLE = "Flasher"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_1 = "Place Edison over image"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_2 = "Press Edison's round button once"; //no ID yet
Blockly.Msg.MODAL_FLASHER_STEP_3 = "Press 'Download program'"; //no ID yet
Blockly.Msg.MODAL_FLASHER_RELIABLE = "Reliable"; //no ID yet
Blockly.Msg.MODAL_FLASHER_FAST = "Fast"; //no ID yet
Blockly.Msg.MODAL_FLASHER_ADJUST_SPEED = "If the download does not work or is not fast enough, try adjusting the speed above. The lowest speed is usually the most reliable."; //no ID yet
Blockly.Msg.MODAL_FLASHER_DOWNLOAD = "Download program"; //no ID yet
Blockly.Msg.MODAL_FLASHER_CANCEL = "Cancel"; //no ID yet
Blockly.Msg.MODAL_FLASHER_TIPS_HEADING = "Tips"; //no ID yet
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_1 = "Adjust screen brightness between 80% to 90%."; //divFlasherTipsBody1
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_2 = "Move away from direct and in-direct sunlight or bright lights. "; //divFlasherTipsBody2
Blockly.Msg.MODAL_FLASHER_TIPS_BODY_3 = "Ensure you have updated Edison V3 to the latest firmware."; //divFlasherTipsBody3
Blockly.Msg.MODAL_FLASHER_DOWNLOADING = "Downloading...";
Blockly.Msg.MODAL_FLASHER_COMPLETE = "Complete";
Blockly.Msg.MODAL_FLASHER_BYTES = "bytes in";
Blockly.Msg.MODAL_FLASHER_SECONDS = "seconds";

Blockly.Msg.ERROR_RED_OBS_SETTING = "Bloky zjišťování překážek nefungují, dokud není zapnutý paprsek pro zjišťování překážek pomocí bloku 'paprsek pro zjišťování překážek' z kategorie 'Vnímání'.";
Blockly.Msg.ERROR_RED_OBS_SETTING_EVENT = "Události zjišťování překážek nefungují, dokud není v hlavním programu zapnutý paprsek pro zjišťování překážek pomocí bloku 'paprsek pro zjišťování překážek' z kategorie 'Vnímání'.";
Blockly.Msg.ERROR_RED_LINE_SETTING = "Bloky sledování čáry nefungují, dokud není zapnutý senzor sledování čáry pomocí bloku 'senzor sledování čáry' z katogorie 'Vnímání'.";
Blockly.Msg.ERROR_RED_LINE_SETTING_EVENT = "Události sledování čáry nefungují, dokud není v hlavním programu zapnutý senzor sledování čáry pomocí bloku 'senzor sledování čáry' z katogorie 'Vnímání'.";
Blockly.Msg.ERROR_RED_DRIVE_CLAP = "Edison nemůže detekovat tlesknutí během jízdy, protože motory jsou příliš hlučné.";
Blockly.Msg.ERROR_RED_EMPTY_IN_FORWARDS = "Bloky 'jeď vpřed dokud nenastane' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_BACKWARDS = "Bloky 'jeď vzad dokud nenastane' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_LEFT = "Bloky 'doleva dokud nenastane' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_RIGHT = "Bloky 'doprava dokud nenastane' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_SET_VAR = "Bloky 'nastav proměnnou' vyžadují proměnnou.";
Blockly.Msg.ERROR_RED_EMPTY_IN_INC_VAR = "Bloky 'zvyš proměnnou o 1' vyžadují proměnnou.";
Blockly.Msg.ERROR_RED_EMPTY_IN_DEC_VAR = "Bloky 'sniž proměnnou o 1' vyžadují proměnnou.";
Blockly.Msg.ERROR_RED_EMPTY_IN_IF = "Bloky 'když' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_IF_ELSE = "Bloky 'když-jinak' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_WAIT = "Bloky 'čekej dokud nenastane' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_WAIT_MILLI = "Bloky 'čekej millisekund' vyžadují vstupní hodnotu.";
Blockly.Msg.ERROR_RED_EMPTY_IN_REP = "Bloky 'opakuj dokud nenastane' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_BS_RIGHT = "Bloky 'bitový posun doprava' vyžadují proměnnou.";
Blockly.Msg.ERROR_RED_EMPTY_IN_BS_LEFT = "Bloky 'bitový posun doleva' vyžadují proměnnou.";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_NOT = "Bloky 'ne' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_AND = "Bloky 'a' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_IN_OPERATOR_OR = "Bloky 'nebo' vyžadují podmínku.";
Blockly.Msg.ERROR_RED_EMPTY_BACKGROUND_MUSIC = "Bloky 'hraj hudbu na pozadí' musí obsahovat alespoň jednu notu.";
Blockly.Msg.ERROR_RED_NO_START = "Programy musí obsahovat událost 'Start', aby správně fungovaly. Pokud vidíš tuto chybu, otevři menu, vyber 'Nový' a začni vytvářet nový program.";
Blockly.Msg.ERROR_RED_NOT_BACKGROUND_MUSIC = "Bloky 'hraj hudbu na pozadí' mohou obsahovat pouze noty.";
Blockly.Msg.ERROR_RED_NO_MAIN_BLOCKS = "Žádné bloky nejsou připojeny k události 'Start'.";
Blockly.Msg.ERROR_RED_EMPTY_IN_USB_RECEIVED = "Bloky 'čekej na data USB' vyžadují proměnnou.";
Blockly.Msg.ERROR_RED_DEVIDE_BY_ZERO = "Bloky 'operátor dělení' nemohou dělit nulou.";
Blockly.Msg.ERROR_RED_FUNCTION_IN_FUNCTION = "Bloky volání funkce nemohou být umístěny v bloku začátku funkce.";


Blockly.Msg.ERROR_YELLOW_RECEIVE_MESSAGE_OBS_ON = "Edison nemůže přijímat zprávy, pokud je zapnuté zjišťování překážek. Ujisti se, že je před přijímáním zprávy v programu zjišťování překážek vypnuté.";
Blockly.Msg.ERROR_YELLOW_RECEIVE_REMOTE_OBS_ON = "Edison nemůže přijímat kódy z dálkového ovladače, pokud je zjišťování překážek zapnuté. Ujisti se, že je před přijímáním kódu z ovladače v programu zjišťování překážek vypnuté.";
Blockly.Msg.ERROR_YELLOW_RECEIVE_MESSAGE_EVENT_OBS_ON = "Edison nemůže přijímat zprávy, pokud je zapnuté zjišťování překážek. Ujisti se, že je před přijímáním zprávy v hlavním programu zjišťování překážek vypnuté.";
Blockly.Msg.ERROR_YELLOW_RECEIVE_REMOTE_EVENT_OBS_ON = "Edison nemůže přijímat kódy z dálkového ovladače, pokud je zjišťování překážek zapnuté. Ujisti se, že je před přijímáním kódu z ovladače v hlavním programu zjišťování překážek vypnuté.";
Blockly.Msg.ERROR_YELLOW_READ_LIGHT_LINE_OFF = "Zvaž zapnutí zjišťování čáry použitím bloku 'sledování čáry' z kategorie 'Vnímání', pokud měříš odrazivost povrchu.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_WAIT_UNTIL = "Blok 'operátor' v bloku 'čekej dokud nenastane' může způsobit, že Edison bude čekat nekonečně dlouho nebo blok 'čekej' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_REPEAT_UNTIL = "Blok 'operátor' v bloku 'opakuj dokud nenastane' může způsobit, že Edison bude provádět cyklus nekonečně dlouho nebo blok 'opakuj' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_WAIT = "Blok 'operátor' v bloku 'čekej' může způsobit, že Edison blok 'čekej' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_REPEAT = "Blok 'operátor' v bloku 'opakuj' může způsobit, že Edison blok 'opakuj' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_FOR_UNTIL = "Blok 'operátor' v bloku 'jeď vpřed dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď vpřed' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_BACK_UNTIL = "Blok 'operátor' v bloku 'jeď vzad dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď vzad' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_LEFT_UNTIL = "Blok 'operátor' v bloku 'doleva dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'doleva' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_RIGHT_UNTIL = "ABlok 'operátor' v bloku 'doprava dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'doprava' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_FOR_DIST = "Blok 'operátor' v bloku 'jeď vpřed' může způsobit, že Edison blok 'jeď vpřed' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_BACK_DIST = "Blok 'operátor' v bloku 'jeď vzad' může způsobit, že Edison blok 'jeď vzad' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_LEFT_DIST = "Blok 'operátor' v bloku 'jeď doleva' může způsobit, že Edison blok 'jeď doleva' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_DRIVE_RIGHT_DIST = "Blok 'operátor' v bloku 'jeď doprava' může způsobit, že Edison blok 'jeď doprava' přeskočí.";
Blockly.Msg.ERROR_YELLOW_DRIVE_LIGHT = "Blok 'úroveň světla' v bloku 'jeď' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď' přeskočí.";
Blockly.Msg.ERROR_YELLOW_OPPERATOR_IR_MESSAGE = "Blok 'operátor' v bloku 'pošli IR zprávu' nebude schopen poslat hodnotu větší než 255.";
Blockly.Msg.ERROR_YELLOW_FOREVER_LOOP_IN = "Blok 'opakuj stále' bude pokračovat, dokud nezmáčkneš na Edisonu čtvercové tlačítko.";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_LEFT = "Blok 'nastav levý motor' jen zapne levý motor. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motoru.";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_RIGHT = "Blok 'nastav pravý motor' jen zapne pravý motor. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motoru.";
Blockly.Msg.ERROR_YELLOW_SET_MOTOR_BOTH = "Blok 'nastav oba motory' jen zapne motory. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motorů.";
Blockly.Msg.ERROR_YELLOW_CLAP_EVENT_DRIVE = "Jízda motorů vytváří hluk, který může způsobit spuštění události tlesknutí. To může způsobit opakované spuštění bloků události tlesknutí při Edisonově jízdě.";
Blockly.Msg.ERROR_YELLOW_FLOAT_BLOCKS = "Bloky nepřipojené ke žlutým blokům událostí nebudou nahrány do Edisona.";
Blockly.Msg.ERROR_YELLOW_WAIT_TIME_LIGHT = "Úroveň světla bude nastavena na vysokou hodnotu, což může způsobit, že Edison bude čekat dlouho.";
Blockly.Msg.ERROR_YELLOW_REPEAT_LOOP_LIGHT = "Úroveň světla bude nastavena na vysokou hodnotu, což může způsobit, že Edison bude opakovat cyklus dlouho.";
Blockly.Msg.ERROR_YELLOW_DRIVE_STRAIN = "Blok 'zablokované motory' zjistí zablokování motorů, jen pokud jsou motory spuštěny.";
Blockly.Msg.ERROR_YELLOW_DRIVE_STRAIN_EVENT = "K události 'motory zablokovány' může dojít, jen pokud jsou motory spuštěny.";
Blockly.Msg.ERROR_YELLOW_COMMENT = "Komentáře jsou pomocné poznámky. Bloky komentářů nebudou nahrány do Edisona.";
Blockly.Msg.ERROR_YELLOW_USB_USED = "USB bloky vyžadují, aby byl Edison připojen k zařízení.";
Blockly.Msg.ERROR_YELLOW_CLEAR_SENSOR = "Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně.";
Blockly.Msg.ERROR_YELLOW_CLEAR_LEARN_MORE = "Zjisti více";



// Firmware Error
Blockly.Msg.MODAL_FIRMWARE_ERROR_TITLE = "Firmware error"; // divFirmwareErrorLabel


Blockly.Msg.MODAL_FIRMWARE_ERROR_BODY_1 = "A corrupted firmware file has been detected in your Edison robot.";
Blockly.Msg.MODAL_FIRMWARE_ERROR_BODY_2 = "This may have occurred during a firmware update that was interrupted.";
Blockly.Msg.MODAL_FIRMWARE_ERROR_BODY_3 = "Don't panic! This can be fixed by clicking the 'Fix firmware' button below.";

Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_1 = "Warning!"; //divFirmwareErrorCancelBody1
Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_2 = "Canceling this process means that your Edison robot can not be programmed."; //divFirmwareErrorCancelBody2
Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_3 = "It is recommended that you fix the firmware now by clicking the Fix firmware button."; //divFirmwareErrorCancelBody3
Blockly.Msg.MODAL_FIRMWARE_ERROR_CANCEL_BODY_4 = "If you choose to cancel you can fix the firmware at a later time."; ////divFirmwareErrorCancelBody4

Blockly.Msg.MODAL_FIRMWARE_ERROR_BUTTON_FIX = "Fix firmware"; //btnFixFirmware
Blockly.Msg.MODAL_FIRMWARE_ERROR_BUTTON_CANCEL = "Cancel"; //btnFixFirmwareCancel
Blockly.Msg.MODAL_FIRMWARE_ERROR_BUTTON_CANCEL_CONFIRM = "Confirm cancel"; //btnFixFirmwareCancelConfirm




//test lang messages
Blockly.Msg.CHANGELANG = "Change language";
