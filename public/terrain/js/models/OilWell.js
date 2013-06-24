/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 6/17/13
 * Time: 9:12 PM
 * To change this template use File | Settings | File Templates.
 */

    // Custom OilWell class
OilWell = function()
{
    Sim.Object.call(this);
}

OilWell.prototype = new Sim.Object();

OilWell.prototype.init = function()
{
    // Create a group to contain OilWell and Clouds
    var oilWellGroup = new THREE.Object3D();

    // Tell the framework about our object
    this.setObject3D(oilWellGroup);

    // Add the earth globe and clouds
    this.createOilWell();

}

OilWell.prototype.createOilWell = function()
{
    var self=this;
    var loader = new THREE.JSONLoader();
    loader.load( "/terrain/models/Pump Oil.js", function( geometry, materials ) {
        var material = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0x1A1A1A,
            transparent:true,
            opacity:0.5
        });
        new THREE.MeshFaceMaterial( materials )
        this.oilPump = new THREE.Mesh(geometry,new THREE.MeshFaceMaterial( materials ));
        this.oilPump.overdraw = true;
        this.oilPump.position.x=10;
        this.oilPump.position.y=00;
        this.oilPump.position.z=10;
        this.oilPump.scale.x=3;
        this.oilPump.scale.y=3;
        this.oilPump.scale.z=3;
        this.oilPump.rotation.x = 90 * 0.0174532925;

        self.object3D.add(this.oilPump);
        self.update();
    } );
}




OilWell.prototype.update = function()
{
    Sim.Object.prototype.update.call(this);
}