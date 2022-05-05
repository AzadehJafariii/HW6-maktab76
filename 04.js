
// Create a function to build a Clock in 12 hours(with AM & PM ) and show The current
// Time in the console:



function currentTime(time){
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
let time = new Date();
console.log(currentTime(time));






// date with week day:
y = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
console.log(y);