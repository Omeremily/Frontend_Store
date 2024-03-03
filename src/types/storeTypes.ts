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


export type ShoppingCartContexts = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

export type CartItem = {
    id: number;
    quantity: number;
}

