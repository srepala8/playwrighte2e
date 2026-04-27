import{test,expect}  from '@playwright/test'

test('should go to home page and check title and header', async({page})=>{

    //go to home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/")

    //title check
    await expect(page).toHaveTitle("CURA Healthcare Service")
    
    //header check
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
})