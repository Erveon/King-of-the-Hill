import platform from 'platform'

export default function isDesktop() {
	return platform.name === "NW.js"
}