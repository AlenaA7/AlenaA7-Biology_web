import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import init from './init';


  const { sizes, camera, scene, canvas, controls, renderer } = init();
  camera.position.set(0, 2, 5 );

  const hemiLight = new THREE.HemisphereLight(0xfffff, 0xfffff, 0.61);
  hemiLight.position.set(0, 50, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xfffff, 0/54);
  dirLight.position.set(-8, 12, 8);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize = new THREE.Vector2(1024,1024);
  scene.add(dirLight);

  const loader = new GLTFLoader();

  let mixer = null;

  loader.load(
    '/Primer/Primer.gltf',
    (gltf) => {
      mixer = new THREE.AnimationMixer(gltf.scene);
      
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();
      scene.add(gltf.scene);

      console.log('success');
      console.log(gltf);
      
    },
  );

  const clock = new THREE.Clock();

  const tick = () => {
    controls.update();
    renderer.render(scene, camera);

    const delta = clock.getDelta();
    if (mixer) {
      mixer.update(delta);
    }

    window.requestAnimationFrame(tick);
  };
  tick();



  /** Базовые обпаботчики событий длы поддержки ресайза */
  window.addEventListener('resize', () => {
    // Обновляем размеры
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Обновляем соотношение сторон камеры
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Обновляем renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.render(scene, camera);
  });

  window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
      canvas.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

