/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 7/2/13
 * Time: 8:50 PM
 * To change this template use File | Settings | File Templates.
 */

var Pillar = function(x,y,z){

    var cylinderGeometry = new THREE.CylinderGeometry(5, 5, 125, 50, 50, false)

    var textureLava = THREE.ImageUtils.loadTexture(  "img/brick1.jpg" );
    textureLava.wrapS = textureLava.wrapT = THREE.RepeatWrapping;
    textureLava.format = THREE.RGBFormat;

    var material = new THREE.MeshPhongMaterial( { shininess: 50, ambient: 0xFFFFFF, color: 0xffffff, specular: 0x999999, map: textureLava,emissive: 0x404040 } );

//    var material =
//        new THREE.MeshPhongMaterial({
//            // light
//            specular: '#a9fcff',
//            // intermediate
//            color: '#00abb1',
//            // dark
//            emissive: '#006063',
//            shininess: 100
//        });

    var self = this;

    self.mesh = new THREE.Mesh(cylinderGeometry,material);

    self.mesh.position.x=x;
    self.mesh.position.y=y;
    self.mesh.position.z=z;


    return self;

}