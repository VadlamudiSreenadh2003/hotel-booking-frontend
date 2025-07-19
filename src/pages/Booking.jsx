 import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookingForm() {
  const [form, setForm] = useState({
    guestName: "",
    email: "",
    phone: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/bookings", form);
      alert("Booking successful!");
      console.log("Booking response:", res.data);
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Booking failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-5 p-4 border rounded shadow bg-light w-50 mx-auto"
    >
      <h2 className="mb-4 text-center">Book a Room</h2>

      <div className="mb-2">
        <label className="form-label">Guest Name</label>
        <input type="text" name="guestName" className="form-control" onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Phone</label>
        <input type="tel" name="phone" className="form-control" onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Room ID</label>
        <input type="number" name="roomId" className="form-control" onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Check-In Date</label>
        <input type="date" name="checkInDate" className="form-control" onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Check-Out Date</label>
        <input type="date" name="checkOutDate" className="form-control" onChange={handleChange} required />
      </div>

      <button type="submit" className="btn btn-primary w-100">Book Now</button>
    </form>
  );
}