
import React, { useState, useEffect } from 'react';
import { submitClaim, getClaimsByUser } from '../utils/mockClaims';
import ClaimCard from '../components/ClaimCard';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';

function CustomerDashboard({ user }) {
    const [claims, setClaims] = useState([]);
    const [newClaim,setNewClaim] = useState({policyNumber:"",description:"",file:null});
    const [open, setOpen] = useState(false);
    useEffect(() => {
        getClaimsByUser(user.email).then(list => setClaims(list));
    }, [user]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        submitClaim({
            ...newClaim,
            fileName: newClaim.file ? newClaim.file.name : null
        }).then(newClaim=>{
            setClaims([...claims, newClaim]);
            setNewClaim({policyNumber:"",description:"",file:null});
            setOpen(false);
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
<Dialog header="Create Claim" visible={open} style={{ width: '30vw',padding: '25px',background: '#fff','border-radius':'5px',border:'1px solid #b3b1b1' }} onHide={() => setOpen(false)}>
  <form onSubmit={handleSubmit} className="p-fluid">
    <div className="p-field" style={{ marginBottom: '1rem' }}>
      <label htmlFor="policyNumber">Policy Number</label>
      <InputText
        id="policyNumber"
        value={newClaim.policyNumber}
        onChange={(e) => setNewClaim({ ...newClaim, policyNumber: e.target.value })}
        placeholder="Policy Number"
      />
    </div>
    <div className="p-field" style={{ marginBottom: '1rem' }}>
      <label htmlFor="description">Description</label>
      <InputTextarea
        id="description"
        value={newClaim.description}
        onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
        placeholder="Description"
        rows={4}
      />
    </div>
    <div className="p-field" style={{ marginBottom: '1rem' }}>
      <label htmlFor="file">Attach File</label>
      <FileUpload
        mode="basic"
        name="file"
        accept="*"
        maxFileSize={1000000}
        customUpload
        auto
        chooseLabel="Choose"
        onSelect={(e) => setNewClaim({ ...newClaim, file: e.files[0] })}
      />
    </div>
    <Button label="Submit Claim" type="submit" className="p-mt-2" />
  </form>
</Dialog>
      <div className='grid grid-cols-1 gap-4'>
        {
            claims.length === 0?(
                <div>No claims found. Please create a new claim.</div>
            ):(
              <ClaimCard  claim={claims}/>
            )
        }
    </div>
    </div>
  );
}
export default CustomerDashboard;