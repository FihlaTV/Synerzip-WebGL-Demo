/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 7/2/13
 * Time: 8:50 PM
 * To change this template use File | Settings | File Templates.
 */

var Pillar = function(x,y,z){

    var cylinderGeometry = new THREE.CylinderGeometry(5, 5, 125, 50, 50, false)

    var material =
        new THREE.MeshPhongMaterial({
            // light
            specular: '#a9fcff',
            // intermediate
            color: '#00abb1',
            // dark
            emissive: '#006063',
            shininess: 100
        });

    var self = this;

    self.mesh = new THREE.Mesh(cylinderGeometry,material);

    self.mesh.position.x=x;
    self.mesh.position.y=y;
    self.mesh.position.z=z;


    return self;

}