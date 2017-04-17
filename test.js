/* eslint quotes: off */

import test from 'ava';
import fn from './';

test('is function', t => {
	t.is(typeof fn, 'function');
});

test('should work with numbers', t => {
	t.is(fn(5), 5);
	t.is(fn(-1005), -1005);
	t.is(fn(-1005.324), -1005.324);
});

test('should work with strings', t => {
	t.is(fn('21.6'), 21.6);
	t.is(fn('-3421.6'), -3421.6);
	t.is(fn('-3,421.6'), -3421.6);
	t.is(fn("1'234'567'890.6"), 1234567890.6);
	// t.is(fn('1 234 567,890'), 1234567.89);
});

test('should return `NaN` if fired without args', t => {
	t.true(isNaN(fn()));
});

test('should parse frac', t => {
	t.is(fn('10 000.0001'), 10000.0001);
	t.is(fn('-1 000 000 000.545'), -1000000000.545);
	t.is(fn('123 456.1234567'), 123456.1234567);
});

test('should parse sign', t => {
	t.is(fn('-100 000'), -100000);
	t.is(fn('-100 000 000.545'), -100000000.545);
});
