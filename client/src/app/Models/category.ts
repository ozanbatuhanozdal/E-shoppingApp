export class Category {
    CategoryId: number;
    CategoryName: string;
    OrderCategory: number;

    /**
     *
     */
    constructor(CategoryId: number, CategoryName: string, OrderCategory: number) {
        this.CategoryId = CategoryId;
        this.CategoryName = CategoryName;
        this.OrderCategory = OrderCategory;

    }
}