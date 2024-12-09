/**
 * @typedef {Object} ProductType
 * @property {string} title
 * @property {number} price
 */

/**
 * @type {ProductType[]}
 */

const productsArray = [
  { title: "Premium Laptop Bag", price: 239 },
  { title: "Wireless Noise-Cancelling Headphones", price: 499 },
  { title: "Ergonomic Office Chair", price: 345 },
  { title: "Smartwatch Series 5", price: 410 },
  { title: "4K Ultra HD Monitor", price: 469 },
  { title: "High-Performance Blender", price: 299 },
  { title: "Home Security Camera System", price: 379 },
  { title: "Electric Standing Desk", price: 459 },
  { title: "Luxury Bedding Set", price: 325 },
  { title: "Professional DSLR Camera", price: 489 },
  { title: "Compact Treadmill", price: 420 },
  { title: "Smart Home Hub", price: 250 },
  { title: "Air Purifier", price: 299 },
  { title: "Wireless Gaming Controller", price: 215 },
  { title: "High-End Soundbar", price: 499 },
  { title: "Cordless Vacuum Cleaner", price: 315 },
  { title: "Gaming Chair", price: 430 },
  { title: "Electric Guitar Starter Kit", price: 289 },
  { title: "Automatic Espresso Machine", price: 480 },
  { title: "Portable Projector", price: 355 },
];

/**
 * @returns {ProductType}
 */
export function getRandomProduct() {
  return productsArray[Math.floor(Math.random() * productsArray.length)];
}