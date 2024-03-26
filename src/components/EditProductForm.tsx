import { useFormik } from "formik"
import { StoreItemProps } from "../types/storeTypes";


export default function EditProductForm( {EditItem}: {EditItem: Function} ) {

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
            EditItem(values);
        }
    })
    return (
        <>
        <section className="vh-250 ">
            <div className="container h-100 mt-3 mb-3">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ borderRadius: '25px', padding: '5px'  }}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">     
                          {/* טופס הרשמה */}
                            <form onSubmit={productForm.handleSubmit} className="mx-1 mx-md-4">
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="id">Id</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input type="number" placeholder="id" value={productForm.values.id} onChange={(e) => productForm.setFieldValue('id', e.target.value)} />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input type="text" placeholder="" value={productForm.values.name} onChange={(e) => productForm.setFieldValue('name', e.target.value)} />
                                    </div>
                                </div>  
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Short Description">Short Description</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input type="text" placeholder="" value={productForm.values.shortDescription} onChange={(e) => productForm.setFieldValue('shortDescription', e.target.value)} />
                                    </div>
                                </div>   
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="longDescription">Long Description</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <textarea 
                                        id="longDescription" 
                                        className="form-control" 
                                        placeholder="" 
                                        value={productForm.values.longDescription} 
                                        onChange={(e) => productForm.setFieldValue('longDescription', e.target.value)} 
                                        />
                                    </div>
                                </div>    
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Image">Image</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input type="text" placeholder="enter img url.." value={productForm.values.imgUrl} onChange={(e) => productForm.setFieldValue('imgUrl', e.target.value)} />
                                    </div>
                                </div> 
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Minimum">Minimum</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input type="number" placeholder="" value={productForm.values.minimum} onChange={(e) => productForm.setFieldValue('minimum', e.target.value)} />
                                    </div>
                                </div> 
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Maximum">Maximum</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input type="number" placeholder="" value={productForm.values.minimum} onChange={(e) => productForm.setFieldValue('minimum', e.target.value)} />
                                    </div>
                                </div> 
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="Price">Price</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-id"></i></span>   
                                        <input type="number" placeholder="price" value={productForm.values.price} onChange={(e) => productForm.setFieldValue('price', e.target.value)} />
                                    </div>
                                </div> 
                                <div className="mb-2">
                                    <label className="form-label" htmlFor="salePrice">Sale Price</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-email"></i></span>   
                                        <input type="number" placeholder="salePrice" value={productForm.values.salePrice} onChange={(e) => productForm.setFieldValue('salePrice', e.target.value)} />
                                    </div>
                                </div> 

                                <button type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: '8px', padding: '5px 40px', marginTop: '15px'}}>Edit product</button>
                            </form>

            </div>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center order-1 order-lg-2">
                            <p className="text-center h1 mb-5 mx-1 mx-md-4 mt-4 ">Edit Product</p>
                            <img src="./public/imgs/pen.png" className="img-fluid" alt="Sample image" />
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