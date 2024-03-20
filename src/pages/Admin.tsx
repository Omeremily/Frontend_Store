import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Admin() {

    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);

    useEffect(() => {
        if(sessionStorage.getItem("admin")) {
            setIsAdminLogin(true);
        }
    }, [])

    if (!isAdminLogin) {
        return ( 
            <div>
                <h1>please log in</h1>
                <Link to="/login"></Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Admin</h1>
        </div>
    );
}