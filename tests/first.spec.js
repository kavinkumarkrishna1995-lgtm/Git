import { test } from '@playwright/test';

test ('Instagram to facebook to instagram', async({ page }) => {

    await page.goto('https://www.instagram.com/?hl=en');
    await page.goto('https://www.facebook.com/');

    // const title = await page.title();
    // const url = page.url();
    console.log(await page.title());
    console.log(page.url());
    await page.goBack();
    await page.goto('https://www.instagram.com/?hl=en');
    // const title1 = await page.title();
    // const url2 = page.url();
    console.log(await page.title());
    console.log(page.url());

});

// import { test } from '@playwright/test';

// test('Instagram to Facebook to Instagram', async ({ page }) => {

//     // Open Instagram
//     await page.goto("https://www.instagram.com/?hl=en");
//     // Navigate to facebook
//     await page.goto("https://www.facebook.com/");
//     // Fetch the Facebook Title & URL
//     const fbTitle = await page.title();
//     const fbUrl = page.url();

//     console.log("Facebook Title :", fbTitle);
//     console.log("Facebook URL :", fbUrl);
//     // Again navigate to instragram using goback() method
//     await page.goBack();
//     // Fetch the instragram Title & URL
//     const instaTitle = await page.title();
//     const instaUrl = page.url();

//     console.log("Instagram Title :", instaTitle);
//     console.log("Instagram URL :", instaUrl);
// });