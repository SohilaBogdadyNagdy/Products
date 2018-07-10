var products = require('../models/products');

exports.search_results = function(req, res) {
	var query = {};
	var filter = req.params.filter;
	var term = req.params.term;
	query[filter]= term;
	console.log(query);
	products.find(query, 'name brand category price').exec(function (err, search_results) {
      if (err) { return next(err); }
      console.log(search_results);
      // res.render('searchResults', { title: 'products Result', search_results: search_results });
  		res.json({"result": search_results})
    });
    //products.aggregate([{ '$match': query }, { '$group': {'_id': 'brand' , 'count': { '$count' : '$brand' } }]);

};