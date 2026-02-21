/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
"use strict";

/////////////////////////////////////////////////
/*
      
TODO:
    * 
known bugs: 
    * i don't do bugs

retests:
    * all completed

 */
////////////////////////////////////////////////////

const DEBUG = {
    SETTING: true,
    AUTO_TEST: false,
    FPS: false,
    VERBOSE: true,
    _2D_display: false,
    INVINCIBLE: false,
    FREE_MAGIC: false,
    keys: false,
    killAllAllowed: false,
    max17: false,
    displayInv() {
        HERO.inventory.scroll.display();
        const list = [];
        for (const item of HERO.inventory.item) {
            list.push(item.name);
        }
        console.info("items", list);
        console.log(`"${list.join('", "')}"`);
    },
    kill() {
        if (DEBUG.killAllAllowed) {
            console.log("KILL all");
            LAIR.stop();
            ENTITY3D.POOL.clear();
            MISSILE3D.POOL.clear();
        }
        const alive = ENTITY3D.POOL.filter(el => el);
        if (alive.length > 0) {
            console.log("-------------------------------------------");
            for (const enemy of alive) {
                console.log(enemy.id, enemy.name, enemy.health);
            }
        }
    },
    goto(grid) {
        HERO.player.pos = Vector3.from_Grid(Grid.toCenter(grid), 0.5);
    },
    checkPoint() {

        console.info("DEBUG::Starting from checkpoint, this may clash with LOAD");

        GAME.level = 17;
        GAME.gold = 20000;
        //GAME.gold = 5;
        GAME.lives = 3;

        HERO.reference_magic = 55;
        HERO.reference_attack = 55;
        HERO.reference_defense = 55;

        HERO.magic = 55;
        HERO.attack = 55;
        HERO.defense = 55;

        HERO.mana = 500;
        HERO.maxMana = 500;
        HERO.health = 1;
        HERO.maxHealth = 500;

        HERO.attackExp = 18;
        HERO.attackExpGoal = 100;
        HERO.defenseExp = 4;
        HERO.defenseExpGoal = 100;
        HERO.magicExp = 0;
        HERO.magicExpGoal = 100;


        let actItems = [
        ];

        for (let obj of actItems) {
            let item = new ActionItem(obj.which, obj.inventorySprite);
            HERO.inventory.scroll.add(item);
        }

        let scrollTypes = [
            "FeatherFall", "Flight", "Radar", "Flight", "Invisibility"
        ];

        for (let scrType of scrollTypes) {
            let scroll = new Scroll(scrType);
            HERO.inventory.scroll.add(scroll);
        }

        TITLE.stack.scrollIndex = Math.max(TITLE.stack.scrollIndex, 0);
        TITLE.scrolls();

        let invItems = [

        ];

        for (let itm of invItems) {
            const item = new NamedInventoryItem(itm, itm);
            HERO.inventory.item.push(item);
        }

        let keys = [];
        for (let key of keys) {
            const K = new Key(key, `${key}Key`);
            HERO.inventory.key.push(K);
        }
        TITLE.keys();
    },
    killStatus() {
        console.log("-------------------------------------------");
        console.warn("level:", GAME.level, "totalKills", MAP[GAME.level].map.totalKills, "killsRequiredToStopSpawning", MAP[GAME.level].map.killsRequiredToStopSpawning, "stopped", MAP[GAME.level].map.stopSpawning, "delay", MAP[GAME.level].map.spawnDelay,
            "killCount", MAP[GAME.level].map.killCount, "killCountdown", MAP[GAME.level].map.killCountdown, "maxSpawned", MAP[GAME.level].map.maxSpawned, "lairs:", LAIR.POOL.length
        );
        console.info("monsterList", MAP[GAME.level].monsterList);
    },
    displayCompleteness() {
        console.log("-------------------------------------------");
        console.log("HERO position", Vector3.toGrid(HERO.player.pos));
        const remains = ITEM3D.POOL.filter(el => el.active);
        if (remains.length > 0) {
            console.log("remains", remains);
            console.log("---- remaining items ----");
            for (const item of remains) {
                console.log(item.id, item.name, item.grid, item.instanceIdentification, "category", item.category);
            }
        }
        console.log("-------------------------------------------");
        const int_decals = INTERACTIVE_DECAL3D.POOL.filter(el => el.interactive);
        if (int_decals.length > 0) {
            console.log("int_decals", int_decals);
            for (const ent of int_decals) {
                console.log(ent.id, ent.name, ent.grid, "wants", ent.wants, "gives", ent.gives, "which", ent.which, "int.cat", ent.interactionCategory, "price", ent.price);
            }
        }
        console.log("-------------------------------------------");
        const dynamic = DYNAMIC_ITEM3D.POOL.filter(el => el);
        if (dynamic.length > 0) {
            console.log("dynamic", dynamic);
            for (const din of dynamic) {
                console.log(din.id, din.name, din.grid);
            }
        }
        console.log("-------------------------------------------");
        for (const gate of INTERACTIVE_BUMP3D.POOL) {
            console.log(gate.name, gate.grid, gate.destination.level, gate.color, "dest", gate.destination, "to", MAP[gate.destination.level].name);
        }

        console.info("**** HERO experience ****");
        console.log("------ EXP ------");
        for (const type of ["attack", "defense", "magic"]) {
            console.log(type, ":", HERO[`${type}Exp`], " /", HERO[`${type}ExpGoal`]);
        }
        console.log("------------");
    },
    automaticTests() {
        console.time("automaticTests");
        console.info("***** Automatic level testing *****");
        for (let level = 1; level <= 125; level++) {
            console.log("testing level", level);
            GAME.level = level;
            GAME.levelStart();
            GAME.frameDraw(17);
        }
        console.info("***** Automatic level testing END *****");
        console.timeEnd("automaticTests");
    },
    dropItem(name) {
        for (const [index, item] of HERO.inventory.item.entries()) {
            if (item.name === name) {
                HERO.inventory.item.splice(index, 1);
                console.warn("..removed", index, item);
                break;
            }
        }
        TITLE.keys();
    },
    getItem(name) {
        const item = new NamedInventoryItem(name, name);
        HERO.inventory.item.push(item);
        console.warn("..added", item);
        TITLE.keys();
    },
};

const INI = {
    HERO_SHOOT_TIMEOUT: 10,
    SCREEN_BORDER: 256,
};

const PRG = {
    VERSION: "0.0.1",
    NAME: "TaXXon",
    YEAR: "2026",
    SG: "TAXXON",
    CSS: "color: #239AFF;",
    INIT() {
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
        console.log(`${PRG.NAME} ${PRG.VERSION} by Lovro Selic, (c) LaughingSkull ${PRG.YEAR} on ${navigator.userAgent}`);
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
        $("#title").html(PRG.NAME);
        $("#version").html(`${PRG.NAME} V${PRG.VERSION} <span style='font-size:14px'>&copy</span> LaughingSkull ${PRG.YEAR}`);
        $("input#toggleAbout").val("About " + PRG.NAME);
        $("#about fieldset legend").append(" " + PRG.NAME + " ");

        ENGINE.autostart = true;
        ENGINE.start = PRG.start;
        ENGINE.readyCall = GAME.setup;
        ENGINE.setGridSize(64);
        ENGINE.setSpriteSheetSize(64);
        ENGINE.init();
    },
    setup() {
        if (DEBUG.SETTING) {
            $("#engine_version").html(ENGINE.VERSION);
            $("#grid_version").html(GRID.VERSION);
            $("#maze_version").html(DUNGEON.VERSION);
            $("#iam_version").html(IndexArrayManagers.VERSION);
            $("#lib_version").html(LIB.VERSION);
            $("#webgl_version").html(WebGL.VERSION);
            $("#maptools_version").html(MAP_TOOLS.VERSION);
            $("#speech_version").html(SPEECH.VERSION);
        } else {
            $('#debug').hide();
        }

        $("#toggleHelp").click(function () {
            $("#help").toggle(400);
        });
        $("#toggleAbout").click(function () {
            $("#about").toggle(400);
        });
        $("#toggleVersion").click(function () {
            $("#debug").toggle(400);
        });
        $("#toggleSaveGame").click(function () {
            $("#savegame_manager").toggle(400);
        });

        //boxes
        ENGINE.gameWIDTH = 1024;
        ENGINE.titleWIDTH = 1280 + INI.SCREEN_BORDER;
        ENGINE.sideWIDTH = ENGINE.titleWIDTH - ENGINE.gameWIDTH - INI.SCREEN_BORDER;
        ENGINE.gameHEIGHT = 768;
        ENGINE.titleHEIGHT = 96;
        ENGINE.bottomHEIGHT = 80;
        ENGINE.bottomWIDTH = ENGINE.titleWIDTH;
        MAP_TOOLS.INI.FOG = false;

        $("#bottom").css("margin-top", ENGINE.gameHEIGHT + ENGINE.titleHEIGHT + ENGINE.bottomHEIGHT);
        $(ENGINE.gameWindowId).width(ENGINE.gameWIDTH + 2 * ENGINE.sideWIDTH + 4);
        ENGINE.addBOX("TITLE", ENGINE.titleWIDTH, ENGINE.titleHEIGHT, ["title", "compassRose", "compassNeedle", "lives", "minimap", "gold"], null);
        ENGINE.addBOX("LSIDE", INI.SCREEN_BORDER, ENGINE.gameHEIGHT, ["Lsideback", "health"], "side");
        ENGINE.addBOX("ROOM", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["background", "3d_webgl", "info", "text", "FPS", "button", "click"], "side");
        ENGINE.addBOX("SIDE", ENGINE.sideWIDTH, ENGINE.gameHEIGHT, ["sideback", "keys", "time", "scrolls", "orbs", "skills"], "fside");
        ENGINE.addBOX("DOWN", ENGINE.bottomWIDTH, ENGINE.bottomHEIGHT, ["bottom", "bottomText", "save", "subtitle"], null);

        if (DEBUG._2D_display) {
            ENGINE.addBOX("LEVEL", ENGINE.gameWIDTH, ENGINE.gameHEIGHT, ["pacgrid", "grid", "coord", "player"], null);
        }

        /** dev settings */
        if (DEBUG.VERBOSE) {
            WebGL.VERBOSE = true;
            AI.VERBOSE = true;
            ENGINE.verbose = true;
            MAP_TOOLS.INI.VERBOSE = true;
        }
    },
    start() {
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
        console.log(`${PRG.NAME} ${PRG.VERSION} STARTED!`);
        console.log("%c**************************************************************************************************************************************", PRG.CSS);
        $(ENGINE.topCanvas).off("mousemove", ENGINE.mouseOver);
        $(ENGINE.topCanvas).off("click", ENGINE.mouseClick);
        $(ENGINE.topCanvas).css("cursor", "");

        if (SPEECH.VERBOSE) {
            console.info("SPEECH available voices");
            console.table(SPEECH.voices);
            console.info(SPEECH.voices);
        }

        $("#startGame").addClass("hidden");
        ENGINE.disableDefaultKeys();
        TITLE.startTitle();
    }
};

/**
 * *******************************************************************************************
 */


/**
 * *******************************************************************************************
 */

const HERO = {
    construct() {
        this.player = null;

        this.reset();
    },

    reset() {
        this.dead = false;
        this.canShoot = true;
    },

    concludeAction() {
    },
    shoot() {
        if (HERO.dead) return;
        if (!HERO.canShoot) return;

        setTimeout(() => (HERO.canShoot = true), INI.HERO_SHOOT_TIMEOUT);
        return;
    },
    hitByMissile(missile) {
        if (DEBUG.VERBOSE) console.warn("HERO hit by missile", missile,);

    },
    applyDamage(damage) {
        HERO.health = Math.max(HERO.health - damage, 0);
        TITLE.health();
        if (HERO.health <= 0) {
            if (!DEBUG.INVINCIBLE) HERO.die();
        }
    },
    die() {
        if (HERO.dead) return;
        console.warn("hero dies");
        HERO.dead = true;
        HERO.canShoot = false;
    },
    death() {
        console.error("HERO DEATH");

        GAME.lives--;
        TITLE.lives();

        const heroRefGrid = Vector3.to_Grid3D(HERO.player.pos.translate(UP3, HERO.player.heigth));
        const gridValue = REVERSED_MAPDICT[HERO.player.map.GA.getValue(heroRefGrid)];
        const heightOffset = parseInt(gridValue[4], 10) / 10 || 0;
        const depth = Math.max(0, HERO.player.depth);
        HERO.player.pos.set_y(0.1 + depth + heightOffset);
        WebGL.GAME.setFirstPerson();
        WebGL.GAME.positionUpdate();
        if (GAME.lives <= 0) return HERO.finalDeath();

        ENGINE.GAME.ANIMATION.resetTimer();
        ENGINE.GAME.ANIMATION.next(GAME.lifeLostRun);
    },
    finalDeath() {
        console.error("HERO FINAL death");
        for (const L of LIGHTS3D.POOL) {
            L.lightColor = Array(0, 0, 0);
        }
        ENGINE.TEXT.centeredText("Rest In Peace", ENGINE.gameWIDTH, ENGINE.gameHEIGHT / 2);
        ENGINE.TEXT.centeredText("(ENTER)", ENGINE.gameWIDTH, ENGINE.gameHEIGHT / 2 + ENGINE.TEXT.RD.fs * 1.2);
        ENGINE.GAME.ANIMATION.resetTimer();
        ENGINE.GAME.ANIMATION.next(GAME.gameOverRun);

        GAME.restarted = true;
        MAP[GAME.level].map.storage.clear();
    },

};

/**
 * *******************************************************************************************
 */

const GAME = {
    gold: 0,                                // WebGl relies on this as default gold source, keep! 
    restarted: false,
    start() {
        console.log("GAME started");
        if (AUDIO.Title) {
            AUDIO.Title.pause();
            AUDIO.Title.currentTime = 0;
        }
        $(ENGINE.topCanvas).off("mousemove", ENGINE.mouseOver);
        $(ENGINE.topCanvas).off("click", ENGINE.mouseClick);
        $(ENGINE.topCanvas).css("cursor", "");
        ENGINE.hideMouse();
        ENGINE.GAME.pauseBlock();
        ENGINE.GAME.paused = true;

        let GameRD = new RenderData("Headstone", 60, "#fF2010", "text", "#444444", 2, 2, 2);
        ENGINE.TEXT.setRD(GameRD);
        ENGINE.watchVisibility(ENGINE.GAME.lostFocus);
        ENGINE.GAME.setGameLoop(GAME.run);
        ENGINE.GAME.start(16);

        AI.immobileWander = true;

        GAME.completed = false;
        GAME.lives = 1;
        GAME.level = 1;
        GAME.gold = 13;


        HERO.construct();
        ENGINE.VECTOR2D.configure("player");
        GAME.fps = new FPS_short_term_measurement(300);
        GAME.prepareForRestart();
        GAME.time = new Timer("Main");

        /** DEBUG */
        //DEBUG.checkPoint();
        /** END DEBUG */

        throw "DEBUG";
        GAME.levelStart();
    },
    deathPlaceDecals: [],
    levelStart() {
        console.log("starting level", GAME.level);
        WebGL.playerList.clear();                           //requred for restart after resurrection
        GAME.initLevel(GAME.level);
        WebGL.GAME.setFirstPerson();                        //my preference
        GAME.continueLevel(GAME.level);
    },
    continueLevel(level) {
        GAME.levelExecute();
    },
    levelExecute() {
        GAME.drawFirstFrame(GAME.level);
        LAIR.start();
        ENGINE.GAME.resume();
        HERO.speak("Haunting or hunting, Hauntessa will kneel, soon she will feel my very sharp heel.");
    },
    setCameraView() {
        WebGL.hero.firstPersonCamera = new $3D_Camera(WebGL.hero.player, DIR_NOWAY, 0.0, new Vector3(0, 0, 0), 0);
        WebGL.hero.topCamera = new $3D_Camera(WebGL.hero.player, DIR_UP, 0.9, new Vector3(0, -0.5, 0), 1, 70);
        WebGL.hero.topCameraLowAngle = new $3D_Camera(WebGL.hero.player, DIR_UP, 0.13, new Vector3(0, -0.35, 0), 0.70);
        WebGL.hero.overheadCamera = new $3D_Camera(WebGL.hero.player, DIR_UP, 2.5, new Vector3(0, -1, 0), 1, 80);
        WebGL.hero.orto_overheadCamera = new $3D_Camera(WebGL.hero.player, DIR_UP, 4, new Vector3(0, -1, 0), 0.4, 80);

        switch (WebGL.CONFIG.cameraType) {
            case "first_person":
                WebGL.hero.player.associateExternalCamera(WebGL.hero.firstPersonCamera);
                WebGL.setCamera(WebGL.hero.firstPersonCamera);
                break;
            case "third_person":
                WebGL.hero.player.associateExternalCamera(WebGL.hero.topCamera);
                WebGL.setCamera(WebGL.hero.topCamera);
                break;
            case "top_down":
                WebGL.hero.player.associateExternalCamera(WebGL.hero.overheadCamera);
                WebGL.setCamera(WebGL.hero.overheadCamera);
                break;
            case "orto_top_down":
                WebGL.hero.player.associateExternalCamera(WebGL.hero.orto_overheadCamera);
                WebGL.setCamera(WebGL.hero.orto_overheadCamera);
                break;
            default:
                throw "WebGL.CONFIG.cameraType error";
        }
    },
    initLevel(level) {
        if (DEBUG.VERBOSE) console.info("init level", level);
        this.newDungeon(level);
        WebGL.MOUSE.initialize("ROOM");
        WebGL.setContext('webgl');
        this.buildWorld(level);
        let start_dir, start_grid;

        if (GAME.fromCheckpoint) {
            start_dir = MAP[level].map[GAME.loadWayPoint].vector;
            start_grid = MAP[level].map[GAME.loadWayPoint].grid.add(start_dir); //3d +2d vector -> 3D
            GAME.fromCheckpoint = false;
        } else {
            start_dir = MAP[level].map.startPosition.vector;
            start_grid = MAP[level].map.startPosition.grid;
        }

        start_grid = new Vector3(start_grid.x + 0.5, start_grid.z + HERO.height, start_grid.y + 0.5);
        HERO.player = new $3D_player(start_grid, Vector3.from_2D_dir(start_dir), MAP[level].map, HERO_TYPE.ThePrincess);
        HERO.player.addToTextureMap("invisible", TEXTURE.TheInvisiblePrincess);
        GAME.setCameraView();
        AI.initialize(HERO.player, "3D3");
        GAME.setWorld(level);
        ENTITY3D.resetTime();
        MINIMAP.init(MAP[level].map, INI.MINIMAP_W, INI.MINIMAP_H, HERO.player);
    },
    setWorld(level, decalsAreSet = false) {
        console.time("setWorld");
        const textureData = {
            wall: TEXTURE[MAP[level].wall],
            floor: TEXTURE[MAP[level].floor],
            ceil: TEXTURE[MAP[level].ceil]
        };

        WebGL.updateShaders();

        if (WebGL.CONFIG.firstperson) {
            WebGL.init('webgl', MAP[level].world, textureData, WebGL.hero.player, decalsAreSet);              //firstperson
        } else {
            WebGL.init('webgl', MAP[level].world, textureData, WebGL.hero.topCamera, decalsAreSet);           //thirdperson
        }
        LAIR.set_timeout(MAP[level].map.spawnDelay);
        console.timeEnd("setWorld");
    },
    buildWorld(level) {
        if (DEBUG.VERBOSE) console.info(" ******** building world, room/dungeon/level:", level, "ressurection", HERO.ressurection, "restart", GAME.restarted);
        WebGL.init_required_IAM(MAP[level].map, HERO);

        if (HERO.ressurection) {
            GAME.reloadIAM(level);
        } else {
            SPAWN_TOOLS.spawn(level);
        }

        HERO.ressurection = false;

        /* adding death places*/
        for (const dp of GAME.deathPlaceDecals) {
            DECAL3D.add(dp);
        }
        GAME.deathPlaceDecals.clear();

        if (GAME.fromCheckpoint) {
            if (DEBUG.VERBOSE) console.log(`%c ... loading part 3: affecting MAP and SPAWN from checkpoint ...`, GAME.CSS);
            SAVE_MAP_IAM.load_map(MAP);
            WebGL.CTX.pixelStorei(WebGL.CTX.UNPACK_FLIP_Y_WEBGL, true);
            MAP_TOOLS.applyStorageActions(level);
            MAP_TOOLS.MAP[GAME.level].unused_storage.clear();
            WebGL.CTX.pixelStorei(WebGL.CTX.UNPACK_FLIP_Y_WEBGL, false);
        }
        MAP[level].world = WORLD.build(MAP[level].map);
    },
    newDungeon(level) {
        MAP_TOOLS.unpack(level);
    },
    prepareForRestart() {
        let clear = ["background", "text", "FPS", "button", "bottomText"];
        ENGINE.clearManylayers(clear);
        TITLE.blackBackgrounds();
        ENGINE.TIMERS.clear();
    },
    setup() {
        console.log("GAME SETUP started");
        $("#conv").remove();
    },
    setTitle() {
        const text = GAME.generateTitleText();
        const RD = new RenderData("CPU", 24, "#0E0", "bottomText");
        const SQ = new RectArea(0, 0, LAYER.bottomText.canvas.width, LAYER.bottomText.canvas.height);
        GAME.movingText = new MovingText(text, 4, RD, SQ);
    },
    generateTitleText() {
        let text = `${PRG.NAME} ${PRG.VERSION
            }, a game by Lovro Selič, ${"\u00A9"} LaughingSkull ${PRG.YEAR
            }. 
             
            Music: 'Ex Nihilo' written and performed by LaughingSkull, ${"\u00A9"
            } 2017 Lovro Selič. `;
        text += "     ENGINE, SPEECH, GRID, MAZE, Burrows-Wheeler RLE Compression, WebGL, shaders and GAME code by Lovro Selič using JavaScript and GLSL. ";
        text += "     glMatrix library by Brandon Jones and Colin MacKenzie IV. Thanks. ";
        text = text.split("").join(String.fromCharCode(8202));
        return text;
    },
    runTitle() {
        if (ENGINE.GAME.stopAnimation) return;
        GAME.movingText.process();
        GAME.titleFrameDraw();
        SPEECH.silence();
    },
    titleFrameDraw() {
        GAME.movingText.draw();
    },
    drawFirstFrame(level) {
        if (DEBUG.VERBOSE) console.log("drawing first frame");
        TITLE.firstFrame();
        if (DEBUG._2D_display) {
            ENGINE.resizeBOX("LEVEL", MAP[level].pw, MAP[level].ph);
            ENGINE.BLOCKGRID.configure("pacgrid", "#FFF", "#000");
            ENGINE.BLOCKGRID3D.draw(MAP[GAME.level].map, HERO.player.depth);
            GRID.grid();
            GRID.paintCoord3D("coord", MAP[level].map, HERO.player.depth);
        }
    },
    run(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        const date = Date.now();
        HERO.player.updateJump(lapsedTime);
        HERO.player.animateAction();
        VANISHING3D.manage(lapsedTime);
        MISSILE3D.manage(lapsedTime);
        EXPLOSION3D.manage(date);
        FIRE3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        DYNAMIC_ITEM3D.manage(lapsedTime, date);
        ITEM_DROPPER3D.manage(lapsedTime);
        GAME.respond(lapsedTime);
        ENGINE.TIMERS.update();

        const interaction = WebGL.MOUSE.click(HERO);
        if (interaction) GAME.processInteraction(interaction);

        MAP.manage(GAME.level);
        GAME.frameDraw(lapsedTime);
        HERO.concludeAction();
        if (HERO.dead) IAM.checkIfProcessesComplete([EXPLOSION3D], HERO.death);
        if (GAME.completed) GAME.won();
    },
    frameDraw(lapsedTime) {
        if (DEBUG._2D_display) {
            GAME.drawPlayer();
        }
        WebGL.renderScene(MAP[GAME.level].map);
        TITLE.compassNeedle();
        TITLE.time();
        MINIMAP.draw(HERO.radar);

        if (DEBUG.FPS) {
            GAME.FPS(lapsedTime);
        }
        if (DEBUG._2D_display) {
            const map = MAP[GAME.level].map;
            ENGINE.BLOCKGRID3D.draw(map, HERO.player.depth);
            MISSILE3D.draw();
            ENTITY3D.drawVector2D();
            DYNAMIC_ITEM3D.drawVector2D();
            //WebGL.visualizeTexture3DSlice(map.occlusionMap, map.width, map.height, map.depth, 0, LAYER.debug); //debug
            GRID.paintCoord3D("coord", MAP[GAME.level].map, HERO.player.depth);
        }
    },
    processInteraction(interaction) {
        if (DEBUG.VERBOSE) console.info("interaction:", interaction);
        if (interaction.text) TURN.subtitle(interaction.text);
        switch (interaction.category) {
            case 'error':
                switch (interaction.which) {
                    case "inventory_full":
                        if (!HERO.canComplain) break;
                        const variants = [
                            "I can't carry any more.",
                            "My bag is full.",
                            "My bag is breaking at the seams.",
                            "Don't you see my bag is already full, fool?",
                            "Put where? There is no space left.",
                            "You are a greedy bastard, aren't you?",
                            "I'm carrying the castle on my back.",
                            "Bag capacity reached, mission abort.",
                            "No more room for knick-knacks.",
                            "I'm not a pack mule.",
                            "My bag says 'No more, please.'",
                            "I'd need a second bag for that.",
                            "Full to the brim, no more can fit.",
                            "My bag is stuffed like a turkey.",
                            "No vacancy in my bag.",
                            "Trying to turn me into a hoarder?",
                        ];
                        HERO.speak(variants.chooseRandom());
                        HERO.canComplain = false;
                        setTimeout(() => HERO.canComplain = true, INI.COMPLAIN_TIMEOUT);
                        break;
                    default:
                        console.error("Usupported interaction error:", interaction.which);
                }
                break;
            case 'title':
                TITLE[interaction.section]();
                MAP_TOOLS.setOcclusionMap(GAME.level);
                break;
            case 'gold':
                GAME.gold += interaction.value;
                TITLE.gold();
                AUDIO.Pick.play();
                TURN.display(interaction.value, "#AB8D3F");
                break;
            case 'key':
                let key = new Key(interaction.color, interaction.inventorySprite);
                HERO.inventory.key.push(key);
                AUDIO.Keys.play();
                display(interaction.inventorySprite);
                delete MAP[GAME.level].map.keys[interaction.color];
                if (interaction.text) TURN.subtitle(interaction.text);
                break;
            case 'action_item':
                if (DEBUG.VERBOSE) console.warn("action_item", interaction.which, interaction.inventorySprite);
                let aItem = new ActionItem(interaction.which, interaction.inventorySprite);
                HERO.inventory.scroll.add(aItem);
                TITLE.stack.scrollIndex = Math.max(TITLE.stack.scrollIndex, 0);
                TITLE.scrolls();
                display(interaction.inventorySprite);
                break;
            case 'scroll':
                let type = null;
                if (interaction.scrollType) {
                    type = interaction.scrollType;
                } else {
                    type = SCROLL_TYPE[interaction.instanceIdentification];
                }

                let scroll = new Scroll(type);
                display(scroll.inventorySprite);
                HERO.inventory.scroll.add(scroll);
                TITLE.stack.scrollIndex = Math.max(TITLE.stack.scrollIndex, 0);
                TITLE.scrolls();
                AUDIO.Scroll.play();
                break;
            case 'shrine':
                if (interaction.which === 'health' || interaction.which === 'mana') {
                    interaction.category = 'status';
                    return GAME.processInteraction(interaction);
                }
                HERO.raiseStat(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.LevelUp.play();
                HERO.restore();
                TITLE.skills();
                break;
            case 'scrollshop':
                return this.processInteraction({
                    category: "scroll",
                    scrollType: interaction.which,
                });
            case 'oracle':
                break;
            case 'skill':
                if (DEBUG.VERBOSE) console.log("SKILL", interaction);
                HERO.raiseStat(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.LevelUp.play();
                break;
            case "life":
                if (DEBUG.VERBOSE) console.info("LIFE", interaction);
                display(interaction.inventorySprite);
                GAME.lives++;
                TITLE.lives();
                break;
            case 'status':
                if (DEBUG.VERBOSE) console.log("STATUS", interaction);
                HERO.incStatus(interaction.which, interaction.level);
                display(interaction.inventorySprite);
                AUDIO.PowerUp.play();
                break;
            case 'chest':
                AUDIO.OpenChest.play();
                EXPLOSION3D.add(new WoodExplosion(Vector3.from_array(interaction.pos)));
                return this.processInteraction(evalObjectString(CONTAINER_CONTENT_TYPES, interaction.instanceIdentification));
            case "rebuild":
                MAP_TOOLS.rebuild_3D_world(GAME.level);
                AUDIO.Thud.play();
                break;
            case "interaction_item":
                if (DEBUG.VERBOSE) console.warn("interaction_item", interaction);
                const item = new NamedInventoryItem(interaction.name, interaction.inventorySprite);
                HERO.inventory.item.push(item);
                display(interaction.inventorySprite);
                break;
            case "entity_interaction":
                if (DEBUG.VERBOSE) console.log("entity_interaction", interaction);
                break;
            case "munition":
                HERO.pickOrb(interaction.dropped);
                display(interaction.inventorySprite);
                break;
            case "concludeGame":
                GAME.completed = true;
                HERO.player.setPos(Vector3.from_grid3D(new FP_Grid3D(9.5, 2.1, 1.0 + HERO.height)));
                HERO.player.setDir(Vector3.from_2D_dir(UP));
                break;
            default:
                console.error("interaction category error", interaction);
        }
        TITLE.keys();

        function display(inventorySprite) {
            ENGINE.clearLayer("info");
            ENGINE.draw("info", 7, 7, SPRITE[inventorySprite]);
            GenericTimers.infoTimer();
        }
    },
    drawPlayer() {
        ENGINE.clearLayer(ENGINE.VECTOR2D.layerString);
        ENGINE.VECTOR2D.draw(HERO.player);
    },
    respond(lapsedTime) {
        if (HERO.dead) return;

        HERO.player.respond(lapsedTime);
        WebGL.GAME.respond(lapsedTime);
        ENGINE.GAME.respond(lapsedTime);

        const map = ENGINE.GAME.keymap;

        //debug
        if (map[ENGINE.KEY.map.F7]) {
            if (!DEBUG.keys) return;
        }
        if (map[ENGINE.KEY.map.F8]) {
            if (!DEBUG.keys) return;
            DEBUG.kill();
            ENGINE.GAME.keymap[ENGINE.KEY.map.F8] = false;
        }
        if (map[ENGINE.KEY.map.F9]) {
            console.info(" -------------------- Getting help --------------------");
            GAME.help();
            console.info(" --------------------  ***** --------------------");
            ENGINE.GAME.keymap[ENGINE.KEY.map.F9] = false;

            if (!DEBUG.keys) return;

            console.log("\nDEBUG:");
            console.log("#######################################################");
            ENTITY3D.display();
            ENTITY3D.analyze();
            console.log("------------------------------------------------------");
            console.log("map", MAP[GAME.level].map);
            console.log("MAP", MAP[GAME.level]);
            console.log("HERO", HERO);
            console.info("Inventory:");
            DEBUG.displayInv();
            DEBUG.killStatus();
            DEBUG.displayCompleteness();
            console.log("#######################################################");
        }

        //controls
        if (map[ENGINE.KEY.map.left]) {
            TITLE.stack.scrollIndex--;
            TITLE.stack.scrollIndex = Math.max(0, TITLE.stack.scrollIndex);
            TITLE.scrolls();
            ENGINE.GAME.keymap[ENGINE.KEY.map.left] = false;
            return;
        }
        if (map[ENGINE.KEY.map.right]) {
            TITLE.stack.scrollIndex++;
            TITLE.stack.scrollIndex = Math.min(HERO.inventory.scroll.size() - 1, TITLE.stack.scrollIndex);
            TITLE.scrolls();
            ENGINE.GAME.keymap[ENGINE.KEY.map.right] = false;
            return;
        }
        if (map[ENGINE.KEY.map.enter]) {
            if (HERO.inventory.scroll.size() === 0) return;
            let scroll = HERO.inventory.scroll.remove(TITLE.stack.scrollIndex);
            scroll.action();
            TITLE.scrolls();
            ENGINE.GAME.keymap[ENGINE.KEY.map.enter] = false;
        }
        if (map[ENGINE.KEY.map.ctrl]) {
            HERO.shoot();
            ENGINE.GAME.keymap[ENGINE.KEY.map.ctrl] = false; //NO repeat

        }
        if (map[ENGINE.KEY.map.up]) { }
        if (map[ENGINE.KEY.map.down]) { }
        if (map[ENGINE.KEY.map.space]) {
            HERO.player.attack();
            ENGINE.GAME.keymap[ENGINE.KEY.map.space] = false; //NO repeat
        }
        if (map[ENGINE.KEY.map.shift]) {
            HERO.requestJump();
            ENGINE.GAME.keymap[ENGINE.KEY.map.shift] = false;
        }

        return;
    },
    FPS(lapsedTime) {
        let CTX = LAYER.FPS;
        CTX.fillStyle = "white";
        ENGINE.clearLayer("FPS");
        let fps = 1000 / lapsedTime || 0;
        GAME.fps.update(fps);
        CTX.fillText(GAME.fps.getFps(), 5, 10);
    },
    forceOpenDoor(waypoint) {
        for (const gate of INTERACTIVE_BUMP3D.POOL) {
            if (gate.destination.origin === waypoint) {
                if (gate.locked || gate.color === "Closed") {
                    gate.openGate();
                    gate.storageLog();
                }
                return;
            }
        }
    },
    reloadIAM(level) {
        GAME.STORE.loadIAM(MAP[level].map);
        GAME.STORE.linkMap(MAP[level].map);
        GAME.setWorld(level, true);
    },
    useStaircase(destination) {
        const IAMtoClean = [EXPLOSION3D];                //clean IAM
        for (const iam of IAMtoClean) {
            iam.clean();
        }

        for (const missile of MISSILE3D.POOL) {
            if (missile) {
                if (missile.friendly) missile.drop();
                MISSILE3D.remove(missile.id);
            }
        }

        GAME.STORE.storeIAM(MAP[GAME.level].map);
        GAME.level = destination.level;

        const level = GAME.level;
        if (!MAP[GAME.level].map) {
            GAME.STORE.clearPools();
            GAME.newDungeon(level);
            GAME.buildWorld(level);
            GAME.STORE.linkMap(MAP[level].map);
            GAME.setWorld(level);
        } else GAME.reloadIAM(level);

        MAP_TOOLS.applyStorageActions(level);
        GAME.forceOpenDoor(destination.waypoint);
        HERO.player.setMap(MAP[level].map);

        INTERACTIVE_BUMP3D.setup("3D");

        const start_dir = MAP[level].map[this.destination.waypoint].vector;
        let start_grid = Grid.toClass(MAP[level].map[this.destination.waypoint].grid).add(start_dir);
        let Z = MAP[level].map[this.destination.waypoint].grid.z;
        start_grid = Vector3.from_Grid(Grid.toCenter(start_grid), HERO.height + Z);
        HERO.player.setPos(start_grid);
        HERO.player.setDir(Vector3.from_2D_dir(start_dir));
        GAME.setCameraView();
        MINIMAP.init(MAP[level].map, INI.MINIMAP_W, INI.MINIMAP_H, HERO.player);

        /** SAVE GAME each time */
        GAME.save(destination);

        //observe
        if (MAP_TEXT[GAME.level]) {
            HERO.speak(MAP_TEXT[GAME.level]);
            MAP_TEXT[GAME.level] = null;
        }

        if (DEBUG._2D_display) {
            ENGINE.resizeBOX("LEVEL", MAP[level].pw, MAP[level].ph);
            ENGINE.BLOCKGRID.configure("pacgrid", "#FFF", "#000");
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            GRID.grid();
            GRID.paintCoord3D("coord", MAP[level].map, HERO.player.depth);
        }
    },
    saveRestriction() {
        if (HERO.orbsLost > 0 || !GAME.canBeSaved) return true;
        return false;
    },
    save(destination) {
        const flag = SG_DICT[MAP[GAME.level].sg];

        switch (flag) {
            case "Block":
                GAME.canBeSaved = false;
                break;
            case "Restore":
                GAME.canBeSaved = true;
                break;
        }

        MAP[GAME.level].sg = 0;
        if (GAME.saveRestriction()) {
            TITLE.saved(false);
            return;
        }

        console.time("save");
        GAME.loadWayPoint = destination.waypoint;
        SAVE_GAME.save();
        SAVE_MAP_IAM.save_map(MAP);
        SAVE_MAP_IAM.save_GA(MAP);
        TURN.display("GAME SAVED", "#FFF");
        TITLE.saved(true);
        console.timeEnd("save");
    },
    load() {
        console.time("load");
        HERO.inventory.scroll.clear();
        HERO.inventory.item.clear();
        SAVE_GAME.load();
        SAVE_MAP_IAM.load_GA();
        MAP_TOOLS.resetStorages();
        console.timeEnd("load");
    },
    checkpoint() {
        GAME.fromCheckpoint = true;
        GAME.start();
    },
    canSpawn() {
        if (MAP[GAME.level].map.stopSpawning) return false;
        if (!LAIR.getSize()) return false;
        if (ENTITY3D.getSize() >= MAP[GAME.level].map.maxSpawned) return false;
        return true;
    },
    spawn(lair) {
        const type = MONSTER_TYPE[MAP[GAME.level].map.monsterList.chooseRandom()];
        if (!type) return;                                                              //if monsterList is not yet definded - development issue
        const grid = Grid3D.toCenter2D(lair.grid.add(lair.direction));
        const monster = new $3D_Entity(grid, type, lair.direction);
        monster.dropped = true;
        ENTITY3D.add(monster);
        EXPLOSION3D.add(new SpawnCloud(monster.moveState.referencePos));
    },
    lifeLostRun(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        if (ENGINE.GAME.keymap[ENGINE.KEY.map.enter]) {
            ENGINE.GAME.ANIMATION.waitThen(GAME.resurect);
        }
        const date = Date.now();
        //WebGL.GAME.setFirstPerson();
        FIRE3D.manage(date);
        EXPLOSION3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        GAME.lifeLostFrameDraw(lapsedTime);
    },
    lifeLostFrameDraw(lapsedTime) {
        if (DEBUG._2D_display) {
            GAME.drawPlayer();
        }
        WebGL.renderScene(MAP[GAME.level].map);

        if (DEBUG.FPS) {
            GAME.FPS(lapsedTime);
        }
        if (DEBUG._2D_display) {
            ENGINE.BLOCKGRID.draw(MAP[GAME.level].map);
            MISSILE3D.draw();
            ENTITY3D.drawVector2D();
        }
    },
    resurect() {
        if (DEBUG.VERBOSE) console.info("RESURECT");
        ENGINE.clearLayer("text");
        HERO.revive();
        ENTITY3D.POOL = ENTITY3D.POOL.filter(enemy => enemy && enemy.boss === true); //removes all but bosses, explicit check!
        MISSILE3D.POOL.clear();
        GAME.levelStart();
    },
    gameOverRun(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        if (ENGINE.GAME.keymap[ENGINE.KEY.map.enter]) {
            ENGINE.GAME.ANIMATION.waitThen(TITLE.startTitle);
        }
        const date = Date.now();
        //WebGL.GAME.setFirstPerson();
        EXPLOSION3D.manage(date);
        ENTITY3D.manage(lapsedTime, date, [HERO.invisible, HERO.dead]);
        GAME.lifeLostFrameDraw(lapsedTime);
    },
    won() {
        console.info("GAME WON");
        ENGINE.TIMERS.stop();
        ENGINE.GAME.ANIMATION.resetTimer();
        TITLE.setEndingCreditsScroll();
        ENGINE.GAME.pauseBlock();
        const layersToClear = ["FPS", "info"];
        layersToClear.forEach(item => ENGINE.layersToClear.add(item));
        ENGINE.clearLayerStack();
        ENGINE.GAME.ANIMATION.stop();
        const delay = 4000;
        setTimeout(function () {
            ENGINE.clearLayer("subtitle");
            TITLE.music();
            ENGINE.GAME.ANIMATION.next(GAME.wonRun);
        }, delay);
    },
    wonRun(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        GAME.endingCreditText.process(lapsedTime);
        GAME.wonFrameDraw();
        if (ENGINE.GAME.keymap[ENGINE.KEY.map.enter]) {
            ENGINE.GAME.ANIMATION.next(TITLE.startTitle);
        }
    },
    wonFrameDraw() {
        GAME.endingCreditText.draw();
    },
    slideRun(lapsedTime) {
        if (ENGINE.GAME.stopAnimation) return;
        GAME.previously.process(lapsedTime);
        GAME.slideFrameDraw();
        if (ENGINE.GAME.keymap[ENGINE.KEY.map.enter]) GAME.previously.next();

    },
    slideFrameDraw() {
        GAME.previously.verticalText.draw();
    },
};

const TITLE = {
    stack: {
        Y2: 66,
        delta2: 256 + 36,
        delta3: 120,
        delta4: 100,
        DYR: 66,
        deltaItem: 48,
        keyDelta: 56,
        scrollIndex: 0,
        scrollInRow: 3,
        scrollDelta: 72,
        SY: 540, //540
        OY: 415,
        HEALTH_TEXT: 720,
        goldX: 950,
        goldY: 40,
    },
    startTitle() {
        if (DEBUG.VERBOSE) console.log("TITLE started");
        //if (AUDIO.Title) AUDIO.Title.play(); //dev
        ENGINE.GAME.pauseBlock();
        TITLE.clearAllLayers();
        TITLE.blackBackgrounds();
        TITLE.titlePlot();
        ENGINE.draw("background", (ENGINE.gameWIDTH - TEXTURE.Title.width) / 2, (ENGINE.gameHEIGHT - TEXTURE.Title.height) / 2, TEXTURE.Title);
        $("#DOWN")[0].scrollIntoView();
        ENGINE.topCanvas = ENGINE.getCanvasName("ROOM");
        TITLE.drawButtons();
        GAME.setTitle();
        ENGINE.GAME.start(16);
        ENGINE.GAME.ANIMATION.next(GAME.runTitle);
    },
    clearAllLayers() {
        ENGINE.layersToClear = new Set(["text",
            "sideback", "button", "title", "FPS", "keys", "info", "subtitle", "compassRose", "compassNeedle", "health", "lives", "skills", "gold", "time", "orbs", "scrolls", "save",
            "bottomText", "minimap"]);
        ENGINE.clearLayerStack();
        WebGL.transparent();
    },
    blackBackgrounds() {
        this.topBackground();
        this.bottomBackground();
        this.sideBackground();
        ENGINE.fillLayer("background", "#000");
    },
    topBackground() {
        const CTX = LAYER.title;
        CTX.fillStyle = "#000";
        CTX.roundRect(0, 0, ENGINE.titleWIDTH, ENGINE.titleHEIGHT, { upperLeft: 20, upperRight: 20, lowerLeft: 0, lowerRight: 0 }, true, true);
    },
    bottomBackground() {
        const CTX = LAYER.bottom;
        CTX.fillStyle = "#000";
        CTX.roundRect(0, 0, ENGINE.bottomWIDTH, ENGINE.bottomHEIGHT, { upperLeft: 0, upperRight: 0, lowerLeft: 20, lowerRight: 20 }, true, true);
    },
    sideBackground() {
        ENGINE.fillLayer("sideback", "#000");
        ENGINE.fillLayer("Lsideback", "#000");
    },
    makeGrad(CTX, x, y, w, h) {
        // Create a linear gradient from (x, y) to (w, h)
        let grad = CTX.createLinearGradient(x, y, w, h);

        grad.addColorStop(0.00, "#FFFFFF"); // specular highlight
        grad.addColorStop(0.05, "#F5F7FA");
        grad.addColorStop(0.10, "#E9EDF2");
        grad.addColorStop(0.15, "#DEE3E8");
        grad.addColorStop(0.20, "#D3D8DE");
        grad.addColorStop(0.25, "#C7CDD4");
        grad.addColorStop(0.30, "#BCC2C9");
        grad.addColorStop(0.35, "#B1B7BE");
        grad.addColorStop(0.40, "#A6ACB3");
        grad.addColorStop(0.45, "#9BA1A8");
        grad.addColorStop(0.50, "#90969D"); // mid silver
        grad.addColorStop(0.55, "#858B92");
        grad.addColorStop(0.60, "#7A8087");
        grad.addColorStop(0.65, "#70767D");
        grad.addColorStop(0.70, "#666C73");
        grad.addColorStop(0.75, "#5C6269");
        grad.addColorStop(0.80, "#52585F");
        grad.addColorStop(0.85, "#484E55");
        grad.addColorStop(0.90, "#3F454C");
        grad.addColorStop(0.95, "#363C43");
        grad.addColorStop(1.00, "#2D333A"); // deep steel


        return grad;
    },
    titlePlot() {
        const CTX = LAYER.title;
        const fs = 64;
        CTX.font = fs + "px CPU";
        CTX.textAlign = "center";
        let txt = CTX.measureText(PRG.NAME);
        let x = ENGINE.titleWIDTH / 2;
        let y = fs;
        let gx = x - txt.width / 2;
        let gy = y - fs;
        let grad = this.makeGrad(CTX, gx, gy + 10, gx, gy + fs);
        CTX.fillStyle = grad;
        GAME.grad = grad;
        CTX.shadowColor = "#666666";
        CTX.shadowOffsetX = 2;
        CTX.shadowOffsetY = 2;
        CTX.shadowBlur = 3;
        CTX.fillText(PRG.NAME, x, y);
    },
    drawButtons() {
        ENGINE.clearLayer("button");
        FORM.BUTTON.POOL.clear();
        let x = 8;
        const w = 100;
        const h = 24;
        const F = 1.5;
        let y = 668 - F * h;

        const buttonColors = new ColorInfo("#F00", "#A00", "#222", "#666", 13);
        const musicColors = new ColorInfo("#0E0", "#090", "#222", "#666", 13);

        y += F * h;
        let startBA = new Area(x, y, w, h);
        FORM.BUTTON.POOL.push(new Button("Start game", startBA, buttonColors, GAME.start));

        y += F * h;
        let music = new Area(x, y, w, h);
        FORM.BUTTON.POOL.push(new Button("Title music", music, musicColors, TITLE.music));

        FORM.BUTTON.draw();
        $(ENGINE.topCanvas).on("mousemove", { layer: ENGINE.topCanvas }, ENGINE.mouseOver);
        $(ENGINE.topCanvas).on("click", { layer: ENGINE.topCanvas }, ENGINE.mouseClick);
    },
    firstFrame() {
        TITLE.titlePlot();
        TITLE.compass();
        TITLE.sidebackground_static();
        TITLE.health();
        TITLE.lives();
        TITLE.keys();
        TITLE.scrolls();
        //TITLE.magic();
        TITLE.skills();
        TITLE.gold();
    },
    compass() {
        let x = ((ENGINE.titleWIDTH - ENGINE.sideWIDTH) + ENGINE.sideWIDTH / 2) | 0;
        let y = (ENGINE.titleHEIGHT / 2) | 0;
        ENGINE.spriteDraw("compassRose", x, y, SPRITE.CompassRose);
        TITLE.stack.compassX = x;
        TITLE.stack.compassY = y;
        this.compassNeedle();
    },
    compassNeedle() {
        ENGINE.clearLayer("compassNeedle");
        const CTX = LAYER.compassNeedle;
        CTX.strokeStyle = "#F00";
        let [x, y] = [TITLE.stack.compassX, TITLE.stack.compassY];
        CTX.beginPath();
        CTX.moveTo(x, y);
        let end = new Point(x, y).translate(Vector3.to_FP_Vector(HERO.player.dir), (SPRITE.CompassRose.width / 2 * 0.8) | 0);
        CTX.lineTo(end.x, end.y);
        CTX.stroke();
    },
    sidebackground_static() {
        //lines
        let x = ((ENGINE.sideWIDTH - SPRITE.LineTop.width) / 2) | 0;
        let y = 0;
        const dY = (SPRITE.wavyR.height / 2) | 0;
        let cX = ((ENGINE.sideWIDTH) / 2) | 0;
        ENGINE.draw("sideback", x, y, SPRITE.LineTop);
        ENGINE.draw("Lsideback", x, y, SPRITE.LineTop);

        //2
        y = TITLE.stack.Y2;
        y += (SPRITE.Bag.height / 4) | 0;
        const lX = ((ENGINE.sideWIDTH - SPRITE.LineTop.width) / 2) | 0;
        let rX = ENGINE.sideWIDTH - lX - SPRITE.wavyR.width;
        ENGINE.draw("sideback", lX, y, SPRITE.wavyL);
        ENGINE.draw("sideback", rX, y, SPRITE.wavyR);
        ENGINE.spriteDraw("sideback", cX, y + dY, SPRITE.Bag);

        //3
        y += TITLE.stack.delta2;
        ENGINE.draw("sideback", lX, y, SPRITE.wavyL);
        ENGINE.draw("sideback", rX, y, SPRITE.wavyR);

        // 
        ENGINE.spriteDraw("sideback", cX, y + dY, SPRITE.OrnateMagicFlask);

        //4
        y += TITLE.stack.delta3;
        ENGINE.draw("sideback", lX, y, SPRITE.wavyL);
        ENGINE.draw("sideback", rX, y, SPRITE.wavyR);
        ENGINE.spriteDraw("sideback", cX, y + dY, SPRITE.FireBall);
        y += SPRITE.LineTop.height + 8;
        ENGINE.draw("sideback", x, y, SPRITE.SkillFireball);
        rX = (3 * cX / 2 - SPRITE.ManaSkill.width / 2) | 0;
        ENGINE.draw("sideback", rX + 1, y - 5, SPRITE.ManaSkill);

        TITLE.stack.magic = y + 112;

        //5
        y += TITLE.stack.delta4;

        //
        y += SPRITE.LineTop.height + 8;
        ENGINE.draw("sideback", x, y, SPRITE.SkillKick);
        rX = (3 * cX / 2 - SPRITE.SkillShield.width / 2) | 0;
        ENGINE.draw("sideback", rX - 7, y, SPRITE.SkillShield);

        TITLE.stack.skills = y + 120;

        //final line
        y = (ENGINE.gameHEIGHT - SPRITE.LineBottom.height) | 0;
        ENGINE.draw("sideback", x, y, SPRITE.LineBottom);
        ENGINE.draw("Lsideback", x, y, SPRITE.LineBottom);
    },
    skills() {
        ENGINE.clearLayer("skills");
        const CTX = LAYER.skills;
        const x = (ENGINE.sideWIDTH / 4 | 0);
        const dx = 12;

        const fs = 16; //20
        CTX.font = `200 ${fs}px CPU`
        //CTX.fillStyle = "#DDD";
        CTX.textAlign = "center";
        CTX.shadowColor = "#666";
        CTX.shadowOffsetX = 0;
        CTX.shadowOffsetY = 0;
        CTX.shadowBlur = 0;

        HERO.magic > HERO.reference_magic ? CTX.fillStyle = "#0E0" : CTX.fillStyle = "#DDD";
        CTX.fillText(`${HERO.magic.toString().padStart(2, "0")}`, x + dx, TITLE.stack.magic);
        HERO.attack > HERO.reference_attack ? CTX.fillStyle = "#0E0" : CTX.fillStyle = "#DDD";
        CTX.fillText(`${HERO.attack.toString().padStart(2, "0")}`, x + dx, TITLE.stack.skills);
        HERO.defense > HERO.reference_defense ? CTX.fillStyle = "#0E0" : CTX.fillStyle = "#DDD";
        CTX.fillText(`${HERO.defense.toString().padStart(2, "0")}`, 3 * x, TITLE.stack.skills);
        HERO.manaDiscount < 1.0 ? CTX.fillStyle = "#0E0" : CTX.fillStyle = "#DDD";
        CTX.fillText(`${HERO.mana} / ${HERO.maxMana}`, 3 * x, TITLE.stack.magic);
    },
    time() {
        const fs = 14;
        let y = (SPRITE.LineTop.height + fs * 1.2) | 0;
        let cX = ((ENGINE.sideWIDTH) / 2) | 0;

        const CTX = LAYER.time;
        ENGINE.clearLayer("time");
        CTX.font = fs + "px Consolas";
        CTX.fillStyle = "#0D0";
        CTX.textAlign = "center";
        CTX.shadowColor = "#666";
        CTX.shadowOffsetX = 1;
        CTX.shadowOffsetY = 1;
        CTX.shadowBlur = 1;
        CTX.fillText(`${MAP[GAME.level].name}`, cX, y);
        let time = `Time: ${GAME.time.timeString()}`;
        y += (fs * 1.7) | 0;
        CTX.fillText(time, cX, y);
        y += (fs * 1.0) | 0;
    },
    health() {
        ENGINE.clearLayer("health");
        const cX = ((INI.SCREEN_BORDER) / 2) | 0;
        const cY = (ENGINE.gameHEIGHT / 2) | 0;
        const CTX = LAYER.health;

        ENGINE.spriteDraw("health", cX, 56, SPRITE.Heart);

        if (HERO.health === HERO.maxHealth) {
            ENGINE.spriteDraw("health", cX, cY, SPRITE.Avatar);
        } else {
            HERO.health = Math.min(Math.max(0, HERO.health), HERO.maxHealth);
            const imageData = new ImageData(new Uint8ClampedArray(IMAGE_DATA.Avatar.data), IMAGE_DATA.Avatar.width, IMAGE_DATA.Avatar.height);
            const totalPixels = IMAGE_DATA.INDICES.Avatar.length;
            const transparentPixels = Math.floor(totalPixels * (HERO.maxHealth - HERO.health) / HERO.maxHealth);
            const indices = Array.from(IMAGE_DATA.INDICES.Avatar).shuffle();
            for (let i = 0; i < transparentPixels; i++) {
                imageData.data[indices[i]] = INI.AVATAR_TRANSPARENCY;
            }
            CTX.putImageData(imageData, cX - SPRITE.Avatar.width / 2, cY - SPRITE.Avatar.height / 2);
        }

        const fs = 40;
        CTX.font = `300 ${fs}px CPU`
        CTX.fillStyle = "#DDD";
        CTX.textAlign = "center";
        CTX.shadowColor = "#666";
        CTX.shadowOffsetX = 1;
        CTX.shadowOffsetY = 1;
        CTX.shadowBlur = 1;
        CTX.fillText(`${HERO.health} / ${HERO.maxHealth}`, cX, TITLE.stack.HEALTH_TEXT);
    },
    lives() {
        ENGINE.clearLayer("lives");
        const cX = 3 * INI.SCREEN_BORDER / 2 - 40;
        const y = ENGINE.titleHEIGHT / 2;
        const spread = ENGINE.spreadAroundCenter(GAME.lives, cX, 32);
        for (let x of spread) {
            ENGINE.spriteDraw("lives", x, y, SPRITE.Lives);
        }
    },
    keys() {
        ENGINE.clearLayer("keys");
        let refY = TITLE.stack.Y2 + TITLE.stack.DYR;
        let list = [...HERO.inventory.key, ...HERO.inventory.status, ...HERO.inventory.item];
        let NUM = list.length;
        NUM = Math.min(4, NUM);
        let spread = ENGINE.spreadAroundCenter(NUM, ENGINE.sideWIDTH / 2, TITLE.stack.keyDelta);
        for (const [i, item] of list.entries()) {
            if (i >= INI.INVENTORY_HARD_LIMIT) break;
            let x = spread[i % NUM];
            let dy = Math.floor(i / NUM);
            let y = refY + (dy * TITLE.stack.deltaItem);
            ENGINE.spriteDraw("keys", x, y, SPRITE[item.spriteClass]);
        }
    },
    scrolls() {
        const INV = HERO.inventory.scroll;
        ENGINE.clearLayer("scrolls");
        const CTX = LAYER.scrolls;

        TITLE.stack.scrollIndex = Math.min(TITLE.stack.scrollIndex, INV.size() - 1);
        let scrollSpread = ENGINE.spreadAroundCenter(TITLE.stack.scrollInRow, ((ENGINE.sideWIDTH / 2) | 0) - 16, TITLE.stack.scrollDelta);

        let LN = INV.size();
        let startIndex = Math.min((TITLE.stack.scrollIndex - TITLE.stack.scrollInRow / 2) | 0, LN - TITLE.stack.scrollInRow);
        startIndex = Math.max(0, startIndex);
        let max = startIndex + Math.min(TITLE.stack.scrollInRow, LN);
        let y = TITLE.stack.OY;
        for (let q = startIndex; q < max; q++) {
            let scroll = INV.list[q];
            let x = scrollSpread.shift();

            if (q === TITLE.stack.scrollIndex) {
                CTX.globalAlpha = 1;
            } else {
                CTX.globalAlpha = 0.75;
            }

            ENGINE.draw("scrolls", x, y, scroll.object.sprite);

            CTX.font = "10px Consolas";
            CTX.fillStyle = "#FFF";
            CTX.fillText(scroll.count.toString().padStart(2, "0"), x + 40, y + 48);

            if (q === TITLE.stack.scrollIndex) {
                CTX.strokeStyle = "#FFF";
                CTX.globalAlpha = 0.5;
                CTX.lineWidth = "1";
                CTX.beginPath();
                CTX.rect(x - 5, y - 10, 48 + 10, 48 + 20);
                CTX.closePath();
                CTX.stroke();
            }
        }
    },
    music() {
        AUDIO.Title.play();
    },
    gold() {
        ENGINE.clearLayer("gold");
        const CTX = LAYER.gold;
        CTX.textAlign = "left"
        CTX.fillStyle = "#BF9B30";
        let fs = 26;
        let y = TITLE.stack.goldY + fs / 2;

        CTX.font = `${fs}px Pentagram`;
        const DX = Math.ceil(CTX.measureText(`GOLD: `).width);
        fs = 30;
        CTX.font = `${fs}px CPU`;
        const DX2 = Math.ceil(CTX.measureText(GAME.gold.toString().padStart(6, "0")).width);
        const x = (ENGINE.gameWIDTH + INI.SCREEN_BORDER) - DX - DX2;
        TITLE.stack.goldX = x;

        fs = 26;
        CTX.font = `${fs}px Pentagram`;
        CTX.fillText(`GOLD: `, TITLE.stack.goldX, y);

        fs = 30;
        CTX.font = `${fs}px CPU`;
        CTX.fillText(GAME.gold.toString().padStart(6, "0"), TITLE.stack.goldX + DX, y);
    },

    setEndingCreditsScroll() {
        console.group("endingCredits");
        const text = this.generateEndingCredits();
        const RD = new RenderData("Pentagram", 30, "#DAA520", "text", "#000", 1, 1, 1);
        GAME.endingCreditText = new VerticalScrollingText(text, 1, RD);
        console.groupEnd("endingCredits");
    },
    generateEndingCredits() {
        const text = `Congratulations!

        You have completed
        Haunting the Hauntessa
        in ${GAME.time.timeString()}.

        Apparitias defeated,
        Hauntessa Spookish
        turned to ash and dust.

        A power vacuum yawns
        in the Hauntosphere.
        Who will seize it?
        Not your problem,
        for now ...

        You live happily ever after
        as the Princess.

        Are your cousins plotting?
        Those bitches.
        You may need to get
        your heels dirty again!
        
        Maybe in the next game ...

        CREDITS:
        Code and direction, Lovro Selic
        Written in JavaScript and GLSL

        jQuery: John Resig et al
        glMatrix: Brandon Jones and
        Colin MacKenzie IV

        Graphics from free sources,
        plus PiskelApp and Blender
        Textures and images by AI:
        Stable Diffusion, Ideogram, 
        Flux.1D, Flux.2D.

        Supplementary tools,
        JavaScript, Python, C++

        Music, 'Graveyard In The Moonlight'
        written and performed by LaughingSkull,
        \u00A9 2006 Lovro Selic

        Thanks for sticking to the end.`;
        return text;
    },

};

// -- main --
$(() => {
    SPEECH.init();
    PRG.INIT();
    PRG.setup();
    ENGINE.LOAD.preload();
    UNIFORM.setup();
});