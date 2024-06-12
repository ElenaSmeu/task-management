import React from 'react';
import LandingPage from './LandingPage';
import { AppContext } from './Models/AppContext';
import { useMediaQuery } from 'react-responsive';
import Login from './Authentication/Login';
import SignUp from './Authentication/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  const appContext: AppContext = {deviceContext: isBigScreen ? "Deskop" : isMobile ? "Mobile" : "Tablet"}
  return (
    <div className="App w-screen h-screen">
      <Routes>
        <Route path='/' element={<LandingPage appContext={appContext} />}></Route>
        <Route path="/login" element={<Login appContext={appContext}/>} ></Route>
        <Route path="/signup" element={<SignUp appContext={appContext}/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
