

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, merge } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

// import { ShopService } from '../../../shared/api/shop.service';
import { ShopPimalionService } from 'src/app/pimalion/shared/api/shop-pimalion.service'; // '/shared/api/shop.service';

// import { Product } from '../../../shared/interfaces/product';
// import { posts } from '../../../../data/blog-posts';
// import { Category } from '../../../shared/interfaces/category';
import { Brand } from '../../../shared/interfaces/brand';

// import { BlockHeaderGroup } from '../../../shared/interfaces/block-header-group';




@Component({
    selector: 'app-page-pimalion-categories',
    templateUrl: './page-pimalion-categories.component.html',
    styleUrls: ['./page-pimalion-categories.component.scss']
})
export class PagePimalionCategoriesComponent implements OnInit, OnDestroy {

    destroy$: Subject<void> = new Subject<void>();

    // brands$: Observable<Brand[]>;
    // popularCategories$: Observable<Category[]>;

    pimalionCategories$: Observable<any[]>;


    constructor(
        private shopPimalionService: ShopPimalionService,
    ) { }

    ngOnInit(): void {

        // this.brands$ = this.shopService.getPopularBrands();
/*
        this.popularCategories$ = this.shopService.getCategoriesBySlug([
            'power-tools',
            'hand-tools',
            'machine-tools',
            'power-machinery',
            'measurement',
            'clothes-and-ppe',
        ], 1);
*/
        const body = {
                groupFields: [
                    {
                        key: 'Nomenclature Famille fournisseur',
                        value: null
                    }
                ],
                selection: [],
                page: 0,
                pageSize: 10,
                isManaged: true,
                sort: [],
                productStates: []
            };

        // this.pimalionCategories$ =  this.pimalionCloudService.getCategoriesList(body);
        this.pimalionCategories$ =  this.shopPimalionService.getCategoriesList(body);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
