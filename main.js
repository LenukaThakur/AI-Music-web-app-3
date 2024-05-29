rightWristx = 0
rightWristy = 0
leftWristx = 0
leftWristy = 0
peter_pan_song = "";
harry_potter_theme_song = "";
function setup() {
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotresults)
}

function modelLoaded(){
console.log('poseNet is initialised')
}

function gotresults(){

if(results.length > 0){
    console.log(results)
    leftWristx=results[0].pose.leftWrist.x
    leftWristy=results[0].pose.leftWrist.y
    rightWristx=results[0].pose.rightWrist.x
    rightWristy=results[0].pose.rightWrist.y
    console.log(leftWristx)
}
}


function draw() {
    image(video, 0, 0, 450, 400)
}

function preload() {
    peter_pan_song = loadSound("music2.mp3")
    harry_potter_theme_song = loadSound("music.mp3")
}

function play() {
    sound1.play()
    sound2.play()
}

