/*global nw*/
let target = "/dist/index.html"

if(process.env.NODE_ENV === "development") {
	target = "http://localhost:8080"
}

nw.Window.open(target)
