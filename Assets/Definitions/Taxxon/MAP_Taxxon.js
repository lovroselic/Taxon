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
        data: '{"width":"30","height":"13","depth":7,"map":"ÁÁ2AA9ÁÁ4AA7BAA27ÁÁ2AA9ÁÁ2AA8ÁAA10ÁÁ11AA26BABAA51ÁÁ5AA15ÁAA90ÁAA4BAA4BB3AÁÁ2AA5BB2AA2BB11AA7ÁAA10BB142AA11BB4AA2BB4AA4ÁÁ7BB156ABB31ÁÁ2BB6ÁÁ22AA3ÁÁ4AÁÁ32AA5ÁÁ2AA2ÁÁ8AA4ÁÁ2BÁÁ3$AÁÁ32BÁÁ120BÁBÁÁ23AA2ÁÁ8AA2ÁÁ135AA2ÁÁ63AÁÁ88BÁÁ22AA4ÁÁ218AÁÁ672BB5ÁÁ48BÁÁ24BB4ÁÁ36AÁÁ3BÁÁ25BÁÁ99AÁÁ282BB3"}',
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