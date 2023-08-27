import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AthletesListPage from '../AthletesListPage/AthletesListPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NewsPage from '../NewsPage/NewsPage';
import AboutUsPage from '../AboutUs/AboutUs';
import DashboardPage from '../DashboardPage/DashboardPage'
import SupportPage from '../SupportPage/SupportPage'
import Cart from '../Cart/Cart';
import AthletesDashboardPage from '../DashboardPage/AthletesDashboardPage/AthletesDashboardPage'
import ProductsPageDashboard from '../DashboardPage/ProductsDashboardPage/ProductsDashboardPage'
import OffersPageDashboard from '../DashboardPage/OffersDashboardPage/OffersDashboardPage'
import Products from '../Products/Products';
import AthletesDetailsPage from '../AthletesDetailPage/AthletesDetailPage';
import RightsPage from '../RightsPage/RightsPage';
import NotFound from '../../components/NotFound/NotFound';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage user={user}/>} />
            <Route path="/athletes" element={<AthletesListPage />} />
            <Route path="/athletes/:athleteId" element={<AthletesDetailsPage user={user} />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} />} />
            <Route path="/rights" element={<RightsPage user={user} />} />
            <Route path="/support" element={<SupportPage user={user} />} />
            <Route path="/cart" element={<Cart user={user} />} />
            <Route path="/dashboard/athletes" element={<AthletesDashboardPage user={user} />} />
            <Route path="/dashboard/products" element={<ProductsPageDashboard user={user} />} />
            <Route path="/dashboard/offers" element={<OffersPageDashboard user={user}/>} />
            <Route path="/products" element={<Products />} />

            {/* <Route path='/products' element={<Products user={user} />} /> */}
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;