import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";
import {pageFixture} from "../../hooks/pageFixture";

let browser: Browser;
let page: Page;

setDefaultTimeout( 60 *1000 *2 )

Given('User navigates to the application', async function () {
    // browser = await chromium.launch({ headless: false });
    // page = await browser.newPage();
    await pageFixture.page.goto('https://membersvic.returnit.com.au/');
});

Given('User click on the forgot password link', async function () {
    await  pageFixture.page.locator('//a[text()="Forgot password?"]').click();

});

When('User enter the email as {string}', async function (email: string) {
    await  pageFixture.page.locator('#email').type(email);

});
When('User click on contiue button', async function () {
    await  pageFixture.page.locator('//button[text()="Continue"]').click();

});

Then('Verify email sent message is displayed', async function () {
    await expect( pageFixture.page.getByText('Check Your Email')).toBeVisible();
    await expect( pageFixture.page.getByText('Please check the email')).toBeVisible();
    await expect( pageFixture.page.getByRole('button', { name: 'Resend email' })).toBeVisible();
});

Then('error message is displayed', async function () {

    const element = await  pageFixture.page.locator('#error-element-email');
    const actualText = await element.innerText();
    expect(actualText).toContain('Email is not valid.');
});

