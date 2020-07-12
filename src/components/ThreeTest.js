import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import sceneImage from "../../static/img/desert-360.jpg" 


class ThreeTest extends Component{
  componentDidMount(){
    // const width = this.mount.clientWidth
    // const height = this.mount.clientHeight
    // //ADD SCENE
    // this.scene = new THREE.Scene()
    // //ADD CAMERA
    // this.camera = new THREE.PerspectiveCamera(
    //   75,
    //   width / height,
    //   0.1,
    //   1000
    // )
    // this.camera.position.z = 4
    // //ADD RENDERER
    // this.renderer = new THREE.WebGLRenderer({ antialias: true })
    // this.renderer.setClearColor('#000000')
    // this.renderer.setSize(width, height)
    // this.mount.appendChild(this.renderer.domElement)
    // //ADD CUBE
    // const geometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    // this.cube = new THREE.Mesh(geometry, material)
    // this.scene.add(this.cube)
    // this.start()
    this.scene = new THREE.Scene();
    const that = this;
    this.camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,5000);
    this.camera.position.set(0,400,1000);
    // this.camera.position.set(0,0,0.1);
    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    // document.body.appendChild(renderer.domElement);
    this.mount.appendChild(this.renderer.domElement)
    
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;

    let loader = new THREE.TextureLoader(); 
    that.scene.background = loader.load(sceneImage, function( texture ) {
      var sphereGeometry = new THREE.SphereGeometry( 500, 60, 40 )
      var sphereMaterial = new THREE.MeshBasicMaterial({
           map: texture,
           side: THREE.DoubleSide
      })
      sphereGeometry.scale( -1, 1, 1 );
      var mesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
      // that.scene.add( mesh );
      mesh.position.set( 0, 0, 0 )
    })

    let sphereMaterial = new THREE.MeshBasicMaterial();
    let sphereGeo =  new THREE.SphereGeometry(400, 50, 50);
    let mirrorSphere = new THREE.Mesh(sphereGeo, sphereMaterial);
    mirrorSphere.position.set(0, 100, 0);
    this.scene.add(mirrorSphere);

    this.start()
    // this.scene.background = loader.load(sceneImage);
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
  this.controls.update();

  this.renderer.render(this.scene, this.camera)
}

render(){
    return(
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeTest