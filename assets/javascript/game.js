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
        }
    };

    $(".player").on("click", function() {
        
    });
});