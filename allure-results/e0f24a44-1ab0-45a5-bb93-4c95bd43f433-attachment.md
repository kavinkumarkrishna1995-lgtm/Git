# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> amazon order
- Location: tests\amazon.spec.js:3:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText(/sign in with an otp/i)
    - waiting for "https://www.amazon.in/gp/css/homepage.html?ref_=nav_youraccount_btn" navigation to finish...
    - navigated to "https://www.amazon.in/gp/css/homepage.html?ref_=nav_youraccount_btn"
    - waiting for navigation to finish...
    - navigated to "https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26signIn%3D1%26useRedirectOnS…"
    - waiting for "https://www.amazon.in/ax/claim?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26sign…" navigation to finish...
    - navigated to "https://www.amazon.in/ax/claim?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26sign…"
    - locator resolved to <span aria-hidden="true" class="a-button-text" id="auth-login-via-otp-btn-announce">Sign in with an OTP</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> intercepts pointer events
    - retrying click action
      - waiting 100ms
    11 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> intercepts pointer events
     - retrying click action
       - waiting 500ms
    - waiting for "https://www.amazon.in/ap/signin" navigation to finish...
    - navigated to "https://www.amazon.in/ap/cvf/request?arb=806950ef-80ca-453f-ad00-b4c410bc36fa"
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - waiting for "https://www.amazon.in/ap/cvf/verify" navigation to finish...
    - navigated to "https://www.amazon.in/gp/yourstore/home?path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1&action=sign-out&ref_=nav_AccountFlyout_signout&"
    - waiting for navigation to finish...
    - navigated to "https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26…"
    - waiting for "https://www.amazon.in/ax/claim?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useR…" navigation to finish...
    - navigated to "https://www.amazon.in/ax/claim?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useR…"
    - locator resolved to <span aria-hidden="true" class="a-button-text" id="auth-login-via-otp-btn-announce">Sign in with an OTP</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> intercepts pointer events
    - retrying click action
      - waiting 100ms
    240 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> intercepts pointer events
      - retrying click action
        - waiting 500ms
    - waiting for "https://www.amazon.in/ap/signin" navigation to finish...
    - navigated to "https://www.amazon.in/ap/cvf/request?arb=82a0e1a8-b36c-4042-89b8-35a17c1845fa"
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - waiting for "https://www.amazon.in/ap/cvf/verify" navigation to finish...
    - navigated to "https://www.amazon.in/gp/yourstore/home?path=%2Fgp%2Fyourstore%2Fhome&useRedirectOnSuccess=1&signIn=1&action=sign-out&ref_=nav_AccountFlyout_signout&"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | const readline = require('readline');
  4  | 
  5  | test('amazon order', async ({ page }) => {
  6  |   const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  7  |   const otp = () => new Promise(r => rl.question('Enter OTP: ', r));
  8  | 
  9  |   // Open Amazon and enter mobile number
  10 |   await page.goto('https://www.amazon.in/');
  11 |   await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  12 |   await page.getByLabel(/mobile number/i).fill('9361537681');
  13 | 
> 14 |   // Cancel passkey popup and choose OTP login
     |                                                ^ Error: locator.click: Test ended.
  15 |   await page.getByRole('button', { name: /cancel/i }).click();
  16 |   await page.getByText(/sign in with an otp|login with otp/i).click();
  17 | 
  18 |   // Enter OTP from terminal and verify
  19 |   await page.getByLabel(/otp/i).fill(await otp());
  20 |   rl.close();
  21 |   await page.getByRole('button', { name: /verify/i }).click();
  22 | 
  23 |   // Search and open first product
  24 |   await page.getByPlaceholder(/search/i).fill('bump on board car sign board');
  25 |   await page.keyboard.press('Enter');
  26 |   await page.locator('[data-component-type="s-search-result"]').first().click();
  27 | 
  28 |   // Quantity 1 and Buy Now
  29 |   await page.getByLabel(/quantity/i).selectOption('1');
  30 |   await page.getByRole('button', { name: /buy now/i }).click();
  31 | 
  32 |   // Stop before actual QR payment
  33 |   await page.pause();
  34 | });
  35 | 
```