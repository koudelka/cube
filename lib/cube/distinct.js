var types = require("./types")

exports.getter = function(db) {
  var collection = types(db)

  return function(request, callback) {
    type = collection(request.name)
    type.events.distinct("d." + request.key, function(error, result) {
      handle(error);

      callback(result);
    });
  };
};


function handle(error) {
  if (error) throw error;
}
