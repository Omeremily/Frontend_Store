import NavBar from "../components/NavBar";
import Contact from "../components/contact";
import SaleItemSection from "../components/SaleItemSection";
import Banner from "../components/Banner"; // יבוא של קומפוננטת הקרוסלה
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <NavBar />
      {/* יצירת קרוסלת הבאנרים */}
      <div style={{
        width: '100%',
        height: '57vh', // כאן נקבע גובה ביחס לגובה של המסך
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Banner />
      </div>
      <div id="saleItemSection" style={{
        margin: '10% auto',
      }}>
        <SaleItemSection />
      </div>
      <div id="contactus">
      <Contact />
      </div>
      <div id="footer">
      <Footer />
      </div>


    </>
  );
}
