import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import axios from "axios";

export default function Rooms() {
  const dummyRooms = [
    { id: 1, name: "Deluxe Room", description: "A comfortable deluxe room", price: 3000 },
    { id: 2, name: "Suite", description: "Spacious suite with a view", price: 5000 },
  ];

  // const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8081/api/rooms")
  //     .then(response => {
  //       setRooms(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching rooms:", error);
  //     });
  // }, []);

  return (
    <section className="container">
      <h2>Available Rooms</h2>
      <div className="grid">
        {dummyRooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
