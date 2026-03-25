/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
//Assets for CastleHaunt2 (MAzEditor dependencies removed)
"use strict";

/** MazeEditor dependencies */
LoadSheetSequences = [
    { srcName: "BrownWall64.webp", count: 12, name: "WallTile", trim: false },
    { srcName: "BlackWall64.webp", count: 2, name: "BackgroundTile", trim: false },
    { srcName: "d3-64.webp", count: 6, name: "D3", trim: false },
    { srcName: "VertiWall64.webp", count: 1, name: "VerticalWall", trim: false },
    { srcName: "HoriWall64.webp", count: 1, name: "HorizontalWall", trim: true },
    { srcName: "BlockWall64.webp", count: 1, name: "BlockWall", trim: false },
];

/** END */

LoadFonts = [
    { srcName: "PentaGram.ttf", name: "Pentagram" },
    { srcName: "CPU.ttf", name: "CPU" },
    { srcName: "Headstone.ttf", name: "Headstone" },
];

LoadTextures = [
    /** textures used by shaders */
    { srcName: "Shading/Fire_color_map_512.webp", name: "Fire_color_map" },
    { srcName: "Shading/fire_noise_512.webp", name: "Fire_noise" },

    /**wall, floor, ceil */
    { srcName: "Wall/FuturisticTexture_001.webp", name: "FuturisticTexture_001" },
    { srcName: "Wall/FuturisticTexture_002.webp", name: "FuturisticTexture_002" },
    { srcName: "Wall/FuturisticTexture_003.webp", name: "FuturisticTexture_003" },
    { srcName: "Wall/FuturisticTexture_004.webp", name: "FuturisticTexture_004" },
    { srcName: "Wall/FuturisticTexture_005.webp", name: "FuturisticTexture_005" },
    { srcName: "Wall/FuturisticTexture_006.webp", name: "FuturisticTexture_006" },
    { srcName: "Wall/FuturisticTexture_007.webp", name: "FuturisticTexture_007" },
    { srcName: "Wall/FuturisticTexture_008.webp", name: "FuturisticTexture_008" },
    { srcName: "Wall/FuturisticTexture_009.webp", name: "FuturisticTexture_009" },
    { srcName: "Wall/FuturisticTexture_010.webp", name: "FuturisticTexture_010" },
    { srcName: "Wall/FuturisticTexture_011.webp", name: "FuturisticTexture_011" },
    { srcName: "Wall/FuturisticTexture_012.webp", name: "FuturisticTexture_012" },
    { srcName: "Wall/FuturisticTexture_013.webp", name: "FuturisticTexture_013" },
    { srcName: "Wall/FuturisticTexture_014.webp", name: "FuturisticTexture_014" },
    { srcName: "Wall/FuturisticTexture_015.webp", name: "FuturisticTexture_015" },
    { srcName: "Wall/FuturisticTexture_016.webp", name: "FuturisticTexture_016" },
    { srcName: "Wall/FuturisticTexture_017.webp", name: "FuturisticTexture_017" },
    { srcName: "Wall/FuturisticTexture_018.webp", name: "FuturisticTexture_018" },
    { srcName: "Wall/FuturisticTexture_019.webp", name: "FuturisticTexture_019" },
    { srcName: "Wall/FuturisticTexture_020.webp", name: "FuturisticTexture_020" },
    { srcName: "Wall/FuturisticTexture_021.webp", name: "FuturisticTexture_021" },
    { srcName: "Wall/FuturisticTexture_022.webp", name: "FuturisticTexture_022" },
    { srcName: "Wall/FuturisticTexture_023.webp", name: "FuturisticTexture_023" },
    { srcName: "Wall/FuturisticTexture_024.webp", name: "FuturisticTexture_024" },
    { srcName: "Wall/FuturisticTexture_025.webp", name: "FuturisticTexture_025" },
    { srcName: "Wall/FuturisticTexture_026.webp", name: "FuturisticTexture_026" },
    { srcName: "Wall/FuturisticTexture_027.webp", name: "FuturisticTexture_027" },
    { srcName: "Wall/FuturisticTexture_028.webp", name: "FuturisticTexture_028" },
    { srcName: "Wall/FuturisticTexture_029.webp", name: "FuturisticTexture_029" },
    { srcName: "Wall/FuturisticTexture_030.webp", name: "FuturisticTexture_030" },
    { srcName: "Wall/FuturisticTexture_031.webp", name: "FuturisticTexture_031" },
    { srcName: "Wall/FuturisticTexture_032.webp", name: "FuturisticTexture_032" },
    { srcName: "Wall/FuturisticTexture_033.webp", name: "FuturisticTexture_033" },
    { srcName: "Wall/FuturisticTexture_034.webp", name: "FuturisticTexture_034" },
    { srcName: "Wall/FuturisticTexture_035.webp", name: "FuturisticTexture_035" },
    { srcName: "Wall/FuturisticTexture_036.webp", name: "FuturisticTexture_036" },
    { srcName: "Wall/FuturisticTexture_037.webp", name: "FuturisticTexture_037" },
    { srcName: "Wall/FuturisticTexture_038.webp", name: "FuturisticTexture_038" },
    { srcName: "Wall/FuturisticTexture_039.webp", name: "FuturisticTexture_039" },
    { srcName: "Wall/FuturisticTexture_040.webp", name: "FuturisticTexture_040" },
    { srcName: "Wall/FuturisticTexture_041.webp", name: "FuturisticTexture_041" },
    { srcName: "Wall/FuturisticTexture_042.webp", name: "FuturisticTexture_042" },
    { srcName: "Wall/FuturisticTexture_043.webp", name: "FuturisticTexture_043" },
    { srcName: "Wall/FuturisticTexture_044.webp", name: "FuturisticTexture_044" },
    { srcName: "Wall/FuturisticTexture_045.webp", name: "FuturisticTexture_045" },
    { srcName: "Wall/FuturisticTexture_046.webp", name: "FuturisticTexture_046" },
    { srcName: "Wall/FuturisticTexture_047.webp", name: "FuturisticTexture_047" },
    { srcName: "Wall/FuturisticTexture_048.webp", name: "FuturisticTexture_048" },
    { srcName: "Wall/FuturisticTexture_049.webp", name: "FuturisticTexture_049" },
    { srcName: "Wall/FuturisticTexture_050.webp", name: "FuturisticTexture_050" },
    { srcName: "Wall/FuturisticTexture_051.webp", name: "FuturisticTexture_051" },
    { srcName: "Wall/FuturisticTexture_052.webp", name: "FuturisticTexture_052" },
    { srcName: "Wall/FuturisticTexture_053.webp", name: "FuturisticTexture_053" },
    { srcName: "Wall/FuturisticTexture_054.webp", name: "FuturisticTexture_054" },
    { srcName: "Wall/FuturisticTexture_055.webp", name: "FuturisticTexture_055" },
    { srcName: "Wall/FuturisticTexture_056.webp", name: "FuturisticTexture_056" },
    { srcName: "Wall/FuturisticTexture_057.webp", name: "FuturisticTexture_057" },
    { srcName: "Wall/FuturisticTexture_058.webp", name: "FuturisticTexture_058" },
    { srcName: "Wall/FuturisticTexture_059.webp", name: "FuturisticTexture_059" },
    { srcName: "Wall/FuturisticTexture_060.webp", name: "FuturisticTexture_060" },
    { srcName: "Wall/FuturisticTexture_061.webp", name: "FuturisticTexture_061" },
    { srcName: "Wall/FuturisticTexture_062.webp", name: "FuturisticTexture_062" },
    { srcName: "Wall/FuturisticTexture_063.webp", name: "FuturisticTexture_063" },
    { srcName: "Wall/FuturisticTexture_064.webp", name: "FuturisticTexture_064" },
    { srcName: "Wall/FuturisticTexture_065.webp", name: "FuturisticTexture_065" },
    { srcName: "Wall/FuturisticTexture_066.webp", name: "FuturisticTexture_066" },
    { srcName: "Wall/FuturisticTexture_067.webp", name: "FuturisticTexture_067" },
    { srcName: "Wall/FuturisticTexture_068.webp", name: "FuturisticTexture_068" },
    { srcName: "Wall/FuturisticTexture_069.webp", name: "FuturisticTexture_069" },
    { srcName: "Wall/FuturisticTexture_070.webp", name: "FuturisticTexture_070" },
    { srcName: "Wall/FuturisticTexture_071.webp", name: "FuturisticTexture_071" },
    { srcName: "Wall/FuturisticTexture_072.webp", name: "FuturisticTexture_072" },
    { srcName: "Wall/FuturisticTexture_073.webp", name: "FuturisticTexture_073" },
    { srcName: "Wall/FuturisticTexture_074.webp", name: "FuturisticTexture_074" },
    { srcName: "Wall/FuturisticTexture_075.webp", name: "FuturisticTexture_075" },
    { srcName: "Wall/FuturisticTexture_076.webp", name: "FuturisticTexture_076" },
    { srcName: "Wall/FuturisticTexture_077.webp", name: "FuturisticTexture_077" },
    { srcName: "Wall/FuturisticTexture_078.webp", name: "FuturisticTexture_078" },
    { srcName: "Wall/FuturisticTexture_079.webp", name: "FuturisticTexture_079" },
    { srcName: "Wall/FuturisticTexture_080.webp", name: "FuturisticTexture_080" },
    { srcName: "Wall/FuturisticTexture_081.webp", name: "FuturisticTexture_081" },
    { srcName: "Wall/FuturisticTexture_082.webp", name: "FuturisticTexture_082" },
    { srcName: "Wall/FuturisticTexture_083.webp", name: "FuturisticTexture_083" },
    { srcName: "Wall/FuturisticTexture_084.webp", name: "FuturisticTexture_084" },
    { srcName: "Wall/FuturisticTexture_085.webp", name: "FuturisticTexture_085" },
    { srcName: "Wall/FuturisticTexture_086.webp", name: "FuturisticTexture_086" },
    { srcName: "Wall/FuturisticTexture_087.webp", name: "FuturisticTexture_087" },
    { srcName: "Wall/FuturisticTexture_088.webp", name: "FuturisticTexture_088" },
    { srcName: "Wall/FuturisticTexture_089.webp", name: "FuturisticTexture_089" },
    { srcName: "Wall/FuturisticTexture_090.webp", name: "FuturisticTexture_090" },
    { srcName: "Wall/FuturisticTexture_091.webp", name: "FuturisticTexture_091" },
    { srcName: "Wall/FuturisticTexture_092.webp", name: "FuturisticTexture_092" },
    { srcName: "Wall/FuturisticTexture_093.webp", name: "FuturisticTexture_093" },
    { srcName: "Wall/FuturisticTexture_094.webp", name: "FuturisticTexture_094" },
    { srcName: "Wall/FuturisticTexture_095.webp", name: "FuturisticTexture_095" },
    { srcName: "Wall/FuturisticTexture_096.webp", name: "FuturisticTexture_096" },
    { srcName: "Wall/FuturisticTexture_097.webp", name: "FuturisticTexture_097" },
    { srcName: "Wall/FuturisticTexture_098.webp", name: "FuturisticTexture_098" },
    { srcName: "Wall/FuturisticTexture_099.webp", name: "FuturisticTexture_099" },
    { srcName: "Wall/FuturisticTexture_100.webp", name: "FuturisticTexture_100" },
    { srcName: "Wall/FuturisticTexture_101.webp", name: "FuturisticTexture_101" },
    { srcName: "Wall/FuturisticTexture_102.webp", name: "FuturisticTexture_102" },
    { srcName: "Wall/FuturisticTexture_103.webp", name: "FuturisticTexture_103" },
    { srcName: "Wall/FuturisticTexture_104.webp", name: "FuturisticTexture_104" },
    { srcName: "Wall/FuturisticTexture_105.webp", name: "FuturisticTexture_105" },
    { srcName: "Wall/FuturisticTexture_106.webp", name: "FuturisticTexture_106" },
    { srcName: "Wall/FuturisticTexture_107.webp", name: "FuturisticTexture_107" },
    { srcName: "Wall/FuturisticTexture_108.webp", name: "FuturisticTexture_108" },
    { srcName: "Wall/FuturisticTexture_109.webp", name: "FuturisticTexture_109" },
    { srcName: "Wall/FuturisticTexture_110.webp", name: "FuturisticTexture_110" },
    { srcName: "Wall/FuturisticTexture_111.webp", name: "FuturisticTexture_111" },
    { srcName: "Wall/FuturisticTexture_112.webp", name: "FuturisticTexture_112" },
    { srcName: "Wall/FuturisticTexture_113.webp", name: "FuturisticTexture_113" },
    { srcName: "Wall/FuturisticTexture_114.webp", name: "FuturisticTexture_114" },
    { srcName: "Wall/FuturisticTexture_115.webp", name: "FuturisticTexture_115" },
    { srcName: "Wall/FuturisticTexture_116.webp", name: "FuturisticTexture_116" },
    { srcName: "Wall/FuturisticTexture_117.webp", name: "FuturisticTexture_117" },
    { srcName: "Wall/FuturisticTexture_118.webp", name: "FuturisticTexture_118" },
    { srcName: "Wall/FuturisticTexture_119.webp", name: "FuturisticTexture_119" },
    { srcName: "Wall/FuturisticTexture_120.webp", name: "FuturisticTexture_120" },
    { srcName: "Wall/FuturisticTexture_121.webp", name: "FuturisticTexture_121" },
    { srcName: "Wall/FuturisticTexture_122.webp", name: "FuturisticTexture_122" },
    { srcName: "Wall/FuturisticTexture_123.webp", name: "FuturisticTexture_123" },
    { srcName: "Wall/FuturisticTexture_124.webp", name: "FuturisticTexture_124" },
    { srcName: "Wall/FuturisticTexture_125.webp", name: "FuturisticTexture_125" },
    { srcName: "Wall/FuturisticTexture_126.webp", name: "FuturisticTexture_126" },
    { srcName: "Wall/FuturisticTexture_127.webp", name: "FuturisticTexture_127" },
    { srcName: "Wall/FuturisticTexture_128.webp", name: "FuturisticTexture_128" },
    { srcName: "Wall/FuturisticTexture_129.webp", name: "FuturisticTexture_129" },
    { srcName: "Wall/FuturisticTexture_130.webp", name: "FuturisticTexture_130" },
    { srcName: "Wall/FuturisticTexture_131.webp", name: "FuturisticTexture_131" },
    { srcName: "Wall/FuturisticTexture_132.webp", name: "FuturisticTexture_132" },

    //objects
    { srcName: "ObjectTextures/BlueMetal.webp", name: "BlueMetal" },
    { srcName: "ObjectTextures/Red.webp", name: "Red" },
    { srcName: "ObjectTextures/oildrum_basecolor.jpg", name: "OilDrum" },
    { srcName: "ObjectTextures/AstroRed.jpg", name: "AstroRed" },
    { srcName: "ObjectTextures/WoodenCrateTexture58.webp", name: "WoodenCrateTexture58" },


    //title
    { srcName: "Title/Taxxon_title_768.webp", name: "Title" },
    { srcName: "Title/DarkNight.webp", name: "DarkNight" },

    //explosions
    { srcName: "ObjectTextures/Explosion2.webp", name: "Explosion2" },
    //{ srcName: "ObjectTextures/GreenMetal.webp", name: "GreenMetal" },
    //{ srcName: "ObjectTextures/ScrapedMetal.webp", name: "ScrapedMetal" },
    { srcName: "ObjectTextures/Explosion3.webp", name: "Explosion" },
    { srcName: "ObjectTextures/Tile.webp", name: "Tile" },
    { srcName: "ObjectTextures/WoodTexture.webp", name: "WoodTexture" },
    { srcName: "ObjectTextures/RedLiquid.jpg", name: "RedLiquid" },
    { srcName: "ObjectTextures/FireTexture.webp", name: "FireTexture" },
    { srcName: "ObjectTextures/FireTexture2.webp", name: "FireTexture2" },
    { srcName: "ObjectTextures/FireTexture2_Blue.webp", name: "FireTexture2_Blue" },
    { srcName: "ObjectTextures/FireTexture2_Green.webp", name: "FireTexture2_Green" },
    { srcName: "ObjectTextures/RedFireTexture.webp", name: "RedFireTexture" },

];

LoadAudio = [
    { srcName: "LaughingSkull - Ex Nihilo.mp3", name: "Title" },

    //action sounds
    { srcName: "Explosion1.mp3", name: "Explosion" },
    { srcName: "Alarm.mp3", name: "Alarm" },
    { srcName: "BulletThud.mp3", name: "BulletThud" },

];

LoadShaders = [
    'vShader_1_2.glsl', 'fShader_1_3.glsl', 'pick_vShader_1_0.glsl', 'pick_fShader_1_0.glsl',
    'particle_render_fShader_1_1.glsl', 'particle_render_vShader_1_0.glsl', 'particle_transform_fShader_1_0.glsl', 'particle_transform_vShader_1_1.glsl',
    'model_vShader_1_2.glsl', 'fire_transform_vShader_1_0.glsl', 'fire_render_fShader_1_0.glsl',
    'shadow_vShader_1_0.glsl', 'shadow_fShader_1_0.glsl'
];

LoadObjects = [
    "Oil.obj", "Bullet.obj", "crateFragile.obj",
];

LoadModels = [
    "Taxxon.gltf", "Fighter.gltf", "Rocket.gltf", "SpaceShuttle.gltf", "XWing.gltf", "Astro.gltf",
];

LoadSprites = [
    //reserved

    //intro

    // frescoes - entities

    //action movables

    //triggers

    //UI, skills
    { srcName: "UI/wavyL.webp", name: "wavyL" },
    { srcName: "UI/wavyR.webp", name: "wavyR" },
    { srcName: "UI/LineBottom.webp", name: "LineBottom" },
    { srcName: "UI/LineTop.webp", name: "LineTop" },
    { srcName: "UI/RedSpaceShip.png", name: "Lives" },
    { srcName: "UI/OilDrum.png", name: "OilDrum" },

    //lights
    { srcName: "Lights/FuturisticLight_001.webp", name: "FuturisticLight_001" },
    { srcName: "Lights/FuturisticLight_002.webp", name: "FuturisticLight_002" },
    { srcName: "Lights/FuturisticLight_003.webp", name: "FuturisticLight_003" },
    { srcName: "Lights/FuturisticLight_004.webp", name: "FuturisticLight_004" },
    { srcName: "Lights/FuturisticLight_005.webp", name: "FuturisticLight_005" },
    { srcName: "Lights/FuturisticLight_006.webp", name: "FuturisticLight_006" },
    { srcName: "Lights/FuturisticLight_007.webp", name: "FuturisticLight_007" },
    { srcName: "Lights/FuturisticLight_008.webp", name: "FuturisticLight_008" },
    { srcName: "Lights/FuturisticLight_009.webp", name: "FuturisticLight_009" },
    { srcName: "Lights/FuturisticLight_010.webp", name: "FuturisticLight_010" },
    { srcName: "Lights/FuturisticLight_011.webp", name: "FuturisticLight_011" },
    { srcName: "Lights/FuturisticLight_012.webp", name: "FuturisticLight_012" },
    { srcName: "Lights/FuturisticLight_013.webp", name: "FuturisticLight_013" },
    { srcName: "Lights/FuturisticLight_014.webp", name: "FuturisticLight_014" },
    { srcName: "Lights/FuturisticLight_015.webp", name: "FuturisticLight_015" },
    { srcName: "Lights/FuturisticLight_016.webp", name: "FuturisticLight_016" },

    { srcName: "Lights/Moon50.webp", name: "Moon50" },
    { srcName: "Lights/Moon51.webp", name: "Moon51" },
    { srcName: "Lights/Moon52.webp", name: "Moon52" },
    { srcName: "Lights/Moon54.webp", name: "Moon54" },
    { srcName: "Lights/Moon55.webp", name: "Moon55" },
    { srcName: "Lights/Moon56.webp", name: "Moon56" },
    { srcName: "Lights/Moon58.webp", name: "Moon58" },
    { srcName: "Lights/Moon59.webp", name: "Moon59" },
    { srcName: "Lights/Moon60.webp", name: "Moon60" },
    { srcName: "Lights/Moon62.webp", name: "Moon62" },
    { srcName: "Lights/Moon63.webp", name: "Moon63" },
];

console.log("%cAssets for CastleHaunt2 ready.", "color: orange");