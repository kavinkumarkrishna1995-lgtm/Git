import { test } from '@playwright/test';

test('Myntra Product Analysis', async ({ page }) => {

    await page.goto("https://www.myntra.com/boy-tshirts");

    const totalProducts = await page.locator("//li[@class='product-base']").count();
    console.log("Total Products :", totalProducts);

    const productNames = await page.locator("//h4[@class='product-product']").allTextContents();

    const prices = await page.locator("//span[@class='product-discountedPrice']").allTextContents();

    let minPrice = 100000;
    let minProduct = "";
    let allPrices = [];

    async function getMinimumPrice() {

        for (const priceText of prices) {

            const price = parseInt(priceText.replace("Rs. ", ""));

            allPrices.push(price);

            if (price < minPrice) {
                minPrice = price;
            }
        }

        return minPrice;
    }

    const minimum = await getMinimumPrice();

    for (const name of productNames) {

        console.log(name);

        if (minProduct === "") {
            minProduct = name;
            break;
        }
    }

    console.log("All Prices :", allPrices);
    console.log("Minimum Price :", minimum);
    console.log("Product Name :", minProduct);

});