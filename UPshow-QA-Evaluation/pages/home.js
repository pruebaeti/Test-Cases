const homeCommands = {
  register() {
    this.waitForElementVisible('@myAccountDropdown',7000)
        .click('@myAccountDropdown')
        .waitForElementVisible('@signUpLink', 1000)
        .click('@signUpLink')
        .api.pause(7000);

    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'https://www.phptravels.net/',
  commands: [homeCommands],
  elements: {
    myAccountDropdown: {selector: 'div.dropdown-login > a'},
    signUpLink: {
      selector: '//a[text()="Sign Up"]',
      locateStrategy: 'xpath',
      index: 0
    }
  }
};
