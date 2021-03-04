import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { QuickviewService } from 'src/app/shared/services/quickview.service';

// import { RootService } from 'src/app/shared/services/root.service';
import { RootPimalionService } from 'src/app/pimalion/shared/services/root-pimalion.service';


import { CurrencyService } from 'src/app/shared/services/currency.service';

// import { Product, ProductAttribute } from 'src/app/pimalion/interfaces/product'; // '/interfaces/product';
import { Product, ProductAttribute } from 'src/app/shared/interfaces/product'; // '/interfaces/product';


@Component({
    selector: 'app-product-card-pimalion',
    templateUrl: './product-card-pimalion.component.html',
    styleUrls: ['./product-card-pimalion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardPimalionComponent implements OnInit, OnDestroy, OnChanges {
    private destroy$: Subject<void> = new Subject();

    @Input() product: Product;
    @Input() layout: 'grid-sm'|'grid-nl'|'grid-lg'|'list'|'horizontal'|null = null;

    addingToCart = false;
    addingToWishlist = false;
    addingToCompare = false;
    showingQuickview = false;
    featuredAttributes: ProductAttribute[] = [];

    constructor(
        private cd: ChangeDetectorRef,
        public root: RootPimalionService, // RootService,
        public cart: CartService,
        public wishlist: WishlistService,
        public compare: CompareService,
        public quickview: QuickviewService,
        public currency: CurrencyService
    ) { }

    ngOnInit(): void {
        this.currency.changes$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cd.markForCheck();
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('product' in changes) {
            this.featuredAttributes = !this.product ? [] : this.product.attributes.filter(x => x.featured);
        }
    }

    addToCart(): void {
        if (this.addingToCart) {
            return;
        }

        this.addingToCart = true;
        this.cart.add(this.product, 1).subscribe({
            complete: () => {
                this.addingToCart = false;
                this.cd.markForCheck();
            }
        });
    }

    addToWishlist(): void {
        if (this.addingToWishlist) {
            return;
        }

        this.addingToWishlist = true;
        this.wishlist.add(this.product).subscribe({
            complete: () => {
                this.addingToWishlist = false;
                this.cd.markForCheck();
            }
        });
    }

    addToCompare(): void {
        if (this.addingToCompare) {
            return;
        }

        this.addingToCompare = true;
        this.compare.add(this.product).subscribe({
            complete: () => {
                this.addingToCompare = false;
                this.cd.markForCheck();
            }
        });
    }

    showQuickview(): void {
        if (this.showingQuickview) {
            return;
        }

        this.showingQuickview = true;
        this.quickview.show(this.product).subscribe({
            complete: () => {
                this.showingQuickview = false;
                this.cd.markForCheck();
            }
        });
    }

    // getPimalionProductUrl(product: any): string {

    //    return `${environment.pimalionCloudUrl}/pimalion_demo2_api/api/product/render/html/${product.id}?version=web`;
    // }

}
