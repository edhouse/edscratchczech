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
Blockly.Msg.CONTROL_WAIT = 'čekej';
Blockly.Msg.CONTROL_WAIT_SEC = 'sekund';
Blockly.Msg.CONTROL_WAIT_MILLISECONDS = 'milisekund';
Blockly.Msg.CONTROL_WAITUNTIL = 'čekej dokud nenastane';
Blockly.Msg.CONTROL_REPEATUNTIL = 'opakuj dokud nenastane';

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
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CONTEXT_DELETE = 'Delete';
Blockly.Msg.CONTEXT_DELETE_ALL = 'Delete all';
Blockly.Msg.CONTEXT_BLOCKS = 'Blocks';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
//Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
//Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
//Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
//Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
//Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
//Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Vytvoř funkci';
Blockly.Msg.MANAGE_PROCEDURE = 'Spravuj funkce';
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

Blockly.Msg.MODAL_COOKIES_TITLE = "Cookies";
Blockly.Msg.MODAL_COOKIES_BODY_1 = "We use Google Analytics to measure how visitors use this web app so we can improve it based on user needs. For instance, which options visitors use most often, and if they get error messages from the web app. These cookies don't collect information that identifies a visitor.";
Blockly.Msg.MODAL_COOKIES_BODY_2 = "We do not allow Google to use or share the data about how you use this site and all information these cookies collect is aggregated and therefore anonymous. It is only used to improve how the web app works. This cookie is stored for a period of one year.";
Blockly.Msg.MODAL_COOKIES_ACCEPT = "Accept cookies";
Blockly.Msg.MODAL_COOKIES_BUTTON_YES = "Yes";
Blockly.Msg.MODAL_COOKIES_BUTTON_NO = "No";

Blockly.Msg.MODAL_ABOUT_TITLE = "About EdScratch"; //divAboutLabel
Blockly.Msg.MODAL_ABOUT_COPYRIGHT = "Copyright 2023 Microbric Pty Ltd"; //divAboutCopyright
Blockly.Msg.MODAL_ABOUT_BODY_1 = "The EdScratch app was developed using the Scratch Blocks code base developed by MIT. Scratch Blocks was built on the Blockly code base developed by Google."//divAboutMIT
Blockly.Msg.MODAL_ABOUT_BODY_2 = "Contributions and credits:"; // divAboutCredits
Blockly.Msg.MODAL_ABOUT_BODY_3 = "EdScratch programming language and block compiler developed by Ben Hayton, Microbric"// divAboutCreditsBen
Blockly.Msg.MODAL_ABOUT_BODY_4 = "EdScratch user interface developed by Sean Killian, Killian Web Development"// divAboutCreditsSean
Blockly.Msg.MODAL_ABOUT_BODY_5 = "Edison V3 firmware developed by Damien George, George Robotics (MicroPython code base)"// divAboutCreditsDamien


Blockly.Msg.MODAL_LANGUAGE = "Jazyk"; //divLanguageLabel

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


//Blockly.Msg.MODAL_PROGRAMING = "Program"; //divProgrammingLabel
Blockly.Msg.MODAL_PROGRAMING_TITLE = "Programming"; //spanProgrammingLabel
Blockly.Msg.MODAL_PROGRAMING_TITLE_COMPLETE = "Programming complete";
Blockly.Msg.MODAL_PROGRAMING_TITLE_ERROR = "Programming error";

Blockly.Msg.MODAL_PROGRAMING_TIP_1_TITLE = "Tip: Don't cluster Edison robots on a USB hub!";
Blockly.Msg.MODAL_PROGRAMING_TIP_1_TEXT = "Use an EdCharger instead.";
Blockly.Msg.MODAL_PROGRAMING_TIP_2_TITLE = "Tip: Don't leave Edison hanging!";
Blockly.Msg.MODAL_PROGRAMING_TIP_2_TEXT = "Keep Edison supported on a solid surface.";
Blockly.Msg.MODAL_PROGRAMING_TIP_3_TITLE = "Tip: Don't leave Edison hanging!";
Blockly.Msg.MODAL_PROGRAMING_TIP_3_TEXT = "Use an extension cable when charging from a power outlet.";
Blockly.Msg.MODAL_PROGRAMING_TIP_4_TITLE = "Tip: Don't pull on Edison!";
Blockly.Msg.MODAL_PROGRAMING_TIP_4_TEXT = "Unplug by pulling on the USB cable, not the robot.";

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
Blockly.Msg.MODAL_FIRMWARE_UPDATE_PROBLEMS = "Having problems? ";
Blockly.Msg.MODAL_FIRMWARE_UPDATE_SEE_DIAG = "See diagnostics";

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

Blockly.Msg.MODAL_NEW_CONFIRM_HEADING = "Are you sure?"; //newConfirmTitle
Blockly.Msg.MODAL_NEW_CONFIRM_BODY_TEXT_1 = "Are you sure you want to start a new program?"; //newConfirmBody1
Blockly.Msg.MODAL_NEW_CONFIRM_BODY_TEXT_2 = "Any changes may be lost!"; //newConfirmBody2
Blockly.Msg.MODAL_NEW_CONFIRM_BUTTON_CANCEL = "Cancel"; //btnNewConfirmFalse
Blockly.Msg.MODAL_NEW_CONFIRM_BUTTON_PROCEED = "Proceed"; //btnNewConfirmTrue

//test lang messages
Blockly.Msg.CHANGELANG = "Change language";

Blockly.Msg.HELP_TEXT_ALL_TITLE = "Block help"
Blockly.Msg.HELP_TEXT_ALL_BLOCKS_EXAMPLE_USES = "Example uses:";
Blockly.Msg.HELP_TEXT_ALL_BLOCKS_EXAMPLE_LOAD = "Open program";
Blockly.Msg.HELP_TEXT_ALL_BLOCKS_WATCH_FOR = "Watch out for:";

Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_TITLE = "forwards for";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_BODY_1 = "The forwards for block drives the wheels to move the robot in the forward direction.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_BODY_2 = "The block has three parameters:";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_BODY_3 = "Value - Can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_BODY_4 = "Units - There are three options that can be selected: cm, inch and seconds.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_BODY_5 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_BODY_6 = "The forwards for block will complete before the next block will run. For example, using the forwards for block will not run other blocks in the program at the same time. To do this see the set both motors to block.  ";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_EXAMPLE_1_TITLE = "Example 1: Beep, then drive the Edison robot forward 15 cm at speed 1, then beep again. ";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_EXAMPLE_1_BODY_1 = "In this example program, Edison beeps, but does not start driving until the beep has finished playing. Also, the second beep does not start until Edison has stopped driving.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_EXAMPLE_2_TITLE = "Example 2: Setting the drive distance using a variable and data from a sensor";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_EXAMPLE_2_BODY_1 = "In this example program Edison sets the Distance variable to the light level from the left light sensor (a value from 1 to 1,000) divided by 50. The Edison then drives forward for the value in the (Distance) variable at speed 5.  The result is that Edison drives further under brighter light and drives shorter under dimmer light.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_EXAMPLE_3_TITLE = "Example 3: Changing the drive speed using a variable.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_EXAMPLE_3_BODY_1 = "In this example program, the variable Speed is set to 1. The program then enters a repeat loop for 10 times. Through each loop the Edison drives forward 5 cm at the speed in the variable. Initially, the value in the Speed variable is 1, so the Edison drives forward for 5cm at speed 1. The next block in the repeat increments (+1) the Speed variable. In the second repeat of the forwards block the value in the Speed variable is 2, so the Edison drives forward for 5cm at speed 2.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_FOR_EXAMPLE_3_BODY_2 = "This process repeats the full 10 times of the repeat loop, causing Edison to drive faster and faster until stopping when the program ends.";

Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_TITLE = "backwards for ";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_BODY_1 = "The backwards for block drives the wheels to move the robot in the backward direction.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_BODY_2 = "The block has three parameters:";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_BODY_3 = "Value - Can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_BODY_4 = "Units - There are three options that can be selected: cm, inch and seconds.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_BODY_5 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_BODY_6 = "The backwards for block will complete before the next block will run. For example, using the backwards for block will not run other blocks in the program at the same time. To do this see the set both motors to block.  ";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_EXAMPLE_1_TITLE = "Example 1: LED lights on while driving";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_EXAMPLE_1_BODY_1 = "In this example program, the left LED turns on and stays on while the Edison drives backwards for one second. The left LED turns off after the Edison has stopped driving. The program then waits for one second before ending.  ";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_EXAMPLE_2_TITLE = "Example 2: When there is an obstacle drive backwards";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_FOR_EXAMPLE_2_BODY_1 = "In this example program, the obstacle detection beam is first turned on. The program then enters a forever loop. Inside the loop the wait until block stops the program from progressing until an obstacle is detected anywhere, when this happens the Edison drives backwards one inch at speed 10. This behaviour repeats forever in a loop. This results in Edison backing away from objects placed in front of it.";

Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_TITLE = "left for";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_1 = "The left for block drives the wheels to move the robot in the left direction. ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_2 = "The block has four parameters:";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_3 = "Movement - There are three options that can be selected: spin, turn forwards and turn backwards.";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_4 = "Value - Can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_5 = "Units - There are two options that can be selected: degrees and seconds.";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_6 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_7 = "Turning and spinning is more accurate at lower speeds. This is because the wheels can lose traction and slip at high speeds. Speed 1 is best when accurate turning is needed.";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_BODY_8 = "The left for block must complete before the next block will run. For example, using the left for block will not run other blocks in the program at the same time. To do this see the set both motors to block.";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_EXAMPLE_1_TITLE = "Example program 1: beep, spin, beep";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_EXAMPLE_1_BODY_1 = "In this example program, Edison beeps, but does not start spinning until the beep has finished playing. Also, the second beep does not start until Edison has stopped spinning.";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_EXAMPLE_2_TITLE = "Example program 2: Drive in a square";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_FOR_EXAMPLE_2_BODY_1 = "In this example program, the repeat loop repeats driving forwards for 10cm at speed 1 and turning forward left for 90 degrees four times. This results in Edison driving in a square pattern.";

Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_TITLE = "right for";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_1 = "The right for block drives the wheels to move the robot in the left direction. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_2 = "The block has four parameters:";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_3 = "Movement - There are three options that can be selected: spin, turn forwards and turn backwards.";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_4 = "Value - Can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_5 = "Units - There are two options that can be selected: degrees and seconds. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_6 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_7 = "Turning and spinning is more accurate at lower speeds. This is because the wheels can lose traction and slip at high speeds. Speed 1 is best when accurate turning is needed.    ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_BODY_8 = "The right for block must complete before the next block will run. For example, using the right for block will not run other blocks in the program at the same time. To do this see the set both motors to block.";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_EXAMPLE_1_TITLE = "Example program 1: Beep, spin, beep";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_EXAMPLE_1_BODY_1 = "In this example program Edison beeps, but does not start spinning until the beep has finished playing. Also, the second beep does not start until Edison has stopped spinning.";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_EXAMPLE_2_TITLE = "Example 2: Spin right with the speed controlled by the light level";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_EXAMPLE_2_BODY_1 = "In this example program Edison spins right inside a forever loop. Each time the right for block runs Edison spins 1 degree. The speed is set by the light level reading from the left light sensor (1 to 1,000) and is divided by 100 (result 0 to 10). The result is that Edison spins faster under brighter light and slower under dimmer light. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_EXAMPLE_3_TITLE = "Example program 3: Avoid obstacles";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_FOR_EXAMPLE_3_BODY_1 = "In this example program, the obstacle detection beam is turned on. The program then enters a forever loop where both motors are set to drive forwards. The program then waits until an obstacle is detected anywhere. When this happens, the program progresses to the next block and the Edison robot spins right for 180 degrees at speed 1. This results in Edison driving away from obstacles in its path.";

Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_TITLE = "forwards until";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_BODY_1 = "The forwards until block drives the wheels to move the robot in the forwards direction until the specified condition is true. Once the specified condition is true the wheels stop and the program progresses to the next block.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_BODY_2 = "The block has two parameters:";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_BODY_3 = "Conditional input - The conditional input accepts a diamond shaped block that can be either a sensing or operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_BODY_4 = "Speed - The speed can be either selected from 1 to 10 (as a constant value) a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_BODY_5 = "The forwards until block must complete before the next block will run. For example, using the forwards until block will not run other blocks in the program at the same time. To do this see the set both motors to block.";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_EXAMPLE_1_TITLE = "Example program 1: Stop for an obstacle";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_EXAMPLE_1_BODY_1 = "In this example program, the obstacle detection beam is turned on, then the robot drives forward at speed 5 until an obstacle is detected. When this happens, the robot stops moving and the program ends.  ";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_EXAMPLE_2_TITLE = "Example program 2: Bounce in borders";
Blockly.Msg.HELP_TEXT_DRIVE_FORWARD_UNTIL_EXAMPLE_2_BODY_1 = "In this example program, the line tracker LED is turned on, then the program enters a forever loop. Inside the loop the forwards until block drives the robot forward at speed 1 until the line tracker is on a non-reflective surface (i.e. black). When this happens, the next block runs which spins the robot left for 180 degrees at speed 5. The program then loops back to the forwards until block.  This results in Edison driving away from detected black lines.";

Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_TITLE = "backwards until";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_BODY_1 = "The backwards until block drives the wheels to move the robot in the backwards direction until the specified condition is true. Once the specified condition is true the wheels stop and the program progresses to the next block.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_BODY_2 = "The block has two parameters:";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_BODY_3 = "Conditional input - The conditional input accepts a diamond shaped block that can be either a sensing or operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_BODY_4 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_BODY_5 = "The backwards until block must complete before the next block will run. For example, using the backwards until block will not run other blocks in the program at the same time. To do this see the set both motors to block.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_EXAMPLE_1_TITLE = "Example program 1: Stop when drive is strained";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_EXAMPLE_1_BODY_1 = "In this example program, the robot drives backwards at speed 10 until the wheels are strained (are unable to rotate or become stuck). When this happens, the motors stop and the program ends.";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_EXAMPLE_2_TITLE = "Example program 2: Drive control with buttons";
Blockly.Msg.HELP_TEXT_DRIVE_BACKWARD_UNTIL_EXAMPLE_2_BODY_1 = "In this example, the program starts with a forever loop. The first block in the loop waits until the triangle button is pushed. When this happens, the robot drives backwards at speed 1 until the round button is pressed. When this happened the robot's wheels stop and the program loops back to waiting for the triangle button to be pressed. ";

Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_TITLE = "left until ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_BODY_1 = "The left until block drives the wheels to move the robot in the left direction until the specified condition is true. Once the specified condition is true the wheels stop and the program progresses to the next block. ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_BODY_2 = "The block has three parameters: ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_BODY_3 = "Movement - There are three options that can be selected: spin, turn forwards and turn backwards. ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_BODY_4 = "Conditional input - The conditional input accepts a diamond shaped block that can be either a sensing or operator block.  ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_BODY_5 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_BODY_6 = "The spin left until block must complete before the next block will run. For example, using the spin left until block will not run other blocks in the program at the same time. To do this see the set both motors to block. ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_EXAMPLE_1_TITLE = "Example program 1: Stop when drive is strained ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_EXAMPLE_1_BODY_1 = "In this example program, the robot drives forward left (right wheel moving) at speed 1 until the wheel becomes strained (unable to rotate or becomes stuck). When this happens, the motor stops and the program ends. ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_EXAMPLE_2_TITLE = "Example program 2: Follow light ";
Blockly.Msg.HELP_TEXT_DRIVE_LEFT_UNTIL_FOR_EXAMPLE_2_BODY_1 = "In this example, the program starts with a forever loop. The first block in the loop turns the robot left at speed 5 until the left light level is less than the right light level. When this happens the motor stops and the next block runs. The next block turns the robot right at speed 5 until the left light level is greater than the right light level. The result of this is that the Edison robot drives towards light.   ";

Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_TITLE = "right until ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_BODY_1 = "The right until block drives the wheels to move the robot in the right direction until the specified condition is true. Once the specified condition is true the wheels stop and the program progresses to the next block. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_BODY_2 = "The block has three parameters: ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_BODY_3 = "Movement - There are three options that can be selected: spin, turn forwards and turn backwards. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_BODY_4 = "Conditional input - The conditional input accepts a diamond shaped block that can be either a sensing or operator block.  ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_BODY_5 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_BODY_6 = "The right until block must complete before the next block will run. For example, using the spin right until block will not run other blocks in the program at the same time. To do this see the set both motors to block. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_EXAMPLE_1_TITLE = "Example program 1: Stop on black surface ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_EXAMPLE_1_BODY_1 = "In this example, program the robot spins right at speed 5 until the line tracker detects a non-reflective surface (black). When this happens that motor stops and the program ends. ";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_EXAMPLE_2_TITLE = "Example program 2: Follow light";
Blockly.Msg.HELP_TEXT_DRIVE_RIGHT_UNTIL_FOR_EXAMPLE_2_BODY_1 = "In this example, the program starts with a forever loop. The first block in the loop turns the robot left at speed 5 until the left light level is less than the right light level. When this happens the motor stops and the next block runs. The next block turns the robot right at speed 5 until the left light level is greater than the right light level. The result of this is that the Edison robot drives towards light. ";

Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_TITLE = "Set both motors to ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_BODY_1 = "The set both motors to block drives the wheels to move the robot in the selected direction and speed. As this drive block sets the motors, the program can continue straight to the next block. This is different to the drive blocks that have a distance, time or angle to complete before the program continues to the next block.  ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_BODY_2 = "The block has two parameters: ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_BODY_3 = "Movement - There are six options that can be selected: drive forwards, drive backwards, spin robot left, spin robot right, turn robot left and turn robot right. ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_BODY_4 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_EXAMPLE_1_TITLE = "Example program 1: Music while driving ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_EXAMPLE_1_BODY = "In this example program the Edison robot is set to drive forward, then three notes are played while the robot is still driving. After the last note finishes playing the program ends and the Edison robot stops driving. ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_EXAMPLE_2_TITLE = "Example program 2: Drive until an obstacle  ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_EXAMPLE_2_BODY = "In this example program the obstacle detection beam is turned on, then both motors are set to drive forwards at speed 8. The next block waits until any obstacle is detected. When this happens, the program ends and the robot stops driving.  ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_EXAMPLE_3_TITLE = "Example program 3: Follow a line ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_BOTH_MOTOR_EXAMPLE_3_BODY = "In this example program, the line tracker LED is turned on and the program enters a forever loop. Inside the loop both motors are set to turn robot left at speed 1, then the wait until block holds the program there until the line tracker detects a reflective surface (white). When that happens, both motors are then set to turn robot right at speed 1 and the wait until block hold the program there until the line tracker detects a non-reflective surface (black). When that happens the program loops back to the start of the forever loop and repeats. This results in Edison following a non-reflective line. ";

Blockly.Msg.HELP_TEXT_DRIVE_SET_RIGHT_MOTOR_TITLE = "set right motor to ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_RIGHT_MOTOR_BODY_1 = "The set right motor to block drives the wheels to move the robot in the selected direction and speed. As this drive block sets the motors the program can continue straight to the next block. This is different to the drive blocks that have a distance, time or angle to complete before the program moves to the next block.  ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_RIGHT_MOTOR_BODY_2 = "The block has two parameters: ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_RIGHT_MOTOR_BODY_3 = "Movement - There are two options that can be selected: forwards and backwards. ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_RIGHT_MOTOR_BODY_4 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_RIGHT_MOTOR_EXAMPLE_1_TITLE = "Example program 1: Motor on and off with a button press ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_RIGHT_MOTOR_EXAMPLE_1_BODY = "In this example, the program enters a forever loop. The first block in the loop waits until the round button is pressed. When this happens, the right motor is set to forwards at speed 5, the program then progresses to another wait until round button pressed block. When this happens, the right motor is stopped and the program loops back to the start of the forever loop.  ";

Blockly.Msg.HELP_TEXT_DRIVE_SET_LEFT_MOTOR_TITLE = "set left motor to ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_LEFT_MOTOR_BODY_1 = "The set left motor to block drives the wheels to move the robot in the selected direction and speed. As this drive block sets the motors the program can continue straight to the next block. This is different to the drive blocks that have a distance, time or angle to complete before the program moves to the next block.  ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_LEFT_MOTOR_BODY_2 = "The block has two parameters: ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_LEFT_MOTOR_BODY_3 = "Movement - There are two options that can be selected: forwards and backwards. ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_LEFT_MOTOR_BODY_4 = "Speed - The speed can be either selected from 1 to 10 (as a constant value), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_LEFT_MOTOR_EXAMPLE_1_TITLE = "Example program 1: Light following ";
Blockly.Msg.HELP_TEXT_DRIVE_SET_LEFT_MOTOR_EXAMPLE_1_BODY = "In this example, the program enters a forever loop. The first block in the loop sets the left motor forwards at a calculated speed. The calculated speed is the light level from the right sensor minus the light level from the left sensor divided by 100, 3 is also added to the result to set a minimum speed. The next block sets the right motor to forwards at a calculated speed. The calculated speed is the light level from the left sensor minus the light level from the right sensor divided by 100, 3 is also added to the result to set a minimum speed. The program then loops back to the start of the forever loop. The calculated results control the speed so that the side that has the least amount of light drives the fastest. This results in the Edison robot always trying to face and drive towards the brightest light.  ";

Blockly.Msg.HELP_TEXT_DRIVE_STOP_TITLE = "stop ";
Blockly.Msg.HELP_TEXT_DRIVE_STOP_BODY_1 = "The stop block stops the motors from driving the wheels.  ";
Blockly.Msg.HELP_TEXT_DRIVE_STOP_BODY_2 = "The stop block has only one parameter for selecting which motor/s are stopped. The options are both motors, left motor and right motor. ";
Blockly.Msg.HELP_TEXT_DRIVE_STOP_EXAMPLE_1_TITLE = "Example program 1: Motor on and off with a button press ";
Blockly.Msg.HELP_TEXT_DRIVE_STOP_EXAMPLE_1_BODY = "In this example, the program enters a forever loop. The first block in the loop waits until the round button is pressed. When this happens, the right motor is set to forwards at speed 5, the program then progresses to another wait until round button pressed block. When this happens, the right motor is stopped and the program loops back to the start of the forever loop. ";

Blockly.Msg.HELP_TEXT_LEDS_LEFT_TITLE = "turn left LED  ";
Blockly.Msg.HELP_TEXT_LEDS_LEFT_BODY_1 = "The turn left LED block controls the left LED. There are two options on or off.  ";
Blockly.Msg.HELP_TEXT_LEDS_LEFT_EXAMPLE_1_TITLE = "Example program 1: Blink left LED once ";
Blockly.Msg.HELP_TEXT_LEDS_LEFT_EXAMPLE_1_BODY = "In this example the program begins by turning the left LED on, then waits for one second, then turns the left LED off. ";
Blockly.Msg.HELP_TEXT_LEDS_LEFT_EXAMPLE_2_TITLE = "Example program 2: Blink left LED forever ";
Blockly.Msg.HELP_TEXT_LEDS_LEFT_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. Inside the loop the left LED is turned on, then the program waits for one second, then the left LED is turned off, then the program waits for one second, then the program jumps to the beginning of the loop and repeats forever. ";

Blockly.Msg.HELP_TEXT_LEDS_RIGHT_TITLE = "turn right LED ";
Blockly.Msg.HELP_TEXT_LEDS_RIGHT_BODY_1 = "The turn right LED block controls the right LED. There are two options on or off.  ";
Blockly.Msg.HELP_TEXT_LEDS_RIGHT_EXAMPLE_1_TITLE = "Example program 1: Blink right LED once ";
Blockly.Msg.HELP_TEXT_LEDS_RIGHT_EXAMPLE_1_BODY = "In this example, the program begins by turning the right LED on, then waits for one second, then turns the right LED off. ";
Blockly.Msg.HELP_TEXT_LEDS_RIGHT_EXAMPLE_2_TITLE = "Example program 2: Blink right LED forever ";
Blockly.Msg.HELP_TEXT_LEDS_RIGHT_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. Inside the loop the right LED is turned on, then the program waits for one second, then the right LED is turned off, then the program waits for one second, then the program jumps to the beginning of the loop and repeats forever. ";

Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_TITLE = "send IR message ";
Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_BODY_1 = "The send IR message block sends data via infrared (IR) light. The data that can be sent is a value from 0 to 255. The value can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_BODY_2 = "The sent data can be received by any other Edison robot that is in range of the IR light signal. The maximum range can be up to 10 meter/30 feet under ideal conditions (i.e. indoors, no direct sunlight, white ceiling and walls for the IR light to bounce off). ";
Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_BODY_3 = "If you use a variable, the number in the variable could exceed the 255 limit (8-bits). When this happens, the number sent via IR will 'wrap around' (i.e. 256 sends 0, 257 sends 1, 258 sends 2...). ";
Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_EXAMPLE_1_TITLE = "Example program 1: Send IR message 1 when round button pressed ";
Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the loop the program waits for the round button to be pressed. When this happens, the IR message 1 is sent. The program then loops back to the beginning of the forever loop. ";
Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_EXAMPLE_2_TITLE = "Example program 2: Send light level every one second ";
Blockly.Msg.HELP_TEXT_LEDS_SEND_MESSAGE_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. Inside the loop the program sends the light level reading from the left light sensor divided by four. The value is divided by four as the output from the light sensor is 1 to 1,000, but the highest number that can be sent with IR is 255 (1,000/4 = 250). This additional calculation allows the full range of the light sensor to be sent. The program then waits for one second and then loops back to the start of the forever loop. ";

Blockly.Msg.HELP_TEXT_SOUND_BEEP_TITLE = "beep";
Blockly.Msg.HELP_TEXT_SOUND_BEEP_BODY_1 = " The beep block plays a 3.5kHz beep sound for 125mS (0.125 seconds). ";
Blockly.Msg.HELP_TEXT_SOUND_BEEP_EXAMPLE_1_TITLE = "Example program 1: Beep when round button is pressed";
Blockly.Msg.HELP_TEXT_SOUND_BEEP_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the loop the program waits for the round button to be pressed. When this happens, the beep is played. The program then loops back to the start of the forever loop and repeats. ";

Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_TITLE = "play a note";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_BODY_1 = "The play a note block plays a musical note. The block parameters allow the length, note and type of note to be selected.";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_BODY_2 = "The block has three parameters:";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_BODY_3 = "Length - There are four options: whole, half, quarter and eighth. ";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_BODY_4 = "Note - There are ten options: C, B, A, G, F, E, D, middle C, low B and rest.";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_BODY_5 = "Note modifier - There are three options: - (not modified), sharp and flat. ";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_BODY_6 = "The play a note block must complete before the next block will run. For example, using the play a note block will not run other blocks in the program at the same time. To do this see the play music in background block.";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_EXAMPLE_1_TITLE = "Example program 1: Mary had a little lamb";
Blockly.Msg.HELP_TEXT_SOUND_PLAY_NOTE_EXAMPLE_1_BODY = "In this example, the program begins by setting the tempo for the music notes, then plays the notes for the nursery rhyme Mary had a little lamb in order, playing each note fully before moving on.";

Blockly.Msg.HELP_TEXT_SOUND_SET_TEMPO_TITLE = "set music tempo to";
Blockly.Msg.HELP_TEXT_SOUND_SET_TEMPO_BODY_1 = "The set music temp to block sets the tempo that following notes are played at. ";
Blockly.Msg.HELP_TEXT_SOUND_SET_TEMPO_BODY_2 = "There are five options: very slow, slow, medium, fast and very fast.";
Blockly.Msg.HELP_TEXT_SOUND_SET_TEMPO_EXAMPLE_1_TITLE = "Example program 1: Mary had a little lamb";
Blockly.Msg.HELP_TEXT_SOUND_SET_TEMPO_EXAMPLE_1_BODY = "In this example, the program begins by setting the tempo for the music notes, then plays the notes for the nursery rhyme Mary had a little lamb at that speed, playing each note fully before moving on.";


Blockly.Msg.HELP_TEXT_SOUND_PLAYINBACKGROUND_TITLE = "Play music in background";
Blockly.Msg.HELP_TEXT_SOUND_PLAYINBACKGROUND_BODY_1 = "The play music in background block allows musical notes placed inside the block to play while the Edison robot is running other parts of the program. ";
Blockly.Msg.HELP_TEXT_SOUND_PLAYINBACKGROUND_EXAMPLE_1_TITLE = "Example program 1: Mary had a little lamb while dancing";
Blockly.Msg.HELP_TEXT_SOUND_PLAYINBACKGROUND_EXAMPLE_1_BODY = "In this example program, the program begins by setting the tempo for the music notes, then the notes inside the play music in background block start to play, the program enters the repeat loop and the spin left and spin right blocks run four times with the tune still playing in the background. This results in Edison dancing while playing music.";


Blockly.Msg.HELP_TEXT_VARIABLE_TITLE = "Variable";
Blockly.Msg.HELP_TEXT_VARIABLE_BODY_1 = "A variable block is a place where data can be stored and used by a program. The data in a variable can vary and change while the program is running. This is why it is called a variable. ";
Blockly.Msg.HELP_TEXT_VARIABLE_BODY_2 = "The data in a variable is a number that can range from -1,073,741,824 to 1,073,741,823 (signed 32-bit).";
Blockly.Msg.HELP_TEXT_VARIABLE_BODY_3 = "Variables should be customised by naming them something that makes sense to the program. For example: ";
Blockly.Msg.HELP_TEXT_VARIABLE_BODY_4 = "If the number in a variable exceeds the range of -1,073,741,824 to 1,073,741,823, then the program will halt and Edison will play a failure tone. ";
Blockly.Msg.HELP_TEXT_VARIABLE_EXAMPLE_1_TITLE = "Example program 1: A random flash rate set at the program start";
Blockly.Msg.HELP_TEXT_VARIABLE_EXAMPLE_1_BODY_1 = "In this example program, the variable 'FlashRate' is set to a random number between 10 and 100. The program then enters a forever loop. Inside the loop the left and right LEDs are turned on, then the program waits for the millisecond value in 'FlashRate', then turns off the left and right LEDs, then the program again waits for the millisecond value in 'FlashRate'. The program then loops back to the start of the forever loop and repeats. This results in Edison flashing its LEDs at different speeds each time the program is run";
Blockly.Msg.HELP_TEXT_VARIABLE_EXAMPLE_2_TITLE = "Example program 2: Count black lines driven over";
Blockly.Msg.HELP_TEXT_VARIABLE_EXAMPLE_2_BODY_1 = "In this example program, the line tracker LED is first turned on, then the Edison robot drives forwards for 30cm at speed 5. While driving forward any detected non-reflective (black) surfaces by the line tracker will trigger the program to jump to the event block Line tracker on non-reflective surface. When this happens, the variable 'LineCount' is incremented (+1). When driving for 30 cm has completed the program repeats the wait for 1 second and beep blocks for the number of times in the variable 'LineCount'. ";
Blockly.Msg.HELP_TEXT_VARIABLE_EXAMPLE_3_TITLE = "Example program 3: Light radiation counter";
Blockly.Msg.HELP_TEXT_VARIABLE_EXAMPLE_3_BODY_1 = "In this example program, the music tempo is first set to very fast. The program then enters a forever loop. Inside the loop the program sets the variable 'Delay' to 1000 minus the left light level (inverting the light level reading). The next block waits for the value in the 'Delay' variable. The program then plays the note C and loops back to the start of the forever loop and repeats. The result of this program is that Edison will beep slow when in darkness and faster when the light level is brighter. ";

Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_TITLE = "set to";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_BODY_1 = "The set to block is used to set a value in a variable. ";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_BODY_2 = "There are two inputs:";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_BODY_3 = "Variable - This is where the variable block is placed.";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_BODY_4 = "Value - Can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_EXAMPLE_1_TITLE = "Example program 1: Set the number of beeps";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_EXAMPLE_1_BODY_1 = "In this example program, the variable 'NumberOfBeeps' is set to 5, then the repeat block repeats the beeping for the value 5 held in the variable 'NumberOfBeeps'.";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_EXAMPLE_2_TITLE = "Example program 2: A random flash rate set at the program start";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_EXAMPLE_2_BODY_1 = "In this example program, the variable 'FlashRate' is set to a random number between 10 and 1000. The program then enters a forever loop. Inside the loop the left and right LEDs are turned on, then the program waits for the millisecond value in 'FlashRate', then turns off the left and right LEDs, then the program again waits for the millisecond value in 'FlashRate'. The program then loops back to the start of the forever loop and repeats. This results in Edison flashing its LEDs at different speeds each time the program is run";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_EXAMPLE_3_TITLE = "Example program 3: Follow the light";
Blockly.Msg.HELP_TEXT_DATA_SETVARIABLETO_EXAMPLE_3_BODY_1 = "In this example, the program begins by entering a forever loop. Inside the loop the program sets the variable 'LightLeftvsRight' to the left light level minus the right light level. The if else block then tests whether the value in the variable 'LightLeftvsRight' is greater than 0. If the result is true, then the right motor is set to drive forwards and the left motor is stopped. If the result is false, then the left motor is set to drive forward and the right motor is stopped. The program then loops back to the start of the forever loop and repeats. This results in Edison driving towards the brightest light source.";

Blockly.Msg.HELP_TEXT_DATA_INCVARIABLE_TITLE = "increment";
Blockly.Msg.HELP_TEXT_DATA_INCVARIABLE_BODY_1 = "The increment block increments (adds 1) to the variable placed in the block.";
Blockly.Msg.HELP_TEXT_DATA_INCVARIABLE_EXAMPLE_1_TITLE = "Example program 1: Decelerating flashing ";
Blockly.Msg.HELP_TEXT_DATA_INCVARIABLE_EXAMPLE_1_BODY_1 = "In this example program, the variable 'Delay' is set to 0 the program then enters a forever loop. Inside the loop the variable 'Delay' is incremented (+1), then the right LED is turned on and the left LED is turned off, then the program waits for the value in the variable 'Delay' in milliseconds, then the right LED is turned off and the left LED is turned on and then again, the program waits for the value in the variable 'Delay' in milliseconds. The program then loops back to the start of the forever loop and repeats. As the program repeats through the forever loop, the variable 'Delay' is incremented each time making the time that the LEDs spend on and off longer and longer. After 1,000 loops the time the LEDs are on is one second and the time the LEDs are off is one second. ";

Blockly.Msg.HELP_TEXT_DATA_DECVARIABLE_TITLE = "decrement";
Blockly.Msg.HELP_TEXT_DATA_DECVARIABLE_BODY_1 = "The decrement block decrements (minus 1) to the variable placed in the block.";
Blockly.Msg.HELP_TEXT_DATA_DECVARIABLE_EXAMPLE_1_TITLE = "Example program 1: Accelerating flashing ";
Blockly.Msg.HELP_TEXT_DATA_DECVARIABLE_EXAMPLE_1_BODY_1 = "In this example program, the variable 'Delay' is set to 100 the program then enters a forever loop. Inside the loop the variable 'Delay' is decremented (-1), then the right LED is turned on and the left LED is turned off, then the program waits for the value in the variable 'Delay' in milliseconds, then the right LED is turned off and the left LED is turned on and then again, the program waits for the value in the variable 'Delay' in milliseconds. The program then loops back to the start of the forever loop and repeats. As the program repeats through the forever loop, the variable 'Delay' is decremented each time making the time that the LEDs spend on and off less. After 100 loops the time the LEDs are on is one millisecond and the time the LEDs are off is one millisecond. ";

Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_TITLE = "bit shift right";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_1 = "The bit shift right by block mathematically adjusts the connected variable block in its binary form by shifting the bits right by the set value.";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_2 = "The number format that computers use is called binary. It is a number system that is only comprised of the numbers 0 and 1. Each number inside a computer is a string of 1s and 0s. Here are some examples of binary numbers that are 8-bits long:";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_HUMAN = "Human/decimal";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_COMPUTER = "Computer/8-bit Binary";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_3 = "Here are some examples of binary numbers that are 32-bits long:";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_4 = "Edison V3 uses both 8-bit and 32-bit binary numbers. For example, variable blocks are able to store large 32-bit numbers (actually 31-bit signed), but only 8-bit numbers can be sent via the send IR message block. Further, some sensors, such as the light sensors have a range of 1 to 1000. As the highest possible 8-bit number is 255, then the full range of the light sensor reading cannot be sent via the send IR message block. This is where the bit shift right block can help!";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_5 = "The light sensor reading is 10-bit binary. Here are the minimum and maximum values:";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_6 = "If the number 1000 was sent with the send IR message block the received number would only be the last 8-bits. This would be 11111010 (binary) or 232 (human/decimal). This is a very different number to the actual light reading of 1000.   ";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_7 = "To send the light level data via the send IR message block, the bit shift right block can be used to shorten the number into an 8-bit number (shift right by 2) without losing too much of the data. Then, on the receiving end the bit shift left block can be used to restore the light level reading back to 10-bits (shift left by 2). ";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_4_LINE_1_BOX_1 = "Stage";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_4_LINE_2_BOX_1 = "Light reading";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_4_LINE_3_BOX_1 = "Bit shift right (2)";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_4_LINE_4_BOX_1 = "IR data send/receive";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_4_LINE_5_BOX_1 = "Bit shift left (2)";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_ARRAY_BIT = "bit";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_RIGHT_BODY_8 = "In this scenario the resulting number is not perfectly the same, as some information has been lost. However, the most significant bits containing more than 99% of the original data has been retained through this process.";


Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_TITLE = "bit shift left";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_1 = "The bit shift left by block mathematically adjusts the connected variable block in its binary form by shifting the bits left by the set value.";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_2 = "The number format that computers use is called binary. It is a number system that is only comprised of the numbers 0 and 1. Each number inside a computer is a string of 1s and 0s. Here are some examples of binary numbers that are 8-bits long:";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_HUMAN = "Human/decimal";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_COMPUTER = "Computer/8-bit Binary";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_3 = "Here are some examples of binary numbers that are 32-bits long:";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_4 = "Edison V3 uses both 8-bit and 32-bit binary numbers. For example, variable blocks are able to store large 32-bit numbers (actually 31-bit signed), but only 8-bit numbers can be sent via the send IR message block. Further, some sensors, such as the light sensors have a range of 1 to 1000. As the highest possible 8-bit number is 255, then the full range of the light sensor reading cannot be sent via the send IR message block. This is where the bit shift right block can help!";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_5 = "The light sensor reading is 10-bit binary. Here are the minimum and maximum values:";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_6 = "If the number 1000 was sent with the send IR message block the received number would only be the last 8-bits. This would be 11111010 (binary) or 232 (human/decimal). This is a very different number to the actual light reading of 1000.   ";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_7 = "To send the light level data via the send IR message block, the bit shift right block can be used to shorten the number into an 8-bit number (shift right by 2) without losing too much of the data. Then, on the receiving end the bit shift left block can be used to restore the light level reading back to 10-bits (shift left by 2). ";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_4_LINE_1_BOX_1 = "Stage";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_4_LINE_2_BOX_1 = "Light reading";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_4_LINE_3_BOX_1 = "Bit shift right (2)";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_4_LINE_4_BOX_1 = "IR data send/receive";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_4_LINE_5_BOX_1 = "Bit shift left (2)";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_ARRAY_BIT = "bit";
Blockly.Msg.HELP_TEXT_BIT_SHIFT_LEFT_BODY_8 = "In this scenario the resulting number is not perfectly the same, as some information has been lost. However, the most significant bits containing more than 99% of the original data has been retained through this process.";

Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_TITLE = "Any obstacle detected ";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_BODY_1 = "The Any obstacle detected event block causes the program to jump to this block when any obstacle is detected by the obstacle detector.";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_BODY_2 = "Always ensure that the obstacle detector beam is turned on in the main program.";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_EXAMPLE_1_TITLE = "Example program 1: Beep when any obstacle is detected.";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_EXAMPLE_1_BODY_1 = "In this example program, the obstacle detector is first turned on, the program then enters the forever loop block. When any obstacle is detected, the program jumps out of the forever loop and goes to the Any obstacle detected event block. This causes the beep block to run and the Edison robot beeps. The program then returns to where it left from in the main program.";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_EXAMPLE_2_TITLE = "Example program 2: Stop driving when there is an obstacle";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_EXAMPLE_2_BODY_1 = "In this example program, the obstacle detector is first turned on, then both motors are set to drive forwards at speed 5, the program then enters the forever loop block. When any obstacle is detected, the program jumps out of the forever loop and goes to the Any obstacle detected event block. This causes the stop both motors block to run and stops both motors from running. The program then returns to where it left from in the main program.";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_EXAMPLE_3_TITLE = "Example program 3: Avoid obstacles";
Blockly.Msg.HELP_TEXT_EVENT_ANYOBSTACLE_EXAMPLE_3_BODY_1 = "In this example program, the obstacle detector is first turned on, then the program enters a forever loop, inside the loop both motors are set to drive forwards at speed 5. When any obstacle is detected, the program jumps out of the forever loop and goes to the Any obstacle detected event block. The blocks under the Any obstacle detected event block drive the Edison backwards for 1 cm at speed 1, then spin left for 120 degrees at speed 1. The program then returns to where it left in the forever loop and both motors are set to drive forward at speed 5 again.  This results in Edison driving away from obstacles in its path.";

Blockly.Msg.HELP_TEXT_OBSTACLE_LEFT_EVENT_TITLE = "Obstacle detected left";
Blockly.Msg.HELP_TEXT_OBSTACLE_LEFT_EVENT_BODY_1 = "The Obstacle detected left event block causes the program to jump to this block when an obstacle is detected on the left by the obstacle detector.";
Blockly.Msg.HELP_TEXT_OBSTACLE_LEFT_EVENT_BODY_2 = "Always ensure that the obstacle detector beam is turned on in the main program.";
Blockly.Msg.HELP_TEXT_OBSTACLE_LEFT_EVENT_EXAMPLE_1_TITLE = "Example program 1: Beep when an obstacle is detected on the left";
Blockly.Msg.HELP_TEXT_OBSTACLE_LEFT_EVENT_EXAMPLE_1_BODY_1 = "In this example program, the obstacle detector is first turned on, the program then enters the forever loop block. When an obstacle is detected to the left, the program jumps out of the forever loop and goes to the Obstacle detected left event block. This causes the beep block to run and the Edison robot beeps. The program then returns to where it left in the forever loop block.";

Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_TITLE = "Obstacle detected right";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_BODY_1 = "The Obstacle detected right event block causes the program to jump to this block when an obstacle is detected on the right by the obstacle detector.";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_BODY_2 = "Always ensure that the obstacle detector beam is turned on in the main program.";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_EXAMPLE_1_TITLE = "Example program 1: Beep when an obstacle is detected on the right";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_EXAMPLE_1_BODY_1 = "In this example program, the obstacle detector is first turned on, the program then enters the forever loop block. When an obstacle is detected to the right, the program jumps out of the forever loop and goes to the Obstacle detected right event block. This causes the beep block to run and the Edison robot beeps. The program then returns to where it left in the forever loop block.";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_EXAMPLE_2_TITLE = "Example program 2: Obstacle evader";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_EXAMPLE_2_BODY_1 = "In this example program, the obstacle detector is first turned on, the program then enters the forever loop block. When…";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_EXAMPLE_2_BODY_2 = "…an obstacle is detected ahead the program jumps to the Obstacle detected ahead event block and the Edison robot drives backwards for 0.25 seconds at speed 10 and then returns to where it left in the forever loop block.";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_EXAMPLE_2_BODY_3 = "…an obstacle is detected to the right the program jumps to the Obstacle detected right event block and the Edison robot turns left backwards for 0.25 seconds at speed 10 and then returns to where it left in the forever loop block.";
Blockly.Msg.HELP_TEXT_OBSTACLE_RIGHT_EVENT_EXAMPLE_2_BODY_4 = "…an obstacle is detected to the left the program jumps to the Obstacle detected left event block and the Edison robot turns right backwards for 0.25 seconds at speed 10 and then returns to where it left in the forever loop block.";

Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_TITLE = "Obstacle detected ahead";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_BODY_1 = "The Obstacle detected ahead event block causes the program to jump to this block when an obstacle is detected ahead by the obstacle detector. This means that, at the same time, both the left and right obstacle detectors have detected an obstacle. ";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_BODY_2 = "Always ensure that the obstacle detector beam is turned on in the main program.";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_EXAMPLE_1_TITLE = "Example program 1: Beep when an obstacle is detected ahead";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_EXAMPLE_1_BODY_1 = "In this example program, the obstacle detector is first turned on, the program then enters the forever loop block. When an obstacle is detected to the right, the program jumps out of the forever loop and goes to the Obstacle detected right event block. This causes the beep block to run and the Edison robot beeps. The program then returns to where it left in the forever loop block.";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_EXAMPLE_2_TITLE = "Example program 2: The obstacle evader";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_EXAMPLE_2_BODY_1 = "In this example program, the obstacle detector is first turned on, the program then enters the forever loop block. When…";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_EXAMPLE_2_BODY_2 = "…an obstacle is detected ahead the program jumps to the Obstacle detected ahead event block and the Edison robot drives backwards for 0.25 seconds at speed 10 and then returns to where it left in the forever loop block.";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_EXAMPLE_2_BODY_3 = "…an obstacle is detected to the right the program jumps to the Obstacle detected right event block and the Edison robot turns left backwards for 0.25 seconds at speed 10 and then returns to where it left in the forever loop block.";
Blockly.Msg.HELP_TEXT_OBSTACLE_AHEAD_EVENT_EXAMPLE_2_BODY_4 = "…an obstacle is detected to the left the program jumps to the Obstacle detected left event block and the Edison robot turns right backwards for 0.25 seconds at speed 10 and then returns to where it left in the forever loop block.";

Blockly.Msg.HELP_TEXT_CLAP_EVENT_TITLE = "Clap detected";
Blockly.Msg.HELP_TEXT_CLAP_EVENT_BODY_1 = "The Clap detected event block causes the program to jump to this block when a clap is detected.";
Blockly.Msg.HELP_TEXT_CLAP_EVENT_BODY_2 = "When Edison is driving the motor noise and bumping cause the clap sensor to trigger, so it's best not to use the clap sensor when driving. Also, if there are likely to be false or unwanted noise detections, then the clap sensor data can be cleared with the clear sensor data block set to clap detector (see example program). ";
Blockly.Msg.HELP_TEXT_CLAP_EVENT_EXAMPLE_1_TITLE = "Example program: Edison is scared of loud noises";
Blockly.Msg.HELP_TEXT_CLAP_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by entering an empty forever loop and nothing happens. When a clap (or other loud scary sound) is detected, the program jumps out of the forever loop and goes to the Clap detected event block. The blocks below the Clap detected event block then run, driving backwards 5 cm at speed 10 (jump in fright), then entering a repeat loop set to 25 times where the spin left and spin right blocks repeatedly run causing the Edison to vibrate (shiver in fright).  Finally, (when Edison recovers from its fright) the clear sensor data block clears out any false clap detections that may have occurred while driving. The program now returns to the forever loop.  ";

Blockly.Msg.HELP_TEXT_TRIANGLEBUTTON_EVENT_TITLE = "Triangle button pressed";
Blockly.Msg.HELP_TEXT_TRIANGLEBUTTON_EVENT_BODY_1 = "The Triangle button pressed event block causes the program to jump to this block when the triangle button is pressed.";
Blockly.Msg.HELP_TEXT_TRIANGLEBUTTON_EVENT_EXAMPLE_1_TITLE = "Example program: Control LED flash speed setting with buttons";
Blockly.Msg.HELP_TEXT_TRIANGLEBUTTON_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by setting the variable called 'Delay' to 100, the program then enters a forever loop. Inside the forever loop, the left and right LEDs are turned on and off with a wait for the value in the 'Delay' variable in milliseconds. This results in the LEDs being on for 100 milliseconds (0.1 seconds) and off for 100 milliseconds (0.1 seconds). ";
Blockly.Msg.HELP_TEXT_TRIANGLEBUTTON_EVENT_EXAMPLE_1_BODY_2 = "When the triangle button is pressed, the program jumps to the Triangle button pressed event block. The blocks below the Triangle button pressed event block then run, setting the variable called 'Delay' to 50, then playing a beep. The program then returns to the forever loop, but now the value in the variable called 'Delay' is 50, so the time between the LEDs being on and off is now 50 milliseconds (0.05 seconds). This makes them flash on and off faster.    ";
Blockly.Msg.HELP_TEXT_TRIANGLEBUTTON_EVENT_EXAMPLE_1_BODY_3 = "When the round button is pressed, the program jumps to the Round button pressed event block. The blocks below the Round button pressed event block then run, setting the variable called 'Delay' to 200, then playing a beep. The program then returns to the forever loop, but now the value in the variable called 'Delay' is 200, so the time between the LEDs being on and off is now 200 milliseconds (0.2 seconds). This makes them flash on and off slower.    ";

Blockly.Msg.HELP_TEXT_ROUNDBUTTON_EVENT_TITLE = "Round button pressed";
Blockly.Msg.HELP_TEXT_ROUNDBUTTON_EVENT_BODY_1 = "The Round button pressed event block causes the program to jump to this block when the round button is pressed.";
Blockly.Msg.HELP_TEXT_ROUNDBUTTON_EVENT_EXAMPLE_1_TITLE = "Example program: Control LED flash speed setting with buttons";
Blockly.Msg.HELP_TEXT_ROUNDBUTTON_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by setting the variable called 'Delay' to 100, the program then enters a forever loop. Inside the forever loop, the left and right LEDs are turned on and off with a wait for the value in the 'Delay' variable in milliseconds. This results in the LEDs being on for 100 milliseconds (0.1 seconds) and off for 100 milliseconds (0.1 seconds). ";
Blockly.Msg.HELP_TEXT_ROUNDBUTTON_EVENT_EXAMPLE_1_BODY_2 = "When the triangle button is pressed, the program jumps to the Triangle button pressed event block. The blocks below the Triangle button pressed event block then run, setting the variable called 'Delay' to 50, then playing a beep. The program then returns to the forever loop, but now the value in the variable called 'Delay' is 50, so the time between the LEDs being on and off is now 50 milliseconds (0.05 seconds). This makes them flash on and off faster.    ";
Blockly.Msg.HELP_TEXT_ROUNDBUTTON_EVENT_EXAMPLE_1_BODY_3 = "When the round button is pressed, the program jumps to the Round button pressed event block. The blocks below the Round button pressed event block then run, setting the variable called 'Delay' to 200, then playing a beep. The program then returns to the forever loop, but now the value in the variable called 'Delay' is 200, so the time between the LEDs being on and off is now 200 milliseconds (0.2 seconds). This makes them flash on and off slower.     ";

Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_TITLE = "Line tracker on reflective surface";
Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_BODY_1 = "The Line tracker on reflective surface event block causes the program to jump to this block when the line tracker sensor detects a change from a non-reflective surface (i.e. black) to a reflective surface (i.e. white).  ";
Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_BODY_2 = "The line tracker LED must be turned on for the Line tracker on reflective surface event block to work. ";
Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_EXAMPLE_1_TITLE = "Example program: Follow the edge of a line";
Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by turning on the line tracking LED, the program then causes the robot to turn right (looking for the edge of a line). ";
Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_EXAMPLE_1_BODY_2 = "When the line tracker detects a change from a reflective (white) to non-reflective (black) surface, the program jumps to the Line tracker on non-reflective surface block and runs the drive block to set the robot to turn left (turning back towards the reflective (white) surface).  ";
Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_EXAMPLE_1_BODY_3 = "When the line tracker detects a change from a non-reflective to reflective surface, the program jumps to the Line tracker on reflective surface event block and runs the drive block to set the robot to turn right (turning back towards the non-reflective (black) surface).  ";
Blockly.Msg.HELP_TEXT_LINEREFLECTIVE_EVENT_EXAMPLE_1_BODY_4 = "Each time the robot turns either left or right it moves forward following the edge of the line.";

Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_TITLE = "Line tracker on non-reflective surface";
Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_BODY_1 = "The Line tracker on non-reflective surface event block causes the program to jump to this block when the line tracker sensor detects a change from a reflective surface (i.e. white) to a non-reflective surface (i.e. black).   ";
Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_BODY_2 = "The line tracker LED must be turned on for the Line tracker on non-reflective surface event block to work. ";
Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_EXAMPLE_1_TITLE = "Example program: Follow the edge of a line";
Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by turning on the line tracking LED, the program then causes the robot to turn right (looking for the edge of a line). ";
Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_EXAMPLE_1_BODY_2 = "When the line tracker detects a change from a reflective (white) to non-reflective (black) surface, the program jumps to the Line tracker on non-reflective surface block and runs the drive block to set the robot to turn left (turning back towards the reflective (white) surface).  ";
Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_EXAMPLE_1_BODY_3 = "When the line tracker detects a change from a non-reflective to reflective surface, the program jumps to the Line tracker on reflective surface block and runs the drive block to set the robot to turn right (turning back towards the non-reflective (black) surface).  ";
Blockly.Msg.HELP_TEXT_LINENONREFLECTIVE_EVENT_EXAMPLE_1_BODY_4 = "Each time the robot turns either left or right it moves forward following the edge of the line.";

Blockly.Msg.HELP_TEXT_LINECHANGE_EVENT_TITLE = "Line tracker changes surface";
Blockly.Msg.HELP_TEXT_LINECHANGE_EVENT_BODY_1 = "The Line tracker changes surface event block causes the program to jump to this block when the line tracker sensor detects either a change from a non-reflective (i.e. black) surface to reflective (i.e. white) surface or a from a reflective (i.e. white) surface to a non-reflective (i.e. black) surface. ";
Blockly.Msg.HELP_TEXT_LINECHANGE_EVENT_BODY_2 = "The line tracker LED must be turned on for the Line tracker changes surface event block to work.";
Blockly.Msg.HELP_TEXT_LINECHANGE_EVENT_EXAMPLE_1_TITLE = "Example program: Stopping for change";
Blockly.Msg.HELP_TEXT_LINECHANGE_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by turning on the line tracker LED, the robot then drives forward at speed 1 and enters a forever loop. The robot will then continue to drive forwards until the line tracker sensor detects a change in the reflectivity of the surface (white to black or black to white). When this happens, the program jumps to the Line tracker changes surface block. The code below the Line tracker changes surface then runs, stopping both motors, beeping, waiting 1 second, beeping again, then setting both motors to again drive forward. ";

Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_TITLE = "IR message received";
Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_BODY_1 = "The IR message received event block causes the program to jump to this block when an Infrared (IR) message from another Edison robot is received.";
Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_BODY_3 = "The IR message received event block will not work when the IR receiver is being used to detect obstacles.   ";
Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_BODY_4 = "The program will jump to the IR message received event block when any IR message is received from another Edison robot. The IR message received event block does not decode the data in the IR message. Decoding the message requires that the message data be put into a variable and then decoded using an if then block.  ";
Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_EXAMPLE_1_TITLE = "Example program: Receive IR message to beep once or twice";
Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by entering an empty forever loop and nothing happens. When an IR message is received the program jumps to the IR message received event block. The code below the IR message received event block then runs. First the received message data is stored in the variable 'ReceivedMessage'. This is required as each time the data from the received IR message is read it is also cleared. Now that the message data is in a variable the variable is tested if it is equal to 1, if true, then the beep block is played once. Next, the variable is tested if it is equal to 2, if true, then the beep block plays twice. The program now returns to the forever loop.";
Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_EXAMPLE_2_TITLE = "IR message sending program:";
Blockly.Msg.HELP_TEXT_MESSAGE_EVENT_EXAMPLE_2_BODY_1 = "The above program is used in the Edison robot that is sending the IR message. The program first enters an empty forever loop. When the triangle button is pressed, the program jumps to the Triangle button pressed event block and an IR message is sent with the number 1. When the round button is pressed, the program jumps to the Round button pressed event block and an IR message is sent with the number 2.";

Blockly.Msg.HELP_TEXT_DRIVESTRAIN_EVENT_TITLE = "Drive strained";
Blockly.Msg.HELP_TEXT_DRIVESTRAIN_EVENT_BODY_1 = "The Drive strained event block causes the program to jump to this block when one or both motors are being driven, but are unable to rotate (under strain). ";
Blockly.Msg.HELP_TEXT_DRIVESTRAIN_EVENT_EXAMPLE_1_TITLE = "Example program: Alarm when the left wheel cannot rotate";
Blockly.Msg.HELP_TEXT_DRIVESTRAIN_EVENT_EXAMPLE_1_BODY_1 = "In this example, the program begins by setting the left motor to drive forwards, then enters a forever loop. When the wheel cannot rotate due to being under strain, the program jumps to the Drive strained event block and runs the code below. The code below the Drive strained event block is the beep block which plays a beep. The program then returns to the forever loop.  ";

Blockly.Msg.HELP_TEXT_REMOTE_EVENT_TITLE = "Remote code received";
Blockly.Msg.HELP_TEXT_REMOTE_EVENT_BODY_1 = "The Remote code received event block causes the program to jump to this block when a remote-control code is received.";
Blockly.Msg.HELP_TEXT_REMOTE_EVENT_BODY_3 = "Make sure you press the triangle button to start your program. This is easy to forget as the Edison robot will respond as a remote-control robot and not do what you have programmed it to. ";
Blockly.Msg.HELP_TEXT_REMOTE_EVENT_BODY_4 = "To use the remote control blocks the Edison robot must first be taught which buttons of your remote control correspond to which remote code. Learn more about this here: ";
Blockly.Msg.HELP_TEXT_REMOTE_EVENT_BODY_5 = "If the program behaves unexpectantly, you may need to use the clear sensor data block to clear the contents of the remote code received block. See example program 1 below.";
Blockly.Msg.HELP_TEXT_REMOTE_EVENT_BODY_6 = "Receiving infrared remote codes will work with approximately 90% of standard TV remote controls, however each brand uses slightly different data formats. When decoding data, this can cause some unexpected behaviour from one remote control brand to another. Advanced remote-control decoding works best with the EdRemote (available mid 2025).";
Blockly.Msg.HELP_TEXT_REMOTE_EVENT_EXAMPLE_1_TITLE= "Example program: Remote control drive forwards or backwards ";
Blockly.Msg.HELP_TEXT_REMOTE_EVENT_EXAMPLE_1_BODY= "In this example, the program begins by entering an empty forever loop. When a remote-control code is received the program jumps to the Remote code received event block. The code below the Remote code received event block runs, the remote code is tested to see if it is equal to 1, if true, then both motors are set to drive forwards, this continues until the code being received no longer equals 1. Next, the received code is tested to see if it is equal to 2, if true, then both motors are set to drive backwards. This continues until the code being received no longer equals 2. Finally, after the remote codes have been tested and are no longer being received the stop block stops both motors. The program returns to the empty forever loop.";

Blockly.Msg.HELP_TEXT_CONTROL_WAIT_TITLE = "Wait sec";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_BODY_1 = "The wait sec block pauses the program for an amount of time in seconds. The amount of time can be from 0.001 seconds (1 millisecond) to 1,073,741 seconds (12.4 days).";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_BODY_2 = "The wait block has just one parameter:";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_BODY_3 = "Value - Can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_EXAMPLE_1_TITLE = "Example program 1: Blink the left LED ";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the loop the left LED is turned on, then the program pauses and waits for 0.5 seconds, then the left LED is turned off, then the program again pauses and waits for 0.5 seconds and then loops to the start. ";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_EXAMPLE_2_TITLE = "Example program 2: Nighttime robot cricket ";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. Inside the loop there is a wait until block that pauses the progression of the program until the level of light on the left light sensor is less than 100. When this happens, the program progresses to wait for a random number of seconds between 20 and 300. When this wait ends the speaker plays a note. The program then loops back to the beginning of the forever loop. This results in behaviour similar to a cricket at nighttime, so it can't be found.";

Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_TITLE = "Repeat";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_BODY_1 = "The repeat block is a type of loop that only loops a set number of times. All the blocks inside the repeat block run for only this set number of times. ";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_BODY_2 = "The repeat block has just one parameter: ";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_BODY_3 = "Value - Can be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_EXAMPLE_1_TITLE = "Example program 1: Drive in a square";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_EXAMPLE_1_BODY = "In this example, the program begins by entering into a repeat block that is set to repeat four times. Inside the repeat block the robot drives forward 10cm, then spins right 90 degrees. These two blocks inside the repeat block run four times. The result is that the Edison robot drives in the shape of a square.";

Blockly.Msg.HELP_TEXT_CONTROL_FOREVER_TITLE = "Forever";
Blockly.Msg.HELP_TEXT_CONTROL_FOREVER_BODY_1 = "The forever block is a type of loop block that loops unconditionally forever (unless the program is stopped). The blocks placed inside the forever block run and then run again and again and…";
Blockly.Msg.HELP_TEXT_CONTROL_FOREVER_EXAMPLE_1_TITLE = "Example program: Blink a LED";
Blockly.Msg.HELP_TEXT_CONTROL_FOREVER_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop the left LED is turned on, then the wait block pauses the program for 0.25 seconds, then the left LED is turned off, then the wait block pauses the program for 0.25 seconds. The program then loops back to the turn left LED on block and the sequence repeats forever.";

Blockly.Msg.HELP_TEXT_CONTROL_IF_TITLE = "If then";
Blockly.Msg.HELP_TEXT_CONTROL_IF_BODY_1 = "The if then block runs the blocks if the input condition is true. If the condition is not true, then the program continues to the next block in the program.";
Blockly.Msg.HELP_TEXT_CONTROL_IF_BODY_2 = "This block has one input parameter:";
Blockly.Msg.HELP_TEXT_CONTROL_IF_BODY_3 = "Conditional input - The conditional input accepts diamond shaped blocks that can be either an operator block or sensing block.";
Blockly.Msg.HELP_TEXT_CONTROL_IF_BODY_4 = "The if then block is usually used inside a forever loop, so that the if then condition can be tested multiple times. If a program has just an if then block, then the test will be run once and the program will exit. ";
Blockly.Msg.HELP_TEXT_CONTROL_IF_EXAMPLE_1_TITLE = "Example program 1: Blink LED if there is a clap";
Blockly.Msg.HELP_TEXT_CONTROL_IF_EXAMPLE_1_BODY = "n this example, the program begins by entering a forever loop. The first block in the forever loop is the if then block that tests if there has been a clap. If false, then the contents of the if then block is skipped and the program loops back to start of the forever loop. If a clap has been detected (true), then the blocks inside the if then block run. First the left LED is turned on, then the program pauses for one second, then the left LED is turned off. The program now loops back to the start of the forever loop.  The result is that the Edison robot blinks its left LED for one second whenever it detects a clap. ";
Blockly.Msg.HELP_TEXT_CONTROL_IF_EXAMPLE_2_TITLE = "Example program 2: Draw open alarm";
Blockly.Msg.HELP_TEXT_CONTROL_IF_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. The first block in the forever loop is the if then block that tests if the level of light on the left light sensor is greater than 100. If this is true (light level is greater than 100) then the beep block runs and the Edison robot beeps like an alarm. If it is not true (light level is less than 100), then the beep block is skipped and the program loops back to the start of the forever loop.  The result is that the Edison beeps rapidly whenever it detects a light level above 100.";

Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_TITLE = "If then else";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_BODY_1 = "The if then else block runs the first set of blocks if the input condition is true. If the condition is false, then the second set of blocks run.";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_BODY_2 = "This block has one input parameter:";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_BODY_3 = "Conditional input - The conditional input accepts diamond shaped blocks that can be either an operator block or sensing block.";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_BODY_4 = "The if then else block is usually used inside a forever loop, so that the if then else condition can be tested multiple times. If a program has just an if then else block, then the test will be run once and the program will exit.";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_EXAMPLE_1_TITLE = "Example program 1: Bounce in borders";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_EXAMPLE_1_BODY = "In this example, the program begins by turning the line tracker sensor LED on, then enters a forever loop. The first block in the forever loop is the if then else block that tests if the line tracker sensor is on a non-reflective surface (black). If this is true then the first set of blocks run driving the robot backwards and then spinning 90 degrees. The program jumps over the else block and then loops back to once again test if the line tracker sensor is on a non-reflective surface (black), if this is false (on white), then the else block runs, setting both motors to drive forward. This results in the Edison robot 'bouncing' off a black line and turning around. This results in Edison driving away from detected black lines.";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_EXAMPLE_2_TITLE = "Example program 2: Follow the light";
Blockly.Msg.HELP_TEXT_CONTROL_IF_ELSE_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. The first block in the forever loop is the if then else block that tests if the light level on the right sensor is less than the light level on the left sensor. If this is true (light is brighter on the left) then the next block to run is the set both motors to turn robot left (the robot turns left towards the light). Alternatively, if the result is false (light is brighter on the right), then the next block to run are the else blocks. Now the block set both motors to turn robot right run (the robot turns towards the light). The result is that the Edison robot drives towards the brightest light source (try using a flashlight to control where Edison drives).";

Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_TITLE = "Wait until";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_BODY_1 = "The wait until block pauses the program until the input condition is true.";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_BODY_2 = "This block has one input parameter:";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_BODY_3 = "Conditional input - The conditional input accepts diamond shaped blocks that can be either an operator block or sensing block.";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_BODY_4 = "The wait until block is usually used inside a forever loop, so that the wait until condition can be tested multiple times. If a program has just a wait until block, then the test will be run once and the program will exit.";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_EXAMPLE_1_TITLE = "Example program 1: Blink LED if there is a clap";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. The first block in the forever loop is the clear sensor data block that clears any false clap data. Next is the wait until block with a conditional input clap detected block. The program will pause here and wait until a clap is detected. When a clap is detected, the program progresses to turn the left LED on, then wait for one second, then turn the left LED off. The program now loops back to the wait until block. Each time there is a clap the left LED turns on for one second. The result is that the Edison robot blinks its left LED for one second whenever it detects a clap. ";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_EXAMPLE_2_TITLE = "Example program 2: Source of brightest light detector";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_UNTIL_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. The first block in the forever loop is the wait until block with a conditional input using an operator requiring the light level on the right light sensor to equal the light level on the left light sensor. If the condition is not true (the light levels are not equal), then the program pauses here. When the light level on both light sensors is equal, then the program progresses to the beep block. The program now loops back to the wait until block and the program repeats. This results in the Edison robot beeping when it is pointing towards the brightest source of light";

Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_TITLE = "Repeat until";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_BODY_1 = "The repeat until block runs the blocks inside it, until the input condition is true.";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_BODY_2 = "This block has one input parameter:";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_BODY_3 = "Conditional input - The conditional input accepts diamond shaped blocks that can be either an operator block or sensing block.";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_BODY_4 = "The repeat until block is often used inside a forever loop, so that the repeat until condition can be tested multiple times. If a program has just a repeat until block, then the test will be run once and the program will exit. ";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_EXAMPLE_1_TITLE = "Example program 1: Stop the alarm from sounding";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_EXAMPLE_1_BODY = "In this example, the program begins by tuning on the obstacle detector (setting the alarm) and then enters a forever loop. The first block in the forever loop is a wait until block with a conditional input of obstacle detected anywhere (the intruder detector). The program will pause and wait here until an obstacle (intruder) is detected. When an obstacle is detected, the program progresses to the repeat until block, this causes the beep block to be run and repeat over and over (the alarm sound), 'until' the round button is pressed (stopping and resetting the alarm).";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_EXAMPLE_2_TITLE = "Example program 2: Edison shivers cold without warm light";
Blockly.Msg.HELP_TEXT_CONTROL_REPEAT_UNTIL_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. The first block in the forever loop is the repeat until block with a conditional input using an operator requiring the light level of the left light sensor to be greater than 980 (very bright/sunlight). If this is not true, then the blocks below run, quickly spinning the Edison robot left and right (shivering). If the light level of the left light sensor increases above 980 (Edison moves into very bright light), then the condition becomes true and the program pauses (The Edison robot is warm and happy).";

Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_TITLE = "Wait Milliseconds";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_BODY_1 = "The wait milliseconds block pauses the program for an amount of time in milliseconds (ms). A millisecond is one one-thousandths (1/1000) of a second or 0.001 seconds.";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_BODY_2 = "1500 milliseconds = 1.5 seconds";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_BODY_3 = "100 milliseconds = 0.1 seconds";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_BODY_4 = "25 milliseconds = 0.025 seconds";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_BODY_5 = "The wait milliseconds block has just one parameter:";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_BODY_6 = "Value - Can be a variable, a sensing or an operator block";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_EXAMPLE_1_TITLE = "Example program 1: Fast blinking LED";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_EXAMPLE_1_BODY = "In this example, the program begins by setting the variable 'Delay' to 50, then enters a forever loop. Inside the forever loop the left LED is turned on, then the wait milliseconds block pauses for the value in 'Delay' milliseconds, in this case 50 milliseconds. Then the left LED is turned off, then the wait milliseconds block pauses for 50 milliseconds. The program now loops back to the start of the forever loop. ";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_EXAMPLE_2_TITLE = "Example program 2: Crazy lights";
Blockly.Msg.HELP_TEXT_CONTROL_WAIT_MILLISECONDS_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop, the left and right LEDs are turned on and off. The wait times between turning on and off are controlled by the wait milliseconds blocks. The time in milliseconds is set by the random number blocks inside them. These are set to generate random numbers between 30 and 300 milliseconds. The result is a randomised flashing of the Edison robot's LED lights.";

Blockly.Msg.HELP_TEXT_SENSING_TURNLINETRACKINGLED_TITLE = "Turn line tracking LED on/off";
Blockly.Msg.HELP_TEXT_SENSING_TURNLINETRACKINGLED_BODY_1 = "The turn line tracker LED on/off block sets the line tracker LED to either on or off. ";
Blockly.Msg.HELP_TEXT_SENSING_TURNLINETRACKINGLED_BODY_2 = "The line tracker LED must be on for the line tracking sensor to work. ";
Blockly.Msg.HELP_TEXT_SENSING_TURNLINETRACKINGLED_EXAMPLE_1_TITLE = "Example program: Stop on black surface";
Blockly.Msg.HELP_TEXT_SENSING_TURNLINETRACKINGLED_EXAMPLE_1_BODY = "In this example, the program begins by turning the line tracking LED on, then both motors are set to drive forwards. The program then waits until the line tracker sensor detects a non-reflective surface (black), when this happens the program ends and the motors stop. ";

Blockly.Msg.HELP_TEXT_SENSING_TURNOBSTACLEBEAM_TITLE = "Turn obstacle detection beam on/off";
Blockly.Msg.HELP_TEXT_SENSING_TURNOBSTACLEBEAM_BODY_1 = "The turn obstacle detection beam on/off block sets the obstacle detection beam to either on or off.";
Blockly.Msg.HELP_TEXT_SENSING_TURNOBSTACLEBEAM_BODY_2 = "The obstacle detection beam must be on for obstacle detection to work.";
Blockly.Msg.HELP_TEXT_SENSING_TURNOBSTACLEBEAM_EXAMPLE_1_TITLE = "Example program: Stop for an obstacle";
Blockly.Msg.HELP_TEXT_SENSING_TURNOBSTACLEBEAM_EXAMPLE_1_BODY = "In this example, the program begins by turning the obstacle detection beam on, then both motors are set to drive forwards. The program then waits until an obstacle is detected anywhere, when this happens the program ends and the motors stop. ";

Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_TITLE = "Clear sensor data";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_BODY_1 = "The clear sensor data block clears any sensor data (detections) from the selected sensor. This block is used when there might be false or unwanted detections that stop the program from working in the way that you want. An example is when a program drives the Edison robot as a result of detecting a clap. Generally, driving is quite noisy and can re-trigger an additional detection of a clap. This causes the program to detect a second clap that didn't happen. The clear sensor data block is used to clear the sensor data of any unwanted detections like this. ";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_BODY_2 = "The clear sensor data block has five input options:";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_BODY_3 = "clap detector";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_BODY_4 = "keypad";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_BODY_5 = "obstacle detector";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_BODY_6 = "remote code";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_BODY_7 = "IR message";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_EXAMPLE_1_TITLE = "Example program 1: Clap and spin";
Blockly.Msg.HELP_TEXT_SENSING_CLEARSENSOR_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop, the clear sensor data block is set to clear the clap detector, next the program waits until a clap is detected, when this happens the program progresses and the robot spins left for two seconds. During the spinning the motors, wheels and skid make noise, this noise re-triggers the clap detector, so now the clap detector thinks that there was a second clap. The program loops back to the start of the forever loop (still holding onto the clap detection), but then the clear sensor data block clears the detection and the wait until block will not be triggered until there actually is a clap. ";

Blockly.Msg.HELP_TEXT_SENSING_CLAPDETECTED_TITLE = "Clap detected";
Blockly.Msg.HELP_TEXT_SENSING_CLAPDETECTED_BODY_1 = "The clap detected block is a sensor input block that indicates whether or not a clap has been detected. It is a diamond shaped block so the data in the block can only be either true (clap has been detected) or false (clap has not been detected).";
Blockly.Msg.HELP_TEXT_SENSING_CLAPDETECTED_BODY_2 = "Other noises such as the motors driving can cause the clap detected block to false trigger. Use the clear sensor data block to clear false or unwanted clap detections.";
Blockly.Msg.HELP_TEXT_SENSING_CLAPDETECTED_EXAMPLE_1_TITLE = "Example program 1: Blink LED if there is a clap";
Blockly.Msg.HELP_TEXT_SENSING_CLAPDETECTED_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop there is an if then block that tests if a clap has been detected. When a clap is detected, the left LED turns on, then the program waits for one second, then the left LED turns off. The program then loops back to the start of the forever loop.  The result is that the Edison robot blinks its left LED for one second whenever it detects a clap. ";

Blockly.Msg.HELP_TEXT_SENSING_BUTTONPRESSED_TITLE = "Button Pressed";
Blockly.Msg.HELP_TEXT_SENSING_BUTTONPRESSED_BODY_1 = "The button pressed block is a sensor input that indicates whether or not a button has been pressed. There are two button options:";
Blockly.Msg.HELP_TEXT_SENSING_BUTTONPRESSED_BODY_2 = "round";
Blockly.Msg.HELP_TEXT_SENSING_BUTTONPRESSED_BODY_3 = "triangle";
Blockly.Msg.HELP_TEXT_SENSING_BUTTONPRESSED_BODY_4 = "The button pressed block is a diamond shaped block so the data in the block can only be either true (button has been pressed) or false (button has not been pressed).";
Blockly.Msg.HELP_TEXT_SENSING_BUTTONPRESSED_EXAMPLE_1_TITLE = "Example program: Beep on button press";
Blockly.Msg.HELP_TEXT_SENSING_BUTTONPRESSED_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop there is an if then block that tests if the round button has been pressed. When the round button is pressed, the program runs the beep block and then loops back to the start of the forever loop.";

Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_TITLE = "Obstacle Detected";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_BODY_1 = "The obstacle detected block is a sensor input block that indicates whether or not an obstacle has been detected. There are four detection options:";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_BODY_2 = "anywhere";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_BODY_3 = "ahead";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_BODY_4 = "left";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_BODY_5 = "right";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_BODY_6 = "The obstacle detected block is a diamond shaped block so the data in the block can only be either true (obstacle has been detected) or false (obstacle has not been detected).";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_BODY_7 = "To use the obstacle detected block the turn obstacle detection beam on/off block must be used to turn the obstacle detection beam on. ";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_EXAMPLE_1_TITLE = "Example program: Avoid obstacles";
Blockly.Msg.HELP_TEXT_SENSING_OBSTACLE_EXAMPLE_1_BODY = "In this example, the program begins by setting the obstacle detection beam to on, then enters a forever loop. Inside the forever loop the motors are set to both drive forwards, then there is an if then block that tests if an obstacle has been detected anywhere. When this happens, the robot spins 180 degrees and loops back to the start of the forever loop. At the beginning of the forever loop both motors are again set to drive forwards.  This results in Edison driving away from obstacles in its path.";

Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_TITLE = "Line tracker on surface";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_BODY_1 = "The line tracker on surface block is a sensor input block that indicates whether or not the surface is reflective. A reflective surface is a surface that reflects the line tracker LED's light back to the light sensor. This is usually a white surface, but a red surface will also reflect the red light from the line tracker's red LED. A non-reflective surface is a surface that does not reflect the line tracker LED's light back to the light sensor. This is usually black, but a blue or green surface will also not reflect the red light from the line tracker's red LED.";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_BODY_2 = "There are two detection options:";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_BODY_3 = "reflective (white)";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_BODY_4 = "non-reflective (black)";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_BODY_5 = "The line tracker on surface block is a diamond shaped block so the data in the block can only be either true (surface type has been detected) or false (surface type has not been detected).";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_BODY_6 = "To use the line tracker on surface block the turn line tracking LED on/off block must be used to turn the line tracking LED on.";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_EXAMPLE_1_TITLE = "Example program: Bounce in borders";
Blockly.Msg.HELP_TEXT_SENSING_LINETRACKER_EXAMPLE_1_BODY = "In this example, the program begins by turning the line tracking LED on, then enters a forever loop. Inside the forever loop the motors are set to both drive forwards, then there is an if then block that tests if the surface is non-reflective. When this is true, the robot spins 180 degrees and loops back to the start of the forever loop. At the beginning of the forever loop both motors are again set to drive forwards. This results in Edison driving away from detected black lines.";

Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_TITLE = "Remote code received";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_BODY_1 = "The remote code received block is a sensor input block that indicates whether or not a particular remote-control code has been received.";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_BODY_2 = "There are eight remote code options from 0 to 7.";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_BODY_3 = "The remote code received block is a diamond shaped block so the data in the block can only be either true (code has been received) or false (code has not been received).";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_BODY_4 = "Make sure you press the triangle button to start your program. This is easy to forget as the Edison robot will respond as a remote-control robot and not do what you have programmed it to.";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_BODY_5 = "To use the remote code received block the Edison robot must first be taught which buttons of your remote control correspond to which remote code. Learn more about this here: ";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_BODY_6 = "If the program behaves unexpectedly, you may need to use the clear sensor data block to clear the contents of the remote code received block. See example program 1 below.";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_BODY_7 = "The remote code received block will work with approximately 90% of standard TV infrared (IR) remote controls, however each TV brand uses slightly different IR data formats. When Edison is decoding IR data, these differences can cause some unexpected behaviour from one remote control brand to another. Advanced remote-control decoding works best with the EdRemote (available mid 2025).";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_EXAMPLE_1_TITLE = "Example program 1: One beep or two?";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop there are two if then blocks that test the received remote code. The first if then tests if the received remote code is remote code 1. If this is true then the beep block plays once and the sensor data is then cleared. If it is false, the program progresses to the next if then block and tests if the received remote code is remote code 2. If this is true then the beep block plays twice and the sensor data is then cleared. The program then loops back to the beginning of the forever loop. ";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_EXAMPLE_2_TITLE = "Example program 2: Spin on remote control command (works best with the EdRemote)";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_BOOL_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop the if then block tests if remote code 0 has been received. If this is true, then both motors are set to spin the robot right. This continues until the wait until block condition passes. To pass the received remote code must not be remote code 0 (the remote-control button is no longer being pressed). When this happens, the program progresses to stop both motors and then loop to the start of the forever loop. This results in Edison spinning while the remote button is held down.";

Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_TITLE = "IR message detected";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_BODY_1 = "The IR message detected block is a sensor input that indicates whether or not an IR message has been detected (received) from another Edison robot. The term 'IR' is short for 'infrared'. Infrared refers to a band of light that is not visible to humans. This makes is useful as a means to communicate data short distances.";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_BODY_2 = "The IR message detected block is a diamond shaped block so the data in the block can only be either true (IR message has been received) or false (IR message has not been received).";

Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_BODY_4 = "The IR message detected block does not know the contents of the IR message that was received. It only tells the program if an IR message has been received. To read the data in the IR message use the received IR message block. See the example program. ";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_BODY_5 = "Infrared messaging between Edison robots works best indoors away from direct sunlight. The typical range can be up to 10 meters (30 feet).";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_EXAMPLE_1_TITLE = "Example program: Edison remote light on and off";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop the first if then block tests if an IR message has been received, if this is true then the variable 'IRMessage' is set to the value from the received IR message block. Doing this allows the received message to be read/tested multiple times without being cleared or lost. The next if then statement tests if the data in 'IRMessage' is equal to 1, if this is true, then the left LED is turned on. If this is not true, then the program moves on to the next if then block. This if then block tests if the data in 'IR Message' is equal to 2, if this is true, then the left LED is turned off. The program then loops back to the start of the forever loop. ";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_EXAMPLE_2_TITLE = "The IR message sending Edison robot runs this program.";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_DETECTED_EXAMPLE_2_BODY = "Pressing the triangle button sends an IR message with the number 1 (turn the LED on) and pressing the round button sends an IR message with the number 2 (turn the LED off)";

Blockly.Msg.HELP_TEXT_SENSING_DRIVESTRAINED_TITLE = "Drive strain detected";
Blockly.Msg.HELP_TEXT_SENSING_DRIVESTRAINED_BODY_1 = "The drive strain detected block is a sensor input block that indicates whether or not one or both of the wheels have stopped rotating due to being under strain (physically prevented from rotating when trying to drive).";
Blockly.Msg.HELP_TEXT_SENSING_DRIVESTRAINED_BODY_2 = "The drive strain detected block is a diamond shaped block so the data in the block can only be either true (wheel is under strain) or false (wheel is not under strain).";
Blockly.Msg.HELP_TEXT_SENSING_DRIVESTRAINED_EXAMPLE_1_TITLE = "Example program: Wheel strained alarm";
Blockly.Msg.HELP_TEXT_SENSING_DRIVESTRAINED_EXAMPLE_1_BODY = "In this example, the program begins by setting the left wheel to drive forwards, next the program enters a forever loop. Inside the loop there is an if then block that tests if drive strain is detected. When this is true the beep block is run. The beep block will continue to run until the strain is removed and the wheel can rotate.";

Blockly.Msg.HELP_TEXT_SENSING_REMOTE_NUM_TITLE = "Received remote code";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_NUM_BODY_1 = "The received remote code block is a sensor input block that contains data received from a remote control. The data is a number from 0 to 7.";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_NUM_BODY_2 = "When a program runs this block, its contents are cleared. It is always best to put the data from the received remote code block into a variable before testing it with a conditional (if then) block.  See example program.";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_NUM_EXAMPLE_1_TITLE = "Example program: Remote control light on and off";
Blockly.Msg.HELP_TEXT_SENSING_REMOTE_NUM_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. The first block inside the forever loop puts the data from the received remote code block into the variable 'RemoteCode'. The variable 'RemoteCode' can now be tested. The first if then block tests if contents of 'RemoteCode' is equal to 1. If this is true then the left LED is turned on. If this is false, then the next if then block tests if contents of 'RemoteCode' is equal to 2. If this is true, then the left LED is turned off. The program then loops back to the start of the forever loop.";

Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_TITLE = "Received IR message";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_BODY_1 = "The received IR message block is a sensor input block that contains data received from another Edison robot. The term 'IR' is short for 'infrared'. Infrared refers to a band of light that is not visible to humans. This makes it useful as a means to communicate data short distances. The data is based on an 8-bit binary number and has a range of 0 to 255.";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_BODY_2 = "When a program runs this block its contents is cleared. It is always best to put the data from the received remote code into a variable before testing it with a conditional (if then block) block.";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_BODY_3 = "Infrared messaging between Edison robots works best indoors away from direct sunlight. The typical range can be up to 10 meters (30 feet).";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_EXAMPLE_1_TITLE = "Example program: Start a dance revolution";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. The first block inside the forever loop clears the IR message sensor data, the program then waits until an IR message is received that is equal to 3. When this happens, the program enters a repeat loop for four times. Inside the repeat loop are the Edison robot's dance manoeuvres. Each of these moves is based on time not distance. This is really important if there is a whole class of Edison robots dancing in sync to music. The dance manoeuvres repeat four times, the program then loops back to the start of the forever loop.";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_EXAMPLE_2_TITLE = "Example program: Send IR message 3";
Blockly.Msg.HELP_TEXT_SENSING_IRMESSAGE_EXAMPLE_2_BODY = "In this example, the program begins by entering a forever loop. The first block inside the forever loop waits until the round button is pressed, when this happens the message number 3 is transmitted via infrared light. The program then loops back to the start of the forever loop.";

Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_TITLE = "Light level of sensor";
Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_BODY_1 = "The light level of sensor block is a sensor input block that contains data from the light sensors. The light level is a number between 1 and 1000. The light level of sensor block data is constantly updated.";
Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_BODY_2 = "There are three light sensor inputs to select from:";
Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_BODY_3 = "- left light (sensor at the front left side)";
Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_BODY_4 = "- right light (sensor at the front right side)";
Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_BODY_5 = "- line tracking (sensor used to detect lines under the robot)";
Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_EXAMPLE_1_TITLE = "Example program: Night light";
Blockly.Msg.HELP_TEXT_SENSING_LIGHTLEVEL_EXAMPLE_1_BODY = "In this example, the program begins by entering a forever loop. The first block inside the forever loop tests if the light level reading on the left light sensor is less than 50. If this is true, then the left and right LEDs turn on. If this is false, then the program jumps to else and the left and right LEDs turn off. The program then loops to the start of the forever loop and repeats. This results in Edison's LEDs being on while it's in a dim light.";


Blockly.Msg.HELP_TEXT_ADDITION_TITLE = "Addition";
Blockly.Msg.HELP_TEXT_ADDITION_BODY = "The addition operator block adds two values together. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block. ";
Blockly.Msg.HELP_TEXT_ADDITION_EXAMPLE_1_TITLE = "The constant value 2 is added to the constant value 2.";
Blockly.Msg.HELP_TEXT_ADDITION_EXAMPLE_2_TITLE = "The variable 'Counter' is added to the constant value 2. ";
Blockly.Msg.HELP_TEXT_ADDITION_EXAMPLE_3_TITLE = "The sensor input light level of sensor is added to the constant value 10.";

Blockly.Msg.HELP_TEXT_SUBTRACTION_TITLE = "Subtraction";
Blockly.Msg.HELP_TEXT_SUBTRACTION_BODY = "The subtraction operator block subtracts one value from another. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_SUBTRACTION_EXAMPLE_1_TITLE = "The constant value 10 is subtracted from the constant value 200.";
Blockly.Msg.HELP_TEXT_SUBTRACTION_EXAMPLE_2_TITLE = "The constant value 100 is subtracted from the variable 'Counter'.";
Blockly.Msg.HELP_TEXT_SUBTRACTION_EXAMPLE_3_TITLE = "The constant value 10 is subtracted from the sensor input light level of sensor.";
Blockly.Msg.HELP_TEXT_SUBTRACTION_EXAMPLE_4_TITLE = "Example program: Light radiation counter";
Blockly.Msg.HELP_TEXT_SUBTRACTION_EXAMPLE_4_BODY = "In this example program, the music tempo is first set to very fast. The program then enters a forever loop. Inside the loop the program sets the variable (Delay) to 1000 minus the left light level (inverting the light level reading). The next block waits for the value in the (Delay) variable. The program then plays the note C and loops back to the start of the forever loop and repeats. This results in the Edison beeping slow when in darkness and faster when the light level is brighter. ";

Blockly.Msg.HELP_TEXT_MULTIPLICATION_TITLE = "Multiplication";
Blockly.Msg.HELP_TEXT_MULTIPLICATION_BODY = "The multiplication operator block multiplies two values. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_MULTIPLICATION_EXAMPLE_1_TITLE = "The constant value 2 is multiplied by the constant value 4.";
Blockly.Msg.HELP_TEXT_MULTIPLICATION_EXAMPLE_2_TITLE = "The variable 'Counter' is multiplied by the constant value 2.";
Blockly.Msg.HELP_TEXT_MULTIPLICATION_EXAMPLE_3_TITLE = "The sensor input light level of sensor is multiplied by the constant value 4.";

Blockly.Msg.HELP_TEXT_DIVISION_TITLE = "Division";
Blockly.Msg.HELP_TEXT_DIVISION_BODY_1 = "The division operator block divides one value by another value. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_DIVISION_BODY_2 = "it is not possible to divide by zero, Edison will experience an error if the right most input is zero.";
Blockly.Msg.HELP_TEXT_DIVISION_EXAMPLE_1_TITLE = "The constant value 10 is divided by the constant value 2.";
Blockly.Msg.HELP_TEXT_DIVISION_EXAMPLE_2_TITLE = "The variable 'Counter' is divided by the constant value 2. ";
Blockly.Msg.HELP_TEXT_DIVISION_EXAMPLE_3_TITLE = "The sensor input light level of sensor is divided by 10.";
Blockly.Msg.HELP_TEXT_DIVISION_EXAMPLE_4_TITLE = "Example program: Setting the drive distance using a variable and data from a sensor";
Blockly.Msg.HELP_TEXT_DIVISION_EXAMPLE_4_BODY = "In this example program, Edison sets the (Distance) variable to the light level from the left light sensor (a value from 1 to 1,000) divided by 50. The Edison then drives forward for the value in the (Distance) variable at speed 5.  This results in Edison driving further in bright light, to a maximum distance of 20cm.";

Blockly.Msg.HELP_TEXT_RANDOM_NUMBER_TITLE = "random number";
Blockly.Msg.HELP_TEXT_RANDOM_NUMBER_BODY = "The random number between block generates a random number between two values. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_RANDOM_NUMBER_EXAMPLE_1_TITLE = "Generate a random number between the constant value 10 and the constant value 100.";
Blockly.Msg.HELP_TEXT_RANDOM_NUMBER_EXAMPLE_2_TITLE = "Generate a random number between the variable 'Counter' and the constant value 5000.";
Blockly.Msg.HELP_TEXT_RANDOM_NUMBER_EXAMPLE_3_TITLE = "Generate a random number between the constant value 10 and the sensor input light level of sensor.";
Blockly.Msg.HELP_TEXT_RANDOM_NUMBER_EXAMPLE_4_TITLE = "Example program: Crazy lights";
Blockly.Msg.HELP_TEXT_RANDOM_NUMBER_EXAMPLE_4_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop, the left and right LEDs are turned on and off. The wait times between turning on and off are controlled by the wait milliseconds blocks. The time in milliseconds is set by the random number blocks inside them. These are set to generate random numbers between 30 and 300 milliseconds. The result is a crazy and inconsistent flashing of the Edison robot's LED lights.";

Blockly.Msg.HELP_TEXT_ABS_VAL_TITLE = "abs";
Blockly.Msg.HELP_TEXT_ABS_VAL_BODY = "The abs (absolute value) block converts a value to an absolute value. An absolute value is a value that is always positive. The value can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_ABS_VAL_EXAMPLE_1_BODY = "Has a result of the value 3.";
Blockly.Msg.HELP_TEXT_ABS_VAL_EXAMPLE_2_BODY = "Has a result of the value 3.";
Blockly.Msg.HELP_TEXT_ABS_VAL_EXAMPLE_3_TITLE = "Example program: report the difference between light levels";
Blockly.Msg.HELP_TEXT_ABS_VAL_EXAMPLE_3_BODY = "In this example, the program begins by entering a forever loop. The first block in the forever loop sets the variable 'Difference' to the absolute value of the light level from the right light sensor minus the light level from the left light sensor. The abs block ensures that the result is always positive (no negative numbers). The program then waits for one second and then sends the value in the variable 'Difference' via USB. This value is always a positive (absolute) value.";

Blockly.Msg.HELP_TEXT_LESS_THAN_TITLE = "Less than";
Blockly.Msg.HELP_TEXT_LESS_THAN_BODY_1 = "The less than block compares two input values to determine if the first value is less than the second value and returns a result that is either true or false. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_LESS_THAN_BODY_2 = "The less than block is a diamond shaped block so the result of the block can only be either true or false. ";
Blockly.Msg.HELP_TEXT_LESS_THAN_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_LESS_THAN_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_LESS_THAN_EXAMPLE_3_TITLE = "Is the variable 'Counter' less than the constant value 120.";
Blockly.Msg.HELP_TEXT_LESS_THAN_EXAMPLE_4_TITLE = "Is the light level from the left sensor less than the constant value 500.";


Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_TITLE = "Less than or equal to";
Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_BODY_1 = "The less than or equal to block compares two input values to determine if the first value is less than or equal to the second value and returns a result that is either true or false. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_BODY_2 = "The less than or equal to block is a diamond shaped block so the result of the block can only be either true or false.";
Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_EXAMPLE_3_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_EXAMPLE_4_TITLE = "Is the variable 'Counter' less than or equal to the constant value 120.";
Blockly.Msg.HELP_TEXT_LESS_THAN_EQUAL_EXAMPLE_5_TITLE = "Is the light level from the left sensor less than or equal to the constant value 500.";

Blockly.Msg.HELP_TEXT_EQUAL_TITLE = "Equal to";
Blockly.Msg.HELP_TEXT_EQUAL_BODY_1 = "The equal to block compares two input values to determine if the first value is equal to the second value and returns a result that is either true or false. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_EQUAL_BODY_2 = "The equal to block is a diamond shaped block so the result of the block can only be either true or false. ";
Blockly.Msg.HELP_TEXT_EQUAL_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_EQUAL_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_EQUAL_EXAMPLE_3_TITLE = "Is the variable 'Counter' equal to the constant value 60.";
Blockly.Msg.HELP_TEXT_EQUAL_EXAMPLE_4_TITLE = "Is the received remote code equal to the constant value 3.";


Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_TITLE = "Greater than or equal to";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_BODY_1 = "The greater than or equal to block compares two input values to determine if the first value is greater than or equal to the second value and returns a result that is either true or false. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_BODY_2 = "The greater than or equal to block is a diamond shaped block so the result of the block can only be either true or false. ";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_EXAMPLE_3_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_EXAMPLE_4_TITLE = "Is the variable 'Counter' greater than or equal to the constant value 120.";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EQUAL_EXAMPLE_5_TITLE = "Is the light level from the left sensor greater than or equal to the constant value 500.";

Blockly.Msg.HELP_TEXT_GREATER_THAN_TITLE = "Greater than";
Blockly.Msg.HELP_TEXT_GREATER_THAN_BODY_1 = "The greater than block compares two input values to determine if the first value is greater than the second value and returns a result that is either true or false. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_GREATER_THAN_BODY_2 = "The greater than block is a diamond shaped block so the result of the block can only be either true or false";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EXAMPLE_3_TITLE = "Is the variable 'Counter' greater than the constant value 120.";
Blockly.Msg.HELP_TEXT_GREATER_THAN_EXAMPLE_4_TITLE = "Is the light level from the left sensor greater than the constant value 500.";

Blockly.Msg.HELP_TEXT_NOT_EQUAL_TITLE = "Not equal to";
Blockly.Msg.HELP_TEXT_NOT_EQUAL_BODY_1 = "The not equal to block compares two input values to determine if the first value is not equal to the second value and returns a result that is either true or false. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_NOT_EQUAL_BODY_2 = "The not equal to block is a diamond shaped block so the result of the block can only be either true or false. ";
Blockly.Msg.HELP_TEXT_NOT_EQUAL_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_NOT_EQUAL_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_NOT_EQUAL_EXAMPLE_3_TITLE = "Is the variable 'Counter' not equal to the constant value 120.";
Blockly.Msg.HELP_TEXT_NOT_EQUAL_EXAMPLE_4_TITLE = "Is the received remote code not equal to the constant value 3.";

Blockly.Msg.HELP_TEXT_IS_BETWEEN_TITLE = "Is between ";
Blockly.Msg.HELP_TEXT_IS_BETWEEN_BODY_1 = "The is between block determines if a value is within a range of two other values. The values can be a constant (typed into the input and does not vary), a variable, sensing or an operator block.";
Blockly.Msg.HELP_TEXT_IS_BETWEEN_BODY_2 = "The is between block is a diamond shaped block so the result of the block can only be either true or false.";
Blockly.Msg.HELP_TEXT_IS_BETWEEN_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_IS_BETWEEN_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_IS_BETWEENL_EXAMPLE_3_TITLE = "Is the variable 'Counter' between the constant value 60 and the constant value 120.";
Blockly.Msg.HELP_TEXT_IS_BETWEEN_EXAMPLE_4_TITLE = "Is the sensor light level of left light sensor between the constant value 250 and the constant value 750.";

Blockly.Msg.HELP_TEXT_AND_TITLE = "And";
Blockly.Msg.HELP_TEXT_AND_BODY_1 = "The and block determines if two inputs are both true. If both inputs are true, then the result will also be true. If one or both inputs are false, then the result is false.  The inputs accept diamond shaped blocks that can be either an operator block or sensing block.";
Blockly.Msg.HELP_TEXT_AND_BODY_2 = "The and block is a diamond shaped block so the result of the block can only be either true or false.";
Blockly.Msg.HELP_TEXT_AND_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_AND_EXAMPLE_2_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_AND_EXAMPLE_3_TITLE = "Is both the line tracker on reflective surface “and” drive strain detected. ";
Blockly.Msg.HELP_TEXT_AND_EXAMPLE_4_TITLE = "Is the variable 'Counter' greater than 50 “and” received remote code is equal to the constant value 3.";

Blockly.Msg.HELP_TEXT_OR_TITLE = "Or";
Blockly.Msg.HELP_TEXT_OR_BODY_1 = "The or block determines if the first input “or” the second input are true. If one or both inputs are true, then the result will be true. If both inputs are false, then the result will be false. The inputs accept diamond shaped blocks that can be either an operator block or sensing block.";
Blockly.Msg.HELP_TEXT_OR_BODY_2 = "The or block is a diamond shaped block so the result of the block can only be either true or false.";
Blockly.Msg.HELP_TEXT_OR_EXAMPLE_1_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_OR_EXAMPLE_2_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_OR_EXAMPLE_3_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_OR_EXAMPLE_4_TITLE = "Is either the line tracker on reflective surface “or” drive strain detected. ";
Blockly.Msg.HELP_TEXT_OR_EXAMPLE_5_TITLE = "Is either the variable 'Counter' less than the constant value 50 “or” received remote code is equal to the constant value 3.";

Blockly.Msg.HELP_TEXT_NOT_TITLE = "Not";
Blockly.Msg.HELP_TEXT_NOT_BODY_1 = "The not block determines if the input is “not” true. If the input is false, then the output will be true. If the input is true, then then the output will be false.  The input accepts diamond shaped blocks that can be either an operator block or sensing block.";
Blockly.Msg.HELP_TEXT_NOT_BODY_2 = "The not block is a diamond shaped block so the result of the block can only be either true or false.";
Blockly.Msg.HELP_TEXT_NOT_EXAMPLE_1_BODY = "Result: false";
Blockly.Msg.HELP_TEXT_NOT_EXAMPLE_2_BODY = "Result: true";
Blockly.Msg.HELP_TEXT_NOT_EXAMPLE_3_TITLE = "Is remote code 0 not received.";
Blockly.Msg.HELP_TEXT_NOT_EXAMPLE_4_TITLE = "Example program: Spin on remote control command (works best with the EdRemote)";
Blockly.Msg.HELP_TEXT_NOT_EXAMPLE_4_BODY = "In this example, the program begins by entering a forever loop. Inside the forever loop the if then block tests if remote code 0 has been received. If this is true, then both motors are set to spin the robot right. This continues until the wait until block condition passes. To pass, the received remote code must not be remote code 0 (the remote-control button is no longer being pressed). When this happens, the program progresses to stop both motors and then loop to the start of the forever loop. This results in Edison spinning while the remote button is held down.";

Blockly.Msg.HELP_TEXT_COMMENT_TITLE = "comment";
Blockly.Msg.HELP_TEXT_COMMENT_BODY_1 = "The comment block is used to add notes to a program. The notes describe in plain language how the program is intended to work. Making comments in a program helps when someone else needs to edit your program or you need to edit your program a long time after you wrote it.";
Blockly.Msg.HELP_TEXT_COMMENT_BODY_2 = "Comments are not programmed into Edison so do not change the behaviour of your program.";
Blockly.Msg.HELP_TEXT_COMMENT_EXAMPLE_1_TITLE = "Example program: Comments explain how the program works in plain language ";

Blockly.Msg.HELP_TEXT_SEND_USB_TITLE = "send via USB";
Blockly.Msg.HELP_TEXT_SEND_USB_BODY_1 = "The send via USB block transmits a value to a computer via the USB connection. The value can either be a constant (typed into the input and does not vary), a variable, a sensing or an operator block.";
Blockly.Msg.HELP_TEXT_SEND_USB_BODY_2 = "To see the number on the computer, click the USB button in EdScratch and a pop-up window will appear. Click Run USB to connect to the Edison V3 robot. The data received from the Edison V3 will appear in the Data from USB window. ";
Blockly.Msg.HELP_TEXT_SEND_USB_BODY_3 = "The send to USB block can also be used to help debug a program.";
Blockly.Msg.HELP_TEXT_SEND_USB_BODY_4 = "The Edison V3 wheels will not drive while connected to USB. This is due to international safety standards that do not allow products intended for children to be able to drive a motor while connected to a USB port. ";
Blockly.Msg.HELP_TEXT_SEND_USB_EXAMPLE_1_TITLE = "Example program: Measure light level";
Blockly.Msg.HELP_TEXT_SEND_USB_EXAMPLE_1_BODY = "In this example, the program starts by entering a forever loop. The first block inside the loop sends the light level of the left light sensor via USB. The program then waits one second and repeats.";

Blockly.Msg.HELP_TEXT_SAVE_USB_TITLE = "wait for USB data and save to";
Blockly.Msg.HELP_TEXT_SAVE_USB_BODY_1 = "The wait for USB data and save to block pauses the program until data is received via USB and then places the data into a variable. ";
Blockly.Msg.HELP_TEXT_SAVE_USB_BODY_2 = "The Edison V3 wheels will not drive while connected to USB. This is due to international safety standards that do not allow products intended for children to be able to drive a motor while connected to a USB port. ";
Blockly.Msg.HELP_TEXT_SAVE_USB_EXAMPLE_1_TITLE = "Example program: Number of beeps from USB";
Blockly.Msg.HELP_TEXT_SAVE_USB_EXAMPLE_1_BODY_1 = "In this example, the program starts by entering a forever loop. The first block inside the loop waits until data is received from USB. When data is received, the data is saved to the variable 'Count'. The program then progresses to the repeat block which repeats for the value of the 'Count' variable. Inside the repeat block the beep block and wait sec blocks run. This results in Edison beeping the number of times sent via USB.";
Blockly.Msg.HELP_TEXT_SAVE_USB_EXAMPLE_1_BODY_2 = "To test this program, click the USB button in the EdScratch app and a pop-up window will appear. Click Run USB to connect to the Edison V3 robot. To send data to the Edison V3, type a number into the Data to USB box and click the Send to USB button.  ";

Blockly.Msg.HELP_TEXT_FUNCTION_START_TITLE = "Function start";
Blockly.Msg.HELP_TEXT_FUNCTION_START_BODY_1 = "The function start block is where your function begins. Connect blocks to the function start block to create a custom function.";
Blockly.Msg.HELP_TEXT_FUNCTION_START_BODY_2 = "Function blocks help to simplify a program as the code can be grouped making it easier to read. Functions also help to reduce the size of a program as the repetitive parts of a program only need to be written once.  ";
Blockly.Msg.HELP_TEXT_FUNCTION_START_BODY_3 = "Function call blocks cannot be placed under function start blocks.";
Blockly.Msg.HELP_TEXT_FUNCTION_START_EXAMPLE_1_TITLE= "Example program 1: Drive in the shape of a square";
Blockly.Msg.HELP_TEXT_FUNCTION_START_EXAMPLE_1_BODY= "In this example, the program starts by entering a repeat for four times loop. Inside the repeat block is a function call named 'DriveAndTurn'. When the program gets to this block it jumps to the corresponding function start block. Under this block the robot is instructed to drive forwards 10cm, then spin right 90 degrees. This function is called four times inside the repeat loop. This results in Edison driving in a square.  ";
Blockly.Msg.HELP_TEXT_FUNCTION_START_EXAMPLE_2_TITLE= "Example program 2: Avoid lines and obstacles ";
Blockly.Msg.HELP_TEXT_FUNCTION_START_EXAMPLE_2_BODY= "In this example, the program starts by turning on the obstacle detector and line tracker LED and then enters a forever loop. Inside the forever loop both motors are set to drive forward. Next, the if then block tests for any obstacle detected, if true, then the function call block 'TurnAround' causes the program to jump to the function start block 'TurnAround'. The program then stops the motors, turns on the LED light, beeps, drives backwards, spins 175 degrees and turns the LEDs off and exits back to the main program where it left off. The next if then block tests if the surface is non-reflective (black), if true, then the function call block 'TurnAround' causes the program to jump to the function start block 'TurnAround'. The program then stops the motors, turns on the LED light, beeps, drives backwards, spins 175 degrees and turns the LEDs off and exits back to the main program where it left off. This results in Edison driving away from lines and objects it detects.";

Blockly.Msg.HELP_TEXT_FUNCTION_CALL_TITLE = "Function call";
Blockly.Msg.HELP_TEXT_FUNCTION_CALL_BODY_1 = "The function call block tells the program to jump to the function start block. ";
