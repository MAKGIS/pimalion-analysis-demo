import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductsList } from 'src/app/shared/interfaces/list';

import { RootService } from 'src/app/shared/services/root.service';

import { PimalionListOptions, ShopPimalionService } from 'src/app/pimalion/shared/api/shop-pimalion.service';

export function parseProductsListParams(params: Params): PimalionListOptions {
    const options: PimalionListOptions = {};

    console.log('function parseProductsListParams() params -> %O', params);

    if (params.page) {
        options.page = parseFloat(params.page);
    }
    if (params.limit) {
        options.limit = parseFloat(params.limit);
    }
    if (params.sort) {
        options.sort = params.sort;
    }

    for (const param of Object.keys(params)) {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

        if (!mr) {
            continue;
        }

        const filterSlug = mr[1];

        if (!('filterValues' in options)) {
            options.filterValues = {};
        }

        options.filterValues[filterSlug] = params[param];
    }

    return options;
}

@Injectable({
    providedIn: 'root'
})
export class ProductsListResolverService implements Resolve<ProductsList> {
    constructor(
        private root: RootService,
        private router: Router,
        private shopPimalionService: ShopPimalionService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductsList> {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;

        return this.shopPimalionService.getProductsList(categorySlug, parseProductsListParams(route.queryParams)).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 404) {
                    this.router.navigate([this.root.notFound()]).then();
                }

                return EMPTY;
            })
        );
    }
}
