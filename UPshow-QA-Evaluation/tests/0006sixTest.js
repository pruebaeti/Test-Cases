const firstTest = require('./0001firstTest.js');

const firstName = 'Yamaris';
const lastName = 'Hernandez Perez';
const phone = '098289603';
const email = 'tes16@mailinator.com';
const pass = 'NeverLand';
const repeatPass = 'NeverLand';
 module.exports =firstTest;
 module.exports = {
    'email Exist': function(browser) {
       browser
       .url('https://www.phptravels.net/register')
       .maximizeWindow()
       .click('#cookyGotItBtnBox > div > button')
       .setValue('input[name=firstname]' , firstName)
       .setValue('input[name=lastname]' , lastName)
       .setValue('input[name=phone]' , phone)
       .setValue('input[name=email]' , email)
       .setValue('input[name=password]' , pass)
       .setValue('input[name=confirmpassword]' , repeatPass)
       .waitForElementVisible('button[type="submit"]', 10000)
        .click('button[type="submit"]')
        .pause(2000);
        const alert = '#headersignupform > div.resultsignup > div';
            browser.waitForElementVisible('#headersignupform > div.resultsignup > div', 3000);
                        browser.getText(alert, function(result) {
                              this.assert.equal(result.value, 'Email Already Exists.');
                           });

                        
                        browser
                        .assert.visible('body > div.body-inner > div.main-wrapper.scrollspy-action > section > div > div > div:nth-child(1) > div > h3');
                           browser.getText('xpath', '//div[contains(@class,"container")]//h3', function(result) {
                        let sentence = result.value;
                        if (sentence.startsWith('H')) {
                        console.log('Test failed: registered user with exist email ', result.value);
                        }
                        else{
                        console.log("The result obtained is successful test, it show message exist email");  
                        }
             }); 



       
    }
 }

