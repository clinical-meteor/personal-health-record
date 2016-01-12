


Router.route("/history", {
  name:"clinicalHistory",
  template:"clinicalHistory"
});

Template.clinicalHistory.helpers({
  clinicalImpressions: function (){
    return ClinicalImpressions.find();
  }
});

Template.clinicalHistory.events({
  "click #elementId": function (event, template){

  }
});
