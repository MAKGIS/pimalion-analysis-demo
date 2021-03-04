import { Component } from '@angular/core';


import { order } from 'src/data/account-order-details';

import { Order } from 'src/app/shared/interfaces/order';
import { RootService } from 'src/app/shared/services/root.service';

@Component({
    selector: 'app-page-order-success',
    templateUrl: './page-order-success.component.html',
    styleUrls: ['./page-order-success.component.scss']
})
export class PageOrderSuccessComponent {
    order: Order = order;

    constructor(
        public root: RootService,
    ) { }
}
