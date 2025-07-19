import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";

export default function BookingForm() {
  const [formData, setFormData] = useState({ date: "", roomId: "", guestName: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/bookings", formData);
      toast.success("Booking successful!");
    } catch (err) {
      toast.error("Booking failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 bg-white border rounded shadow-sm mt-4" style={{ maxWidth: "500px" }}>
      <div className="mb-3">
        <label className="form-label">Guest Name</label>
        <input name="guestName" value={formData.guestName} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Room ID</label>
        <input name="roomId" value={formData.roomId} onChange={handleChange} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-success w-100">Submit Booking</button>
    </form>
  );
}
