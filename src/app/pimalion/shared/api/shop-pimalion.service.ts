import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Category } from 'src/app/shared/interfaces/category';

import { Brand } from 'src/app/shared/interfaces/brand';

import { ProductsList } from 'src/app/shared/interfaces/list';
import { SerializedFilterValues } from 'src/app/shared/interfaces/filter';

import {
    getBestsellers,
    getFeatured,
    getLatestProducts,
    getProduct,
    getRelatedProducts,
    getSpecialOffers,
    getTopRated,
    getShopCategoriesBySlugs,
    getShopCategoriesTree,
    getShopCategory,
    getBrands,
    // getProductsList,
} from 'src/fake-server';

import { Product } from 'src/app/shared/interfaces/product';

import {
        getCategoriesPimalion,
        getBrandsPimalion,
        getProductHtmlPimalion,

        getProductsListPimalion,

    } from 'src/app/pimalion/shared/api/products-list-pimalion';


import { getSuggestions } from 'src/fake-server/database/products';
import { PimalionCloudService } from '../services/pimalion-cloud.service';
import { map, switchMap } from 'rxjs/operators';

export interface PimalionListOptions {
    page?: number;
    limit?: number;
    sort?: string;
    filterValues?: SerializedFilterValues;
}

@Injectable({
    providedIn: 'root'
})
export class ShopPimalionService {
    constructor(
        private http: HttpClient,
        private pimalionCloudService: PimalionCloudService
    ) { }

    /**
     * Returns category object by slug.
     *
     * @param slug - Unique human-readable category identifier.
     */
    getCategory(slug: string): Observable<Category> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/power-tools.json
         *
         * where:
         * - power-tools = slug
         */
        // return this.http.get<Category>(`https://example.com/api/shop/categories/${slug}.json`);

        // This is for demonstration purposes only. Remove it and use the code above.

        const shopCategory = getShopCategory(slug);

        console.log(`*** ShopPimalionService.getCategory() Input slug -> %O`, slug);

        shopCategory.subscribe(data => {
             console.log(`*** ShopPimalionService.getCategory() Output shopCategory -> %O`, data);
         });

        return  shopCategory; // getShopCategory(slug);
    }

    /**
     * Returns a category tree.
     *
     * @param parent - If a parent is specified then its descendants will be returned.
     * @param depth  - Maximum depth of category tree.
     */
    getCategories(parent: Partial<Category> = null, depth: number = 0): Observable<Category[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?parent=latest-news&depth=1
         *
         * where:
         * - parent = parent.slug
         * - depth  = depth
         */
        // const params: {[param: string]: string} = {
        //     parent: parent.slug,
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.
        const shopCategoriesTree = getShopCategoriesTree(parent ? parent.slug : null, depth);

        console.log(`*** ShopPimalionService.getCategories() Input parent -> %O depth -> %O`, parent, depth);

        shopCategoriesTree.subscribe(data => {
            console.log(`*** ShopPimalionService.getCategories() Output shopCategoriesTree -> %O`, data);
        });

        return shopCategoriesTree;  // getShopCategoriesTree(parent ? parent.slug : null, depth);
    }

    /**
     * Returns an array of the specified categories.
     *
     * @param slugs - Array of slugs.
     * @param depth - Maximum depth of category tree.
     */
    getCategoriesBySlug(slugs: string[], depth: number = 0): Observable<Category[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories.json?slugs=power-tools,measurement&depth=1
         *
         * where:
         * - slugs = slugs.join(',')
         * - depth = depth
         */
        // const params: {[param: string]: string} = {
        //     slugs: slugs.join(','),
        //     depth: depth.toString(),
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/shop/categories.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const shopCategoriesBySlugs = getShopCategoriesBySlugs(slugs, depth);

        console.log(`*** ShopPimalionService.getCategoriesBySlug() Input slugs -> %O depth -> %O`, slugs, depth);

        shopCategoriesBySlugs.subscribe(data => {
            console.log(`*** ShopPimalionService.getCategoriesBySlug() Output shopCategoriesBySlugs -> %O`, data);
        });
        return shopCategoriesBySlugs;  // getShopCategoriesBySlugs(slugs, depth);
    }

    /**
     * Returns paginated products list.
     * If categorySlug is null then a list of all products should be returned.
     *
     * @param categorySlug         - Unique human-readable category identifier.
     * @param options              - Options.
     * @param options.page         - Page number (optional).
     * @param options.limit        - Maximum number of items returned at one time (optional).
     * @param options.sort         - The algorithm by which the list should be sorted (optional).
     * @param options.filterValues - An object whose keys are filter slugs and values ​​are filter values (optional).
     */
    getProductsList(categorySlug: string|null, options: PimalionListOptions): Observable<ProductsList> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products.json?category=screwdriwers&page=2&limit=12&sort=name_desc&filter_price=500-1000
         *
         * where:
         * - category     = categorySlug
         * - page         = options.page
         * - limit        = options.limit
         * - sort         = options.sort
         * - filter_price = options.filterValues.price
         */
        // const params: {[param: string]: string} = {};
        //
        // if (categorySlug) {
        //     params.category = categorySlug;
        // }
        // if ('page' in options) {
        //     params.page = options.page.toString();
        // }
        // if ('limit' in options) {
        //     params.limit = options.limit.toString();
        // }
        // if ('sort' in options) {
        //     params.sort = options.sort;
        // }
        // if ('filterValues' in options) {
        //     Object.keys(options.filterValues).forEach(slug => params[`filter_${slug}`] = options.filterValues[slug]);
        // }
        //
        // return this.http.get<ProductsList>('https://example.com/api/products.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

         /*
         // see ProductsViewComponent-p
         Showing {{ this.pageService.from }}–{{ this.pageService.to }}
                    of {{ this.pageService.total }}
                    results
         */
        const pagePimalion = options.page  || 1 ;
        const limitPimalion = options.limit || 12;
        const sort = options.sort || 'default';

        const body = {
            groupFields: [],
            selection: [],
            page: pagePimalion - 1,  // !!! ???
            pageSize: limitPimalion,
            isManaged: true,
            sort: [],                  // options.sort
            productStates: []
        };

        return this.pimalionCloudService.getProductsList(body)
            .pipe(
                switchMap(pimalionBody => {

                    console.log(`>>> ShopPimalionService.getProductsList() Input categorySlug -> %O options -> %O`, categorySlug, options);
                    console.log(`>>> ShopPimalionService.getProductsList() Input pimalionBody -> %O`, pimalionBody);

                    const productsList = getProductsListPimalion(categorySlug, options, pimalionBody);

                    // console.log(`<<< ShopPimalionService.getProductsList() Output shopCategory -> %O`, productsList);

                    return productsList;
                })
            );
    }

    getProduct(productSlug: string): Observable<Product> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);

        // This is for demonstration purposes only. Remove it and use the code above.

        const product = getProduct(productSlug);

        console.log(`*** ShopPimalionService.getProduct() Input  productSlug -> %O `, productSlug);

        product.subscribe(data => {
            console.log(`*** ShopPimalionService.getProduct() Output product -> %O`, data);
        });

        return product; // getProduct(productSlug);
    }

    getProductHtml(productId: string): Observable<Product> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/products/electric-planer-brandix-kl370090g-300-watts.json
         *
         * where:
         * - electric-planer-brandix-kl370090g-300-watts = productSlug
         */
        // return this.http.get<Product>(`https://example.com/api/products/${productSlug}.json`);

        // This is for demonstration purposes only. Remove it and use the code above.

       return this.pimalionCloudService.getProductDetailPage(productId)
       .pipe(
           switchMap(pimalionItemHtml => {

               console.log(`>>> ShopPimalionService.getProduct() Input productId -> %O`, productId);
               // console.log(`>>> ShopPimalionService.getProduct() Input pimalionItemHtml-> %O`, pimalionItemHtml);

               const productCor = getProductHtmlPimalion(productId, pimalionItemHtml);

               return productCor;
           })
       );

    }

    /**
     * Returns popular Categories.
     */
    getCategoriesList(body: any): Observable<Category[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/categories/popular.json
         */
        // return this.http.get<Brand[]>('https://example.com/api/shop/categories/popular.json');

        // This is for demonstration purposes only. Remove it and use the code above.


/*
        const body = {
            groupFields: [
                {
                    key: 'Nomenclature Famille fournisseur',
                    value: null
                }
            ],
            selection: [],
            page: 0,
            pageSize: 1000,  // ???
            isManaged: true,
            sort: [],
            productStates: []
        };
*/
        return this.pimalionCloudService.getCategoriesList(body)
            .pipe(
                switchMap(pimalionItems => {

                    // console.log(`>>> ShopPimalionService.CategoriesList() Input pimalionCategories -> %O`, pimalionItems);

                    const categories = getCategoriesPimalion(pimalionItems);

                    return categories;
                })
            );
    }

    /**
     * Returns popular brands.
     */
    getPopularBrands(): Observable<Brand[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/brands/popular.json
         */
        // return this.http.get<Brand[]>('https://example.com/api/shop/brands/popular.json');

        // This is for demonstration purposes only. Remove it and use the code above.
        /*
        const brands = getBrands();

        brands.subscribe(data => {
            console.log(`*** ShopPimalionService.getPopularBrands() Output brands -> %O`, data);
        });

        return brands; // getBrands();
        */


        const body = {
            groupFields: [
                {
                    key: 'Marque',
                    value: null
                }
            ],
            selection: [],
            page: 0,
            pageSize: 1000,  // ???
            isManaged: true,
            sort: [],
            productStates: []
        };

        return this.pimalionCloudService.getBrandsList(body)
            .pipe(
                switchMap(pimalionItems => {

                    // console.log(`>>> ShopPimalionService.getBrands() Input pimalionBrands -> %O`, pimalionItems);

                    const brands = getBrandsPimalion(pimalionItems);

                    return brands;
                })
            );
    }

    getBestsellers(limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/bestsellers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/bestsellers.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const bestsellers = getBestsellers(limit);

        console.log(`*** ShopPimalionService.getBestsellers() Input  limit -> %O `, limit);

        bestsellers.subscribe(data => {
            console.log(`*** ShopPimalionService.getBestsellers() Output bestsellers -> %O`, data);
        });

        return bestsellers; // getBestsellers(limit);
    }

    getTopRated(limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/top-rated.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/top-rated.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const topRated = getTopRated(limit);

        console.log(`*** ShopPimalionService.getTopRated() Input  limit -> %O `, limit);

        topRated.subscribe(data => {
            console.log(`*** ShopPimalionService.getTopRated() Output topRated -> %O`, data);
        });

        return topRated; // getTopRated(limit);
    }

    getSpecialOffers(limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/special-offers.json?limit=3
         *
         * where:
         * - limit = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/special-offers.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const specialOffers = getSpecialOffers(limit);

        console.log(`*** ShopPimalionService.getSpecialOffers() Input  limit -> %O `, limit);

        specialOffers.subscribe(data => {
            console.log(`*** ShopPimalionService.getSpecialOffers() Output specialOffers -> %O`, data);
        });
        return specialOffers; // getSpecialOffers(limit);
    }

    getFeaturedProducts(categorySlug: string = null, limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/featured.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/featured.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const featured = getFeatured(categorySlug, limit);

        console.log(`*** ShopPimalionService.getFeaturedProducts() Input  categorySlug -> %O  limit -> %O `, categorySlug, limit);

        featured.subscribe(data => {
            console.log(`*** ShopPimalionService.getFeaturedProducts() Output featured -> %O`, data);
        });

        return featured; // getFeatured(categorySlug, limit);
    }

    getLatestProducts(categorySlug: string = null, limit: number = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/latest.json?category=screwdrivers&limit=3
         *
         * where:
         * - category = categorySlug
         * - limit    = limit
         */
        // const params: {[param: string]: string} = {};
        //
        // if (category) {
        //     params.category = category;
        // }
        // if (limit) {
        //     params.limit = limit.toString();
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/latest.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const latestProducts = getLatestProducts(categorySlug, limit);

        console.log(`*** ShopPimalionService.getLatestProducts() Input  categorySlug -> %O  limit -> %O `, categorySlug, limit);

        latestProducts.subscribe(data => {
            console.log(`*** ShopPimalionService.getLatestProducts() Output latestProducts -> %O`, data);
        });

        return latestProducts; // getLatestProducts(categorySlug, limit);
    }

    getRelatedProducts(product: Partial<Product>): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/shop/products/related.json?for=water-tap
         *
         * where:
         * - for = product.slug
         */
        // const params: {[param: string]: string} = {
        //     for: product.slug,
        // };
        //
        // return this.http.get<Product[]>('https://example.com/api/shop/products/related.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const relatedProducts = getRelatedProducts(product);

        console.log(`*** ShopPimalionService.getRelatedProducts() Input  product -> %O `, product);

        relatedProducts.subscribe(data => {
            console.log(`*** ShopPimalionService.getRelatedProducts() Output relatedProducts -> %O`, data);
        });

        return relatedProducts; // getRelatedProducts(product);
    }

    getSuggestions(query: string, limit: number, categorySlug: string = null): Observable<Product[]> {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/search/suggestions.json?query=screwdriver&limit=5&category=power-tools
         *
         * where:
         * - query = query
         * - limit = limit
         * - category = categorySlug
         */
        // const params: {[param: string]: string} = {query, limit: limit.toString()};
        //
        // if (categorySlug) {
        //     params.category = categorySlug;
        // }
        //
        // return this.http.get<Product[]>('https://example.com/api/search/suggestions.json', {params});

        // This is for demonstration purposes only. Remove it and use the code above.

        const suggestions = getSuggestions(query, limit, categorySlug);

        console.log(`*** ShopPimalionService.getSuggestions() Input  query -> %O limit -> %O categorySlug -> %O`,
                                   query, limit, categorySlug);

        suggestions.subscribe(data => {
            console.log(`*** ShopPimalionService.getSuggestions() Output suggestions -> %O`, data);
        });

        return suggestions; // getSuggestions(query, limit, categorySlug);
    }
}
