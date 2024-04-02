import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import AdminStoreAndManage from "./AdminStoreAndManage";
import UsersTable from "../components/UsersTable";
import AdminNav from "../components/AdminNavBar";


export default function Admin() {


    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);

    useEffect(() => {
        if(sessionStorage.getItem("admin")) {
            setIsAdminLogin(true);
        }
    }, [])

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
                <AdminNav />
                <h1>Admin</h1>
            </div>
        
        </div>

    );
}