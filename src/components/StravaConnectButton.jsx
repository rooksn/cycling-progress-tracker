import React from 'react';
import btnStravaConnect from '../assets/btn_strava_connectwith_orange.svg';


const StravaConnectButton = ({ onClick }) => {
  const [clientId, setClientId] = React.useState(
    JSON.parse(localStorage.getItem('clientId')) || ''
  );
  React.useEffect(() => {
    localStorage.setItem('clientId', JSON.stringify(clientId));
  }, [clientId]);

  const [clientSecret, setClientSecret] = React.useState(
    JSON.parse(localStorage.getItem('clientSecret')) || ''
  );
  React.useEffect(() => {
    localStorage.setItem('clientSecret', JSON.stringify(clientSecret));
  }, [clientSecret]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center gap-2">
        <div>
          <div className="font-medium">Client ID</div>
          <div><input
            placeholder='Client ID'
            value={clientId}
            onChange={e => setClientId(e.target.value)} /></div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <div className="font-medium">Client Secret</div>
          <div><input
            placeholder='Client Secret'
            value={clientSecret}
            onChange={e => setClientSecret(e.target.value)} /></div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <div className="font-medium"><button onClick={onClick} className="bg-transparent border-none p-0 m-0">
            <img src={btnStravaConnect} alt="Connect with Strava" className="hover:opacity-80" />
          </button></div>

        </div>
      </div>
    </div>

  );
};

export default StravaConnectButton;
