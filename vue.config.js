module.exports = {
	publicPath: './',
    css: {
		loaderOptions: {
			sass: {
				data: '@import "client/assets/scss/global.scss";'
			}
		}
	},

    configureWebpack: {
        resolve: {
            alias: {
                '@': __dirname + '/client'
            }
        },
        entry: {
            app: './client/main.js'
        }
    },

    productionSourceMap: false,

    devServer: {
		disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3344',
				changeOrigin: true
			},
			'/auth': {
				target: 'http://localhost:3344',
				changeOrigin: true
			},
		},
	},
}