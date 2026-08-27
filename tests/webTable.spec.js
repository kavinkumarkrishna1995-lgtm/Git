import { test } from '@playwright/test';

test('Webtable', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    const rows = page.locator('table tbody tr');

    console.log("Existing Rows:", await rows.count());

    await page.getByRole('button', { name: 'Add' }).click();

    await page.getByPlaceholder('First Name').fill('Kavin');
    await page.getByPlaceholder('Last Name').fill('K');
    await page.getByPlaceholder('name@example.com').fill('kavin@gmail.com');
    await page.getByPlaceholder('Age').fill('31');
    await page.getByPlaceholder('Salary').fill('100000');
    await page.getByPlaceholder('Department').fill('Testing');

    await page.getByRole('button', { name: 'Submit' }).click();

    console.log("Total Rows:", await rows.count());

    for (let i = 0; i < await rows.count(); i++) {

        const text = await rows.nth(i).textContent();

        console.log(`Row ${i + 1}: ${text}`);
    }

    for (let i = 0; i < await rows.count(); i++) {
        const text = await rows.nth(i).textContent();
        if (text.includes('Kavin')) {
            await rows.nth(i).locator('[title="Edit"]').click();
            break;
}}
    await page.getByPlaceholder('First Name').fill('KavinUpdated');
    await page.getByPlaceholder('Last Name').fill('K');
    await page.getByPlaceholder('name@example.com').fill('kavinupdated@gmail.com');
    await page.getByPlaceholder('Age').fill('31');
    await page.getByPlaceholder('Salary').fill('100000');
    await page.getByPlaceholder('Department').fill('Automation Testing');

    await page.getByRole('button', { name: 'Submit' }).click();

    for (let i = 0; i < await rows.count(); i++) {
       const text = await rows.nth(i).textContent();
        if (text.includes('KavinUpdated')) {
            console.log("Updated Row:", text);
            await rows.nth(i).locator('[title="Delete"]').click();
            break;
}}
    await page.waitForTimeout(4000);
});