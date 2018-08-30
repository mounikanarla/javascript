
var readlineSync = require('readline-sync');
var utility=require('../utilities/utility.js')
function playTurn(player) {

    console.log('Your turn player: ' + player);
    var position=readlineSync.question('enter the position');
    {

        if (utility.move(position) === true) {
            utility.markboard(position, player);
            utility.printscreen();
            if (utility.wincase(player) === true) {
                console.log('Winner Winner!');
                return;
            }
            if (player === 'X') {
                playTurn('O');
            } else {
                playTurn('X');
            }
        } else {
            console.log('incorrect input please try again...');
            playTurn(player);
        }
    }
}

console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');


playTurn('X');

