/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

"use strict";
console.log("%cMAP for HTH loaded.", "color: #888");
/**
 * entry texts
 */


/** Map definitions */
const MAP = {
    1: {
        name: "Study level",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"30","height":"13","depth":7,"map":"ÁÁ2AA9ÁÁ5AA43ÁÁ2AA25BABAA23ÁÁ4AA47BAA4BB3AA5BB11AA3BB124AA11BB8AA4ÁÁ7BB120ÁBB6ÁBB45ÁBB38ÁÁ6BÁÁ2BÁÁ40AA2BAA9$AÁÁ384BÁÁ1047BB6ÁÁ56BÁÁ26BB5ÁÁ43BÁÁ4BÁÁ30BÁÁ124BÁÁ376BB4"}',
        wall: "BlackWall45",
        floor: "GreyFloor27",
        ceil: "GreyFloor27",
        start: '[1350,5]',
        lights: '[[2349,7,"DuaLLantern_029","standard"]]',
    }
    ,
    2: {
        name: "Study level 2 ",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"30","height":"13","depth":7,"map":"ÁÁ11AA100ÁAA4ÁAA78ÁÁ2AA138ÁÁ7BB189ÁÁ11AA2ÁÁ10AA4BAA7$ÁÁ5AÁÁ2142BÁÁ10BB5"}',
        wall: "BlackWall45",
        floor: "GreyFloor27",
        ceil: "GreyFloor27",
        start: '[1770,5]',
    }
    ,
    3: {
        name: "Study level 3",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"30","height":"13","depth":7,"map":"ÁÁ11AA100BAA4BAA78ÁÁ2AA140ÁÁ7BB189ÁÁ45AA4BAA7$ÁÁ5AÁÁ1266BB6ÁÁ48BÁÁ22BB5ÁÁ780BB6"}',
        wall: "BlackWall45",
        floor: "GreyFloor27",
        ceil: "GreyFloor27",
        start: '[1770,5]',
    }
};