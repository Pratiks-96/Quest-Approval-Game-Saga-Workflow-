const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const LEAVE = "http://leave-service:8080";
const APPROVAL = "http://approval-service:8080";
const NOTIFY = "http://notification-service:8080";

app.post("/workflow/leave", async (_, res) => {
  const leave = await axios.post(`${LEAVE}/leaves`);
  await axios.post(`${APPROVAL}/approvals`, { leaveId: leave.data.id });
  res.json(leave.data);
});

app.post("/workflow/leave/:id/approve", async (req, res) => {
  await axios.post(`${APPROVAL}/approvals/${req.params.id}/approve`);
  await axios.put(`${LEAVE}/leaves/${req.params.id}/status`, { status: "APPROVED" });
  await axios.post(`${NOTIFY}/notify`, { message: `Quest ${req.params.id} approved` });
  res.json({ status: "APPROVED" });
});

app.post("/workflow/leave/:id/reject", async (req, res) => {
  await axios.post(`${APPROVAL}/approvals/${req.params.id}/reject`);
  await axios.put(`${LEAVE}/leaves/${req.params.id}/status`, { status: "REJECTED" });
  res.json({ status: "REJECTED" });
});

app.listen(8080, () => console.log("Workflow Service running"));
