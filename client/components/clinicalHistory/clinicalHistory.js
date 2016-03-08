


Router.route("/history", {
  name:"clinicalHistory",
  template:"clinicalHistory"
});

Template.clinicalHistory.helpers({
  hasHistory: function (){
    if (ClinicalImpressions.find().count() > 0) {
      return true;
    } else {
      return false;
    }
  },
  clinicalImpressions: function (){
    return ClinicalImpressions.find();
  }
});

Template.clinicalHistory.events({
  "click #elementId": function (event, template){

  }
});
