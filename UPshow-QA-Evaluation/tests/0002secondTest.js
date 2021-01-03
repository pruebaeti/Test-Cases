const firstName = 'Yamaris';
const lastName = 'Hernandez Perez';
const phone = '098289603';
const email = 'yamaris1971@gmail.com';
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
    'step one: introduce firstname in textbox' (browser){        
       const register = browser.page.registration(); 
          //DATA

        
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
    'step eigth: validate message password diferentes'(browser){
        const register = browser.page.registration();
        browser.isVisible('#headersignupform > div.resultsignup > div',function(){
        browser.getText('#headersignupform > div.resultsignup > div > p', function(result) {
                this.assert.equal(result.value, 'Password not matching with confirm password.');
              });
        })  ;

        browser.isVisible('button[type="submit"]',function(){
            console.log('Successful test:Validation of the invalid password validated message');
        });
    },
      after: function(browser)
      {
          //Cerrar el browser
          browser.end();
  
      }

}