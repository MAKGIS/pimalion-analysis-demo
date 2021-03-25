(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-blog-blog-module"],{

/***/ "2fSG":
/*!*****************************************************!*\
  !*** ./src/app/modules/blog/blog-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "dBQs");
/* harmony import */ var _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-post/page-post.component */ "WBeq");






const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-classic'
    },
    {
        path: 'category-classic',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_2__["PageCategoryComponent"],
        data: {
            sidebarPosition: 'end',
            layout: 'classic' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-grid',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_2__["PageCategoryComponent"],
        data: {
            sidebarPosition: 'end',
            layout: 'grid' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-list',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_2__["PageCategoryComponent"],
        data: {
            sidebarPosition: 'end',
            layout: 'list' // one of [classic, grid, list]
        }
    },
    {
        path: 'category-left-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_2__["PageCategoryComponent"],
        data: {
            sidebarPosition: 'start',
            layout: 'classic' // one of [classic, grid, list]
        }
    },
    {
        path: 'post-classic',
        component: _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_3__["PagePostComponent"],
        data: {
            sidebarPosition: 'end',
            layout: 'classic'
        }
    },
    {
        path: 'post-full',
        component: _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_3__["PagePostComponent"],
        data: {
            layout: 'full'
        }
    }
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "5Uje":
/*!****************************************!*\
  !*** ./src/data/blog-post-comments.ts ***!
  \****************************************/
/*! exports provided: postComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postComments", function() { return postComments; });
const postComments = {
    count: 4,
    items: [
        {
            avatar: 'assets/images/avatars/avatar-1',
            author: 'Jessica Moore',
            date: 'November 30, 2018',
            text: 'Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu nulla. ' +
                'Nulla nec tellus pellentesque.',
            children: [
                {
                    avatar: 'assets/images/avatars/avatar-2',
                    author: 'Adam Taylor',
                    date: 'December 4, 2018',
                    text: 'Ut vitae finibus nisl, suscipit porttitor urna. Integer efficitur efficitur velit non pulvinar. ' +
                        'Aliquam blandit volutpat arcu vel tristique. Integer commodo ligula id augue tincidunt faucibus.'
                },
                {
                    avatar: 'assets/images/avatars/avatar-3',
                    author: 'Helena Garcia',
                    date: 'December 12, 2018',
                    text: 'Suspendisse dignissim luctus metus vitae aliquam. Vestibulum sem odio, ullamcorper a imperdiet a, ' +
                        'tincidunt sed lacus. Sed magna felis, consequat a erat ut, rutrum finibus odio.'
                }
            ]
        },
        {
            avatar: 'assets/images/avatars/avatar-4',
            author: 'Ryan Ford',
            date: 'December 5, 2018',
            text: 'Nullam at varius sapien. Sed sit amet condimentum elit.'
        }
    ]
};


/***/ }),

/***/ "6+9S":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/blog/components/comments-list/comments-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CommentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function() { return CommentsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CommentsListComponent_li_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comments-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comments", comment_r1.children)("level", ctx_r2.level + 1);
} }
function CommentsListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CommentsListComponent_li_1_div_17_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", comment_r1.avatar + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r1.children == null ? null : comment_r1.children.length);
} }
class CommentsListComponent {
    constructor() {
        this.comments = [];
        this.level = 0;
    }
}
CommentsListComponent.ɵfac = function CommentsListComponent_Factory(t) { return new (t || CommentsListComponent)(); };
CommentsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsListComponent, selectors: [["app-comments-list"]], inputs: { comments: "comments", level: "level" }, decls: 2, vars: 4, consts: [["class", "comments-list__item", 4, "ngFor", "ngForOf"], [1, "comments-list__item"], [1, "comment"], [1, "comment__avatar"], ["href", ""], ["alt", "", 3, "src"], [1, "comment__content"], [1, "comment__header"], [1, "comment__author"], [1, "comment__reply"], ["type", "button", 1, "btn", "btn-xs", "btn-light"], [1, "comment__text"], [1, "comment__date"], ["class", "comment-list__children", 4, "ngIf"], [1, "comment-list__children"], [3, "comments", "level"]], template: function CommentsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsListComponent_li_1_Template, 18, 5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("comments-list comments-list--level--", ctx.level, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], CommentsListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments-list',
                templateUrl: './comments-list.component.html',
                styleUrls: ['./comments-list.component.scss']
            }]
    }], function () { return []; }, { comments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JKxz":
/*!****************************************************************!*\
  !*** ./src/app/modules/blog/components/post/post.component.ts ***!
  \****************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/blog-posts */ "Z6UY");
/* harmony import */ var _data_blog_post_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/blog-post-comments */ "5Uje");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/share-buttons/share-buttons.component */ "g+fx");
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comments-list/comments-list.component */ "6+9S");








function PostComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.date);
} }
const _c0 = function (a0) { return { "typography--expanded": a0 }; };
class PostComponent {
    constructor() {
        this.layout = 'classic';
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_1__["posts"];
        this.comments = _data_blog_post_comments__WEBPACK_IMPORTED_MODULE_2__["postComments"];
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post-details"]], inputs: { layout: "layout" }, decls: 142, vars: 16, consts: [[1, "post-header__categories"], ["routerLink", "../"], [1, "post-header__title"], [1, "post-header__meta"], [1, "post-header__meta-item"], ["href", ""], [1, "post__featured"], ["src", "assets/images/posts/post-featured.jpg", "alt", ""], [1, "post__content", "typography", 3, "ngClass"], ["href", "#"], [1, "post__footer"], [1, "post__tags-share-buttons"], [1, "post__tags", "tags"], [1, "tags__list"], ["buttons", "facebook,twitter,pinterest", 1, "post__share-buttons"], [1, "post-author"], [1, "post-author__avatar"], ["src", "assets/images/avatars/avatar-1.jpg", "alt", ""], [1, "post-author__info"], [1, "post-author__name"], [1, "post-author__about"], [1, "post__section"], [1, "post__section-title"], [1, "related-posts"], [1, "related-posts__list"], ["class", "related-posts__item post-card post-card--layout--related", 4, "ngFor", "ngForOf"], [3, "comments"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "comment-first-name"], ["type", "text", "id", "comment-first-name", "placeholder", "First Name", 1, "form-control"], ["for", "comment-last-name"], ["type", "text", "id", "comment-last-name", "placeholder", "Last Name", 1, "form-control"], ["for", "comment-email"], ["type", "email", "id", "comment-email", "placeholder", "Email Address", 1, "form-control"], [1, "form-group"], ["for", "comment-content"], ["id", "comment-content", "rows", "6", 1, "form-control"], [1, "form-group", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "related-posts__item", "post-card", "post-card--layout--related"], [1, "post-card__image"], ["routerLink", "./"], ["alt", "", 3, "src"], [1, "post-card__info"], [1, "post-card__name"], [1, "post-card__date"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Latest news");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Morbi Interdum Velit Quis Magna Placerat Lobortis Eget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Jessica Moore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "November 30, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "4 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat lobortis eget pharetra magna. Nulla tristique sollicitudin turpis, eget maximus risus faucibus non. Nulla vestibulum ipsum risus, vitae maximus nunc bibendum quis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " raesent eu consequat nibh. Quisque ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ullamcorper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ", augue eu fringilla sodales, leo metus volutpat risus, at suscipit ipsum diam eget sem. Maecenas dictum elit in enim molestie, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "vel sollicitudin erat ultricies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ". Sed risus tellus, molestie finibus dui quis, suscipit consequat ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies dolor et semper placerat. Proin at lectus felis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "cite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "John Mcarthy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis, ullamcorper felis at, finibus sem. Curabitur tincidunt neque nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nam Eget Blandit Diam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Quisque semper magna eget libero maximus, a sollicitudin nunc hendrerit. Cras efficitur, ante vitae fringilla rutrum, mi tortor dapibus metus, in egestas metus erat sit amet orci. Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit quis magna placerat lobortis eget pharetra magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Nulla fringilla:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Donec aliquet at felis et dignissim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Nunc viverra, dui nec commodo dignissim, libero arcu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus volutpat risus, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "at suscipit ipsum diam eget sem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ". Maecenas dictum elit in enim molestie, vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit consequat ex. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Nunc Dapibus Varius Ligula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra. Duis vitae fermentum elit. Integer ac mattis elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Duis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "finibus imperdiet ultricies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ". Donec vel pretium turpis. In auctor euismod posuere.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "In iaculis porttitor luctus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ". Maecenas ultricies dolor et semper placerat. Proin at lectus felis. Quisque dapibus auctor justo id dictum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Promotion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Power Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Wrench");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Electrodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-share-buttons", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Jessica Moore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Related Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, PostComponent_div_112_Template, 10, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "app-comments-list", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Write A Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Post Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block post post--layout--", ctx.layout, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("post__header post-header post-header--layout--", ctx.layout, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.layout === "full"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](113, 10, ctx.posts, 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comments (", ctx.comments.count, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comments", ctx.comments.items);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_components_share_buttons_share_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ShareButtonsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_6__["CommentsListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-details',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return []; }, { layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WBeq":
/*!*********************************************************************!*\
  !*** ./src/app/modules/blog/pages/page-post/page-post.component.ts ***!
  \*********************************************************************/
/*! exports provided: PagePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePostComponent", function() { return PagePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post/post.component */ "JKxz");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "jnPb");









function PagePostComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagePostComponent_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagePostComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagePostComponent_ng_container_2_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-post-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PagePostComponent_ng_container_2_div_5_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sidebarPosition === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sidebarPosition === "end");
} }
function PagePostComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-post-details", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return { label: "Home", url: "../../" }; };
const _c1 = function () { return { label: "Blog", url: "../" }; };
const _c2 = function () { return { label: "Latest News", url: "" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PagePostComponent {
    constructor(route) {
        this.route = route;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
        this.layout = 'classic';
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data.sidebarPosition;
            this.layout = data.layout;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
PagePostComponent.ɵfac = function PagePostComponent_Factory(t) { return new (t || PagePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PagePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagePostComponent, selectors: [["app-post"]], decls: 4, vars: 10, consts: [[3, "breadcrumbs"], [1, "container"], [4, "ngIf"], [1, "row"], ["class", "col-12 col-lg-4 order-1 order-lg-0", 4, "ngIf"], [1, "col-12", "col-lg-8"], ["layout", "classic"], ["class", "col-12 col-lg-4", 4, "ngIf"], [1, "col-12", "col-lg-4", "order-1", "order-lg-0"], ["position", "start"], [1, "col-12", "col-lg-4"], ["position", "end"], [1, "row", "justify-content-center"], [1, "col-md-12", "col-lg-9", "col-xl-8"], ["layout", "full"]], template: function PagePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagePostComponent_ng_container_2_Template, 6, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagePostComponent_ng_container_3_Template, 4, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "classic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "full");
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXBvc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './page-post.component.html',
                styleUrls: ['./page-post.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "X6tI":
/*!*********************************************!*\
  !*** ./src/app/modules/blog/blog.module.ts ***!
  \*********************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-routing.module */ "2fSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/widgets.module */ "6t2i");
/* harmony import */ var _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/comments-list/comments-list.component */ "6+9S");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/post/post.component */ "JKxz");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "jnPb");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "dBQs");
/* harmony import */ var _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-post/page-post.component */ "WBeq");

// modules (angular)

// modules



// components



// pages



class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // modules
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [
        // components
        _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_5__["CommentsListComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
        // pages
        _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_8__["PageCategoryComponent"],
        _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_9__["PagePostComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // modules
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // components
                    _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_5__["CommentsListComponent"],
                    _components_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                    // pages
                    _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_8__["PageCategoryComponent"],
                    _pages_page_post_page_post_component__WEBPACK_IMPORTED_MODULE_9__["PagePostComponent"]
                ],
                imports: [
                    // modules (angular)
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // modules
                    _blog_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dBQs":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blog/pages/page-category/page-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryComponent", function() { return PageCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/blog-posts */ "Z6UY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ "tgey");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "jnPb");
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/post-card/post-card.component */ "37O+");











function PageCategoryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { classic: "grid-lg", grid: "grid-nl", list: "list-nl" }; };
function PageCategoryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r3)("layout", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0)[ctx_r1.layout]);
} }
function PageCategoryComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { label: "Home", url: "../../" }; };
const _c2 = function () { return { label: "Blog", url: "../" }; };
const _c3 = function () { return { label: "Latest News", url: "" }; };
const _c4 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PageCategoryComponent {
    constructor(route) {
        this.route = route;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sidebarPosition = 'end'; // For LTR scripts "start" is "left" and "end" is "right"
        this.layout = 'classic';
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_3__["posts"];
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(data => {
            this.sidebarPosition = data.sidebarPosition;
            this.layout = data.layout;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
PageCategoryComponent.ɵfac = function PageCategoryComponent_Factory(t) { return new (t || PageCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
PageCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageCategoryComponent, selectors: [["app-category"]], decls: 13, vars: 18, consts: [[3, "header", "breadcrumbs"], [1, "container"], [1, "row"], ["class", "col-12 col-lg-4 order-1 order-lg-0", 4, "ngIf"], [1, "col-12", "col-lg-8"], [1, "block"], [1, "posts-view"], [1, "posts-list__body"], ["class", "posts-list__item", 4, "ngFor", "ngForOf"], [1, "posts-view__pagination"], [3, "current", "siblings", "total"], ["class", "col-12 col-lg-4", 4, "ngIf"], [1, "col-12", "col-lg-4", "order-1", "order-lg-0"], ["position", "start"], [1, "posts-list__item"], [3, "post", "layout"], [1, "col-12", "col-lg-4"], ["position", "end"]], template: function PageCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageCategoryComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PageCategoryComponent_div_9_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-pagination", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PageCategoryComponent_div_12_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Latest News")("breadcrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarPosition === "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("posts-view__list posts-list posts-list--layout--", ctx.layout, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current", 1)("siblings", 2)("total", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarPosition === "end");
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_9__["PostCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './page-category.component.html',
                styleUrls: ['./page-category.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "dRGJ":
/*!********************************************!*\
  !*** ./src/app/shared/api/blog.service.ts ***!
  \********************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fake_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fake-server */ "YT3J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BlogService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Returns a category tree.
     *
     * @param parent - If a parent is specified then its descendants will be returned.
     * @param depth  - Maximum depth of category tree.
     */
    getCategories(parent = null, depth = 0) {
        /**
         * This is what your API endpoint might look like:
         *
         * https://example.com/api/blog/categories.json?parent=latest-news&depth=1
         *
         * where:
         * - parent = parent.slug
         * - depth  = depth
         */
        // const params: {[param: string]: string} = {
        //     parent: parent.slug,
        //     depth,
        // };
        //
        // return this.http.get<Category[]>('https://example.com/api/blog/categories.json', {params});
        // This is for demonstration purposes only. Remove it and use the code above.
        return Object(_fake_server__WEBPACK_IMPORTED_MODULE_1__["getBlogCategoriesTree"])(parent ? parent.slug : null, depth);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jnPb":
/*!**********************************************************************!*\
  !*** ./src/app/modules/blog/components/sidebar/sidebar.component.ts ***!
  \**********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../data/blog-posts */ "Z6UY");
/* harmony import */ var _data_blog_widget_latest_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/blog-widget-latest-comments */ "sxPT");
/* harmony import */ var _shared_api_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/blog.service */ "dRGJ");
/* harmony import */ var _widgets_widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widgets/widget-search/widget-search.component */ "M4Y8");
/* harmony import */ var _widgets_widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widgets/widget-aboutus/widget-aboutus.component */ "DeAh");
/* harmony import */ var _widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widgets/widget-categories/widget-categories.component */ "HgAd");
/* harmony import */ var _widgets_widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../widgets/widget-posts/widget-posts.component */ "4m+X");
/* harmony import */ var _widgets_widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widgets/widget-newsletter/widget-newsletter.component */ "Zrae");
/* harmony import */ var _widgets_widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../widgets/widget-comments/widget-comments.component */ "Wd44");
/* harmony import */ var _widgets_widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../widgets/widget-tags/widget-tags.component */ "zWxD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













class SidebarComponent {
    constructor(blog) {
        this.blog = blog;
        this.position = 'start';
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_1__["posts"];
        this.categories = [];
        this.latestComments = _data_blog_widget_latest_comments__WEBPACK_IMPORTED_MODULE_2__["latestComments"];
    }
    ngOnInit() {
        this.blog.getCategories(null, 1).subscribe(x => this.categories = x);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_api_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { position: "position" }, decls: 17, vars: 14, consts: [[1, "block-sidebar__item"], [3, "categories"], [3, "posts"], [3, "comments"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-widget-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-widget-aboutus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-widget-categories", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-widget-posts", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-widget-newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-widget-comments", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-widget-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block block-sidebar block-sidebar--position--", ctx.position, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 6, ctx.posts, 0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comments", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 10, ctx.latestComments, 0, 3));
    } }, directives: [_widgets_widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_4__["WidgetSearchComponent"], _widgets_widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["WidgetAboutusComponent"], _widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_6__["WidgetCategoriesComponent"], _widgets_widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_7__["WidgetPostsComponent"], _widgets_widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_8__["WidgetNewsletterComponent"], _widgets_widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_9__["WidgetCommentsComponent"], _widgets_widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_10__["WidgetTagsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _shared_api_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sxPT":
/*!*************************************************!*\
  !*** ./src/data/blog-widget-latest-comments.ts ***!
  \*************************************************/
/*! exports provided: latestComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latestComments", function() { return latestComments; });
const latestComments = [
    {
        author: 'Emma Williams',
        postTitle: 'Nullam at varius sapien sed sit amet condimentum elit',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '3 minutes ago'
    },
    {
        author: 'Airic Ford',
        postTitle: 'Integer efficitur efficitur velit non pulvinar pellentesque dictum viverra',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '25 minutes ago'
    },
    {
        author: 'Loyd Walker',
        postTitle: 'Curabitur quam augue vestibulum in mauris fermentum pellentesque libero',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '2 hours ago'
    },
    {
        author: 'Jessica Moore',
        postTitle: 'Vestibulum leo sapien sollicitudin at magna eu interdum congue feugiat',
        text: 'In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge...',
        date: '3 days ago'
    }
];


/***/ })

}]);
//# sourceMappingURL=modules-blog-blog-module.js.map