import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselSlides: any[] = [
    {
      id: '1',
      title: 'The #1 grocery app based on AI and Machine learning',
      titleTab: 'Get Hiber',
      description: 'Start ordering grocery in 1-Click',
      action: () => alert('App developement in progress. Stay stuned'),
      buttonTitle: 'Download',
      imagePath: '/assets/home/carousel/image_1.png',
      bgImagePath: '/assets/home/carousel/carousel_1.jpg'
    },
    {
      id: '2',
      title: 'Hiber helps you save time',
      titleTab: 'Save Time',
      description: 'Automatic basket creation with no product navigation',
      action: () => alert('App developement in progress. Stay stuned'),
      buttonTitle: 'Try now',
      imagePath: '/assets/home/carousel/image_2.png',
      bgImagePath: '/assets/home/carousel/carousel_2.jpg'
    },
    {
      id: '3',
      title: 'Hiber basket is 4% cheaper',
      titleTab: 'Save Money',
      description: 'Hiber seemlessly creates the optimized basket',
      action: () => alert('App developement in progress. Stay stuned'),
      buttonTitle: 'Try now',
      imagePath: '/assets/home/carousel/image_3.png',
      bgImagePath: '/assets/home/carousel/carousel_3.jpg'
    },
    {
      id: '4',
      title: 'Auto-Redeem of coupons and vouchers',
      titleTab: 'Save Effort',
      description: 'Helps you further reduce your daily basket price',
      action: () => alert('App developement in progress. Stay stuned'),
      buttonTitle: 'Try now',
      imagePath: '/assets/home/carousel/image_4.png',
      bgImagePath: '/assets/home/carousel/carousel_4.jpg'
    }
  ];
  shoppingList: any[] = [
    {
      title: 'Recurring ordering',
      icon: 'autorenew'
    },
    {
      title: 'Home delivery',
      icon: 'home'
    },
    {
      title: 'Pick up from hiber mobile store',
      icon: 'shopping_basket'
    },
    {
      title: 'Near trusted supermarkets',
      icon: 'store'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  subscribeToNewsLetter(form) {
    console.log('subscribeToNewsLetter', form);
  }
}
