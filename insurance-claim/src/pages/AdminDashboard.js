
import React, { useEffect, useState } from 'react';
import { getAllClaims } from '../utils/mockClaims'; // Adjust the path as needed
import ClaimCard from '../components/ClaimCard'; // Adjust the path as needed

function AdminDashboard() {
    const [claims, setClaims] = useState([]);

    useEffect(() => {
        getAllClaims().then(list => setClaims(list));
    }, []); 
    const handleUpdate=(id,newStatus)=>{
        // Call API to update claim status
        // For now, just update locally
        setClaims(claims.map(c=>c.id===id ? {...c,status:newStatus} : c));
    }   
  return (
    <div>
        <h2>Admin Claims Dashboard</h2>
        {claims.map(c=>
        <ClaimCard key={c.id} claim={c} onUpdate={(c)=>handleUpdate(c.id,c.status)}/>
        )}       
    </div>
);
}
export default AdminDashboard;