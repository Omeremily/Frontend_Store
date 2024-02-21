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

    // function LoadUsers(){
    //     let data: string | null = localStorage.getItem('users');
    //     if (data !== null) {
    //         let parsedData = JSON.parse(data);
    //         return parsedData;
    //     } else {
    //         return new Array();
    //     }
    // }
    
    function SaveToLocal(users:any[])
    {
        localStorage.setItem('users', JSON.stringify(users));
    }

    function DeleteUser(event: { target: { parentNode: any; }; }){
        let td = event.target.parentNode;
        let tr = td.parentNode;
      
        // מציאת האינדקס של היוזר הספציפי בטבלה
        let rowIndex = Array.from(tr.parentNode.children).indexOf(tr)-1;
      
        // הסרה מהמערך
        if (users && users.length > rowIndex) {
          users.splice(rowIndex, 1);
      
        // שמירה של המערך המעודכן
          SaveToLocal(users);
        }
      
        // הסרה מהטבלה שאנחנו רואים באתר
        tr.remove();
      }

    const value={
        users,
        registerUser,
        //LoadUsers,
        SaveToLocal,
        DeleteUser
    }


    return (
        <UsersContext.Provider value={value as any}>
            {children}
        </UsersContext.Provider>
    );
}