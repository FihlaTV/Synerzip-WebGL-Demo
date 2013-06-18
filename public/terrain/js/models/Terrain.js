/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 6/17/13
 * Time: 9:12 PM
 * To change this template use File | Settings | File Templates.
 */

    // Custom Terrain class
Terrain = function()
{
    Sim.Object.call(this);
}

Terrain.prototype = new Sim.Object();

Terrain.prototype.init = function()
{
    // Create a group to contain Terrain and Clouds
    var terrainGroup = new THREE.Object3D();

    // Tell the framework about our object
    this.setObject3D(terrainGroup);

    // Add the earth globe and clouds
    this.createTerrain();

}

Terrain.prototype.createTerrain = function()
{
    // Create our Terrain with nice texture - normal map for elevation, specular highlights
    this.terrainGeometry = new THREE.PlaneGeometry(600, 600,30,30);

    for(var index=0;index<this.terrainGeometry.vertices.length;index++){
        this.terrainGeometry.vertices[index].z= Math.floor((Math.random()*10)+1);
    }

    this.terrainMaterial = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: THREE.ImageUtils.loadTexture('images/terrain.jpg'),
        transparent:true,
        opacity:0.8
        //wireframe: true,
        //color: 'blue'
    });

    this.terrainMesh = new THREE.Mesh(this.terrainGeometry,this.terrainMaterial);
    this.terrainMesh.overdraw = true;

    this.object3D.add(this.terrainMesh);

    this.update();
}




Terrain.prototype.update = function()
{
    Sim.Object.prototype.update.call(this);
}