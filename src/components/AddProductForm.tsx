import { useFormik } from "formik"
import { StoreItemProps } from "../types/storeTypes";


export default function AddProductForm( {AddItemToStore}: {AddItemToStore: Function} ) {

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
            AddItemToStore(values);
        }
    })
    return (
        <>
            <form onSubmit={productForm.handleSubmit}>
            <input type="number" placeholder="id" value={productForm.values.id} onChange={(e) => productForm.setFieldValue('id', e.target.value)} />
            <input type="text" placeholder="name" value={productForm.values.name} onChange={(e) => productForm.setFieldValue('name', e.target.value)} />
            <input type="text" placeholder="shortDescription" value={productForm.values.shortDescription} onChange={(e) => productForm.setFieldValue('shortDescription', e.target.value)} />
            <input type="text" placeholder="longDescription" value={productForm.values.longDescription} onChange={(e) => productForm.setFieldValue('longDescription', e.target.value)} />
            <input type="text" placeholder="imgUrl" value={productForm.values.imgUrl} onChange={(e) => productForm.setFieldValue('imgUrl', e.target.value)} />
            <input type="number" placeholder="minimum" value={productForm.values.minimum} onChange={(e) => productForm.setFieldValue('minimum', e.target.value)} />
            <input type="number" placeholder="maximum" value={productForm.values.maximum} onChange={(e) => productForm.setFieldValue('maximum', e.target.value)} />
            <input type="number" placeholder="price" value={productForm.values.price} onChange={(e) => productForm.setFieldValue('price', e.target.value)} />
            <input type="number" placeholder="salePrice" value={productForm.values.salePrice} onChange={(e) => productForm.setFieldValue('salePrice', e.target.value)} />
            <button type="submit">Add new product</button>
            </form>
        </>
    )
}