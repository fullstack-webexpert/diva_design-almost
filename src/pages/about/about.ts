import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(private callNumber: CallNumber) { }

  linkTo(item: string) {
    window.open(item, '_system', 'location=yes');
  }

  callMe() {
    this.callNumber.callNumber("18001010101", true)
    	.then(() => console.log('Launched dialer!'))
  		.catch(() => console.log('Error launching dialer'));
  }
}
