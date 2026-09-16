# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> amazon order
- Location: tests\amazon.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText(/sign in with an otp|login with otp/i)
    - waiting for "https://www.amazon.in/ax/claim?arb=35e4158b-3277-45f2-9ea9-168ee3ff3fc2&openid.assoc_handle=inflex&openid.mode=checkid_setup&policy_handle=Retail-Checkout&openid.return_to=https%3A%2F%2Fwww.amazon.in…" navigation to finish...
    - navigated to "https://www.amazon.in/ax/claim?arb=35e4158b-3277-45f2-9ea9-168ee3ff3fc2&openid.assoc_handle=inflex&openid.mode=checkid_setup&policy_handle=Retail-Checkout&openid.return_to=https%3A%2F%2Fwww.amazon.in…"
    - locator resolved to <span aria-hidden="true" class="a-button-text" id="auth-login-via-otp-btn-announce">Sign in with an OTP</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
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
    4 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> intercepts pointer events
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - link "www.amazon.in" [ref=f4e6] [cursor=pointer]:
    - /url: /ref=ap_frn_logo
    - text: .in
  - generic [ref=f4e12]:
    - heading "Sign in" [level=1] [ref=f4e13]
    - generic [ref=f4e14]:
      - text: "+919361537681"
      - link "Change" [ref=f4e15] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?arb=15e0b9a9-4f10-4d9e-89fb-e1a1b0977389&ref_=ap_pwd_change
    - generic [ref=f4e17]:
      - generic [ref=f4e18]:
        - generic [ref=f4e19]:
          - generic [ref=f4e20]: Password
          - link "Forgot password?" [ref=f4e23] [cursor=pointer]:
            - /url: https://www.amazon.in/ap/forgotpassword?useMobileAsClaim=true&crossDomainRPIDCount=NONE&openid.pape.max_auth_age=0&signInWithMShopWorkflowParameters=259f14d0-e4a3-476c-8121-139052ac2e75&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&signInRedirectToFPPThreshold=5&prepopulatedCustomerId=eyJjaXBoZXIiOiIwUjZudzJtK08wTFBzT3E4ZEZsWUR3PT0iLCJJViI6InpFVmMvK0ozNXh0ckNSZ2ZQL0ZxM3c9PSIsInZlcnNpb24iOjN9&pageId=inflex&useSHuMAWorkflow=false&showSignInWithOTPButton=true&webAuthnChallengeIdForButton=Uq5jjcWGq2sZlta03ffUDFuiMUFQcamF%3AEU&webAuthnGetParametersForButton=eyJycElkIjoiYW1hem9uLmluIiwiY2hhbGxlbmdlIjoiVXE1ampjV0dxMnNabHRhMDNmZlVERnVpTVVGUWNhbUYiLCJ0aW1lb3V0Ijo5MDAwMDAsImFsbG93Q3JlZGVudGlhbHMiOlt7ImlkIjoiUHNXZlZac04zUkswbHFTbmlITGpOdyIsInR5cGUiOiJwdWJsaWMta2V5IiwidHJhbnNwb3J0cyI6WyJpbnRlcm5hbCIsImh5YnJpZCJdfV0sIm1lZGlhdGlvbiI6InJlcXVpcmVkIiwidXNlclZlcmlmaWNhdGlvbiI6InByZWZlcnJlZCJ9&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F_encoding%3DUTF8%26ref_%3Dnav_ya_signin&prevRID=2MTC3357QP9VMMRJBK3G&openid.assoc_handle=inflex&useSignInWithOTP=true&openid.mode=checkid_setup&prepopulatedLoginId=eyJjaXBoZXIiOiJZRUVheEJicm83ZlBnOVZFa0ZxQ3BnPT0iLCJJViI6Inp6ZGE5U21qdi84c0FkTDJKb3RWSlE9PSIsInZlcnNpb24iOjN9&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
        - textbox "Password" [active] [ref=f4e24]
      - generic [ref=f4e27] [cursor=pointer]:
        - button "Sign in" [ref=f4e28]
        - generic [ref=f4e29]: Sign in
    - heading "or" [level=5] [ref=f4e32]
    - button "Sign in with a passkey" [disabled] [ref=f4e38]
    - generic [ref=f4e42] [cursor=pointer]:
      - button "Sign in with Amazon shopping app" [ref=f4e43]
      - generic [ref=f4e44]: Sign in with Amazon shopping app
    - generic [ref=f4e48] [cursor=pointer]:
      - button "Sign in with an OTP" [ref=f4e49]
      - generic [ref=f4e50]: Sign in with an OTP
  - generic [ref=f4e51]:
    - list [ref=f4e55]:
      - listitem [ref=f4e56]:
        - link "Conditions of Use" [ref=f4e57] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940
      - listitem [ref=f4e58]:
        - link "Privacy Notice" [ref=f4e59] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380
      - listitem [ref=f4e60]:
        - link "Help" [ref=f4e61] [cursor=pointer]:
          - /url: /help
    - generic [ref=f4e62]: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { createInterface } from 'node:readline';
  3  | 
  4  | test('amazon order', async ({ page }) => {
  5  |   // Open Amazon and sign in
  6  |   await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });
  7  |   await page.getByRole('link', { name: /hello, sign in/i }).click();
  8  | 
  9  |   // Enter mobile number
  10 |   await page.getByLabel(/mobile number/i).fill('9361537681');
  11 | 
  12 |   // Close passkey popup if available
  13 |   const cancel = page.getByRole('button', { name: /cancel/i });
  14 |   if (await cancel.isVisible({ timeout: 3000 }).catch(() => false))
  15 |     await cancel.click();
  16 | 
  17 |   // Select OTP login
> 18 |   await page.getByText(/sign in with an otp|login with otp/i).click();
     |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 | 
  20 |   // Enter OTP manually in terminal
  21 |   const rl = createInterface({ input: process.stdin, output: process.stdout });
  22 |   const otp = await new Promise(r => rl.question('Enter OTP: ', r));
  23 |   rl.close();
  24 | 
  25 |   // Verify OTP
  26 |   await page.getByLabel(/otp/i).fill(otp);
  27 |   await page.getByRole('button', { name: /verify/i }).click();
  28 | 
  29 |   // Search product
  30 |   await page.getByPlaceholder(/search amazon/i)
  31 |     .fill('bump on board car sign board');
  32 |   await page.keyboard.press('Enter');
  33 | 
  34 |   // Open first result
  35 |   await page.locator('[data-component-type="s-search-result"]').first()
  36 |     .getByRole('link').first().click();
  37 | 
  38 |   // Quantity 1 → Buy Now
  39 |   await page.getByLabel(/quantity/i).selectOption('1');
  40 |   await page.getByRole('button', { name: /buy now/i }).click();
  41 | 
  42 |   // Stop before manual QR payment
  43 |   await page.pause();
  44 | });
```