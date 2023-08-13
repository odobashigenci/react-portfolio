import React, { useEffect } from 'react';
import emailjs from 'emailjs-com'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Buttons from "../components/Buttons"

const ContactForm = () => {
  useEffect(() => {
    // Initialization of emailjs library when the component mounts
    emailjs.init('TvCVcf-8LplcR0SxE'); 
  }, []);

  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // generate a five-digit number for the contact_number variable
    event.target.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_tir50ql', 'contact_form', event.target) 
      .then(function() {
        console.log('SUCCESS!');
        setFormSubmitted(true); // Set formSubmitted state to true on successful submission
        // Reset form fields to empty strings after successful submission
        event.target.from_name.value = '';
        event.target.reply_to.value = '';
        event.target.message.value = '';
      }, function(error) {
        console.log('FAILED...', error);
      });
  };

  return (
    <div>
      <h3>Contact me</h3>
      <hr className="divider" /> 
      
      <div className='contactMe d-flex justify-content-center'>
      <div className=''>
      <Form id="contact-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlForm.Control1">
            <Form.Control type="hidden" name="contact_number" />
            <Form.Label className='mt-5'>Name</Form.Label>
            <Form.Control type="text" name="from_name" />
            <Form.Label className='mt-4'>Email</Form.Label>
            <Form.Control type="email" name="reply_to" />
            <Form.Label className='mt-4'>Message</Form.Label>
            <Form.Control className='mb-5' as="textarea" name="message" rows={3} /> 
            <Buttons
             
              variant="primary"
              onClick={handleSubmit}
              
            >
              Submit
            </Buttons>
            {isFormSubmitted && <p>Form submitted successfully!</p>}
          </Form.Group>
        </Form>
        <div className='privacy-note'>
          Please note!<br/>
          After you click the "Submit" button, every personal data you are entering (name, email, message) will be sent directly to my email address. <br/> 
          Please rest assured that your data WILL NOT be shared with third parties.<br/>
          Your privacy is important to me!
        </div>
    </div>
    </div>
    </div>
  );
};

export default ContactForm;
