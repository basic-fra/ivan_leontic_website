import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const Contact = () => {
    const form = useRef()

    const [showNotification, setShowNotification] = useState(false);

    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const sendEmail = (e) => {
      e.preventDefault();

    const message = form.current.message.value.trim(); // Get trimmed message value
      
      // Check if the message is empty or only spaces
      if (!message) {
        setErrorMessage('Message cannot consist consist only of spaces.'); // Set error message

        // Clear error message after 3 seconds
        setTimeout(() => {
            setErrorMessage(''); // Reset error message state
        }, 3000);

        return; // Prevent form submission
    } else {
        setErrorMessage(''); // Clear error message if valid
    }
  
      emailjs
      .sendForm('service_ai9fpem', 
                'template_cp2xilm', 
                form.current, {
        publicKey: '1AK2VOpl98NxjpWQS',
      })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()

        // Prikaži oblačić obavijesti
        setShowNotification(true);

        // Sakrij oblačić obavijesti nakon 3 sekunde
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
    };
  return (
    <section className='contact-section'>
        <div className='contact-container'>
          <h2 className=''>Contact me</h2>
          <form ref={form} onSubmit={sendEmail} name='input_form'>
          <label htmlFor="name"></label>
            <input type='text'
                   id="name" 
                   placeholder='Name'
                   name='user_name'
                   autoComplete="name" required />
           <label htmlFor="email"></label>
            <input type='email'
                   id="email"
                   placeholder='Email'
                   name='user_email'
                   autoComplete="email" required />
            <label htmlFor="subject"></label>
            <input type='text'
                   id="subject"
                   placeholder='Subject'
                   name='subject' required />
            <label htmlFor="message"></label>
            <textarea name='message'
                      id="message" 
                      placeholder='Message...'
                      cols='30' rows='10' required></textarea>
            <button type='submit' className='btn-contact'>Send <i className="fa-solid fa-paper-plane" /></button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </form>
          {showNotification && (
            <div className='cloud'>
              The message has been recorded.
            </div>
          )}
        </div>
      </section>
  )
}

export default Contact