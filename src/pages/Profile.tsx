import NavBar from "../components/NavBar";
import { useContext } from "react";
import { UsersContext } from "../context/usersContext";
import { Link } from "react-router-dom";

export default function Profile() {
    // משיכת המשתמש המחובר מהיוזר-קונטקסט
    const { logoutClient } = useContext<any>(UsersContext);
    const loggedInUser = JSON.parse(sessionStorage.getItem("users") || "");

    return (
        <>
            <NavBar />
            <section className="vh-100">
                <div className="container h-100 mt-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center mb-3">
                                        <div className="col-md-10 col-lg-6 col-xl-5">
                                            {loggedInUser ? (
                                                <>
                                                    <p className="text-center h1 mb-5 mx-1 mx-md-4 mt-4">Welcome, {loggedInUser.fullName}!</p>
                                                    <img src={loggedInUser.img} alt="Profile" className="img-fluid rounded-circle mx-auto d-block mb-4" style={{ width: '200px' }} />
                                                    <p className="text-center h5 mb-5 mx-1 mx-md-4">Email: {loggedInUser.email}</p>
                                                    <p className="text-center h5 mb-5 mx-1 mx-md-4">Phone Number: {loggedInUser.phoneNumber}</p>
                                                    <p className="text-center h5 mb-5 mx-1 mx-md-4">Birth Date: {new Date(loggedInUser.birthDate).toLocaleDateString()}</p>
                                                    {/* ניתן להוסיף פרטים נוספים כפי שנדרש */}
                                                    <div className="d-flex justify-content-center mx-4">
                                                    <button onClick={() => logoutClient()} className="btn btn-danger btn-lg mb-5 mt-3" style={{ borderRadius: '8px', padding: '5px 40px' }}>
                                                        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
                                                    </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <p className="text-center h1 mb-5 mx-1 mx-md-4 mt-4">Please login to view your profile</p>
                                            )}
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
