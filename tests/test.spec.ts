import { test, expect } from '@playwright/test';

test('invalid user can see an error', async ({ page }) => {
    await page.goto ('https://www.saucedemo.com/');
await page. locator('#user-name').fill('standard_user');
await page. locator('#password').fill('Wromgpassword');
  await page.locator('#login-button').click();
});