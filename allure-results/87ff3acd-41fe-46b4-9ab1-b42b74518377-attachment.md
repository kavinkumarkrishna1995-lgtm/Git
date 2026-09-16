# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> Amazon Complete E2E Order
- Location: tests\amazon.spec.js:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//input[@type="submit" and (@id="continue" or @value="Continue")]') resolved to 2 elements:
    1) <input id="continue" type="submit" class="a-button-input" aria-labelledby="auth-signin-via-mshop-btn-announce"/> aka getByRole('button', { name: 'Sign in with Amazon shopping' })
    2) <input tabindex="6" id="continue" type="submit" class="a-button-input" aria-labelledby="auth-login-via-otp-btn-announce"/> aka getByRole('button', { name: 'Sign in with an OTP' })

Call log:
  - waiting for locator('//input[@type="submit" and (@id="continue" or @value="Continue")]')
    - waiting for "https://www.amazon.in/ax/claim?openid.assoc_handle=inflex&arb=f45a1a4a-28d8-482f-882a-dda0105fa2d1&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F…" navigation to finish...
    - navigated to "https://www.amazon.in/ax/claim?openid.assoc_handle=inflex&arb=f45a1a4a-28d8-482f-882a-dda0105fa2d1&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F…"

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - link "www.amazon.in" [ref=f3e6] [cursor=pointer]:
    - /url: /ref=ap_frn_logo
    - text: .in
  - generic [ref=f3e12]:
    - heading "Sign in" [level=1] [ref=f3e13]
    - generic [ref=f3e14]:
      - text: "+919361537681"
      - link "Change" [ref=f3e15] [cursor=pointer]:
        - /url: https://www.amazon.in/ap/signin?arb=b8f3e292-bc0b-446b-805b-a86c576b231a&ref_=ap_pwd_change
    - generic [ref=f3e17]:
      - generic [ref=f3e18]:
        - generic [ref=f3e19]:
          - generic [ref=f3e20]: Password
          - link "Forgot password?" [ref=f3e23] [cursor=pointer]:
            - /url: https://www.amazon.in/ap/forgotpassword?useMobileAsClaim=true&crossDomainRPIDCount=NONE&openid.pape.max_auth_age=0&signInWithMShopWorkflowParameters=2d0688ec-1ad5-49d2-aae3-c8d9a4127ac9&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&signInRedirectToFPPThreshold=5&prepopulatedCustomerId=eyJjaXBoZXIiOiJEbzU4aEhuRFIxaVVuT2VTRWEvUFlRPT0iLCJJViI6Ild6eGZxZjMvS3VwQW5GYVdWcE1zQ3c9PSIsInZlcnNpb24iOjN9&pageId=inflex&useSHuMAWorkflow=false&showSignInWithOTPButton=true&webAuthnChallengeIdForButton=VVhOJq6SYq3dUyvawRip7Z9wFhkM95G_%3AEU&webAuthnGetParametersForButton=eyJycElkIjoiYW1hem9uLmluIiwiY2hhbGxlbmdlIjoiVlZoT0pxNlNZcTNkVXl2YXdSaXA3Wjl3RmhrTTk1R18iLCJ0aW1lb3V0Ijo5MDAwMDAsImFsbG93Q3JlZGVudGlhbHMiOlt7ImlkIjoiUHNXZlZac04zUkswbHFTbmlITGpOdyIsInR5cGUiOiJwdWJsaWMta2V5IiwidHJhbnNwb3J0cyI6WyJpbnRlcm5hbCIsImh5YnJpZCJdfV0sIm1lZGlhdGlvbiI6InJlcXVpcmVkIiwidXNlclZlcmlmaWNhdGlvbiI6InByZWZlcnJlZCJ9&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F_encoding%3DUTF8%26ref_%3Dnav_ya_signin&prevRID=6XDVGTF61E8R5YDVZK04&openid.assoc_handle=inflex&useSignInWithOTP=true&openid.mode=checkid_setup&prepopulatedLoginId=eyJjaXBoZXIiOiJyNU9Ud0swME9TQzRCNzJ1T1VqSjVnPT0iLCJJViI6Im1DU1Q1emNiV3FaRjJGYXF5cGc4VXc9PSIsInZlcnNpb24iOjN9&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
        - textbox "Password" [active] [ref=f3e24]
      - generic [ref=f3e27] [cursor=pointer]:
        - button "Sign in" [ref=f3e28]
        - generic [ref=f3e29]: Sign in
    - heading "or" [level=5] [ref=f3e32]
    - button "Sign in with a passkey" [disabled] [ref=f3e38]
    - generic [ref=f3e42] [cursor=pointer]:
      - button "Sign in with Amazon shopping app" [ref=f3e43]
      - generic [ref=f3e44]: Sign in with Amazon shopping app
    - generic [ref=f3e48] [cursor=pointer]:
      - button "Sign in with an OTP" [ref=f3e49]
      - generic [ref=f3e50]: Sign in with an OTP
  - generic [ref=f3e51]:
    - list [ref=f3e55]:
      - listitem [ref=f3e56]:
        - link "Conditions of Use" [ref=f3e57] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940
      - listitem [ref=f3e58]:
        - link "Privacy Notice" [ref=f3e59] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380
      - listitem [ref=f3e60]:
        - link "Help" [ref=f3e61] [cursor=pointer]:
          - /url: /help
    - generic [ref=f3e62]: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Amazon Complete E2E Order', async ({ page }) => {
  4   | 
  5   |   // =========================================================
  6   |   // 1. OPEN AMAZON
  7   |   // =========================================================
  8   | 
  9   |   await page.goto('https://www.amazon.in/', {
  10  |     waitUntil: 'domcontentloaded'
  11  |   });
  12  | 
  13  | 
  14  |   // =========================================================
  15  |   // 2. CLICK HELLO, SIGN IN
  16  |   // =========================================================
  17  | 
  18  |   await page.locator(
  19  |     '//a[contains(translate(normalize-space(.),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"hello, sign in")]'
  20  |   ).click();
  21  | 
  22  | 
  23  |   // =========================================================
  24  |   // 3. ENTER MOBILE NUMBER
  25  |   // =========================================================
  26  | 
  27  |   await page.locator(
  28  |     '//input[@name="email" or @id="ap_email"]'
  29  |   ).fill('9361537681');
  30  | 
  31  | 
  32  |   // =========================================================
  33  |   // 4. CLICK CONTINUE
  34  |   // =========================================================
  35  | 
  36  |   await page.locator(
  37  |     '//input[@type="submit" and (@id="continue" or @value="Continue")]'
> 38  |   ).click();
      |     ^ Error: locator.click: Error: strict mode violation: locator('//input[@type="submit" and (@id="continue" or @value="Continue")]') resolved to 2 elements:
  39  | 
  40  | 
  41  |   // =========================================================
  42  |   // 5. CLICK SIGN IN WITH OTP
  43  |   // =========================================================
  44  | 
  45  |   await page.locator(
  46  |     '//input[@id="continue" and contains(@aria-labelledby,"auth-login-via-otp-btn-announce")]'
  47  |   ).click();
  48  | 
  49  | 
  50  |   // =========================================================
  51  |   // 6. MANUAL OTP + VERIFY
  52  |   //
  53  |   // OTP will be received on your mobile.
  54  |   //
  55  |   // YOU WILL:
  56  |   //   1. Enter OTP manually
  57  |   //   2. Click Verify manually
  58  |   //
  59  |   // After successful login, click RESUME.
  60  |   // =========================================================
  61  | 
  62  |   await page.pause();
  63  | 
  64  | 
  65  |   // =========================================================
  66  |   // 7. WAIT FOR AMAZON SEARCH BAR
  67  |   // =========================================================
  68  | 
  69  |   const searchBox = page.locator(
  70  |     '//input[@id="twotabsearchtextbox" or @name="field-keywords"]'
  71  |   );
  72  | 
  73  |   await searchBox.waitFor({
  74  |     state: 'visible',
  75  |     timeout: 30000
  76  |   });
  77  | 
  78  | 
  79  |   // =========================================================
  80  |   // 8. SEARCH BUMP ON BOARD STICKER
  81  |   // =========================================================
  82  | 
  83  |   await searchBox.fill('bumpon board sticker');
  84  | 
  85  |   await searchBox.press('Enter');
  86  | 
  87  | 
  88  |   // =========================================================
  89  |   // 9. WAIT FOR SEARCH RESULTS
  90  |   // =========================================================
  91  | 
  92  |   const searchResults = page.locator(
  93  |     '//div[@data-component-type="s-search-result"]'
  94  |   );
  95  | 
  96  |   await searchResults.first().waitFor({
  97  |     state: 'visible',
  98  |     timeout: 30000
  99  |   });
  100 | 
  101 | 
  102 |   // =========================================================
  103 |   // 10. LOCATE EXACT BUMP ON BOARD PRODUCT
  104 |   // =========================================================
  105 | 
  106 |   const targetProduct = page.locator(
  107 |     '//div[@data-component-type="s-search-result"][.//img[contains(@alt,"Bump on Board car Hanging") and contains(@alt,"Sleeping Child/Baby Vehicle Decal")]]'
  108 |   ).first();
  109 | 
  110 |   await targetProduct.waitFor({
  111 |     state: 'visible',
  112 |     timeout: 30000
  113 |   });
  114 | 
  115 | 
  116 |   // =========================================================
  117 |   // 11. SELECT EXACT PRODUCT
  118 |   // =========================================================
  119 | 
  120 |   await targetProduct.locator(
  121 |     './/a[.//img[contains(@alt,"Bump on Board car Hanging")]]'
  122 |   ).first().click();
  123 | 
  124 | 
  125 |   // =========================================================
  126 |   // 12. WAIT FOR PRODUCT PAGE
  127 |   // =========================================================
  128 | 
  129 |   await page.waitForLoadState('domcontentloaded');
  130 | 
  131 |   await page.waitForTimeout(2000);
  132 | 
  133 | 
  134 |   // =========================================================
  135 |   // 13. CLICK BUY NOW
  136 |   // =========================================================
  137 | 
  138 |   const buyNow = page.locator(
```