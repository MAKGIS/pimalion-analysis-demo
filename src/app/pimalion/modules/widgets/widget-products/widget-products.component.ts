import { Component, Input, OnInit } from '@angular/core';


import { Product } from 'src/app/shared/interfaces/product';
import { RootService } from 'src/app/shared/services/root.service';

@Component({
    selector: 'app-widget-products',
    templateUrl: './widget-products.component.html',
    styleUrls: ['./widget-products.component.scss']
})
export class WidgetProductsComponent implements OnInit  {
    @Input() header = '';
    @Input() products: Product[] = [];

    constructor(public root: RootService) { }

    ngOnInit(): void {
        console.log('WidgetProductsComponent.ngOnInit() products -> %O', this.products);
    }
}
