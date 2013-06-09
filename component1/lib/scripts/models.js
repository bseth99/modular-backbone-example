define(
   [
      'underscore',
      './models/Model1',
      './models/Model2'
   ],
   function( _ ) {

      var args = Array.prototype.slice.call(arguments, 1);

      var Models = _.chain(args)
                    .map(function (v) {
                        return [ v._id, v ];
                        })
                    .object()
                    .value();

      return Models;

});
