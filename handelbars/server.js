const express = require("express");
const {engine} = require("express-handlebars");
const routes = require("./controller/routes");

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(routes);

app.listen(PORT, () => console.log("App listening on http://localhost:" + PORT));
