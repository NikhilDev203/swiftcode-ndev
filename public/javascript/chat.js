var app = angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function ($scope){
	$scope.messages=[
    {		sender:"BOT",
            text:"Hi 1",
            time :"1:10 PM"
    },
    {		sender:"USER",
            text:"how",
            time :"1:10 PM"
            
    },
    {
            text:"r"
    },
    {
            text:"u?"
           
    }
        ];
var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };

}); 