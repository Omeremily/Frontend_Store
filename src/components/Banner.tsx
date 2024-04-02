import 'bootstrap/dist/css/bootstrap.min.css'; // יבוא של קובץ CSS של Bootstrap
import { Carousel } from 'react-bootstrap'; // יבוא של Carousel מהספרייה של React Bootstrap
import img1 from "../../public/imgs/home-banner/top-view-yoga-essential-items.jpg"; // יבוא של תמונה ראשונה
import img2 from "../../public/imgs/home-banner/A_clean_and_modern_image_of_a_male_athlete_order.png"; // יבוא של תמונה שנייה
import img3 from "../../public/imgs/home-banner/sports-equipment-located-green-shirt.jpg"; // יבוא של תמונה שלישית
import { BannerProps } from '../types/homeTypes'; // יבוא של סוג נתונים לתכונות הבאנר
import '../css/Home.css'; // יבוא של קובץ CSS עבור הדף הראשי
import { Link } from 'react-router-dom'; // יבוא של רכיב Link מהספרייה של react-router-dom

function Banner() {
  // פונקציה מובנית בריאקט המגלילה את הדף לחלק מסוים על פי האיידי שלו
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // תכונות של הבאנרים, כולל כפתורים ולינקים
  const banners: BannerProps[] = [
    { image: img1, header: "Empower Your Fitness Journey", description: "Discover a range of products to enhance your training and health", textAlign: 'left', textColor: 'rgb(138, 138, 138)', showButton: true, buttonText: 'Shop Now', linkTo: '/store'}, // באנר הראשון עם לינק לחנות
    { image: img2, showButton: false }, // באנר שני בלי כפתור
    { image: img3, header: "Ready to elevate your workout?", description: "Check out our exclusive hot deals", textAlign: 'right', textColor: 'rgb(100, 100, 100)', showButton: true, buttonText: 'Discover Deals', onClick: () => scrollToSection('saleItemSection') } // באנר שלישי עם כפתור שמגליל לחלק מסוים בדף
  ];

  return (
    <div className="banner-container">
      {/* קרוסלה 3 חלקים */}
      <Carousel className="carousel-container">
              
        {/* עבור כל חלק - הצגת תמונה, כפתור, כותרת ופסקה */}
        {banners.map((banner, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <img
              className="banner-image"
              src={banner.image}
              alt={`Banner ${index + 1}`}
            />
            <Carousel.Caption style={{ color: banner.textColor, textAlign: banner.textAlign }}>
              <div>
                <h5 className="banner-header">{banner.header}</h5>
                <p className="banner-description">{banner.description}</p>
                  {/* בדיקה אם קיים כפתור ואם יש הפניה ללינק או גלילה לחלק מסוים באותו עמוד */}
                  {banner.showButton && (
                  banner.linkTo ? ( 
                    <Link to={banner.linkTo} className="banner-button">
                      {banner.buttonText}
                    </Link>
                  ) : (
                    <button className="banner-button" onClick={banner.onClick}>
                      {banner.buttonText}
                    </button>
                  )
                )}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
