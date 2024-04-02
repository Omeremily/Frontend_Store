// ייבוא המאפיינים של מוצר בחנות
import { StoreItemProps } from "../../src/types/storeTypes";

describe('Add Product to Store - from admin page', () => {
  before(() => {
    // טעינת דף המנהל לאחר שהוזנו בו ערכים בסשן סטורג לפני כל בדיקה
    cy.window().then(window => {
      window.sessionStorage.setItem('admin', 'true'); // הוספת ערך בסשן סטורג שמציין שהמשתמש הוא מנהל
      cy.visit('http://192.168.1.106:5173/Admin'); // טעינת דף המנהל
    });
  });

  it('should display AdminNav when admin is logged in', () => {
    // בדיקה שמכיל את התוכן של הקומפוננטה AdminNavBar
    // לחיצה על הקישור לדף הוספת מוצר  
    cy.get('[data-test="manage-store"]').should('exist').click();

    // בדיקה שהשדות קיימים והקלדת ערכים בתוכם - בדף הוספת מוצר
    cy.get('form').should('exist');
    cy.get('[data-test="product-id"]').should('exist').type('25'); // הזנת מאפיין מזהה
    cy.get('[data-test="product-name"]').should('exist').type('Android Smart Watch'); // הזנת שם מוצר
    cy.get('[data-test="product-category"]').should('exist').type('Fitenss gadgets'); // הזנת קטגוריה
    cy.get('[data-test="product-description"]').should('exist').type('Smart Watch for Men Women, 1.85" Smartwatch (Answer/Make Call), IP68 Waterproof Fitness Tracker, 100+ Sport Modes, Heart Rate Monitor, Sleep Monitor, Pedometer, Smartwatches for Android iOS'); // הזנת תיאור
    cy.get('[data-test="product-image"]').should('exist').type('https://m.media-amazon.com/images/I/71K7KOIy3ZL._AC_SX679_.jpg'); // הזנת קישור לתמונה
    cy.get('[data-test="product-min"]').should('exist').type('1'); // הזנת כמות מינימלית
    cy.get('[data-test="product-max"]').should('exist').type('10'); // הזנת כמות מקסימלית
    cy.get('[data-test="product-price"]').should('exist').type('180'); // הזנת מחיר
    cy.get('[data-test="product-sale-price"]').should('exist').type('200'); // הזנת מחיר מבצע

    // בדיקה שכפתור הוספת מוצר קיים ולחיצה עליו
    cy.get('[data-test="add-product-btn"]').should('exist').click();
  
    // בדיקה שהמוצר נוסף למאגר המוצרים בלוקאל סטורג
    cy.window().then(window => {
      const itemsString = window.localStorage.getItem('items'); // איתור המאפיין בלוקאל סטורג
      if (itemsString) {
        const items: Partial<StoreItemProps>[] = JSON.parse(itemsString); // פענוח הנתונים מתוך המחרוזת למערך של אובייקטים חלקיים של StoreItemProps
        if (Array.isArray(items)) {
          const addedProduct = items.find((item: Partial<StoreItemProps>) => item?.name === 'Android Smart Watch'); // בדיקה אם המוצר התווסף לרשימה
          expect(addedProduct).to.exist; // אמיתיות הצפייה שהמוצר נוסף
        } else {
          console.log('The "items" key in localStorage is not an array'); // הדפסת הודעה אם המאפיין בלוקאל סטורג אינו מערך
        }
      } else {
        console.log('The "items" key in localStorage is null'); // הדפסת הודעה אם המאפיין בלוקאל סטורג הוא null
      }
    });

    // בדיקה אם המוצר התווסף וקיים בדף החנות
    cy.visit('http://192.168.1.106:5173/store'); // טעינת דף החנות
    cy.contains('Android Smart Watch').should('exist'); // בדיקה שהמוצר התווסף בהצלחה    

  });
});
