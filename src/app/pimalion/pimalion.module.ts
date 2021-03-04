import { NgModule } from '@angular/core';


// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';


// modules Stroyka
import { SharedModule } from 'src/app/shared/shared.module';

// module Pimalion
import { ShopPimalionModule } from './modules/shop/shop-pimalion.module';
// components
import { IconPimalionComponent } from './shared/components/icon/icon-pimalion.component';
// import { ProductCardPimalionComponent } from './shared/components/product-card/product-card-pimalion.component';


// blocks
import { BlockPimalionHeaderComponent } from './modules/block-header/block-pimalion-header.component';
import { BlockPimalionCategoriesComponent } from './modules/blocks/block-categories/block-pimalion-categories.component';
import { BlockPimalionBrandsGridComponent } from './modules/blocks/block-brands-grid/block-pimalion-brands-grid.component';

import { BlockPimalionCategoriesGridComponent } from './modules/blocks/block-categories-grid/block-pimalion-categories-grid.component';

// page

import { PagePimalionCategoriesComponent } from './pages/page-categories/page-pimalion-categories.component';
import { PagePimalionBrandsComponent } from './pages/page-brands/page-pimalion-brands.component';


import { SidebarPimalionComponent } from './pages/sidebar/sidebar-pimalion.component';
import { PagePimalionCategoryComponent } from './pages/page-categories-grid/page-category/page-pimalion-category.component';
import { PagePimalionCategoriesGridComponent } from './pages/page-categories-grid/page-pimalion-categories-grid.component';

@NgModule({
    declarations: [

        // components
        IconPimalionComponent,

        // ProductCardPimalionComponent,

        // modules
        BlockPimalionHeaderComponent,

        // blocks
        BlockPimalionCategoriesComponent,
        BlockPimalionBrandsGridComponent,
        BlockPimalionCategoriesGridComponent,

        // page
        PagePimalionCategoriesComponent,
        PagePimalionBrandsComponent,

        SidebarPimalionComponent,
        PagePimalionCategoryComponent,
        PagePimalionCategoriesGridComponent,

    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,

        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // modules (third-party)
        CarouselModule,

        // modules Stroyka
        SharedModule,

        // modules Pimalion
        ShopPimalionModule,
    ],
    exports: [
        // blocks

        // components

        PagePimalionCategoriesComponent,
        PagePimalionBrandsComponent,              // ???
        PagePimalionCategoriesGridComponent,
    ]
})
export class PimalionModule { }
