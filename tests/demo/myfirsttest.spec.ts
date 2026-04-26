import{test,expect}  from '@playwright/test'

test.only('should go to home page and check title and header', async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    await expect(page).toHaveTitle("CURA Healthcare Service")
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
})