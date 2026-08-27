# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webTable.spec.js >> Webtable
- Location: tests\webTable.spec.js:3:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByPlaceholder('First Name')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e125]:
      - heading "Web Tables" [level=1] [ref=e128]
      - generic [ref=e129]:
        - generic [ref=e130]:
          - button "Add" [active] [ref=e132] [cursor=pointer]
          - generic [ref=e134]:
            - textbox "Type to search" [ref=e135]
            - button [ref=e136] [cursor=pointer]
        - table [ref=e139]:
          - rowgroup [ref=e140]:
            - row [ref=e141]:
              - columnheader "First Name" [ref=e142]
              - columnheader "Last Name" [ref=e143]
              - columnheader "Age" [ref=e144]
              - columnheader "Email" [ref=e145]
              - columnheader "Salary" [ref=e146]
              - columnheader "Department" [ref=e147]
              - columnheader "Action" [ref=e148]
          - rowgroup [ref=e149]:
            - row [ref=e150]:
              - cell "Cierra" [ref=e151]
              - cell "Vega" [ref=e152]
              - cell "39" [ref=e153]
              - cell "cierra@example.com" [ref=e154]
              - cell "10000" [ref=e155]
              - cell "Insurance" [ref=e156]
              - cell [ref=e157]:
                - generic [ref=e158]:
                  - generic "Edit" [ref=e159] [cursor=pointer]
                  - generic "Delete" [ref=e162] [cursor=pointer]
            - row [ref=e165]:
              - cell "Alden" [ref=e166]
              - cell "Cantrell" [ref=e167]
              - cell "45" [ref=e168]
              - cell "alden@example.com" [ref=e169]
              - cell "12000" [ref=e170]
              - cell "Compliance" [ref=e171]
              - cell [ref=e172]:
                - generic [ref=e173]:
                  - generic "Edit" [ref=e174] [cursor=pointer]
                  - generic "Delete" [ref=e177] [cursor=pointer]
            - row [ref=e180]:
              - cell "Kierra" [ref=e181]
              - cell "Gentry" [ref=e182]
              - cell "29" [ref=e183]
              - cell "kierra@example.com" [ref=e184]
              - cell "2000" [ref=e185]
              - cell "Legal" [ref=e186]
              - cell [ref=e187]:
                - generic [ref=e188]:
                  - generic "Edit" [ref=e189] [cursor=pointer]
                  - generic "Delete" [ref=e192] [cursor=pointer]
            - row [ref=e195]:
              - cell "Kavin" [ref=e196]
              - cell "K" [ref=e197]
              - cell "31" [ref=e198]
              - cell "kavin@gmail.com" [ref=e199]
              - cell "100000" [ref=e200]
              - cell "SDET" [ref=e201]
              - cell [ref=e202]:
                - generic [ref=e203]:
                  - generic "Edit" [ref=e204] [cursor=pointer]
                  - generic "Delete" [ref=e207] [cursor=pointer]
        - generic [ref=e211]:
          - group [ref=e213]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e214]:
            - text: Page
            - strong [ref=e215]: 1 of 1
          - combobox [ref=e217]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
    - iframe [ref=e226]:
      - generic [ref=f7e2]:
        - link [ref=f7e4] [cursor=pointer]:
          - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjssEL7gc1fs0Rb-lEUtotN1fVRmD5PI4mAmqRYpeX47oKY52eiccuQU3KO1tC1XoIifTqzDHCcwmhMPeFhnn5gXfK20jDa_4D0MvizWzGtayXvjeq2O4azNIqFpba-v_gerhlc7at_3CWBTAgmNbaCZqLpw1HhCq8PwTPparsYKpglIb3raAGiKxydoZwitVZrT4oyY8G8pmSBzsrYalLqC_Pvaz80k81nS0ngxeev--qzZFUIOPIKjzy5W1zKxgH-9WQW_AaWuaKA6c4KGhDxzwmL8PL2zsN-o3ykjr3sumeMtjWWp3mlhDsqsAex-hfGJvy4FaAcoAMxQeDYPhy6DD206imQMEdiCOK1_tl1v8_5IVQqKykfiiA8120uY5WOvL2-3R6Lke-ViGxxhnpfABI-1VAx91m37YTxz-T11bhatNvG-IlvyTDQfd26RCoajOG-1C5JgHtcXi3buAC2Hl0fSvpuhjwSFByehxt_d8ZAxjb4nteqytFWPN5Af5MkrOqwBQ5KjEFXyGZiwaTEwAfbjcM08SBk9Q3WwTwvWebGQaSWRKZR-yiJrxb32NdvsXFU3TT9a7EhUVXVdD1VwEMABGSLwLKWq1e11_Nzdn-yaKSMBMQRq4iJ6gWG_IJ5GSx9agv8b_fGa4cI56xqy4xlJcOu2ZVD-_25yNPkl9hx_Fyc6z2nS56VhVFKdyXQ1xYJmqE_8XWxJquGOmvNlsXS3bnqxvGeiuCVXDuFkFQZhMTlOqwFauygOpA6ZnrLIFN0cx4hsyQF71mLCHJtMwF2-yTXtUfVbnAv12nV-tVhuZ--xSXa_14bX2zlAIoGcYL6i951f0U2H6iHf5lfYr9eTNWiHuEsACO_30XgQigWz1UqC6JFYPRVAn6zWqMbOtozBn3gZfKaaeeLbOv_4d6rl0TXtGkwxzejsgoCVutqZGx4mIU7PEafAufoWW2hPPtS2rI-XEFC7l95LMZXZTb9OVx7SPupEoMwzs3ZDWZg-yDfogxqpabnPJZLs7AnVSQ9zp_MjJpwceJuIDwG9O6nwxYXI6pEb5WDPCtFeJisypBAwzfExRWMpYU5p5HILeI6tRJ7nSpPJKHQOuuaJmOvMUJRwQ84HxbroqWW60jZRA7Qno1myuwhTtG2Ji309PDZY_4pT7a0kCZeo4nIq8DQXjUctwHhwmpmkC6RLRnEHy2wQfC8dxr3XFft9DW8oVu6WM0QYnM8EpgHT1XYPgZM6bLK0klE4vdDwD9E1r5SMkPdrhi5r5T-xyut2GobvXiRgbeoCQtx0YtUH_Zyp9emQgYkZCa-n3B4YMpTSo5az86j1GTATQz7UbzII_BajeyT8cg1SZpFZk-tO4XALAiYA7EanLZ0iMSKnRtp8VX6U_8UaZ8Rs6IImD1wxsiPy52sCesvk4gWyWiEVhoFZfZMY8NXm4vej6vLhUXYT2extGSWB9hQ1iAFoRxEf4vBW5qUiG5W5YNzGy6moKbejSvt_LwpDZHUFxeFjTbBL4n9X2DkP4TvdxObzZbIWn5avCZX9jRJwaxuygyZ0jK-EDCHAHKQnul7e8ocSRukZ4JJEAtc084prCHd3sKXDik18iIWY8utiLaHLodn-FNSNE4qL_Efn7KveEjt3EuJZrP3Fw5pgfnpzyAuBfJ_yUG4u8QqC8_hgNDC5m7ot3OYi7o97a3l2GuKdurPrkt1fEtWGq0E3p9gJxtjGNAap14UhjxS6bzaanwyG2AN5M98B3jHk98D3wrBeXYGZ8C-QazQ7AeyAaxEHQKp1MIGAhtByMi763vXKiFtLAOrgMlRmWZpIspJWive_KrlpRFdKBJxdgAPVb_r4wTsOnlYjL9UKWkFDqf9MPRjC8zInZtM7OxBduGa-woH7mTUmtwW1x-yQd5zVVufUx&sai=AMfl-YRb5CDJKefIeyxygUr9-iUzi0UkPC85QXMPgUB1G1nNRKaMXvcRjU61Bo7_R5yEkOrLlzLYB_jidlKeBoaRvMlStT2WzNj0bIHICwGuJ30aD2frQjRuCkl1yGm6toA5ee-7dAfLJTMdzldpMzpLhb871qrS68uxO7vTVPesKWYl4ILpsmCWoSv5p26hUHIYSDSUBLEM_4NKXNuIjRvx2m2pkqALbo3GGUHFFhk80_RbMpYCOAsx3j3gF6vBCTQ4IImK3iG4s82668cpZalGUSQcEyLlm7S4WMQk4wN-WyC5BQNGiFQfsd3LBSvk4a3Z1shmFXLAZMLK2J4ixkPt8ww86TFrGL00mE2MctXPLSGaFshFYGPIVCy6zEx-Rb_sv3aixgMOOPm3aJTuYOtYnZoK8M1JE8MOYhLNVmIYUWwXT_4HS9pvn-ypuzZtDkkeZw2SJlCt6Eq_Zu87GRrVW1TfX9NLWLAgOXTREfxcWqyFMBm2f_Y5fQqsUGn2F6EQJAy8rGXG19Hi9ufFdskfrvd11OX_GkuLYyvbobIfp7gGJEmnbENBOVrfHqo_DD9ufnfpU-Fe9-yUqsgt-sKgCi4crqKwN6dOae_qMcfJSG9MTnOSkM8wcaSyQK3tmuSgClkmWawXFEBn_on8HqFceSzvOc66Dn-61tl67xWQVKh_5rG7TX_JV05PGFs29uoT-ao8e5DyM3mU2oGTMkHBvmOGZH-aug6NpmBq1l0uWUKZnUYQ9qDz0_6H339sKZk68P4QF4FwxG9lRqtOdzxT_9H3VPnOLKRpm1ylSPK3OfAjVBLoNaoPJmhq9ywaWSR05cOrBs54u-paeviq-5Xx8PifsLyQNb6TePdIwNEIyOD8pWE6WLTKkmDHQ3d1ITorWmbmcFJ1v6f6GNI_SeVbob0mtz4pAhfVlbWUZR69gWuQa2Xws3LrFJ0T4Fgcj1zPaEC3L7cwhE-uzgBPBLO89rFXFBgLf-jEByM8FoOh7HKccHuzFQ&sig=Cg0ArKJSzFAHTLTP0Vhf&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9nb28uZ2w&urlfix=1&adurl=https://maps.app.goo.gl/RpGCvhLfgh5JYCnS7%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_OMR_StoreLaunch_Display_Aug26_300x250%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24133429381
          - img "Advertisement" [ref=f7e5]
        - generic [ref=f7e6]:
          - generic:
            - generic [ref=f7e7] [cursor=pointer]
            - button [ref=f7e12] [cursor=pointer]
  - contentinfo [ref=e227]:
    - generic [ref=e228]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('Webtable', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://demoqa.com/webtables');
  6  | 
  7  |     const rows = page.locator('.rt-tbody .rt-tr-group');
  8  | 
  9  |     console.log("Existing Rows:", await rows.count());
  10 | 
  11 |     await page.getByRole('button', { name: 'Add' }).click();
  12 | 
  13 |     await page.getByPlaceholder('First Name').fill('Kavin');
  14 |     await page.getByPlaceholder('Last Name').fill('K');
  15 |     await page.getByPlaceholder('name@example.com').fill('kavin@gmail.com');
  16 |     await page.getByPlaceholder('Age').fill('31');
  17 |     await page.getByPlaceholder('Salary').fill('100000');
  18 |     await page.getByPlaceholder('Department').fill('SDET');
  19 | 
  20 |     await page.getByRole('button', {name: 'Submit'}).click();
  21 | 
  22 |     console.log("Total Rows:", await rows.count());
  23 | 
  24 |     for (let i = 0; i < await rows.count(); i++) {
  25 | 
  26 |         const text = await rows.nth(i).textContent();
  27 | 
  28 |         console.log(`Row ${i + 1}: ${text}`);
  29 |     }
  30 | 
  31 |     for (let i = 0; i < await rows.count(); i++) {
  32 | 
  33 |         const text = await rows.nth(i).textContent();
  34 | 
  35 |         if (text.includes('Kavin')) {
  36 | 
  37 |             await rows.nth(i).locator('[title="Edit"]').click();
  38 | 
  39 |             break;
  40 |     }}
  41 | 
> 42 |     await page.getByPlaceholder('First Name').fill('KavinUpdated');
     |                                               ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  43 |     await page.getByPlaceholder('Last Name').fill('K');
  44 |     await page.getByPlaceholder('name@example.com').fill('kavinupdated@gmail.com');
  45 |     await page.getByPlaceholder('Age').fill('31');
  46 |     await page.getByPlaceholder('Salary').fill('100000');
  47 |     await page.getByPlaceholder('Department').fill('SDET');
  48 | 
  49 |     await page.getByRole('button', {name: 'Submit'}).click();
  50 | 
  51 |     for (let i = 0; i < await rows.count(); i++) {
  52 | 
  53 |         const text = await rows.nth(i).textContent();
  54 | 
  55 |         if (text.includes('KavinUpdated')) {
  56 | 
  57 |             console.log("Updated Row:", text);
  58 | 
  59 |             await rows.nth(i).locator('[title="Delete"]').click();
  60 | 
  61 |             break;
  62 |     }}
  63 | 
  64 |     await page.waitForTimeout(2000);
  65 | });
```