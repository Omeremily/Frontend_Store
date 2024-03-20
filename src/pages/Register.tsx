import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { User } from "../types/userTypes";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Register.css';


export default function Register() {

    function validate(values: User){
        const errors: Partial<User> = {};
      
        // Full name must be at least 2 characters long and less than 50 characters, containing only English letters
        if (!/^[A-Za-z]{2,50}$/.test(values.fullName)) {
            errors.fullName = 'Invalid full name';
        }

        // Phone number format 05x-xxxxxxx
        if (!/^(05\d)-\d{7}$/g.test(values.phoneNumber)) {
            errors.phoneNumber = 'Invalid phone number';
        }

        // Birth date should be at least 18 years old
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); 
        if (values.birthDate > minDate) {
            errors.birthDateValidate = 'Invalid birth date';
        }

        return errors;
    }

    const loginForm= useFormik<User>({
        initialValues:{
            email:'',
            fullName:'',
            phoneNumber:'',
            img:'',
            birthDate:new Date(),
            birthDateValidate: '',
            password:'',
            address: {
                city:'',
                street:'',
            },
        },
        validate,
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        }
    })

    return (
        <>
          <NavBar />
          <section className="vh-100">
            <div className="container h-100">
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
                                    <input type="file" id="img" placeholder="img src" className="form-control" name="img" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.img} required />
                                </div>
                                {loginForm.errors.img && loginForm.touched.img && <p className="error-message">{loginForm.errors.img}</p>}
                            </div>

                            {/* שדה תאריך לידה */}
                            <div className="mb-2">
                                <label className="form-label" htmlFor="birthDate">Birth Date</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
                                    <input type="date" id="birthDate" className="form-control" name="birthDate" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.birthDate} required />
                                </div>
                                {loginForm.errors.birthDate && loginForm.touched.birthDate && <p className="error-message">{loginForm.errors.birthDate}</p>}
                            </div>
                                
                            {/* שדה כתובת (עיר,רחוב,מספר בית) */}
                            <label className="form-label">Address</label>
                            <div className="mb-4 d-flex justify-content-between">
                                <div className=" me-2">
                                    <input type="text" id="city" className="form-control" name="address.city" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.address.city} required placeholder="City"/>
                                    {loginForm.errors.address?.city && loginForm.touched.address?.city && <p className="error-message">{loginForm.errors.address.city}</p>}
                                </div>
                                <div className=" me-2">
                                    <input type="text" id="street" className="form-control" name="address.street" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.address.street} required placeholder="Street" />
                                    {loginForm.errors.address?.street && loginForm.touched.address?.street && <p className="error-message">{loginForm.errors.address.street}</p>}
                                </div>
                                <div className="">
                                    <input type="text" id="houseNumber" className="form-control" name="address.houseNumber" onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} value={loginForm.values.address.houseNumber} required placeholder="No."/>
                                    {loginForm.errors.address?.houseNumber && loginForm.touched.address?.houseNumber && <p className="error-message">{loginForm.errors.address.houseNumber}</p>}
                                </div>
                            </div>
      
                            {/* כפתור הרשמה */}
                            <div className="d-flex justify-content-center mx-4">
                              <button type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: '8px', padding: '5px 40px'  }}>Submit</button>
                            </div> 
                          </form>
                        </div>
                        
                        {/* צד ימין של דף הרשמה (כותרת,תמונה ומעבר לדף התחברות) */}
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center order-1 order-lg-2">
                            {/* כותרת דף הרשמה */}
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">Registeration</p>
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
        </>
      );
    }   









// import { useState, useContext } from "react";
// import { UsersContext } from "../context/usersContext";
// import NavBar from "../components/NavBar";

// export default function Register() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [img, setImg] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [city, setCity] = useState("");
//   const [street, setStreet] = useState("");
//   const [number, setNumber] = useState("");
//   const [alertField, setAlertField] = useState("");

//   // ייבוא של הפונקציה מתוך הקונטקס
//   const { registerUser } = useContext<any>(UsersContext);

//   // בדיקות

//   // UserName
//   const isUserNameValidCheck = (value: string) => {
//     if (value.length === 0) {
//       return true;
//     }
//     const regex = /^[A-Za-z0-9@$!%*?&#^_-]+$/; // Accepts only English letters, numbers, and special characters
//     return value.length <= 60 && regex.test(value);
//   };

//   // FirstName/LastName
//   const isFirstNameValidCheck = (value: string) => {
//     if (value.length === 0) {
//       return true;
//     }

//     const regex = /^[a-zA-Z]+$/; // Accepts only English alphabetic characters
//     return regex.test(value);
//   };

//   function handleSubmit(event: { preventDefault: () => void }) {
//     event.preventDefault();

//     registerUser({
//       userName,
//       password,
//       img,
//       firstName,
//       lastName,
//       email,
//       date,
//       city,
//       street,
//       number,
//     });

//     // ניקוי הטופס אחרי ההרשמה
//     setUserName("");
//     setPassword("");
//     setPassword2("");
//     setImg("");
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setDate("");
//     setCity("");
//     setStreet("");
//     setNumber("");
//   }

//   return (
//     <>
//       <NavBar />
//       <h1>Register</h1>
//       {alertField && <div>{alertField}</div>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           id="username"
//           placeholder="Add user name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           onBlur={() =>
//             !isUserNameValidCheck(userName)
//               ? setAlertField("Please enter a valid user name")
//               : setAlertField("")
//           }
//         />
//         <input
//           type="password"
//           id="password"
//           placeholder="Add password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           id="password2"
//           placeholder="Repeat password"
//           value={password2}
//           onChange={(e) => setPassword2(e.target.value)}
//         />
//         <input
//           type="file"
//           id="img"
//           placeholder="Add img"
//           value={img}
//           onChange={(e) => setImg(e.target.value)}
//         />
//         <input
//           type="text"
//           id="firstName"
//           placeholder="Add first name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           onBlur={() =>
//             !isFirstNameValidCheck(firstName)
//               ? setAlertField("Please enter a valid first name")
//               : setAlertField("")
//           }
//         />
//         <input
//           type="text"
//           id="lastName"
//           placeholder="Add last name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           onBlur={() =>
//             !isFirstNameValidCheck(lastName)
//               ? setAlertField("Please enter a valid Last name")
//               : setAlertField("")
//           }
//         />
//         <input
//           type="email"
//           id="email"
//           placeholder="Add email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="date"
//           id="date"
//           placeholder="Add date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           id="city"
//           placeholder="Add city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <input
//           type="text"
//           id="street"
//           placeholder="Add street"
//           value={street}
//           onChange={(e) => setStreet(e.target.value)}
//         />
//         <input
//           type="number"
//           id="number"
//           placeholder="Add number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//         <button type="submit">Register</button>
//       </form>
//     </>
//   );
// }
