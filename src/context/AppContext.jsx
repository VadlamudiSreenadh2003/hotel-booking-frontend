import React from "react";
import { createContext, useContext, useState } from "react";
export const AppContext = createContext();
export const useApp = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);
  const [rooms, setRooms] = useState([]);
  return (
    <AppContext.Provider value={{ user, setUser, bookingInfo, setBookingInfo, rooms, setRooms }}>
      {children}
    </AppContext.Provider>
  );
};