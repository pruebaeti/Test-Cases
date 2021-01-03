const firstName ="";
const lastName = 'Test';
const phone = '09889603';
const email = 'ymrks911@gmail.com';
const pass = 'NeverLand';
const repeatPass = 'NeverLand1';

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
    'step one: introduce firstname in textbox' (browser){        
       const register = browser.page.registration(); 
           
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
    {  const register = browser.page.registration();
        register
       // .myCustomPause()
        .createAccount();
    },
    'step eigth: validate message empty name field'(browser){
        browser.getValue('input[name=firstname]', function(result) {
            const register = browser.page.registration();
            if (result.value == "") {               
                register
                .assert.visible('@headSignUp');
                browser.getText('xpath', '//div[contains(@class,"container")]//h3', function(result) {
                let sentence = result.value;
                if (sentence.startsWith('H')) {
                    console.log('Test failed: registered user with empty name field', result.value);
                }
                else{
                    console.log('the result obtained is successful test: user not registered', sentence);
                }
                });
            }
          });
        
    },
      after: function(browser)
      {
          //Cerrar el browser
          browser.end();
  
      }
}