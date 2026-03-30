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
    ,
    4: {
        name: "Give Up",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":7,"map":"ÁÁ2AA10ÁÁ2AA4BAA4BAA5BAA25BAA8ÁAA8ÁAA4ÁÁ2AA2BAA3BB4AA17BAA15BAA42ÁAA6BB2AA32ÁAA11BB2AA18ÁAA16ÁÁ2AÁAA11ÁAA26ÁÁ2AA4ÁAA13ÁBB3ÁÁ8AA2ÁAÁÁ5ABB2AA6BB2AA2BB3AA2BB7ABABAA3BB2AA2ÁÁ7BB210ÁÁ2BÁBB5ÁBB12ÁABAA2BAA2BAA4ÁBÁAÁÁ22BB6ÁÁ37BÁÁ221BÁÁ32$ÁÁ81BÁAÁÁ7BÁÁ91BB2ÁÁ10BÁÁ90BB6ÁÁ2ABB2ÁÁ2BÁÁ12BB6ÁÁ73BÁÁ32BÁÁ47BÁÁ83BÁÁ41AÁÁ73AÁÁ7AÁÁ40BÁÁ27BÁÁ2ABÁÁ4AÁÁ2BÁBB3AÁÁ6ABAÁÁ14AÁÁ8BÁÁ152AÁÁ39AÁÁ18BB2ÁÁ7BB2ÁÁ88BÁÁ50BÁÁ8BB4ÁÁ17BÁÁ13AÁÁ15BÁÁ4BÁAÁÁ3BB2ÁÁ8AÁÁ35AÁÁ42AÁÁ74AÁÁ31BB2ÁÁ117BB3ÁÁ8BB3ÁÁ376BAA2BB15ÁBB3ABB9ÁÁ159B"}',
        wall: "FuturisticTexture_115",
        floor: "FuturisticTexture_109",
        ceil: "FuturisticTexture_095",
        start: '[1960,5]',
        lights: '[[1765,7,"FuturisticLight_001","standardYellow"],[1790,7,"FuturisticLight_008","standardYellow"],[1972,5,"FuturisticLight_016","standardYellow"]]',
        monsters: '[[218,"Balloon"],[2727,"Zeppelin"],[3009,"Zeppelin"],[2740,"Zeppelin"],[3025,"Zeppelin"],[2793,"Zeppelin"],[2879,"Zeppelin"],[205,"Astro"],[289,"Astro"],[133,"Astro"],[301,"Astro"],[307,"Astro"],[194,"Astro"],[48,"AstroRed"],[286,"AstroRed"],[216,"AstroRed"],[60,"AstroRed"],[380,"AstroRed"],[109,"AstroRed"],[390,"AstroRed"],[114,"AstroRed"],[846,"SpaceShuttle"],[814,"SpaceShuttle"],[149,"SpaceShuttle"],[393,"SpaceShuttle"],[179,"SpaceShuttle"],[209,"SpaceShuttle"],[126,"Rocket"],[54,"Rocket"],[304,"Rocket"],[195,"Rocket"],[235,"Rocket"],[275,"Rocket"],[1409,"XWing"],[1492,"XWing"],[1616,"XWing"],[1701,"XWing"],[2020,"Fighter"],[1984,"Fighter"],[1910,"Fighter"],[1994,"Fighter"],[2430,"Zeppelin"]]',
        objects: '[[203,"Oil"],[124,"Oil"],[86,"Oil"],[206,"Oil"],[364,"Oil"],[328,"Oil"],[370,"Oil"],[170,"Oil"],[92,"Oil"],[174,"Oil"],[294,"Oil"],[99,"Oil"],[299,"Oil"],[221,"Oil"],[337,"Oil"],[382,"Oil"],[187,"Oil"],[309,"Oil"],[112,"Oil"],[231,"Oil"],[353,"Oil"],[569,"WoodenCrate"],[502,"WoodenCrate"],[543,"WoodenCrate"],[704,"WoodenCrate"],[852,"WoodenCrate"],[806,"WoodenCrate"],[257,"WoodenCrate"],[142,"WoodenCrate"],[427,"WoodenCrate"],[151,"WoodenCrate"]]',
        fires: '[[384,4,"GreenBonfire"],[424,4,"GreenBonfire"],[175,4,"RedBonfire"],[255,4,"RedBonfire"]]',
    }
    ,
    5: {
        name: "Reinforcements",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":7,"map":"ÁÁ4AA9ÁAA4BB4AA4ÁÁ6AA14BB3AA48BB3AA57ÁÁ10AA40ÁÁ2AA10ÁÁ10AA64ÁÁ4AA4ÁAA5ÁÁ3AÁÁ10AA20ÁÁ7BB78AA3BB27AA3BB23AA4BB23AA6BB247AA4BB24ABB11AA9BB17ABB20AA9BB65ÁÁ6BB33ÁÁ317$ÁÁ287BB10ÁÁ30BB4ÁAÁÁ53BB3ÁÁ273BÁÁ6BB2ÁÁ29BB30AA3BAA2ÁÁ12BB2ÁÁ69BB4ÁÁ30BB6ÁÁ450BB4ÁÁ36BB10ÁÁ16BB3ÁBB2ÁÁ3BÁÁ115BÁÁ61BÁÁ32AA4ÁÁ28BB5ÁBB8ÁÁ159B"}',
        wall: "FuturisticTexture_101",
        floor: "FuturisticTexture_119",
        ceil: "FuturisticTexture_044",
        start: '[1960,5]',
        lights: '[[13,7,"FuturisticLight_010","standardYellowSoft"],[906,7,"FuturisticLight_012","standardYellowSoft"],[1795,7,"FuturisticLight_015","standardYellowSoft"]]',
        monsters: '[[168,"Rocket"],[248,"Rocket"],[134,"Balloon"],[2421,"Tie"],[2343,"Tie"],[2265,"Tie"],[2586,"Tie"],[2866,"Tie"],[2907,"Tie"],[2789,"Tie"],[2991,"Tie"],[2713,"Tie"],[3075,"Tie"],[1911,"XWing"],[2071,"XWing"],[1992,"XWing"],[2435,"Fighter"],[2797,"Fighter"],[3037,"Fighter"],[2879,"Fighter"],[59,"AstroRed"],[215,"AstroRed"],[412,"AstroRed"],[778,"AstroRed"],[864,"AstroRed"],[982,"AstroRed"],[1066,"AstroRed"],[1111,"AstroRed"],[1876,"AstroRed"],[2156,"AstroRed"],[2337,"Zeppelin"],[2548,"Zeppelin"],[2876,"Zeppelin"],[256,"SpaceShuttle"],[373,"SpaceShuttle"],[658,"SpaceShuttle"],[775,"SpaceShuttle"],[1061,"SpaceShuttle"],[1141,"SpaceShuttle"],[1553,"SpaceShuttle"]]',
        objects: '[[43,"Oil"],[84,"Oil"],[125,"Oil"],[164,"Oil"],[203,"Oil"],[245,"Oil"],[284,"Oil"],[325,"Oil"],[363,"Oil"],[404,"Oil"],[131,"Oil"],[211,"Oil"],[176,"Oil"],[98,"Oil"],[333,"Oil"],[370,"Oil"],[816,"Oil"],[738,"Oil"],[540,"Oil"],[660,"Oil"],[820,"Oil"],[784,"WoodenCrate"],[826,"WoodenCrate"],[749,"WoodenCrate"],[870,"WoodenCrate"],[1021,"WoodenCrate"],[984,"WoodenCrate"],[1104,"WoodenCrate"],[1148,"WoodenCrate"],[1272,"WoodenCrate"],[991,"WoodenCrate"],[1393,"WoodenCrate"],[1513,"WoodenCrate"],[1633,"WoodenCrate"],[1713,"WoodenCrate"],[1874,"WoodenCrate"],[1995,"WoodenCrate"],[2115,"WoodenCrate"],[2154,"WoodenCrate"],[49,"WoodenCrate"]]',
        fires: '[[166,4,"RedBonfire"],[246,4,"RedBonfire"]]',
    }
    ,
    6: {
        name: "Halt and Catch Fire",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"40","height":"11","depth":7,"map":"ÁBB2AA24BB2AA9BAA11BAA2BB2AA46ÁAA5BAA3BB3AA7ÁÁ2BABB2AA5ÁAA7BAA4ÁAA18BAÁAA2BAA2BAA7BB3AA37BAA3BAA5BAA44BAA9ÁAA17ÁBÁBAA9ÁAÁÁ5AA2ÁAÁÁ5AA2ÁÁ11BB4ÁÁ4BÁÁ3AA2BB4AÁAA4BB54AA2BB3AA4BB3AA3ÁÁ7BB224ÁÁ5BB2ÁÁ3BÁÁ19BB2ÁÁ8AÁÁ3AÁÁ39BB2ÁÁ250BÁÁ4BÁÁ8AÁÁ27$ÁÁ6BÁÁ144BÁÁ51AÁÁ6AÁÁ62BÁÁ69BÁBAA3ÁAA5ÁAÁBB2ABÁÁ8BÁÁ24BÁÁ2BB19ÁÁ3BÁÁ17BÁÁ2BÁÁ17AÁÁ7AÁÁ29BÁÁ18BÁBÁÁ4AÁÁ2AÁÁ7AÁBÁÁ5BÁÁ21BÁÁ37AÁÁ125AÁÁ32BÁÁ2BÁAA2ÁÁ88AÁÁ148AÁÁ20AÁÁ63AÁÁ56AÁÁ102BÁÁ5AÁÁ2BÁÁ49AÁÁ27BAÁÁ125AÁÁ41AÁAÁÁ91AÁÁ133AA2ÁÁ89BÁBÁBB17ÁÁ163ABABB21"}',
        wall: "FuturisticTexture_114",
        floor: "FuturisticTexture_124",
        ceil: "FuturisticTexture_044",
        start: '[1960,5]',
        lights: '[[2436,3,"FuturisticLight_001","standard2"]]',
        monsters: '[[1012,"Rocket"],[1217,"Rocket"],[1104,"Rocket"],[1269,"Rocket"],[89,"SpaceShuttle"],[330,"SpaceShuttle"],[217,"SpaceShuttle"],[383,"SpaceShuttle"],[107,"SpaceShuttle"],[316,"SpaceShuttle"],[196,"SpaceShuttle"],[1493,"XWing"],[1613,"XWing"],[1416,"XWing"],[1696,"XWing"],[1898,"Tie"],[2098,"Tie"],[1861,"Tie"],[2142,"Tie"],[1828,"Tie"],[2188,"Tie"],[2311,"Fighter"],[2431,"Fighter"],[2511,"Fighter"],[2631,"Fighter"],[2354,"Fighter"],[2594,"Fighter"],[140,"Balloon"],[2694,"Zeppelin"],[3062,"Zeppelin"],[2792,"Zeppelin"]]',
        objects: '[[286,"Oil"],[209,"Oil"],[254,"Oil"],[415,"Oil"],[57,"Oil"],[407,"Oil"],[221,"Oil"],[102,"Oil"],[109,"Oil"],[234,"Oil"],[116,"Oil"],[385,"Oil"],[392,"Oil"],[613,"Oil"],[536,"Oil"],[772,"Oil"],[736,"Oil"],[819,"Oil"],[704,"Oil"],[627,"Oil"],[710,"Oil"],[1047,"WoodenCrate"],[1057,"WoodenCrate"],[1252,"WoodenCrate"],[1181,"WoodenCrate"],[1151,"WoodenCrate"],[994,"WoodenCrate"],[1275,"WoodenCrate"],[963,"Oil"],[1043,"Oil"],[1123,"Oil"],[1203,"Oil"],[1283,"Oil"],[156,"WoodenCrate"],[236,"WoodenCrate"],[356,"WoodenCrate"],[631,"WoodenCrate"],[571,"Oil"],[624,"Oil"],[53,"Oil"],[305,"Oil"],[426,"Oil"],[154,"Oil"]]',
    }
};