




Template.clinicalImpressionInput.helpers({
  rendered: function (){

  }
});

Template.clinicalImpressionInput.events({
  "change, keyup #clinicalImpressionInput": function (event, template){
    if (event.keyCode === 13) {
      ClinicalImpressions.insert({
        description: $("input[name=clinicalImpressionInput]").val()
      });
    }
  }
});
