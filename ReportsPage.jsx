import React, { useState } from "react";
import "./ReportsPage.css";

function ReportsPage(){

const [properties] = useState(
JSON.parse(localStorage.getItem("properties")) || []
);

const [applications] = useState(
JSON.parse(localStorage.getItem("applications")) || []
);

const [leases] = useState(
JSON.parse(localStorage.getItem("leases")) || []
);

return(

<div className="reports-container">

<h2>Reports</h2>

<div className="reports-cards">

<div className="report-card">
<h3>Total Properties</h3>
<p>{properties.length}</p>
</div>

<div className="report-card">
<h3>Total Applications</h3>
<p>{applications.length}</p>
</div>

<div className="report-card">
<h3>Active Leases</h3>
<p>{leases.length}</p>
</div>

<div className="report-card">
<h3>Available Properties</h3>
<p>{properties.length - leases.length}</p>
</div>

</div>

</div>

);

}

export default ReportsPage;