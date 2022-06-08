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

function wrapAdjective (arterisk){
  return function(value="special"){
   return `You are ${arterisk}${value}${arterisk}!`
 } 

}
wrapAdjective("%")("a dedicated programmer");
