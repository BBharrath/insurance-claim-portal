import './App.css';

import  { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [user, setUser] = useState(null);
  const logout  = () => setUser(null);

  return (
    <BrowserRouter>
      <Navbar user={user} logout={logout} />
      <AppRoutes user={user} setUser={setUser} />
    </BrowserRouter>
  );
}

export default App;
