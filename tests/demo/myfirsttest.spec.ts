import{test, expect}  from '@playwright/test'

test('should go to home page and check title and header', async({page})=>{

    //go to home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/")

    //title check
    await expect(page).toHaveTitle("CURA Healthcare Service")
    
    //header check
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")

    await expect(page.getByRole('heading', { name: 'We Care About Your Health' })).toBeVisible()
})

test("example to test", {tag:"@smoke"},async({page}, testInfo)=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/")
     await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")

})

test('should check the login failed scenario', async ({ page }) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  
  await page.getByLabel('Username').fill('John Doe');
  
  await page.getByLabel('Password').fill('ThisIsNotPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  let failmsg=await
  
  page.getByText('Login failed! Please ensure').textContent()
   expect(failmsg).toContain('Login')
});
