var assert = require('assert');
var superagent = require('superagent');
var app = require('../src/app');
var http = require('http');

describe('integration', function() {
  var server

  before(function(done) {
	  app.set('port', 3001);

	  server = http.createServer(app);

	  server.listen(app.get('port'), function() {
	  	done();
	  });
  });

  after(function() {
    server.close();
  });

  it('/ returns hello world', function(done) {
	superagent.get('http://localhost:3000/').end(function(err, res) {
		assert.equal('Hello World', res.text);
		done();
	});
  });

  it('/ returns impossible', function(done) {
	superagent.get('http://localhost:3000/bar').end(function(err, res) {
		assert.equal('impossible', res.text);
		done();
	});
  });
});