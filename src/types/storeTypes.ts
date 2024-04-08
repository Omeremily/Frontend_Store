// ייצוא טייפ - מוצרי החנות
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

// ייצוא טייפ - מערך מוצרי חנות
export type StoreProps = {
    items: StoreItemProps[]
}

// ייצוא טייפ - פונקציות עגלת הרכישה בחנות
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

// ייצוא טייפ - מוצר בעגלת הקניות
// ShoppingCart.tsx
export type CartItem = {
    id: number;
    quantity: number;
}

// ייצוא טייפ - מוצר בעגלת הקניות
// CartItem.tsx
export type CartItemProps = {
    id: number;
    quantity: number;
}

// ייצוא טייפ - האם דיב העגלה פתוח או לא
export type ShoppingCartProps = {
    isOpen: boolean
}

// ייצוא טייפ - פונקציית הוספת מוצר לחנות
export type AddItemForm = {
    addProductToStore: Function;       
}

// ייצוא טייפ - וידאו בדף החנות
export type VideoProps = {
    src: string;
}
