scene.background = new THREE.Color(options.backgroundColor);

const defaultMaterial = new THREE.MeshLambertMaterial(
    { 
        color: 0xFFFFFF,
        side: THREE.DoubleSide //Isso define se o objeto é preenchido por dentro E por fora, ou só por dentro, ou só por fora. Por exemplo, um plano, não é visível dos dois lados se isso não for setado como doubleside.
    }
);

//Texto
var teste = null;
var fontLoader = new THREE.FontLoader();
fontLoader.load('./resourses/DancingMinotaur_Regular.json',function(tex){ //obter json de: https://gero3.github.io/facetype.js/
    
    console.log(tex);

    teste = tex;

    var  textGeo = new THREE.TextGeometry('Testando', {
        size: 1,
        height: 0,
        font: tex,
    });
    // textGeo.rotateX(0);
    // textGeo.rotateY(0);
    // textGeo.rotateZ(1);
    // textGeo.translate(2,2,0);
    

    var  color = new THREE.Color();
    color.setRGB(255, 250, 250);
    
    var  textMaterial = new THREE.MeshBasicMaterial({ color: color });
    const  text = new THREE.Mesh(textGeo , textMaterial);
    
    scene.add(text);
    
    let boxMet = new THREE.Box3().setFromObject(text);
    console.log( boxMet.getSize() )

});

x3.add(camera, {open: false});
x3.add(light);

renderer.setAnimationLoop( () => {
    
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene, camera);
    });
});

console.log('fora:', teste);

setTimeout(()=>{
},100);