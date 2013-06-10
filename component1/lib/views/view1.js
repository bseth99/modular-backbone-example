
define(['jquery', 'underscore', 'backbone', 'tpl!./layout/view1.html'],
function( $, _, Backbone, template ) {

   return Backbone.View.extend({

         render: function () {

            this.$el.html(template());

            return this;
         }

      }, { _id: 'View1' });

});
