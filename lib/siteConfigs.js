
Meteor.startup(function (){
  if (Meteor.isClient){
    ActiveEntry.configure({
      passwordSignupFields: 'EMAIL_ONLY',
      logo: {
        url: "/path/to/image.png",
        displayed: false
      },
      signIn: {
        displayFullName: true,
        destination: "/"
      },
      signUp: {
        destination: "/"
      },
      themeColors: {
        primary: ""
      }
    });
  };
  if (Meteor.isServer) {
    Env.allow({
      DEBUG: true
    });
  }
});
