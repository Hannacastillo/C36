class Player{

    constructor(){
    
    }
    
    
    getcount(){
    
    var location=database.ref('PlayerCount')
    location.on("value",function (data){
    playercount=data.val()
    })
    }
    
    updatecount(count){
        var location2=database.ref()
        location2.update({
            PlayerCount:count
        })
    }
    
  updatename(name){
var location=database.ref("player"+playercount)
location.set({
    name:name
})
 

  }

    
    }
    
    