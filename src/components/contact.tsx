import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState('');

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
      
        if (form.current) {
            emailjs
            .sendForm('service_dzs5qde', 'template_vk66xue', form.current, {
                publicKey: 'LGTE-JjNA7Y1zpOUY',
            })
            .then(
                () => {
                    setMessage('SUCCESS! Email sent.');
                    if (form.current) {
                        form.current.reset();
                    }
                },
                (error) => {
                    setMessage(`FAILED... ${error.text}`);
                },
            );
        } else {
            setMessage('Form is null');
        }
    }

    return (
      <>
          <section className="mb-5">
              <div className="container h-100 mt-5">
                  <div className="row justify-content-center">
                      <div className="col-lg-12 col-xl-11">
                          <div className="card text-black" style={{ borderRadius: '25px', padding: '5px' }}>
                              <div className="card-body p-md-3">
                                  <div className="row justify-content-center align-items-center">
                                      <div className="col-md-5 col-lg-4 order-2 order-md-1 d-flex justify-content-center" style={{ margin: '0 auto' }}>
                                          {/* תמונה */}
                                          <img src='/imgs/contactus.jpg' className="img-fluid mb-3" style={{ width: '80%', maxWidth: '300px', marginTop: '20px' }} alt="contactus" />
                                      </div>
                                      <div className="col-md-5 col-lg-5 order-1 order-lg-2 d-flex flex-column align-items-center" style={{ margin: '0 auto' }}>
                                          {/* כותרת דף הרשמה */}
                                          <p className="text-center h2 mb-4 mx-1 mx-md-4 mt-1">Contact us</p>   
                                          {/* טופס יצירת קשר */}
                                          <form ref={form} onSubmit={sendEmail} className="w-100">
                                              {/* שם איש הקשר לחזרה */}
                                              <div className="mb-3">
                                                  <label className="form-label">Name</label>
                                                  <input type="text" className="form-control" name="user_name" />
                                              </div>
                                              {/* אימייל לחזרה */}
                                              <div className="mb-3">
                                                  <label className="form-label">Email</label>
                                                  <input type="email" className="form-control" name="user_email" />
                                              </div>
                                              {/* תוכן ההודעה */}
                                              <div className="mb-3">
                                                  <label className="form-label">Message</label>
                                                  <textarea className="form-control" name="message" />
                                              </div>
                                              {/* כפתור שליחת הטופס */}
                                              <div className="d-grid">
                                                <button type="submit" className="submit-button">Send</button>
                                              </div>
                                          </form>
                                          {/* הצגת הודעה מתאימה לאחר שליחת הטופס */}             
                                          {message && (
                                              <div className={message.includes('SUCCESS') ? 'success-message' : 'error-message'}>
                                                  {message}
                                              </div>
                                          )}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
  }
