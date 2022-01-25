scene.background = new THREE.Color(options.backgroundColor);

const whiteMaterial = new THREE.MeshLambertMaterial(
    { 
        color: 0xFFFFFF,
        side: THREE.DoubleSide //Isso define se o objeto é preenchido por dentro E por fora, ou só por dentro, ou só por fora. Por exemplo, um plano, não é visível dos dois lados se isso não for setado como doubleside.
    }
);
const greenMaterial = new THREE.MeshLambertMaterial(
    { 
        color: 0x00FF00,
        side: THREE.DoubleSide //Isso define se o objeto é preenchido por dentro E por fora, ou só por dentro, ou só por fora. Por exemplo, um plano, não é visível dos dois lados se isso não for setado como doubleside.
    }
);

// CUBO
const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1),
    material
);
scene.add(cube);

// CILINDRO
const cylinder = new THREE.Mesh(
    // raioTopo, raioFundo, altura
    new THREE.CylinderBufferGeometry(
        0.1, 0.5, 1 //sempre, medidas no S.I.
    ),
    material
);
cylinder.position.x = 2;
cylinder.position.y = 0;
scene.add(cylinder);

// PLANO
const plane = new THREE.Mesh(
    // largura, altura
    new THREE.PlaneBufferGeometry(
        1, 1
    ),
    material
);
plane.position.x = 2;
plane.position.y = 2;
plane.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(plane);

// ESFERA
const sphere = new THREE.Mesh(
    // raio, segmentosX, segmentosY
    new THREE.SphereBufferGeometry(
        0.3, 20, 20
    ),
    material
);
sphere.position.x = 0;
sphere.position.y = 2;
scene.add(sphere);

//Adicionando itens no depurador
x3.add(camera, {open: false});
x3.add(light);
x3.add(cube);

renderer.setAnimationLoop( () => {
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    x3.tick();
    x3.fps(()=>{
        renderer.render(scene, camera);
    });
});