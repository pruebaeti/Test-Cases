const firstName = 'Yamaris';
const lastName = 'Hernandez Perez';
const phone = '098289603';
const email = 'yamaris911@gmail.com';
const pass = 'Neve';
const repeatPass = 'Neve';
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
    'step one: introduce firstname in textbox' (browser){        
       const register = browser.page.registration();         
        // Introducir valores validos en los campos 
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
    'step eigth: validate message password length'(browser){
        const register = browser.page.registration();
        register.getValue('@passwordInput', function(result) { 
            if (result.value.length < 6) {
                browser.isVisible('#headersignupform > div.resultsignup > div',function(){
                    browser.getText('#headersignupform > div.resultsignup > div > p', function(result) {
                            this.assert.equal(result.value, 'The Password field must be at least 6 characters in length.');
                          });
                    })  ;
            
                    register.isVisible('@headSignUp',function(){
                         browser.getText('xpath', '//div[contains(@class,"container")]//h3', function(result) {
                    let sentence = result.value;
                    if (sentence.startsWith('H')) {
                    console.log('Test failed: registered user with not valid password field', result.value);
                    }
                    else{
                    console.log('The result obtained is successful test: Validation of the password length  is validated message');
                    }
                    }); 
                        
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