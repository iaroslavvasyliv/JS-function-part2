//'use strict';

//function myFunc() {
//  console.log('Hi');
//  repeat();
//}
//function repeat(){
//	setTimeout(myFunc, 1000);	
//}
//myFunc();



//function makeMyOwnInterval() {
//    console.log('Hi!');
//    setTimeout(makeMyOwnInterval, 1000);
//}
//makeMyOwnInterval();






function doMyInterval() {
    
    console.log('Hi!');
    setTimeout(arguments.callee, 1000);
}
doMyInterval();
