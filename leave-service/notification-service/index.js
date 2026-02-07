const express = require("express");
const app = express();
app.use(express.json());

app.post("/notify", (req, res) => {
  console.log("📢 NOTIFICATION:", req.body.message);
  res.json({ sent: true });
});

app.listen(8080, () => console.log("Notification Service running on 8080"));
