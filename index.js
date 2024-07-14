const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const hello = [
  {
    id: 1,
    name: "Ninedev",
  },
  {
    id: 2,
    name: "2024",
  },
];

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index');
});

app.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  res.json(`Ninedev 2024 id: ${hello.findIndex((item) => item.id == id)}`);
});

app.get("/courses/:id", (req, res) => {
  const { name, page } = req.query;
  const { id } = req.params;
  res.json(`name: ${name}, page: ${page}, courseId: ${id}`);
});

app.post("/create", (req, res) => {
  const body = req.body;
  res.json(body);
});

app.put("/update", (req, res) => {
  res.json("Update");
});

app.delete("/delete", (req, res) => {
  res.json("Delete");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
