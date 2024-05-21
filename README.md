# CardTestLib
Poderosa y versátil librería de JS diseñada para generar números de tarjetas de crédito válidos para propósitos de prueba. Ideal para desarrolladores que necesitan simular transacciones, validar sistemas de pago, o realizar pruebas de integración, CardTestLib simplifica la generación de números de tarjetas de crédito conformes al algoritmo de Luhn.

[![NPM Version](https://img.shields.io/npm/v/cardtestlib.svg)](https://www.npmjs.com/package/cardtestlib)

> [!NOTE]  
> Esta libreria esta diseñada para hacer pruebas, no nos hacemos responsable de uso o cualquier accion dañina o freudulenta cometida con esta herramienta.

## Funciones disponibles:

### normalizeCardnumber(cardNumber: string): string
Esta funcion simplemente limpia los numeros de las tarjetas eliminando todo carracter no numerico

### getBaseCardNumber(length: number = 15): string
Genera un conjunto de numeros aleatorios, por defecto 15 de ellos

### getCheckDigit(cardNumbers: string): number
Genera el Digito validador a partir del **algoritmo de luhn**
```js
const checkDigit = getCheckDigit("538423209172662");
console.log(checkDigit) // Result: 4
```

### getCardNumber(): string
Gerera los numeros Aleatorios de las tarjetas Martercard, visa, American Express, Discover y Dinner Club
```js 
let cardnumber =  getCardNumber(); 
console.log(cardnumber) // Result: 5384232091726624
```


### getVisaCardNumber(length = lengthsVisa.visa16): string
Genera los numeros Aleatorios de las tarjetas Visa. Por Defecto 16 digitos.
```js
// lengthsVisa 
{
  visa12: 12,
  visa16: 16,
};
```
```js 
let cardnumber =  getVisaCardNumber()
console.log(cardnumber) // Result: 4603397902120974
```



### getMasterCardNumber(): string
Genera los numeros Aleatorios de tarjetas Discover
```js
let cardnumber =  getMasterCardNumber(); 
console.log(cardnumber) // Result: 5384232091726624
```
### getAmexCardNumber(): string
Genera los numeros Aleatorios de tarjetas Discover
```js
let cardnumber =  getAmexCardNumber(); 
console.log(cardnumber) // Result: 347421502794597
```
### getDinnerClubCardNumber(length = lengthsDinner.dinner16): string
Genera los numeros Aleatorios de tarjetas Discover. por Defecto 16 digitos
```js
// lengthsDinner 
{
  dinner14: 14,
  dinner16: 16,
  dinner19: 19,
}
```
```js
let cardnumber =  getDinnerClubCardNumber(); 
console.log(cardnumber) // Result: 3049347614152231
```
### getDiscoverCardNumber(): string
Genera los numeros Aleatorios de tarjetas Discover
```js
let cardnumber =  getDiscoverCardNumber(); 
console.log(cardnumber) // Result: 6578262180674306
```


## ¿Cómo si los cardNumbers son Validos?
Esta libreria no esta diseñada para hacer comprobaciones, de querer comprobar puedes validar el formato con mi 
otra libreria **creditCardProviders** en cuanto a la validacion del mismo puedes usar el **algoritmo de luhn**

Tambien puede visitar paginas como [Vcc Generator](https://www.vccgenerator.org/es/validador-de-tarjeta-de-credito/)

```cmd
	npm i creditCardProviders
```

```js
const {getCardInfo} = require('creditCardProviders');
const {getCardNumber} = require('cardtestlib');

let cardnumber =  getCardNumber(); // 5384232091726624
let Cardinfo = getCardInfo(cardnumber) 
console.log(Cardinfo)
// Result: { type: 'mastercard', validLengths: [ 16 ], pinLength: 3 }
```