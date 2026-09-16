# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> amazon order
- Location: tests\amazon.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('input#continue') resolved to 2 elements:
    1) <input id="continue" type="submit" class="a-button-input" aria-labelledby="auth-signin-via-mshop-btn-announce"/> aka getByRole('button', { name: 'Sign in with Amazon shopping' })
    2) <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> aka getByRole('button', { name: 'Sign in with an OTP' })

Call log:
  - waiting for locator('input#continue')

```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - link "www.amazon.in" [ref=f5e6] [cursor=pointer]:
    - /url: /ref=ap_frn_logo
    - text: .in
  - generic [ref=f5e12]:
    - heading "Sign in" [level=1] [ref=f5e13]
    - generic [ref=f5e14]:
      - text: "+919361537681"
      - link "Change" [ref=f5e15] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?arb=25895676-3477-4114-9ce8-1c2ebe31f751&ref_=ap_pwd_change
    - generic [ref=f5e17]:
      - generic [ref=f5e18]:
        - generic [ref=f5e19]:
          - generic [ref=f5e20]: Password
          - link "Forgot password?" [ref=f5e23] [cursor=pointer]:
            - /url: https://www.amazon.in/ap/forgotpassword?useMobileAsClaim=true&crossDomainRPIDCount=NONE&openid.pape.max_auth_age=0&signInWithMShopWorkflowParameters=8bc92e61-2539-4f20-a1e4-a986db6f58cd&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&signInRedirectToFPPThreshold=5&prepopulatedCustomerId=eyJjaXBoZXIiOiJQTlUvZEVHYlVqa2xPbGpVaGZrVnZBPT0iLCJJViI6IisvVGZHaGlhVU5hNXZhMy9SN2F2Umc9PSIsInZlcnNpb24iOjN9&pageId=inflex&useSHuMAWorkflow=false&showSignInWithOTPButton=true&webAuthnChallengeIdForButton=CoBHfuY7DNtkeFfwR7XjOvjjFaGQjqXF%3AEU&webAuthnGetParametersForButton=eyJycElkIjoiYW1hem9uLmluIiwiY2hhbGxlbmdlIjoiQ29CSGZ1WTdETnRrZUZmd1I3WGpPdmpqRmFHUWpxWEYiLCJ0aW1lb3V0Ijo5MDAwMDAsImFsbG93Q3JlZGVudGlhbHMiOlt7ImlkIjoiUHNXZlZac04zUkswbHFTbmlITGpOdyIsInR5cGUiOiJwdWJsaWMta2V5IiwidHJhbnNwb3J0cyI6WyJpbnRlcm5hbCIsImh5YnJpZCJdfV0sIm1lZGlhdGlvbiI6InJlcXVpcmVkIiwidXNlclZlcmlmaWNhdGlvbiI6InByZWZlcnJlZCJ9&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&prevRID=QHJG1DDSJ4T8D36AWXD0&openid.assoc_handle=inflex&useSignInWithOTP=true&openid.mode=checkid_setup&prepopulatedLoginId=eyJjaXBoZXIiOiJQRHFzN25ZaWpkUXRIWDJOUE1EYzd3PT0iLCJJViI6IkFRZGJKT1NuV1NVRWJYZUd0dURRTUE9PSIsInZlcnNpb24iOjN9&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
        - textbox "Password" [active] [ref=f5e24]
      - generic [ref=f5e27] [cursor=pointer]:
        - button "Sign in" [ref=f5e28]
        - generic [ref=f5e29]: Sign in
    - heading "or" [level=5] [ref=f5e32]
    - button "Sign in with a passkey" [disabled] [ref=f5e38]
    - generic [ref=f5e42] [cursor=pointer]:
      - button "Sign in with Amazon shopping app" [ref=f5e43]
      - generic [ref=f5e44]: Sign in with Amazon shopping app
    - generic [ref=f5e48] [cursor=pointer]:
      - button "Sign in with an OTP" [ref=f5e49]
      - generic [ref=f5e50]: Sign in with an OTP
  - generic [ref=f5e51]:
    - list [ref=f5e55]:
      - listitem [ref=f5e56]:
        - link "Conditions of Use" [ref=f5e57] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940
      - listitem [ref=f5e58]:
        - link "Privacy Notice" [ref=f5e59] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380
      - listitem [ref=f5e60]:
        - link "Help" [ref=f5e61] [cursor=pointer]:
          - /url: /help
    - generic [ref=f5e62]: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('amazon order', async ({ page }) => {
  4  | 
  5  |   // Open Amazon and sign in
  6  |   await page.goto('https://www.amazon.in/', {
  7  |     waitUntil: 'domcontentloaded'
  8  |   });
  9  | 
  10 |   await page.getByRole('link', { name: /hello, sign in/i }).click();
  11 | 
  12 |   // Enter mobile number and continue
  13 |   await page.getByLabel(/mobile number/i).fill('9361537681');
  14 | 
  15 |   await page.getByRole('button', { name: /continue/i }).click();
  16 | 
  17 |   // Manually cancel the native passkey popup
  18 |   await page.waitForTimeout(2000);
  19 | 
  20 |   // Select "Sign in with OTP"
  21 |   // The text span is intercepted by the actual input element
> 22 |   await page.locator('input#continue').click({ force: true });
     |                                        ^ Error: locator.click: Error: strict mode violation: locator('input#continue') resolved to 2 elements:
  23 | 
  24 |   // Wait for OTP field
  25 |   await page.waitForTimeout(1000);
  26 | 
  27 |   // Enter OTP manually in the Amazon page
  28 |   await page.pause();
  29 | 
  30 |   // Verify OTP automatically
  31 |   await page.getByRole('button', { name: /verify/i }).click();
  32 | 
  33 |   // Search and open first product
  34 |   await page.getByPlaceholder(/search amazon/i)
  35 |     .fill('bumpon board car sign board');
  36 | 
  37 |   await page.keyboard.press('Enter');
  38 | 
  39 |   await page.locator('[data-component-type="s-search-result"]')
  40 |     .first()
  41 |     .getByRole('link')
  42 |     .first()
  43 |     .click();
  44 | 
  45 |   // Select quantity 1 and Buy Now
  46 |   await page.getByLabel(/quantity/i).selectOption('1');
  47 | 
  48 |   await page.getByRole('button', { name: /buy now/i }).click();
  49 | 
  50 |   // Stop before manual QR payment
  51 |   await page.pause();
  52 | });
```