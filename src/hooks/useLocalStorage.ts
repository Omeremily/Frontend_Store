import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string, intialValue: T | (() => T)){
    const[value, setValue] = useState<T>(() => {
        // בדיקה האם יש ערך במפתח הנתון בזיכרון המקומי
        const jsonValue = localStorage.getItem(key)

        // אם יש ערך במפתח, החזרת הערך שנמצא כערך בהתאם מסוג ג'ייסון
        if(jsonValue != null) return JSON.parse(jsonValue)

        // אם אין ערך קיים במפתח, החזרת הערך הראשוני
        if(typeof intialValue === 'function'){
            return (intialValue as () => T)()
        }else{
            return intialValue;
        }
    })

    // שימוש ביוז-אפקט כדי לעדכן את הערך בזיכרון המקומי בכל פעם שהערך משתנה
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    // החזרת הערך הנוכחי ופונקציה לעדכון הערך
    return [value, setValue] as [typeof value, typeof setValue];
}
