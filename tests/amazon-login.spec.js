import { test } from '@playwright/test';

test('Amazon Login Setup', async ({ page }) => {

  // Open Amazon
  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded'
  });

  // Click Hello, Sign in
  await page.getByRole('link', {
    name: /hello, sign in/i
  }).click();

  // Enter mobile number
  await page.getByLabel(/mobile number/i)
    .fill('9361537681');

  // Continue
  await page.getByRole('button', {
    name: /continue/i
  }).click();

  // Select Sign in with OTP
  await page.getByRole('button', {
    name: 'Sign in with an OTP'
  }).click();

  // Wait for OTP page
  await page.waitForTimeout(1000);

  // ONE-TIME MANUAL OTP
  // Enter OTP and complete login
  await page.pause();

  // Save logged-in session
  await page.context().storageState({
    path: 'amazon-auth.json'
  });

});