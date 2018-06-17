var app = function(){
  var url = 'https://haveibeenpwned.com/api/v2/breachedaccount/scott_14_@hotmail.co.uk';
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  //create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
  //set the type of request we want with the url we want to call
  request.open("GET", url);
  //set the callback we want it to use when it has completed the call
  request.addEventListener('load', callback);
  //send the request!
  request.send();
}

var requestComplete = function(){
  if(this.status === 404) console.log("Nothing to see here");
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  console.log(jsonString);
  var countries = JSON.parse(jsonString);
  var country = countries[0];
}

window.addEventListener('load', app)
