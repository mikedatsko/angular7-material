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
      title: 'Product',
      path: 'product',
      hoverColor: '#A358DF'
    },
    {
      title: 'Use Cases',
      path: 'use-cases',
      hoverColor: '#00CC6F',
      subMenu: [
        {
          title: 'Project Management',
          path: 'Project-Management-Software'
        },
        {
          title: 'Creative Agencies',
          path: 'Creative-Projects-And-Agencies'
        },
        {
          title: 'Marketing & PR',
          path: 'Marketing-Project-Management'
        },
        {
          title: 'Managing Clients',
          path: 'Client-Project-Management'
        },
        {
          title: 'Product Management',
          path: 'Product-Management-Software'
        },
        {
          title: 'Agile Development',
          path: 'Agile-Project-Management'
        },
        {
          title: 'Sales & Biz Dev',
          path: 'Sales-CRM'
        },
        {
          title: 'Orders & Production',
          path: 'Production-Management-Tool'
        },
        {
          title: 'HR & Recruitment',
          path: 'HR-Management-Software'
        },
        {
          title: 'Team Management',
          path: 'Team-management'
        }
      ],
      subMenuMoreLink: {
        title: 'See all use cases',
        path: 's/software-uses'
      }
    },
    {
      title: 'Why monday.com',
      path: '',
      hoverColor: '#ff0476',
      subMenu: [
        {
          title: 'Find Out Why',
          path: 'why-monday'
        },
        {
          title: 'Customer Stories',
          path: 'stories'
        },
        {
          title: 'Security',
          path: 'terms/all'
        },
        {
          title: 'Enterprise',
          path: 'enterprise'
        }
      ]
    },
    {
      title: 'Pricing',
      hoverColor: '#00A9FF',
      path: 'pricing'
    },
    {
      title: 'Log in',
      path: 'login',
      className: 'login'
    }
  ];
}
