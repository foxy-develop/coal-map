
module.exports = {
    chainWebpack: config => {
        if (config.plugins.store.get("prefetch")) {
            config.plugin("prefetch").tap(args => {
                args[0].fileBlacklist = [
                    /\.map$/,
                    /pdfmake\.[^.]+\.js$/,
                    /xlsx\.[^.]+\.js$/,
                    /fabric[^.]*\.[^.]+\.js$/,
                    /responsivedefaults\.[^.]+\.js$/,
                    /\.eot$/,
                    /\.ttf$/,

                ];
                return args;
            });
        }
    },

    configureWebpack: {
        externals: (context, request, callback) => {
            if (/xlsx|canvg|pdfmake/.test(request)) {
                return callback(null, "commonjs " + request);
            }
            callback();
        }
    },

    productionSourceMap: false,

    pwa: {
        themeColor: '#20364e',
        msTileColor: '#20364e',
        manifestOptions: {
            start_url: '/',
            background_color: '#20364e',
            icons: [
                {
                    "src": "/img/icons/android-chrome-36x36.png",
                    "sizes": "36x36",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-48x48.png",
                    "sizes": "48x48",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-72x72.png",
                    "sizes": "72x72",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-96x96.png",
                    "sizes": "96x96",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-144x144.png",
                    "sizes": "144x144",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-256x256.png",
                    "sizes": "256x256",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-384x384.png",
                    "sizes": "384x384",
                    "type": "image/png"
                },
                {
                    "src": "/img/icons/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
        },
        name: 'Coal Map'


    }
};
