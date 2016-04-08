var http = require("http");
 
var postData = function(firstName, lastName, DOB, gitUsername);
postData.createUser({
  'firstName' : 'Azra',
  'lastName' : 'Salcin',
  'DOB' : '1988-07-29',
  'gitUsername' : 'AzraSalcin'
  
});

var options = {
  hostname: 'www.sule.io',
  port: 1337,
  path: '/user', 
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': createUser.length
  }
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.')
  })
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(createUser);
req.end();
