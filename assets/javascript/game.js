$(document).ready(function() {
    var game = {
        player: {
            name: game.character,
            healthPoints: game.character.healthPoints,
            attackPower: game.character.attackPower,
            counterAttackPower: game.character.counterAttackPower
        },    
        enemy: {
            name: game.character,
            counterAttackPower: game.character.counterAttackPower
        },    
        character: {
            ahsoka: {
                healthPoints: 0,
                attackPower: 0,
                counterAttackPower: 0
            },
            kanan: {
                healthPoints: 0,
                attackPower: 0,
                counterAttackPower: 0
            },
            thrawn: {
                healthPoints: 0,
                attackPower: 0,
                counterAttackPower: 0
            },
            inquisitor: {
                healthPoints: 0,
                attackPower: 0,
                counterAttackPower: 0
            }
        },
        setup: function() {
            //if 
            if ($(".character-home").
        },
        start: function() {
            //player clicks on character
            //character moves to Player section (middle-left)
            //3 enemies move to Enemies section (bottom-centered)

            //player clicks on enemy
            //enemy moves to Defender section (middle-right)
            //
        },
        attack: function() {
            //triggered by attack button press
        },
    };

    game.setup();
    $(".character").on("click", function() {
        
    });
});