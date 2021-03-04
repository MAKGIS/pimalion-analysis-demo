import { Component, Input, OnInit } from '@angular/core';

// import { Post } from 'src/app/shared/interfaces/post';
// import { posts } from 'src/data/blog-posts';
// import { latestComments } from 'src/data/blog-widget-latest-comments';
// import { BlogService } from 'src/app/shared/api/blog.service';
// import { Category } from 'src/app//shared/interfaces/category';

@Component({
    selector: 'app-sidebar-pimalion',
    templateUrl: './sidebar-pimalion.component.html',
    styleUrls: ['./sidebar-pimalion.component.scss']
})
export class SidebarPimalionComponent implements OnInit {
    @Input() position: 'start'|'end' = 'start';

    // posts: Post[] = posts;
    // categories: Category[] = [];
    // latestComments = latestComments;

    constructor(
       // private blog: BlogService,
    ) { }

    ngOnInit(): void {
       // this.blog.getCategories(null, 1).subscribe(x => this.categories = x);
    }
}
