// test.ts
const { assert} = require("chai");
const { describe, it } = require("mocha");
const { getCheckDigit } = require('../src/CardTestlib.js');

describe('getCheckDigit', () => {
	it(`Validar digito de CardNumber 538423209172662`, () => {
		let cardNumber =  getCheckDigit("538423209172662");
		assert.strictEqual(cardNumber, 4);
	});

	it(`Validar digito de CardNumber 460339790212097`, () => {
		let cardNumber =  getCheckDigit("460339790212097");
		assert.strictEqual(cardNumber, 4);
	});

	it(`Validar digito de CardNumber 538423209172662`, () => {
		let cardNumber =  getCheckDigit("538423209172662");
		assert.strictEqual(cardNumber, 4);
	});

	it(`Validar digito de CardNumber 34742150279459`, () => {
		let cardNumber =  getCheckDigit("34742150279459");
		assert.strictEqual(cardNumber, 7);
	});

	it(`Validar digito de CardNumber 304934761415223`, () => {
		let cardNumber =  getCheckDigit("304934761415223");
		assert.strictEqual(cardNumber, 1);
	});

	it(`Validar digito de CardNumber 657826218067430`, () => {
		let cardNumber =  getCheckDigit("657826218067430");
		assert.strictEqual(cardNumber, 6);
	});
});