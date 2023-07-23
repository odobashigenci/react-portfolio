import React, { useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import the emailjs-com library
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

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
      
      <div>
  
      <Form id="contact-form" onSubmit={handleSubmit} style={{width: '50%', margin: 'auto'}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlForm.Control1">
            <Form.Control type="hidden" name="contact_number" />
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="from_name" />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="reply_to" />
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} /> 
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {isFormSubmitted && <p>Form submitted successfully!</p>}
          </Form.Group>
        </Form>
    </div>
      
    </div>
  );
};

export default ContactForm;
