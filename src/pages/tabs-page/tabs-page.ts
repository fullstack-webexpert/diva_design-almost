import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';

import { AboutPage } from '../about/about';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  homeRoot: any = AboutPage;
  socialRoot: any = SpeakerListPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams, private callNumber: CallNumber) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

    linkTo(item: string) {
    window.open(item, '_system', 'location=yes');
  }


  callMe() {
    this.callNumber.callNumber("18001010101", true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
  }

}

