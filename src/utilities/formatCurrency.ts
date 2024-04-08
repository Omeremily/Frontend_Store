// הגדרת קבוע שמייצר אובייקט עבור המטבע (שקלים ישראליים)
// עם הגדרת הפורמט לסגנון מטבע
const CURRENT_FORMATTER= new Intl.NumberFormat(undefined,{
    currency: "ILS", style: "currency",   
})

// ייצוא פונקציה המקבלת מספר ומחזירה את המספר המוצג בפורמט המטבע הנוכחי, שהוגדר על ידי הקבוע
export function formatCurrency(number: number){
    return CURRENT_FORMATTER.format(number);
}