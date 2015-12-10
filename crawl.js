var LIMIT = 10;
var links = []
var crawl = require('crawl');

crawl.crawl("http://blog.dianpelangi.com", function(err, pages) {
    if (err) {
        console.error("An error occured", err);
        return;
    }else{
    	links = pages//links.concat(pages)
    }

    write_to_file("out/file1.txt", JSON.stringify(links));
});

function write_to_file(out_file, content){
	var fs = require('fs');
	fs.writeFile(out_file, content, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file " + out_file + " was saved!");
	}); 
}
