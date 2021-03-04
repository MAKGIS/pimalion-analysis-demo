import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Post } from 'src/app/shared/interfaces/post';
import { posts } from 'src/data/blog-posts';

@Component({
    selector: 'app-pimalion-category',
    templateUrl: './page-pimalion-category.component.html',
    styleUrls: ['./page-pimalion-category.component.scss']
})
export class PagePimalionCategoryComponent implements OnDestroy {
    private destroy$: Subject<void> = new Subject();

    sidebarPosition: 'start'|'end' = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
    layout: 'classic'|'grid'|'list' = 'grid'; // 'classic';

    posts: Post[] = posts;

    constructor(private route: ActivatedRoute) {
        this.route.data.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data.sidebarPosition;
            this.layout = data.layout;
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
