const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x222222
}

const renderer = new THREE.WebGLRenderer(
    { 
        antialias: true //isso evita serrilhado nas bordas do material. Mas consome muito mais processamento.
    }
);
renderer.setPixelRatio(window.devicePixelRatio);//Ajusta o pixel ratio ao display do usuário.

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 50, options.width / options.height );
camera.position.z = 5;

const light = new THREE.HemisphereLight( 0xFFFFBB, 0x000000, 2);
scene.add(light);

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    }
)
