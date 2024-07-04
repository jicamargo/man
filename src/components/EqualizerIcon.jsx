import React from 'react';
import '@/css/equalizerIcon.css'; // CSS para las animaciones

const EqualizerIcon = () => {
  return (
    <svg id="equalizer" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path className="bar" d="M3.99902 14H5.99902V0H3.99902V14Z" fill="#1DB954"/>
      <path className="bar" d="M-0.000976562 14H1.99902V4H-0.000976562V14Z" fill="#1DB954"/>
      <path className="bar" d="M12 7V14H14V7H12Z" fill="#1DB954"/>
      <path className="bar" d="M8.00002 14H10V10H8.00002V14Z" fill="#1DB954"/>
    </svg>
  );
};

export default EqualizerIcon;
