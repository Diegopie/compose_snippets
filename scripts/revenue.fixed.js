import "dotenv/config";
import createRandomBrowser from "./utils/create-browser-page.js";
import { createDispatch } from "./utils/create-dispatch.js";
import { getRandomProduct } from "./utils/data/products.data.js";

(async () => {
  for (let i = 1; i <= 180; i++) {
    const { browser, context, page, location } = await createRandomBrowser();
    const product = getRandomProduct();

    await page.goto(process.env.SITE_URL + "qa");

    // const willConvert = Math.random() < (1 / 3); // 1 in 3 chance
    const willConvert = true; // 1 in 3 chance

    if (willConvert) {
      console.log("Conversion");

      await page.exposeFunction("createDispatch", createDispatch);

      await page.evaluate(
        ({ currencyCode, productValue }) => {
          console.log(currencyCode, productValue);
          const button = document.querySelector("#checkout-button");
          button.onclick = () => {
            window.createDispatch(currencyCode, productValue);
          };
        },
        { currencyCode: location.currencyCode, productValue: product.price }
      );
      await page.getByTestId("revenue").click();
      await page.pause();
    } else {
      console.log("Not a conversion");
    }
    await page.pause();
    await context.close();
    await browser.close();
  }
})();
