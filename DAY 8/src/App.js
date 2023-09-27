//import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgetpass";
import Profile from "./components/Profile";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import Addtocart from "./components/addtocart";
import Payment from "./components/payment";
import Aboutus from "./components/aboutus";
import FeedbackPage from "./components/FeedbackPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsandConditions";
import ProductTracking from "./components/ProductTracking";
import Bothload from "./components/bothload";
import AdminSignup from "./components/adminsignup";
import AdminLogin from "./components/adminlogin";
import FAQPage from "./components/faq";
import Header from "./components/header";
import Header1 from "./components/header1";
import Footer from "./components/footer";
import AdminPanel from "./components/AdminPannel";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./components/userdashboard";
import ContactUs from "./components/contactus";
import AdminNavBarDash from "./components/adminNavBar";
import NavBar1 from "./components/NavBar1";
import Sidebar from "./components/sidebar";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpass" element={<ForgotPassword />} />
        <Route path="/productcart" element={<ProductCard />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/feedbackpage" element={<FeedbackPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsandConditions" element={<TermsAndConditions />} />
        <Route path="/ProductTracking" element={<ProductTracking />} />
        <Route path="/bothload" element={<Bothload />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/header1" element={<Header1 />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/adminpannel" element={<AdminPanel />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/userdashboard" element={<Dashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admindashboard" element={<admindash />} />
        <Route path="adminnavbar" element={<AdminNavBarDash />} />
        <Route path="/NavBar1" element={<NavBar1 />}/>
        <Route path="/sidebar" element={<Sidebar/>}>



        </Route>
      </Routes>
    </Router>
  );
}

export default App;