var fs = require('fs'),
parseString = require('xml2js').parseString,
xml2js = require('xml2js');  

fs.readFile('samplexml.xml', 'utf-8', function (err, data){
    if(err) console.log(err);
    // we log out the readFile results    
    console.log(data);
	parseString(data, function(err, result){
        if(err) console.log(err);
        // here we modify the nsme element
        
		result.name ="Wipro Ltd";
		console.log(result); 
		
		// create a new builder object and then convert
        // our json back to xml.
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(result);
        
        fs.writeFile('modified-samplexml.xml', xml, function(err, data){
            if (err) console.log(err);
						
            console.log("successfully written our update xml to file");
        }); 	
		
	});
});