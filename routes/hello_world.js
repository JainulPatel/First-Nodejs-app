/**
 * http://usejsdoc.org/
 */
exports.hello_world = function(req, res){
  res.render('hello_world', { title: 'Jainul' });
};

exports.yudi = function(req, res){
	  res.render('index', { title: 'Yogesh' });
	};
