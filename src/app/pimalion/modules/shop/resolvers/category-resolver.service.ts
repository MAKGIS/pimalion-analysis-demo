import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';


import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { RootService } from 'src/app/shared/services/root.service';
import { ShopPimalionService } from 'src/app/pimalion/shared/api/shop-pimalion.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryResolverService implements Resolve<any> {
    constructor(
        private root: RootService,
        private router: Router,
        private shopPimalionService: ShopPimalionService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const categorySlug = route.params.categorySlug || route.data.categorySlug || null;

        console.log('CategoryResolverService.resolve() categorySlug -> %O', categorySlug );
        if (categorySlug === null) {
            return null;
        }

        return this.shopPimalionService.getCategory(categorySlug).pipe(
            tap(data => {
               console.log('CategoryResolverService.resolve() data -> %O', data );
            }),
            catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 404) {
                    this.router.navigateByUrl(this.root.notFound()).then();
                }

                return EMPTY;
            })
        );
    }
}
