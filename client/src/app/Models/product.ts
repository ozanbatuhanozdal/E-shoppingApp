import { Category } from './category';

export interface Product{
    productId:number,
    productName: string,
    productPrice: number,
    productImageUrl: string,
    productExplanation: string,
    categoryId: number,
    category: Category,

}