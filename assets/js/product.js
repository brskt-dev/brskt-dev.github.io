//Imports
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.querySelector("canvas.webgl");

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// scene config ***********************************************************
const scene = new THREE.Scene();

let sensor, cracha;
let screenWidth = screen.width;
let screenHeight = screen.height;
let width = window.innerWidth;
let height = window.innerHeight;

// verifica se está no desktop ******************************
if (screenWidth >= 1024) {
  // scene config ***********************************************************
  // reset positions when resize screen
  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  });

  // Base camera
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5);
  scene.add(camera);
  /* scene.background = new THREE.Color(0x08131c); */
  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 0.2);
  topLight.position.set(0, 0, 0);

  const mainLight = new THREE.PointLight(0xffffff, 1);
  topLight.position.set(1, 1, 0);

  const secondaryLight = new THREE.PointLight(0xffffff, 10);
  topLight.position.set(-1, -1, 2.5);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x080820, 4);

  const ambientLight = new THREE.AmbientLight(0x28a8a5, 2);

  const directionLight = new THREE.DirectionalLight(0xffffff, 3);
  directionLight.position.set(0, 1, 2);

  const directionLight2 = new THREE.DirectionalLight(0xffffff, 3);
  directionLight2.position.set(0, -6, 4.1);

  scene.add(hemiLight, ambientLight, directionLight, directionLight2);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: false,
    alpha: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio * 0.8);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  /* renderer.toneMapping = THREE.ReinhardToneMapping; */
  renderer.toneMappingExposure = 2.3;
  renderer.setClearColor(0x000000, 0); // the default
  document.body.appendChild(renderer.domElement);

  function animation(time) {
    renderer.render(scene, camera);
  }
  // end scene config ***********************************************************

  LoadModels();
  // webappAnimation();
} else {
  mobileAnimation();
}

// configuração da animação do sensor ******************************
function sensorDesktopAnimation() {
  //GSAP Animations scroll-area-1
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-0",
      scrub: 1,
      //pin: true,
      start: "60% center",
      end: "bottom center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl.to(
    sensor.position,
    {
      x: -2,
      y: -1.5,
      z: 0,
      ease: "power1.in",
    },
    0
  );
  tl.to(
    sensor.rotation,
    {
      y: 1,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-1
  const tl_element = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-1",
      scrub: 1,
      //pin: true,
      start: "12% 65%",
      end: "12% 65%",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl_element.to(".el-circle-sensor", {
    duration: 0.5,
    opacity: 0.08,
    ease: "power3.inOut",
  });

  //GSAP Animations scroll-area-2
  const tl0 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-2",
      scrub: 1,
      //pin: true,
      start: "top center",
      end: "center center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl0.to(
    sensor.rotation,
    {
      y: 0.2,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-1
  const tl_element_1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-3",
      scrub: 1,
      //pin: true,
      start: "12% 65%",
      end: "12% 65%",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl_element_1.to(".el-circle-sensor", {
    duration: 0.5,
    opacity: 0,
    ease: "power3.inOut",
  });

  //GSAP Animations scroll-area-3
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-3",
      scrub: 1,
      //pin: true,
      start: "top center",
      end: "center bottom",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl1.to(
    sensor.position,
    {
      x: 0,
      y: -1.8,
      z: 2,
      ease: "power1.in",
    },
    0
  );
  tl1.to(
    sensor.rotation,
    {
      y: 0,
      x: -1.2,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-3
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-3",
      scrub: 1,
      //pin: true,
      start: "70% center",
      end: "bottom center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl2.to(
    sensor.position,
    {
      x: 0,
      y: -7,
      z: 2,
      ease: "power1.inOut",
    },
    0
  );

  //GSAP Animations scroll-area-3
  const tlOrbit = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-3",
      scrub: false,
      //pin: true,
      start: "top center",
      end: "top center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tlOrbit.to(".orbit", { duration: 0.5, scale: 1, ease: "power3.inOut" }, 0);

  //GSAP Animations scroll-area-4
  const tlOrbit1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-4",
      scrub: false,
      //pin: true,
      start: "-20% center",
      end: "-20% center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tlOrbit1
    .to("#orbit03", { duration: 0.1, opacity: 0, ease: "power3.inOut" })
    .to("#orbit02", { duration: 0.2, opacity: 0, ease: "power3.inOut" })
    .to("#orbit01", { duration: 0.3, opacity: 0, ease: "power3.inOut" });

  //GSAP Animations scroll-area-7
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-7",
      scrub: 1,
      //pin: true,
      start: "top center",
      end: "30% center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl3.to(
    sensor.position,
    {
      x: 1.8,
      y: -1.4,
      z: 0,
      ease: "power1.inOut",
    },
    0
  );

  tl3.to(
    sensor.rotation,
    {
      x: 0,
      y: -0.4,
      z: 0,
      ease: "power1.inOut",
    },
    0
  );

  //GSAP Animations scroll-area-8
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-8",
      scrub: 1,
      //pin: true,
      start: "top 80%",
      end: "center 80%",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl4.to(sensor.position, {
    x: 1.8,
    y: -7,
    z: 0,
    ease: "power1.in",
  });

}

// configuração da animação do cracha ******************************
function crachaDesktopAnimation() {
  //GSAP Animations scroll-area-0
  const tl_cracha = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-0",
      scrub: 1,
      //pin: true,
      start: "10% center",
      end: "center center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl_cracha.to(
    cracha.position,
    {
      x: 0,
      y: -7,
      z: 1,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-4
  const tl1_cracha = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-4",
      scrub: 1,
      //pin: true,
      start: "10% center",
      end: "center center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl1_cracha.to(
    cracha.position,
    {
      x: 0,
      y: -2.5,
      z: 2.5,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-5
  const tl_element = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-5",
      scrub: 1,
      //pin: true,
      start: "12% center",
      end: "12% center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl_element.to(".el-circle-cracha", {
    duration: 0.5,
    opacity: 0.08,
    ease: "power3.inOut",
  });

  //GSAP Animations scroll-area-5
  const tl2_cracha = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-5",
      scrub: 1,
      //pin: true,
      start: "top center",
      end: "10% center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl2_cracha.to(
    cracha.position,
    {
      x: 1.5,
      y: -1,
      z: 1.5,
      ease: "power1.in",
    },
    0
  );

  tl2_cracha.to(
    cracha.rotation,
    {
      y: -0.8,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-6
  const tl3_cracha = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-6",
      scrub: 1,
      //pin: true,
      start: "top center",
      end: "center center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl3_cracha.to(
    cracha.rotation,
    {
      y: -0.2,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-7
  const tl4_cracha = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-7",
      scrub: 1,
      //pin: true,
      start: "top center",
      end: "35% center",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl4_cracha.to(
    cracha.position,
    {
      x: 2.5,
      y: -1.4,
      z: 1.2,
      ease: "power1.in",
    },
    0
  );

  tl4_cracha.to(
    cracha.rotation,
    {
      y: -0.9,
      ease: "power1.in",
    },
    0
  );

  //GSAP Animations scroll-area-8
  const tl_element_2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-8",
      scrub: 1,
      //pin: true,
      start: "top bottom",
      end: "center bottom",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl_element_2.to(".el-circle-cracha", {
    duration: 0.5,
    opacity: 0,
    ease: "power3.inOut",
  });

  //GSAP Animations scroll-area-8
  const tl5_cracha = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-8",
      scrub: 1,
      //pin: true,
      start: "top 80%",
      end: "center 80%",
      markers: false,
      toggleActions: "restart none reverse none",
    },
  });

  tl5_cracha.to(cracha.position, {
    x: 2.5,
    y: -7,
    z: 1.2,
    ease: "power1.in",
  });

}

// configuração da animação do mobile ******************************
function mobileAnimation() {
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".swipe-section",
  });

  // section 01
  gsap.fromTo(
    document.getElementById("textAnimation01"),
    {
      opacity: 0,
      y: -20,
    },
    {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-1",
    }
  );
  gsap.fromTo(
    document.querySelector(".img-sensor-01"),
    {
      opacity: 0,
      y: 20,
    },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-1",
    }
  );

  // section 02
  gsap.fromTo(
    document.getElementById("textAnimation02"),
    {
      opacity: 0,
      y: -20,
    },
    {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-2",
    }
  );
  gsap.fromTo(
    document.querySelector(".img-sensor-02"),
    {
      opacity: 0,
      y: 20,
    },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-2",
    }
  );

  // section 03
  gsap.fromTo(
    document.getElementById("textAnimation03"),
    {
      opacity: 0,
      y: 20,
    },
    {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-3",
    }
  );
  gsap.fromTo(
    document.querySelector(".img-sensor-03"),
    {
      opacity: 0,
      y: -20,
    },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-3",
    }
  );

  // section 05 cracha
  gsap.fromTo(
    document.getElementById("textAnimation05"),
    {
      opacity: 0,
      y: -20,
    },
    {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-5",
    }
  );
  gsap.fromTo(
    document.querySelector(".img-cracha-05"),
    {
      opacity: 0,
      y: 20,
    },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-5",
    }
  );

  // section 06
  gsap.fromTo(
    document.getElementById("textAnimation06"),
    {
      opacity: 0,
      y: -20,
    },
    {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-6",
    }
  );
  gsap.fromTo(
    document.querySelector(".img-cracha-06"),
    {
      opacity: 0,
      y: 20,
    },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-6",
    }
  );

  // section 07
  gsap.fromTo(
    document.getElementById("textAnimation07"),
    {
      opacity: 0,
      y: -20,
    },
    {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-7",
    }
  );
  gsap.fromTo(
    document.querySelector(".img-cracha-07"),
    {
      opacity: 0,
      y: 20,
    },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-7",
    }
  );

  // section 08
  gsap.fromTo(
    document.getElementById("textAnimation08"),
    {
      opacity: 0,
    },
    {
      duration: 0.8,
      opacity: 1,
      ease: "power1.in",
      scrollTrigger: ".scroll-area-8",
    }
  );
}

// webapp animation ***********************************************************
function webappAnimation() {
  let timeln = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-area-8",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      start: "top top",
      end: "+=2000",
      scrub: 1,
      markers: false,
    },
  });

  timeln.addLabel("card1");
  timeln.to(".card-1", {
    xPercent: 0,
    opacity: 1,
  });

  timeln.from(".card-2", {
    xPercent: 75,
    opacity: 0,
  });
  timeln.addLabel("card2");

  timeln.to(
    ".card-1",
    {
      scale: 0.93,
      xPercent: -0.5,
      opacity: 0.2,
    },
    "-=0.3"
  );

  timeln
    .to(
      ".card-2",
      {
        xPercent: 0,
        opacity: 1,
      },
      1
    )
    .to(
      document.getElementById("text-webapp"),
      {
        innerHTML: "Monitoramento em tempo real dos ambientes.",
      },
      1
    );

  timeln.from(".card-3", {
    xPercent: 75,
    opacity: 0,
  });
  timeln.addLabel("card3");

  timeln.to(
    ".card-2",
    {
      scale: 0.94,
      xPercent: -0.4,
      opacity: 0.2,
      y: -25,
    },
    "-=0.3"
  );

  timeln
    .to(
      ".card-3",
      {
        xPercent: 0,
        opacity: 1,
      },
      2
    )
    .to(
      document.getElementById("text-webapp"),
      {
        innerHTML: "Visualização do Realizado x Planejado de cada Ambiente.",
      },
      2
    );

  timeln.from(".card-4", {
    xPercent: 75,
    opacity: 0,
  });
  timeln.addLabel("card4");

  timeln.to(
    ".card-3",
    {
      scale: 0.96,
      xPercent: -0.4,
      opacity: 0.4,
      y: -25,
    },
    "-=0.3"
  );

  timeln
    .to(
      ".card-4",
      {
        xPercent: 0,
        opacity: 1,
      },
      3
    )
    .to(
      document.getElementById("text-webapp"),
      {
        innerHTML: "Cálculo da Curva de Desgaste dos Ambientes",
      },
      3
    );

  timeln.from(".card-5", {
    xPercent: 75,
    opacity: 0,
  });
  timeln.addLabel("card5");

  timeln.to(
    ".card-4",
    {
      scale: 0.98,
      xPercent: -0.4,
      opacity: 0.6,
      y: -25,
    },
    "-=0.3"
  );

  timeln
    .to(
      ".card-5",
      {
        xPercent: 0,
        opacity: 1,
        y: -25,
      },
      4
    )
    .to(
      document.getElementById("text-webapp"),
      {
        innerHTML: "Acompanhamento do Consumo de Insumos de cada Ambiente.",
      },
      4
    );

  timeln.to(".card-5", {});
}

// carrega os modelos do sensor e cracha ***************************
function LoadModels() {
  const sensorUrl = new URL("models/sensor.gltf", import.meta.url);
  const crachaUrl = new URL("models/cracha.gltf", import.meta.url);

  const loader = new GLTFLoader();
  loader.load(
    sensorUrl.href,
    function (gltf) {
      const model = gltf.scene;
      //If the file is loaded, add it to the scene
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
        if (child.material) child.material.metalness = 0;
      });

      sensor = model;
      sensor.position.set(0, -3.5, 1.5);
      scene.add(sensor);

      sensorDesktopAnimation();
    },
    function (xhr) {
      //While it is loading, log the progress
    },
    function (error) {
      //If there is an error, log it
      console.error(error);
    }
  );

  loader.load(
    crachaUrl.href,
    function (gltf) {
      cracha = gltf.scene;
      //If the file is loaded, add it to the scene
      cracha.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
        if (child.material) child.material.metalness = 0;
      });

      cracha.position.set(0, -3, 1);
      cracha.scale.set(0.5, 0.5, 0.5);

      scene.add(cracha);
      crachaDesktopAnimation();
    },
    function (xhr) {
      //While it is loading, log the progress
    },
    function (error) {
      //If there is an error, log it
      console.error(error);
    }
  );
}

// particles ***********************************************************
createParticles();

function createParticles() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#d21c1c",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.49716301422833176,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#1d3448",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
}
// end particles ***********************************************************

// prealoder ***********************************************************
window.onload = function () {
  window.setTimeout(fadeout, 3000);
};

function fadeout() {
  document.querySelector(".preloader").style.opacity = "0";
  document.querySelector(".preloader").style.display = "none";
}
// end prealoder ***********************************************************
