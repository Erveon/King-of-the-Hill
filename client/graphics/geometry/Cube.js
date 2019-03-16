import * as THREE from 'three'

export default class Cube {

	constructor(scene) {
		const geometry = new THREE.BoxGeometry(10, .2, 10)
		const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
		this.cube = new THREE.Mesh(geometry, material)
		scene.add(this.cube)
		this.cube.position.set(0, -1, 0);
	}

	render() {
		this.cube.rotation.y += 0.01;
	}

}