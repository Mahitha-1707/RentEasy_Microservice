import { useState } from "react";
import AddressAutocomplete from "../../pages/Properties/AddressAutocomplete";
import ImageUploader from "../../pages/Properties/ImageUploader";
import "./AddPropertyPage.css";

function AddPropertyPage() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    rent: "",
    deposit: "",
    available: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Property Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="container">

      <h1>List Your Property</h1>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          name="title"
          placeholder="Property Title"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <select name="propertyType" onChange={handleChange} required>
          <option value="">Select Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
        </select>

        <div className="row">
          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            onChange={handleChange}
          />

          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="number"
            name="rent"
            placeholder="Monthly Rent"
            onChange={handleChange}
          />

          <input
            type="number"
            name="deposit"
            placeholder="Deposit"
            onChange={handleChange}
          />
        </div>

        <h3>Amenities</h3>

<div className="amenities">

<label className="amenity">
<input type="checkbox" value="parking" />
<span>Parking</span>
</label>

<label className="amenity">
<input type="checkbox" value="gym" />
<span>Gym</span>
</label>

<label className="amenity">
<input type="checkbox" value="pool" />
<span>Pool</span>
</label>

<label className="amenity">
<input type="checkbox" value="balcony" />
<span>Balcony</span>
</label>

</div>
        <ImageUploader />

        <button type="submit" className="btn">
          Submit Property
        </button>

      </form>

    </div>
  );
}

export default AddPropertyPage;