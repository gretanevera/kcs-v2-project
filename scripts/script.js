console.log('Dont run in circles')

//little engine for divs apearing in htmls, by random
// this is a test comment
// hide one page in sourceCode

var pagesCollected;
var timeUntilCaught = 0; //seconds
var pageAppearsInThisPath; //boolean
var theGameHasStarted = false; //boolean
var gameDifficulty = { //game difficulty changes the time you can spend on one page and where notes could be hidden. every note found will decrease the timeLeft until gameover. 
    blessed:{},//all notes are visible 
    hunted:{},//7 notes visible, one is a puzzle (most likely hidden in parapgaphs)
    cursed:{}//5 notes are visible, 2 are puzzles (one will give hints in console other will be hidden in paragraph text(could be noticed ir source code though)), one is hidden in code
}

// new game redirects to first page
//optional - choose difficulty. dificulty stored: js - in an object/array, backend -  in a database


function newGame() {
    console.log('the game has started')
    pagesCollected = 0;
    theGameHasStarted = true;
    //choose difficulty
    //redirect to new game enviroment

}

//load game may load from local storage for full front-end exp or from database for fullstack
function loadGame() {
    console.log('this should load a game')
    theGameHasStarted = true;
}

//starts a modal with game instuctions, 
function help() {
    console.log('this will show a modal with instructions')
}


//GAME MECHANICKS. MAY MOVE TO A SEPERATE FILE AND NOT USE FOR A FRONT PAGE.

// to do: write a code that causes game over of player . COD= running in circles
// to do: make a title (in html, tad tittle, change text. add array of possible messages)
// to do: write a code to change background when needed. learn to animate with css and js


if (timeUntilCaught <= 0) {
    gameOver();
};

function gameOver() {
    //show how many mages collected
    //how highscore? (how fast pages found and how many?)
    //show main menu or allow to redirect to main menu
    console.log('game over')
    theGameHasStarted = false;
};
