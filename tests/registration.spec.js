const {test, expect} = require('@playwright/test');
const {BasePage} = require('../pages/BasePage');
//const { waitForDebugger } = require('inspector');
const dataset = JSON.parse(JSON.stringify(require('../utils/registrationData.json')));

for (let i = 0; i < 12; i++) {

    test(`${dataset[i].name}`, async ({ page }) => {

        await page.goto('https://qa-assessment.pages.dev/');
        const basePage = new BasePage(page);
        const registrationPage = basePage.getRegistrationPage();

        //Event to check the dialog message and assert if test passed
        page.on('dialog', async (dialog) => {
            console.log(`Expected message: ${dataset[i].messsage}  actual message ${dialog.message()}`);
            expect(dialog.message()).toContain(dataset[i].messsage);
            await dialog.accept();
        });

        await registrationPage.fillForm(dataset[i]);

    });
};