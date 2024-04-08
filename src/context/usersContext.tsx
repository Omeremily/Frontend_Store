import { createContext, useState, useEffect } from "react";
import { User } from "../types/userTypes";
import { Link } from "react-router-dom";

export const UsersContext = createContext<any>({});

export default function UsersContextProvider({ children }: any) {

    const [users, setUsers] = useState<User[]>([]);

    function registerUser(user: User) {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers, user];
            SaveToLocal(updatedUsers);
            return updatedUsers;
        });
    }

    function deactivateClient(email: string) {
        const updatedUsers = users.map(user => {
            if (user.email === email) {
                return { ...user, isActive: false };
            }
            return user;
        });
        setUsers(updatedUsers);
        SaveToLocal(updatedUsers);
    }

    function reactivateClient(email: string) {
        const updatedUsers = users.map(user => {
            if (user.email === email) {
                return { ...user, isActive: true };
            }
            return user;
        });
        setUsers(updatedUsers);
        SaveToLocal(updatedUsers);
    }

    function logoutClient() {
        sessionStorage.removeItem('users');
        return (
            <>
                {/* הוסף את הקישור לדף התחברות */}
              <Link to="/login" onClick={logoutClient}>Logout</Link>
            </>
        );
    }
    
    function editClient(updatedUser: User) {
        const updatedUsers = users.map(user => {
            if (user.email === updatedUser.email) {
                return updatedUser;
            }
            return user;
        });
        setUsers(updatedUsers);
        SaveToLocal(updatedUsers);
    }

    useEffect(() => {
        const data: string | null = localStorage.getItem('users');
        if (data !== null) {
            setUsers(JSON.parse(data));
        }
    }, []);

    function loadUsers() {
        let userArr: User[] = [];
        if (localStorage.getItem('users')) {
            userArr = JSON.parse(localStorage.getItem('users') as string) as User[];
        }
        setUsers(userArr);
        localStorage.setItem("users", JSON.stringify(userArr));
    }

    useEffect(() => {
        loadUsers();
    }, []);

    function loginUser(fullName: string, password: string) {
        const loggedInUser = users.find(user => user.fullName === fullName && user.password === password);
        if (loggedInUser) {
            sessionStorage.setItem("users", JSON.stringify(loggedInUser));
            console.log('User logged in:', loggedInUser);
            return true;
        } else {
            alert('Invalid username or password');
            return false;
        }
    }

    function SaveToLocal(users: User[]) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    const value = {
        users,
        setUsers,
        registerUser,
        loadUsers,
        SaveToLocal,
        editClient,
        deactivateClient,
        reactivateClient,
        logoutClient,
        loginUser
    }

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
}
