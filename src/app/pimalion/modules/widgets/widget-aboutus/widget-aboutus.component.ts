import { Component } from '@angular/core';
import { theme } from 'src/data/theme';

@Component({
    selector: 'app-widget-aboutus',
    templateUrl: './widget-aboutus.component.html',
    styleUrls: ['./widget-aboutus.component.scss']
})
export class WidgetAboutusComponent {
    theme = theme;

    constructor() { }
}
