import { test } from '@playwright/test';

test('Amazon E2E - Bump on Board Product', async ({ page }) => {

  // ============================================================
  // CONFIGURATION
  // ============================================================

  const MOBILE_NUMBER = '9361537681';
  const ADDITIONAL_NUMBER = '6369080851';

  const ADDRESS_LINE_1 =
    'Plot no. 6, Ashwin homes, Raghavendra Avenue';

  const ADDRESS_LINE_2 =
    'Goodwill nagar, 4th street main road';

  const LANDMARK = 'Old Perungalathur';
  const CITY = 'Chennai';
  const STATE = 'Tamil Nadu';
  const PINCODE = '600063';


  // ============================================================
  // 1. OPEN AMAZON
  // ============================================================

  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  console.log('Amazon opened');


  // ============================================================
  // 2. CLICK HELLO, SIGN IN
  // ============================================================

  const helloSignIn = page.locator(
    '//a[contains(translate(normalize-space(.),'
    + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
    + '"abcdefghijklmnopqrstuvwxyz"),'
    + '"hello, sign in")]'
  ).first();

  await helloSignIn.waitFor({
    state: 'visible',
    timeout: 30000
  });

  await helloSignIn.click();

  console.log('Sign-in page opened');


  // ============================================================
  // 3. ENTER MOBILE NUMBER
  // ============================================================

  const mobileInput = page.locator(
    '//input[@id="ap_email" or @name="email"]'
  ).first();

  await mobileInput.waitFor({
    state: 'visible',
    timeout: 30000
  });

  await mobileInput.fill(MOBILE_NUMBER);

  console.log('Mobile number entered');


  // ============================================================
  // 4. CLICK CORRECT CONTINUE BUTTON
  //
  // IMPORTANT:
  // Amazon has multiple elements with id="continue".
  //
  // Based on the actual Playwright error from your page,
  // the first button is:
  //
  // "Sign in with Amazon shopping"
  //
  // The second one is:
  //
  // "Sign in with an OTP"
  // ============================================================

  let continueButton = page.getByRole('button', {
    name: 'Sign in with Amazon shopping'
  }).first();

  let continueFound = await continueButton
    .isVisible()
    .catch(() => false);


  // ------------------------------------------------------------
  // FALLBACK 1
  // ------------------------------------------------------------

  if (!continueFound) {

    continueButton = page.locator(
      '//input[@id="continue" and @type="submit"]'
    ).first();

    continueFound = await continueButton
      .isVisible()
      .catch(() => false);
  }


  // ------------------------------------------------------------
  // FALLBACK 2
  // ------------------------------------------------------------

  if (!continueFound) {

    continueButton = page.locator(
      '//input[@id="continue"]'
    ).first();

    continueFound = await continueButton
      .isVisible()
      .catch(() => false);
  }


  if (!continueFound) {

    console.log('');
    console.log('==============================================');
    console.log('CONTINUE BUTTON NOT FOUND');
    console.log('Current URL:', page.url());
    console.log('==============================================');
    console.log('');

    throw new Error(
      'Amazon Continue button could not be located.'
    );
  }


  await continueButton.click({
    timeout: 30000
  });

  console.log('Continue button clicked');


  // ============================================================
  // 5. WAIT FOR OTP OPTION
  // ============================================================

  const otpButton = page.getByRole('button', {
    name: 'Sign in with an OTP'
  }).first();

  const otpInput = page.locator(
    '//input[@id="continue" and '
    + 'contains(@aria-labelledby,"auth-login-via-otp-btn-announce")]'
  ).first();


  // ------------------------------------------------------------
  // TRY ACCESSIBLE ROLE FIRST
  // ------------------------------------------------------------

  if (await otpButton.isVisible().catch(() => false)) {

    await otpButton.click();

    console.log('Sign in with an OTP selected');

  }

  // ------------------------------------------------------------
  // FALLBACK TO INPUT
  // ------------------------------------------------------------

  else if (await otpInput.isVisible().catch(() => false)) {

    await otpInput.click();

    console.log('Sign in with an OTP selected');

  }

  // ------------------------------------------------------------
  // FALLBACK USING TEXT
  // ------------------------------------------------------------

  else {

    const otpText = page.locator(
      '//*[contains(translate(normalize-space(.),'
      + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
      + '"abcdefghijklmnopqrstuvwxyz"),'
      + '"sign in with an otp")]'
    ).first();

    await otpText.waitFor({
      state: 'visible',
      timeout: 30000
    });

    await otpText.click();

    console.log('Sign in with an OTP selected');
  }


  // ============================================================
  // 6. MANUAL OTP + VERIFY
  //
  // YOU WILL:
  //
  // 1. Receive OTP
  // 2. Enter OTP manually
  // 3. Click Verify manually
  // 4. Login successfully
  // 5. Click RESUME in Playwright Inspector
  // ============================================================

  console.log('');
  console.log('==============================================');
  console.log('        MANUAL OTP ACTION REQUIRED');
  console.log('');
  console.log('Enter the OTP manually.');
  console.log('Click Verify manually.');
  console.log('Complete the Amazon login.');
  console.log('Then click RESUME in Playwright Inspector.');
  console.log('==============================================');
  console.log('');

  await page.pause();


  // ============================================================
  // 7. WAIT FOR SEARCH BAR AFTER LOGIN
  // ============================================================

  const searchBox = page.locator(
    '//input[@id="twotabsearchtextbox" or @name="field-keywords"]'
  ).first();

  await searchBox.waitFor({
    state: 'visible',
    timeout: 60000
  });

  console.log('Login successful');
  console.log('Search bar located');


  // ============================================================
  // 8. SEARCH PRODUCT
  // ============================================================

  await searchBox.fill('bumpon board sticker');

  await searchBox.press('Enter');

  console.log('Search submitted');


  // ============================================================
  // 9. WAIT FOR SEARCH RESULTS
  // ============================================================

  await page.locator(
    '//div[@data-component-type="s-search-result"]'
  ).first().waitFor({
    state: 'visible',
    timeout: 60000
  });

  console.log('Search results loaded');


  // ============================================================
  // 10. FIND EXACT BUMP ON BOARD PRODUCT
  //
  // TARGET PRODUCT:
  //
  // Bump on Board car Hanging |
  // Sleeping Child/Baby Vehicle Decal,
  // Window Hanging Safety Sign for...
  //
  // We DON'T select the first result.
  // ============================================================

  let exactProduct = page.locator(
    '//div[@data-component-type="s-search-result"]'
    + '[.//img[contains(@alt,"Bump on Board car Hanging")'
    + ' and contains(@alt,"Sleeping Child/Baby Vehicle Decal")]]'
  ).first();


  // ============================================================
  // FALLBACK PRODUCT SEARCH BY TEXT
  // ============================================================

  if (!(await exactProduct.isVisible().catch(() => false))) {

    exactProduct = page.locator(
      '//div[@data-component-type="s-search-result"]'
      + '[.//h2[contains(translate(normalize-space(.),'
      + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
      + '"abcdefghijklmnopqrstuvwxyz"),'
      + '"bump on board")]]'
    ).first();
  }


  await exactProduct.waitFor({
    state: 'visible',
    timeout: 60000
  });

  console.log('Exact Bump on Board product found');


  // ============================================================
  // 11. OPEN PRODUCT
  // ============================================================

  const productLink = exactProduct.locator(
    './/h2//a'
  ).first();

  await productLink.waitFor({
    state: 'visible',
    timeout: 30000
  });

  await productLink.click();

  console.log('Product page opened');


  // ============================================================
  // 12. WAIT FOR PRODUCT PAGE
  // ============================================================

  await page.waitForLoadState('domcontentloaded');

  await page.waitForTimeout(2000);


  // ============================================================
  // 13. CLICK BUY NOW
  // ============================================================

  const buyNow = page.locator(
    '//input[@id="buy-now-button"]'
    + ' | '
    + '//input[@name="submit.buy-now"]'
    + ' | '
    + '//button[contains(translate(normalize-space(.),'
    + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
    + '"abcdefghijklmnopqrstuvwxyz"),"buy now")]'
  ).first();

  await buyNow.waitFor({
    state: 'visible',
    timeout: 60000
  });

  await buyNow.click();

  console.log('Buy Now clicked');


  // ============================================================
  // 14. WAIT FOR CHECKOUT
  // ============================================================

  await page.waitForLoadState('domcontentloaded');

  await page.waitForTimeout(3000);

  console.log('Checkout page loaded');


  // ============================================================
  // 15. CHECK ADDRESS FORM
  // ============================================================

  const addressForm = page.locator(
    '//input[contains(@name,"enterAddressFullName")]'
    + ' | '
    + '//input[contains(@name,"enterAddressPhoneNumber")]'
  ).first();


  const addressFormVisible =
    await addressForm.isVisible().catch(() => false);


  // ============================================================
  // 16. ADD ADDRESS IF REQUIRED
  // ============================================================

  if (addressFormVisible) {

    console.log('New address form detected');


    // ----------------------------------------------------------
    // FULL NAME
    // ----------------------------------------------------------

    const fullName = page.locator(
      '//input[contains(@name,"enterAddressFullName")]'
    ).first();

    if (await fullName.isVisible().catch(() => false)) {

      await fullName.fill('Kavin Kumar');
    }


    // ----------------------------------------------------------
    // PRIMARY PHONE
    // ----------------------------------------------------------

    const phone = page.locator(
      '//input[contains(@name,"enterAddressPhoneNumber")]'
    ).first();

    if (await phone.isVisible().catch(() => false)) {

      await phone.fill(MOBILE_NUMBER);
    }


    // ----------------------------------------------------------
    // ADDRESS LINE 1
    // ----------------------------------------------------------

    const address1 = page.locator(
      '//input[contains(@name,"enterAddressLine1")]'
      + ' | '
      + '//textarea[contains(@name,"enterAddressLine1")]'
    ).first();

    if (await address1.isVisible().catch(() => false)) {

      await address1.fill(ADDRESS_LINE_1);
    }


    // ----------------------------------------------------------
    // ADDRESS LINE 2
    // ----------------------------------------------------------

    const address2 = page.locator(
      '//input[contains(@name,"enterAddressLine2")]'
      + ' | '
      + '//textarea[contains(@name,"enterAddressLine2")]'
    ).first();

    if (await address2.isVisible().catch(() => false)) {

      await address2.fill(ADDRESS_LINE_2);
    }


    // ----------------------------------------------------------
    // LANDMARK
    // ----------------------------------------------------------

    const landmark = page.locator(
      '//input[contains(@name,"Landmark")]'
      + ' | '
      + '//input[contains(@id,"Landmark")]'
    ).first();

    if (await landmark.isVisible().catch(() => false)) {

      await landmark.fill(LANDMARK);
    }


    // ----------------------------------------------------------
    // CITY
    // ----------------------------------------------------------

    const city = page.locator(
      '//input[contains(@name,"City")]'
      + ' | '
      + '//input[contains(@id,"City")]'
    ).first();

    if (await city.isVisible().catch(() => false)) {

      await city.fill(CITY);
    }


    // ----------------------------------------------------------
    // STATE
    // ----------------------------------------------------------

    const state = page.locator(
      '//select[contains(@name,"State")]'
      + ' | '
      + '//select[contains(@id,"State")]'
    ).first();

    if (await state.isVisible().catch(() => false)) {

      await state.selectOption({
        label: STATE
      });
    }


    // ----------------------------------------------------------
    // PINCODE
    // ----------------------------------------------------------

    const pincode = page.locator(
      '//input[contains(@name,"PostalCode")]'
      + ' | '
      + '//input[contains(@name,"ZipCode")]'
      + ' | '
      + '//input[contains(@id,"PostalCode")]'
    ).first();

    if (await pincode.isVisible().catch(() => false)) {

      await pincode.fill(PINCODE);
    }


    // ----------------------------------------------------------
    // ADDITIONAL PHONE
    // ----------------------------------------------------------

    const additionalPhone = page.locator(
      '//input[contains(@name,"AdditionalPhone")]'
      + ' | '
      + '//input[contains(@name,"AlternatePhone")]'
      + ' | '
      + '//input[contains(@placeholder,"additional phone")]'
      + ' | '
      + '//input[contains(@placeholder,"alternate phone")]'
    ).first();

    if (await additionalPhone.isVisible().catch(() => false)) {

      await additionalPhone.fill(ADDITIONAL_NUMBER);
    }


    // ----------------------------------------------------------
    // SAVE ADDRESS
    // ----------------------------------------------------------

    const saveAddress = page.locator(
      '//input[@type="submit" and '
      + '(contains(@value,"Add address")'
      + ' or contains(@value,"Use this address"))]'
      + ' | '
      + '//button[contains(translate(normalize-space(.),'
      + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
      + '"abcdefghijklmnopqrstuvwxyz"),"add address")]'
    ).first();


    if (await saveAddress.isVisible().catch(() => false)) {

      await saveAddress.click();

      console.log('Address saved');
    }

  } else {

    console.log('Existing address detected');
  }


  // ============================================================
  // 17. USE THIS ADDRESS
  // ============================================================

  await page.waitForTimeout(1500);

  const useAddress = page.locator(
    '//input[@type="submit" and '
    + 'contains(@value,"Use this address")]'
    + ' | '
    + '//button[contains(translate(normalize-space(.),'
    + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
    + '"abcdefghijklmnopqrstuvwxyz"),"use this address")]'
  ).first();


  if (await useAddress.isVisible().catch(() => false)) {

    await useAddress.click();

    console.log('Delivery address selected');
  }


  // ============================================================
  // 18. WAIT FOR PAYMENT PAGE
  // ============================================================

  await page.waitForLoadState('domcontentloaded');

  await page.waitForTimeout(3000);

  console.log('Payment page reached');


  // ============================================================
  // 19. MANUAL QR PAYMENT
  // ============================================================

  console.log('');
  console.log('==============================================');
  console.log('          MANUAL PAYMENT REQUIRED');
  console.log('');
  console.log('Scan the QR code using your mobile.');
  console.log('Complete the payment manually.');
  console.log('Wait until payment is completed.');
  console.log('Then click RESUME.');
  console.log('==============================================');
  console.log('');

  await page.pause();


  // ============================================================
  // 20. WAIT AFTER PAYMENT
  // ============================================================

  await page.waitForLoadState('domcontentloaded');

  await page.waitForTimeout(5000);


  // ============================================================
  // 21. CHECK ORDER CONFIRMATION
  // ============================================================

  const confirmation = page.locator(
    '//*[contains(translate(normalize-space(.),'
    + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
    + '"abcdefghijklmnopqrstuvwxyz"),"order placed")'
    + ' or contains(translate(normalize-space(.),'
    + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
    + '"abcdefghijklmnopqrstuvwxyz"),"order confirmed")'
    + ' or contains(translate(normalize-space(.),'
    + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
    + '"abcdefghijklmnopqrstuvwxyz"),"thank you for your order")'
    + ' or contains(translate(normalize-space(.),'
    + '"ABCDEFGHIJKLMNOPQRSTUVWXYZ",'
    + '"abcdefghijklmnopqrstuvwxyz"),"your order has been placed")]'
  ).first();


  const confirmationVisible =
    await confirmation.isVisible().catch(() => false);


  // ============================================================
  // 22. CHECK URL
  // ============================================================

  const currentUrl = page.url();

  const confirmationUrl =
    /order|confirmation|thankyou|thank-you/i.test(currentUrl);


  // ============================================================
  // 23. FINAL RESULT
  // ============================================================

  if (confirmationVisible || confirmationUrl) {

    console.log('');
    console.log('==============================================');
    console.log('       ORDER SUCCESSFULLY PLACED');
    console.log('==============================================');
    console.log('Current URL:', currentUrl);
    console.log('');

  } else {

    console.log('');
    console.log('==============================================');
    console.log('     ORDER CONFIRMATION NOT DETECTED');
    console.log('==============================================');
    console.log('Current URL:', currentUrl);
    console.log('');

    throw new Error(
      'Order confirmation was not detected after payment.'
    );
  }

});