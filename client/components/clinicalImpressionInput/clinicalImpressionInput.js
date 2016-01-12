




Template.clinicalImpressionInput.helpers({
  rendered: function (){

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
    ClinicalImpressions.insert({
      description: $("input[name=clinicalImpressionInput]").val()
    });
  }
});
