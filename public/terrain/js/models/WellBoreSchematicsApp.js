/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 6/17/13
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */
// Constructor
WellBoreSchematicsApp = function()
{
    Sim.App.call(this);
}

// Subclass Sim.App
WellBoreSchematicsApp.prototype = new Sim.App();

// Our custom initializer
WellBoreSchematicsApp.prototype.init = function(param)
{
    // Call superclass init code to set up scene, renderer, default camera
    Sim.App.prototype.init.call(this, param);

    // Create the Terrain and add it to our sim
    var terrain = new Terrain();
    terrain.init();
    this.addObject(terrain);

    // Create the Oil Well
    var oilWell = new OilWell();
    oilWell.init();
    this.addObject(oilWell);

    var path = [
        {
            from:{x:0,y:0,z:0},
            to:{x:0,y:0,z:-50}
        },
        {
            from:{x:0,y:0,z:-50},
            to:{x:10,y:10,z:-90}
        },
        {
            from:{x:0,y:0,z:-50},
            to:{x:0,y:0,z:-100}
        },
        {
            from:{x:10,y:10,z:-90},
            to:{x:10,y:40,z:-100}
        },
        {
            from:{x:10,y:10,z:-90},
            to:{x:40,y:40,z:-100}
        },
        {
            from:{x:10,y:40,z:-100},
            to:{x:10,y:60,z:-100}
        },
        {
            from:{x:40,y:40,z:-100},
            to:{x:100,y:100,z:-100}
        },
        {
            from:{x:10,y:60,z:-100},
            to:{x:10,y:100,z:-100}
        }
    ];



    // Create the Well Bore Tree
    var wellBoreTree = new WellBoreTree();
    wellBoreTree.init(path);
    this.addObject(wellBoreTree);

    // Create the Well Bore Tree
    var wellCasing = new WellCasing();
    wellCasing.init(path);
    this.addObject(wellCasing);

    // Move the camera back so we can see our Moon
    this.camera.rotation.x = 60 * (Math.PI / 180);
    this.camera.position.y = -100;
    this.camera.position.z = 100;

    this.scene.add(new THREE.AmbientLight(0x000044));
}

