

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
function ClaimCard({ claim, onUpdate }) {

  return (
    <>
    {/* <div><strong>Policy:</strong>{claim.policyNumber}</div>
    <div><strong>Description:</strong>{claim.description}</div>
    <div><strong>Date:</strong>{claim.incidentDate}</div>
    <div><strong>Status:</strong>{claim.status}</div> */}
    <div className="card">
    <DataTable value={claim} tableStyle={{ minWidth: '50rem' }} className="p-datatable-gridlines p-datatable-hoverable">
    <Column field="policyNumber" header="Policy"></Column>
    <Column field="description" header="Description"></Column>
    <Column field="incidentDate" header="Date"></Column>
    <Column field="status" header="Status"></Column>
</DataTable>
</div>
    {claim.fileName && <div><strong>File:</strong> {claim.fileName}</div>}
    {onUpdate && claim.status==="Pending" && 
      <>
        <button onClick={()=>onUpdate("Approved")}>Approve</button>
        <button onClick={()=>onUpdate("Rejected")}>Reject</button>
      </>
    }
    </>

  );
}
export default ClaimCard;