/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 6/17/13
 * Time: 9:12 PM
 * To change this template use File | Settings | File Templates.
 */

    // Custom WellCasing class
WellCasing = function()
{
    Sim.Object.call(this);
}

WellCasing.prototype = new Sim.Object();

WellCasing.prototype.init = function(path)
{
    this.path = path;
    // Create a group to contain WellCasing and Clouds
    var WellCasingGroup = new THREE.Object3D();

    // Tell the framework about our object
    this.setObject3D(WellCasingGroup);

    // Add the earth globe and clouds
    this.createWellCasing();

}

WellCasing.prototype.createWellCasing = function()
{

    var material = new THREE.MeshBasicMaterial({
        color: 0x0000ff ,
        side: THREE.DoubleSide,
        wireframe: true,
        transparent:true,
        opacity:0.5

    });

    for(var index=0;index<this.path.length;index++){

        var from = new THREE.Vector3(this.path[index].from.x,this.path[index].from.y,this.path[index].from.z);
        var to = new THREE.Vector3(this.path[index].to.x,this.path[index].to.y,this.path[index].to.z);

        var mesh = this.getCylinderMesh(from,to,material);


        this.object3D.add(mesh);
    }
    this.update();
}

WellCasing.prototype.getCylinderMesh = function(point1, point2, material)
{
    var direction = new THREE.Vector3().subVectors(point2, point1);
    var arrow = new THREE.ArrowHelper(direction.clone().normalize(), point1);

    var rotation = new THREE.Vector3().setEulerFromQuaternion(arrow.quaternion);

    var edgeGeometry = new THREE.CylinderGeometry( 2, 2, direction.length(), 20, 20,true );

    var edge = new THREE.Mesh(edgeGeometry, material);
    edge.rotation = rotation.clone();
    edge.position = new THREE.Vector3().addVectors(point1, direction.multiplyScalar(0.5));

    return edge;
}


WellCasing.prototype.update = function()
{
    Sim.Object.prototype.update.call(this);
}