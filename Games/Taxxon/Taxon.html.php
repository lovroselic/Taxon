<!-- copy start-->
    <div id="preload" class="hidden"></div>
    <div class="container my-5 p-5 cool_page">
        <div id="setup">
            <div id="load"></div>
            <div class="row win">
                <div class="col-12 col-lg-8 my-2 ">
                    <h1 id="title" class="HTH"></h1>
                    <p>You are <em>Bitchosa Grande</em>, also known as the Great Bitch, the most competent tax collector
                        in the known universe, and a fearsome space fighter pilot. Or so the official brochure claims.
                        We are about to test that theory rather thoroughly.</p>
                    <p>Your mission is simple: bring the sacred blessing of taxation to every miserable corner of the
                        galaxy, and crush freedom fighters, obnoxious do-gooders, and every last piece of well-meaning
                        riff-raff standing in your way. Because in this universe, there is only one eternal truth: taxes
                        must be paid.</p>

                </div>
                <div class="col-12 col-lg-4 my-2 white_text d-flex justify-content-center" id="SC">
                </div>
            </div>

        </div>


        <div class="row my-5">
            <div id="debug" class="section">
                <fieldset>
                    <legend>
                        Engine versions:
                    </legend>
                    <p>My custom game engine ENGINE is made from following sub-modules:</p>
                    ENGINE: <span id="engine_version"></span><br>
                    GRID: <span id="grid_version"></span><br>
                    MAZE: <span id="maze_version"></span><br>
                    IAM: <span id="iam_version"></span><br>
                    Prototype LIB: <span id="lib_version"></span><br>
                    WebGL: <span id="webgl_version"></span><br>
                    MAP Tools: <span id="maptools_version"></span><br>
                    SPEECH: <span id="speech_version"></span><br>
                    <br>
                    <p id="speech_sources"></p>
                </fieldset>
            </div>
        </div>

        <div>
            <p id="buttons">
            <div>
                <input type='button' id='pause' value='Pause Game [F4]' disabled="disabled">
                <input type='button' id='toggleHelp' value='Show/Hide Instructions'>
                <input type='button' id='toggleAbout' value='About'>
                <input type='button' id='toggleVersion' value='Version'>
            </div>
            </p>
        </div>

        <div id="help" class="section">
            <fieldset>
                <legend>
                    Instructions:
                </legend>

                <div class="row">
                    <p>Fuel is essential ... </p>
                    <p>Crates are full of fuel.</p>
                    <p>Zeppelins are full of fuel.</p>
                    <p>Baloons posses weapon upgrade.</p>
                </div>

                <div class="row my-3">
                    <p><strong>Survival guide:</strong></p>
                    <p>Shoot and duck, focus on long term survival.</p>
                    <p>Some ships are way faster than others. And smarter. Find your way in a maze of enemies.</p>
                    <p><strong>KEYS:</strong></p>

                    <p><kbd>CURSOR</kbd> ... navigate ship </p>
                    <p><kbd>CTRL</kbd> ... shoot </p>
                    <p><kbd>F4</kbd> ... pause/resume game</p>
                    <p><kbd>1, 3, 4</kbd> ... change perspective </p>

                </div>

            </fieldset>
        </div>

        <div id="about" class="section">
            <fieldset>
                <legend>
                    About:
                </legend>
                <div class="row">
                    <div class="col-12 col-lg-3 my-2 d-flex align-items-center justify-content-center">
                        <image src="/Images/Zaxxon1.webp" alt="Zaxxon" class="img-fluid  border-dark rounded-2"
                            title="Zaxxon">

                    </div>
                    <div class="col-12 col-lg-3 my-2">
                        <p>TaXXon was very obviously conceived as a game inspired by <a target="_blank"
                                href="https://en.wikipedia.org/wiki/Zaxxon">Zaxxon</a> (Sega, 1982). Its axonometric
                            perspective, the very feature that gave the original Zaxxon its name, is recreated here with
                            WebGL, powered by my own 3D game engine, ENGINE, written in JS and GLSL.</p>

                        <p>I played the C64 port of <a href="https://www.c64-wiki.com/wiki/Zaxxon_(Synapse)"
                                target="_blank">Zaxxon</a>, and I distinctly disliked the space section, so my version
                            politely ignores that silly detour.</p>

                        <p>The default view is first person. You can also switch to third-person and to the most
                            historically faithful axonometric perspective, which pays proper homage to the original
                            Zaxxon look. Do keep in mind, though, that those two views are much harder to play. On the
                            bright side, you will get to see your shadow.</p>
                    </div>
                    <div class="col-12 col-lg-3 my-2 d-flex align-items-center justify-content-center">
                        <image src="/Images/Zaxxon2.webp" alt="Zaxxon" class="img-fluid  border-dark rounded-2"
                            title="Zaxxon">

                    </div>
                    <div class="col-12 col-lg-3 my-2 d-flex align-items-center justify-content-center">
                        <image src="/Images/Zaxxon3.webp" alt="Zaxxon" class="img-fluid  border-dark rounded-2"
                            title="Zaxxon">

                    </div>
                </div>
            </fieldset>
        </div>

        <p class="version terminal" id="version"></p>
        <p id="conv" class="warning">Loading large amount of data ... just a minute or two ... be patient</p>
    </div>

    <div class="container">
        <div id="game" class="winTrans"></div>
        <div id="bottom" class="cb" style="margin-top: 1024px"></div>
        <div id="temp" class="hidden"></div>
        <div id="temp2" class="hidden"></div>
    </div>
    <!-- COPY END -->