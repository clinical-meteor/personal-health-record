Router.configure({
  // we use the  appLayout template to define the layout for the entire app
  layoutTemplate: 'appLayout',

  // the pageNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'pageNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  yieldTemplates: {
    'sidebar': {
      to: 'westPanel'
    },
    'globalSearchBar': {
      to: 'globalInput'
    }
  }
});

Router.route('/', {
  name: 'homeRoute',
  template: 'clinicalHistory',
  yieldTemplates: {
    'sidebar': {
      to: 'westPanel'
    },
    'globalSearchBar': {
      to: 'globalInput'
    }
  }
});
