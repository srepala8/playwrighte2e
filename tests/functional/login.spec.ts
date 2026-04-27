import { test, expect } from '@playwright/test';

test.only('Should Login Successfully', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await expect(page).toHaveTitle("CURA Healthcare Service")
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
  await page.getByRole('link', { name: 'Make Appointment' }).click();
 await expect(page.locator("//h2")).toHaveText("Login")
  await page.getByLabel('Username').fill('John Doe');
 
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible()
});