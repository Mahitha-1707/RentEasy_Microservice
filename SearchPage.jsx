import React, { useState } from "react";
import "./SearchPage.css";

function SearchPage() {

  const properties = [
    { id: 1, title: "2BHK Apartment", location: "Hyderabad", price: 12000 },
    { id: 2, title: "Luxury Villa", location: "Bangalore", price: 25000 },
    { id: 3, title: "Studio Room", location: "Chennai", price: 8000 },
    { id: 4, title: "3BHK House", location: "Mumbai", price: 20000 },
    { id: 5, title: "1BHK Apartment", location: "Delhi", price: 9000 },
    { id: 6, title: "Beachside Villa", location: "Goa", price: 30000 },
    { id: 7, title: "2BHK Flat", location: "Pune", price: 15000 },
    { id: 8, title: "Luxury Apartment", location: "Kolkata", price: 18000 },
    { id: 9, title: "3BHK Penthouse", location: "Hyderabad", price: 35000 },
    { id: 10, title: "Studio Apartment", location: "Bangalore", price: 10000 },
    { id: 11, title: "Family House", location: "Chennai", price: 22000 },
    { id: 12, title: "Modern Flat", location: "Mumbai", price: 17000 }
  ];

  const [searchText, setSearchText] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchText.toLowerCase()) ||
    property.location.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="search-container">

      <h2>Search Properties</h2>

      <input
        type="text"
        placeholder="Search by location or property name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />

      <div className="search-results">

        {filteredProperties.map((property) => (
          <div key={property.id} className="result-card">

            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>₹{property.price}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SearchPage;