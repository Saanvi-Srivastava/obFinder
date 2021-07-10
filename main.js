video="";
status="";

function preload()
{
    video = createCapture(VIDEO);
    video.hide();

}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}

function start()
{
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    document.getElementById("object_name").value = object_name;
}

function draw()
{ 
    image(video, 0, 0, 480, 380);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}