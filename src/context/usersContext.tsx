import { createContext, useState, useEffect } from "react";
import { User } from "../types/userTypes";

export const UsersContext = createContext<any>({});

export default function UsersContextProvider({ children }: any) {

    // מערך של כל המשתמשים באתר
    const [users, setUsers] = useState<User[]>([]);

    // Register user: פונקציה המקבלת את כל פרטי המשתמש, יוצרת משתמש חדש ומוסיפה
    // אותו למאגר המשתמשים
    function registerUser(user: User) {
        // Update the state using a callback
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers, user];
            SaveToLocal(updatedUsers);
            return updatedUsers;
        });
    }

    // הפונקציה דיאקטיבייט מקבלת כתובת מייל ומגדירה את המשתמש המתאים כלא פעיל
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

    // הפונקציה reactivateClient מקבלת כתובת מייל ומגדירה את המשתמש המתאים כפעיל
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

    // הפונקציה ניתוק משתמש מקבלת כתובת מייל ובודקת האם המשתמש הוא המשתמש המחובר, 
    // ואם כן מנתקת אותו מהמערכת על ידי ניקוי הסשן סטורג
    function logoutClient(email: string) {
        const loggedInUser = JSON.parse(sessionStorage.getItem('users') || '');
        if (loggedInUser.email === email) {
            sessionStorage.removeItem('users');
        }
    }

    // הפונקציה עריכת משתמש מקבלת את כל פרטי הלקוח ומעדכנת אותם למעט כתובת המייל
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
        // Load users from localStorage when component mounts
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
        else
            userArr = [];
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
