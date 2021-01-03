const firstName ="Test";
const lastName = 'Test';
const phone = '85214';
const email = 'yamaris91';
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
    {  const register = browser.page.registration();
        register
       // .myCustomPause()
        .createAccount();
    },
    'step eigth: validate message  valid email field'(browser){
        const register = browser.page.registration();
        const alert = '#headersignupform > div.resultsignup > div > p';
        register.getValue('@emailInput', function(result) { 
            var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
             if (result.value != "") {
                 let isvalided = expReg.test(result.value);
                if (isvalided == false) {
                    browser.verify.visible(alert);
                    browser.getText('#headersignupform > div.resultsignup > div > p', function(result) {
                        this.assert.equal(result.value, 'The Email field must contain a valid email address.');
                      });

                    
                    register
                    .assert.visible('@headSignUp');
                     browser.getText('xpath', '//div[contains(@class,"container")]//h3', function(result) {
                    let sentence = result.value;
                    if (sentence.startsWith('H')) {
                    console.log('Test failed: registered user with not valid email field', result.value);
                    }
                    else{
                    console.log("The result obtained is successful test, it show message invalid email");  
                    }
                }); 
                }
             }
          });
        
    },
      after: function(browser)
      {
          //Cerrar el browser
          browser.end();
  
      }
}