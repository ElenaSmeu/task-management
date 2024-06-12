import React from 'react';
import LandingPage from './LandingPage';
import { AppContext } from './Models/AppContext';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  const appContext: AppContext = {deviceContext: isBigScreen ? "Deskop" : isMobile ? "Mobile" : "Tablet"}
  return (
    <div className="App w-screen h-screen">
      <LandingPage appContext={appContext} />
    </div>
  );
}

export default App;
