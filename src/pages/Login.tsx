import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import '../css/Register.css'; 
import { useContext } from "react";
import { UsersContext } from "../context/usersContext";

export default function Login() {

    // משיכת המשתמשים מתוך היוזר-קונטקסט
    const { loginUser } = useContext<any>(UsersContext);

    // הפעלת פונקצית אימות פורמיק
    function validate(values: { fullName: string; password: string; }) {

        // הצגת הודעות שגיאה בהתאם
        const errors: { fullName?: string; password?: string; } = {};

        // שם מלא חייב להכיל לפחות 2 ומקסימום 50 תווים. אותיות באנגלית ואמצעי ריווח בלבד
        if (!/^[A-Za-z\s]{2,50}$/.test(values.fullName)) {
            errors.fullName = 'Invalid full name';
        }

        // סיסמה יכולה להכיל אותיות באנגלית, מספרים וסימנים המיוחדים האלו בלבד : !@#$%^&*
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
        // בעת לחיצה על כפתור הסאבמיט - במידה וזוהו פרטי האדמין מעבר לדף האדמין אחרת מעבר לדף הבית לאחר וידוא שאין שגיאות
        onSubmit:  (values) => {
            console.log(values);
            if (values.fullName === 'admin' && values.password === 'ad12343211ad') {
                window.location.href = '/admin';
            } else {
                const loginSuccess =  loginUser(values.fullName, values.password);
                if (loginSuccess) {
                    window.location.href = '/'; 
                } 
            }
        },
    });

    

    return (
        <>
            <NavBar />
            <section className="vh-100 ">
                <div className="container h-100 mt-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center mb-3">
                                        <div className="col-md-10 col-lg-6 col-xl-5">
                                            <form onSubmit={loginForm.handleSubmit} className="mx-1 mx-md-4">
                                            <p className="text-center h1 mb-5 mx-1 mx-md-4 mt-4 ">Login</p>

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
                                                    <button type="submit" className="btn btn-primary btn-lg mb-5 mt-3" style={{ borderRadius: '8px', padding: '5px 40px' }}>Login</button>
                                                </div>
                                                <p className="text-center h6 mb-5 mx-1 mx-md-4 mt-5 ">Don't have an account yet? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></p>

                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center justify-content-center">
                                            <img src="public\imgs\login.jpg" className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
            </div>
        </>
    );
}


