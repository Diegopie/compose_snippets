import locations from "./data/location.data.js";
import { getRandomDevice } from "./data/user-agent-devices.data.js";


/**
 * Represents a random browser simulation environment.
 * @typedef {Object} BrowserSimulation
 * @property {import('@playwright/test').Browser} browser
 * @property {import('@playwright/test').BrowserContext} context
 * @property {import('@playwright/test').Page} page
 * @property {LocationType} location
 */

/**
 * Creates a random browser simulation using a random device and location.
 *
 * @returns {Promise<BrowserSimulation>} A promise that resolves to a BrowserSimulation object.
 */

async function createRandomBrowser() {
  const randomDevice = getRandomDevice();
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];

  console.log(`Simulating: ${randomDevice.name} in ${randomLocation.name}`);

  const browser = await randomDevice.browserType.launch();
  const context = await browser.newContext({
    ...randomDevice.options,
    geolocation: {
      latitude: randomLocation.latitude,
      longitude: randomLocation.longitude,
    },
    timezoneId: randomLocation.timezone,
    permissions: ["geolocation"],
  });

  const page = await context.newPage();

  return { browser, context, page, location: randomLocation };
}

export default createRandomBrowser;
