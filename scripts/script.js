console.log( 'script.js sourced!!!' );

function firstFunction(){
  alert( 'this is fine' );
}

var secondFunction = function(){
  console.log( 'in the other function' );
  var peopleOnThisCall = [ 'Brent', 'Cody', 'Debbie', 'Ian', 'Jazzy', 'Johanna', 'Lisa', 'Luis', 'Ross' ];
  console.log( 'people on this call:', peopleOnThisCall );
  /// how many people are in the call today?
  // use ARRAY.length
  // I think Cody got this before I did...
  console.log( 'num of people on call:', peopleOnThisCall.length );
}

// lisa said to do this to call the function
firstFunction();
secondFunction();
