import { useFormik } from "formik"
import { StoreItemProps } from "../types/storeTypes";
import NavBar from "./NavBar";


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
        <NavBar/>

        <section className="vh-250 ">
            <div className="container h-100 mt-3 mb-3">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ borderRadius: '25px', padding: '5px'  }}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">     
                          {/* טופס הוספת מוצר */}
                            <form onSubmit={productForm.handleSubmit} className="mx-1 mx-md-4">
                                {/* מספר סידורי מוצר ID */}
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="id">Id</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input data-test="product-id" type="number" placeholder="id" value={productForm.values.id} onChange={(e) => productForm.setFieldValue('id', e.target.value)} />
                                    </div>
                                </div>
                                {/* שם המוצר */}
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input data-test="product-name" type="text" placeholder="" value={productForm.values.name} onChange={(e) => productForm.setFieldValue('name', e.target.value)} />
                                    </div>
                                </div>  
                                {/* קטגורית המוצר / תיאור קצר */}
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Short Description">Short Description</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input data-test="product-category" type="text" placeholder="" value={productForm.values.shortDescription} onChange={(e) => productForm.setFieldValue('shortDescription', e.target.value)} />
                                    </div>
                                </div>  
                                {/* תיאור ארוך של המוצר שיוצג בדף מוצר */}
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="longDescription">Long Description</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <textarea
                                        data-test="product-description" 
                                        id="longDescription" 
                                        className="form-control" 
                                        placeholder="" 
                                        value={productForm.values.longDescription} 
                                        onChange={(e) => productForm.setFieldValue('longDescription', e.target.value)} 
                                        />
                                    </div>
                                </div>    
                                {/* קישור לתמונה מהאינטרנט של המוצר */}
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Image">Image</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input data-test="product-image" type="text" placeholder="Enter img url.." value={productForm.values.imgUrl} onChange={(e) => productForm.setFieldValue('imgUrl', e.target.value)} />
                                    </div>
                                </div> 
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Minimum">Minimum</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input data-test="product-min" type="number" placeholder="" value={productForm.values.minimum} onChange={(e) => productForm.setFieldValue('minimum', e.target.value)} />
                                    </div>
                                </div> 
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Maximum">Maximum</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input data-test="product-max" type="number" placeholder="" value={productForm.values.maximum} onChange={(e) => productForm.setFieldValue('maximum', e.target.value)} />
                                    </div>
                                </div>
                                {/* מחיר מוצר מקורי */}
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Price">Price</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input data-test="product-price" type="number" placeholder="price" value={productForm.values.price} onChange={(e) => productForm.setFieldValue('price', e.target.value)} />
                                    </div>
                                </div> 
                                {/* מחיר מוצר לאחר הנחה */}
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="salePrice">Sale Price</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-email"></i></span>   
                                        <input data-test="product-sale-price" type="number" placeholder="salePrice" value={productForm.values.salePrice} onChange={(e) => productForm.setFieldValue('salePrice', e.target.value)} />
                                    </div>
                                </div> 
                                {/* כפתור הוספת מוצר לחנות */}
                                <button data-test="add-product-btn" type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: '8px', padding: '5px 40px', marginTop: '15px'}}>Add new product</button>
                            </form>
            </div>
            {/* צד ימין של דף הוספת מוצר */}
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center order-1 order-lg-2">
                            {/* כותרת דף הוספת מוצר */}
                            <p className="text-center h1 mb-5 mx-1 mx-md-4 mt-4 ">Add Product</p>
                            {/* תמונה */}
                            <img src="/public/imgs/addP.png" className="img-fluid" alt="Sample image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}