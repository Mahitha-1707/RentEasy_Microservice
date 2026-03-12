import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {

return(

<div className="property-card">

<img
src={property.image || "https://via.placeholder.com/300x180"}
alt={property.title}
/>

<h3>{property.title}</h3>

<p className="location">{property.location}</p>

<p className="price">₹ {property.price}</p>

<p className="bedrooms">{property.bedrooms || 2} Bedrooms</p>

<Link to={`/properties/${property.id}`}>
<button className="details-btn">View Details</button>
</Link>

</div>

);

}

export default PropertyCard;