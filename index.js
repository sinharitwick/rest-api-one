const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/hostel", (req, res) => {
  res.status(200).send({
    id: 1,
    gender: "male",
    rating: 5,
  });
});

app.post("/hostel:id", (req, res) => {
  const { id } = req.params;
  const { gender } = req.body;
  const { rating } = req.body;

  res.send({
    id: `${id}`,
    gender: `${gender}`,
    rating: `${rating}`,
  });
});

app.listen(port, () => {
  console.log("App is live");
});