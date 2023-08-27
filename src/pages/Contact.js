import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Buttons from "../components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  useEffect(() => {
    emailjs.init("TvCVcf-8LplcR0SxE");
  }, []);

  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [shouldAppear, setShouldAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldAppear(true);
    }, 100);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = document.getElementById("contact-form");
    emailjs.sendForm("service_tir50ql", "contact_form", formElement).then(
      function () {
        console.log("SUCCESS!");
        setFormSubmitted(true);
        formElement.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div>
      <h3>Contact Me</h3>
      <hr className="divider" />
      <div className="contact-container">
        <div className={`contact-info ${shouldAppear ? 'show' : ''}`}>
          <div className="info-content">
            <h4>Contact Information</h4>
            <hr className="divider" />
            <p>
              <FontAwesomeIcon icon={faPhone} /> (959) 777-2737
              <br />
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:godobashi@gmail.com">odobashigenci@gmail.com</a>
              <br />
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <a href="https://www.google.com/maps/place/5+Carillon+Dr,+Rocky+Hill,+CT+06067/@41.6554057,-72.6470037,17z/data=!3m1!4b1!4m6!3m5!1s0x89e64db40b123a13:0x43ab929e988be6cb!8m2!3d41.6554017!4d-72.6444288!16s%2Fg%2F11s5jd71ml?entry=ttu">5 Carillon Dr, Rocky Hill, CT</a>
              <br />
            </p>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> <a href="https://www.linkedin.com/in/genci-odobashi-692169149/">LinkedIn</a>
            </p>
          </div>
        </div>
        <div className={`contact-form ${shouldAppear ? 'show' : ''}`}>
          <div className="form-content">
            <Form id="contact-form" onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlForm.Control1"
              >
                <Form.Control type="hidden" name="contact_number" />
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="from_name" required />
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="reply_to" required />
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} required />
                <Buttons variant="primary" onClick={handleSubmit}>
                  Submit
                </Buttons>
                {isFormSubmitted && (
                  <p className="form-success">Form submitted successfully!</p>
                )}
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      <div className="privacy-note">
        Please note!
        <br />
        After you click the "Submit" button, every personal data you are
        entering (name, email, message) will be sent directly to my email
        address. <br />
        Please rest assured that your data WILL NOT be shared with third
        parties.
        <br />
        Your privacy is important to me!
      </div>
    </div>
  );
};

export default ContactForm;
