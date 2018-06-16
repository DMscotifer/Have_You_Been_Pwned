const app = function(){
  query = document.querySelector('.form').value;
  const url = "https://haveibeenpwned.com/api/v2/breachedaccount/" + query;
  makeRequest(url, requestComplete);

}

const clickButton = document.getElementById("email");
clickButton.addEventListener('click', app);

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const requestComplete = function() {
  if(this.status === 404) {
    console.log('No breached accounts');
  } else if(this.status !== 200){
    const result = JSON.parse(this.response);
    console.log(result);
  }
}

window.addEventListener('load', app);
