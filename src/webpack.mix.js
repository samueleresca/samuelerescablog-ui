let mix = require('laravel-mix');
require('laravel-mix-workbox');

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: Config.babel()
      }
    ]
  },
  output: {
    publicPath: ''
  }
});

const assetsTransform = async (manifestEntries) => {
  const manifest = manifestEntries.map(entry => {
    entry.url = '/assets/' + entry.url;
    return entry;
  });
  return {manifest, warnings: []};
};

mix.js('js/helpers.js', 'js/')
  .js('js/app.js', 'js/')
  .js('js/home.js', 'js/')
  .js('js/post.js', 'js/')
  .js('js/page.js', 'js/')
  .js('js/cookie.js', 'js/')
  .extract()
  .setPublicPath('../assets')
  .setResourceRoot('/assets')
  .injectManifest({
    swSrc: './js/sw.js',
    swDest: './js/sw.js',
    manifestTransforms: [assetsTransform]
  })
  .sass('sass/app.scss', 'css/')
  .options({
    processCssUrls: false
  })
  .copy('sass/fonts/icomoon/*.*', '../assets/fonts/')
  .minify('../assets/js/vendor.js')
  .browserSync({
    proxy: "localhost:2368",
    files: [
      'js/**/*.js',
      'sass/**/*.scss',
      '../**/*.hbs'
    ]
  });