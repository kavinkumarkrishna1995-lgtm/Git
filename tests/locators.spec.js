import {test} from '@playwright/test';

test ('locate the elements', async({page}) => {

await page.goto('https://demoqa.com/text-box');
await page.locator('#userName').fill('kavinkumar');
await page.locator('#userEmail').fill('kavinkumar.krishna1995@gmail.com');
await page.locator('#currentAddress').fill('Goodwill Nagar, Old Perungalathur, Chennai');
await page.locator('#permanentAddress').fill('Goodwill Nagar, Old Perungalathur, Chennai');
await page.waitForTimeout(5000); 

})