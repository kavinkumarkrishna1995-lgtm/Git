import { test } from '@playwright/test';

test('DemoQA Radio Checkbox Button', async ({ page }) => {

    await page.goto('https://demoqa.com/radio-button');

    await page.locator("//input[@id='yesRadio']").click();

    await page.waitForTimeout(4000);

    // await page.locator("//div[@id='app']/descendant::label[@for='impressiveRadio']").click();

    // await page.locator("//div[@id='app']/descendant::label[@for='noRadio']").click();

    // await page.goto('https://demoqa.com/checkbox');

    // await page.locator("//div[@id='app']/descendant::label[@for='tree-node-home']").click();

    // await page.goto('https://demoqa.com/buttons');

    // await page.locator("//div[@id='app']/descendant::button[text()='Click Me']").click();

});
