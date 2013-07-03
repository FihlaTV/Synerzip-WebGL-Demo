/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 7/2/13
 * Time: 8:39 PM
 * To change this template use File | Settings | File Templates.
 */


var World = function(){
    //TODO - Get these parameters from a config from the constructor

    var width = $(window).width();
    var height = $(window).height();
    var aspect = width/height;
    var near = 1;
    var far = 1000;
    var angle = 45;

    var createRenderer = function(){
        var renderer =  new THREE.WebGLRenderer({ antialiasing: true });
        renderer.setSize(width,height);
        return renderer;
    }

    var createCamera = function(){
        var camera = new THREE.PerspectiveCamera(
            angle, aspect, near, far);
        camera.position.set( 0, 40, 250 );
        camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
        return camera;
    }


    var createScene = function(){
        var scene = new THREE.Scene();
        return scene;
    }

    var createControls = function(camera){

        var controls = new
            THREE.TrackballControls(camera);

        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;

        controls.noZoom = false;
        controls.noPan = false;

        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        controls.keys = [ 65, 83, 68 ];

        return controls;
    }

    var createLight = function(){
        var light = new THREE.PointLight(0xFFFFFF);
        light.position.x=0;
        light.position.y=0;
        light.position.z=100;
        return light;
    }

    var self = this;
    self.renderer = createRenderer();
    self.scene = createScene();
    self.camera = createCamera();

    self.light = createLight();

    self.controls = createControls(self.camera);
    self.scene.add(self.light);

    var self = this;
    self.render = function(){
        self.renderer.render(self.scene,self.camera);

    }

    self.controls.addEventListener('change',self.render);

    self.animate = function(){
        requestAnimationFrame(self.animate);
        TWEEN.update();
        self.render();
        self.controls.update();

    }


    return self;

}