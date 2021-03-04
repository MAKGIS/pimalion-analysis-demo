import { Component, Input } from '@angular/core';

import { PimalionCloudService } from 'src/app/pimalion/shared/services/pimalion-cloud.service';


// import { Category } from '../../../interfaces/category_';
import { Brand } from 'src/app/shared/interfaces/brand'; // '../../../interfaces/brand_';

import { RootPimalionService } from 'src/app/pimalion/shared/services/root-pimalion.service';

@Component({
    selector: 'app-block-pimalion-brands-grid',
    templateUrl: './block-pimalion-brands-grid.component.html',
    styleUrls: ['./block-pimalion-brands-grid.component.scss']
})
export class BlockPimalionBrandsGridComponent {
    @Input() header = '';
    @Input() layout: 'classic'|'compact' = 'classic';

    @Input() brands: Brand[] = []; // Category[] = [];

    constructor(
        public pimalionCloudService: PimalionCloudService,
        public root: RootPimalionService,
    ) { }
}
