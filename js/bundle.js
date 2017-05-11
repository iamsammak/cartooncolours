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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var POKEMON = exports.POKEMON = {
  1: ["bulbasaur", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346188/cartooncolours/001_bulbasaur.svg"],
  2: ["ivysaur", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346374/cartooncolours/002_ivysaur.svg"],
  3: ["venusaur", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/003_venusaur.svg"],
  4: ["charmander", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/004_charmander.svg"],
  5: ["charmeleon", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/005_charmeleon.svg"],
  6: ["charizard", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346376/cartooncolours/006_charizard.svg"],
  7: ["squirtle", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346375/cartooncolours/007_squirtle.svg"],
  8: ["wartortle", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346377/cartooncolours/008_wartortle.svg"],
  9: ["blastoise", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346378/cartooncolours/009_blastoise.svg"],
  10: ["caterpie", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346379/cartooncolours/010_caterpie.svg"],
  11: ["metapod", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346379/cartooncolours/011_metapod.svg"],
  12: ["butterfree", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346380/cartooncolours/012_butterfree.svg"],
  13: ["weedle", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346380/cartooncolours/013_weedle.svg"],
  14: ["kakuna", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346381/cartooncolours/014_kakuna.svg"],
  15: ["beedrill", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346382/cartooncolours/015_beedrill.svg"],
  16: ["pidgey", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346383/cartooncolours/016_pidgey.svg"],
  17: ["pidgeotto", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346383/cartooncolours/017_pidgeotto.svg"],
  18: ["pidgeot", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346384/cartooncolours/018_pidgeot.svg"],
  19: ["rattata", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346384/cartooncolours/019_rattata.svg"],
  20: ["raticate", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346384/cartooncolours/020_raticate.svg"],
  21: ["spearow", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346386/cartooncolours/021_spearow.svg"],
  22: ["fearow", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346387/cartooncolours/022_fearow.svg"],
  23: ["ekans", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346387/cartooncolours/023_ekans.svg"],
  24: ["arbok", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346387/cartooncolours/024_arbok.svg"],
  25: ["pikachu", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346388/cartooncolours/025_pikachu.svg"],
  26: ["raichu", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346389/cartooncolours/026_raichu.svg"],
  27: ["sandshrew", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346390/cartooncolours/027_sandshrew.svg"],
  28: ["sandslash", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346390/cartooncolours/028_sandslash.svg"],
  29: ["nidoranf", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346391/cartooncolours/029_nidoran.svg"],
  30: ["nidorina", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346390/cartooncolours/030_nidorina.svg"],
  31: ["nidoqueen", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346391/cartooncolours/031_nidoqueen.svg"],
  32: ["nidoranm", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346392/cartooncolours/032_nidoran.svg"],
  33: ["nidorino", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346393/cartooncolours/033_nidorino.svg"],
  34: ["nidoking", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346394/cartooncolours/034_nidoking.svg"],
  35: ["clefairy", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346394/cartooncolours/035_clefairy.svg"],
  36: ["clefable", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346395/cartooncolours/036_clefable.svg"],
  37: ["vulpix", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346395/cartooncolours/037_vulpix.svg"],
  38: ["ninetales", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346396/cartooncolours/038_ninetales.svg"],
  39: ["jigglypuff", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346396/cartooncolours/039_jigglypuff.svg"],
  40: ["wigglytuff", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346397/cartooncolours/040_wigglytuff.svg"],
  41: ["zubat", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346398/cartooncolours/041_zubat.svg"],
  42: ["golbat", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346398/cartooncolours/042_golbat.svg"],
  43: ["oddish", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346398/cartooncolours/043_oddish.svg"],
  44: ["gloom", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346399/cartooncolours/044_gloom.svg"],
  45: ["vileplume", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346400/cartooncolours/045_vileplume.svg"],
  46: ["paras", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346401/cartooncolours/046_paras.svg"],
  47: ["parasect", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346401/cartooncolours/047_parasect.svg"],
  48: ["venonat", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346401/cartooncolours/048_venonat.svg"],
  49: ["venomoth", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346402/cartooncolours/049_venomoth.svg"],
  50: ["diglett", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346402/cartooncolours/050_diglett.svg"],
  51: ["dugtrio", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346403/cartooncolours/051_dugtrio.svg"],
  52: ["meowth", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346404/cartooncolours/052_meowth.svg"],
  53: ["persian", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346405/cartooncolours/053_persian.svg"],
  54: ["psyduck", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346405/cartooncolours/054_psyduck.svg"],
  55: ["golduck", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346405/cartooncolours/055_golduck.svg"],
  56: ["mankey", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346406/cartooncolours/056_mankey.svg"],
  57: ["primeape", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346406/cartooncolours/057_primeape.svg"],
  58: ["growlithe", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346408/cartooncolours/058_growlithe.svg"],
  59: ["arcanine", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/059_arcanine.svg"],
  60: ["poliwag", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/060_poliwag.svg"],
  61: ["poliwhirl", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/061_poliwhirl.svg"],
  62: ["poliwrath", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346409/cartooncolours/062_poliwrath.svg"],
  63: ["abra", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346410/cartooncolours/063_abra.svg"],
  64: ["kadabra", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346411/cartooncolours/064_kadabra.svg"],
  65: ["alakazam", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/065_alakazam.svg"],
  66: ["machop", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/066_machop.svg"],
  67: ["machoke", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346432/cartooncolours/067_machoke.svg"],
  68: ["machamp", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346432/cartooncolours/068_machamp.svg"],
  69: ["bellsprout", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/069_bellsprout.svg"],
  70: ["weepinbell", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346431/cartooncolours/070_weepinbell.svg"],
  71: ["victreebel", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346434/cartooncolours/071_victreebel.svg"],
  72: ["tentacool", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346434/cartooncolours/072_tentacool.svg"],
  73: ["tentacruel", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346435/cartooncolours/073_tentacruel.svg"],
  74: ["geodude", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346436/cartooncolours/074_geodude.svg"],
  75: ["graveler", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346436/cartooncolours/075_graveler.svg"],
  76: ["golem", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346437/cartooncolours/076_golem.svg"],
  77: ["ponyta", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346438/cartooncolours/077_ponyta.svg"],
  78: ["rapidash", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346440/cartooncolours/078_rapidash.svg"],
  79: ["slowpoke", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346440/cartooncolours/079_slowpoke.svg"],
  80: ["slowbro", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346441/cartooncolours/080_slowbro.svg"],
  81: ["magnemite", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346442/cartooncolours/081_magnemite.svg"],
  82: ["magneton", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346441/cartooncolours/082_magneton.svg"],
  83: ["farfetchd", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346442/cartooncolours/083_farfetchd.svg"],
  84: ["doduo", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346444/cartooncolours/084_doduo.svg"],
  85: ["dodrio", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346445/cartooncolours/085_dodrio.svg"],
  86: ["seel", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346445/cartooncolours/086_seel.svg"],
  87: ["dewgong", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346445/cartooncolours/087_dewgong.svg"],
  88: ["grimer", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346446/cartooncolours/088_grimer.svg"],
  89: ["muk", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346447/cartooncolours/089_muk.svg"],
  90: ["shellder", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346448/cartooncolours/090_shellder.svg"],
  91: ["cloyster", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346448/cartooncolours/091_cloyster.svg"],
  92: ["gastly", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346448/cartooncolours/092_gastly.svg"],
  93: ["haunter", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346449/cartooncolours/093_haunter.svg"],
  94: ["gengar", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346450/cartooncolours/094_gengar.svg"],
  95: ["onix", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346451/cartooncolours/095_onix.svg"],
  96: ["drowzee", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346451/cartooncolours/096_drowzee.svg"],
  97: ["hypno", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346452/cartooncolours/097_hypno.svg"],
  98: ["krabby", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346452/cartooncolours/098_krabby.svg"],
  99: ["kingler", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346453/cartooncolours/099_kingler.svg"],
  100: ["voltorb", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346453/cartooncolours/100_voltorb.svg"],
  101: ["electrode", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346454/cartooncolours/101_electrode.svg"],
  102: ["exeggcute", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346455/cartooncolours/102_exeggcute.svg"],
  103: ["exeggutor", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346456/cartooncolours/103_exeggutor.svg"],
  104: ["cubone", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346456/cartooncolours/104_cubone.svg"],
  105: ["marowak", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346456/cartooncolours/105_marowak.svg"],
  106: ["hitmonlee", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346457/cartooncolours/106_hitmonlee.svg"],
  107: ["hitmonchan", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346457/cartooncolours/107_hitmonchan.svg"],
  108: ["lickitung", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346458/cartooncolours/108_lickitung.svg"],
  109: ["koffing", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346458/cartooncolours/109_koffing.svg"],
  110: ["weezing", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346460/cartooncolours/110_weezing.svg"],
  111: ["rhyhorn", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346460/cartooncolours/111_rhyhorn.svg"],
  112: ["rhydon", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346461/cartooncolours/112_rhydon.svg"],
  113: ["chansey", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346462/cartooncolours/113_chansey.svg"],
  114: ["tangela", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346463/cartooncolours/114_tangela.svg"],
  115: ["kangaskhan", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346463/cartooncolours/115_kangaskhan.svg"],
  116: ["horsea", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346464/cartooncolours/116_horsea.svg"],
  117: ["seadra", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346464/cartooncolours/117_seadra.svg"],
  118: ["goldeen", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346464/cartooncolours/118_goldeen.svg"],
  119: ["seaking", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346465/cartooncolours/119_seaking.svg"],
  120: ["staryu", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346467/cartooncolours/120_staryu.svg"],
  121: ["starmie", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346467/cartooncolours/121_starmie.svg"],
  122: ["mr. mine", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/122_mr._mime.svg"],
  123: ["scyther", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/123_scyther.svg"],
  124: ["jynx", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/124_jynx.svg"],
  125: ["electabuzz", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346468/cartooncolours/125_electabuzz.svg"],
  126: ["magmar", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/126_magmar.svg"],
  127: ["pinsir", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/127_pinsir.svg"],
  128: ["tauros", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/128_tauros.svg"],
  129: ["magikarp", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346471/cartooncolours/129_magikarp.svg"],
  130: ["gyarados", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346472/cartooncolours/130_gyarados.svg"],
  131: ["lapras", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346472/cartooncolours/131_lapras.svg"],
  132: ["ditto", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346473/cartooncolours/132_ditto.svg"],
  133: ["eevee", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346474/cartooncolours/133_eevee.svg"],
  134: ["vaporeon", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346475/cartooncolours/134_vaporeon.svg"],
  135: ["jolteon", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346476/cartooncolours/135_jolteon.svg"],
  136: ["flareon", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346476/cartooncolours/136_flareon.svg"],
  137: ["porygon", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346477/cartooncolours/137_porygon.svg"],
  138: ["omanyte", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346477/cartooncolours/138_omanyte.svg"],
  139: ["omastar", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346477/cartooncolours/139_omastar.svg"],
  140: ["kabuto", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346478/cartooncolours/140_kabuto.svg"],
  141: ["kabutops", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346479/cartooncolours/141_kabutops.svg"],
  142: ["aerodactyl", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/142_aerodactyl.svg"],
  143: ["snorlax", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg"],
  144: ["articuno", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/144_articuno.svg"],
  145: ["zapdos", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/145_zapdos.svg"],
  146: ["moltres", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346480/cartooncolours/146_moltres.svg"],
  147: ["dratini", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346482/cartooncolours/147_dratini.svg"],
  148: ["dragonair", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346482/cartooncolours/148_dragonair.svg"],
  149: ["dragonite", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346483/cartooncolours/149_dragonite.svg"],
  150: ["mewtwo", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346484/cartooncolours/150_mewtwo.svg"],
  151: ["mew", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494346485/cartooncolours/151_mew.svg"]
};

var totalCount = exports.totalCount = Object.keys(POKEMON).length;

/***/ }),
/* 1 */
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
  // delete this.colors['#0d131a'];

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
  // return colors
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FireEmblemHero = exports.fireemblemNameToId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fireemblem_list = __webpack_require__(3);

var _util = __webpack_require__(1);

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
    this.currentHeroId = 2;
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pokemon = exports.pokemonNameToId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pokemon_list = __webpack_require__(0);

var _util = __webpack_require__(1);

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
  function Pokemon(canvas, ctx) {
    _classCallCheck(this, Pokemon);

    this.canvas = canvas;
    this.ctx = ctx;
    this.colors = {};
    this.currentPokeId = 143;
    this.pokemonData = {};
    this.image = null;

    // let that = this, binding of this
    this.randomPokemon = this.randomPokemon.bind(this);
    this.generatePokemonData = this.generatePokemonData.bind(this);
    this.loadPokemon = this.loadPokemon.bind(this);
  }

  _createClass(Pokemon, [{
    key: 'generatePokemonData',
    value: function generatePokemonData() {
      var _this = this;

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
  }, {
    key: 'loadData',
    value: function loadData() {
      var that = this;
      $.getJSON('./js/pokemon_data.json', function (data) {
        that.pokemonData = data;
        that.loadPokemon();
      });
    }

    // metapod, fearow, geodude are extra large

  }, {
    key: 'loadPokemon',
    value: function loadPokemon() {
      var _this2 = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      console.log(_pokemon_list.POKEMON[this.currentPokeId][0]);

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

      // this part will be deleted later after creating search
      if (this.currentPokeId >= _pokemon_list.totalCount) {
        this.currentPokeId = 1;
      } else {
        this.currentPokeId++;
      }
    }
  }, {
    key: 'randomPokemon',
    value: function randomPokemon() {
      var randomId = (0, _util.randomNumber)(_pokemon_list.totalCount);
      this.currentPokeId = randomId;
      this.loadPokemon();
    }
  }]);

  return Pokemon;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pokemon_list = __webpack_require__(0);

var _pokemon = __webpack_require__(4);

var _fireemblem_list = __webpack_require__(3);

var _fireemblem = __webpack_require__(2);

var _util = __webpack_require__(1);

// end testing imports

document.addEventListener('DOMContentLoaded', function () {
  var loadCanvas = function loadCanvas() {
    var canvas = document.getElementById('colours-canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.style.backgroundColor = "#B5FFDB";

    var pokemon = new _pokemon.Pokemon(canvas, ctx);
    // pokemon.loadData();
    //
    // const logRandomPokemon = document.getElementById("random-pokemon");
    // logRandomPokemon.addEventListener("click", pokemon.randomPokemon);
    //
    // const randomButton = document.getElementById("random-button");
    // randomButton.addEventListener("click", pokemon.loadPokemon);

    var hero = new _fireemblem.FireEmblemHero(canvas, ctx);
    // hero.loadData();

    var logRandomPokemon = document.getElementById("random-pokemon");
    logRandomPokemon.addEventListener("click", hero.randomHero);

    var randomButton = document.getElementById("random-button");
    randomButton.addEventListener("click", hero.generateHeroData);
  };

  window.addEventListener('resize', loadCanvas, false);
  loadCanvas();

  // Testing
  window.pokemon = _pokemon_list.POKEMON;
  window.pokemonNameToId = _pokemon.pokemonNameToId;
  window.fireemblem = _fireemblem_list.FIREEMBLEM;
  window.fireemblemNameToId = _fireemblem.fireemblemNameToId;
  window.imgDataToHexCode = _util.imgDataToHexCode;
  console.log("Hello from inside cartooncolours.js");
}); // testing

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map