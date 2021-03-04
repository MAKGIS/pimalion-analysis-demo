import { Injectable } from '@angular/core';

// import { Product } from './../../interfaces/product';
// import { Category } from './../../interfaces/category';
// import { Brand } from './../../interfaces/brand';

import { Product } from 'src/app/shared/interfaces/product';
import { Category } from 'src/app/shared/interfaces/category';
import { Brand } from 'src/app/shared/interfaces/brand';


@Injectable({
    providedIn: 'root'
})
export class RootPimalionService {
    constructor() { }

    home(): string {
        return '/';
    }

    shop(): string {
        return `/shop/catalog`;
    }

    category(category: Partial<Category>): string {
        console.log('RootPimalionService.category() -> %O', category);

        if (category.type === 'shop') {
            const basePath = this.shop();

            if ('slug' in category) {
                return `${basePath}/${category.slug}`;
            }
            if ('id' in category) {
                return `${basePath}/${category.id}`;
            }

            throw Error('Provide category with "path", "slug" or "id".');
        }
        if (category.type === 'blog') {
            return this.blog();
        }

        throw Error('Provided category with unknown type.');
    }

    product(product: Partial<Product>): string {
        const basePath = '/shop/products';

        if ('slug' in product) {
            return `${basePath}/${product.slug}`;
        }
        if ('id' in product) {
            return `${basePath}/${product.id}`;
        }

        throw Error('Provide product with "slug" or "id".');
    }

    productPimalion(productPimalion: Partial<Product>): string {
        const basePath = '/pimalion/products'; // '/shop/products';

        // if ('slug' in productPimalion) {          // ???
        //     return `${basePath}/${productPimalion.slug}`;
        // }

        if ('id' in productPimalion) {
            return `${basePath}/${productPimalion.id}`;
        }

        throw Error('Provide product with "slug" or "id".');
    }


    brand(brand: Partial<Brand>): string {
        return '/';
    }

    cart(): string {
        return '/shop/cart';
    }

    checkout(): string {
        return '/shop/cart/checkout';
    }

    wishlist(): string {
        return '/shop/wishlist';
    }

    blog(): string {
        return '/blog';
    }

    post(): string {
        return `/blog/post-classic`;
    }

    login(): string {
        return '/account/login';
    }

    terms(): string {
        return '/site/terms';
    }

    notFound(): string {
        return `/site/not-found`;
    }
}
