var app = function(){
  var query = document.getElementById('email').value;
  var api = 'https://haveibeenpwned.com/api/v2/breachedaccount/';
  var url = api + query;
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status === 404) console.log("Nothing to see here");
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  console.log(jsonString);
  var breachData = JSON.parse(jsonString);
  populateBreach(breachData);
}

var populateBreach = function(breachData){
  console.log(breachData);

  var ul = document.getElementById('list-of-breaches');

  breachData.forEach(function(breach){
    var titleLi = document.createElement('li');
    var descriptionLi = document.createElement('li');
    var compromisedData1 = document.createElement('li');
    var compromisedData2 = document.createElement('li');
    var compromisedData3 = document.createElement('li');
    titleLi.innerText = breach.Title;
    descriptionLi.innerText = breach.Description;
    compromisedData1.innerText = breach.DataClasses[0];
    compromisedData2.innerText = breach.DataClasses[1];
    compromisedData3.innerText = breach.DataClasses[2];
    ul.appendChild(titleLi);
    ul.appendChild(descriptionLi);
    ul.appendChild(compromisedData1);
    ul.appendChild(compromisedData2);
    ul.appendChild(compromisedData3);
  });
}


window.addEventListener('load', app)
