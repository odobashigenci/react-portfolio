import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faEnvelope);

function Footer() {
  return (
    <div className="container-footer">
      <footer className="myFooter text-center text-lg-start text-white">
        <div className="container d-flex justify-content-center">
          <button type="button" className="contactIcons linkedin">
            <a href="https://www.linkedin.com/in/genci-odobashi-692169149/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className='icon'/>
            </a>
          </button>
          <button type="button" className="contactIcons gmail">
            <a href="mailto:godobashi@gmail.com">
            <FontAwesomeIcon icon={['fas', 'envelope']} className='icon' />
            </a>
          </button>
          <button type="button" className="contactIcons github">
            <a href="https://github.com/odobashigenci" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} className='icon' />
            </a>
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
