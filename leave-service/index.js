// index.js
const express = require("express");
const app = express();
app.use(express.json());

let db = {};
let id = 1;

// Root route
app.get("/", (req, res) => {
  res.send("Leave Service is running!");
});

// Health check
app.get("/health", (req, res) => res.json({ status: "UP" }));

// Create new leave
app.post("/leaves", (req, res) => {
  const leave = { id, status: "PENDING" };
  db[id] = leave;
  res.status(201).json(leave);
  id++;
});

// Update leave status
app.put("/leaves/:id/status", (req, res) => {
  const leave = db[req.params.id];
  if (!leave) return res.status(404).json({ error: "Leave not found" });

  if (!req.body.status) return res.status(400).json({ error: "Status is required" });

  leave.status = req.body.status;
  res.json(leave);
});

// Get leave by ID
app.get("/leaves/:id", (req, res) => {
  const leave = db[req.params.id];
  if (!leave) return res.status(404).json({ error: "Leave not found" });

  res.json(leave);
});

// List all leaves
app.get("/leaves", (_, res) => res.json(Object.values(db)));

app.listen(8080, () => console.log("Leave Service running on port 8080"));
