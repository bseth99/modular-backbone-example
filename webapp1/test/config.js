(function () {

   require.config({

     baseUrl: "../app/scripts",
     paths: {
       "jquery": "../../components/jquery/jquery",
       "underscore": "../../components/underscore-amd/underscore",
       "backbone": "../../components/backbone-amd/backbone",
       "tpl": "../../vendor/tpl"
     },

     packages: [
        {
           name: 'component1',
           location: '../../components/component1/lib',
        }
     ]

   });

   require(["main"], function(main) {});

})();
