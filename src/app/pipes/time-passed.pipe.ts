import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
  pure: false
})

export class TimePassedPipe implements PipeTransform {

  transform(entryTime: Date) {
    let currentTime = new Date().getTime();
    let timePassed = currentTime - entryTime.getTime();
    let time = Math.round(timePassed/60000)
    if (time === 0){
      return " less than a minute";
    } if (time === 1) {
      return time + " minute";
    } else {
      return time + " minutes";
    }
  }

}
