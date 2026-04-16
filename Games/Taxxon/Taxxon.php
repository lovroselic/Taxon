<!DOCTYPE html>
<?php include_once $_SERVER['DOCUMENT_ROOT'] . '/Include/globals.php';?>
<html lang="en">

<head>
    <?php include_once $GL_root . $GL_path . '/Include/head_includes.php';?>
    <link href="/CSS/Taxxon.css" rel="stylesheet" type="text/css">

    <meta name="description"
        content="Bitchosa Grande, the galaxy's most notorious space tax collector, shoots her way across the universe to ensure that taxes are paid by all." />
    <meta name="keywords" content="arcade, space shooter, retro game, taxxon, zaxxon clone, sci-fi shooter" />

    <link rel="canonical" href="https://www.laughingskull.org/Games/Taxxon/Taxxon.php">
    <title>Taxxon</title>
</head>

<body>
    <?php include_once $GL_root . $GL_path . '/Include/header.php';?>
    <?php include_once $GL_root . $GL_path . '/Include/resolutionAlert.php';?>
    <?php include_once $GL_root . $GL_path . '/Games/Taxxon/Taxxon.html.php';?>
    <?php include_once $GL_root . $GL_path . '/Include/footer.php';?>

    <!-- JS -->
    <script src='/Code/JS/Library/Engine/Prototype_5_02.js' type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/LS_Matrix_1_04.js" type="text/javascript"></script>
    <script src='/Code/JS/Library/Engine/ENGINE_5_01.js' type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/GRID_4_01.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/AI_3_01.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/MAZE_5_00.js" type="text/javascript"></script>
    <script src='/Code/JS/Library/Engine/IndexArrayManagers_4_01.js'></script>
    <script src="/Code/JS/Library/Engine/BWT_1_00.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/WebGL_2_01.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/GenericTimers_1_03.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/Lights_and_materials_1_05.js" type="text/javascript"></script>
    <script src="/Assets/Definitions/Taxxon/assets_Taxxon.js" type="text/javascript"></script>
    <script src="/Assets/Definitions/Taxxon/Monsters_Taxxon.js" type="text/javascript"></script>
    <script src="/Assets/Definitions/Taxxon/MAP_Taxxon.js" type="text/javascript"></script>
    <script src="/Code/JS/Library/Engine/MAP and SPAWN tools_2_01.js" type="text/javascript"></script>
    <script src='/Code/JS/Library/Misc/score_1_05.js'></script>
    <script src="/Games/Taxxon/Taxxon.js" type="text/javascript"></script>
</body>

</html>