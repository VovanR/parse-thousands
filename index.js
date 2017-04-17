var REGEXP = /-?[\d.]+/g;

function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

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

/**
 * @param {String|Number} value
 * @returns {Number}
 */
module.exports = parseThousands;
