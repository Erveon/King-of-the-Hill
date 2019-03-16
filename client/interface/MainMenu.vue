<template>
	<div v-if="visible" id="main-menu">
		<h1>King of the Hill</h1>
		<ul id="menu">
			<li v-for="item in menu" :key="item.name">
				<a class="menu-item" href="#" @click.prevent="item.action">{{ item.name }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Graphics from '@/graphics/Graphics'

export default {
	name: 'MainMenu',
	data() {
		return {
			visible: true,
			menu: [
				{
					name: 'Play',
					action: this.play
				}
			]
		}
	},
	methods: {
		play() {
			this.visible = false
			Graphics.init()
			Graphics.addCube()
		}
	}
}
</script>

<style lang="scss">
	#main-menu {
		text-align: center;
		color: #252525;
		padding: 4rem;

		h1 {
			font-size: 3rem;
			padding: 1rem;
		}

		#menu {
			margin: 0 auto;
			width: 250px;

			.menu-item {
				display: block;
				color: white;
				background-color: #7272e9;
				text-decoration: none;
				padding: 1rem .5rem;
				border-radius: .5rem;
				transition: .2s;

				&:hover {
					background-color: lighten(#7272e9, 3%);
				}
			}
		}
	}
</style>
