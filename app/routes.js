//app/routes.js
 

//expose the routes to our app with module.exports

module.exports = function(app){
    //api -----------------------------
 
    app.post('/search', function(req,res){
    	console.log("Call crawl:",req.body)
    	crawl(req.body.seed_site, req.body.limit, req.body.search_tags, function(links){
    		res.send({'links':links})
    	})
    });
    //application------------------------------------
    app.get('/', function(req,res){
    	res.sendfile('./public/admin_index.html'); //load the single view file (ngular will handle page changes on the front-ends)
    });
    /*app.get('/pdfopen', function(req,res){
    	res.sendfile('./public/index.html');  
    });*/

}

/*
@tags e.g. [ { text: 'fdaf' }, ... ]
*/
function crawl(seed_link, limit, tags, callback){
	var LIMIT = limit;
	var links = []
	var crawl = require('crawl');
	console.log("crawling...", seed_link, limit, tags)
	crawl.crawl(seed_link, function(err, pages) {
	    if (err) {
	        console.error("An error occured", err);
	        callback(err)
	    }else{
	    	console.log("crawl success!")
	    	links = filter(pages )
	    	callback(links)
	    }

	});
}

function filter(links){

	return links
}


