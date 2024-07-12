import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingForm from "./Pages/BookingForm";
import Confirmation from "./Pages/Confirmation";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
