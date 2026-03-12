import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetailPage(){

const { id } = useParams();

return(

<div style={{padding:"40px"}}>

<h2>Property Details</h2>

<p>Property ID: {id}</p>

<p>This is the detailed page for the selected property.</p>

</div>

);

}

export default PropertyDetailPage;