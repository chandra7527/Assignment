var http = require('https'),
 fs = require('fs'),
 expect = require('Chai').expect,
 parseString = require('xml2js').parseString,
 xml2js = require('xml2js'),
 
 assert = require('chai').assert;  	
 
 //Reading SOAP request
const xml = fs.readFileSync('soap-testdata.xml', 'utf-8');

var http_options = {
  hostname: 'ws.cdyne.com',
  path: '/delayedstockquote/delayedstockquote.asmx',
  method: 'POST', 	
  headers: {
    'Content-Type': 'text/xml; charset=utf-8',
    'Content-Length': xml.length
  }
}

var req = http.request(http_options, (res) => {
//Asserting the Response Code	
  console.log('STATUS: '+res.statusCode);
  expect(res.statusCode).to.equal(200);
   
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    parseString(chunk, function(err, result){
		//assert response data value
		 assertStr = result["soap:Envelope"]["soap:Body"][0]["GetQuoteResponse"][0]["GetQuoteResult"][0]["StockSymbol"];
		console.log("assertStr "+assertStr);
		
	});
	assert.equal(assertStr,'NSE:WIPRO',"StockSymbol is not equal to NSE:WIPRO")
	// expect(assertStr).to.equal(['NSE:WIPRO']);
  });

  res.on('end', () => {
    console.log('No more data in response.') 
  })
  //
//done();
});

req.on('error', (e) => {
  console.log('problem with request: '+e.message );
});

// write data to request body
req.write(xml); 
req.end();