// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  tags: ['walkthrough'],
  before: function (client){
    client
      .url("http://localhost:3000/entrySignUp")
      .resizeWindow(1024, 768).pause(300);
  },
  "A. Sign In Page" : function (client) {
    client
      .verify.elementPresent("#entrySignUp")
      .saveScreenshot("tests/nightwatch/screenshots/ipad/A-signInPage.png")
      .reviewSignUp()
      .verify.elementNotPresent("#logoutButton")
      .signUp("alice@somewhere.com", "alice123").pause(300);
  },
  "B. Clinical History": function (client){
    client
      .verify.elementPresent("#clinicalImpressionInput")
      .verify.elementPresent("#clinicalHistory")
      .verify.elementNotPresent("#clinicalHistory .clinicalImpression:nth-child(1)");
  },
  "C. Add Clinical Impression": function (client){
    client
      .verify.elementPresent("#clinicalImpressionInput")
      .setValue("#clinicalImpressionInput", "Feeling healthy and good!")
      .verify.elementPresent("#submitImpression")
      .click("#submitImpression").pause(300)
      // .keys(client.Keys.ENTER).pause(300)
      .verify.elementPresent("#clinicalHistory .clinicalImpression:nth-child(1)")
      .verify.elementPresent("#clinicalHistory .clinicalImpression:nth-child(1) .impressionContent")
      .verify.elementPresent("#clinicalHistory .clinicalImpression:nth-child(1) .impressionContent .description")
      .verify.containsText("#clinicalHistory .clinicalImpression:nth-child(1) .impressionContent .description", "Feeling healthy and good!");
  },
  after: function(client){
    client
      .end();
  }
};
