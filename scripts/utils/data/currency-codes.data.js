
/**
 * @type {string[]}
 */
export const currencyCodes = [
  "AUD", // Australian Dollar
  "CAD", // Canadian Dollar
  "CHF", // Swiss Franc
  "DKK", // Danish Krone
  "EUR", // Euro
  "GBP", // British Pound Sterling
  "ISK", // Icelandic Króna
  "NOK", // Norwegian Krone
  "SEK", // Swedish Krona
  "USD", // United States Dollar
  "MXN", // Mexican Peso
  "COP"  // Colombian Peso
];

/**
 * @type {string[]}
 */
const weightedCurrencyCodes = [...currencyCodes, "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"];

/**
 * @param {boolean} weighted
 * @returns {string}
 */
export function getRandomCurrencyCode(weighted = true) {
  const currencyCodeArray = weighted ? weightedCurrencyCodes : currencyCodes;

  return currencyCodeArray[Math.floor(Math.random() * currencyCodeArray.length)];
}

