var jsdom = require("jsdom").jsdom;
var sinon = require('sinon');

global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 

var assert = require('chai').assert;
var app = require('../source/js/monsido.js');

describe('monsido test ', function() {

	var monsido = app.monsido;

	it('should return json', function(){
		assert.equal(
			monsido.getPrioritizedContent("Hello!", "Hello!"),
			"Hello!"
		)
	})

});