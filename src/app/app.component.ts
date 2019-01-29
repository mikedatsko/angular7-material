import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  menu: any[] = [
    {
      title: 'Why hiber',
      path: 'whyhiber',
      hoverColor: '#25b9c6'
    },
    {
      title: 'Feedback',
      path: 'feedback',
      hoverColor: '#25b9c6'
    },
    {
      title: 'Try now',
      path: 'login',
      className: 'login',
      hoverColor: '#25b9c6'
    }
  ];
}
