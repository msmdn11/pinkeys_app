import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { SecondPage } from '../';

@IonicPage()
@Component({
  templateUrl: 'slides.html'
})
export class SlidesPage {
  slides = [
    {
      title: "<b>C</b>reate",
      description: "Generate your first privacy key with ease. It will be unique to you, as the keys you use everywhere.",
      image: "assets/imgs/Create-key-100.png"
    },
    {
      title: "<b>S</b>earch",
      description: "Search other people's privacy keys. Use them to grant access to the web, exchange messages and many other undiscovered posiblilties.",
      image: "assets/imgs/Search-key-100.png"
    },
    {
      title: "<b>S</b>hare",
      description: "Share even your own with other or be part of a group where everyone participate and make exchanges.",
      image: "assets/imgs/Share-key-100.png"
    },
    {
      title: "<b>U</b>se",
      description: "Use this technology on everything and everywhere from servers, laptops, mobile, and the web. The limits are yet to be found.",
      image: "assets/imgs/Use-key-100.png"
    }
  ];

    constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController) {

    }

  gotoSignUp() {
  	this.navCtrl.push(SecondPage);
  }
}
