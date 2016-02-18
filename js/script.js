'use strict';

function myFunc() {
  console.log('Hi');
  repeat();
}
function repeat(){
	setTimeout(myFunc, 1000);	
}
myFunc();
