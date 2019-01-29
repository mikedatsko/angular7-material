import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-why-hiber',
    templateUrl: './why-hiber.component.html',
    styleUrls: ['./why-hiber.component.scss']
})
export class WhyHiberComponent implements OnInit, OnDestroy {
    shoppingList: any[] = [
        {
            title: 'Flexible ordering',
            icon: 'home'
        },
        {
            title: 'Intelligent cart creation',
            icon: 'home'
        },
        {
            title: 'Order discounting ',
            icon: 'home'
        },
        {
            title: 'Cheap home delivery for just 2€',
            icon: 'home'
        }
    ];

    ngOnInit() {
    }
    ngOnDestroy() {
    }
}