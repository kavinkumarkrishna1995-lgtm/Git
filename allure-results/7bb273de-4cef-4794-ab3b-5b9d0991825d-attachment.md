# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> amazon order
- Location: tests\amazon.spec.js:3:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('amazon order', async ({ page }) => {
  4  | 
  5  |  await page.goto('https://www.amazon.in/');
  6  |   await page.getByRole('link', { name: /sign in/i }).click();
  7  |   await page.pause(); // Enter mobile number manually
  8  | 
  9  |   // Select OTP login and enter OTP manually
> 10 |   await page.getByText(/sign in with an otp/i).click();
     |                                     ^ Error: locator.fill: Target page, context or browser has been closed
  11 |   await page.pause(); // Enter OTP manually
  12 | 
  13 |   // Search for the product
  14 |   await page.getByPlaceholder(/search/i).fill('bump on board car sign board');
  15 |   await page.keyboard.press('Enter');
  16 | 
  17 |   // Open the first search result
  18 |   await page.locator('[data-component-type="s-search-result"]').first().click();
  19 | 
  20 |   // Select quantity 1 and click Buy Now
  21 |   await page.getByLabel(/quantity/i).selectOption('1');
  22 |   await page.getByRole('button', { name: /buy now/i }).click();
  23 | 
  24 |   // Stop for manual payment/QR-code processing
  25 |   await page.pause();
  26 | 
  27 |   console.log('✅ Order placed successfully');
  28 | });
  29 | 
```