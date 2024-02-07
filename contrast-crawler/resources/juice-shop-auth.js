const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/#/');
  await page.getByLabel('Show/hide account menu').click();
  await page.getByRole('menuitem', { name: 'Go to login page' }).click();
  await page.getByLabel('Text field for the login email').click();
  await page.getByLabel('Text field for the login email').fill('a@b.com');
  await page.getByLabel('Text field for the login password').click();
  await page.getByLabel('Text field for the login password').fill('password');
  await page.getByLabel('Login', { exact: true }).click();
  await page.getByRole('button', { name: 'Login Confirmed' }).click();
  await page.getByLabel('Show the shopping cart').click();
  await page.getByRole('button', { name: 'Authenticated Indicator Confirmed' }).click();
  await page.getByLabel('Show/hide account menu').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logout Confirmed' }).click();
  await page.getByRole('button', { name: 'Unauthenticated Indicator Confirmed' }).click();
  await page.close();
  await page.getByRole('button', { name: 'Done' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();