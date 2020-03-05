const mix = require('laravel-mix');

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

mix .js('resources/js/components/profile/profile.js', 'public/js/components/profile')
    .js('resources/js/components/form.js', 'public/js/components/')
    .js('resources/js/components/table.js', 'public/js/components/')
    .js('resources/js/components/menu.js', 'public/js/components/')
    .js('resources/js/components/import_data_form.js', 'public/js/components/')
    .js('resources/js/components/import_data_table.js', 'public/js/components/')
    .js('resources/js/components/import_data_menu.js', 'public/js/components/')
    .js('resources/js/app.js', 'public/js')
    .extract()
    .sass('resources/sass/app.scss', 'public/css')
    .copy('node_modules/font-awesome/fonts', 'public/fonts')
    .copy('resources/lang', 'public/lang')
    .options({
        processCssUrls : false
    });

mix.version();
