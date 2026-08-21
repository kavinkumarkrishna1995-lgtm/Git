import { test, firefox, chromium } from '@playwright/test';

test ('Create browser, context and page', async() => {
//brower launch
    const browser = await chromium.launch();
//first context
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    const page2 = await context1.newPage();

    await page1.goto('https://www.facebook.com/');
    await page2.goto('https://www.instagram.com/?hl=en');
//second context
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    await page3.goto("https://www.flipkart.com/");
//third context   
    const context3 = await browser.newContext();
    const page4 = await context3.newPage();
    const page5 = await context3.newPage();
    await page4.goto("https://www.amazon.in/");
    await page5.goto("https://www.myntra.com/");

    console.log(await page1.title());
    console.log(await page2.title());

    
});
