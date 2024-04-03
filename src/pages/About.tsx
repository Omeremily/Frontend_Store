import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../css/about.css";

export default function About() {
  return (
    <div>
        <NavBar />
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={"./public/imgs/about.jpeg"} alt="About" className="img-fluid about-image" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-content">
                            <h2 className="section-title">About Us</h2>
                            <p className="section-description">
                                Lorem ipsum d                                Phasellus at elit vel libero lacinia eleifend. In hac habitasse platea dictumst. Sed auctor lectus non pharetra tempus.
olor sit amet, consectetur adipiscing elit. Duis eget eros vel libero rhoncus efficitur. Vestibulum auctor condimentum nisl vel dignissim. Nullam non justo ac tortor sollicitudin placerat.
                            </p>
                            <p className="section-description">
                                Nulla facilis                                Phasellus at elit vel libero lacinia eleifend. In hac habitasse platea dictumst. Sed auctor lectus non pharetra tempus.
i. Mauris hendrerit velit vitae risus cursus, sed ultrices nulla ullamcorper. Ut suscipit tellus eu risus condimentum, non posuere nulla bibendum.
                            </p>
                            <p className="section-description">
                                Phasellus at elit vel libero lacinia eleifend.                                Phasellus at elit vel libero lacinia eleifend. In hac habitasse platea dictumst. Sed auctor lectus non pharetra tempus.
 In hac habitasse platea dictumst. Sed auctor lectus non pharetra tempus.
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