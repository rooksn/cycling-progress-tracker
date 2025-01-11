import React from 'react';
import btnStravaConnect from '../assets/btn_strava_connectwith_orange.svg';

const StravaConnectButton = ({ onClick }) => (
  <button onClick={onClick} className="bg-transparent border-none p-0 m-0">
    <img src={btnStravaConnect} alt="Connect with Strava" className="hover:opacity-80" />
  </button>
);

export default StravaConnectButton;
