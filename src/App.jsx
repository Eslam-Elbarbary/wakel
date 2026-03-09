import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import OTP from './pages/OTP';
import Country from './pages/Country';
import LawyerProfile from './pages/LawyerProfile';
import Messages from './pages/Messages';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import LawyerDetails from './pages/LawyerDetails';
import Dashboard from './pages/Dashboard';
import Subscription from './pages/Subscription';
import AvailableRequests from './pages/AvailableRequests';
import RequestDetails from './pages/RequestDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        {/* Home Route with Header and Footer */}
        <Route
          path="/"
          element={
            <div className="bg-white w-full min-h-screen">
              <Header />
              <div className="max-w-[1440px] mx-auto">
                <Home />
              </div>
              <Footer />
            </div>
          }
        />
        {/* Sign Up Route (has its own layout) */}
        <Route path="/signup" element={<SignUp />} />
        {/* Login Route (has its own layout) */}
        <Route path="/login" element={<Login />} />
        {/* OTP Route (has its own layout) */}
        <Route path="/otp" element={<OTP />} />
        {/* Country Route (has its own layout) */}
        <Route path="/country" element={<Country />} />
        {/* Lawyer Details Route (has its own layout) */}
        <Route path="/lawyer-details" element={<LawyerDetails />} />
        {/* Lawyer Profile Route (has its own layout) */}
        <Route path="/lawyer-profile" element={<LawyerProfile />} />
        {/* Messages Route (has its own layout) */}
        <Route path="/messages" element={<Messages />} />
        {/* Search/Lawyers Route (has its own layout) */}
        <Route path="/lawyers" element={<Search />} />
        {/* Profile Route (has its own layout) */}
        <Route path="/profile" element={<Profile />} />
        {/* Contact Route (has its own layout) */}
        <Route path="/contact" element={<Contact />} />
        {/* Dashboard Route (has its own layout) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/request/:id" element={<Dashboard />} />
        {/* Subscription Route (has its own layout) */}
        <Route path="/subscriptions" element={<Subscription />} />
        {/* Available Requests Route (has its own layout) */}
        <Route path="/available-requests" element={<AvailableRequests />} />
        {/* Request Details Route (has its own layout) */}
        <Route path="/request-details/:id" element={<RequestDetails />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
