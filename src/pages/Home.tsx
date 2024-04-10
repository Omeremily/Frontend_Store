import NavBar from "../components/NavBar";
import Contact from "../components/contact";
import SaleItemSection from "../components/SaleItemSection";
import Banner from "../components/Banner"; // יבוא של קומפוננטת הקרוסלה
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      {/* נאב-בר */}
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

      {/* סקשיין במוצרי במבצע */}
      <div id="saleItemSection" style={{
        margin: '3% auto',
      }}>
        <SaleItemSection />
      </div>

      <section id="about-container">
          {/* כותרת דף אודות */}   
          <h2 className="section-title">
            About Us
          </h2>

          {/* פסקה דף אודות */}
          <p className="section-description">
            At SweetNSmile, we strive to deliver an exceptional shopping experience. Our platform is designed to provide a seamless interface for browsing and purchasing a wide range of products. From cutting-edge tech gadgets to stylish fashion essentials, we've curated a collection that caters to diverse tastes and preferences.
            
            {/* כפתור למעבר לחנות */}
            <div className="mt-4">
              <Link to="/store" id="about-btn">
                Learn more
              </Link>
            </div>
          </p>
      </section>


      {/* סקשיין תמונה וכפתור מעבר לחנות */}
      <div id="home-btm-img-container" style={{ position: 'relative' }}>
        <img id="home-btm-img" src="./public/imgs/home-banner/A_clean_and_modern_image_of_a_male_athlete_order.png" alt="" style={{ width: '100%'}} />
        <div className="home-btm-img-overlay" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 300%)' }}>
            <Link to="/store" className="banner-button">
                Shop Now
            </Link>
        </div>
      </div>

      {/* סקשיין יצירת קשר */}
      <div id="contactus">
      <Contact />
      </div>

      {/* פוטר */}
      <Footer />


    </>
  );
}
