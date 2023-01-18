
export type ProductsProps = {
    name: string;
    price: string;
    id:string;
    delivery: boolean;
    image:string;
    date: Date;
}

export type initialStateType = {
    cart : ProductsProps[],
    products : ProductsProps[]
  }
export enum ActionTypes {
    Add = 'ADD_PRODUCT',
    Delete = 'DELETE_PRODUCT',
   
  }