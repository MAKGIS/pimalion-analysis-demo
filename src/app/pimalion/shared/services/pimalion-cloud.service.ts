import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Address } from './../../interfaces/address';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';


const httpOptions = {
headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
};

const httpOptionsObs = {
    headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json'),
    observe: 'events'
    };


@Injectable({
  providedIn: 'root'
})
export class PimalionCloudService {
  // http://pimsoushasvr01.dev.pimalion.cloud


  constructor(private http: HttpClient) { }

  // 01 Post Homepage Get all categories
  getCategoriesList(body: any): Observable<any> {

    // console.log('PimalionCloudService.getCategoriesList()');

    if (!body) {
        /*
                body = {
                    groupFields: [
                        {
                            key: 'Nomenclature Famille fournisseur',
                            value: null
                        }
                    ],
                    selection: [],
                    page: 0,
                    pageSize: 10,
                    isManaged: true,
                    sort: [],
                    productStates: []
                };
                */
               console.log('*srv*** Error PimalionCloudService.getCategoriesList() body -> NULL');
               return of([]);
    }

    return this.http.post<any[]>(`${environment.pimalionCloudUrl}/pimalion_demo2_api/api/product/search`, body, httpOptions)
    .pipe(
             tap((items: any) => {
                 // console.log('*srv*** PimalionCloudService.getCategoriesList() items -> %O', items);
             }),
            catchError((err: any): any => {
                console.log('*srv*** Error PimalionCloudService.getCategoriesList() -> %O', err);
                return of([]);
            })
        );
  }

  // 02 Post Brands A list of brands
  getBrandsList(body: any): Observable<any> {

    // console.log('PimalionCloudService.getBrandsList()');

    if (!body) {
        /*
                    body = {
                        groupFields: [
                            {
                                key: 'Marque',
                                value: null
                            }
                        ],
                        selection: [],
                        page: 0,
                        pageSize: 100,
                        isManaged: true,
                        sort: [],
                        productStates: []
                    };
                    */
                   console.log('*srv*** Error PimalionCloudService.getBrandsList() body -> NULL');
                   return of([]);
      }

    return this.http.post<any[]>(`${environment.pimalionCloudUrl}/pimalion_demo2_api/api/product/search`, body, httpOptions)
        .pipe(
            tap((items: any) => {
                console.log('*srv*** PimalionCloudService.getBrandsList() items -> %O', items);
            }),
            catchError((err: any): any => {
                console.log('*srv*** Error PimalionCloudService.getBrandsList() -> %O', err);
                return of([]);
            })
        );
  }

  // 03 Post Product list. All products
  getProductsList(body: any): Observable<any> {

    // console.log('PimalionCloudService.getProductsList()');

    if (!body) {
                    /*
                    body = {
                        groupFields: [],
                        selection: [],
                        page: 0,
                        pageSize: 12,
                        isManaged: true,
                        sort: [],
                        productStates: []
                    };
                    */
                   console.log('*srv*** Error PimalionCloudService.getProductsList() body -> NULL');
                   return of([]);
                }

    const mainHeaders = [];

    return this.http.post<any>(`${environment.pimalionCloudUrl}/pimalion_demo2_api/api/product/search`, body, {
        headers: new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Accept', 'application/json')
         , responseType: 'json'
         , observe: 'response'
        })
    .pipe(
             map((response: any) => {
                 // console.log('*srv*** PimalionCloudService.getProductsList() response -> %O', response);
                 // const keys = response.headers.keys();
                 /*
                 const headers = keys.map( key => {
                        const keyName = `${key}: ${response.headers.get(key)}`;
                        console.log('*srv*** PimalionCloudService.getProductsList() keyName -> %O', keyName);
                        mainHeaders[key] = response.headers.get(key);
                        console.log('*srv*** PimalionCloudService.getProductsList() header -> %O', response.headers.get(key));
                    }
                   );
                   */
                 // tslint:disable-next-line:no-shadowed-variable
                 const body = {
                    items: response.body.tableValues,
                    sorts: response.body.sorts,
                    total: response.headers.get('x-total-count'),
                    pages: response.headers.get('x-total-pages'),
                  };

                 console.log('*srv*** PimalionCloudService.getProductsList() body -> %O', body);
                 return body;
             }),
            catchError((err: any): any => {
                console.log('*srv*** Error PimalionCloudService.getProductsList() -> %O', err);
                return of([]);
            })
        );
    }

  // 04 Get The product detail page
  getProductDetailPage(productKey: string): Observable<any> {

    // console.log('*srv*** PimalionCloudService.getProductDetailPage()');

    // productKey = 'Ipw9LHUBUvwcyS3bkdSh';

    return this.http.get<any>(`${environment.pimalionCloudUrl}/pimalion_demo2_api/api/product/render/html/${productKey}?version=web`,
            httpOptions)
    .pipe(
             tap((item: any) => {
                 // console.log('*srv*** PimalionCloudService.getProductDetailPage() items -> %O', item);
             })
             ,
            catchError((err: any): any => {
                console.log('*srv*** Error PimalionCloudService.getProductDetailPage() -> %O', err);
                return of(`<html><head>Product Detail Page</head> <body>Page not found </body></html>`);
            })
        );
  }

}
