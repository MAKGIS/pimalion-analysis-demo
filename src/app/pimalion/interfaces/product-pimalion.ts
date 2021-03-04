import { BrandPimalion } from './brand-pimalion';
import { CategoryPimalion } from './category-pimalion';
import { CustomFieldsPimalion } from './custom-fields_';

export interface ProductFeaturePimalion {
    name: string;
    value: string;
}

export interface ProductFeaturesSectionPimalion {
    name: string;
    features: ProductFeaturePimalion[];
}



export interface ProductAttributeValuePimalion {
    name: string;
    slug: string;
    customFields: CustomFieldsPimalion;
}

export interface ProductAttributePimalion {
    name: string;
    slug: string;
    featured: boolean;
    values: ProductAttributeValuePimalion[];
    customFields: CustomFieldsPimalion;
}

export interface ProductPimalion {
    id: string;   // number;
    slug: string;
    name: string;
    sku: string;
    price: number;
    compareAtPrice: number|null;
    images: string[];
    badges: string[];
    rating: number;
    reviews: number;
    availability: string;
    brand: BrandPimalion | null;
    categories: CategoryPimalion[];
    attributes: ProductAttributePimalion[];
    customFields: CustomFieldsPimalion;

    pimalionReviews?: string;
}
