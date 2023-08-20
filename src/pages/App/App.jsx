import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AthletePage from '../AthletePage/AthletePage';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<NewOrderPage />} />
            <Route path="/athletes" element={<AthletePage />} />
            <Route path="/news" element={<NewOrderPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
