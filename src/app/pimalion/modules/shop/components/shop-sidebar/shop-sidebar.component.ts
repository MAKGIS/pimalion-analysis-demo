import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Product } from 'src/app/shared/interfaces/product';
import { fromMatchMedia } from 'src/app/shared/functions/rxjs/fromMatchMedia';

import { ShopPimalionService } from 'src/app/pimalion/shared/api/shop-pimalion.service';
import { ShopSidebarService } from '../../services/shop-sidebar.service';

@Component({
    selector: 'app-shop-sidebar',
    templateUrl: './shop-sidebar.component.html',
    styleUrls: ['./shop-sidebar.component.sass']
})
export class ShopSidebarComponent implements OnInit, OnDestroy {
    /**
     * Indicates when filters will be offcanvas.
     * - always: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-4-columns-full
     * - mobile: https://stroyka.angular.themeforest.scompiler.ru/themes/default-ltr/classic/shop/category-grid-3-columns-sidebar
     */
    @Input() offcanvas: 'always'|'mobile' = 'mobile';

    destroy$: Subject<void> = new Subject<void>();
    bestsellers$: Observable<Product[]>;
    isOpen = false;

    constructor(
        private shop: ShopPimalionService,
        public sidebar: ShopSidebarService,
        @Inject(PLATFORM_ID)
        private platformId: any
    ) { }

    ngOnInit(): void {
        this.bestsellers$ = this.shop.getBestsellers().pipe(map(x => x.slice(0, 5)));

        this.sidebar.isOpen$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(isOpen => {
            if (isOpen) {
                this.open();
            } else {
                this.close();
            }
        });

        if (isPlatformBrowser(this.platformId)) {
            fromMatchMedia('(max-width: 991px)').pipe(takeUntil(this.destroy$)).subscribe(media => {
                if (this.offcanvas === 'mobile' && this.isOpen && !media.matches) {
                    this.close();
                }
            });
        }
    }

    ngOnDestroy(): void {
        this.close();
        this.destroy$.next();
        this.destroy$.complete();
    }

    private open(): void {
        if (isPlatformBrowser(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;

            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }

        this.isOpen = true;
    }

    private close(): void {
        if (isPlatformBrowser(this.platformId)) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        this.isOpen = false;
    }
}
