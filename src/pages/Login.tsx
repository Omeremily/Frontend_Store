import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import '../css/Register.css'; // Reusing the styling from Register.css

export default function Login() {

    function validate(values: { fullName: string; password: string; }) {
      const errors: { fullName?: string; password?: string; } = {};

        
        // Full name must be at least 2 characters long and less than 50 characters, containing only English letters
        if (!/^[A-Za-z]{2,50}$/.test(values.fullName)) {
            errors.fullName = 'Invalid full name';
        }

        // Password must contain only English letters, numbers, and the following special characters: !@#$%^&*
        if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(values.password)) {
            errors.password = 'Invalid password';
        }

        return errors;
    }

    const loginForm = useFormik({
        initialValues: {
            fullName: '',
            password: '',
        },
        validate,
        onSubmit: (values) => {
            console.log(values);

        }
    })

    return (
        <>
            <NavBar />
            <section className="vh-100 ">
                <div className="container h-100 mt-3 mb-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px', padding: '5px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <form onSubmit={loginForm.handleSubmit} className="mx-1 mx-md-4">
                                                <div className="mb-2">
                                                    <label className="form-label" htmlFor="fullName">Full Name</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                        <input type="text" id="fullName" placeholder="" className="form-control" name="fullName" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.fullName} required />
                                                    </div>
                                                    {loginForm.errors.fullName && loginForm.touched.fullName && <p className="error-message">{loginForm.errors.fullName}</p>}
                                                </div>

                                                <div className="mb-2">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                                        <input type="password" id="password" className="form-control" name="password" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.password} required />
                                                    </div>
                                                    {loginForm.errors.password && loginForm.touched.password && <p className="error-message">{loginForm.errors.password}</p>}
                                                </div>

                                                <div className="d-flex justify-content-center mx-4">
                                                    <button type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: '8px', padding: '5px 40px' }}>Login</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center order-1 order-lg-2">
                                            <p className="text-center h1 mb-5 mx-1 mx-md-4 mt-4 ">Login</p>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                            <p className="text-center h6 mb-5 mx-1 mx-md-4 mt-4 ">Don't have an account yet? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
