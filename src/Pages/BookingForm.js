import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../Redux/Action/actionBooking";
import Modal from "react-modal";
import "../Styles/form.css";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const BookingForm = () => {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.booking.horses);

  const navigate = useNavigate();
  const [selectedHorse, setSelectedHorse] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const horseDetails = horses.find((horse) => horse.name === selectedHorse);
    const newBooking = {
      id: Date.now(),
      horse: horseDetails,
      date,
      time,
      name,
      email,
      phone,
    };
    dispatch(addBooking(newBooking));
    navigate("/confirmation");
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 15; i <= 23; i++) {
      slots.push(`${i < 10 ? "0" : ""}${i}:00`);
    }
    return slots;
  };

  const isWeekdayOrSaturday = (date) => {
    const day = date.getDay();
    return day >= 1 && day <= 6;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className="booking-form">
      <h1>Book Your Horse Ride</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Horse</label>
          <select
            value={selectedHorse}
            onChange={(e) => setSelectedHorse(e.target.value)}
            required
          >
            <option value="">Select a horse</option>
            {horses.map((horse) => (
              <option key={horse.id} value={horse.name}>
                {horse.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            {isWeekdayOrSaturday(selectedDate) &&
              generateTimeSlots().map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            placeholder="Enter Number"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
