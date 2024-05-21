// test.ts
const { expect, assert } = require("chai");
const { describe, it } = require("mocha");
const { normalizeCardnumber } = require('../src/CardTestlib.js');

describe('normalizeCardnumber', () => {
	it(`debería devolver un String de solo Digitos`, () => {
		const cardNumber = "1234-5678-9012-3456";
		let cardNumberNormalize =  normalizeCardnumber(cardNumber);
	
		assert.strictEqual(cardNumberNormalize, "1234567890123456");
	});
});