




Template.clinicalImpressionInput.helpers({
  backgroundColor: function (){
    return Theme.backgroundColor();
  }
});

Template.clinicalImpressionInput.events({
  "change #clinicalImpressionInput": function (event, template){
    if (event.keyCode === 13) {
      ClinicalImpressions.insert({
        description: $("input[name=clinicalImpressionInput]").val()
      });
    }
  },
  "click #submitImpression": function (event, template){
    var newImpression = {
      "patient" : null,
      "assessor" : "",
      "status" : "",
      "date" : new Date(),
      "description" : $("input[name=clinicalImpressionInput]").val(),
      "previous" : "",
      "problem" : "",
      "triggerCodableConceptSchema" : "",
      "triggerReference" : "",
      "protocol" : "",
      "summary" : "",
      "resolved" : "",
      "prognosis" : "",
      "plan" : "",
      "action" : "",
      "patient": {
        "display" : Meteor.user().fullName(),
        "reference" : Meteor.userId(),
      }
    };

    ClinicalImpressions.insert(newImpression);

    // ClinicalImpressions.insert({
    //   description: $("input[name=clinicalImpressionInput]").val()
    // });
  }
});
