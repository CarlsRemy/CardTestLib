// test.ts
const { expect} = require("chai");
const { describe, it } = require("mocha");
const { getBaseCardNumber} = require('../src/CardTestlib');

describe('getBaseCardNumber', () => {
	it(`debería devolver un String de solo Digito 15 Digitos`, () => {
		let cardNumber =  getBaseCardNumber();
		expect(cardNumber).to.match(/[0-9]{15}/);
	});

	it(`debería devolver un String de solo Digito 12 Digitos`, () => {
		let cardNumber =  getBaseCardNumber(12);
		expect(cardNumber).to.match(/[0-9]{12}/);
	});
});

