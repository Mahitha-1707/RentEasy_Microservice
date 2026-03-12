import React from "react";
import "./PropertyDetailsPage.css";

function PropertyDetailsPage(){

const property={
id:1,
title:"2BHK Apartment",
location:"Hyderabad",
price:12000,
bedrooms:2,
bathrooms:2
};

const applyProperty=()=>{

const applications=JSON.parse(localStorage.getItem("applications")) || [];

const newApplication={
id:Date.now(),
tenant:"Tenant User",
property:property.title,
status:"Pending"
};

applications.push(newApplication);

localStorage.setItem("applications",JSON.stringify(applications));

alert("Application submitted successfully!");

};

return(

<div className="property-details-container">

<h2>{property.title}</h2>

<p><strong>Location:</strong> {property.location}</p>
<p><strong>Price:</strong> ₹{property.price}</p>
<p><strong>Bedrooms:</strong> {property.bedrooms}</p>
<p><strong>Bathrooms:</strong> {property.bathrooms}</p>

<button className="apply-btn" onClick={applyProperty}>
Apply for Property
</button>

</div>

);

}

export default PropertyDetailsPage;