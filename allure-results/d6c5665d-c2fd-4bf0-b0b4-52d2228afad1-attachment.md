# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> Amazon Complete E2E Order
- Location: tests\amazon.spec.js:34:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id="continue" and contains(@aria-labelledby,"auth-login-via-otp-btn-announce")]') to be visible
    - waiting for "https://www.amazon.in/ap/cvf/approval/verifyOtp" navigation to finish...

```

# Test source

```ts
  1   | // amazon.spec.js
  2   | // Amazon India Complete E2E Order Automation
  3   | // Manual steps: OTP entry/verification, QR payment scan/completion
  4   | 
  5   | const { test, expect } = require('@playwright/test');
  6   | 
  7   | test.setTimeout(600000); // 10 minutes - accommodates manual OTP + payment steps
  8   | 
  9   | /**
  10  |  * Robust click helper.
  11  |  * Waits for the element to be visible, scrolled into view, and ENABLED
  12  |  * (not just visible) before clicking. Amazon frequently renders a button
  13  |  * before its own JS has enabled it, which is why a plain .click() can
  14  |  * silently stall. Falls back to a dispatched click event once, and
  15  |  * captures a screenshot if it still fails, so failures are diagnosable.
  16  |  */
  17  | async function clickWhenReady(page, locator, label, timeout = 30000) {
  18  |   console.log(`-> Waiting for "${label}"...`);
> 19  |   await locator.waitFor({ state: 'visible', timeout });
      |                 ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  20  |   await locator.scrollIntoViewIfNeeded();
  21  |   await expect(locator, `"${label}" never became enabled`).toBeEnabled({ timeout });
  22  | 
  23  |   try {
  24  |     await locator.click({ timeout });
  25  |   } catch (err) {
  26  |     console.log(`Standard click failed for "${label}" - retrying via dispatchEvent...`);
  27  |     await page.screenshot({ path: `debug-${label.replace(/\s+/g, '_')}-fail.png` }).catch(() => {});
  28  |     await locator.dispatchEvent('click');
  29  |   }
  30  | 
  31  |   console.log(`Clicked "${label}"`);
  32  | }
  33  | 
  34  | test('Amazon Complete E2E Order', async ({ page }) => {
  35  | 
  36  |   // ============================================================
  37  |   // STEP 1: Open Amazon India
  38  |   // ============================================================
  39  |   await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });
  40  | 
  41  |   // ============================================================
  42  |   // STEP 2: Click "Hello, Sign in"
  43  |   // ============================================================
  44  |   const signInLink = page.locator('#nav-link-accountList');
  45  |   await clickWhenReady(page, signInLink, 'Hello, Sign in');
  46  | 
  47  |   // ============================================================
  48  |   // STEP 3: Enter mobile number
  49  |   // FIX: switched from .fill() to .pressSequentially() - Amazon's
  50  |   // Continue button stays disabled until its own JS sees real keystroke
  51  |   // events. .fill() sets the value directly and can leave the button
  52  |   // disabled even though the digits are visibly in the field.
  53  |   // ============================================================
  54  |   const mobileInput = page.locator('#ap_phone_number, input[name="email"]').first();
  55  |   await mobileInput.waitFor({ state: 'visible', timeout: 30000 });
  56  |   await mobileInput.click();
  57  |   await mobileInput.clear();
  58  |   await mobileInput.pressSequentially('9361537681', { delay: 60 });
  59  |   await page.keyboard.press('Escape'); // dismiss any autosuggest dropdown that could sit over the Continue button
  60  | 
  61  |   // ============================================================
  62  |   // STEP 4: Click the CORRECT Continue button (mshop sign-in variant)
  63  |   // Two #continue elements exist on this page - disambiguate via aria-labelledby
  64  |   // ============================================================
  65  |   const firstContinueBtn = page.locator(
  66  |     '//input[@id="continue" and contains(@aria-labelledby,"auth-signin-via-mshop-btn-announce")]'
  67  |   );
  68  |   await clickWhenReady(page, firstContinueBtn, 'First Continue button (mshop sign-in)');
  69  | 
  70  |   // ============================================================
  71  |   // STEP 5: Click "Sign in with an OTP"
  72  |   // Second #continue element, disambiguated via its own aria-labelledby
  73  |   // ============================================================
  74  |   const otpSignInBtn = page.locator(
  75  |     '//input[@id="continue" and contains(@aria-labelledby,"auth-login-via-otp-btn-announce")]'
  76  |   );
  77  |   await clickWhenReady(page, otpSignInBtn, 'Sign in with an OTP button');
  78  | 
  79  |   // ============================================================
  80  |   // STEP 6: MANUAL OTP ENTRY + VERIFY
  81  |   // Amazon has sent the OTP to 9361537681.
  82  |   // Script pauses here. Manually:
  83  |   //   1. Enter the OTP
  84  |   //   2. Click Verify
  85  |   //   3. Wait for successful login
  86  |   //   4. Click "Resume" in Playwright Inspector
  87  |   // ============================================================
  88  |   console.log('>>> PAUSED: Please manually enter OTP and click Verify, then Resume <<<');
  89  |   await page.pause();
  90  | 
  91  |   // ============================================================
  92  |   // STEP 7: After resume, wait for search bar (confirms login succeeded,
  93  |   // does NOT re-attempt login)
  94  |   // ============================================================
  95  |   const searchBar = page.locator(
  96  |     '//input[@id="twotabsearchtextbox" or @name="field-keywords"]'
  97  |   ).first();
  98  |   await searchBar.waitFor({ state: 'visible', timeout: 60000 });
  99  | 
  100 |   // ============================================================
  101 |   // STEP 8: Search for "bumpon board sticker"
  102 |   // ============================================================
  103 |   await searchBar.click();
  104 |   await searchBar.fill('bumpon board sticker');
  105 |   await searchBar.press('Enter');
  106 | 
  107 |   // ============================================================
  108 |   // STEP 9: Wait for search results
  109 |   // ============================================================
  110 |   const searchResultsContainer = page.locator('//div[@data-component-type="s-search-result"]');
  111 |   await searchResultsContainer.first().waitFor({ state: 'visible', timeout: 30000 });
  112 | 
  113 |   // ============================================================
  114 |   // STEP 10: Select THE EXACT product via image alt text match
  115 |   // ============================================================
  116 |   const exactProductResult = page.locator(
  117 |     '//div[@data-component-type="s-search-result"]' +
  118 |     '[.//img[contains(@alt,"Bump on Board car Hanging") ' +
  119 |     'and contains(@alt,"Sleeping Child/Baby Vehicle Decal")]]'
```