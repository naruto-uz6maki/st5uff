function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}
function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}
function clearCanvas(){
    background("white");
}
