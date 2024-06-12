import React, {useContext} from 'react';
import LandingPage from './LandingPage';
import { AppContext } from './Context/AppContext';
import { useMediaQuery } from 'react-responsive';
import Login from './Authentication/Login';
import SignUp from './Authentication/Signup';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import AuthContext, { AuthProvider } from './Context/AuthContext';
import Workspace from './Workspace/Workspace';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isMobile = useMediaQuery({query: '(max-width: 700px)'})
  const appContext: AppContext = {deviceContext: isBigScreen ? "Deskop" : isMobile ? "Mobile" : "Tablet"}
  return (
    <div className="App w-screen h-screen">
      <AuthProvider>
        <AnimatedRoutes appContext={appContext}></AnimatedRoutes>
       
      </AuthProvider>
     
    </div>
  );
}

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading spinner
  }

  return currentUser ? <>{children}</> : <Navigate to="/login" />;
}
function AnimatedRoutes({appContext}: {appContext: AppContext}) {
  const location = useLocation();
  return (
    <TransitionGroup>
       <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path='/' element={<LandingPage appContext={appContext} />} />
          <Route path="/login" element={<Login appContext={appContext} />} />
          <Route path="/signup" element={<SignUp appContext={appContext} />} />
          <Route 
            path='/workspace' 
            element={
              <ProtectedRoute>
                <Workspace />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}


export default App;
