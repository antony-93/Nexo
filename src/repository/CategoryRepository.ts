import Repository from "@/shared/infra/Repository";
import { Category } from "@/types/Category";

class CategoryRepository extends Repository<Category> {
    constructor() {
        super('categories')
    }
}

const _categoryRepository = new CategoryRepository();

export default _categoryRepository;