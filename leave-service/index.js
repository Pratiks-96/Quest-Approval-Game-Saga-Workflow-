const express = require("express");
const app = express();
app.use(express.json());

let db = {};
let id = 1;

app.post("/leaves", (_, res) => {
  db[id] = { id, status: "PENDING" };
  res.json(db[id++]);
});

app.put("/leaves/:id/status", (req, res) => {
  db[req.params.id].status = req.body.status;
  res.json(db[req.params.id]);
});

app.get("/leaves/:id", (req, res) => res.json(db[req.params.id]));

app.listen(8080, () => console.log("Leave Service running"));
