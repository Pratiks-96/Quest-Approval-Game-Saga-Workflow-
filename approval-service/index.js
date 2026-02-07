const express = require("express");
const app = express();
app.use(express.json());

let approvals = {};

app.post("/approvals", (req, res) => {
  approvals[req.body.leaveId] = { status: "PENDING" };
  res.json(approvals[req.body.leaveId]);
});

app.post("/approvals/:id/approve", (req, res) => {
  approvals[req.params.id].status = "APPROVED";
  res.json(approvals[req.params.id]);
});

app.post("/approvals/:id/reject", (req, res) => {
  approvals[req.params.id].status = "REJECTED";
  res.json(approvals[req.params.id]);
});

app.listen(8080, () => console.log("Approval Service running"));
