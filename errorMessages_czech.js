/**
 * @license
 * Visual Blocks Editor
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

'use strict';

//goog.provide('Blockly.Blocks.operators');

goog.require('Blockly.Blocks');

Blockly.redErrorMessages = {
	"ObsSetting": 		"Bloky zjišťování překážek nefungují, dokud není zapnutý paprsek pro zjišťování překážek pomocí bloku 'paprsek pro zjišťování překážek' z kategorie 'Vnímání'.",
	"ObsSettingEvent":	"Události zjišťování překážek nefungují, dokud není v hlavním programu zapnutý paprsek pro zjišťování překážek pomocí bloku 'paprsek pro zjišťování překážek' z kategorie 'Vnímání'.",
	"LineSetting": 		"Bloky sledování čáry nefungují, dokud není zapnutý senzor sledování čáry pomocí bloku 'senzor sledování čáry' z katogorie 'Vnímání'.",
	"LineSettingEvent": "Události sledování čáry nefungují, dokud není  v hlavním programu zapnutý senzor sledování čáry pomocí bloku 'senzor sledování čáry' z katogorie 'Vnímání'.",
	"DriveClap": 		"Edison nemůže detekovat tlesknutí během jízdy, protože motory jsou příliš hlučné.",
	"EmptyInForwards": 	"Bloky 'jeď vpřed dokud nenastane' vyžadují podmínku.",
	"EmptyInBackwards": "Bloky 'jeď vzad dokud nenastane' vyžadují podmínku.",
	"EmptyInLeft": 		"Bloky 'doleva dokud nenastane' vyžadují podmínku.",
	"EmptyInRight": 	"Bloky 'doprava dokud nenastane' vyžadují podmínku.",
	"EmptyInSetVar": 	"Bloky 'nastav proměnnou' vyžadují proměnnou.",
	"EmptyInIncVar": 	"Bloky 'zvyš proměnnou o 1' vyžadují proměnnou.",
	"EmptyInDecVar": 	"Bloky 'sniž proměnnou o 1' vyžadují proměnnou.",
	"EmptyInIf": 		"Bloky 'když' vyžadují podmínku.",
	"EmptyInIfElse": 	"Bloky 'když-jinak' vyžadují podmínku.",
	"EmptyInWait": 		"Bloky 'čekej dokud nenastane' vyžadují podmínku.",
	"EmptyInWaitMilli":	"Bloky 'čekej millisekund' vyžadují vstupní hodnotu.",
	"EmptyInRep": 		"Bloky 'opakuj dokud nenastane' vyžadují podmínku.",
	"EmptyInBSright": 	"Bloky 'bitový posun doprava' vyžadují proměnnou.",
	"EmptyInBSleft": 	"Bloky 'bitový posun doleva' vyžadují proměnnou.",
	"EmptyBackMusic":	"Bloky 'hraj hudbu na pozadí' musí obsahovat alespoň jednu notu.",
	"NoStart": 			"Programy musí obsahovat událost 'Start', aby správně fungovaly. Pokud vidíš tuto chybu, otevři menu, vyber 'Nový' a začni vytvářet nový program.",
	"NotBackMusic":		"Bloky 'hraj hudbu na pozadí' mohou obsahovat pouze noty.",
	"NoMainBlocks": 	"Žádné bloky nejsou připojeny k události 'Start'.",
};
Blockly.yellowErrorMessages = {
	"recMessObsOn": 		"Edison nemůže přijímat zprávy, pokud je zapnuté zjišťování překážek. Ujisti se, že je před přijímáním zprávy v programu zjišťování překážek vypnuté.",
	"recRemoteObsOn": 		"Edison nemůže přijímat kódy z dálkového ovladače, pokud je zjišťování překážek zapnuté. Ujisti se, že je před přijímáním kódu z ovladače v programu zjišťování překážek vypnuté.",
	"recMessEventObsOn": 	"Edison nemůže přijímat zprávy, pokud je zapnuté zjišťování překážek. Ujisti se, že je před přijímáním zprávy v hlavním programu zjišťování překážek vypnuté.",
	"recRemoteEventObsOn": 	"Edison nemůže přijímat kódy z dálkového ovladače, pokud je zjišťování překážek zapnuté. Ujisti se, že je před přijímáním kódu z ovladače v hlavním programu zjišťování překážek vypnuté.",
	"readLineLightLedOff": 	"Zvaž zapnutí zjišťování čáry použitím bloku 'sledování čáry' z kategorie 'Vnímání', pokud měříš odrazivost povrchu.",
	"waitOppUntil": 		"Blok 'operátor' v bloku 'čekej dokud nenastane' může způsobit, že Edison bude čekat nekonečně dlouho nebo blok 'čekej' přeskočí.",
	"repeatOppUntil": 		"Blok 'operátor' v bloku 'opakuj dokud nenastane' může způsobit, že Edison bude provádět cyklus nekonečně dlouho nebo blok 'opakuj' přeskočí.",
	"waitOpp": 				"Blok 'operátor' v bloku 'čekej' může způsobit, že Edison blok 'čekej' přeskočí.",
	"repeatOpp": 			"Blok 'operátor' v bloku 'opakuj' může způsobit, že Edison blok 'opakuj' přeskočí.",
	"driveForwardsOpp": 	"Blok 'operátor' v bloku 'jeď vpřed dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď vpřed' přeskočí.",
	"driveBackwardsOpp": 	"Blok 'operátor' v bloku 'jeď vzad dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'jeď vzad' přeskočí.",
	"driveLeftOpp": 		"Blok 'operátor' v bloku 'doleva dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'doleva' přeskočí.",
	"driveRightOpp": 		"Blok 'operátor' v bloku 'doprava dokud nenastane' může způsobit, že Edison pojede nekonečně dlouho nebo blok 'doprava' přeskočí.",
	"foreverLoopIn": 		"Blok 'opakuj stále' bude pokračovat, dokud nezmáčkneš na Edisonu čtvercové tlačítko.",
	"setMotorLeft": 		"Blok 'nastav levý motor' jen zapne levý motor. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motoru.",
	"setMotorRight": 		"Blok 'nastav pravý motor' jen zapne pravý motor. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motoru.",
	"setMotorBoth": 		"Blok 'nastav oba motory' jen zapne motory. Ujisti se, že používáš další bloky v programu k ovládání délky běhu motorů.",
	"clapEventDrive": 		"Jízda motorů vytváří hluk, který může způsobit spuštění události tlesknutí. To může způsobit opakované spuštění bloků události tlesknutí při Edisonově jízdě.",
	"floatBlocks": 			"Bloky nepřipojené ke žlutým blokům událostí nebudou nahrány do Edisona.",
	"waitTimeLight": 		"Úroveň světla bude nastavena na vysokou hodnotu, což může způsobit, že Edison bude čekat dlouho.",
	"repLoopLight": 		"Úroveň světla bude nastavena na vysokou hodnotu, což může způsobit, že Edison bude opakovat cyklus dlouho.",
	"driveStrain":			"Blok 'zablokované motory' zjistí zablokování motorů, jen pokud jsou motory spuštěny.",
	"driveStrainEvent":		"K událost 'motory zablokovány' může dojít, jen pokud jsou motory spuštěny.",
	"comment":				"Komentáře jsou pomocné poznámky. Bloky komentářů nebudou nahrány do Edisona.",
	"clearObs": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",
	"clearClap": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",
	"clearKey": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",
	"clearRemote": 			"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",
	"clearIR": 				"Nějaká data senzorů jsou uložena v Edisonově paměti. Může být nezbytné smazat tato data, aby tvůj program fungoval správně. <a href='https://meetedison.com/robot-programming-software/edscratch/edscratch-warning-messages/#clear-data-message' target='_blank'>Více (v angličtině)</a>",

};