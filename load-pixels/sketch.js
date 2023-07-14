function setup() {
    createCanvas(400, 400);
    pixelDensity=1
  }
  
  function draw() {
    background(220);
   
    loadPixels()
  
    for(let y=0;y<height;y++){
      for(let x=0;x<width;x++){
        let index=(x+y*width)*4
        pixels[index]=y
        pixels[index+1]=255
        pixels[index+2]=x
        pixels[index+3]=200
      }
    }
    updatePixels()
  }