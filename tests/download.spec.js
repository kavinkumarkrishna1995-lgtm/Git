import { test } from '@playwright/test';

test('download', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    const [downloaded_file] = await Promise.all([page.waitForEvent('download'),page.getByRole('button', { name: 'Download' }).click()]);

    await downloaded_file.saveAs('./download/' + downloaded_file.suggestedFilename());

    await page.waitForTimeout(4000);
});