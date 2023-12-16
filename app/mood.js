import document from "document";
import { vibration } from "haptics";

let moodSlime;
let timeTillSad;

export function moodBoot(slime) {
  moodSlime = slime
}

export function makeHappy(time){
  if(moodSlime.image === "images/slimes/sleepSlime_1.png"){
    console.log("not activated as asleep");
  }
  else {

    moodSlime.image  = "images/slimes/mainSlime_1.png"

    if (timeTillSad){
      clearTimeout(timeTillSad);
    }



    timeTillSad = setTimeout(() => makeSad(), time);
  }
}

function makeSad(){

  vibration.start("nudge-max");

  setInterval(slimeCheckIn, 5 * 60 * 1000);

  moodSlime.image  = "images/slimes/sadSlime_1.png"
}

function slimeCheckIn(){

  if(moodSlime.image  = "images/slimes/sadSlime_1.png"){
    vibration.start("nudge");
  }

}