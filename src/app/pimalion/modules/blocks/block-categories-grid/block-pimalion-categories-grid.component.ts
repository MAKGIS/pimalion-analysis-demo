import { Component, Input } from '@angular/core';

import { PimalionCloudService } from 'src/app/pimalion/shared/services/pimalion-cloud.service';


import { Category } from 'src/app/shared/interfaces/category'; // '../../../interfaces/category-pimalion';

import { RootPimalionService } from 'src/app/pimalion/shared/services/root-pimalion.service';

@Component({
    selector: 'app-block-pimalion-categories-grid',
    templateUrl: './block-pimalion-categories-grid.component.html',
    styleUrls: ['./block-pimalion-categories-grid.component.scss']
})
export class BlockPimalionCategoriesGridComponent {
    @Input() header = '';
    @Input() layout: 'classic'|'compact' = 'classic';

    @Input() categories: Category[] = []; // Category[] = [];

    constructor(
        public pimalionCloudService: PimalionCloudService,
        public root: RootPimalionService,
    ) { }
}
