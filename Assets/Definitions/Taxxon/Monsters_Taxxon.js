/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

/**
 * definition of:
 *      monsters
 *      scrolls
 *      other item types
 */

"use strict";
console.log("%cMonsters for HTH loaded.", "color: #888");


const HERO_TYPE = {};
const MONSTER_TYPE = {};

//container content
//const CONTAINER_CONTENT_TYPES = { GOLD_ITEM_TYPE, SKILL_ITEM_TYPE, INTERACTION_ITEM };
//const CONTAINER_CONTENT_LIST = stringifyObjectList(CONTAINER_CONTENT_TYPES);
//const TRIGGER_ACTIONS = ["HOLE->toEmpty", "WALL->toEmpty", "EMPTY->toWall"];

/*const TRAP_ACTIONS = {
    Missile: [],
    Spawn: listObjectKeys(MONSTER_TYPE)
};
const TRAP_ACTION_LIST = listObjectKeys(TRAP_ACTIONS);*/

const FIRE_TYPES = {
    Fire: {
        lightColor: LIGHT_COLORS.fireSoftSubtle,
        scale: 0.50,
        gravity: new Float32Array([0, 0.60, 0]),
        velocity: 0.0012,
        spawnRadius: 0.25,
        turbulence: 0.0075,
        damping: 0.975,
        warp: 0.072,
        gate: 1.0,
        texture_name: "FireTexture2",
    },
    Bonfire: {
        lightColor: LIGHT_COLORS.fireSubtle,
        scale: 0.75,
        gravity: new Float32Array([0, 0.75, 0]),
        velocity: 0.00155,
        spawnRadius: 0.25,
        turbulence: 0.012,
        damping: 0.990,
        warp: 0.042,
        gate: 0.8,
        texture_name: "FireTexture2",
    },
    RedBonfire: {
        lightColor: LIGHT_COLORS.fireSubtleRed,
        scale: 0.80,
        gravity: new Float32Array([0, 0.75, 0]),
        velocity: 0.00175,
        spawnRadius: 0.25,
        turbulence: 0.013,
        damping: 0.995,
        warp: 0.045,
        gate: 0.825,
        texture_name: "RedFireTexture",
    },
    Fireplace: {
        lightColor: LIGHT_COLORS.fireSubtle,
        scale: 0.62,
        gravity: new Float32Array([0, 0.65, 0]),
        velocity: 0.00145,
        spawnRadius: 0.25,
        turbulence: 0.0105,
        damping: 0.96,
        noiseScale: new Float32Array([1.1, 2.0, 3.2]),
        scrolling: new Float32Array([0.10, 0.20, 0.32]),
        warp: 0.045,
        gate: 0.92,
        texture_name: "FireTexture2",
    },
    GreenBonfire: {
        lightColor: LIGHT_COLORS.fireSoftGreen,
        scale: 0.80,
        gravity: new Float32Array([0, 0.75, 0]),
        velocity: 0.00175,
        spawnRadius: 0.25,
        turbulence: 0.013,
        damping: 0.995,
        warp: 0.045,
        gate: 0.825,
        texture_name: "FireTexture2_Green",
    },
    BlueBonfire: {
        lightColor: LIGHT_COLORS.fireSoftBlue,
        scale: 0.80,
        gravity: new Float32Array([0, 0.75, 0]),
        velocity: 0.00175,
        spawnRadius: 0.25,
        turbulence: 0.013,
        damping: 0.995,
        warp: 0.045,
        gate: 0.825,
        texture_name: "FireTexture2_Blue",
    },
};

