var ejs = require("ejs");
//
//exports.index = function(req, res){
//	ejs.renderFile('./views/signin.ejs',function(err, result) {
//		   // render on success
//		   if (!err) {
//		            res.end(result);
//		   }
//		   // render or error
//		   else {
//		            res.end('An error occurred');
//		            console.log(err);
//		   }
//	   });
//};

exports.index = function(req, res){
	  res.render('signin', { title: 'Express' });
	};