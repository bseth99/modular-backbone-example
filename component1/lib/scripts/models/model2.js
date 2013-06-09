
define(['jquery', 'underscore', 'backbone'],
function( $, _, Backbone ) {

   return Backbone.Model.extend({

         defaults: {
            field3: '',
            field4: ''
         }

      }, { _id: 'Model2' });

});
