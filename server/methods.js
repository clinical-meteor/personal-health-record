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

  },
  scanFacebookFiles: function (filepath){
    console.log('scanFacebookFiles', filepath);

    var fs = Npm.require('fs');
    var path = Npm.require('path');

    var data = fs.readFileSync(filepath, 'utf8');
    // var data = fs.readFileSync('/Users/abigailwatson/Downloads/facebook/html/wall.htm', 'utf8');

    //var cheerio = Npm.require('cheerio');
    $ = cheerio.load(data);

    var comments = $('.comment');

    comments.each(function(i, element){
      if (element.children && element.children[0]) {
        //console.log(element.children[0].data);

        var newImpression = {
          "patient" : null,
          "assessor" : "",
          "status" : "",
          "date" : new Date(),
          "description" : element.children[0].data,
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


    // if (selectedFile) {
    //   var fileReader = new FileReader();
    //   fileReader.onload = function (e) {
    //
    //     //var jsonRepresentationOfCsv = CSV.parse(fileReader.result);
    //     //console.log('jsonRepresentationOfCsv', jsonRepresentationOfCsv);
    //     //Session.set('uploadedData', jsonRepresentationOfCsv);
    //   };
    //   fileReader.onerror = function (e) {
    //     throw 'Error reading CSV file';
    //   };
    //
    //   fileReader.readAsText(file);
    // }


    console.log('Scanning selected files...');
  }
});
