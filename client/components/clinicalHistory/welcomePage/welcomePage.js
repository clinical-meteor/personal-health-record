


Template.welcomePage.events({
  'click #parseFacebookProfile': function (){
    Meteor.call("scanFacebookFiles", $('#filePath').val());
  },
  'click #signUpButton': function (){
    Router.go('/entrySignUp');
  }
});


Template.welcomePage.helpers({
  getButtonStyle: function (){
    if (Meteor.userId()) {
      return "background-color: green;";
    } else {
      return "background-color: lightgray;";
    }
  },
  loggedOut: function (){
    if (Meteor.userId()) {
      return false;
    } else {
      return true;
    }
  }
});
