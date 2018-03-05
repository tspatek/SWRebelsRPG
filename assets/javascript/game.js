
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
                } else {
                    obj.isEnemy = true;

                    $(jqId).css("background-color", "#be5457");
                    $(jqId).css("color", "#fefcf9");

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

            // Append <h2>PLAYER</h2> to id="kanan-home"

            // Change id avail players class attr to 
            // align-items-start

            // charaters without selected id are moved
            // to Enemies area 

            // Append <h2>AVAILABLE ENEMIES</h2> to
            // id avial-enemies 

            // Append <h2>DEFENDER</h2> to id="thrawn-home"

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
                    game.defender.img = obj.name;
                    game.defender.health = obj.health;
                    game.defender.counterAttack = obj.counterAttack;

                    game.displayChar(
                        "#defender",
                        obj.id,
                        obj.name,
                        obj.img,
                        obj.health
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
            game.defender.health -= game.player.attack;
            game.player.health -= game.defender.counterAttack;
            game.player.attack += game.player.baseAttack;

            game.character.forEach(function (obj) {
                if (obj.isDefender) {
                    obj.health = game.defender.health;
                }
                if (obj.isPLayer){
                    obj.health = game.player.health;
                    obj.attack = game.player.attack;
                }

            });
            
            $("#player").empty();
            $("#defender").empty();

            game.displayChar(
                "#player",
                game.player.id,
                game.player.name,
                game.player.img,
                game.player.health
            );
            game.displayChar(
                "#defender",
                game.defender.id,
                game.defender.name,
                game.defender.img,
                game.defender.health
            );
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

    $("button").on("click", "#attack-button", game.attack);

    $("button").on("click", "#restart-button", function () {

    });
});