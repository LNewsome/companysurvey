var survey = new Survey.Survey({
    pages: [{
        name: "page1",
        questions: [{
            type: "checkbox",
            choices: ["one", {
                value: "two",
                text: "second value"
            }, {
                value: "three",
                text: "third value"
            }],
            name: "question1"
        }, {
            type: "checkbox",
            choices: ["one", {
                value: "two",
                text: "second value"
            }, {
                value: "three",
                text: "third value"
            }],
            name: "question2"
        }]
    }, {
        name: "page2"
    }]
});
survey.onComplete.add(function(s) {
    alert("The results are:" + JSON.stringify(s.data));
});
survey.render("mySurveyJSName");

var surveyWindow = new Survey.SurveyWindow(surveyJSON);
surveyWindow.show();
//Use onComplete event to save the data
surveyWindow.survey.onComplete.add(sendDataToServer);

var survey = new Survey.Survey(surveyJSON, "surveyContainer");
//Use onComplete event to save the data
survey.onComplete.add(sendDataToServer);

function sendDataToServer(survey) {
  var resultAsString = JSON.stringify(survey.data);
  alert(resultAsString); //send Ajax request to your web server.
});

function sendDataToServer(survey) {
  //You should get the Guid for storing survey data in dxSurvey.com
  survey.sendResult('e544a02f-7fff-4ffb-b62d-6a9aa16efd7c');
});
