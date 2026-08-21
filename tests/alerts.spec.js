import { test } from '@playwright/test';

test('JS Alerts', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async (dialog) => {

        console.log(dialog.message());
        console.log(dialog.type());

        if (dialog.type() === 'alert') {
            await dialog.accept();
        }

        else if (dialog.type() === 'confirm') {
            await dialog.dismiss();
        }

        else if (dialog.type() === 'prompt') {
            await dialog.accept('Enjoy the Day');
        }
    });

    await page.locator('#alertButton').click();

    await page.locator('#confirmButton').click();

    await page.locator('#promtButton').click();

});