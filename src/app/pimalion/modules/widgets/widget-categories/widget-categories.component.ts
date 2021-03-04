import { Component, Input, OnInit } from '@angular/core';


import { RootService } from 'src/app/shared/services/root.service';

@Component({
    selector: 'app-widget-categories',
    templateUrl: './widget-categories.component.html',
    styleUrls: ['./widget-categories.component.scss']
})
export class WidgetCategoriesComponent implements OnInit {
    @Input() location: 'blog'|'shop' = 'blog';
    @Input() categories: any[] = [];

    constructor(
        public root: RootService,
    ) {

    }

    ngOnInit(): void {
        console.log('WidgetCategoriesComponent.ngOnInit() categories -> %O', this.categories);
    }
}
