import Admin from "../../src/pages/Admin";

describe('Admin Page Test', () => {
  beforeEach(() => {
    cy.mount(<Admin />); //טעינת דף האדמין לפני כל בדיקה
  });

  //בדיקה שבתוך דף האדמין הראשי אכן קיימת ונטענת הקומפוננטה שמציגה את הקישור לדף הוספת מוצר
  it('should display AdminNav when admin is logged in', () => {
    // סימול כניסת המנהל
    sessionStorage.setItem('admin', 'true');
    // רענון הדף כדי להחיל את השינוי
    cy.reload();
    // בדיקה שהדף מכיל את הקומפוננטה AdminNavBar"
    cy.contains('[data-test="sidebar"]').should('exist');
  });
});
