(function () {

   require.config({

     paths: {
       "jquery": "../components/jquery/jquery",
       "underscore": "../components/underscore-amd/underscore",
       "backbone": "../components/backbone-amd/backbone",
       "component1": "../component1"
     }

   });


   require(["jquery", "component1"], function( $, mod ) {

      var view1 = new mod.Views.View1();


      $(document.body).append(view1.render().$el);

   });

})();
