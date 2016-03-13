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

    var name = $('h1');

    // console.log("NAME: ", name[0].children[0].data);

    var metas = $('.meta');

    var historicalDate;
    var endOfWellFormattedDate;

    metas.each(function (j, meta){
      historicalDate = false;
      endOfWellFormattedDate = false;

      if (meta && meta.next && meta.next.next && meta.next.next.attribs && (meta.next.next.attribs.class === "comment")) {
        //console.log(meta.next.next.children[0].data);

        var endOfWellFormattedDate = meta.children[0].data.split(" ", 4).join(" ").length;
        historicalDate = new Date(meta.children[0].data.substring(0, endOfWellFormattedDate));

        var newImpression = {
          "patient" : null,
          "assessor" : "",
          "status" : "",
          "date" : historicalDate,
          "description" : meta.next.next.children[0].data,
          //"description" : element.children[0].data,
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
            "display" : name[0].children[0].data,
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



    // var comments = $('.comment');
    //
    // comments.each(function(i, element){
    //   if (element.children && element.children[0]) {
    //     //console.log($(element.children[0].parent.prev).html());
    //
    //     console.log(element.prev.html());
    //
    //     // var newDateString = $(element.children[0].id).prev().val();
    //     // console.log('newDateString', newDateString);
    //
    //     var newImpression = {
    //       "patient" : null,
    //       "assessor" : "",
    //       "status" : "",
    //       "date" : new Date(),
    //       "description" : element.children[0].data,
    //       "previous" : "",
    //       "problem" : "",
    //       "triggerCodableConceptSchema" : "",
    //       "triggerReference" : "",
    //       "protocol" : "",
    //       "summary" : "",
    //       "resolved" : "",
    //       "prognosis" : "",
    //       "plan" : "",
    //       "action" : ""
    //     };
    //
    //     if (Meteor.user()) {
    //       newImpression.patient = {
    //         "display" : Meteor.user().fullName(),
    //         "reference" : Meteor.userId(),
    //       };
    //     } else {
    //       newImpression.patient = {
    //         "display" : "System",
    //         "reference" : "",
    //       };
    //     }
    //
    //     ClinicalImpressions.insert(newImpression);
    //
    //   }
    // });



    console.log('Scanning selected files...');
  }
});
