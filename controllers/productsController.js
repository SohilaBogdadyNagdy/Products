var products = require('../models/products');

exports.search_results = function(req, res) {
	var query = {};
	var filter = req.params.filter;
	var term = req.params.term;
	query[filter]= term;
	console.log(query);
	products.find(query, 'name brand category price').exec(function (err, search_results) {
      if (err) { return next(err); }
      //console.log(search_results);
      aggQuery = {'$match':{}}
      aggQuery['$match'][filter] = term
      
      if (filter == 'brand'){
        console.log("brand filter, aggregation group stage by price");
      	_group = {'$group':{'_id':'$price', 'count':{'$sum':1}} }
      }
      else if (filter == 'price') {
      	console.log("price filter, aggregation group stage by brand");
      	_group = {'$group':{'_id':'$brand', 'count':{'$sum':1}} }
      }

      products.aggregate([aggQuery, _group]).exec(function(err, aggregated_result){
      if (err){return next(err);}
      res.json({"matching products": search_results, 'aggregation': aggregated_result})

      });
    });

};