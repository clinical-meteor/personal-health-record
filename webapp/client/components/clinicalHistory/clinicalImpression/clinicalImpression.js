

Template.clinicalImpression.events({
  "click .fa-remove": function (event, template){
    ClinicalImpressions.remove(this._id);
  }
});


Template.clinicalImpression.helpers({
  getDate: function (){
    if (this.date) {
      return moment(this.date).format("MMM DD, YYYY");
    } else {
      return "Sometime in the past...";
    }
  }
});
