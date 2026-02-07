const express = require("express");
const app = express();
app.use(express.json());

let approvals = {};

app.post("/approvals", (req, res) => {
  approvals[req.body.leaveId] = { status: "PENDING" };
  console.log("Approval created:", approvals[req.body.leaveId]);
  res.json(approvals[req.body.leaveId]);
});

app.post("/approvals/:id/approve", (req, res) => {
  approvals[req.params.id].status = "APPROVED";
  console.log("Approved:", approvals[req.params.id]);
  res.json(approvals[req.params.id]);
});

app.post("/approvals/:id/reject", (req, res) => {
  approvals[req.params.id].status = "REJECTED";
  console.log("Rejected:", approvals[req.params.id]);
  res.json(approvals[req.params.id]);
});

app.listen(8080, () => console.log("Approval Service running on 8080"));
