Meteor.methods({
  dropClinicalImpressions: function (){
    ClinicalImpressions.drop();
  },
  generateSampleData: function (){
    console.log('generateSampleData');

    var newImpression = {
      "patient" : null,
      "assessor" : "",
      "status" : "",
      "date" : new Date(),
      "description" : faker.lorem.sentence(),
      "previous" : "",
      "problem" : "",
      "triggerCodableConceptSchema" : "",
      "triggerReference" : "",
      "protocol" : "",
      "summary" : "",
      "resolved" : "",
      "prognosis" : "",
      "plan" : "",
      "action" : ""
    };

    if (Meteor.user()) {
      newImpression.patient = {
        "display" : Meteor.user().fullName(),
        "reference" : Meteor.userId(),
      };
    } else {
      newImpression.patient = {
        "display" : "System",
        "reference" : "",
      };
    }

    ClinicalImpressions.insert(newImpression);

  }
});
