/**
 * Contains all locators and methods to handle registration form tests
 */
//import { setTimeout } from "timers/promises";

class RegistrationPage{
    constructor(page){
        this.page = page;
        this.firstnameField = page.locator("#firstName");
        this.lastnameField = page.locator("#lastName");
        this.lastnameField = page.locator("#lastName");
        this.emailField = page.locator("#email");
        this.passwordField = page.locator("#password");
        this.confirmPasswordField = page.locator("#confirmPassword");
        this.dateOfBirthField = page.locator("#dob");
        this.phoneNumberField = page.locator("#phone");
        this.addressField = page.locator("#address");
        this.linkedinUrlField = page.locator("#linkedIn");
        this.githubUrlField = page.locator("#github");
        this.submitButton = page.locator("input[type='submit']");
        this.dialogMessage = '';

    }

    //Method dynamically select any gender on the registration form
    async selectGender(gender){
        gender === "" ?
        console.log("Gender is not required")
        :await this.page.locator("label[for='" +gender+ "']").click();
    }

    /*
    //Method to check the dialog message
    checkDialogMessage(expectedMessage){
        this.page.on('dialog', async (dialog) => {
            this.dialogMessage = await dialog.message();
            console.log(await dialog.message());
            console.log("In the action")
            await expect(dialog.message()).toContain(expectedMessage);
            await dialog.accept();
        });

        console.log("Dialog message is " +this.dialogMessage)
    }*/

    //Method to fill and submit the registration form with data sent from a test
    async fillForm(data){
        await this.firstnameField.fill(data.firstname);
        await this.lastnameField.fill(data.lastname);
        await this.emailField.fill(data.email);
        await this.passwordField.fill(data.password);
        await this.confirmPasswordField.fill(data.confirmPassword);

        //Fill the optional fields if and only if the data for that field is not null
        this.selectGender(data.gender); //Select the gender
        this.fillOptionalField(this.dateOfBirthField, data.dateOfBirth); //Fill the date of birth
        this.fillOptionalField(this.phoneNumberField, data.phoneNumber); //Fill the phone number
        this.fillOptionalField(this.addressField, data.address); //Fill the address
        this.fillOptionalField(this.linkedinUrlField, data.linkedinUrl); //Fill the linkedin url
        this.fillOptionalField(this.githubUrlField, data.githubUrl); //Fill the github url

        //Scroll to the buttom submit button and click on it
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.click();
    }
    
    //Method to dynamically fill any optional fields
    async fillOptionalField(field, value){
        value === "" ? 
        console.log(`The ${field} is not required`)
        :await field.fill(value);
    }
}

module.exports = {RegistrationPage}