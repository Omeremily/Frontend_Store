export type StoreItemProps = {
    id?: number;
    name?: string;
    shortDescription?: string;
    longDescription?: string;
    imgUrl?: string;
    minimum?: number;
    maximum?: number;
    price?: number;
    salePrice?: number;
    onlyToSpecific?: boolean;  
}

export type StoreProps = {
    items: StoreItemProps[]
}

export type ShoppingCartContexts = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];

}

export type CartItem = {
    id: number;
    quantity: number;
}

export type ShoppingCartProps = {
    isOpen: boolean
}

export type CartItemProps = {
    id: number;
    quantity: number;
}

export type AddItemForm = {
    addProductToStore: Function;
        
}

export type BannerProps = {
    image: string;
    header: string;
    description: string;
    textAlign?: 'left' | 'center' | 'right';
    textColor: string;
    fontSize: string;
  };
