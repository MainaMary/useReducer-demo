
export type ProductsProps = {
    name: string;
    price: string;
    id:string;
    delivery: boolean;
    image:string;
    date: Date;
    cartQuantity: number
}

export type initialStateType = {
    cart : ProductsProps[],
    products : ProductsProps[]
  }
export type initialsFiltersType = {
    searchParam: string,
    fastDelivery: boolean,
    price: number
}
export enum ActionTypes {
    Add = 'ADD_PRODUCT',
    Delete = 'DELETE_PRODUCT',
    Delivery= 'FILTER_BY_DELIVERY',
    Search= 'FILTER_BY_SEARCH',
    Reset = 'CLEAR_FILTERS'
   
  }