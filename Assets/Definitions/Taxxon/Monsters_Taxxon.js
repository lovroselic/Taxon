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

const COMMON_ITEM_TYPE = {
    Bullet: {
        name: "Bullet",
        category: 'missile',
        element: "Bullet",
        scale: 1.7 / 2 ** 7,
        texture: "Explosion2",
        moveSpeed: 8.0,
        material: MATERIAL.standard,
        lightColor: "#000000",
        explosionType: FloorDust,
    },
};

const INTERACTION_OBJECT = {
    Oil: {
        name: "Oil",
        score: 10,
        category: "fuel",
        fuel: 1,          // barrel
        element: "OIL",
        scale: 1.0 / 2 ** 1,
        glueToFloor: true,
        texture: "OilDrum",
        material: MATERIAL.standard,
        explosionType: ParticleExplosion,
    },
};

const HERO_TYPE = {
    Taxxon: {
        name: "Taxxon",
        model: "SpaceShip",
        scale: 1.4 / 2 ** 5,
        rotateToNorth: Math.PI,
        material: MATERIAL.redShine,
        moveSpeed: 2.0
    }
};

const MONSTER_TYPE = {
    Rocket: {
        name: "Rocket",
        model: "Rocket",
        scale: 1.5 / 2 ** 2,
        rotateToNorth: Math.PI / 2,
        midHeight: 0.0, //
        fly: 0.001,
        flier: true,
        score: 100, 
        deathType: "ParticleExplosion",
        behaviourArguments: [Infinity, ["immobile"], 13, ["ascent"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
    },
    SpaceShuttle: {
        name: "SpaceShuttle",
        model: "SpaceShuttle",
        scale: 1.3 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.0, //
        fly: 0.001,
        flier: true,
        score: 50, 
        deathType: "ParticleExplosion",
        behaviourArguments: [Infinity, ["immobile"], 12, ["ascent"]],
        moveSpeed: 0.7,
        material: MATERIAL.standard,
    },
    Fighter: {
        name: "Fighter",
        model: "Fighter",
        scale: 1.8 / 2 ** 9,
        rotateToNorth: 0,
        midHeight: 0.0, //
        fly: 0.001,
        flier: true,
        shooter: true,
        caster: false,
        score: 200, 
        deathType: "ParticleExplosion",
        behaviourArguments: [Infinity, ["immobile"], 40, ["interceptor"]],
        shootDistance: 12,
        moveSpeed: 2.0,
        material: MATERIAL.standard,
        preventRotation: true,
    },
    XWing: {
        name: "XWing",
        model: "XWing",
        scale: 1.5 / 2 ** 2,
        rotateToNorth: 3 * Math.PI / 2,
        midHeight: 0.0, //
        fly: 0.001,
        flier: true,
        shooter: true,
        caster: false,
        score: 300, 
        deathType: "ParticleExplosion",
        behaviourArguments: [Infinity, ["immobile"], 40, ["interceptor"]],
        shootDistance: 9,
        moveSpeed: 3.0,
        material: MATERIAL.standard,
        preventRotation: true,
    },
};

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

