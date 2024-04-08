import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { User } from "../types/userTypes";
import { Link } from 'react-router-dom';
import '../css/Register.css';
import { useContext } from "react";
import { UsersContext } from "../context/usersContext";


// רשימות קבועות של ערים ורחובות לצורך ההשלמה האוטומטית
const cities = [
    "Tel Aviv", "Jerusalem", "Haifa", "Rishon LeZion", "Petah Tikva",
    "Ashdod", "Netanya", "Beer Sheva", "Bnei Brak", "Holon"
];
const streets = [
    "Rothschild", "Ben Yehuda", "Allenby", "Dizengoff", "זהHerzl",
    "King George", "Beit Habad", "Yaffo", "Bialik", "Haim Ozer"
];


export default function Register() {
    // משיכת המשתמשים מתוך היוזר-קונטקסט
    const { registerUser } = useContext<any>(UsersContext); 

    // פונקציה לאימות הערכים שהוזנו בטופס
    function validate(values: User){
        const errors: Partial<User> = {};
      
        // שם מלא חייב להכיל לפחות 2 ומקסימום 50 תווים. אותיות באנגלית ואמצעי ריווח בלבד
        if (!/^[A-Za-z\s]{2,50}$/.test(values.fullName)) {
            errors.fullName = 'Invalid full name';
        }

        // פורמט טלפון שניתן להשתמש בו בלבד 
        // 05x-xxxxxxx
        if (!/^(05\d)-\d{7}$/g.test(values.phoneNumber)) {
            errors.phoneNumber = 'Invalid phone number';
        }

        // תאריך לידה אמור להיות לפחות 18 שנים קודם לתאריך הנוכחי
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); 
        const selectedDate = new Date(values.birthDate);
        if (selectedDate > minDate) {
            errors.birthDateValidate = 'Invalid birth date';
        }

        // סיסמה יכולה להכיל אותיות באנגלית, מספרים וסימנים המיוחדים האלו בלבד : !@#$%^&*
        if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(values.password)) {
            errors.password = 'Invalid password';
        }
        
        // אימות עיר ורחוב - יכול להיבחר רק מתוך הערכים של הרשימות הקבועות שהוגדרו מראש - הקלדת טקסט בלבד
        if (values.address) {
            if (!cities.includes(values.address.city) && errors.address) {
                errors.address.city = 'Invalid city';
            }
            if (!streets.includes(values.address.street) && errors.address) {
                errors.address.street = 'Invalid street';
            }
        }
                
        return errors;
    }

    // אתחול אופי השדות שיש בטופס
    const loginForm = useFormik<User>({
        initialValues: {
            email: '',
            fullName: '',
            phoneNumber: '',
            img: '',
            birthDate: new Date(),
            birthDateValidate: '',
            password: '',
            address: {
                city: '', 
                street: '',
                houseNum: ''
            },
        },
        // הפעלת פונקציה שמורה של פורמיק לאימות הפרטים
        validate,
        // בעת לחיצה על סאבמיט - שמירת פרטי המשתמש החדש, הצגת הודעה ומעבר לדף התחברות
        onSubmit: (values) => {
            console.log(values);
            registerUser(values);
            alert("User registered successfully!");
            window.location.href = "/login";
        }
    })
    
    return (
        <>
          <NavBar />

          <section className="vh-100 ">
            <div className="container h-100 mt-3">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ borderRadius: '25px', padding: '5px'  }}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">     
                          {/* טופס הרשמה */}
                          <form onSubmit={loginForm.handleSubmit} className="mx-1 mx-md-4">
      
                            {/* שדה אימייל */}
                            <div className="mb-2">
                                <label className="form-label" htmlFor="email">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                    <input type="email" id="email" placeholder="example@gmail.com" className="form-control" name="email" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.email} required />
                                </div>
                                {loginForm.errors.email && loginForm.touched.email && <p className="error-message">{loginForm.errors.email}</p>}
                            </div>


                            {/* שדה שם מלא */}
                            <div className="mb-2">
                                <label className="form-label" htmlFor="fullName">Full Name</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    <input type="text" id="fullName" placeholder="John Doe" className="form-control" name="fullName" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.fullName} required />
                                </div>
                                {loginForm.errors.fullName && loginForm.touched.fullName && <p className="error-message">{loginForm.errors.fullName}</p>}
                            </div>

                            {/* שדה סיסמה */}
                            <div className="mb-2">
                                <label className="form-label" htmlFor="password">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                    <input type="password" id="password" className="form-control" name="password" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.password} required />
                                </div>
                                {loginForm.errors.password  && loginForm.touched.password && <p className="error-message">{loginForm.errors.password}</p>}
                            </div>

                            {/* שדה מספר טלפון */}
                            <div className="mb-2">
                                <label className="mb-7 form-label" htmlFor="phoneNumber">Phone Number</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                    <input type="tel" id="phoneNumber" placeholder="05x-xxxxxxx" className="form-control" name="phoneNumber" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.phoneNumber} required />
                                </div>
                                {loginForm.errors.phoneNumber && loginForm.touched.phoneNumber && <p className="error-message">{loginForm.errors.phoneNumber}</p>}
                            </div>

                            {/* שדה תמונה */}
                            <div className="mb-2">
                                <label className="form-label" htmlFor="img">Img</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-image"></i></span>
                                    <input type="text" id="img" placeholder="img url here" className="form-control" name="img" onChange={(event) => { const imgUrl = event.target.value; loginForm.setFieldValue("img", imgUrl); }} required/>
                                </div>
                            </div>

                            {/* תאריך לידה  */}
                            <div className="mb-2">
                                <label className="form-label" htmlFor="birthDate">Birth Date</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
                                    <input type="date" id="birthDate" className="form-control" name="birthDate" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur}     value={loginForm.values.birthDate ? new Date(loginForm.values.birthDate).toISOString().split('T')[0] : ''} required />
                                </div>
                                {loginForm.errors.birthDateValidate && loginForm.touched.birthDate && <p className="error-message">{loginForm.errors.birthDateValidate}</p>}
                            </div>
                                
                            {/* שדה כתובת (עיר,רחוב,מספר בית) */}
                            <label className="form-label">Address</label>
                            <div className="mb-5 d-flex justify-content-between">
                                <div className="me-2">
                                    <input
                                        type="text"
                                        id="city"
                                        className="form-control"
                                        name="address.city"
                                        onChange={(event) => {
                                            const selectedCity = event.target.value;
                                            if (selectedCity || event.target.value.length === 0) {
                                                loginForm.setFieldValue("address.city", selectedCity);
                                            }
                                        }}
                                        value={loginForm.values.address.city}
                                        list="citiesList"
                                        placeholder="Enter City"
                                        required
                                    />
                                    <datalist id="citiesList">
                                        {cities.map((city, index) => (
                                            <option key={index} value={city} />
                                        ))}
                                    </datalist>
                                    {loginForm.errors.address?.city && loginForm.touched.address?.city && <p className="error-message">{loginForm.errors.address.city}</p>}
                                </div>
                                <div className="me-2">
                                    <input
                                        type="text"
                                        id="street"
                                        className="form-control"
                                        name="address.street"
                                        onChange={(event) => {
                                            const selectedStreet = event.target.value;
                                            if (selectedStreet || event.target.value.length === 0) {
                                                loginForm.setFieldValue("address.street", selectedStreet);
                                            }
                                        }}
                                        value={loginForm.values.address.street}
                                        list="streetsList"
                                        placeholder="Enter Street"
                                        required
                                    />
                                    <datalist id="streetsList">
                                        {streets.map((street, index) => (
                                            <option key={index} value={street} />
                                        ))}
                                    </datalist>
                                    {loginForm.errors.address?.street && loginForm.touched.address?.street && <p className="error-message">{loginForm.errors.address.street}</p>}
                                </div>
                                <div className="me-2">
                                    <input type="number" id="houseNumber" className="form-control" name="address.houseNum" required placeholder="No."/>
                                </div>
                            </div>

                            {/* כפתור הרשמה */}
                            <div className="d-flex justify-content-center mx-4">
                                <button type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: '8px', padding: '5px 40px' }}>Submit</button>
                            </div> 

                          </form>
                        </div>
                        
                        {/* צד ימין של דף הרשמה (כותרת,תמונה ומעבר לדף התחברות) */}
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center order-1 order-lg-2">
                            {/* כותרת דף הרשמה */}
                            <p className="text-center h1 mb-5 mx-1 mx-md-4 mt-4 ">Registeration</p>
                            {/* תמונה */}
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                            {/* כותרת מעבר לדף התחברות במידה ורשומים */}
                            <p className="text-center h6 mb-5 mx-1 mx-md-4 mt-4 ">Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></p>
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
