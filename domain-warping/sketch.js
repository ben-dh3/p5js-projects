let cnv1
let warpSizeY = 30
let warpSizeX = 30

function setup() {
  createCanvas(800, 800,WEBGL);
  cnv1 = createGraphics(400, 400)
  noStroke()
}

function draw() {
  background(255);
  camera(200,200,600,200,200,0)
  noLoop()
  pattern()

  texture(cnv1)
  rect(0,-100,400,600);
}

let pattern = function(){
  
  
  for(let i=0;i<height;i+=1){
    for(let j=0;j<width;j+=1){
      const dy = warpSizeY*noise(i,j);
      const dx = warpSizeX*noise(i,j);
      
      cnv1.point(i+dy*0.5,j+dx*0.5)
    }
  }
}