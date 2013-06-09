
define(['jquery', 'underscore', 'backbone'],
function( $, _, Backbone ) {

   return Backbone.Model.extend({

         defaults: {
            field1: '',
            field2: ''
         }

      }, { _id: 'Model1' });

});
