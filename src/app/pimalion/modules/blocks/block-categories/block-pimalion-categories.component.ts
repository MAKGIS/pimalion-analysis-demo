import { Component, Input } from '@angular/core';

import { PimalionCloudService } from 'src/app/pimalion/shared/services/pimalion-cloud.service';

@Component({
    selector: 'app-block-pimalion-categories',
    templateUrl: './block-pimalion-categories.component.html',
    styleUrls: ['./block-pimalion-categories.component.scss']
})
export class BlockPimalionCategoriesComponent {
    @Input() layout: 'classic'|'boxed' = 'classic';

    constructor(
        private pimalionCloudService: PimalionCloudService
    ) { }
}
