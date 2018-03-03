
var game = {
    player: {
        name: "",
        health: 0,
        attack: 0,
    },
    defender: {
        name: "",
        health: 0,
        counterAttack: 0
    },
    character: [
        {
            id: "kanan",
            name: "Kanan Jarrus",
            img: "assets/images/kanan.jpg",
            health: 100,
            attack: 9,
            counterAttack: 20
        },
        {
            id: "ahsoka",
            name: "Ahsoka Tano",
            img: "assets/images/ahsoka.jpg",
            healthPoints: 125,
            attackPower: 17,
            counterAttackPower: 18
        },
        {
            id: "inquisitor",
            name: "Grand Inquisitor",
            img: "assets/images/inquisitor.png",
            healthPoints: 150,
            attackPower: 13,
            counterAttackPower: 6
        },
        {
            id: "thrawn",
            name: "Grand Admiral Thrawn",
            img: "assets/images/thrawn.jpg",
            healthPoints: 175,
            attackPower: 11,
            counterAttackPower: 14
        }
    ],
    displayChar: function(container, charId, charName, charImg, charHealth) {
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
    // pickPlayer: function (event) {
    //     event.stopImmediatePropagation();
    //     var idValue = $(event.target).attr('id');
    //     var cssId = "#" + idValue;
    //     console.log(cssId);
    //     console.log(idValue);

    //     game.character.forEach(function (obj) {
    //         if (obj.name === idValue) {
    //             game.player.name = obj.name;
    //             game.player.healthPoints = obj.healthPoints;
    //             game.player.attackPower = obj.attackPower;
    //         }
    //     });

    //     //character with selected id is moved
    //     //to Player area
    //     $(cssId).detach().appendTo("#player");
    //     $(cssId).css("background-color", "#be5457");
    //     $(cssId).css("color", "#fefcf9");

        //Append <h2>PLAYER</h2> to id="kanan-home"

        //Change id avail players class attr to 
        //align-items-start

        //charaters without selected id are moved
        //to Enemies area 

        //Append <h2>AVAILABLE ENEMIES</h2> to
        //id avial-enemies 

        //Append <h2>DEFENDER</h2> to id="thrawn-home"

        //find character object with selected 
        //id and assign to player 

    // },
    // attack: function () {
    //     //triggered by attack button press
    // },
    // restart: function () {
    //     location.reload(true);
    // }
};

$(document).ready(function () {
    game.displayChar(
        "#avail-players", 
        game.character[0].id,
        game.character[0].name,
        game.character[0].img,
        game.character[0].health
    );
    game.displayChar(
        "#avail-players", 
        game.character[1].id,
        game.character[1].name,
        game.character[1].img,
        game.character[1].health
    );
    game.displayChar(
        "#avail-players", 
        game.character[2].id,
        game.character[2].name,
        game.character[2].img,
        game.character[2].health
    );
    game.displayChar(
        "#avail-players", 
        game.character[3].id,
        game.character[3].name,
        game.character[3].img,
        game.character[3].health
    );

    $(".character").on("click", function(){
        // var idValue = $(event.target);
        // console.log(idValue); 
            // .attr('id');
        // var cssId = "#" + idValue;
        // console.log(cssId);
        // console.log(idValue);

        // game.character.forEach(function (obj) {
        //     if (obj.name === idValue) {
        //         game.player.name = obj.name;
        //         game.player.healthPoints = obj.healthPoints;
        //         game.player.attackPower = obj.attackPower;
        //     }
        // });

        // //character with selected id is moved
        // //to Player area
        // $(cssId).detach().appendTo("#player");
        // $(cssId).css("background-color", "#be5457");
        // $(cssId).css("color", "#fefcf9");
    });

    $("#attack").on("click", function () {

    });

    $("#reset").on("click", function () {
    });
});