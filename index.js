// code your solution here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
activity()
 

// let mondayWork = function(activity= `go to the office`){
//   return `This Monday, I will work ${activity}.`
// }
function mondayWork(activity = 'go to the office'){
   return `This Monday, I will ${activity}.`
}

function wrapAdjective (or){
  return function(value="special"){
   return `You are ${or}${value}${or}!`
 } 

}
wrapAdjective("%")("a dedicated programmer");
