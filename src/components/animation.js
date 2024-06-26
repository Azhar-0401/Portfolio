'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import lottie-react with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
    },
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
