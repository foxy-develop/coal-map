const mix = require('laravel-mix');

mix.options({
    extractVueStyles: true,
}).js('resources/js/app.js', 'public/js').extract(['vue'])
    .sass('resources/sass/app.scss', 'public/css').options({
    autoprefixer: {
        options: {
            browsers: [
                'last 6 versions',
            ]
        }
    }}).webpackConfig({
        externals: function (context, request, callback) {
            if (/xlsx|canvg|pdfmake/.test(request)) {
                return callback(null, "commonjs " + request);
            }
            callback();
        },
        module: {
            rules: [
                {
                    test: /\.worker\.js$/i,
                    use: [
                        {
                            loader: 'comlink-loader',
                            options: {
                                singleton: true
                            }
                        }
                    ]
                }
            ]
        }
    })
    .sourceMaps();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



if (!mix.inProduction()) {
    mix.browserSync('coal-map.local');
} else {
    mix.version();
}