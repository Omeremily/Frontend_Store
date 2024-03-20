import { useFormik } from "formik"
import { StoreItemProps } from "../types/storeTypes";


export default function AddProductForm() {

    const productForm = useFormik<StoreItemProps>({
        initialValues: {
            id: 0,
            name: "",
            shortDescription:"",
            longDescription: "",
            imgUrl: "",
            minimum: 0,
            maximum: 0, 
            price : 0,
            salePrice: 0,
            onlyToSpecific: false
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <>
            <form onSubmit={productForm.handleSubmit}>
                <input type="number" placeholder="id" value={productForm.values.id}/>
                <input type="text" placeholder="name" value={productForm.values.name}/>
                <input type="number" placeholder="price" value={productForm.values.price} />
                <button type="submit">Add new product</button>
            </form>
        </>
    )
}