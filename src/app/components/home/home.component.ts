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
      title: 'S1',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_1.jpg'
    },
    {
      id: '2',
      title: 'S2',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_2.jpg'
    },
    {
      id: '3',
      title: 'S3',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_3.jpg'
    },
    {
      id: '4',
      title: 'S4',
      imagePath: 'https://ddnh378lrqdgf.cloudfront.net/static/images/new/slides/background_4.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  subscribeToNewsLetter(form) {
    console.log('subscribeToNewsLetter', form);
  }
}
