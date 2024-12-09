/**
 * @typedef {Object} LocationType
 * @property {string} name - The name of the location, including city and country.
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} timezone - The IANA timezone identifier.
 * @property {string} currencyCode - The ISO 4217 currency code used in the location.
 */

/**
 * @type {LocationType[]}
 */
const locations = [
  // U.S. Locations
  { name: 'New York, USA', latitude: 40.7128, longitude: -74.0060, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'Los Angeles, USA', latitude: 34.0522, longitude: -118.2437, timezone: 'America/Los_Angeles', currencyCode: 'USD' },
  { name: 'Chicago, USA', latitude: 41.8781, longitude: -87.6298, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'Houston, USA', latitude: 29.7604, longitude: -95.3698, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'Phoenix, USA', latitude: 33.4484, longitude: -112.0740, timezone: 'America/Phoenix', currencyCode: 'USD' },
  { name: 'Philadelphia, USA', latitude: 39.9526, longitude: -75.1652, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'San Antonio, USA', latitude: 29.4241, longitude: -98.4936, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'San Diego, USA', latitude: 32.7157, longitude: -117.1611, timezone: 'America/Los_Angeles', currencyCode: 'USD' },
  { name: 'Dallas, USA', latitude: 32.7767, longitude: -96.7970, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'Austin, USA', latitude: 30.2672, longitude: -97.7431, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'San Francisco, USA', latitude: 37.7749, longitude: -122.4194, timezone: 'America/Los_Angeles', currencyCode: 'USD' },
  { name: 'Denver, USA', latitude: 39.7392, longitude: -104.9903, timezone: 'America/Denver', currencyCode: 'USD' },
  { name: 'Miami, USA', latitude: 25.7617, longitude: -80.1918, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'Seattle, USA', latitude: 47.6062, longitude: -122.3321, timezone: 'America/Los_Angeles', currencyCode: 'USD' },
  { name: 'Boston, USA', latitude: 42.3601, longitude: -71.0589, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'Las Vegas, USA', latitude: 36.1699, longitude: -115.1398, timezone: 'America/Los_Angeles', currencyCode: 'USD' },
  { name: 'Atlanta, USA', latitude: 33.7490, longitude: -84.3880, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'Minneapolis, USA', latitude: 44.9778, longitude: -93.2650, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'New Orleans, USA', latitude: 29.9511, longitude: -90.0715, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'Honolulu, USA', latitude: 21.3069, longitude: -157.8583, timezone: 'Pacific/Honolulu', currencyCode: 'USD' },
  { name: 'Salt Lake City, USA', latitude: 40.7608, longitude: -111.8910, timezone: 'America/Denver', currencyCode: 'USD' },
  { name: 'St. Louis, USA', latitude: 38.6270, longitude: -90.1994, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'Cincinnati, USA', latitude: 39.1031, longitude: -84.5120, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'Tampa, USA', latitude: 27.9506, longitude: -82.4572, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'Nashville, USA', latitude: 36.1627, longitude: -86.7816, timezone: 'America/Chicago', currencyCode: 'USD' },
  { name: 'Pittsburgh, USA', latitude: 40.4406, longitude: -79.9959, timezone: 'America/New_York', currencyCode: 'USD' },
  { name: 'Portland, USA', latitude: 45.5051, longitude: -122.6750, timezone: 'America/Los_Angeles', currencyCode: 'USD' },
  { name: 'Anchorage, USA', latitude: 61.2181, longitude: -149.9003, timezone: 'America/Anchorage', currencyCode: 'USD' },

  // International Locations
  { name: 'Paris, France', latitude: 48.8566, longitude: 2.3522, timezone: 'Europe/Paris', currencyCode: 'EUR' },
  { name: 'Tokyo, Japan', latitude: 35.6895, longitude: 139.6917, timezone: 'Asia/Tokyo', currencyCode: 'JPY' },
  { name: 'London, United Kingdom', latitude: 51.5074, longitude: -0.1278, timezone: 'Europe/London', currencyCode: 'GBP' },
  { name: 'Sydney, Australia', latitude: -33.8688, longitude: 151.2093, timezone: 'Australia/Sydney', currencyCode: 'AUD' },
  { name: 'Toronto, Canada', latitude: 43.6511, longitude: -79.3470, timezone: 'America/Toronto', currencyCode: 'CAD' },
  { name: 'São Paulo, Brazil', latitude: -23.5505, longitude: -46.6333, timezone: 'America/Sao_Paulo', currencyCode: 'BRL' },
  { name: 'Berlin, Germany', latitude: 52.5200, longitude: 13.4050, timezone: 'Europe/Berlin', currencyCode: 'EUR' },
  { name: 'Mumbai, India', latitude: 19.0760, longitude: 72.8777, timezone: 'Asia/Kolkata', currencyCode: 'INR' },
  { name: 'Dubai, UAE', latitude: 25.2760, longitude: 55.2962, timezone: 'Asia/Dubai', currencyCode: 'AED' },
  { name: 'Singapore, Singapore', latitude: 1.3521, longitude: 103.8198, timezone: 'Asia/Singapore', currencyCode: 'SGD' },
  { name: 'Mexico City, Mexico', latitude: 19.4326, longitude: -99.1332, timezone: 'America/Mexico_City', currencyCode: 'MXN' },
  { name: 'Moscow, Russia', latitude: 55.7558, longitude: 37.6173, timezone: 'Europe/Moscow', currencyCode: 'RUB' },
  { name: 'Buenos Aires, Argentina', latitude: -34.6037, longitude: -58.3816, timezone: 'America/Argentina/Buenos_Aires', currencyCode: 'ARS' },
  { name: 'Beijing, China', latitude: 39.9042, longitude: 116.4074, timezone: 'Asia/Shanghai', currencyCode: 'CNY' },
  { name: 'Istanbul, Turkey', latitude: 41.0082, longitude: 28.9784, timezone: 'Europe/Istanbul', currencyCode: 'TRY' },
  { name: 'Seoul, South Korea', latitude: 37.5665, longitude: 126.9780, timezone: 'Asia/Seoul', currencyCode: 'KRW' },
  { name: 'Bangkok, Thailand', latitude: 13.7563, longitude: 100.5018, timezone: 'Asia/Bangkok', currencyCode: 'THB' }
];


export default locations;