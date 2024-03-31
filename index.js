import express from "express";


const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/add", (req, res) => {
    res.render("add.ejs");
});



app.listen(port, () => {
    console.log(`server running on port ${port}`);
});