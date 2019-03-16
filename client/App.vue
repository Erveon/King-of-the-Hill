<template>
	<MainMenu />
</template>

<script>
import MainMenu from './interface/MainMenu'

export default {
	name: 'app',
	components: {
		MainMenu
	},
	mounted() {
		//document.addEventListener('contextmenu', event => event.preventDefault());
	}
}
</script>

<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
}

html {
	overflow: hidden;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: subpixel-antialiased;
}

.interface {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 999;
}
</style>
