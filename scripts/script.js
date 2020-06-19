console.log('Dont run in circles')

//little engine for divs apearing in htmls, by random
// this is a test comment
// hide one page in sourceCode

var pagesCollected;
var timeUntilCaught = 0;
var pageAppearsInThisPath; //boolean
var theGameHasStarted = false; //boolean




function newGame() {
    console.log('the game has started')
    pagesCollected = 0;
    theGameHasStarted = true;
    //choose difficulty
    //redirect to new game enviroment

}
function loadGame() {
    console.log('this should load a game')
    theGameHasStarted = true;
}
function help() {
    console.log('this will show a modal with instructions')
}

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
