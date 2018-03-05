
$(document).ready(function () {
    var choosePlayer = true;
    var idValue = " ";
    var jqId = " ";

    var game = {
        player: {
            id: " ",
            name: " ",
            img: " ",
            health: 0,
            baseAttack: 0,
            attack: 0,
        },
        defender: {
            id: " ",
            name: " ",
            img: " ",
            health: 0,
            counterAttack: 0,
        },
        character: [
            {
                id: "kanan",
                name: "Kanan Jarrus",
                img: "assets/images/kanan.jpg",
                health: 100,
                baseAttack: 9,
                attack: 9,
                counterAttack: 20,
                isPLayer: false,
                isEnemy: false,
                isDefender: false
            },
            {
                id: "ahsoka",
                name: "Ahsoka Tano",
                img: "assets/images/ahsoka.jpg",
                health: 125,
                baseAttack: 17,
                attack: 17,
                counterAttack: 18,
                isPLayer: false,
                isEnemy: false,
                isDefender: false
            },
            {
                id: "inquisitor",
                name: "Grand Inquisitor",
                img: "assets/images/inquisitor.png",
                health: 150,
                baseAttack: 13,
                attack: 13,
                counterAttack: 6,
                isPLayer: false,
                isEnemy: false,
                isDefender: false
            },
            {
                id: "thrawn",
                name: "Grand Admiral Thrawn",
                img: "assets/images/thrawn.jpg",
                health: 175,
                baseAttack: 11,
                attack: 11,
                counterAttack: 14,
                isPLayer: false,
                isEnemy: false,
                isDefender: false
            }
        ],
        displayChar: function (container, charId, charName, charImg, charHealth) {
            $(container).append(
                `<div id=` + charId + ` class="character 
                    col-sm text-center mx-3">
                <div class="p-1">` + charName + `</div>
                <div>
                    <img src=` + charImg + ` alt=` + charName +
                ` height="150" width="150">
                </div>
                <div class="p-1">` + charHealth + `</div>
            </div>`
            );
        },
        pickPlayer: function (event) {
            idValue = $(event.currentTarget).attr("id").trim();

            game.character.forEach(function (obj) {
                jqId = "#" + obj.id;

                if (obj.id === idValue) {
                    obj.isPLayer = true;
                    game.player.id = obj.id;
                    game.player.name = obj.name;
                    game.player.img = obj.img;
                    game.player.health = obj.health;
                    game.player.baseAttack = obj.baseAttack;
                    game.player.attack = obj.attack;

                    game.displayChar(
                        "#player",
                        obj.id,
                        obj.name,
                        obj.img,
                        obj.health
                    );
                    $("#player").prepend(
                        "<h2>PLAYER</h2>"
                    );
                } else {
                    obj.isEnemy = true;
                    game.displayChar(
                        "#avail-enemies",
                        obj.id,
                        obj.name,
                        obj.img,
                        obj.health
                    );
                }
            });

            $("#avail-players").empty();
        },
        pickDefender: function (event) {
            idValue = $(event.currentTarget).attr("id").trim();
            jqId = "#" + idValue;
            $(jqId).detach();

            game.character.forEach(function (obj) {
                if (obj.id === idValue && obj.isEnemy) {
                    obj.isDefender = true;
                    game.defender.id = obj.id;
                    game.defender.name = obj.name;
                    game.defender.img = obj.img;
                    game.defender.health = obj.health;
                    game.defender.counterAttack = obj.counterAttack;

                    game.displayChar(
                        "#defender",
                        obj.id,
                        obj.name,
                        obj.img,
                        obj.health
                    );
                    $("#defender").prepend(
                        "<h2>DEFENDER</h2>"
                    );

                }
            });
        },
        pickChar: function (event) {
            game.character.forEach(function (obj) {
                if (obj.isPLayer) {
                    choosePlayer = false;
                }
            });
            if (choosePlayer) {
                game.pickPlayer(event);
            } else {
                game.pickDefender(event);
            }
        },
        attack: function (event) {
            $("#avail-players").empty();
            $("#avail-players").removeClass("align-items-start");
            $("#avail-players").addClass("align-items-center");

            game.defender.health -= game.player.attack;
            game.player.health -= game.defender.counterAttack;
            game.player.attack += game.player.baseAttack;

            $("#player").empty();
            $("#defender").empty();

            game.displayChar(
                "#player",
                game.player.id,
                game.player.name,
                game.player.img,
                game.player.health
            );
            $("#player").prepend(
                "<h2>PLAYER</h2>"
            );

            game.displayChar(
                "#defender",
                game.defender.id,
                game.defender.name,
                game.defender.img,
                game.defender.health
            );
            $("#defender").prepend(
                "<h2>DEFENDER</h2>"
            );

            if (game.player.health > 0 && game.defender.health > 0) {
                $("#avail-players").append(
                    `<h3>
                        You attacked ` + game.defender.name + ` for ` +
                        game.player.attack + ` damage. <br>` + 
                        game.defender.name + ` attacked you back for ` +
                        game.defender.counterAttack + ` damage.
                    </h3>`
                );
            } else if (game.player.health <= 0) {
                $("#button-home").empty();
                $("#button-home").append(
                    `<button id="restart-button" 
                             type="button" 
                             class="btn btn-dark btn-lg">
                        Restart
                    </button>`
                );

                $("#avail-players").append(
                    `<h3>
                        You have been defeated. <br>GAME OVER!
                    </h3>`
                );
            } 
            else if ((game.defender.health <= 0) && 
                        ($("#avail-enemies").children().length !== 0)) {
                $("#defender").empty();
                $("#avail-players").append(
                    `<h3>
                        You won! <br>Pick another opponent.
                    </h3>`
                );
            } else {
                $("#defender").empty();
                $("#button-home").empty();

                $("#button-home").append(
                    `<button id="restart-button" 
                             type="button" 
                             class="btn btn-dark btn-lg">
                        Restart
                    </button>`
                );

                $("#avail-players").append(
                    `<h3>
                        You are victorious!
                    </h3>`
                );
            }
        }
    };

    //Start Game
    game.character.forEach(function (obj) {
        game.displayChar(
            "#avail-players",
            obj.id,
            obj.name,
            obj.img,
            obj.health
        );
    });

    $(".container").on("click", ".character", game.pickChar);

    $("#button-home").on("click", "#attack-button", game.attack);

    $("#button-home").on("click", "#restart-button", function () {
        location.reload();
    });
});