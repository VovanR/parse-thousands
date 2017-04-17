/* eslint no-var: off */

var REGEXP = /-?[\d.]+/g;

/**
 * @param {*} value
 * @returns {Boolean}
 */
function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

/**
 * @param {String|Number} value
 * @returns {Number}
 */
function parseThousands(value) {
	if (isNumber(value)) {
		return value;
	}
	try {
		return parseFloat(value.match(REGEXP).join(''));
	} catch (err) {
		return NaN;
	}
}

module.exports = parseThousands;
