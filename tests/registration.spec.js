const {test, expect} = require('@playwright/test');
const {BasePage} = require('../pages/BasePage');
const { waitForDebugger } = require('inspector');
const dataset = JSON.parse(JSON.stringify(require('../utils/registrationData.json')));

test('Registration without a first name', async ({page}) => {
    await page.goto('https://qa-assessment.pages.dev/');
    const basePage = new BasePage(page);
    const registrationPage = basePage.getRegistrationPage();

    await registrationPage.fillForm(dataset[0]);

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        console.log("In the action")
        expect(dialog.message()).toContain("First name");
        await dialog.accept();
    });

});