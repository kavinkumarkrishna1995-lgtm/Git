# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> Amazon E2E - Bump on Board Product
- Location: tests\amazon.spec.js:3:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id="continue" and @type="submit" and not(contains(@aria-labelledby,"auth-login-via-otp-btn-announce"))]').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=f4e4]:
  - link [ref=f4e7] [cursor=pointer]:
    - /url: /ref=ap_frn_logo
    - img "Amazon" [ref=f4e8]
  - main [ref=f4e10]:
    - generic [ref=f4e17]:
      - heading "Sign in or create account" [level=1] [ref=f4e18]
      - paragraph [ref=f4e19]: Enter mobile number or email
      - generic [ref=f4e21]:
        - generic [ref=f4e22]:
          - generic [ref=f4e23]:
            - combobox [ref=f4e24]:
              - option "AF +93"
              - option "AL +355"
              - option "DZ +213"
              - option "AS +1"
              - option "AD +376"
              - option "AO +244"
              - option "AI +1"
              - option "AQ +0"
              - option "AG +1"
              - option "AR +54"
              - option "AM +374"
              - option "AW +297"
              - option "AC +247"
              - option "AU +61"
              - option "AT +43"
              - option "AZ +994"
              - option "BS +1"
              - option "BH +973"
              - option "BD +880"
              - option "BB +1"
              - option "BY +375"
              - option "BE +32"
              - option "BZ +501"
              - option "BJ +229"
              - option "BM +1"
              - option "BT +975"
              - option "BO +591"
              - option "BA +387"
              - option "BW +267"
              - option "BV +0"
              - option "BR +55"
              - option "IO +246"
              - option "VG +1"
              - option "BN +673"
              - option "BG +359"
              - option "BF +226"
              - option "BI +257"
              - option "KH +855"
              - option "CM +237"
              - option "CA +1"
              - option "IC +0"
              - option "CV +238"
              - option "BQ +599"
              - option "KY +1"
              - option "CF +236"
              - option "EA +0"
              - option "TD +235"
              - option "CL +56"
              - option "CN +86"
              - option "CX +61"
              - option "CP +0"
              - option "CC +61"
              - option "CO +57"
              - option "KM +269"
              - option "CG +242"
              - option "CD +243"
              - option "CK +682"
              - option "CR +506"
              - option "HR +385"
              - option "CU +53"
              - option "CW +599"
              - option "CY +357"
              - option "CZ +420"
              - option "CI +225"
              - option "DK +45"
              - option "DG +0"
              - option "DJ +253"
              - option "DM +1"
              - option "DO +1"
              - option "EC +593"
              - option "EG +20"
              - option "SV +503"
              - option "GQ +240"
              - option "ER +291"
              - option "EE +372"
              - option "SZ +268"
              - option "ET +251"
              - option "FK +500"
              - option "FO +298"
              - option "FJ +679"
              - option "FI +358"
              - option "FR +33"
              - option "GF +594"
              - option "PF +689"
              - option "TF +0"
              - option "GA +241"
              - option "GM +220"
              - option "GE +995"
              - option "DE +49"
              - option "GH +233"
              - option "GI +350"
              - option "GR +30"
              - option "GL +299"
              - option "GD +1"
              - option "GP +590"
              - option "GU +1"
              - option "GT +502"
              - option "GG +44"
              - option "GN +224"
              - option "GW +245"
              - option "GY +592"
              - option "HT +509"
              - option "HM +0"
              - option "HN +504"
              - option "HK +852"
              - option "HU +36"
              - option "IS +354"
              - option "IN +91" [selected]
              - option "ID +62"
              - option "IR +98"
              - option "IQ +964"
              - option "IE +353"
              - option "IM +44"
              - option "IL +972"
              - option "IT +39"
              - option "JM +1"
              - option "JP +81"
              - option "JE +44"
              - option "JO +962"
              - option "KZ +7"
              - option "KE +254"
              - option "KI +686"
              - option "XK +383"
              - option "KW +965"
              - option "KG +996"
              - option "LA +856"
              - option "LV +371"
              - option "LB +961"
              - option "LS +266"
              - option "LR +231"
              - option "LY +218"
              - option "LI +423"
              - option "LT +370"
              - option "LU +352"
              - option "MO +853"
              - option "MG +261"
              - option "MW +265"
              - option "MY +60"
              - option "MV +960"
              - option "ML +223"
              - option "MT +356"
              - option "MH +692"
              - option "MQ +596"
              - option "MR +222"
              - option "MU +230"
              - option "YT +262"
              - option "MX +52"
              - option "FM +691"
              - option "MD +373"
              - option "MC +377"
              - option "MN +976"
              - option "ME +382"
              - option "MS +1"
              - option "MA +212"
              - option "MZ +258"
              - option "MM +95"
              - option "NA +264"
              - option "NR +674"
              - option "NP +977"
              - option "NL +31"
              - option "NC +687"
              - option "NZ +64"
              - option "NI +505"
              - option "NE +227"
              - option "NG +234"
              - option "NU +683"
              - option "NF +672"
              - option "KP +850"
              - option "MK +389"
              - option "MP +1"
              - option "NO +47"
              - option "OM +968"
              - option "PK +92"
              - option "PW +680"
              - option "PS +970"
              - option "PA +507"
              - option "PG +675"
              - option "PY +595"
              - option "PE +51"
              - option "PH +63"
              - option "PN +0"
              - option "PL +48"
              - option "PT +351"
              - option "PR +1"
              - option "QA +974"
              - option "RO +40"
              - option "RU +7"
              - option "RW +250"
              - option "RE +262"
              - option "WS +685"
              - option "SM +378"
              - option "CQ +0"
              - option "SA +966"
              - option "SN +221"
              - option "RS +381"
              - option "SC +248"
              - option "SL +232"
              - option "SG +65"
              - option "SX +1"
              - option "SK +421"
              - option "SI +386"
              - option "SB +677"
              - option "SO +252"
              - option "ZA +27"
              - option "GS +0"
              - option "KR +82"
              - option "SS +211"
              - option "ES +34"
              - option "LK +94"
              - option "BL +590"
              - option "SH +290"
              - option "KN +1"
              - option "LC +1"
              - option "MF +590"
              - option "PM +508"
              - option "VC +1"
              - option "SD +249"
              - option "SR +597"
              - option "SJ +47"
              - option "SE +46"
              - option "CH +41"
              - option "SY +963"
              - option "ST +239"
              - option "TW +886"
              - option "TJ +992"
              - option "TZ +255"
              - option "TH +66"
              - option "TL +670"
              - option "TG +228"
              - option "TK +690"
              - option "TO +676"
              - option "TT +1"
              - option "TA +290"
              - option "TN +216"
              - option "TM +993"
              - option "TC +1"
              - option "TV +688"
              - option "TR +90"
              - option "UM +0"
              - option "VI +1"
              - option "UG +256"
              - option "UA +380"
              - option "AE +971"
              - option "GB +44"
              - option "US +1"
              - option "UY +598"
              - option "UZ +998"
              - option "VU +678"
              - option "VA +39"
              - option "VE +58"
              - option "VN +84"
              - option "WF +681"
              - option "EH +212"
              - option "YE +967"
              - option "ZM +260"
              - option "ZW +263"
              - option "AX +358"
            - generic [ref=f4e25] [cursor=pointer]: IN +91
          - textbox "Enter mobile number or email" [active] [ref=f4e29]: "9361537681"
          - button [ref=f4e30] [cursor=pointer]
        - generic [ref=f4e32] [cursor=pointer]:
          - button "Continue" [ref=f4e33]
          - generic [ref=f4e34]: Continue
      - paragraph [ref=f4e35]:
        - text: By continuing, you agree to Amazon's
        - link "Conditions of Use" [ref=f4e36] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940
        - text: and
        - link "Privacy Notice" [ref=f4e37] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380
        - text: .
      - generic [ref=f4e38]:
        - separator [ref=f4e39]
        - generic [ref=f4e40]: Buying for work?
        - link "Create a free business account" [ref=f4e41] [cursor=pointer]:
          - /url: /business/register/org/landing?ref_=ab_reg_signin_unifiedauth
  - generic [ref=f4e43]:
    - generic [ref=f4e46]:
      - link "Conditions of Use" [ref=f4e47] [cursor=pointer]:
        - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_cou?nodeId=200545940
      - link "Privacy Notice" [ref=f4e48] [cursor=pointer]:
        - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?nodeId=200534380
      - link "Help" [ref=f4e49] [cursor=pointer]:
        - /url: /help
    - generic [ref=f4e50]: © 1996–2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  5   |   // ============================================================
  6   |   // CONFIGURATION
  7   |   // ============================================================
  8   | 
  9   |   const MOBILE_NUMBER = '9361537681';
  10  |   const ADDITIONAL_NUMBER = '6369080851';
  11  | 
  12  |   const ADDRESS_LINE_1 =
  13  |     'Plot no. 6, Ashwin homes, Raghavendra Avenue';
  14  | 
  15  |   const ADDRESS_LINE_2 =
  16  |     'Goodwill nagar, 4th street main road';
  17  | 
  18  |   const LANDMARK = 'Old Perungalathur';
  19  |   const CITY = 'Chennai';
  20  |   const STATE = 'Tamil Nadu';
  21  |   const PINCODE = '600063';
  22  | 
  23  |   const PRODUCT_NAME = 'Bump on Board car Hanging';
  24  |   const PRODUCT_DESCRIPTION = 'Sleeping Child/Baby Vehicle Decal';
  25  | 
  26  | 
  27  |   // ============================================================
  28  |   // 1. OPEN AMAZON
  29  |   // ============================================================
  30  | 
  31  |   await page.goto('https://www.amazon.in/', {
  32  |     waitUntil: 'domcontentloaded',
  33  |     timeout: 60000
  34  |   });
  35  | 
  36  |   console.log('Amazon opened');
  37  | 
  38  | 
  39  |   // ============================================================
  40  |   // 2. CLICK HELLO, SIGN IN
  41  |   // ============================================================
  42  | 
  43  |   const helloSignIn = page.locator(
  44  |     '//a[contains(translate(normalize-space(.),'
  45  |     + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
  46  |     + '"abcdefghijklmnopqrstuvwxyz"),'
  47  |     + '"hello, sign in")]'
  48  |   ).first();
  49  | 
  50  |   await helloSignIn.waitFor({
  51  |     state: 'visible',
  52  |     timeout: 30000
  53  |   });
  54  | 
  55  |   await helloSignIn.click();
  56  | 
  57  |   console.log('Sign-in page opened');
  58  | 
  59  | 
  60  |   // ============================================================
  61  |   // 3. ENTER MOBILE NUMBER
  62  |   // ============================================================
  63  | 
  64  |   const mobileInput = page.locator(
  65  |     '//input[@id="ap_email" or @name="email"]'
  66  |   ).first();
  67  | 
  68  |   await mobileInput.waitFor({
  69  |     state: 'visible',
  70  |     timeout: 30000
  71  |   });
  72  | 
  73  |   await mobileInput.fill(MOBILE_NUMBER);
  74  | 
  75  |   console.log('Mobile number entered');
  76  | 
  77  | 
  78  |   // ============================================================
  79  |   // 4. CLICK CORRECT CONTINUE BUTTON
  80  |   //
  81  |   // DO NOT USE:
  82  |   //
  83  |   // //input[@id="continue"]
  84  |   //
  85  |   // Amazon can have multiple elements with this ID.
  86  |   // ============================================================
  87  | 
  88  |   let continueButton = page.locator(
  89  |     '//input[@id="continue" and '
  90  |     + 'contains(@aria-labelledby,"auth-signin-via-mshop-btn-announce")]'
  91  |   ).first();
  92  | 
  93  | 
  94  |   // Fallback if Amazon changes the aria-labelledby
  95  |   if (!(await continueButton.isVisible().catch(() => false))) {
  96  | 
  97  |     continueButton = page.locator(
  98  |       '//input[@id="continue" and '
  99  |       + '@type="submit" and '
  100 |       + 'not(contains(@aria-labelledby,"auth-login-via-otp-btn-announce"))]'
  101 |     ).first();
  102 |   }
  103 | 
  104 | 
> 105 |   await continueButton.waitFor({
      |                        ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  106 |     state: 'visible',
  107 |     timeout: 30000
  108 |   });
  109 | 
  110 |   await continueButton.click();
  111 | 
  112 |   console.log('Correct Continue button clicked');
  113 | 
  114 | 
  115 |   // ============================================================
  116 |   // 5. WAIT FOR OTP OPTION
  117 |   // ============================================================
  118 | 
  119 |   const otpOption = page.locator(
  120 |     '//input[@id="continue" and '
  121 |     + 'contains(@aria-labelledby,"auth-login-via-otp-btn-announce")]'
  122 |   ).first();
  123 | 
  124 | 
  125 |   // Fallback using visible text/label
  126 |   if (!(await otpOption.isVisible().catch(() => false))) {
  127 | 
  128 |     const otpText = page.locator(
  129 |       '//*[contains(translate(normalize-space(.),'
  130 |       + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
  131 |       + '"abcdefghijklmnopqrstuvwxyz"),'
  132 |       + '"sign in with an otp")]'
  133 |     ).first();
  134 | 
  135 |     await otpText.waitFor({
  136 |       state: 'visible',
  137 |       timeout: 30000
  138 |     });
  139 | 
  140 |     await otpText.click();
  141 | 
  142 |   } else {
  143 | 
  144 |     await otpOption.click();
  145 |   }
  146 | 
  147 |   console.log('OTP login option selected');
  148 | 
  149 | 
  150 |   // ============================================================
  151 |   // 6. MANUAL OTP + VERIFY
  152 |   //
  153 |   // YOU MUST:
  154 |   //
  155 |   // 1. Enter OTP manually
  156 |   // 2. Click Verify manually
  157 |   // 3. Complete Amazon login
  158 |   // 4. Click RESUME in Playwright Inspector
  159 |   //
  160 |   // OTP IS NOT AUTOMATED.
  161 |   // ============================================================
  162 | 
  163 |   console.log('');
  164 |   console.log('==============================================');
  165 |   console.log(' MANUAL ACTION REQUIRED');
  166 |   console.log(' Enter OTP and click Verify manually.');
  167 |   console.log(' After login succeeds, click RESUME.');
  168 |   console.log('==============================================');
  169 |   console.log('');
  170 | 
  171 |   await page.pause();
  172 | 
  173 | 
  174 |   // ============================================================
  175 |   // 7. WAIT FOR AMAZON SEARCH BAR
  176 |   //
  177 |   // Do not assume login navigation timing.
  178 |   // Wait for the actual search bar.
  179 |   // ============================================================
  180 | 
  181 |   const searchBox = page.locator(
  182 |     '//input[@id="twotabsearchtextbox" or @name="field-keywords"]'
  183 |   ).first();
  184 | 
  185 |   await searchBox.waitFor({
  186 |     state: 'visible',
  187 |     timeout: 60000
  188 |   });
  189 | 
  190 |   console.log('Login successful');
  191 |   console.log('Search bar found');
  192 | 
  193 | 
  194 |   // ============================================================
  195 |   // 8. SEARCH FOR PRODUCT
  196 |   // ============================================================
  197 | 
  198 |   await searchBox.fill('bumpon board sticker');
  199 | 
  200 |   await searchBox.press('Enter');
  201 | 
  202 |   console.log('Product search submitted');
  203 | 
  204 | 
  205 |   // ============================================================
```