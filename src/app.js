import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';

//Hexadecimal color (recommended)
var keyboard = {};
var player = { height:1.8, speed:0.08, turnSpeed:Math.PI*0.01 };
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
let loader = new GLTFLoader();


let speed = 0.01;
let spotLight;
let objects = [];
let modeloOne


let video1 = document.getElementById('video1');
let texture1 = new THREE.VideoTexture(video1);
texture1.minFilter = THREE.LinearFilter;
texture1.magFilter = THREE.LinearFilter;
texture1.format = THREE.RGBFormat;
texture1.crossOrigin = 'anonymous';

let video2 = document.getElementById('video2');
let texture2 = new THREE.VideoTexture(video2);
texture2.minFilter = THREE.LinearFilter;
texture2.magFilter = THREE.LinearFilter;
texture2.format = THREE.RGBFormat;
texture2.crossOrigin = 'anonymous';

let video3 = document.getElementById('video3');
let texture3 = new THREE.VideoTexture(video3);
texture3.minFilter = THREE.LinearFilter;
texture3.magFilter = THREE.LinearFilter;
texture3.format = THREE.RGBFormat;
texture3.crossOrigin = 'anonymous';


document.body.onload = () => {
 main()
  var sonido = new audio();
  sonido = "sonido.mp3" 

  const speedUpBtn = document.querySelector('#speedUp');
  const speedDownBtn = document.querySelector('#speedDown');

  speedUpBtn.onclick = () => {
    speed();
  };
  speedDownBtn.onclick = () => {
    speedDown();
  };
};
window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};
export function reset() {
  scene.children = [];
  renderer.setSize(0, 0, true);
}
export function main() {
  reset();
  
  // Configuracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  // Controls
	camera.position.set(0, player.height, -5);
	camera.lookAt(new THREE.Vector3(0,player.height,0));

  // Lights
  setupLights();

  // Modelo
  loadInitialModel();
  loadInitialModel2();
  loadInitialModel3();
  loadInitialModel4();
  loadInitialTextura();
  loadInitialTexto1();
  loadInitialTexto2();
  loadInitialTexto3();

 

  video1.src = "assets/video1.mp4";
  video1.load();
  video1.play();
  
  video2.src = "assets/video2.mp4";
  video2.load();
  video2.play();
  
  video3.src = "assets/video3.mp4";
  video3.load();
  video3.play();
  
 
  

  let plane = drawPlane(20, 20, 10, 10, 0xffffff, true);
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);


  let plane2 = drawPlane(20, 20, 10, 10, '0xffffff', true);
  plane2.rotation.x = Math.PI / 2;
  plane2.position.y = 10;

  //scene.add(plane2);

  let plane3 = drawPlane(20, 7, 10, 10, '0x05ACCA', true);
  plane3.rotation.x = Math.PI;
  plane3.rotation.y = Math.PI /2;
  plane3.position.x = 10;
  plane3.position.y = 3.5;
  scene.add(plane3);

  let plane31 = drawPlane(11, 7, 10, 10, '0xffffff', true);
  plane31.rotation.x = Math.PI;
  plane31.rotation.y = Math.PI /2;
  plane31.position.x = 2.5;
  plane31.position.z = -1.5;
  plane31.position.y = 3.5;
  scene.add(plane31);

  let plane32 = drawPlane(11, 7, 10, 10, '0xffffff', true);
  plane32.rotation.x = Math.PI;
  plane32.rotation.y = Math.PI /2;
  plane32.position.x = -2.5;
  plane32.position.z = -1.5;
  plane32.position.y = 3.5;
  scene.add(plane32);
  let plane312 = drawPlane(3, 3, 10, 10, '0xffffff', true);
  plane312.rotation.x = Math.PI;
  plane312.rotation.y = Math.PI /2;
  plane312.position.x = 2.5;
  plane312.position.z = -8.5;
  plane312.position.y = 5.5;
  scene.add(plane312);

  let plane322 = drawPlane(3, 3, 10, 10, '0xffffff', true);
  plane322.rotation.x = Math.PI;
  plane322.rotation.y = Math.PI /2;
  plane322.position.x = -2.5;
  plane322.position.z = -8.5;
  plane322.position.y = 5.5;
  scene.add(plane322);

  let plane4 = drawPlane(20, 7, 10, 10, '00xffffff', true);
  plane4.rotation.x = Math.PI;
  plane4.rotation.y = Math.PI /2;
  plane4.position.x = -10;
  plane4.position.y = 3.5;
  scene.add(plane4);

  let plane5 = drawPlane(20, 7, 10, 10, '0xffffff', true);
  plane5.rotation.x = Math.PI;
  plane5.rotation.y = Math.PI;
  plane5.position.z = 10;
  plane5.position.y = 3.5;
  scene.add(plane5);
  let plane51 = drawPlane(7.5, 7, 10, 10, '0xffffff', true);
  plane51.rotation.x = Math.PI;
  plane51.rotation.y = Math.PI;
  plane51.position.x = -6.25;
  plane51.position.z = 4;
  plane51.position.y = 3.5;
  scene.add(plane51);
  scene.add(plane5);
  let plane52 = drawPlane(7.5, 7, 10, 10, '0xffffff', true);
  plane52.rotation.x = Math.PI;
  plane52.rotation.y = Math.PI;
  plane52.position.x = 6.25;
  plane52.position.z = 4;
  plane52.position.y = 3.5;
  scene.add(plane52);
  let plane53 = drawPlane(5, 3, 10, 10, '0xffffff', true);
  plane53.rotation.x = Math.PI;
  plane53.rotation.y = Math.PI;
  plane53.position.x = 0;
  plane53.position.z = 4;
  plane53.position.y = 5.5;
  scene.add(plane53);

  let plane6 = drawPlane(20, 7, 10, 10, '0xffffff', true);
  plane6.rotation.x = Math.PI;
  plane6.rotation.y = Math.PI;
  plane6.position.z = -10;
  plane6.position.y = 3.5;
  scene.add(plane6);

  const geometryv1 = new THREE.PlaneGeometry(6, 3, 10, 10);
  const materialv1 = new THREE.MeshBasicMaterial({ map: texture1 });
  const planevideo1 = new THREE.Mesh(geometryv1, materialv1);
  //let planevideo1 = drawPlane(3, 2, 10, 10, '0x05ACCA', true);
  
  //Video Garaje
  planevideo1.rotation.x = Math.PI;
  planevideo1.rotation.z = Math.PI;
  planevideo1.rotation.y = Math.PI/-2;
  planevideo1.position.z = 7;
  planevideo1.position.x = 9.5;
  planevideo1.position.y = 3;
  scene.add(planevideo1);

  const geometryv2 = new THREE.PlaneGeometry(4, 3, 10, 10);
  const materialv2 = new THREE.MeshBasicMaterial({ map: texture2 });
  const planevideo2 = new THREE.Mesh(geometryv2, materialv2);
  //let planevideo2 = drawPlane(4, 3, 10, 10, '0x05ACCA', true);
  
  //video habitacion gamer
  planevideo2.rotation.x = Math.PI;
  planevideo2.rotation.z = Math.PI;
  planevideo2.rotation.y = Math.PI/-2;
  planevideo2.position.z = -2;
  planevideo2.position.x = 9.8;
  planevideo2.position.y = 4;
  scene.add(planevideo2);

  const geometryv3 = new THREE.PlaneGeometry(6, 4, 10, 10);
  const materialv3 = new THREE.MeshBasicMaterial({ map: texture3 });
  const planevideo3 = new THREE.Mesh(geometryv3, materialv3);
  //let planevideo3 = drawPlane(3, 2, 10, 10, '0x05ACCA', true);
 
  //video habitacion de la mujer
  planevideo3.rotation.x = Math.PI;
  planevideo3.rotation.z = Math.PI;
  planevideo3.rotation.y = Math.PI/2;
  planevideo3.position.z = -4;
  planevideo3.position.x = -9.8;
  planevideo3.position.y = 2.8;
  scene.add(planevideo3);
  

  animate();
}
//modelo 1 mujer
function loadInitialModel() {
  loader.load(
    'assets/modeloOne/scene.gltf',
    function (gltf) {
      modeloOne = gltf.scene.children[0];
      //console.log(car.children[0].children[0]);
      gltf.scene.position.y = 0.5;
      gltf.scene.position.x = -6;
      gltf.scene.position.z = 1;
      gltf.scene.rotation.y = Math.PI/2;;
      scene.add(gltf.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}
//modelo2 lamborgini
let modeloTwo

function loadInitialModel2() {
  loader.load(
    'assets/modeloTwo/scene.glb',
    function (glb) {
      modeloTwo = glb.scene.children[0];
      //console.log(car.children[0].children[0]);
      
     glb.scene.position.y = 0.5;
      glb.scene.position.x = -1;
      glb.scene.position.z = 9;
      glb.scene.rotation.y = Math.PI/2;;
      
      
    
      scene.add(glb.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}
//habitacion (sala y cama)
let modeloTres;

function loadInitialModel3() {
  loader.load(
    'assets/modeloTres/scene.glb',
    function (glb) {
      modeloTres = glb.scene.children[0];
      //console.log(car.children[0].children[0]);
      
      glb.scene.position.y = 0.5;
      glb.scene.position.x = -6;
      glb.scene.position.z = -1;
      glb.scene.rotation.y = Math.PI/2;;
      
      
    
      scene.add(glb.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}

//Habitacion gamer
let modeloFour
function loadInitialModel4() {
  loader.load(
    'assets/modeloFour/scene.glb',
    function (glb) {
      modeloFour = glb.scene.children[0];
      //console.log(car.children[0].children[0]);
      
      glb.scene.position.y = -0.5;
      glb.scene.position.x = 5.2;
      glb.scene.position.z = 1;
      glb.scene.rotation.y = Math.PI/2;;
      
      
    
      scene.add(glb.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}

let Textura
function loadInitialTextura() {
  loader.load(
    'assets/texturas/scene.glb',
    function (glb) {
      Textura = glb.scene.children[0];
      //console.log(car.children[0].children[0]);
      
      glb.scene.position.y = 0.5;
      glb.scene.position.x = 1;
      glb.scene.position.z = 1;
      glb.scene.rotation.y = Math.PI/2;
      
      
    
      scene.add(glb.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}

//texto 1 garaje
let Texto1
function loadInitialTexto1() {
  loader.load(
    'assets/Texto1/scene.glb',
    function (glb) {
      Texto1 = glb.scene.children[0];
      //console.log(car.children[0].children[0]);
      
      glb.scene.position.y = 3;
      glb.scene.position.x = 2;
      glb.scene.position.z = 9.5;
      glb.scene.rotation.y = Math.PI/1;
      
      
    
      scene.add(glb.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}
//Texto2 habitacion gamer
let Texto2
function loadInitialTexto2() {
  loader.load(
    'assets/Texto2/scene.glb',
    function (glb) {
      Texto2 = glb.scene.children[0];
      //console.log(car.children[0].children[0]);
      
      glb.scene.position.y = 3;
      glb.scene.position.x = 8.8;
      glb.scene.position.z = -8.8;
      glb.scene.rotation.y = Math.PI/-2;
      
      
    
      scene.add(glb.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}

//Texto3 Dormitorio
let Texto3
function loadInitialTexto3() {
  loader.load(
    'assets/Texto3/scene.glb',
    function (glb) {
      Texto3 = glb.scene.children[0];
      //console.log(car.children[0].children[0]);
      
      glb.scene.position.y = 5;
      glb.scene.position.x = -9.5;
      glb.scene.position.z = -3;
      glb.scene.rotation.y = Math.PI/2;
      
      
    
      scene.add(glb.scene);
     
      
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log(`Un error ocurrio ${error}`);
    },
  );
 
}








function drawPlane(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
    color,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  return plane;
}


function drawCube(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(2,2,2);
  const material = new THREE.MeshPhongMaterial({color : color, wireframe: wireframe,});
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.position.set(0, 20, 0);
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.1;
  spotLight.decay = 1;
  spotLight.distance = 400;

  spotLight.castShadow = true;
  scene.add(spotLight);


}





//movimiento de camara con teclado

function speedUp() {
  speed += 0.001;
}

function speedDown() {
  speed -= 0.001;
}

function animate() {
  requestAnimationFrame(animate);
  if(keyboard[87]){ // W key
    camera.position.x -= (Math.sin(camera.rotation.y) * player.speed) * 0.8;
    camera.position.z -= (-Math.cos(camera.rotation.y) * player.speed) * 0.8;
    }
  if(keyboard[83]){ // S key
    camera.position.x += (Math.sin(camera.rotation.y) * player.speed) * 0.8;
    camera.position.z += (-Math.cos(camera.rotation.y) * player.speed) * 0.8;
    }
  if(keyboard[65]){ // A key
    camera.position.x += (Math.sin(camera.rotation.y + Math.PI/2) * player.speed) * 0.8;
    camera.position.z += (-Math.cos(camera.rotation.y + Math.PI/2) * player.speed) * 0.8;
    }
  if(keyboard[68  ]){ // D key
    camera.position.x += (Math.sin(camera.rotation.y - Math.PI/2) * player.speed) * 0.8;
    camera.position.z += (-Math.cos(camera.rotation.y - Math.PI/2) * player.speed) * 0.8;
    }
  if(keyboard[37]){ // left arrow key
    camera.rotation.y -= player.turnSpeed * 0.8;
    }
  if(keyboard[39]){ // right arrow key
    camera.rotation.y += player.turnSpeed * 0.8;
    }
  //if(keyboard[38]){ // up arrow key
  //  camera.rotation.x -= player.turnSpeed * 0.8;
  //  }
  //if(keyboard[40]){ // down arrow key
  //  camera.rotation.x += player.turnSpeed * 0.8;
  //  }
    //updateElements();
    renderer.render(scene, camera);
  

  
  

  }
  function keyDown(event){
    keyboard[event.keyCode] = true;
  }
  
  function keyUp(event){
    keyboard[event.keyCode] = false;
  }
  
  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);

 //musica ambiente
 const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'assets/sound/acdc.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});