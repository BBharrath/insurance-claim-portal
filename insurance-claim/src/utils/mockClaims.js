// simple mock storage of claims

let claims = [
  {
    id: 1,
    user: "customer1",
    policyNumber: "POL1001",
    description: "Car accident rear-end",
    incidentDate: "2025-09-20",
    status: "Pending",
    fileName: null
  }
];

export function getClaimsByUser(user) {
  return Promise.resolve(claims.filter(c => c.user === user));
}

export function getAllClaims() {
  return Promise.resolve(claims);
}

export function submitClaim(newClaim) {
  newClaim.id = claims.length + 1;
  newClaim.status = "Pending";
  claims.push(newClaim);
  return Promise.resolve(newClaim);
}

export function updateClaimStatus(id, status) {
  const c = claims.find(c => c.id === id);
  if (c) {
    c.status = status;
  }
  return Promise.resolve(c);
}
