import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { CartService } from 'src/app/shared/services/cart.service';

import { RootService } from 'src/app/shared/services/root.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './page-checkout.component.html',
    styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    constructor(
        public root: RootService,
        public cart: CartService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.cart.quantity$.pipe(takeUntil(this.destroy$)).subscribe(quantity => {
            if (!quantity) {
                this.router.navigate(['../cart'], {relativeTo: this.route}).then();
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
