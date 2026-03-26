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
        name: "Welcome to Hell",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":7,"map":"ÁBB3AA18BB7AA13BB6AA16ÁÁ10AA92BAA45BAA39ÁÁ3AA22BB2AA6BAA24ÁÁ5BB3AA11ÁÁ7BAA2BÁÁ3BÁÁ4AA18BB18AA3BB14ABB9ABB7ABB23ABB3ABAÁÁ2BB2ÁBB3ÁBB120ÁBÁÁ21BB3ÁÁ61AÁÁ201AÁÁ14$ÁÁ92BÁÁ173AA7BAA2ÁÁ19AÁÁ174AÁÁ338AÁÁ6BÁÁ24AA2BABABB18ÁÁ10AA2ÁÁ146BÁÁ60BÁÁ54ABÁÁ10AA2ÁÁ25AÁÁ42BB3ÁÁ120AÁÁ214BB6ÁÁ6BB17ÁÁ11ABÁÁ70BÁÁ5BÁÁ14BÁÁ18AÁÁ16AÁÁ103BÁBB6ÁBB5ABÁÁ79AÁÁ160AÁÁ107A"}',
        wall: "FuturisticTexture_132",
        floor: "FuturisticTexture_118",
        ceil: "FuturisticTexture_013",
        start: '[1960,5]',
        lights: '[[2653,7,"Moon52","moonlightBright"],[2230,7,"FuturisticLight_001","standardYellow"],[2572,3,"FuturisticLight_007","standardYellow"]]',
        monsters: '[[204,"Rocket"],[249,"Rocket"],[97,"Rocket"],[377,"Rocket"],[103,"Rocket"],[303,"Rocket"],[387,"Rocket"],[112,"Rocket"],[272,"Rocket"],[590,"SpaceShuttle"],[833,"SpaceShuttle"],[297,"Astro"],[308,"Astro"],[115,"Astro"],[2019,"Fighter"],[2110,"Fighter"],[1879,"Fighter"],[2119,"Fighter"]]',
        objects: '[[85,"Oil"],[167,"Oil"],[288,"Oil"],[407,"Oil"],[62,"Oil"],[140,"Oil"],[218,"Oil"],[298,"Oil"],[379,"Oil"],[423,"Oil"],[385,"Oil"],[388,"Oil"],[390,"Oil"],[270,"Oil"],[153,"Oil"],[233,"Oil"],[194,"Oil"],[196,"Oil"],[250,"Oil"],[366,"Oil"],[100,"Oil"],[337,"Oil"],[343,"Oil"],[311,"Oil"],[114,"Oil"],[792,"Oil"],[874,"Oil"],[1572,"Oil"],[1625,"Oil"],[2092,"Oil"],[2025,"Oil"],[2425,"Oil"],[2825,"Oil"],[330,"Oil"],[417,"Oil"],[231,"Oil"],[246,"WoodenCrate"],[259,"WoodenCrate"],[342,"WoodenCrate"],[349,"WoodenCrate"],[316,"WoodenCrate"]]',
    }
    ,
    2: {
        name: "Through the Hole",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":7,"map":"ÁÁ4AA3ÁÁ2AA14ÁAA4BAA13BAA14ÁAA4BAA31BB6AA10BB5AA47ÁÁ2AA21ÁAA26BAA91ÁAÁAA4ÁÁ8AA15ÁÁ7BB222AA3BAA2ÁÁ13BB6ÁÁ305$ÁÁ11AÁÁ125BB2ÁÁ2AÁÁ12AÁÁ55ABB2ÁÁ2AÁÁ15BÁÁ52AÁÁ68BAÁBÁÁ4BB4ÁÁ22AÁÁ212BÁÁ12AÁÁ114AÁÁ52BB4ÁÁ55AÁÁ98AÁÁ104BÁÁ99BÁÁ47AÁÁ48BÁÁ189BÁÁ5AA2ÁÁ29BB5ÁÁ355BB14ÁÁ2BB23ÁÁ318BB2"}',
        wall: "FuturisticTexture_123",
        floor: "FuturisticTexture_088",
        ceil: "FuturisticTexture_013",
        start: '[1960,5]',
        lights: '[[2746,3,"FuturisticLight_008","standardYellow"],[3026,3,"FuturisticLight_013","standardYellow"],[10,7,"FuturisticLight_007","standardYellowSoft"],[32,7,"FuturisticLight_006","standardYellowSoft"]]',
        monsters: '[[208,"Astro"],[91,"Astro"],[176,"Astro"],[334,"Astro"],[259,"Astro"],[340,"Astro"],[263,"Astro"],[181,"Astro"],[193,"Astro"],[348,"Astro"],[234,"AstroRed"],[144,"SpaceShuttle"],[184,"SpaceShuttle"],[224,"SpaceShuttle"],[264,"SpaceShuttle"],[304,"SpaceShuttle"],[115,"Rocket"],[195,"Rocket"],[275,"Rocket"],[395,"Rocket"],[2343,"Fighter"],[2543,"Fighter"],[2359,"Fighter"],[2519,"Fighter"]]',
        objects: '[[86,"Oil"],[165,"Oil"],[246,"Oil"],[366,"Oil"],[408,"Oil"],[288,"Oil"],[210,"Oil"],[88,"Oil"],[51,"Oil"],[132,"Oil"],[292,"Oil"],[372,"Oil"],[414,"Oil"],[295,"Oil"],[214,"Oil"],[136,"Oil"],[94,"Oil"],[57,"Oil"],[178,"Oil"],[257,"Oil"],[378,"Oil"],[420,"Oil"],[300,"Oil"],[220,"Oil"],[141,"Oil"],[60,"Oil"],[63,"Oil"],[183,"Oil"],[222,"Oil"],[303,"Oil"],[225,"Oil"],[305,"Oil"],[105,"Oil"],[425,"Oil"],[384,"Oil"],[382,"Oil"],[109,"Oil"],[190,"Oil"],[271,"Oil"],[350,"Oil"],[389,"Oil"],[112,"Oil"],[232,"Oil"],[314,"Oil"],[435,"Oil"],[155,"Oil"],[194,"Oil"],[116,"Oil"],[196,"Oil"],[276,"Oil"],[356,"Oil"],[568,"WoodenCrate"],[652,"WoodenCrate"],[730,"WoodenCrate"],[776,"WoodenCrate"],[541,"WoodenCrate"],[876,"WoodenCrate"],[756,"WoodenCrate"],[676,"WoodenCrate"],[596,"WoodenCrate"],[516,"WoodenCrate"]]',
        fires: '[[83,4,"Bonfire"],[323,4,"Bonfire"]]',
    }
    ,
    3: {
        name: "Dogfight",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":7,"map":"ÁÁ54AÁÁ28AÁÁ12AÁÁ13AÁÁ13AÁÁ67AÁÁ45AÁÁ6AÁÁ16AÁÁ3$ÁÁ20AÁÁ20AÁÁ11AÁÁ4AÁÁ18AÁÁ10AÁÁ47AÁÁ2AÁAÁÁ12AÁÁ32AÁÁ8AÁÁ2616A"}',
        wall: "FuturisticTexture_123",
        floor: "FuturisticTexture_108",
        ceil: "FuturisticTexture_013",
        start: '[1960,5]',
        lights: '[[19,7,"Moon51","moonlightBright"],[436,1,"Moon54","moonlightBright"],[403,1,"Moon58","moonlightBright"]]',
        monsters: '[[1973,"Zeppelin"],[13,"SpaceShuttle"],[180,"SpaceShuttle"],[389,"SpaceShuttle"],[76,"SpaceShuttle"],[326,"SpaceShuttle"],[127,"Rocket"],[415,"Rocket"],[224,"Rocket"],[70,"Rocket"],[355,"Rocket"],[490,"XWing"],[650,"XWing"],[810,"XWing"],[577,"XWing"],[777,"XWing"],[661,"XWing"],[1015,"XWing"],[1175,"XWing"],[1106,"XWing"],[1848,"XWing"],[2128,"XWing"],[1899,"XWing"],[2099,"XWing"],[1993,"XWing"],[2701,"XWing"],[3021,"XWing"],[2719,"Fighter"],[2919,"Fighter"],[3039,"Fighter"],[2752,"Fighter"],[2952,"Fighter"],[2865,"Fighter"],[2315,"Fighter"],[2555,"Fighter"],[2345,"Fighter"],[2505,"Fighter"],[2419,"Fighter"],[1866,"Fighter"],[2106,"Fighter"],[1436,"Fighter"],[1676,"Fighter"],[1471,"Fighter"],[1631,"Fighter"],[1504,"Fighter"],[1544,"Fighter"],[906,"Fighter"],[1306,"Fighter"],[462,"Fighter"],[862,"Fighter"],[148,"Fighter"],[308,"Fighter"],[235,"Fighter"],[212,"Fighter"],[2714,"Zeppelin"],[3034,"Zeppelin"],[583,"Zeppelin"],[1588,"Zeppelin"]]',
        objects: '[[46,"Oil"],[248,"Oil"],[132,"Oil"],[97,"Oil"],[296,"Oil"],[371,"Oil"],[342,"Oil"],[65,"Oil"],[267,"Oil"],[234,"Oil"],[358,"Oil"],[393,"Oil"]]',
    }
};