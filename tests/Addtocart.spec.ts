import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
test('Check product is added in cart ', async ({ page }) => {
     const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
   await loginPage.goto();
   await loginPage.login();
   await expect(productsPage.title).toHaveText('Products');
   await productsPage.addBackpackToCart();  
   await page.locator('[data-test="shopping-cart-link"]').click();
   await expect(page).toHaveURL(/cart/);
   await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
});