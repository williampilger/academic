scene.background = new THREE.Color(options.backgroundColor);

const defaultMaterial = new THREE.MeshLambertMaterial(
    { 
        color: 0xFFFFFF,
        side: THREE.DoubleSide //Isso define se o objeto é preenchido por dentro E por fora, ou só por dentro, ou só por fora. Por exemplo, um plano, não é visível dos dois lados se isso não for setado como doubleside.
    }
);

//Texto
var fontLoader = new THREE.FontLoader();
fontLoader.load('./resourses/DancingMinotaur_Regular.json',function(tex){ //De: https://gero3.github.io/facetype.js/
    var  textGeo = new THREE.TextGeometry('Test', {
            size: 10,
            height: 0,
            font: tex,
    });
    var  color = new THREE.Color();
    color.setRGB(255, 250, 250);
    var  textMaterial = new THREE.MeshBasicMaterial({ color: color });
    const  text = new THREE.Mesh(textGeo , textMaterial);
    scene.add(text);
})

x3.add(camera, {open: false});
x3.add(light);

renderer.setAnimationLoop( () => {
    

    x3.tick();
    x3.fps(()=>{
        renderer.render(scene, camera);
    });
});