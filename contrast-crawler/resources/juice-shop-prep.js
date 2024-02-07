const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/#/');
  await page.getByLabel('Close Welcome Banner').click();
  await page.getByLabel('Show/hide account menu').click();
  await page.getByRole('menuitem', { name: 'Go to login page' }).click();
  await page.getByRole('link', { name: 'Not yet a customer?' }).click();
  await page.locator('div').filter({ hasText: /^Email \*$/ }).nth(2).click();
  await page.getByLabel('Email address field').fill('a@b.com');
  await page.getByLabel('Field for the password').click();
  await page.getByLabel('Field for the password').fill('password');
  await page.getByLabel('Field to confirm the password').click();
  await page.getByLabel('Field to confirm the password').fill('password');
  await page.getByLabel('Selection list for the security question').click();
  await page.getByRole('option', { name: 'Your eldest siblings middle name?' }).click();
  await page.getByPlaceholder('Answer to your security question').click();
  await page.getByPlaceholder('Answer to your security question').fill('none');
  await page.getByLabel('Button to complete the registration').click();
  await page.getByLabel('dismiss cookie message').click();

  // ---------------------
  await context.close();
  await browser.close();
})();
