const options = {
    targetSelector: '#scene',
    width: 800, height: 600
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);