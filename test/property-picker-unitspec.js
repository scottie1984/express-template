var assert = require('assert');
var propertyPicker = require('../src/controllers/property-picker');

describe('propertyPicker', function() {
	it('pickBar', function() {
		var foo = { bar: 'rugby' };
		assert.equal(propertyPicker.pickBar(foo), 'rugby');
	});
});