const {test, expect} = require('@playwright/test');
const {BasePage} = require('../pages/BasePage');
const dataset = JSON.parse(JSON.stringify(require('../utils/mandatoryFieldsData.json')));
const dataset1 = JSON.parse(JSON.stringify(require('../utils/successfulData.json')));
const url = 'https://qa-assessment.pages.dev/';

for (let i = 0; i < 11; i++) {

    test(`${dataset[i].name}`, async ({ page }) => {

        await page.goto(url);
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

test(`${dataset1[0].name}`, async ({ page }) => {

    await page.goto(url);
    const basePage = new BasePage(page);
    const registrationPage = basePage.getRegistrationPage();

    //Event to check the dialog message and assert if test passed
    page.on('dialog', async (dialog) => {
        console.log(`Expected message: ${dataset1[0].messsage}  actual message ${dialog.message()}`);
        expect(dialog.message()).toContain(dataset1[0].messsage);
        await dialog.accept();
    });

    await registrationPage.fillForm(dataset1[0]);

});


