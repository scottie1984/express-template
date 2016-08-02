var assert = require('assert');
var propertyPicker = require('../../src/property-picker');

describe('propertyPicker', function() {
	it('pickBar', function() {
		var foo = { bar: 'rugby' };
		assert.equal(propertyPicker.pickBar(foo), 'rugby');
	});
});