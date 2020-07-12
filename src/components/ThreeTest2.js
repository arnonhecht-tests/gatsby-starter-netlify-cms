import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';

import sceneImage from "../../static/img/desert-360.jpg" 


class ThreeTest2 extends Component{
  componentDidMount(){
      const windowGlobal = typeof window !== 'undefined' && window;
      const windowRelation = windowGlobal.innerWidth / windowGlobal.innerHeight;

    	// CAMERAS

      const camera = new THREE.PerspectiveCamera( 70, windowRelation, 1, 100000 );
      this.camera = camera;
      camera.position.set( 0, 0, 1000 );
      const cameraCube = new THREE.PerspectiveCamera( 70, windowRelation, 1, 100000 );
      this.cameraCube = cameraCube;

      // SCENE

      const scene = new THREE.Scene();
      this.scene = scene;
      const sceneCube = new THREE.Scene();
      this.sceneCube = sceneCube;

      // Lights

      var ambient = new THREE.AmbientLight( 0xffffff );
      scene.add( ambient );

      // Textures

      var r = '../../img/desert-cube/';
      var urls = [ r + 'px.png', r + 'nx.png',
             r + 'py.png', r + 'ny.png',
             r + 'pz.png', r + 'nz.png' ];

      const textureCube = new THREE.CubeTextureLoader().load( urls );
      textureCube.encoding = THREE.sRGBEncoding;

      var textureLoader = new THREE.TextureLoader();

      const textureSphere = textureLoader.load( 'textures/metal.jpg' );
      textureSphere.mapping = THREE.SphericalReflectionMapping;
      textureSphere.encoding = THREE.sRGBEncoding;

      // Materials


      var cubeShader = THREE.ShaderLib[ 'cube' ];

      var cubeMaterial = new THREE.ShaderMaterial( {
        uniforms: THREE.UniformsUtils.clone( cubeShader.uniforms ),
        fragmentShader: cubeShader.fragmentShader,
        vertexShader: cubeShader.vertexShader,
        depthWrite: false,
        side: THREE.BackSide
      } );

      cubeMaterial.envMap = textureCube;

      // Skybox

      const cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 100, 100 ), cubeMaterial );
      sceneCube.add( cubeMesh );

      var geometry = new THREE.SphereBufferGeometry( 400.0, 48, 24 );
      const sphereMaterial = new THREE.MeshLambertMaterial( { envMap: textureCube } );
      const sphereMesh = new THREE.Mesh( geometry, sphereMaterial );

      scene.add( sphereMesh );

      const renderer = new THREE.WebGLRenderer();
      this.renderer = renderer;
      renderer.autoClear = false;
      renderer.setPixelRatio( windowGlobal.devicePixelRatio );
      renderer.setSize( windowGlobal.innerWidth, windowGlobal.innerHeight );
      document.body.appendChild( renderer.domElement );

      renderer.outputEncoding = THREE.sRGBEncoding;

      const controls = new OrbitControls( camera, renderer.domElement );
      controls.minDistance = 500;
      controls.maxDistance = 2500;

      var params = {
        Cube: function () {

          cubeMesh.material = cubeMaterial;
          cubeMesh.visible = true;
          sphereMaterial.envMap = textureCube;
          sphereMaterial.needsUpdate = true;

        },
        Spherical: function () {

          cubeMesh.visible = false;
          sphereMaterial.envMap = textureSphere;
          sphereMaterial.needsUpdate = true;

        },
        Refraction: false
      };

      // var gui = new GUI();
      // gui.add( params, 'Cube' );
      // // gui.add( params, 'Spherical' );
      // gui.add( params, 'Refraction' ).onChange( function ( value ) {
      //   textureCube.mapping = value ? 
      //     THREE.CubeRefractionMapping : THREE.CubeReflectionMapping;

      //   sphereMaterial.needsUpdate = true;
      // });
      // gui.open();

      windowGlobal.addEventListener( 'resize', function onWindowResize() {

				// camera.aspect = window.innerWidth / window.innerHeight;
				// camera.updateProjectionMatrix();

				// cameraCube.aspect = window.innerWidth / window.innerHeight;
				// cameraCube.updateProjectionMatrix();

				// renderer.setSize( window.innerWidth, window.innerHeight );

      }, false );
      this.start();
  }

componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
}

start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.renderScene)
    }
}

stop = () => {
    cancelAnimationFrame(this.frameId)
  }

animate = () => {
  //  this.cube.rotation.x += 0.01
  //  this.cube.rotation.y += 0.01
  //  this.renderScene()
  //  this.frameId = window.requestAnimationFrame(this.animate)
 }

renderScene = () => {
  // this.sphereCamera.updateCubeMap( this.renderer, this.scene );
  requestAnimationFrame(this.renderScene);
  // this.controls.update();

  this.renderer.render(this.scene, this.camera)
  this.renderer.render(this.sceneCube, this.cameraCube)
}

render(){
    return(
      <div
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeTest2













