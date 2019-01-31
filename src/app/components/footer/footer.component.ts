import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  bottomMenu: any[] = [
    {
      title: 'About',
      url: 'about'
    },
    {
      title: 'Features',
      url: 'features'
    },
    {
      title: 'Terms',
      url: 'terms'
    },
    {
      title: 'Privacy',
      url: 'privacy'
    },
    {
      title: 'Support',
      url: 'support'
    },
    {
      title: 'Impressum',
      url: 'impressum'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
