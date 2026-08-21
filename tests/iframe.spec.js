import { test } from '@playwright/test';

test('Frames', async ({ page }) => {

    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

    const frame2 = page.frameLocator('#frm2');

    await frame2.locator('#firstName').fill('Kavin');
    await frame2.locator('#lastName').fill('K');

    const frame3 = page.frameLocator('#frm3');

    await frame3.locator('#firstName').fill('Kavin');
    await frame3.locator('#lastName').fill('K');

});