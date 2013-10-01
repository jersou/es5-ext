'use strict';

var ois   = require('../../object/is')
  , value = require('../../object/valid-value')

  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (other) {
	var i, l;
	(value(this) && value(other));
	l = this.length >>> 0;
	if (l !== (other.length >>> 0)) return false;
	for (i = 0; i < l; ++i) {
		if (hasOwnProperty.call(this, i) !== hasOwnProperty.call(other, i)) {
			return false;
		}
		if (!ois(this[i], other[i])) return false;
	}
	return true;
};