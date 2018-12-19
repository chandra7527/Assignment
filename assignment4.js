var http = require('https'),
 fs = require('fs'),
 expect = require('Chai').expect,
 assert = require('chai').assert;  	
 
var http_options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1',
  method: 'GET', 	
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
 }
}

var req = http.request(http_options, (res) => {
//Asserting the Response Code	
  console.log('STATUS: '+res.statusCode);
  expect(res.statusCode).to.equal(200);
   
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    //parsing as json object
	let jsonObj = JSON.parse(chunk); 
	//assert response data value
	assertStr = jsonObj["userId"];
	console.log("assertStr "+assertStr);
	assert.equal(assertStr,1,"UserId is not equal")
	
  });

  res.on('end', () => {
    console.log('No more data in response.') 
  })
  
});

req.on('error', (e) => {
  console.log('problem with request: '+e.message );
});

// write data to request body

req.end();