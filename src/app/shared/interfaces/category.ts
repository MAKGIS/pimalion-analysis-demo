import { CustomFields } from './custom-fields';

export interface Category {
    id: string;                 // number;
    type: 'shop'|'blog';
    name: string;
    slug: string;
    path: string;
    image: string|null;
    items: number;
    customFields: CustomFields;
    parents?: Category[];
    children?: Category[];
}
/*

    id = item.id,                       // "group|ACC ARTALIS"
    type = 'shop',
    name = item.values[0].value,        // "ACC ARTALIS"
    slug = item.groupCode,
    path = item.groupCode,               // ???  ACC_ARTALIS
    image = "assets/images/categories/category-1.jpg",
    items = item.values[1].value,       // 14
    customFields = {};
    parents? = [];
    children? = [];


{
    "id": "group|ACC ARTALIS",
    "thumbnailUrl": null,
    "label": "ACC ARTALIS (14 articles)",
    "groupCode": "ACC ARTALIS",
    "values":[
                {"key": "Nomenclature Famille fournisseur", "value": "ACC ARTALIS"},
                {"key": "Articles", "value": "14"}
    ],
    "taxonomies": null,
    "attributes": null,
    "googleQuery": null,
    "url": null,
    "supplierSheet": null,
    "isEditable": true,
    "agentId": null
}

*/
