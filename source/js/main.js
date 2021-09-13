//----- Библиотеки js -----//
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

//----- Основной js -----//
import {inputmask} from "./modules/mask-tel";
import {vendors} from "./modules/vendors";
import {Lib} from "./modules/Lib";

Lib();
inputmask();
vendors();
