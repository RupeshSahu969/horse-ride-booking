import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/booking.css";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const bookings = useSelector((state) => state.booking.bookings);
  const latestBooking = bookings[bookings.length - 1];

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleCloseModal = () => {
    closeModal();
    navigate("/");
  };
  return (
    <div className="confirmation-page">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Confirmation"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Booking Confirmed!</h2>
        <p>Thank you for booking your horse</p>
        <p>
          <strong>Horse:</strong> {latestBooking.horse.name}
        </p>
        <p>
          <strong>Date:</strong> {formatDate(latestBooking.date)}
        </p>
        <p>
          <strong>Time:</strong> {latestBooking.time}
        </p>
        <p>Select a Date:</p>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="responsive-calendar"
        />
        <button className="btn" onClick={handleCloseModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Confirmation;
