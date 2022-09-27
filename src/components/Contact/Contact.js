import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'



function Contact ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ybisejl', 'template_o8y9q1k', form.current, '2_N9XaeMKmQSoyh5U')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <section id="contact-page">
      <article>
<div className="Contact-titel">
  <h1>Contact</h1>
</div>
<p className="contactp">Have a question or want to work together?</p>
</article>
<div className="contact-form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button className="submitbutton"><input type="submit" value="Send" /></button>
    </form>
    </div>
    </section>
  );
};


export default Contact