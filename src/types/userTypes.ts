// ייצוא טייפ של משתמש - תכונות
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

// ייצוא טייפ - היסטוריית רכישה של משתמש
export type PurchaseHistoryType= {
    purchaseNum: number,
    items: {
        id: number,
        quantity: number,
        price: number
    }[],
    purchaseDate: Date
}

[{"email":"galmachlev@gmail.com","fullName":"Gal machlev","phoneNumber":"054-4925982","img":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D","birthDate":"1998-06-14","birthDateValidate":"","password":"gal1998!!!","address":{"city":"Tel Aviv","street":"Yaffo","houseNum":"13"},"isActive":true},{"email":"admin@gmail.com","fullName":"admin","phoneNumber":"054-4925982","img":"https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072178.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712361600&semt=ais","birthDate":"1998-06-14","birthDateValidate":"","password":"as12343211ad","address":{"city":"Tel Aviv","street":"Dizengoff","houseNum":"54"},"isActive":true},{"email":"omer@gmail.com","fullName":"omer emily","phoneNumber":"050-5547845","img":"https://i.pinimg.com/736x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg","birthDate":"1985-10-02","birthDateValidate":"","password":"12341234","address":{"city":"Beer Sheva","street":"Beit Habad","houseNum":"8"},"isActive":true},{"email":"AlonAvner@gmail.com","fullName":"Alon Avner","phoneNumber":"050-3324412","img":"https://as2.ftcdn.net/v2/jpg/01/30/53/55/1000_F_130535564_3CC9bg4wBN6ghjMiPW1xWBXrUtPCQJAJ.jpg","birthDate":"1998-12-01","birthDateValidate":"","password":"alon1234%","address":{"city":"Tel Aviv","street":"Yaffo","houseNum":"68"},"isActive":false},{"email":"sapir@gmail.com","fullName":"sapir mach","phoneNumber":"054-7710455","img":"https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712534400&semt=ais","password":"sapir321","address":{"city":"Netanya","street":"King George","houseNum":"2"},"isActive":false},{"email":"danmachlev@walla.com","fullName":"Dan machlev","phoneNumber":"054-4925903","img":"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D","password":"dan321","address":{"city":"beit dagan","street":"hacarmel","houseNum":"35"},"isActive":true},{"img":"https://img.freepik.com/free-photo/human-face-expressions-emotions-positive-joyful-young-beautiful-female-with-fair-straight-hair-casual-clothing_176420-15188.jpg","email":"Naama11@gmail.com","fullName":"Naama cohen","phoneNumber":"053-5574487","password":"Naama1995","address":{"city":"Holon","street":"Mota gor","houseNum":"5"},"isActive":false}]