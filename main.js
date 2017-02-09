
var disasterVictims = prompt('How many disaster victims would you like to enter?');


var names = [];
var number = [];
var street = [];

for (var i= 0; i < disasterVictims; i++){
  if (disasterVictims > 0){
    names.push(prompt("What is the name of the victim?"));
    number.push(prompt ("What is " + names[0+i] + "'s phone number?"));
    street.push(prompt ("What is "+ names[0+i] + "'s street address?'"));
  }else {
    alert ("There are no victims, that is great news!");
}};


var volunteers = prompt('How many Volunteers do we have?');

var vol = [];
var volNum = [];
var volStreet = [];

for (var i= 0; i < volunteers; i++){
  if (volunteers > 0){
    vol.push(prompt("What is the name of the volunteer?"));
    volNum.push(prompt ("What is " + vol[0+i] + "'s phone number?"));
    volStreet.push(prompt ("What is "+ vol[0+i] + "'s street address?'"));
  }else {
    alert ("We need to find some volunteers ASAP!");
  }};

  alert("There are " + disasterVictims + " disaster victims in need of help. There names are " + names.join(", ") + ".\n \nThere are " + volunteers + " volunteers here to help. There names are " + vol.join(", ")+".");
