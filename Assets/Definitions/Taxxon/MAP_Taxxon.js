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
        lights: '[[2349,7,"FuturisticLight_001","standard"]]',
        monsters: '[[547,"Rocket"],[637,"Rocket"],[471,"Rocket"],[595,"Rocket"],[716,"Rocket"],[423,"Rocket"],[968,"Rocket"],[1002,"Rocket"],[1367,"Rocket"],[577,"SpaceShuttle"],[607,"SpaceShuttle"],[2489,"Fighter"],[1054,"Fighter"],[129,"Fighter"],[309,"Fighter"],[1007,"Fighter"],[1070,"Fighter"],[1299,"XWing"],[1451,"XWing"],[1369,"XWing"]]',
        objects: '[[156,"Oil"],[306,"Oil"],[66,"Oil"],[186,"Oil"],[216,"Oil"],[246,"Oil"]]',
    }
    ,
    2: {
        name: "Study",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":3,"map":"ÁBB2AA18BÁÁ2AA2BAA3ÁAA7BAA9BB2AA2BABB2AA28BB2AA36BAA5BAA38BAA30ÁÁ2AÁAA4ÁÁ3AA27ÁAA75ÁÁ3AA12BAA2BAA6BB2AA5ÁÁ3BB96ÁÁ2AÁÁ10BÁÁ6BÁBÁÁ15AÁÁ7AÁÁ76BÁÁ53$ÁÁ27BÁÁ5BÁÁ78BÁÁ10BB5ÁÁ15BB4ÁÁ4AA9BÁÁ3AÁÁ17BÁBB4ÁÁ7BÁÁ82BÁÁ25BÁÁ10BÁÁ30BB4ÁÁ103BÁÁ57BÁÁ90BB5ÁÁ4BB4ÁBÁÁ51BB4ÁÁ24BB4"}',
        wall: "GreyFloor27",
        floor: "BlackWall45",
        ceil: "GreyFloor27",
        start: '[1080,5]',
        lights: '[[885,7,"FuturisticLight_014","standard"],[891,7,"FuturisticLight_014","standard"],[915,7,"FuturisticLight_014","standard"],[1174,5,"FuturisticLight_015","standardYellowDim"]]',
    }
    ,
    3: {
        name: "Flicker test",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":3,"map":"ÁÁ4AA18BAA16ÁAA2BAA32ÁÁ3AA10BB2AA4BAA30BAA23BAA10ÁAA11BAA24ÁAA45ÁAA97ÁÁ3BB97ÁÁ2BB2ÁÁ43$ÁÁ35AA7BAA2ÁAÁÁ210BÁÁ9BÁÁ562BB2"}',
        wall: "GreyFloor27",
        floor: "BlackWall45",
        ceil: "GreyFloor27",
        start: '[1120,5]',
    }
    ,
    4: {
        name: "Flicker test",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":20,"height":11,"depth":3,"map":"ÁÁ5AA12ÁAA4ÁAA5ÁAA2BAA4ÁAA5BAA3ÁAA4BAA6ÁAA8BAA13BAA12BAA46ÁÁ3BB36ÁBB3ÁÁ29AÁÁ7BÁÁ3$ÁÁ27AA2BAA6ÁAÁÁ392BÁÁ3B"}',
        wall: "GreyFloor27",
        floor: "BlackWall45",
        ceil: "GreyFloor27",
        start: '[100,5]',
    }
};