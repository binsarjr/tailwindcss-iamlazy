const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.js('./src/resources/js/iamlazy.js', './public/dist/js')
mix.sass('./src/resources/sass/tailwind.scss', './public/dist/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });