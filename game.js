class Game{

constructor(){

}


getstate(){

var location=database.ref('GameState')
location.on("value",function (data){
    gamestate=data.val()
})
}

updatestate(state){
    var location2=database.ref()
    location2.update({
        GameState:state
    })
}

start(){

    if (gamestate===0){
        form=new Form()
    form.display()
    player=new Player()
    player.getcount()
    }


}

}