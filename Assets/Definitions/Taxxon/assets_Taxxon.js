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
    { srcName: "Wall/BlackWall45.webp", name: "BlackWall45" },
    { srcName: "Wall/GreyFloor27.webp", name: "GreyFloor27" },

    //objects
    { srcName: "ObjectTextures/BlueMetal.webp", name: "BlueMetal" },
    { srcName: "ObjectTextures/Red.webp", name: "Red" },

    //title
    { srcName: "Title/Taxxon_title_768.webp", name: "Title" },
    { srcName: "Title/DarkNight.webp", name: "DarkNight" },

    //explosions
    { srcName: "ObjectTextures/Explosion2.webp", name: "Explosion2" },

];

LoadAudio = [
    { srcName: "LaughingSkull - Ex Nihilo.mp3", name: "Title" },

    //action sounds
    { srcName: "Explosion1.mp3", name: "Explosion" },

];

LoadShaders = [
    'vShader_1_2.glsl', 'fShader_1_3.glsl', 'pick_vShader_1_0.glsl', 'pick_fShader_1_0.glsl',
    'particle_render_fShader_1_1.glsl', 'particle_render_vShader_1_0.glsl', 'particle_transform_fShader_1_0.glsl', 'particle_transform_vShader_1_1.glsl',
    'model_vShader_1_2.glsl', 'fire_transform_vShader_1_0.glsl', 'fire_render_fShader_1_0.glsl',
    'shadow_vShader_1_0.glsl', 'shadow_fShader_1_0.glsl'
];

//LoadObjects = [];

LoadModels = [
    "Taxxon.gltf", 
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

    //lights
    { srcName: "Lights/DuaLLantern_029.webp", name: "DuaLLantern_029" },
];

console.log("%cAssets for CastleHaunt2 ready.", "color: orange");