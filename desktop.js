const isDevelopment = process.env.NODE_ENV === "development"
const target = "/dist/index.html"

nw.Window.open(target, {}, win => {
	win.resizeTo(800, 600)
	if(isDevelopment) {
		win.showDevTools()
	} else {
		win.enterFullscreen()
	}

	win.on('close', () => {
		win.hide() // Pretend to be closed already
		win.close(true) // then close it forcefully
	})
})
