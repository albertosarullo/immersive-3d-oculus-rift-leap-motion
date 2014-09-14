// Generated by CoffeeScript 1.7.1
(function() {
  var clock = new THREE.Clock();
  var createLight, cube, cube2, effect, geometry, material, onResize, render, renderer;

  window.scope = {
    x: 0,
    y: 0,
    light1position: new THREE.Vector3(1, 1, 1),
    rate: 1
  };

  window.scene = new THREE.Scene();

  window.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  effect = new THREE.OculusRiftEffect(renderer, {
    worldScale: 2
  });

  effect.setSize(window.innerWidth, window.innerHeight);

  renderer.shadowMapEnabled = true;

  onResize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
    return effect.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onResize, false);

  document.body.appendChild(renderer.domElement);

  

  material = new THREE.MeshPhongMaterial({
    ambient: 0x888888,
    color: 0xff00ff,
    emissive: 0x888888
  });
/*
  cube = new THREE.Mesh(geometry, material);
  cube.position.set(-200, -200, -200);
  cube.receiveShadow = true;
  scene.add(cube);
*/
/*

 
        var urls = [
          "img/stampante.png", "img/stampante.png",
          "img/stampante.png", "img/stampante.png",
          "img/stampante.png", "img/stampante.png"
        ];

        var textureCube = THREE.ImageUtils.loadTextureCube( urls );
        

        var shader = THREE.ShaderLib[ "cube" ];
            shader.uniforms[ "tCube" ].value = textureCube;

        materialPrinter = new THREE.ShaderMaterial( {
          fragmentShader: shader.fragmentShader,
          vertexShader: shader.vertexShader,
          uniforms: shader.uniforms,
          depthWrite: false,
          side: THREE.DoubleSide
        } );

*/
    var path = "img/";
    var format = '.png';
    var urls = [
      path + 'px' + format, path + 'nx' + format,
      path + 'py' + format, path + 'ny' + format,
      path + 'pz' + format, path + 'nz' + format
    ];

  var textureCube = THREE.ImageUtils.loadTextureCube( urls );

  handMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );
  handMaterial.skinning = true;


var text = '3D PRINTER';
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
        bitmap.width = 125;
        bitmap.height = 50;

    g.fillStyle = 'gray';
    g.fillRect(0, 0, bitmap.width, bitmap.height);
    g.font = '19px Arial';
    g.fillStyle = 'white';
    g.fillText(text, 5, 31);

var printerCanvasTexture = new THREE.Texture(bitmap);
    printerCanvasTexture.needsUpdate = true;



var text = 'PRINTING..';
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
        bitmap.width = 110;
        bitmap.height = 50;

    g.fillStyle = 'red';
    g.fillRect(0, 0, bitmap.width, bitmap.height);
    g.font = '18px Arial';
    g.fillStyle = 'white';
    g.fillText(text, 5, 31);

var printerActiveCanvasTexture = new THREE.Texture(bitmap);
    printerActiveCanvasTexture.needsUpdate = true;





var text = 'DRAG ME';
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
        bitmap.width = 95;
        bitmap.height = 50;

    g.fillStyle = 'white';
    g.fillRect(0, 0, bitmap.width, bitmap.height);
    g.font = '18px Arial';
    g.fillStyle = 'black';
    g.fillText(text, 5, 30);

var materialNormalTexture = new THREE.Texture(bitmap);
    materialNormalTexture.needsUpdate = true;






var text = 'DROP ME';
var bitmap = document.createElement('canvas');
var g = bitmap.getContext('2d');
        bitmap.width = 100;
        bitmap.height = 50;

    g.fillStyle = 'white';
    g.fillRect(0, 0, bitmap.width, bitmap.height);
    g.font = '18px Arial';
    g.fillStyle = 'black';
    g.fillText(text, 5, 30);

var materialActiveTexture = new THREE.Texture(bitmap);
    materialActiveTexture.needsUpdate = true;






materialPrinter = new THREE.MeshBasicMaterial( {map: printerCanvasTexture, side:THREE.DoubleSide } );
materialPrinterActive = new THREE.MeshBasicMaterial( {map: printerActiveCanvasTexture, side:THREE.DoubleSide } );

materialNormal = new THREE.MeshBasicMaterial( {map: materialNormalTexture, side:THREE.DoubleSide } );
materialActive = new THREE.MeshBasicMaterial( {map: materialActiveTexture, side:THREE.DoubleSide } );
/*
  materialNormal = new THREE.MeshPhongMaterial({
    ambient: 0x888888,
    color: 0x888888,
    emissive: 0x888888
  });


  materialActive = new THREE.MeshPhongMaterial({
    ambient: 0x0000ff,
    color: 0x0000ff,
    emissive: 0x0000ff
  });

*/
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.position.set( 0, 1, 0 );
  scene.add( directionalLight );


  printerGeometry = new THREE.CubeGeometry(200, 50, 200);
  printer = new THREE.Mesh(printerGeometry, materialPrinter);
  printer.position.set(0, -150, -300);

  printer.receiveShadow = true;

  scene.add(printer);

  geometry = new THREE.CubeGeometry(100, 100, 100);

  destination = new THREE.Mesh(geometry, materialNormal);
  destination.interactionDelta = { x: 0, y: 10, z: 0};
  destination.position.set(0, 150, -400);

  destination.receiveShadow = true;

  scene.add(destination);


    var path = "img/";
    var format = '.png';
    var urls = [
      path + 'px' + format, path + 'nx' + format,
      path + 'py' + format, path + 'ny' + format,
      path + 'pz' + format, path + 'nz' + format
    ];

    var textureCube = THREE.ImageUtils.loadTextureCube( urls );
    

    var shader = THREE.ShaderLib[ "cube" ];
        shader.uniforms[ "tCube" ].value = textureCube;

    materialTexture = new THREE.ShaderMaterial( {
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide
    } );


    var materialReflection = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: materialTexture } );

    mesh = new THREE.Mesh( new THREE.BoxGeometry( 1000, 1000, 1000 ), materialTexture );
    scene.add( mesh );

      
  window.lights = [];

  window.lightVisualizers = [];

  createLight = function() {
    var light, lightVisualizer;
    light = new THREE.PointLight(0xffffff, 0, 1000);
    scene.add(light);
    lights.push(light);
    lightVisualizer = new THREE.Mesh(new THREE.SphereGeometry(4), new THREE.MeshBasicMaterial(0x555555));
    scene.add(lightVisualizer);
    lightVisualizer.visible = false;
    return lightVisualizers.push(lightVisualizer);
  };

  createLight();

  createLight();

  createLight();

  createLight();

  controls = new THREE.FirstPersonControls( camera );
  controls.movementSpeed = 4000;
  controls.lookSpeed = 3.0;
  controls.lookVertical = true;


  oculuscontrol = new THREE.OculusControls( camera );
  oculuscontrol.connect();

  render = function() {

    var t = clock.getElapsedTime();
    var delta =  clock.getDelta();
    
    handsUpdate();

    controls.update(clock.getDelta() );
    
    oculuscontrol.update( clock.getDelta() );

    effect.render(scene, camera);

    return requestAnimationFrame(render);
  };

  render();

}).call(this);

function handsUpdate() {

  //console.log(123);
    if (destination.material === materialActive) {
      if (destination.hand !== null) {
        destination.rotation.x = destination.hand.rotation.x;
        destination.rotation.y = destination.hand.rotation.y;
        destination.rotation.z = destination.hand.rotation.z;
        destination.position.x = destination.hand.position.x - destination.interactionDelta.x * 0.7;
        destination.position.y = destination.hand.position.y - destination.interactionDelta.y * 0.7;
        destination.position.z = destination.hand.position.z - destination.interactionDelta.z * 0.7;
      }
    } else {
      if (destination.hand === null) {
        destination.rotation.x = destination.rotation.x + 0.015;
        destination.rotation.y = destination.rotation.y + 0.015;
        destination.rotation.z = destination.rotation.z + 0.015;
      }
    }

    // printer collision
    if (destination.hand) {
      if (destination.material === materialActive) {
        if (printer.position.distanceToSquared(destination.position) < 10000) {
          printer.material = materialPrinterActive;
          destination.isPrinted = true;

          destination.rotation.fromArray([0,0,0]);
          destination.position.set(0, 100, -400);
          destination.material = materialNormal;
          destination.hand = null;

          destination.visible = false;
          setTimeout(function() {
            destination.visible = true;
            printer.material = materialPrinter;
          }, 5000);
          // printModel();
        } else {
          if (destination.isPrinted) {
          
          }
          //printer.material = materialPrinter;
        }
      }
    }
}
