import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';

// modules
import { BlocksModule } from 'src/app/modules/blocks/blocks.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopPimalionRoutingModule } from './shop-pimalion-routing.module';
import { WidgetsPimalionModule } from './../widgets/widgets-pimalion.module';

import { ShopModule } from 'src/app/modules/shop/shop.module';


// components
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { ShopSidebarComponent } from './components/shop-sidebar/shop-sidebar.component';

import { ProductCardPimalionComponent } from './../../shared/components/product-card/product-card-pimalion.component';

import { PageHeaderPimalionComponent } from 'src/app/pimalion/shared/components/page-header/page-header-pimalion.component';

// pages
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { PageCategoryComponent } from './pages/page-category/page-category.component';
import { PageCheckoutComponent } from './pages/page-checkout/page-checkout.component';
import { PageCompareComponent } from './pages/page-compare/page-compare.component';

import { PageTrackOrderComponent } from './pages/page-track-order/page-track-order.component';
import { PageWishlistComponent } from './pages/page-wishlist/page-wishlist.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { PageOrderSuccessComponent } from './pages/page-order-success/page-order-success.component';

// import { PageProductComponent } from 'src/app/modules/shop/pages/page-product/page-product.component';
import { PageProductPimalionComponent } from 'src/app/pimalion/modules/shop/pages/page-product/page-product-pimalion.component';

@NgModule({
    declarations: [
        // components
        ProductsViewComponent,
        ProductTabsComponent,
        ShopSidebarComponent,

        PageHeaderPimalionComponent,

        ProductCardPimalionComponent,

        // pages
        PageCartComponent,
        PageCategoryComponent,
        PageCheckoutComponent,
        PageCompareComponent,

       // PageProductComponent,

        PageTrackOrderComponent,
        PageWishlistComponent,
        ProductSidebarComponent,
        PageOrderSuccessComponent,

        PageProductPimalionComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // modules (third-party)
        CarouselModule,
        // modules
        BlocksModule,
        SharedModule,
        ShopPimalionRoutingModule,
        WidgetsPimalionModule,

        ShopModule,
    ],
    exports: [
        ProductCardPimalionComponent,

        PageHeaderPimalionComponent
    ]

})


export class ShopPimalionModule { }
