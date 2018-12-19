var fs = require('fs'),
parseString = require('xml2js').parseString,
xml2js = require('xml2js');  

fs.readFile('samplejson.json', 'utf-8', function (err, data){
    if(err) console.log(err);
    // we log out the readFile results    
    console.log(data);
	//parsing as json object
	let jsonObj = JSON.parse(data);  
	//modifying the node value
	jsonObj.name = "Wipro Ltd";
	//converting as string to write a file
	 let jsonVal = JSON.stringify(jsonObj);
	console.log(jsonVal);  
	fs.writeFile('modified-samplejson.json', jsonVal, function(err, data){
            if (err) console.log(err);
						
            console.log("successfully written our update json to file");
    }); 	
});