import {test,expect} from '@playwright/test'

test("should test the make appointment flow",async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/")

  await page.getByRole('link', { name: 'Make Appointment' }).click();
 
  await page.getByLabel('Username').fill('John Doe');
  
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//h2")).toHaveText('Make Appointment')
  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
  await page.getByRole('cell', { name: '30' }).nth(1).click();
  
  await page.getByRole('textbox', { name: 'Comment' }).fill('To do appointment of medical aid');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await expect(page.locator("//h2")).toHaveText('Appointment Confirmation')
  await expect(page.locator('//a[contains(text(),"Go to Homepage")]')).toHaveText('Go to Homepage')
});


// test("should make appointment with non default values",{annotation : {type: "Bug",description:"Defect 123--On make my appointment"},tag:"@smoke"},async({page,browserName})=>{

// })