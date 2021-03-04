// import { CategoryPimalion } from 'src/app/shared/interfaces/category';
import { CustomFieldsPimalion } from './custom-fields_';

export interface CategoryPimalion {
    id: string;
    type: 'shop'; // |'blog';
    name: string;
    slug: string;
    path: string;
    image: string|null;
    items: number;
    customFields: CustomFieldsPimalion;
    parents?: CategoryPimalion[];
    children?: CategoryPimalion[];
}
