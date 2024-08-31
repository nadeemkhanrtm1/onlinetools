'use client';

import Script from 'next/script';
import React from 'react';

const ClockScript = () => {
  const handleOnLoad = () => {
    if (typeof Clock !== 'undefined') {
      const clock = new Clock();
      document.body.appendChild(clock.el);
    }
  };
  return (
    <Script
      src='https://firebasestorage.googleapis.com/v0/b/clock-script.appspot.com/o/script.js?alt=media&token=797bad63-0ae7-466d-a54f-1ce1c43b5ea9'
      onLoad={handleOnLoad}
    />
  );
};

export default ClockScript;
