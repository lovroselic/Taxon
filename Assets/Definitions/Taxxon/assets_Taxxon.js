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
    { srcName: "Wall/FuturisticTexture_012.webp", name: "FuturisticTexture_012" },
    { srcName: "Wall/FuturisticTexture_013.webp", name: "FuturisticTexture_013" },
    { srcName: "Wall/FuturisticTexture_019.webp", name: "FuturisticTexture_019" },
    { srcName: "Wall/FuturisticTexture_023.webp", name: "FuturisticTexture_023" },
    { srcName: "Wall/FuturisticTexture_044.webp", name: "FuturisticTexture_044" },
    { srcName: "Wall/FuturisticTexture_046.webp", name: "FuturisticTexture_046" },
    { srcName: "Wall/FuturisticTexture_056.webp", name: "FuturisticTexture_056" },
    { srcName: "Wall/FuturisticTexture_065.webp", name: "FuturisticTexture_065" },
    { srcName: "Wall/FuturisticTexture_088.webp", name: "FuturisticTexture_088" },
    { srcName: "Wall/FuturisticTexture_093.webp", name: "FuturisticTexture_093" },
    { srcName: "Wall/FuturisticTexture_095.webp", name: "FuturisticTexture_095" },
    { srcName: "Wall/FuturisticTexture_101.webp", name: "FuturisticTexture_101" },
    { srcName: "Wall/FuturisticTexture_107.webp", name: "FuturisticTexture_107" },
    { srcName: "Wall/FuturisticTexture_108.webp", name: "FuturisticTexture_108" },
    { srcName: "Wall/FuturisticTexture_109.webp", name: "FuturisticTexture_109" },
    { srcName: "Wall/FuturisticTexture_110.webp", name: "FuturisticTexture_110" },
    { srcName: "Wall/FuturisticTexture_114.webp", name: "FuturisticTexture_114" },
    { srcName: "Wall/FuturisticTexture_115.webp", name: "FuturisticTexture_115" },
    { srcName: "Wall/FuturisticTexture_118.webp", name: "FuturisticTexture_118" },
    { srcName: "Wall/FuturisticTexture_119.webp", name: "FuturisticTexture_119" },
    { srcName: "Wall/FuturisticTexture_123.webp", name: "FuturisticTexture_123" },
    { srcName: "Wall/FuturisticTexture_124.webp", name: "FuturisticTexture_124" },
    { srcName: "Wall/FuturisticTexture_125.webp", name: "FuturisticTexture_125" },
    { srcName: "Wall/FuturisticTexture_126.webp", name: "FuturisticTexture_126" },
    { srcName: "Wall/FuturisticTexture_127.webp", name: "FuturisticTexture_127" },
    { srcName: "Wall/FuturisticTexture_129.webp", name: "FuturisticTexture_129" },
    { srcName: "Wall/FuturisticTexture_131.webp", name: "FuturisticTexture_131" },
    { srcName: "Wall/FuturisticTexture_132.webp", name: "FuturisticTexture_132" },
    { srcName: "Wall/Sand1.jpg", name: "Sand1" },
    { srcName: "Wall/Sand11.jpg", name: "Sand11" },

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
    { srcName: "ObjectTextures/Explosion3.webp", name: "Explosion" },
    { srcName: "ObjectTextures/Tile.webp", name: "Tile" },
    { srcName: "ObjectTextures/WoodTexture.webp", name: "WoodTexture" },
    { srcName: "ObjectTextures/RedLiquid.jpg", name: "RedLiquid" },
    { srcName: "ObjectTextures/FireTexture.webp", name: "FireTexture" },
    { srcName: "ObjectTextures/FireTexture2.webp", name: "FireTexture2" },
    { srcName: "ObjectTextures/FireTexture2_Blue.webp", name: "FireTexture2_Blue" },
    { srcName: "ObjectTextures/FireTexture2_Green.webp", name: "FireTexture2_Green" },
    { srcName: "ObjectTextures/RedFireTexture.webp", name: "RedFireTexture" },
    { srcName: "ObjectTextures/BluBallTexture.webp", name: "BluBallTexture" },
];

LoadAudio = [
    { srcName: "LaughingSkull - Ex Nihilo.mp3", name: "Title" },

    //action sounds
    { srcName: "Explosion1.mp3", name: "Explosion" },
    { srcName: "Alarm.mp3", name: "Alarm" },
    { srcName: "BulletThud.mp3", name: "BulletThud" },
    { srcName: "ExtraLife.mp3", name: "ExtraLife" },
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
    "Taxxon.gltf", "Fighter.gltf", "Rocket.gltf", "SpaceShuttle.gltf", "XWing.gltf", "Astro.gltf", "Zeppelin.gltf",
    "Balloon.gltf", "Tie.gltf", "Tank.gltf", "Tank2.gltf", "StarDestroyer.gltf",
];

LoadSprites = [

    { srcName: "EntityPictures/TaxxonEnd.webp", name: "WinPic" },

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
    { srcName: "Lights/FuturisticLight_005.webp", name: "FuturisticLight_005" },
    { srcName: "Lights/FuturisticLight_006.webp", name: "FuturisticLight_006" },
    { srcName: "Lights/FuturisticLight_007.webp", name: "FuturisticLight_007" },
    { srcName: "Lights/FuturisticLight_008.webp", name: "FuturisticLight_008" },
    { srcName: "Lights/FuturisticLight_009.webp", name: "FuturisticLight_009" },
    { srcName: "Lights/FuturisticLight_010.webp", name: "FuturisticLight_010" },
    { srcName: "Lights/FuturisticLight_011.webp", name: "FuturisticLight_011" },
    { srcName: "Lights/FuturisticLight_012.webp", name: "FuturisticLight_012" },
    { srcName: "Lights/FuturisticLight_013.webp", name: "FuturisticLight_013" },
    { srcName: "Lights/FuturisticLight_015.webp", name: "FuturisticLight_015" },
    { srcName: "Lights/FuturisticLight_016.webp", name: "FuturisticLight_016" },

    { srcName: "Lights/Moon50.webp", name: "Moon50" },
    { srcName: "Lights/Moon51.webp", name: "Moon51" },
    { srcName: "Lights/Moon52.webp", name: "Moon52" },
    { srcName: "Lights/Moon54.webp", name: "Moon54" },
    { srcName: "Lights/Moon55.webp", name: "Moon55" },
    { srcName: "Lights/Moon58.webp", name: "Moon58" },
    { srcName: "Lights/Moon62.webp", name: "Moon62" },
];

console.log("%cAssets for CastleHaunt2 ready.", "color: orange");