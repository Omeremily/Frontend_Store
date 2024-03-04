import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';

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
        <h1 className='text-center'>Contact Us</h1>
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            {message && (
                <div className={message.includes('SUCCESS') ? 'success-message' : 'error-message'}>
                    {message}
                </div>
            )}
        </div>
        </>
      );
}


