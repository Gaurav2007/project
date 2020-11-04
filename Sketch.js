const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine,world;

var rectangle;

function setup()
{
    createCanvas(1200,900);

    engine = Engine.create();
    world = engine.world;

    /*let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world , mConstraint);*/

    pendulam1 = new Pendulam(300,600,"red")
    sling1 = new Sling(pendulam1.body,{x:300,y:50});

    pendulam2 = new Pendulam(400,600,"red")
    sling2 = new Sling(pendulam2.body,{x:400,y:50});

    pendulam3 = new Pendulam(500,600,"red")
    sling3 = new Sling(pendulam3.body,{x:500,y:50});

    pendulam4 = new Pendulam(600,600,"red")
    sling4 = new Sling(pendulam4.body,{x:600,y:50});

    pendulam5 = new Pendulam(700,600,"red")
    sling5 = new Sling(pendulam5.body,{x:700,y:50});
}
function draw()
{
    background(0)
    Engine.update;

    pendulam1.display();
    sling1.display();

    pendulam2.display();
    sling2.display();

    pendulam3.display();
    sling3.display();

    pendulam4.display();
    sling4.display();

    pendulam5.display();
    sling5.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(pendulam1.body,{x:mouseX,y:mouseY});
}
