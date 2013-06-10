(function () {

   require.config({

     baseUrl: "../app/scripts",
     paths: {
       "jquery": "../../components/jquery/jquery",
       "underscore": "../../components/underscore-amd/underscore",
       "backbone": "../../components/backbone-amd/backbone",
       "tpl": "../../vendor/tpl",
       "namespace": "../../vendor/namespace"
     },

     config: {
         namespace: {
            "component1/models": "Model1,Model2",
            "component1/views" : "View1"

         }
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
