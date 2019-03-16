import * as THREE from 'three'
import Cube from './geometry/Cube';

export default class Graphics {

	static scene = null
	static camera = null
	static renderer = null
	static entities = []
	static animationFrame = null

	static init() {
		Graphics.shouldRender = true
		Graphics.scene = new THREE.Scene()
		Graphics.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
		Graphics.renderer = new THREE.WebGLRenderer()
		Graphics.renderer.setSize(window.innerWidth, window.innerHeight)
		document.body.appendChild(Graphics.renderer.domElement)
		Graphics.camera.position.z = 5
		Graphics.render()
	}

	static destroy() {
		Graphics.entities = []
		Graphics.scene.dispose()
		cancelAnimationFrame(Graphics.animationFrame)
		document.body.removeChild(Graphics.renderer.domElement)
	}

	static render() {
		Graphics.animationFrame = requestAnimationFrame(Graphics.render)
		for(let entity of Graphics.entities) {
			entity.render()
		}
		Graphics.renderer.render(Graphics.scene, Graphics.camera)
	}

	static addCube() {
		Graphics.entities.push(new Cube(Graphics.scene))
	}

}