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
      title: 'The #1 most used Android shopping list app is now available free for iOS',
      description: 'Start creating and sharing shopping lists with friends and family.',
      action: () => alert('Hello'),
      buttonTitle: 'Download',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/image_1.png',
      bgImagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_1.jpg'
    },
    {
      id: '2',
      title: 'UniverSL',
      description: 'Browse and save our list ideas directly to your Out of Milk account. Join our network of recipe bloggers to make your recipes interactive, and keep your fans engaged.',
      action: () => alert('Hello'),
      buttonTitle: 'Sign up',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/image_2.png',
      bgImagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_2.jpg'
    },
    {
      id: '3',
      title: 'The Out of Milk Web App',
      description: 'Sign in to create & share shopping lists!',
      action: () => alert('Hello'),
      buttonTitle: 'Sign up',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/image_3.png',
      bgImagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_3.jpg'
    },
    {
      id: '4',
      title: 'Title',
      description: 'Lorem ipsum',
      action: () => alert('Hello'),
      buttonTitle: 'Sign up',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/image_4.png',
      bgImagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_4.jpg'
    }
  ];
  shoppingList: any[] = [
    {
      title: 'Share Your List',
      icon: 'home'
    },
    {
      title: 'Add From History',
      icon: 'home'
    },
    {
      title: 'Barcode Scanner',
      icon: 'home'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  subscribeToNewsLetter(form) {
    console.log('subscribeToNewsLetter', form);
  }
}
