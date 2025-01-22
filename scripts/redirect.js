import "dotenv/config";
import inquirer from "inquirer";
import createRandomBrowser from "./utils/create-browser-page.js";
import { getRandomProduct } from "./utils/data/products.data.js";
import pLimit from "p-limit";

const prompts = {
  testedUsers: {
    type: "number",
    name: "testedUsers",
    default: 800,
    message:
      "How many tested users do you want to simulate? (At least 800 is recommended for billing tests)",
  },
  confirm: {
    type: "confirm",
    name: "confirm",
    message: "Does this look correct?",
    default: false,
  },
  runAgain: {
    type: "confirm",
    name: "runAgain",
    message: "Would you like to run this again?",
    default: false,
  },
};

/**
 * @param {number} testedUsers
 * @param {string[]} customGoalsList
 * @returns {function(): void}
 */
const simulateUsers = async (
  testedUsers = 1,
  customGoalsList = ["revenue"]
) => {
  console.log(`Simulating ${testedUsers} testedUsers`);
  console.time("Simulation");
  const limit = pLimit(20);
  try {
    await Promise.all(
      Array.from({ length: testedUsers }).map(() =>
        limit(async () => {
          const { browser, browserName, context, page, location } =
            await createRandomBrowser();
          const product = getRandomProduct();
          await page.goto(process.env.SITE_URL + '/', { waitUntil: "networkidle" });

          try {
            await Promise.all(
              customGoalsList.map(async (goal) => {
                console.log(`Simulating: ${browserName} in ${location.name}`);
                const willConvert = Math.random() > 1 / 3; // 1 in 3 chance
                if (willConvert) {
                  console.log("Conversion:", goal);

                  await page.evaluate(
                    async ({ currency, value, goal }) => {
                      if (goal === "revenue") {
                        window.compose.dispatchEvent(
                          new CustomEvent(`goal:${goal}`, {
                            detail: {
                              value: value,
                              currency: `${currency}`,
                            },
                          })
                        );
                        console.log("ran event");
                      } else {
                        window.compose.dispatchEvent(
                          new CustomEvent(`goal:${goal}`)
                        );
                      }
                    },
                    {
                      currency: location.currencyCode,
                      value: product.price,
                      goal: goal,
                    }
                  );

                  await page.pause();
                } else {
                  console.log("Not a Conversion: ", goal);
                }
              })
            );
          } catch (error) {
            console.error(`Error on ${browserName}: goal ${goal}`, error);
          } finally {
            await page.pause();
            await context.close();
            await browser.close();
          }
        })
      )
    );
  } catch (error) {
    console.error("Error on concurrency limiting: ", error);
  }

  console.timeEnd("Simulation");
};

console.log = function () {};

// If script is run in PW Debug, just run playwright
if (process.env.PWDEBUG) {
  simulateUsers();
  // process.exit(0);
} else {
  main();
}

if (process.env.LOGGING === "true") {
  console.log = (...args) => process.stdout.write(args.join(" ") + "\n");
}

async function main() {

  /**
   * @type {number}
   */
  const { testedUsers } = await inquirer.prompt(prompts.testedUsers);
  console.log(testedUsers);
  simulateUsers(testedUsers);
}
