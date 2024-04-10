import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../css/about.css";

export default function About() {
  return (
    <div>
        <NavBar />

        <section className="about-section">
            <div className="container ">
                <div className="row">

                    {/* תמונה בדף אודות */}
                    <div className="col-md-4 mt-5 ">
                        <img src={"./public/imgs/about.jpeg"} alt="About" className="img-fluid about-image" />
                    </div>

                    <div className="col-md-8 mt-5">

                        <div className="about-content">
                            
                            {/* כותרת דף אודות */}   
                            <h2 className="section-title">
                                About Us
                            </h2>

                            {/* פסקה דף אודות */}
                            <p className="section-description">
                                At SweetNSmile, we strive to deliver an exceptional shopping experience. Our platform is designed to provide a seamless interface for browsing and purchasing a wide range of products. From cutting-edge tech gadgets to stylish fashion essentials, we've curated a collection that caters to diverse tastes and preferences.                            
                            </p>
                            
                            {/* פסקה דף אודות */}
                            <p className="section-description">
                                As aspiring developers, we are committed to leveraging the latest technologies to enhance user interactions and streamline transactions. Our goal is to not only offer quality products but also to ensure that your journey through our store is enjoyable and effortless.
                            </p>

                            {/* פסקה דף אודות */}
                            <p className="section-description">
                                Thank you for visiting SweetNSmile. Explore our offerings and feel free to reach out with any questions or feedback. We look forward to serving you!
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  );
}
