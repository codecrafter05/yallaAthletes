import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as UserAPI from '../../utilities/users-api';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AthletesListPage from '../AthletesListPage/AthletesListPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NewsPage from '../NewsPage/NewsPage';
import AboutUsPage from '../AboutUs/AboutUs';
import DashboardPage from '../DashboardPage/DashboardPage'
import Cart from '../Cart/Cart';
import ProfileDashboardPage from '../DashboardPage/ProfileDashboardPage/ProfileDashboardPage'
import UsersDashboardPage from '../DashboardPage/UsersDashboardPage/UsersDashboardPage'
import AthletesDashboardPage from '../DashboardPage/AthletesDashboardPage/AthletesDashboardPage'
import ManagerPageDashboard from '../DashboardPage/ManagerDashboardPage/ManagerDashboardPage'
import ProductsPageDashboard from '../DashboardPage/ProductsDashboardPage/ProductsDashboardPage'
import NewsPageDashboard from '../DashboardPage/NewsDashboardPage/NewsDashboardPage'
import './App.css';
import Products from '../Products/Products';
import AthletesDetailsPage from '../AthletesDetailPage/AthletesDetailPage';

function App() {
  const [user, setUser] = useState(getUser());

  // TODO 
  // Add useEffect 
  // useEffect(() => {
  //   async function fetchData() {
  //     // Make an API call to get user using user state _id field
  //     try {
  //       const userData = await getUser();
  //       console.log(`userData`, userData)
  //       // Set user state to the response
  //       setUser(userData);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData();
   
  // }, []);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/api/products" element={<NewOrderPage />} />
            <Route path="/athletes" element={<AthletesListPage />} />
            <Route path="/athletes/:athleteId" element={<AthletesDetailsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} />} />
            <Route path="/cart" element={<Cart user={user} />} />
            <Route path="/dashboard/profile" element={<ProfileDashboardPage />} />
            <Route path="/dashboard/users" element={<UsersDashboardPage />} />
            <Route path="/dashboard/athletes" element={<AthletesDashboardPage />} />
            <Route path="/dashboard/manager" element={<ManagerPageDashboard />} />
            <Route path="/dashboard/products" element={<ProductsPageDashboard />} />
            <Route path="/dashboard/news" element={<NewsPageDashboard />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path='/products' element={<Products user={user} />} /> */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;