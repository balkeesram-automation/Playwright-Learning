import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('user can add a product to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login();

  await expect(productsPage.title).toHaveText('Products');

  await productsPage.addBackpackToCart();

  await expect(productsPage.cartBadge).toHaveText('1');
});