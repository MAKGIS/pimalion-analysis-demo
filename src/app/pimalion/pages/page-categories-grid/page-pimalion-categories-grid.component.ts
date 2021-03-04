
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, merge } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';


import { PimalionCloudService } from './../../shared/services/pimalion-cloud.service';



@Component({
    selector: 'app-page-pimalion-categories-grid',
    templateUrl: './page-pimalion-categories-grid.component.html',
    styleUrls: ['./page-pimalion-categories-grid.component.scss']
})
export class PagePimalionCategoriesGridComponent implements OnInit, OnDestroy {

    destroy$: Subject<void> = new Subject<void>();

    // pimalionBrands$: Observable<any[]>;

    constructor(
        private pimalionCloudService: PimalionCloudService
    ) { }

    ngOnInit(): void {
/*
        const bodyQueryBrands = {};
        this.pimalionBrands$ =  this.pimalionCloudService.getBrandsList(bodyQueryBrands)
        .pipe(
            tap((items: any) => {
                console.log('PagePimalionCategoriesComponent.ngOnInit() Brands items -> %O', items);
            })
        );
        */
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
