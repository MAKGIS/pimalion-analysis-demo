import { Component, Input } from '@angular/core';


import { ProductFeaturesSection} from 'src/app/shared/interfaces/product';
import { Review } from 'src/app/shared/interfaces/review';

import { specification } from 'src/data/shop-product-spec';
import { reviews } from 'src/data/shop-product-reviews';


@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs.component.html',
    styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent {
    @Input() withSidebar = false;
    @Input() tab: 'description'|'specification'|'reviews' = 'description';

    specification: ProductFeaturesSection[] = specification;
    reviews: Review[] = reviews;

    constructor() { }
}
