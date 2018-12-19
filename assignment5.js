var http = require('https'),
 fs = require('fs'),
 expect = require('Chai').expect,
 assert = require('chai').assert;  	
var jsonBody = '{"title": "Mr","body": "Bean","userId": 1120 }'

var http_options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'POST', 	
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': jsonBody.length
  }
}

var req = http.request(http_options, (res) => {
//Asserting the Response Code	
  console.log('STATUS: '+res.statusCode);
  expect(res.statusCode).to.equal(201);
   
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
	  console.log(chunk);
  let jsonObj = JSON.parse(chunk); 
	//assert response data value
	assertStr = jsonObj["userId"];
	console.log("assertStr "+assertStr);
	assert.equal(assertStr,1120,"UserId is not equal")
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
req.write(jsonBody); 
req.end();