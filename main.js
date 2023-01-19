function preload()
{  
}

function setup()
{
    canvas = createCanvas(800, 500);
    canvas.position(275, 125);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 150, 80, 550, 350);

    fill(255, 0, 0);
    stroke(255, 0, 0);

    circle(750, 460, 70);
    circle(750, 40, 70);
    circle(50, 40, 70);
    circle(50, 460, 70);

    fill(0, 255, 100);
    stroke(255, 255, 100);

    rect(30, 30, 750, 25);
    rect(33, 25, 25, 450);
    rect(740, 25, 25, 450);
    rect(30, 450, 750, 25);
}

function takeSnapshot()
{
    save('Sua_Foto_Decorada')
}
