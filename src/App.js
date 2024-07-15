import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingForm from "./Components/BookingForm";
import Confirmation from "./Components/Confirmation";
import LandingPage from "./Components/LandingPage";

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
