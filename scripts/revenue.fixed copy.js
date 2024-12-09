import "dotenv/config";
import createRandomBrowser from "./utils/create-browser-page.js";
import { createDispatch } from "./utils/create-dispatch.js";

(async () => {
  for (let i = 1; i <= 180; i++) {
    const { browser, context, page, location } = await createRandomBrowser();

    await page.goto(process.env.SITE_URL);

    const { selectedProduct, productValue } = await page.evaluate(() => {
      const allProducts = document.querySelectorAll(".product-card");
      const selectedProduct =
        Math.floor(Math.random() * allProducts.length) + 1;
      // Get Item Price
      const itemPrice =
        document.querySelectorAll(".product-card")[selectedProduct - 1]
          .children[0].children[2].textContent;
      const productValue = parseFloat(itemPrice.replace(/[$,]/g, ""));
      return { selectedProduct, productValue };
    });
    console.log(selectedProduct, productValue);

    await page.locator(`.product-card:nth-of-type(${selectedProduct})`).click();

    await page.getByRole("button", { name: "Add" }).click();

    // const willCheckout = Math.random() < (1 / 3); // 1 in 3 chance
    const willCheckout = true; // 1 in 3 chance

    if (willCheckout) {
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
        { currencyCode: location.currencyCode, productValue }
      );
      await page.getByRole("button", { name: "Checkout" }).click();
      await page.pause();
    } else {
      console.log("Not a conversion");
    }
    await page.pause();
    await context.close();
    await browser.close();
  }
})();
