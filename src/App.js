
import './App.css';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import FarmerPage from './pages/FarmerPage';
import CropRegistrationPage from './pages/CropRegistrationPage';
import ConsumerPage from './pages/ConsumerPage';
// import Home from './components/Home/Home';
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(        
      <Route path="/" element={<RootLayout />}>
        {/* <Route index element={<Navbar />}></Route> */}
        <Route index element={<HomePage />}></Route>
        <Route path="/farmer" element={<FarmerPage />}></Route>
        <Route path="/crop-registration" element={<CropRegistrationPage />}></Route>
        <Route path="/consumer" element={<ConsumerPage />}></Route>
        
        {/* <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/myorders" element={<MyOrdersPage />}></Route>
        <Route path="/admin" element={<AdminDashPage />}></Route> */}
      </Route>
    )
  );
  return (
    <div className="App">

<RouterProvider router={router} />
      
    </div>
  );
}

export default App;
