noseX = 0;
noseY = 0;

function preload()
{
  bigode = loadImage('https://i.postimg.cc/pXPFCSb0/bigode.png');
}

function setup()
{
  canvas = createCanvas(350, 350);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(350, 350);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('O poseNet inicializou');
}

function gotPoses(results)
{
  if (results.length > 0 )
  {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);

    noseX = results[0].pose.nose.x - 8;
    noseY = results[0].pose.nose.y + 1;
  }
}

function draw()
{
  image(video, 0 , 0, 350, 350);
  image(bigode, noseX, noseY, 60, 60);
}

function takeSnapshot()
{
  save ("Bigode.png");
}

