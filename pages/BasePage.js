/**
 * Class to dynamically get all require pages in tests
 */
const {RegistrationPage} = require('../pages/RegistrationPage');

class BasePage{
    constructor(page){
        this.registrationPage = new RegistrationPage(page);
    }

    getRegistrationPage(){
        return this.registrationPage;
    }
}
module.exports = {BasePage};