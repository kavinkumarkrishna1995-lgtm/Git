import { test } from '@playwright/test';

test('Myntra Product Analysis', async ({ page }) => {

    await page.goto("https://www.myntra.com/boy-tshirts");

    const totalProducts = await page.locator("//li[@class='product-base']").count();

    console.log("Total Products :", totalProducts);

    const productNames = await page.locator("//h4[@class='product-product']").allTextContents();

    async function getPrices() {

        const discountedPrices = await page.locator("//span[@class='product-discountedPrice']").allTextContents();

        const undiscountedPrices = await page.locator("//div[@class='product-price']/span[not(@class)]").allTextContents();

        let allPrices = [];

        for (const price of discountedPrices) {

            const amount = parseInt(price.replace("Rs. ", ""));
            allPrices.push(amount);

        }

        for (const price of undiscountedPrices) {

            const amount = parseInt(price.replace("Rs. ", ""));
            allPrices.push(amount);

        }

        return allPrices;

    }

    const prices = await getPrices();

    console.log("All Product Prices :", prices);

    const minimumPrice = Math.min(...prices);

    console.log("Minimum Price :", minimumPrice);

    const minimumPriceIndex = prices.indexOf(minimumPrice);

    console.log("Product Name :", productNames[minimumPriceIndex]);

});