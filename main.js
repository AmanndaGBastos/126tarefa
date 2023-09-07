

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    //video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    
}
function modelLoaded(){
  console.log("posenet is initialized")
}
