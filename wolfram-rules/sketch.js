let w
let columns
let rows
let board
let next
let UtL
let UuU
let UtR
setup = function() {
    createCanvas(800,800);
    w=5
    columns=Math.floor(width/w)
    rows=Math.floor(height/w)
    board=new Array(columns)
    for(let i=-0;i<columns;i++){
    board[i]=new Array(rows)
    }
    next=new Array(columns)
    for(let i=0;i<columns;i++){
    next[i]=new Array(rows)
    }
    init()
};

draw=function(){
    background(255)
    for (let i=0;i<columns;i++){
    for (let j=0;j<rows;j++){
        if((board[i][j]==1)){
        fill(0)}
        else {
        fill(255)}
        push()
        stroke(0)
        strokeWeight(0.25)
        rect(i*w,j*w,w-1,w-1)
        pop()
    }
    }
}

function XORCompare(i, j) {
    UtL = (board[i - 1][j - 1] == 1);
    UuU = (board[i + 0][j - 1] == 1);
    UtR = (board[i + 1][j - 1] == 1);

    //change this if statement to define a new rule
    if ((UtL && !(UuU || UtR)) || (!UtL && (UuU || UtR))) {
    board[i][j] = 1;
    return board[i][j]
    } else {
    board[i][j] = 0;
    return board[i][j]
    }
}

function init() {
    board[Math.floor((columns - 1) / 2)][0] = 1;
    for (var j = 0; j < rows; j++) {
    for (var i = 0; i < columns; i++) {
        if (i !== 0 && j !== 0 && i !== columns - 1) XORCompare(i, j);
    }
    for (var i2 = columns - 1; i2 > 0; i2--) {
        if (i2 !== 0 && j !== 0 && i2 !== columns - 1) XORCompare(i2, j);
    }
    }
}
