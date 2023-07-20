import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faEnvelope);

function Footer() {
  return (
    <div className="myFooter container my-5">
      <footer className="text-center text-lg-start bg-secondary text-white rounded" style={{ width: '50%', margin: '0 auto' }}>
        <div className="container d-flex justify-content-center py-2">
          <button type="button" className="bg-light text-dark btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <FontAwesomeIcon icon={['fas', 'envelope']} />
          </button>
          <button type="button" className="bg-light text-dark btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <FontAwesomeIcon icon={['fab', 'google']} />
          </button>
          <button type="button" className="bg-light text-dark btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </button>
          <button type="button" className="bg-light text-dark btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </button>
        </div>

        <div className="text-center p-1">
          <span className="d-block d-sm-inline">
            © Genci Odobashi
          </span>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
