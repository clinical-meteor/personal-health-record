Meteor.publish("clinicalImpressions", function (argument){
  return ClinicalImpressions.find();
});
