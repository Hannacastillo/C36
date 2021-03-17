

const database=firebase.database()

var gamestate=0
var playercount

var form,game,player

function setup(){
    createCanvas(500,500);
    game=new Game()
    game.start()
}


function draw(){
    background("lightblue")

}


