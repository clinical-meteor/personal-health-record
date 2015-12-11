Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    }
  }
});

Router.route('/', {
  name: 'homeRoute',
  template: 'hello',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'keybindingsModal': {
      to: 'keybindingsModal'
    }
  }
});
