export type User= {
    email: string,
    fullName: string,
    phoneNumber: string,
    img: string,
    birthDate: Date,
    password: string,
    birthDateValidate?: string,
    isActive?: boolean
    address: {
        city:string,
        street:string,
        houseNum: string
    },
    shippmentAddress?: {
        city:string,
        street:string,
        houseNum: string
    },
    PurchaseHistory?: PurchaseHistoryType

}

export type PurchaseHistoryType= {
    purchaseNum: number,
    items: {
        id: number,
        quantity: number,
        price: number
    }[],
    purchaseDate: Date
}