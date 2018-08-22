let canvas = document.getElementById("mainCanvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let context = canvas.getContext("2d")
class Rain{
    constructor(startingPoint){
        this.startingPoint = startingPoint;
        this.height = 0
    }
    update(){
        
        
        if(this.height >=canvas.height ){
            this.height = 0
            this.drawRain()
        }
        
        else{
            this.height += (Math.random() * 25);
            this.drawRain()
        }
    }
    drawRain(){
        context.beginPath()
        context.lineWidth = 0.7
        context.moveTo(this.startingPoint,this.height)
        context.lineTo(this.startingPoint,this.height+100)
        context.strokeStyle = "#FFFF"
        context.stroke()
    }
}
let drops = []


function makeDrops(){
    
    for(var x = 0;x<=300;x++){
        let startingPoint = Math.random() * window.innerWidth;
        drops.push(new Rain(startingPoint))
        
    }
}

makeDrops()
function animate(){
    
    context.clearRect(0,0,canvas.width,canvas.height)
    
    for(var y = 0;y<drops.length;y++){
        
         drops[y].update()
    }
    
    window.requestAnimationFrame(animate)
    
}

animate()