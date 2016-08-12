console.log( 'script.js sourced!!!' );

function firstFunction(){
  alert( 'this is fine' );
}

var secondFunction = function(greeting){
  console.log( 'in the other function' );
  var peopleOnThisCall = [];

  var newPerson = {
    name: 'Millie',
    homeTown: 'Shoreview, suburb of stp'
  }

  peopleOnThisCall.push(newPerson);

  newPerson = {
    name: 'Dev',
    homeTown: 'Neptune'
  }

  peopleOnThisCall.push(newPerson);

  console.log('People on the call array:', peopleOnThisCall);

  // console.log( 'people on this call:', peopleOnThisCall );
  // / how many people are in the call today?
  // use ARRAY.length
  // I think Cody got this before I did...
  console.log( 'num of people on call:', peopleOnThisCall.length );

  for (var i = 0; i < peopleOnThisCall.length; i++) {
    console.log(greeting + ", " + peopleOnThisCall[i].name, "who is from", peopleOnThisCall[i].homeTown );
  }
};

// lisa said to do this to call the function
firstFunction();
secondFunction("hello");
