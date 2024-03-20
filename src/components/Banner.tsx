import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from "../img/imgs-Banner/Folio - 2.png";
import img2 from "../img/imgs-Banner/Share.png";
import img3 from "../img/imgs-Banner/1.svg";
import { BannerProps } from '../types/storeTypes';

  function Banner() {
    const banners: BannerProps[] = [
      { image: img1, header: "Header 1", description: "Description 1", textAlign: 'left', textColor: 'darkgray', fontSize: '24px' },
      { image: img2, header: "Header 2", description: "Description 2", textAlign: 'center', textColor: 'darkblue', fontSize: '24px' },
      { image: img3, header: "Header 3", description: "Description 3", textAlign: 'right', textColor: 'black', fontSize: '24px' }
    ];
  
  return (
    <div style={{ height: '45vh' }}>
      <Carousel style={{ height: '100%' }}>
        {banners.map((banner, index) => (
            <Carousel.Item key={index} style={{ height: '100%' }}>
              <Carousel.Caption style={{ color: banner.textColor, position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: banner.textAlign, fontSize: banner.fontSize }}>
                <h5 style={{ fontSize: banner.fontSize }}>{banner.header}</h5>
                <p style={{ fontSize: banner.fontSize }}>{banner.description}</p>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={banner.image}
                alt={`Banner ${index + 1}`}
                style={{ height: '45vh', objectFit: 'cover' }}
              />
            </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
