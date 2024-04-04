import { createContext, useState, useEffect } from "react";
import { User } from "../types/userTypes";

export const UsersContext = createContext({});

export default function UsersContextProvider({ children}:any) {

    //מערך של כל המשתמשים באתר
    const [users, setUsers] = useState<any[]>([]);

    //Register user: פונקציה המקבלת את כל פרטי המשתמש, יוצרת משתמש חדש ומוסיפה
    //אותו למאגר המשתמשים
    function registerUser(user:any){
        // Update the state using a callback
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers, user];
            SaveToLocal(updatedUsers);
            return updatedUsers;
        });
    }
    

    useEffect(() => {
        // Load users from localStorage when component mounts
        const data: string | null = localStorage.getItem('users');
        if (data !== null) {
            setUsers(JSON.parse(data));
        }
    }, []);

    
    function EditUser(user:any){
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers, user];
            SaveToLocal(updatedUsers);
            return updatedUsers;
        });
    }


    function loadUsers() {
        let userArr: User[] = [];
        if(localStorage.getItem('users')){
            userArr = JSON.parse(localStorage.getItem('users') as string) as User[];
        }
        else 
            userArr = [
        ];

        setUsers(userArr);
        localStorage.setItem("users", JSON.stringify(userArr));
    }

    useEffect(()=>{
        loadUsers();
    },[]);

    function loginUser(fullName: string, password: string) {

        const loggedInUser = users.find(user => user.fullName === fullName && user.password === password);
        if (loggedInUser) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            console.log('User logged in:', loggedInUser);
            return true;
        } else {
            alert('Invalid username or password');    
            return false;
    }

}

    // function deleteUser (event: { target: { parentNode: any; }; }) {
    //     let td = event.target.parentNode;
    //     let tr = td.parentNode;
        
    //     // מציאת האינדקס של היוזר הספציפי בטבלה
    //     let rowIndex = Array.from(tr.parentNode.children).indexOf(tr)-1;
        
    //     // הסרה מהמערך
    //     if (users && users.length > rowIndex) {
    //         users.splice(rowIndex, 1);
            
    //         // שמירה של המערך המעודכן
    //         SaveToLocal(users);

    //         tr.remove();

    //     }
    // }

    
    function SaveToLocal(users:any[])
    {
        localStorage.setItem('users', JSON.stringify(users));
    }


    const value={
        users,
        registerUser,
        //LoadUsers,
        SaveToLocal,
        EditUser,
        loginUser
        
    }


    return (
        <UsersContext.Provider value={value as any}>
            {children}
        </UsersContext.Provider>
    );
}