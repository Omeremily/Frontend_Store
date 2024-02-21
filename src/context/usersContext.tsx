import { createContext, useState } from "react";

export const UsersContext = createContext({});

export default function UsersContextProvider({ children}:any) {

    //מערך של כל המשתמשים באתר
    const [users, setUsers] = useState<any[]>([]);

    //Register user: פונקציה המקבלת את כל פרטי המשתמש, יוצרת משתמש חדש ומוסיפה
    //אותו למאגר המשתמשים
    function registerUser(user:any){

        //הוספת החשבון החדש למערך
        setUsers([...users,user]);
    
        //שמירה של המערך המעודכן בלוקל סטורג
        SaveToLocal(user);
    
    }
    
    function LoadUsers(){

        let data= localStorage.getItem('users');
        return JSON.parse(data) || new Array();
        
    }
    
    function SaveToLocal(user:any)//(users)
    {
        localStorage.setItem('users',JSON.stringify(users));
    }

    function DeleteUser(event){
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
        LoadUsers,
        SaveToLocal,
        DeleteUser
    }


    return (
        <UsersContext.Provider value={value as any}>
            {children}
        </UsersContext.Provider>
    );
}