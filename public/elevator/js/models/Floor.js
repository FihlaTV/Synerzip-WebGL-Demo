/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 7/2/13
 * Time: 8:50 PM
 * To change this template use File | Settings | File Templates.
 */

var Floor = function(elevation){

    var floorPlanGeometry = new THREE.CubeGeometry(200,5,100);
    var elevatorSpaceGeometry = new THREE.CubeGeometry(100,5,50);

    var floorCutoutGeometry = (new ThreeBSP(floorPlanGeometry)).subtract(new ThreeBSP(elevatorSpaceGeometry)).toGeometry();


    var textureLava = THREE.ImageUtils.loadTexture(  "img/floor.gif" );
    textureLava.wrapS = textureLava.wrapT = THREE.RepeatWrapping;
    textureLava.format = THREE.RGBFormat;

    var material = new THREE.MeshPhongMaterial( { shininess: 50, ambient: 0xFFFFFF, color: 0xffffff, specular: 0x999999, map: textureLava,emissive: 0x404040 } );

//    var material =
//        new THREE.MeshPhongMaterial({
//            // light
//            specular: '#ffffff',
//            // intermediate
//            color: '#777777',
//            // dark
//            emissive: '#222222',
//            shininess: 100
//        });

    var self = this;

    self.mesh = new THREE.Mesh(floorCutoutGeometry,material);
    self.mesh.position.y=elevation;

    return self;

}