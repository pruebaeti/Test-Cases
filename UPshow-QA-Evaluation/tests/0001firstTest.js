const firstName = 'Yamaris';
const lastName = 'Hernandez Perez';
const phone = '098289603';
const email = 'tes16@mailinator.com';
const pass = 'NeverLand';
const repeatPass = 'NeverLand';
module.exports = {
  before: function(browser)
  {        
     const page = browser.page.home();
      browser.maximizeWindow();
     // step one: navigate to step one: navigate to
     page.navigate()
     // Seleccionar la opcion de registro
     .register()      
     .api.pause(2000);
  },
// Enter valid values in the fields
  'step one': function(browser){        
     const register = browser.page.registration(); 
        //DATA

      
        register
        .search()
        .setQuery('@firstNameInput',firstName);               
    },
  'step two: introduce lastname in textbox'(browser)
  {   const register = browser.page.registration(); 

      register
        .setQuery('@lastNameInput',lastName);
  },
  'step three: introduce phone in textbox'(browser)
  {   const register = browser.page.registration(); 

      register
        .setQuery('@phoneInput',phone);
  },
  'step four: introduce phone in textbox'(browser)
  {   const register = browser.page.registration(); 

      register
      .setQuery('@emailInput',email);
  },
  'step five: introduce pass  in textbox'(browser)
  {   const register = browser.page.registration(); 

      register
      .setQuery('@passwordInput',pass);
  },
  'step six: introduce  repeat pass  in textbox'(browser)
  {   const register = browser.page.registration(); 

      register
        .setQuery('@rePasswordInput',repeatPass);
  },
  'step seven: click in register button'(browser)
  {   const register = browser.page.registration();
      register
     // .myCustomPause()
      .createAccount();
      
  },
  'step eigth: validate welcome message'(browser)
  {
    const account = browser.page.account();
    account
    .waitForElementPresent('@welcomeMessage',3000)
    .assert.visible('@welcomeMessage')
    .getText('xpath', '@welcomeMessage', function(result) {
      let sentence = result.value;
      if (sentence.startsWith('H')) {
        account.assert.visible('body > div.body-inner > div.main-wrapper.scrollspy-action > div:nth-child(2) > div > div > div:nth-child(1) > div > div.col-md-4 > img');
        console.log('the result obtained is', result.value);
        this.pause(10000);

      }
      else
      {
        console.log('the test failed email exist');
      }
    });
    

  },
    after: function(browser)
    {
        //Close browser
        browser.end();

    }

}