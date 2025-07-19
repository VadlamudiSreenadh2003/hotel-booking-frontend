import React, { useEffect, useState } from "react";
import AmenityCard from "../components/AmenityCard";
import axios from "axios";

function Amenities() {

    const amenities = [
        { name: "Free Wi-Fi", description: "Enjoy high-speed internet throughout the hotel.", icon: "bi-wifi" },
        { name: "Swimming Pool", description: "Relax and unwind in our clean and spacious pool.", icon: "bi-water" },
        { name: "Spa & Wellness", description: "Rejuvenate with our spa and wellness treatments.", icon: "bi-heart-pulse" },
        { name: "Fitness Center", description: "State-of-the-art equipment available 24/7.", icon: "bi-lightning-charge" },
        { name: "Airport Shuttle", description: "Free shuttle service to and from the airport.", icon: "bi-truck" },
        { name: "Restaurant", description: "Taste a variety of cuisines at our in-house restaurant.", icon: "bi-cup-straw" }
    ];

    // const [amenities, setAmenities] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:8081/api/amenities")
    //         .then(response => {
    //             setAmenities(response.data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching amenities:", error);
    //         });
    // }, []);

    return (
        <div className="container py-2">
            <h2 className="text-center mb-4">Our Amenities</h2>
            <div className="row g-4">
                {amenities.map((amenity, index) => (
                    <div className="col-md-4" key={index}>
                        <AmenityCard amenity={amenity} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Amenities;
