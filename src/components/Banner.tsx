import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from "../img/imgs-Banner/top-view-yoga-essential-items.jpg";
import img2 from "../img/imgs-Banner/A_clean_and_modern_image_of_a_male_athlete_order.png";
import img3 from "../img/imgs-Banner/sports-equipment-located-green-shirt.jpg";
import { BannerProps } from '../types/homeTypes';
import '../css/Home.css';

function Banner() {
  const banners: BannerProps[] = [
    { image: img1, header: "Empower Your Fitness Journey", description: "Discover a range of products to enhance your training and health", textAlign: 'left', textColor: 'rgb(138, 138, 138)', showButton: true, buttonText: 'Shop Now'},
    { image: img2, showButton: false },
    { image: img3, header: "Ready to elevate your workout?", description: "Explore our exclusive deals", textAlign: 'right', textColor: ' rgb(100, 100, 100)', showButton: true, buttonText: 'Shop Now 3'}
  ];

  return (
    <div className="banner-container">
      <Carousel className="carousel-container">
        {banners.map((banner, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <img
              className="d-block w-100 banner-image"
              src={banner.image}
              alt={`Banner ${index + 1}`}
            />
            <Carousel.Caption style={{ color: banner.textColor, textAlign: banner.textAlign }}>
              <div>
                <h5 className="banner-header">{banner.header}</h5>
                <p className="banner-description">{banner.description}</p>
                
                {banner.showButton && <button className="banner-button">{banner.buttonText}</button> }
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
