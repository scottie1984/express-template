'use strict';

const propertyPicker = require('../property-picker');

const impossible = function(req, res) {
  const mission = { bar: 'impossible'};
  const bar = propertyPicker.pickBar(mission);
  res.send(bar);
};

module.exports = {
	impossible
};