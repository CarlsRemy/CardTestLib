// test.ts
const { assert, expect} = require("chai");
const { describe, it } = require("mocha");
const { getCardNumber, getVisaCardNumber, getMasterCardNumber, getAmexCardNumber, getDiscoverCardNumber,	getDinnerClubCardNumber, lengthsDinner, lengthsVisa} = require('../src/CardTestlib.js');

let pattern = {
	visa:  /^4[0-9]{11}(?:[0-9]{4})?$/,
	mastercard: /^5[1-5][0-9]{14}$/,
	amex: /^3[47][0-9]{13}$/,
	discover: /^6(?:011|4[4-9][0-9]|5[0-9]{2})[0-9]{12}$/,
	dinnerclub: /^3(?:0[0-5]|[689][0-9])[0-9]{11}(?:[0-9]{2}|[0-9]{5})?$/,
};

describe('getCardNumber', () => {
	it(`Validar digito de CardNumber`, () => {
		let cardNumber =  getCardNumber();
		const cardisValid = Object.keys(pattern).some((key) => pattern[key].test(cardNumber));
		assert.strictEqual(cardisValid, true);
	});
});


describe('getAmexCardNumber', () => {
	it(`Validar digito de CardNumber`, () => {
		let cardNumber = getAmexCardNumber();
		expect(cardNumber).to.match(pattern.amex);
	});
});

describe('getVisaCardNumber', () => {
		it(`Validar digito de CardNumber 12 Digitos`, () => {
		let cardNumber = getVisaCardNumber(lengthsVisa.visa12);
		expect(cardNumber).to.match(pattern.visa);
		expect(cardNumber.length).to.equal(12);
	});

	it(`Validar digito de CardNumber 16 Digitos`, () => {
		let cardNumber = getVisaCardNumber();
		expect(cardNumber).to.match(pattern.visa);
		expect(cardNumber.length).to.equal(16);
	});
});

describe('getMasterCardNumber', () => {
	it(`Validar digito de CardNumber`, () => {
		let cardNumber = getMasterCardNumber();
		expect(cardNumber).to.match(pattern.mastercard);
	});
});

describe('getDinnerClubCardNumber', () => {
	it(`Validar digito de CardNumber 16 digitos`, () => {
		let cardNumber = getDinnerClubCardNumber();
		expect(cardNumber).to.match(pattern.dinnerclub);
		expect(cardNumber.length).to.equal(16);
	});

	it(`Validar digito de CardNumber 14 digitos`, () => {
		let cardNumber = getDinnerClubCardNumber(lengthsDinner.dinner14);
		expect(cardNumber).to.match(pattern.dinnerclub);
		expect(cardNumber.length).to.equal(14);
	});

	it(`Validar digito de CardNumber 19 digitos`, () => {
		let cardNumber = getDinnerClubCardNumber(lengthsDinner.dinner19);
		expect(cardNumber).to.match(pattern.dinnerclub);
		expect(cardNumber.length).to.equal(19);
	});
});


describe('getDiscoverCardNumber', () => {
	it(`Validar digito de CardNumber`, () => {
		let cardNumber = getDiscoverCardNumber();
		expect(cardNumber).to.match(pattern.discover);
	});
});
