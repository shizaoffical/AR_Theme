// src/Popup.js
import React, { useEffect, useRef } from 'react';
import styles from './Components.module.css'; // Import the CSS module
import Form from '@pages/contactUs/Form';
import { Container } from 'react-bootstrap';
function Popup({ onClose }) {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className={styles['popup-overlay']}>
      <Container ref={popupRef}><Form /></Container>
    </div>
  );
}

export default Popup;
