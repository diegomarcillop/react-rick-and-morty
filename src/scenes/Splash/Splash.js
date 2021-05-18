import React from 'react';

import SplashImage from '../../assets/img/splash_2.png';

export const Splash = () => {
  return (
    <div className="splash-scene">
      <img src={SplashImage} className="animate__animated animate__rotateIn" />
    </div>
  )
}
