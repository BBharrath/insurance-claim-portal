function ClaimCard({ claim, onUpdate }) {

  return (
    <>
    <div><strong>Policy:</strong>{claim.policyNumber}</div>
    <div><strong>Description:</strong>{claim.description}</div>
    <div><strong>Date:</strong>{claim.incidentDate}</div>
    <div><strong>Status:</strong>{claim.status}</div>
    {claim.fileName && <div><strong>File:</strong> {claim.fileName}</div>}
    {onUpdate && claim.status==="Pending" && 
      <>
        <button onClick={()=>onUpdate("Approved")}>Approve</button>
        <button onClick={()=>onUpdate("Rejected")}>Reject</button>
      </>
    }
    <hr />
    </>

  );
}
export default ClaimCard;