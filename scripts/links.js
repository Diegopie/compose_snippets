import "dotenv/config";
import inquirer from "inquirer";
import createRandomBrowser from "./utils/create-browser-page.js";
import { getRandomProduct } from "./utils/data/products.data.js";
import pLimit from "p-limit";
import { manualDelay } from "./utils/helper.js";

const prompts = {
  useCustomGoals: {
    type: "confirm",
    name: "useCustomGoals",
    message:
      "Do you want to simulate custom goals? Revenue is always simulated",
    default: false,
  },
  customGoalsList: {
    type: "input",
    name: "customGoalsList",
    message: "Enter your custom goals in a comma separated list?",
    default: "custom_goal_01, custom_goal_02",
    filter: (input) => {
      /**
       * @type {string[]}
       */
      const newList = input.split(", ");
      newList.unshift("revenue");
      return newList;
    },
  },
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
  customGoalsList = ["engagement"]
) => {
  console.log(`Simulating ${testedUsers} testedUsers`);
  console.time("Simulation");
  const limit = pLimit(50);
  try {
    await Promise.all(
      Array.from({ length: testedUsers }).map(() =>
        limit(async () => {
          const { browser, browserName, context, page, location } =
            await createRandomBrowser();
          const product = getRandomProduct();
          await page.goto(process.env.SITE_URL, { waitUntil: "networkidle" });
          await manualDelay(800)

          try {
            await Promise.all(
              customGoalsList.map(async (goal) => {
                console.log(`Simulating: ${browserName} in ${location.name}`);
                const willConvert = Math.random() > 1 / 3; // 1 in 3 chance
                if (willConvert) {
                  console.log("Conversion:", goal);

                  await page.locator('.product-card a').first().click()

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
   * @type { boolean }
   */
  const { useCustomGoals } = await inquirer.prompt(prompts.useCustomGoals);
  console.log(useCustomGoals);
  /**
   * @type {string[]}
   */
  let customGoalsList = ["engagement"];
  if (useCustomGoals) {
    const customGoalsListUser = await inquirer.prompt(prompts.customGoalsList);
    customGoalsList = customGoalsListUser.customGoalsList;
  }
  /**
   * @type {number}
   */
  const { testedUsers } = await inquirer.prompt(prompts.testedUsers);
  console.log(testedUsers, customGoalsList);
  simulateUsers(testedUsers, customGoalsList);
}
