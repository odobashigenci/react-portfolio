import React from 'react';
import Button from 'react-bootstrap/Button';

const Buttons = ({ variant, onClick, children }) => {
  return (
    <Button
      style={{
        backgroundColor: variant === 'primary' ? 'rgba(81, 141, 175, 0.7)' : 'transparent',
        borderColor: 'grey',
        borderRadius: '10px',
        borderWidth: '2px',
        color: variant === 'primary' ? 'white' : 'black',
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '5px 20px',
        transition: '0.2s ease-out',
        padding: '1px',
        width: '230px',
      }}
      className="submit-data"
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Buttons;
