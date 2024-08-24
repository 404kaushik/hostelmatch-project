import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import HostelsList from './pages/HostelsList';
import HostelDetail from './pages/HostelDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import AddYourListing from './pages/AddYourListing';
import ReactGA from 'react-ga4';
import Signup from './pages/Signup/Signup';
import SignupEmail from './pages/Signup/SignupEmail';
import Login from './pages/Login/Login';
import EditProfile from './pages/EditProfile/EditProfile';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import AboutUs from  './pages/AboutUs/AboutUs';
import Careers from  './pages/Careers/Careers';
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import ContactUsPage from './pages/ContactUs/ContactUs';


ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);
ReactGA.send("pageview");
function App() {
  // useEffect(() => {
  //   // ReactGA.send("pageview");
  //   // ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <div className="App ">
      {/* <Home></Home> */}

      {/* <Navbar></Navbar> */}
      {/* <Router>
        <div class="relative">
          <div class="relative z-50">
          <Header />
          </div>
          <div class = "relative z-10">
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/hostels/:city/:travellerType/:hostelType" element={<HostelsList />} />
            <Route path="/hostels/:id" element={<HostelDetail />} />
            <Route path="/add-your-listing" element={<AddYourListing />} />
          </Routes>
          </div>

          
        </div>
      </Router>
      <Footer /> */}

      <div class="flex flex-col-reverse">
        <div class="h-full">
          <div class="max-w-7xl mx-auto">
            <Router>
              <Routes>
                <Route path="/hostels/:city/:travellerType/:hostelType/:startDate?/:endDate?" element={<HostelsList />} />
                <Route path="/hostels/:id" element={<HostelDetail />} />                
                <Route path="/signup" element={<Signup/>} />
                <Route path="/signup/email" element={<SignupEmail/>} />                
                <Route path="/edit_profile" element={<EditProfile/>} />
                <Route path="/terms_and_conditions" element={<TermsAndConditions/>} />
                <Route path="/privacy_policy" element={<PrivacyPolicy/>} />
                <Route path="/cookie_policy" element={<CookiePolicy/>} />
              </Routes>
            </Router>
          </div>
          <Router>
            <Routes>              
              <Route exact path="/" element={<Home />} />
              <Route path="/add-your-listing" element={<AddYourListing />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/contactus" element={<ContactUsPage />} />
              {/* <Route path="/join-the-waitlist" component={JoinTheWaitlistFrame} /> */}
            </Routes>
          </Router>
          <Footer />
        </div>
        <Header />
      </div>
    </div>
  );
}

export default App;
