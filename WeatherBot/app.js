/*-----------------------------------------------------------------------------
A simple echo bot for the Microsoft Bot Framework. 
-----------------------------------------------------------------------------*/

var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    // appId: process.env.MicrosoftAppId,
    // appPassword: process.env.MicrosoftAppPassword,
    // stateEndpoint: process.env.BotStateEndpoint,
    // openIdMetadata: process.env.BotOpenIdMetadata
    appId: null,
    appPassword: null,
    stateEndpoint: process.env.BotStateEndpoint,
    openIdMetadata: process.env.BotOpenIdMetadata  

});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

/*----------------------------------------------------------------------------------------
* Bot Storage: This is a great spot to register the private state storage for your bot. 
* We provide adapters for Azure Table, CosmosDb, SQL Azure, or you can implement your own!
* For samples and documentation, see: https://github.com/Microsoft/BotBuilder-Azure
* ---------------------------------------------------------------------------------------- */

// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector);

// Make sure you add code to validate these fields
// var luisAppId = process.env.LuisAppId;
// var luisAPIKey = process.env.LuisAPIKey;
var luisAppId ="ENTER LUIS APP ID"
var luisAPIKey = "ENTER LUIS API KEY";

var luisAPIHostName = process.env.LuisAPIHostName || 'westus.api.cognitive.microsoft.com';

const LuisModelUrl = 'https://' + luisAPIHostName + '/luis/v1/application?id=' + luisAppId + '&subscription-key=' + luisAPIKey;

// Main dialog with LUIS
var recognizer = new builder.LuisRecognizer(LuisModelUrl);
var intents = new builder.IntentDialog({ recognizers: [recognizer] })
/*
.matches('<yourIntent>')... See details at http://docs.botframework.com/builder/node/guides/understanding-natural-language/
*/
// .onDefault((session) => {
//     session.send('Sorry, I did not understand \'%s\'.', session.message.text);
// });

intents.matches("Weather.GetForecast", [
    function (session, results) {
    session.send("you asked for weather forecast");
    }])
intents.matches("Weather.GetCondition", [
    function (session, results) {
    session.send("you asked for weather condition");
}])
intents.matches('None', [
    function (session, results) {
    session.send('Sorry, I did not understand \'%s\'.', session.message.text);
    }
])

    

bot.dialog('/', intents);    

