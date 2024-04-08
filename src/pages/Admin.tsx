import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import AdminNav from "../components/AdminNavBar";
import Footer from "../components/Footer";


export default function Admin() {

    // אם המשתמש מחובר או לא
    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);

    // במידה ובסשן סטורג האדמין קיים אז שינוי הסטטוס להצגת דף אדמין
    useEffect(() => {
        if(sessionStorage.getItem("admin")) {
            setIsAdminLogin(true);
        }
    }, [])

    // אם הוא לא מחובר הצגת דף התחברות לאדמין
    if (!isAdminLogin) {
      return ( 
          <div className="container">
              <h1 className="mt-5">Please Log In</h1>
              <p className="lead">You need to log in as an admin to access this page.</p>
              <Link to="/login" className="btn btn-primary">Log In</Link>
          </div>
      ) 
  } 

    return (
        <div>
            <NavBar />

            <div className="container" style={{ marginTop: "100px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                {/* הצגת קומפוננטת אופציות פעולות האדמין */}
                <AdminNav data-test="sidebar"/>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1>Admin</h1>
                    <img src="../../public/imgs/admin.svg" alt="Admin" style={{ width: "400px" }} />
                </div>
            </div>

            <Footer />    
        </div>

    );
}
