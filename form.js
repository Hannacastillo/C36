class Form{

constructor(){


}

display(){
var title=createElement('h2')
title.html("Car Racing Game")
title.position(400,10)


var input=createInput("name")
input.position(400,160)

var greeting=createElement("h4")


var button=createButton('play')
button.position(400,200)


button.mousePressed(function (){
    input.hide()
    button.hide()
var Name=input.value()
playercount=playercount+1
player.updatename(Name)
player.updatecount(playercount)
greeting.html("Welcome To The Game"+Name)
greeting.position(400,160)
})

}


}