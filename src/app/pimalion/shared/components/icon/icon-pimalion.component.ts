import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-pimalion',
    templateUrl: './icon-pimalion.component.html',
    styleUrls: ['./icon-pimalion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPimalionComponent {
    id: string;
    width: string;
    height: string;

    @Input() set name(value: string) {
        this.id = value;
    }

    @Input() set size(value: string) {
        const result = /^([0-9]+)(?:x([0-9]+))?$/.exec(value);

        if (result) {
            if (result[2]) {
                this.width = result[1] + 'px';
                this.height = result[2] + 'px';
            } else {
                this.width = this.height = result[1] + 'px';
            }
        } else {
            this.width = this.height = null;
        }
    }

    constructor() { }
}
