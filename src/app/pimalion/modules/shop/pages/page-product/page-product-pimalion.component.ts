import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';


import { Product } from 'src/app/shared/interfaces/product';

import { ShopPimalionService } from 'src/app/pimalion/shared/api/shop-pimalion.service';

@Component({
    selector: 'app-page-product-pimalion',
    templateUrl: './page-product-pimalion.component.html',
    styleUrls: ['./page-product-pimalion.component.scss']
})
export class PageProductPimalionComponent implements OnInit {

    layout: 'standard'|'columnar'|'sidebar' = 'standard';
    sidebarPosition: 'start'|'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

    productHtml: string;

    product: Product;
    // productId: string;
    // relatedProducts$: Observable<Product[]>;

    constructor(
        private shop: ShopPimalionService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {

        this.route.data.subscribe(data => {

            // console.log('PageProductPimalionComponent.ngOnInit()  this.route.data -> %O', this.route.data);

            this.layout = data.layout || this.layout;
            this.sidebarPosition = data.sidebarPosition || this.sidebarPosition;

            this.product = data.product;

            this.productHtml = data.product.pimalionHtml;
        });
    }
}
