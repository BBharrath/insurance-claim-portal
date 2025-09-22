
import React, { useState, useEffect } from 'react';
import { submitClaim, getClaimsByUser } from '../utils/mockClaims';
import ClaimCard from '../components/ClaimCard';
import {Dialog,DialogContent} from '@mui/material';

function CustomerDashboard({ user }) {
    const [claims, setClaims] = useState([]);
    const [newClaim,setNewClaim] = useState({policyNumber:"",description:"",file:null});
    const [open, setOpen] = useState(false);
    useEffect(() => {
        getClaimsByUser(user.email).then(list => setClaims(list));
    }, [user]);

    const handleSubmit=()=>{
        submitClaim({
            ...newClaim,
            fileName: newClaim.file ? newClaim.file.name : null
        }).then(newClaim=>{
            setClaims([...claims, newClaim]);
            setNewClaim({policyNumber:"",description:"",file:null});
        });
        
    }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Claims</h2>

        {/* Create Claim Button */}
        <button variant="contained" color="primary" onClick={() => setOpen(true)}>
          + Create Claim
        </button>
      </div>
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
          <DialogContent>
            <h2>
              Create Claim
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Policy Number"
                value={newClaim.policyNumber}
                onChange={(e) => setNewClaim({ ...newClaim, policyNumber: e.target.value })}       
                />
                <br />
                <textarea
                    placeholder="Description"   
                    value={newClaim.description}
                    onChange={(e) => setNewClaim({...newClaim,description:e.target.value})}
                ></textarea>
                <br />
                <input type="file" onChange={(e) => setNewClaim({...newClaim,file:e.target.files[0]})} />
                <br />
                <button type="submit">Submit Claim</button>
            </form> 
          </DialogContent>
        </Dialog>
      <div className='grid grid-cols-1 gap-4'>
        {
            claims.length === 0?(
                <div>No claims found. Please create a new claim.</div>
            ):(
                    claims.map((C) => {
                        return <ClaimCard key={C.id} claim={C} />;
                    })
            )
        }
    </div>
    </div>
  );
}
export default CustomerDashboard;