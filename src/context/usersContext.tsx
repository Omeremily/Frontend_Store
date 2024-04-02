import { createContext, useState, useEffect } from "react";

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
        EditUser
        
    }


    return (
        <UsersContext.Provider value={value as any}>
            {children}
        </UsersContext.Provider>
    );
}