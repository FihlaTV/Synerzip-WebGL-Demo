/**
 * Created with JetBrains WebStorm.
 * User: rohitghatol
 * Date: 7/2/13
 * Time: 9:42 PM
 * To change this template use File | Settings | File Templates.
 */

var Elevator = function(){

    var material =
        new THREE.MeshPhongMaterial({
            ambient: 0x990000,
            color: 0xAA0000,
            specular: 0xffffff,
            shininess: 100,

        });

    var group = new THREE.Object3D();

    var elevatorFloor = new THREE.Mesh(new THREE.CubeGeometry(95,5,45),material);
    var elevatorTop = new THREE.Mesh(new THREE.CubeGeometry(95,5,45),material);
    elevatorTop.position.y=40;

    var elevatorLeft = new THREE.Mesh(new THREE.CubeGeometry(2,40,45),material);
    elevatorLeft.position.y=20;
    elevatorLeft.position.x=-48;

    var elevatorRight = new THREE.Mesh(new THREE.CubeGeometry(2,40,45),material);
    elevatorRight.position.y=20;
    elevatorRight.position.x=48;

    var elevatorBack = new THREE.Mesh(new THREE.CubeGeometry(95,40,2),material);
    elevatorBack.position.y=20;
    elevatorBack.position.x=0;
    elevatorBack.position.z=-22;

    var elevatorFrontLeftFixed = new THREE.Mesh(new THREE.CubeGeometry(25,40,2),material);
    elevatorFrontLeftFixed.position.x=0;


    var elevatorFrontRightFixed = new THREE.Mesh(new THREE.CubeGeometry(25,40,2),material);
    elevatorFrontRightFixed.position.x=75;

    var elevatorFrontLeftMoving = new THREE.Mesh(new THREE.CubeGeometry(24,40,2),material);
    elevatorFrontLeftMoving.position.z=2;
    elevatorFrontLeftMoving.position.x=25;

    var elevatorFrontRightMoving = new THREE.Mesh(new THREE.CubeGeometry(24,40,2),material);
    elevatorFrontRightMoving.position.z=2;
    elevatorFrontRightMoving.position.x=50;


    var frontDoorGroup = new THREE.Object3D();
    frontDoorGroup.add(elevatorFrontLeftFixed);
    frontDoorGroup.add(elevatorFrontRightFixed);
    frontDoorGroup.add(elevatorFrontLeftMoving);
    frontDoorGroup.add(elevatorFrontRightMoving);


    frontDoorGroup.position.y=20;
    frontDoorGroup.position.x=-38;
    frontDoorGroup.position.z=22;


    group.add(elevatorTop);
    group.add(elevatorLeft);
    group.add(elevatorRight);
    group.add(elevatorBack);
    group.add(elevatorFloor);

    group.add(frontDoorGroup);


    var self = this;

    self.mesh =  group;

    self.openDoor = function(callback){

        var position = { left:25 ,right:50};
        var target = { left : 0,right:75};

        console.log("Opening Elevator Door");

        var tween = new TWEEN.Tween(position).to(target, 2000);
        elevatorFrontLeftMoving.needsUpdate = true;
        elevatorFrontRightMoving.needsUpdate = true;

        tween.onUpdate(function(){
            elevatorFrontLeftMoving.position.x =  position.left;
            elevatorFrontRightMoving.position.x =  position.right;
        });
        tween.onComplete(function(){
            console.log("Door Opened");
            setTimeout(function(){
                self.closeDoor(callback);
            },2000);


        })
        tween.start();
    }

    self.closeDoor = function(callback){
        var position = { left:0 ,right:75};
        var target = { left : 25,right:50};

        console.log("Closing Elevator Door");

        var tween = new TWEEN.Tween(position).to(target, 2000);
        elevatorFrontLeftMoving.needsUpdate = true;
        elevatorFrontRightMoving.needsUpdate = true;

        tween.onUpdate(function(){
            elevatorFrontLeftMoving.position.x =  position.left;
            elevatorFrontRightMoving.position.x =  position.right;
        });
        tween.onComplete(function(){
            console.log("Door Closed");
            if(callback!=null){
                callback();
            }
        })
        tween.start();
    }

    self.gotoFloor = function(from,to,callback){

        var position = { y:from * 40 };
        var target = { y : to * 40 };
        console.log("Moving Elevator from y "+position.y +" to "+target.y);

        var tween = new TWEEN.Tween(position).to(target, 2000);
        group.needsUpdate = true;

        tween.onUpdate(function(){
            group.position.y = position.y;
        });
        tween.onComplete(function(){
            console.log("Reached floor "+to);
            self.openDoor(callback);


        })
        tween.start();
    }

    self.animate = function(){
        self.gotoFloor(0,1,function(){
            self.gotoFloor(1,2,function(){
                self.gotoFloor(2,1,function(){
                    self.gotoFloor(1,0,function(){

                    });
                });
            });
        });
    }
    return self;

}
