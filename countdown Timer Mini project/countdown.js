
/*
function countDownTimer(){
const currentTime=new Date().getTime();
//distance covered
const distanceCovered=currentTime-startDate;
//distance pending
const distancePending=endDate-currentTime;
//calculation of days,mins,hours,seconds
const miliSecondsInDays=(24*60*60*1000);
const miliSecondsInHours=(60*60*1000);
const miliSecondsInMin=(60*1000);
const miliSecondsInSec=(1000);


//calculating days
const days=Math.floor((distancePending / miliSecondsInDays));
//calculation hours
const hours=Math.floor((distancePending % miliSecondsInDays / miliSecondsInHours));
//calculating  mins
const minutes=Math.floor((distancePending % miliSecondsInHours/miliSecondsInMin));
//calculating secs
const seconds=Math.floor((distancePending % miliSecondsInMin/miliSecondsInSec));
//populate in UI
document.querySelector(".days").innerHTML=days;
document.querySelector(".hours").innerHTML=hours;
document.querySelector(".minutes").innerHTML=minutes;
document.querySelector(".seconds").innerHTML=seconds;

//calculating width percentage for progress bar
const totalDistance=endDate-startDate;
const percentageDistance=(distanceCovered/totalDistance)*100;
//inserting in width
document.querySelector(".progressbar").style.width=percentageDistance + "%";

//if distance gets negative
if(distancePending<0){
    clearInterval(x);
    document.querySelector(".countdowncontainer").innerHTML="EXPIRED";
    document.querySelector(".progressbar").style.width="100%";
}


}
*/
/*
//inserting startdate and end date in UI
document.querySelector(".field1input").value=startDateInput;
document.querySelector(".field2input").value=endDateInput;

//intiazling stratdate and enddate
const endDate=new Date(endDateInput ).getTime();
const startDate=new Date(startDateInput).getTime();
*/




//count down
let countDown;
//selecting button
const eventbutton=document.querySelector(".eventbutton1");
//addingeventlistener
eventbutton.addEventListener("click",()=>{
    //inserting startdate and end date in UI
const startDateInput=document.querySelector(".field1input").value;
const endDateInput=document.querySelector(".field2input").value;
//intiazling stratdate and enddate
const endDate=new Date(endDateInput ).getTime();
const startDate=new Date(startDateInput).getTime();

//displaying alert message
// if(NaN(endDate) || NaN(startDate)){
//     alert("please enter valid dates");
//     return ;
// }

if(startDate>endDate){
    alert("enter valid date format");
    return ;
}


//count down function
    countDown = setInterval(function countDownTimer() {
        const currentTime = new Date().getTime();
        // Distance covered
        const distanceCovered = currentTime - startDate;
        // Distance pending
        const distancePending = endDate - currentTime;
    
        // Calculation of days, hours, minutes, seconds
        const miliSecondsInDays = (24 * 60 * 60 * 1000);
        const miliSecondsInHours = (60 * 60 * 1000);
        const miliSecondsInMin = (60 * 1000);
        const miliSecondsInSec = (1000);
    
        // Calculating days
        const days = Math.floor(distancePending / miliSecondsInDays);
        // Calculating hours
        const hours = Math.floor((distancePending % miliSecondsInDays) / miliSecondsInHours);
        // Calculating minutes
        const minutes = Math.floor((distancePending % miliSecondsInHours) / miliSecondsInMin);
        // Calculating seconds
        const seconds = Math.floor((distancePending % miliSecondsInMin) / miliSecondsInSec);
    
        // Populate in UI
        document.querySelector(".days").innerHTML = days;
        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
    
        // Calculating width percentage for progress bar
        const totalDistance = endDate - startDate;
        const percentageDistance = (distanceCovered / totalDistance) * 100;
        // Inserting in width
        document.querySelector(".progressbar").style.width = percentageDistance + "%";
    
        // If distance gets negative
        if (distancePending < 0) {
            clearInterval(countDown);
            document.querySelector(".countdowncontainer").innerHTML = "EXPIRED";
            document.querySelector(".progressbar").style.width = "100%";
        }
    
    }, 1000);
})

//selecting reset button
const resetbutton1=document.querySelector(".resetbutton");
resetbutton1.addEventListener("click",()=>{
//resteing input fileds
   document.querySelector(".field1input").value="";
   document.querySelector(".field2input").value=""; 
//clearing timeinterval
if (countDown) {
    clearInterval(countDown);
}
//integrating 00 values to days minutes and hours
        document.querySelector(".days").innerHTML = "00";
        document.querySelector(".hours").innerHTML = "00";
        document.querySelector(".minutes").innerHTML = "00";
       document.querySelector(".seconds").innerHTML = "00";
// setting progress bar
document.querySelector(".progressbar").style.width="0%";
});












/*
let x = setInterval(function countDownTimer() {
    const currentTime = new Date().getTime();
    // Distance covered
    const distanceCovered = currentTime - startDate;
    // Distance pending
    const distancePending = endDate - currentTime;

    // Calculation of days, hours, minutes, seconds
    const miliSecondsInDays = (24 * 60 * 60 * 1000);
    const miliSecondsInHours = (60 * 60 * 1000);
    const miliSecondsInMin = (60 * 1000);
    const miliSecondsInSec = (1000);

    // Calculating days
    const days = Math.floor(distancePending / miliSecondsInDays);
    // Calculating hours
    const hours = Math.floor((distancePending % miliSecondsInDays) / miliSecondsInHours);
    // Calculating minutes
    const minutes = Math.floor((distancePending % miliSecondsInHours) / miliSecondsInMin);
    // Calculating seconds
    const seconds = Math.floor((distancePending % miliSecondsInMin) / miliSecondsInSec);

    // Populate in UI
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    // Calculating width percentage for progress bar
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered / totalDistance) * 100;
    // Inserting in width
    document.querySelector(".progressbar").style.width = percentageDistance + "%";

    // If distance gets negative
    if (distancePending < 0) {
        clearInterval(x);
        document.querySelector(".countdowncontainer").innerHTML = "EXPIRED";
        document.querySelector(".progressbar").style.width = "100%";
    }

}, 1000);
*/
