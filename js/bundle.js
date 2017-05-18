/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FIREEMBLEM = exports.FIREEMBLEM = {
  1: ["azura", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494348437/cartooncolours/Full_Portrait_Azura.png"],
  2: ["eirika", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494348435/cartooncolours/Full_Portrait_Eirika.png"],
  3: ["ike", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494348425/cartooncolours/Full_Attack_Ike.png"]
};

var totalCount = exports.totalCount = Object.keys(FIREEMBLEM).length;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var POKEMON = exports.POKEMON = {
  1: ["bulbasaur", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346188/cartooncolours/001_bulbasaur.svg"],
  2: ["ivysaur", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346374/cartooncolours/002_ivysaur.svg"],
  3: ["venusaur", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/003_venusaur.svg"],
  4: ["charmander", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/004_charmander.svg"],
  5: ["charmeleon", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/005_charmeleon.svg"],
  6: ["charizard", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346376/cartooncolours/006_charizard.svg"],
  7: ["squirtle", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/007_squirtle.svg"],
  8: ["wartortle", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346377/cartooncolours/008_wartortle.svg"],
  9: ["blastoise", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346378/cartooncolours/009_blastoise.svg"],
  10: ["caterpie", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346379/cartooncolours/010_caterpie.svg"],
  11: ["metapod", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346379/cartooncolours/011_metapod.svg"],
  12: ["butterfree", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346380/cartooncolours/012_butterfree.svg"],
  13: ["weedle", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346380/cartooncolours/013_weedle.svg"],
  14: ["kakuna", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346381/cartooncolours/014_kakuna.svg"],
  15: ["beedrill", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346382/cartooncolours/015_beedrill.svg"],
  16: ["pidgey", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346383/cartooncolours/016_pidgey.svg"],
  17: ["pidgeotto", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346383/cartooncolours/017_pidgeotto.svg"],
  18: ["pidgeot", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346384/cartooncolours/018_pidgeot.svg"],
  19: ["rattata", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346384/cartooncolours/019_rattata.svg"],
  20: ["raticate", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346384/cartooncolours/020_raticate.svg"],
  21: ["spearow", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346386/cartooncolours/021_spearow.svg"],
  22: ["fearow", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346387/cartooncolours/022_fearow.svg"],
  23: ["ekans", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346387/cartooncolours/023_ekans.svg"],
  24: ["arbok", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346387/cartooncolours/024_arbok.svg"],
  25: ["pikachu", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346388/cartooncolours/025_pikachu.svg"],
  26: ["raichu", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346389/cartooncolours/026_raichu.svg"],
  27: ["sandshrew", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346390/cartooncolours/027_sandshrew.svg"],
  28: ["sandslash", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346390/cartooncolours/028_sandslash.svg"],
  29: ["nidoran♀", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346391/cartooncolours/029_nidoran.svg"],
  30: ["nidorina", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346390/cartooncolours/030_nidorina.svg"],
  31: ["nidoqueen", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346391/cartooncolours/031_nidoqueen.svg"],
  32: ["nidoran♂", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346392/cartooncolours/032_nidoran.svg"],
  33: ["nidorino", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346393/cartooncolours/033_nidorino.svg"],
  34: ["nidoking", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346394/cartooncolours/034_nidoking.svg"],
  35: ["clefairy", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346394/cartooncolours/035_clefairy.svg"],
  36: ["clefable", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346395/cartooncolours/036_clefable.svg"],
  37: ["vulpix", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346395/cartooncolours/037_vulpix.svg"],
  38: ["ninetales", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346396/cartooncolours/038_ninetales.svg"],
  39: ["jigglypuff", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346396/cartooncolours/039_jigglypuff.svg"],
  40: ["wigglytuff", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346397/cartooncolours/040_wigglytuff.svg"],
  41: ["zubat", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346398/cartooncolours/041_zubat.svg"],
  42: ["golbat", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346398/cartooncolours/042_golbat.svg"],
  43: ["oddish", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346398/cartooncolours/043_oddish.svg"],
  44: ["gloom", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346399/cartooncolours/044_gloom.svg"],
  45: ["vileplume", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346400/cartooncolours/045_vileplume.svg"],
  46: ["paras", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346401/cartooncolours/046_paras.svg"],
  47: ["parasect", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346401/cartooncolours/047_parasect.svg"],
  48: ["venonat", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346401/cartooncolours/048_venonat.svg"],
  49: ["venomoth", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346402/cartooncolours/049_venomoth.svg"],
  50: ["diglett", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346402/cartooncolours/050_diglett.svg"],
  51: ["dugtrio", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346403/cartooncolours/051_dugtrio.svg"],
  52: ["meowth", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346404/cartooncolours/052_meowth.svg"],
  53: ["persian", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346405/cartooncolours/053_persian.svg"],
  54: ["psyduck", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346405/cartooncolours/054_psyduck.svg"],
  55: ["golduck", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346405/cartooncolours/055_golduck.svg"],
  56: ["mankey", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346406/cartooncolours/056_mankey.svg"],
  57: ["primeape", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346406/cartooncolours/057_primeape.svg"],
  58: ["growlithe", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346408/cartooncolours/058_growlithe.svg"],
  59: ["arcanine", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/059_arcanine.svg"],
  60: ["poliwag", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/060_poliwag.svg"],
  61: ["poliwhirl", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/061_poliwhirl.svg"],
  62: ["poliwrath", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/062_poliwrath.svg"],
  63: ["abra", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346410/cartooncolours/063_abra.svg"],
  64: ["kadabra", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346411/cartooncolours/064_kadabra.svg"],
  65: ["alakazam", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/065_alakazam.svg"],
  66: ["machop", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/066_machop.svg"],
  67: ["machoke", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346432/cartooncolours/067_machoke.svg"],
  68: ["machamp", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346432/cartooncolours/068_machamp.svg"],
  69: ["bellsprout", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/069_bellsprout.svg"],
  70: ["weepinbell", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/070_weepinbell.svg"],
  71: ["victreebel", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346434/cartooncolours/071_victreebel.svg"],
  72: ["tentacool", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346434/cartooncolours/072_tentacool.svg"],
  73: ["tentacruel", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346435/cartooncolours/073_tentacruel.svg"],
  74: ["geodude", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346436/cartooncolours/074_geodude.svg"],
  75: ["graveler", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346436/cartooncolours/075_graveler.svg"],
  76: ["golem", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346437/cartooncolours/076_golem.svg"],
  77: ["ponyta", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346438/cartooncolours/077_ponyta.svg"],
  78: ["rapidash", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346440/cartooncolours/078_rapidash.svg"],
  79: ["slowpoke", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346440/cartooncolours/079_slowpoke.svg"],
  80: ["slowbro", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346441/cartooncolours/080_slowbro.svg"],
  81: ["magnemite", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346442/cartooncolours/081_magnemite.svg"],
  82: ["magneton", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346441/cartooncolours/082_magneton.svg"],
  83: ["farfetchd", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346442/cartooncolours/083_farfetchd.svg"],
  84: ["doduo", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346444/cartooncolours/084_doduo.svg"],
  85: ["dodrio", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346445/cartooncolours/085_dodrio.svg"],
  86: ["seel", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346445/cartooncolours/086_seel.svg"],
  87: ["dewgong", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346445/cartooncolours/087_dewgong.svg"],
  88: ["grimer", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346446/cartooncolours/088_grimer.svg"],
  89: ["muk", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346447/cartooncolours/089_muk.svg"],
  90: ["shellder", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346448/cartooncolours/090_shellder.svg"],
  91: ["cloyster", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346448/cartooncolours/091_cloyster.svg"],
  92: ["gastly", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346448/cartooncolours/092_gastly.svg"],
  93: ["haunter", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346449/cartooncolours/093_haunter.svg"],
  94: ["gengar", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346450/cartooncolours/094_gengar.svg"],
  95: ["onix", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346451/cartooncolours/095_onix.svg"],
  96: ["drowzee", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346451/cartooncolours/096_drowzee.svg"],
  97: ["hypno", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346452/cartooncolours/097_hypno.svg"],
  98: ["krabby", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346452/cartooncolours/098_krabby.svg"],
  99: ["kingler", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346453/cartooncolours/099_kingler.svg"],
  100: ["voltorb", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346453/cartooncolours/100_voltorb.svg"],
  101: ["electrode", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346454/cartooncolours/101_electrode.svg"],
  102: ["exeggcute", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346455/cartooncolours/102_exeggcute.svg"],
  103: ["exeggutor", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346456/cartooncolours/103_exeggutor.svg"],
  104: ["cubone", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346456/cartooncolours/104_cubone.svg"],
  105: ["marowak", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346456/cartooncolours/105_marowak.svg"],
  106: ["hitmonlee", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346457/cartooncolours/106_hitmonlee.svg"],
  107: ["hitmonchan", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346457/cartooncolours/107_hitmonchan.svg"],
  108: ["lickitung", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346458/cartooncolours/108_lickitung.svg"],
  109: ["koffing", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346458/cartooncolours/109_koffing.svg"],
  110: ["weezing", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346460/cartooncolours/110_weezing.svg"],
  111: ["rhyhorn", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346460/cartooncolours/111_rhyhorn.svg"],
  112: ["rhydon", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346461/cartooncolours/112_rhydon.svg"],
  113: ["chansey", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346462/cartooncolours/113_chansey.svg"],
  114: ["tangela", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346463/cartooncolours/114_tangela.svg"],
  115: ["kangaskhan", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346463/cartooncolours/115_kangaskhan.svg"],
  116: ["horsea", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346464/cartooncolours/116_horsea.svg"],
  117: ["seadra", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346464/cartooncolours/117_seadra.svg"],
  118: ["goldeen", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346464/cartooncolours/118_goldeen.svg"],
  119: ["seaking", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346465/cartooncolours/119_seaking.svg"],
  120: ["staryu", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346467/cartooncolours/120_staryu.svg"],
  121: ["starmie", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346467/cartooncolours/121_starmie.svg"],
  122: ["mr. mine", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/122_mr._mime.svg"],
  123: ["scyther", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/123_scyther.svg"],
  124: ["jynx", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/124_jynx.svg"],
  125: ["electabuzz", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/125_electabuzz.svg"],
  126: ["magmar", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/126_magmar.svg"],
  127: ["pinsir", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/127_pinsir.svg"],
  128: ["tauros", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/128_tauros.svg"],
  129: ["magikarp", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/129_magikarp.svg"],
  130: ["gyarados", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346472/cartooncolours/130_gyarados.svg"],
  131: ["lapras", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346472/cartooncolours/131_lapras.svg"],
  132: ["ditto", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346473/cartooncolours/132_ditto.svg"],
  133: ["eevee", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346474/cartooncolours/133_eevee.svg"],
  134: ["vaporeon", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346475/cartooncolours/134_vaporeon.svg"],
  135: ["jolteon", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346476/cartooncolours/135_jolteon.svg"],
  136: ["flareon", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346476/cartooncolours/136_flareon.svg"],
  137: ["porygon", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346477/cartooncolours/137_porygon.svg"],
  138: ["omanyte", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346477/cartooncolours/138_omanyte.svg"],
  139: ["omastar", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346477/cartooncolours/139_omastar.svg"],
  140: ["kabuto", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346478/cartooncolours/140_kabuto.svg"],
  141: ["kabutops", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346479/cartooncolours/141_kabutops.svg"],
  142: ["aerodactyl", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/142_aerodactyl.svg"],
  143: ["snorlax", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg"],
  144: ["articuno", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/144_articuno.svg"],
  145: ["zapdos", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/145_zapdos.svg"],
  146: ["moltres", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/146_moltres.svg"],
  147: ["dratini", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346482/cartooncolours/147_dratini.svg"],
  148: ["dragonair", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346482/cartooncolours/148_dragonair.svg"],
  149: ["dragonite", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346483/cartooncolours/149_dragonite.svg"],
  150: ["mewtwo", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346484/cartooncolours/150_mewtwo.svg"],
  151: ["mew", "https://res.cloudinary.com/dfazwubvc/image/upload/v1494346485/cartooncolours/151_mew.svg"]
};

var totalCount = exports.totalCount = Object.keys(POKEMON).length;

var POKEMON_NAMES = exports.POKEMON_NAMES = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"];

var longNames = exports.longNames = {
  142: ["aerodactyl", 870],
  125: ["electabuzz", 860],
  115: ["kangaskhan", 960],
  107: ["hitmonchan", 921],
  103: ["exeggutor", 834],
  102: ["exeggcute", 840],
  81: ["magnemite", 845],
  73: ["tentacruel", 845],
  71: ["victreebel", 805],
  70: ["weepinbell", 834],
  69: ["bellsprout", 822],
  40: ["wigglytuff", 847],
  31: ["nidoqueen", 818],
  27: ["sandshrew", 867],
  12: ["butterfree", 874],
  5: ["charmeleon", 914],
  4: ["charmander", 950]
};

var longNameArray = exports.longNameArray = [4, 5, 12, 27, 31, 40, 69, 70, 71, 73, 81, 102, 103, 107, 115, 125, 142];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomNumber = exports.randomNumber = function randomNumber(limit) {
  // add 1 to exclude 0 and include 'limit'
  return Math.floor(Math.random() * limit) + 1;
};

// hexcode is just rgb mapped in base 16
var imgDataToHexCode = exports.imgDataToHexCode = function imgDataToHexCode(color) {
  var r = color.red.toString(16);
  var g = color.green.toString(16);
  var b = color.blue.toString(16);
  // prepend '0' before 0-9 digits
  if (r.length === 1) {
    r = '0' + r;
  }
  if (g.length === 1) {
    g = '0' + g;
  }
  if (b.length === 1) {
    b = '0' + b;
  }

  return '#' + r + g + b;
};

var generateImgData = exports.generateImgData = function generateImgData(img, canvas, ctx, colors, currentId, group) {
  var imageData = ctx.getImageData(canvas.width / 3, canvas.height / 3, img.width, img.height).data;

  for (var i = 0; i < imageData.length - 3; i += 4) {
    var r = imageData[i];
    var g = imageData[i + 1];
    var b = imageData[i + 2];

    var imageColor = imgDataToHexCode({ red: r, green: g, blue: b });

    if (imageColor in colors) {
      colors[imageColor] += 1;
    } else {
      colors[imageColor] = 1;
    }
  }
  var sortedColors = [];
  delete colors['#000000'];
  // delete colors['#ffffff'];
  delete colors['#0d131a'];

  Object.keys(colors).forEach(function (color) {
    sortedColors.push({
      color: color,
      count: colors[color]
    });
  });

  // sorts from largest to smallest
  sortedColors.sort(function (a, b) {
    return b.count - a.count;
  });
  var topTenColors = [];

  for (var k = 0; k < 10; k++) {
    topTenColors.push(sortedColors[k]);
  }

  return topTenColors;
};

var calculateColorPercentage = exports.calculateColorPercentage = function calculateColorPercentage(palette) {
  var totalCount = 0;
  var colorRatio = [];

  palette.forEach(function (p) {
    return totalCount += p.count;
  });
  palette.forEach(function (p) {
    var color = p.color;
    var percentage = p.count / totalCount;
    colorRatio.push({
      color: color, percentage: percentage
    });
  });
  return colorRatio;
};

// this function can be replaced with a mixin
var calculateNameWidth = exports.calculateNameWidth = function calculateNameWidth(nameElement, currentId, longNameArray) {
  if (window.innerWidth <= 1057 && longNameArray.includes(currentId)) {
    nameElement.style.fontSize = "13.5vw";
  } else {
    nameElement.style.fontSize = "143px";
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FireEmblemHero = exports.fireemblemNameToId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fireemblem_list = __webpack_require__(0);

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fireemblemNameToId = exports.fireemblemNameToId = function fireemblemNameToId(obj, name) {
  for (var prop in obj) {
    // console.log(`obj.${prop} = ${obj[prop]}`);
    if (obj[prop][0] === name) {
      return parseInt(prop);
    }
  }
};

var FireEmblemHero = exports.FireEmblemHero = function () {
  function FireEmblemHero(canvas, ctx) {
    _classCallCheck(this, FireEmblemHero);

    this.canvas = canvas;
    this.ctx = ctx;
    this.colors = {};
    this.currentHeroId = 1;
    this.fireEmblemData = {};
    this.image = null;

    // let that = this, binding of this
    this.randomHero = this.randomHero.bind(this);
    this.generateHeroData = this.generateHeroData.bind(this);
    this.loadHero = this.loadHero.bind(this);
  }

  _createClass(FireEmblemHero, [{
    key: 'generateHeroData',
    value: function generateHeroData() {
      var _this = this;

      this.colors = {};

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      var img = new Image();
      img.crossOrigin = "anonymous";
      img.src = _fireemblem_list.FIREEMBLEM[this.currentHeroId][1];
      img.onload = function () {
        _this.ctx.drawImage(img, _this.canvas.width / 3, _this.canvas.height / 3);

        var topColors = (0, _util.generateImgData)(img, _this.canvas, _this.ctx, _this.colors, _this.currentHeroId, _fireemblem_list.FIREEMBLEM);

        _this.fireEmblemData[_this.currentHeroId] = {
          name: _fireemblem_list.FIREEMBLEM[_this.currentHeroId][0],
          colors: topColors
        };

        if (_this.currentHeroId < _fireemblem_list.totalCount) {
          _this.currentHeroId++;
          _this.generateHeroData();
        } else {
          console.log("Data Creation Complete");
          console.log(JSON.stringify(_this.fireEmblemData));
        }
      };
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var that = this;
      $.getJSON('./js/fireemblem_data.json', function (data) {
        that.fireEmblemData = data;
        that.loadHero();
      });
    }

    // metapod, fearow, geodude are extra large

  }, {
    key: 'loadHero',
    value: function loadHero() {
      var _this2 = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      console.log(_fireemblem_list.FIREEMBLEM[this.currentHeroId][0]);

      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = _fireemblem_list.FIREEMBLEM[this.currentHeroId][1];
      img.onload = function () {
        var canvasToImageScale = 1.5;
        var imageScale = img.width / img.height;
        img.height = _this2.canvas.height / canvasToImageScale;
        img.width = img.height * imageScale;

        var canvasMidpoint = [_this2.canvas.width / 2, _this2.canvas.height / 2];
        var imgMidpoint = [img.width / 2, img.height / 2];

        var dx = canvasMidpoint[0] - imgMidpoint[0];
        var dy = canvasMidpoint[1] - imgMidpoint[1];
        var dWidth = img.width;
        var dHeight = img.height;

        _this2.ctx.drawImage(img, dx, dy, dWidth, dHeight);
      };

      // this part will be deleted later after creating search
      if (this.currentHeroId >= _fireemblem_list.totalCount) {
        this.currentHeroId = 1;
      } else {
        this.currentHeroId++;
      }
    }
  }, {
    key: 'randomHero',
    value: function randomHero() {
      var randomId = (0, _util.randomNumber)(_fireemblem_list.totalCount);
      this.currentHeroId = randomId;
      this.loadHero();
    }
  }]);

  return FireEmblemHero;
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pokemon = exports.pokemonNameToId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pokemon_list = __webpack_require__(1);

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pokemonNameToId = exports.pokemonNameToId = function pokemonNameToId(obj, pokeName) {
  for (var prop in obj) {
    // console.log(`obj.${prop} = ${obj[prop]}`);
    if (obj[prop][0] === pokeName) {
      return parseInt(prop);
    }
  }
};

var Pokemon = exports.Pokemon = function () {
  function Pokemon(canvas, ctx, leadPokeId) {
    _classCallCheck(this, Pokemon);

    this.canvas = canvas;
    this.ctx = ctx;
    this.colors = {};
    this.currentPokeId = leadPokeId;
    this.pokemonData = {};
    this.image = null;

    // let that = this, binding of this
    this.randomPokemon = this.randomPokemon.bind(this);
    this.generatePokemonData = this.generatePokemonData.bind(this);
    this.loadPokemon = this.loadPokemon.bind(this);
    this.backPokemon = this.backPokemon.bind(this);
    // for testing, probably won't need later
    this.displayPalette = this.displayPalette.bind(this);
  }

  _createClass(Pokemon, [{
    key: 'generatePokemonData',
    value: function generatePokemonData() {
      var _this = this;

      // currentPokeId must be set to 1 to get Complete Pokemon Data
      // comment out if/else below, look for TODO bulbasaur
      console.log("Warning: Change currentPokeId back to 1");

      this.colors = {};

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      var img = new Image();
      img.crossOrigin = "anonymous";
      img.src = _pokemon_list.POKEMON[this.currentPokeId][1];
      img.onload = function () {
        _this.ctx.drawImage(img, _this.canvas.width / 3, _this.canvas.height / 3);

        var topColors = (0, _util.generateImgData)(img, _this.canvas, _this.ctx, _this.colors, _this.currentPokeId, _pokemon_list.POKEMON);

        _this.pokemonData[_this.currentPokeId] = {
          name: _pokemon_list.POKEMON[_this.currentPokeId][0],
          colors: topColors
        };

        if (_this.currentPokeId < _pokemon_list.totalCount) {
          _this.currentPokeId++;
          _this.generatePokemonData();
        } else {
          console.log("Data Creation Complete: Hit 151");
          console.log(JSON.stringify(_this.pokemonData));
        }
      };
    }

    // could refractor this function to use a promise instead

  }, {
    key: 'loadData',
    value: function loadData() {
      var that = this;
      $.getJSON('./js/pokemon_data2.json', function (data) {
        that.pokemonData = data;
        that.loadPokemon();
      });
    }
  }, {
    key: 'loadPokemon',
    value: function loadPokemon() {
      var _this2 = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      console.log(_pokemon_list.POKEMON[this.currentPokeId][0]);
      // reset input field upon submission
      document.getElementById("search-bar-input").value = "";

      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = _pokemon_list.POKEMON[this.currentPokeId][1];
      img.onload = function () {
        var canvasToImageScale = 2.5;
        var imageScale = img.width / img.height;
        img.height = _this2.canvas.height / canvasToImageScale;
        img.width = img.height * imageScale;

        var canvasMidpoint = [_this2.canvas.width / 2, _this2.canvas.height / 2];
        var imgMidpoint = [img.width / 2, img.height / 2];

        var dx = canvasMidpoint[0] - imgMidpoint[0];
        var dy = canvasMidpoint[1] - imgMidpoint[1];
        var dWidth = img.width;
        var dHeight = img.height;

        _this2.ctx.drawImage(img, dx, dy, dWidth, dHeight);
      };

      this.displayPalette();

      // this part will be deleted later after creating search
      // TODO bulbasaur: comment out below if/else to generate Full Data
      if (this.currentPokeId >= _pokemon_list.totalCount) {
        this.currentPokeId = 1;
      } else {
        this.currentPokeId++;
      }
    }
  }, {
    key: 'backPokemon',
    value: function backPokemon() {
      if (this.currentPokeId === 2) {
        this.currentPokeId = 151;
      } else if (this.currentPokeId === 1) {
        this.currentPokeId = 150;
      } else {
        this.currentPokeId = this.currentPokeId - 2;
      }
      this.loadPokemon();
    }
  }, {
    key: 'randomPokemon',
    value: function randomPokemon() {
      var randomId = (0, _util.randomNumber)(_pokemon_list.totalCount);
      this.currentPokeId = randomId;
      this.loadPokemon();
    }
  }, {
    key: 'searchPokemon',
    value: function searchPokemon(input) {
      input = input.toLowerCase().trim();
      if (input >= 1 && input <= 151) {
        this.currentPokeId = input;
      } else if (_pokemon_list.POKEMON_NAMES.includes(input)) {
        this.currentPokeId = _pokemon_list.POKEMON_NAMES.indexOf(input) + 1;
      }
      this.loadPokemon();
    }
  }, {
    key: 'displayPalette',
    value: function displayPalette() {
      var palette = this.pokemonData[this.currentPokeId].colors;
      var ratioPalette = (0, _util.calculateColorPercentage)(palette);

      document.getElementById("main-color").remove();

      var name = document.getElementById("pokemon-name");
      name.style.color = palette[1].color;
      name.style.textShadow = "-1px 0 " + palette[2].color + ", 0 2px " + palette[2].color + ", 5px 0 " + palette[2].color + ", 0 -1px " + palette[2].color;
      name.innerHTML = _pokemon_list.POKEMON[this.currentPokeId][0];

      (0, _util.calculateNameWidth)(name, this.currentPokeId, _pokemon_list.longNameArray);

      var h1 = document.createElement('h1');
      h1.setAttribute("id", "main-color");
      h1.style.backgroundColor = palette[0].color;
      document.getElementById("palette-background").appendChild(h1);

      var mainHexCode = document.getElementById("main-hexcode");
      mainHexCode.innerHTML = palette[0].color;

      for (var i = 1; i < palette.length; i++) {
        var h3 = document.getElementById("color" + i);
        h3.style.backgroundColor = palette[i].color;
        var hexcode = document.getElementById("hexcode" + i);
        hexcode.innerHTML = palette[i].color;
      }
    }

    // need for resize Canvas function

  }, {
    key: 'logCurrentPokeId',
    value: function logCurrentPokeId() {
      return this.currentPokeId - 1;
    }
  }]);

  return Pokemon;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pokemon_list = __webpack_require__(1);

var _fireemblem_list = __webpack_require__(0);

var _pokemon = __webpack_require__(4);

var _fireemblem = __webpack_require__(3);

// for webpacking css
__webpack_require__(5);

// testing

// end testing imports

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('colours-canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // testing
  // let canvasR = document.getElementById('colours-canvas-right');
  // let ctxR = canvasR.getContext('2d');
  // canvasR.width = window.innerWidth / 2;
  // canvasR.height = window.innerHeight;
  // canvasR.style.left = (window.innerWidth / 2) + "px";

  document.body.style.backgroundColor = "#B5FFDB";
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // testing
  // ctxR.clearRect(canvasR.width, 0, canvasR.width, canvasR.height);

  // I feel like there has to be a better way than this:
  var navBar = document.getElementById("nav-bar");
  navBar.style.width = window.innerWidth - 8 + "px";
  var leadPokeId = 4;
  var secondPokeId = 1;

  var pokemon = new _pokemon.Pokemon(canvas, ctx, leadPokeId);
  // let pokemon2 = new Pokemon(canvasR, ctxR, secondPokeId)
  // pokemon2.loadData();
  pokemon.loadData();

  // Random Button
  var logRandomCharacter = document.getElementById("random-button");
  logRandomCharacter.addEventListener("click", pokemon.randomPokemon);

  // Back Button
  var backButton = document.getElementById("back-button");
  backButton.addEventListener("click", pokemon.backPokemon);

  // Next Button
  var nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", pokemon.loadPokemon);

  // Search Bar
  var searchInput = document.getElementById("search-bar-input");
  searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      pokemon.searchPokemon(this.value);
    };
  });

  // keys mapped: "spacebar" and arrow keys
  document.addEventListener("keydown", function (e) {
    if (document.activeElement.nodeName != "BODY") {
      return;
    }

    if (e.which === 32) {
      pokemon.randomPokemon();
    } else if (e.which === 37 || e.which === 40) {
      pokemon.backPokemon();
    } else if (e.which === 38 || e.which === 39) {
      pokemon.loadPokemon();
    }
  });

  var resizeCanvas = function resizeCanvas() {
    // grabs old pokemon id before creating a new canvas
    leadPokeId = pokemon.logCurrentPokeId();

    // reassign variables
    canvas = document.getElementById('colours-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    navBar = document.getElementById("nav-bar");
    navBar.style.width = window.innerWidth - 8 + "px";

    pokemon = new _pokemon.Pokemon(canvas, ctx, leadPokeId);
    // essentially rerender/repopulate DOM view
    pokemon.loadData();
  };

  window.addEventListener('resize', resizeCanvas, false);

  // Testing
  window.pokemon = _pokemon_list.POKEMON;
  window.fireemblem = _fireemblem_list.FIREEMBLEM;
  window.pokemonNames = _pokemon_list.POKEMON_NAMES;
  window.canvas = canvas;
  // TODO will need to check the colorData later, ex Eirika's doesn't look right
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map