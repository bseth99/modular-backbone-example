({

  baseUrl: "../app/scripts",
  name: 'main',
  out: "../dist/scripts/bundle.js",

  paths: {
    "requireLib": "../../components/requirejs/require",
    "jquery": "../../components/jquery/jquery",
    "underscore": "../../components/underscore-amd/underscore",
    "backbone": "../../components/backbone-amd/backbone"
  },

  include: ['requireLib'],

  optimize: 'uglify2',
  optimizeCss: 'standard'
})