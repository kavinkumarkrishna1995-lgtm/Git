import { test } from '@playwright/test';

test('File Upload', async ({ page }) => {

    await page.goto('https://www.file.io/');

    const filePaths = ['C:\\For Test\\testPhoto_FileHandling.png','C:\\For Test\\ChatGPT Image Aug 19, 2026, 04_49_30 AM.png'];

    await page.locator('input[type="file"]').first().setInputFiles(filePaths);

    await page.waitForTimeout(3000);

});