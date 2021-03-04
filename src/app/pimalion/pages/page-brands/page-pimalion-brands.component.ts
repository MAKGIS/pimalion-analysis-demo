
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, merge } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';


import { PimalionCloudService } from './../../shared/services/pimalion-cloud.service';

import { ShopPimalionService } from 'src/app/pimalion/shared/api/shop-pimalion.service'; // '/shared/api/shop.service';

@Component({
    selector: 'app-page-pimalion-brands',
    templateUrl: './page-pimalion-brands.component.html',
    styleUrls: ['./page-pimalion-brands.component.scss']
})
export class PagePimalionBrandsComponent implements OnInit, OnDestroy {

    destroy$: Subject<void> = new Subject<void>();

    pimalionBrands$: Observable<any[]>;

    constructor(
        private shopPimalionService: ShopPimalionService,
    ) { }

    ngOnInit(): void {

        this.pimalionBrands$ = this.shopPimalionService.getPopularBrands();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
