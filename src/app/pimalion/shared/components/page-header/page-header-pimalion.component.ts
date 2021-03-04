
import { Component, Input } from '@angular/core';

import { Link } from 'src/app/shared/interfaces/link';

@Component({
    selector: 'app-page-header-pimalion',
    templateUrl: './page-header-pimalion.component.html',
    styleUrls: ['./page-header-pimalion.component.scss']
})
export class PageHeaderPimalionComponent {
    @Input() header: string;
    @Input() breadcrumbs: Link[] = [];

    constructor() { }
}
