import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Subscription from "./pages/Subscriptions/Subscription";
import DietPrograms from "./pages/DietProgram/DietPrograms";
import WhoCanUse from "./pages/whoCanUse/WhoCanUse";
import AppointmentForm from "./pages/Appointment/AppointmentForm";
import BookingForm from "./components/BookingForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<WhoCanUse />} />
          <Route path="/diet-programs" element={<DietPrograms />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/individuals" element={<BookingForm />} />
          <Route path="/doctors" element={<BookingForm />} />
          <Route path="/organizations" element={<BookingForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
