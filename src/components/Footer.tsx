
export default function Footer() {
  return (
      <footer className="bg-light text-center text-lg-start text-muted" style={{ marginTop: "13%" }}>
      <hr style={{ margin: "0 auto" }} /> {/* קו המפריד דק */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>
                  Sweat & Smile
                </h6>
                <p>
                  Discover protein, workout gear, and vitamins for peak performance. Fast shipping and top-notch service ensure your fitness journey's success!                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Laravel</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-2"></i>
                  Israel, Tel-Aviv, Nehemia 14
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  SweatNSmile@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>
                  + 972 54 492 5982
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>
                  + 972 3 960 6040
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
            <div className="mb-3 mb-lg-0">
              © 2024 Copyright  </div>
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
