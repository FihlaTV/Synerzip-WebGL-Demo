/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 6/17/13
 * Time: 9:12 PM
 * To change this template use File | Settings | File Templates.
 */

    // Custom WellBoreTree class
WellBoreTree = function()
{
    Sim.Object.call(this);
}

WellBoreTree.prototype = new Sim.Object();

WellBoreTree.prototype.init = function(path)
{
    this.path = path;
    // Create a group to contain WellBoreTree and Clouds
    var wellBoreTreeGroup = new THREE.Object3D();

    // Tell the framework about our object
    this.setObject3D(wellBoreTreeGroup);

    // Add the earth globe and clouds
    this.createWellBoreTree();

}

WellBoreTree.prototype.createWellBoreTree = function()
{

    var material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    for(var index=0;index<this.path.length;index++){
        var geometry = new THREE.Geometry();
        var from = this.path[index].from;
        var to = this.path[index].to;
        geometry.vertices.push(new THREE.Vector3(from.x,from.y,from.z));
        geometry.vertices.push(new THREE.Vector3(to.x,to.y,to.z));
        var line = new THREE.Line(geometry, material);
        this.object3D.add(line);
    }

    this.update();
}




WellBoreTree.prototype.update = function()
{
    Sim.Object.prototype.update.call(this);
}