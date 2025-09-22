import './App.css';

import  { useState } from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [user, setUser] = useState(null);
  const logout  = () => setUser(null);
  return (
    <>
      <Navbar user={user} logout={logout} />
      <AppRoutes user={user} setUser={setUser} />
    </>
  );
}

export default App;
