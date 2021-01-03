const homeCommands = {
  createAccount() { 
      this.waitForElementVisible('@signUpButton', 10000)
        .click('@signUpButton')
        .api.pause(7000);
        return this
    // Return page object for chaining
  }
};

module.exports = {
  commands: [homeCommands,{
    setQuery( selector,value){
      return this
            .setValue(selector , value);
    },
    myCustomPause: function () {
      this.api.pause(1000);
    },
    search(){
      return this 
            .click('#cookyGotItBtnBox > div > button');
    },

  }],
  
  elements: {
    firstNameInput: {selector: 'input[name=firstname]'},
    lastNameInput: {selector: 'input[name=lastname]'},
    phoneInput: {selector: 'input[name=phone]'},
    emailInput: {selector: 'input[name=email]'},
    passwordInput: {selector: 'input[name=password]'},
    rePasswordInput: {selector: 'input[name=confirmpassword]'},
    signUpButton: {selector: 'button[type="submit"]', locateStrategy: 'css selector'},
    gotit:{selector:'#cookyGotItBtnBox > div > button'},
    headSignUp:{selector:'body > div.body-inner > div.main-wrapper.scrollspy-action > section > div > div > div:nth-child(1) > div > h3'},
  }
};
