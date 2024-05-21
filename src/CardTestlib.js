// @ts-check
"use strict"

/**
 * @enum {number} lengthsVisa
*/
const lengthsVisa = Object.freeze({
  visa12: 12,
  visa16: 16,
});
/**
 * @enum {number}  lengthsDinner
*/
const lengthsDinner = Object.freeze({
  dinner14: 14,
  dinner16: 16,
  dinner19: 19,
});
/**
 * @enum {string[]} prefixesCard
 */
const prefixesCard = Object.freeze({ 
	visa: ["4"],
	mastercard: ["51", "52", "53", "54", "55"],
	amex: ["34","37"],
	discover: ['6011', '644','645','646','647','648','649', '65'],
	dinnerclub: ['300', '301','302','303','304','305','36', '38','39'],
});
/**
 * @function getBaseCardNumber
 * @param {number} length 
 * @returns {string} cardNumber Devuelve un String de numeros aleatorios por Defecto tiene un longuitud de 15
*/
function getBaseCardNumber(length  = 15) { //15 digits
	let cardNumber = '';
	for (let i = 0; i < length; i++) {
		cardNumber += Math.floor(Math.random() * 10);
	}
	return cardNumber;
}
/**
 * @function normalizeCardnumber
 * @param {string} cardNumber 
 * @returns {string} cardNumbers Numero de tarjeta de credito con solo carracteres no numericos
*/
function normalizeCardnumber(cardNumber=""){
	return cardNumber.replace(/\D/g,'');
}
/**
 * @function getCheckDigit
 * @param {string} cardNumber
 * @returns {number} checkDigit Digito validador basado en el Algoritmo de luhn
*/
function getCheckDigit(cardNumber=""){
	let sum = 0;
	let shouldDouble = true;
	for (let i = cardNumber.length - 1; i >= 0; i--) {
		let digit = parseInt(cardNumber.charAt(i), 10);
		if (shouldDouble) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}
		sum += digit;
		shouldDouble = !shouldDouble;
	}
	return (10 - (sum % 10)) % 10;
}
/**
 * @function getCardNumber
 * @returns {string} CardNumber Devuelve un Numero de tarjeta de credito valido de 15 a 16 carracteres
*/
function getCardNumber() {
	const prefixes =['4',...prefixesCard.amex,...prefixesCard.visa, ...prefixesCard.mastercard, ...prefixesCard.discover, ...prefixesCard.dinnerclub];
	const base = prefixes[Math.floor(Math.random() * prefixes.length)]
	let length = ((["34","37"].includes(base)) ? 14 : 15) - base.length 
	const baseCardNumber = base + getBaseCardNumber(length);
	const checksum = getCheckDigit(baseCardNumber);
	return baseCardNumber + checksum;
}
/**
 * @function getVisaCardNumber
 *  @param {lengthsVisa} length
 * @returns {string} CardNumber Devuelve un Numero de tarjeta Visa
*/
function getVisaCardNumber(length = lengthsVisa.visa16) {
	const base = '4' + getBaseCardNumber(length -2);
	const checksum = getCheckDigit(base);
	return base + checksum;
}
/**
 * @function getMasterCardNumber
* @returns {string} CardNumber Devuelve un Numero de tarjeta MasterCard
*/
function getMasterCardNumber() {
	const prefixes = prefixesCard.mastercard;
	const base = prefixes[Math.floor(Math.random() * prefixes.length)] + getBaseCardNumber(13);
	const checksum = getCheckDigit(base);
	return base + checksum;
}
/**
 * @function getMasterCardNumber
* @returns {string} CardNumber Devuelve un Numero de tarjeta MasterCard
*/
function getAmexCardNumber() {
	const prefixes = prefixesCard.amex;
	const base = prefixes[Math.floor(Math.random() * prefixes.length)] + getBaseCardNumber(12);
	const checksum = getCheckDigit(base);
	return base + checksum;
}
/**
* @function getDiscoverCardNumber
* @returns {string} CardNumber Devuelve un Numero de tarjeta Discover
*/
function getDiscoverCardNumber() {
	const prefixes = prefixesCard.discover;
	let base = prefixes[Math.floor(Math.random() * prefixes.length)];
	const length = 15 - base.length;
	base += getBaseCardNumber(length);
	const checksum = getCheckDigit(base);
	return base + checksum;
}
/**
* @function getDinnerClubCardNumber
* @param {lengthsDinner} length
* @returns {string} CardNumber Devuelve un Numero de tarjeta de DinnerClub
*/
function getDinnerClubCardNumber(length = lengthsDinner.dinner16){
	const prefixes = prefixesCard.dinnerclub;
	let base = prefixes[Math.floor(Math.random() * prefixes.length)];
	base += getBaseCardNumber((length - 1) - base.length);
	const checksum = getCheckDigit(base);
	return base + checksum;
}

/**
 * @module CardTestLib
 * @fileoverview Librería CardTestLib - librería de JS diseñada para generar números de tarjetas de crédito válidos para propósitos de prueba
 * @description Esta librería es ideal para desarrolladores que necesitan simular transacciones, validar sistemas de pago, o realizar pruebas de integración, CardTestLib simplifica la generación de números de tarjetas de crédito conformes al algoritmo de Luhn.
 * @author Carlos I. Ynfante R. <https://github.com/CarlsRemy>
 * @license MIT
 * @copyright Carlos I. Ynfante R.
 * @version 0.0.1
*/
module.exports = {
	getBaseCardNumber,
	getCheckDigit,
	getCardNumber,
	getVisaCardNumber,
	getMasterCardNumber,
	getAmexCardNumber,
	getDiscoverCardNumber,
	getDinnerClubCardNumber,
	normalizeCardnumber,
	lengthsVisa,
	lengthsDinner
};