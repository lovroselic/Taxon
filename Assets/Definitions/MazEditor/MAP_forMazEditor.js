/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

"use strict";

/** textures */
const TEXTURE_LIST = [
    "BlackWall45", "GreyFloor27",
].sort();

/** Decals */
const DECAL_PAINTINGS = [].sort();

/** Crests */

const DECAL_CRESTS = [].sort();

//lights
const LIGHT_DECALS = [
    "FuturisticLight_001", "FuturisticLight_002", "FuturisticLight_003", "FuturisticLight_004", "FuturisticLight_005", "FuturisticLight_006", "FuturisticLight_007", "FuturisticLight_008", "FuturisticLight_009", "FuturisticLight_010", "FuturisticLight_011", "FuturisticLight_012",
    "FuturisticLight_013", "FuturisticLight_014", "FuturisticLight_015", "FuturisticLight_016"
].sort();

const TRIGGER_DECALS = [];
const LAIR_DECALS = [].sort();

const CONTAINER_LIST = [];
if (typeof CONTAINER_ITEM_TYPE !== "undefined") {

    for (const container in CONTAINER_ITEM_TYPE) {
        CONTAINER_LIST.push(container);
    }
}
console.log("%cMAP for MazEditor loaded.", "color: #888");