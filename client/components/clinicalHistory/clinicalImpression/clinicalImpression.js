

Template.clinicalImpression.events({
  "click #event": function (event, template){

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
