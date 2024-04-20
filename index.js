import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


let posts = [];

app.use(express.static("views"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts: posts });
});
app.get("/add", (req, res) => {
    res.render("add.ejs");
});
app.get("/viewpost/:i", (req, res) => {
    //console.log(req.body);
    res.render("viewpost.ejs", { posts: posts[req.params.i], postId: req.params.i });
});

app.post("/addPost", (req, res) => {
    //console.log(req.body);
    posts.push(req.body);
    console.log(posts);
    res.redirect('/');
});

app.post("/delete/:id", (req, res) =>{
    console.log(req.params.id);
    //console.log(posts[req.body.postId]);
    //let idIndex = posts.findIndex(req.params.id);
    //console.log('id index' + idIndex);
    let postId = parseInt(req.params.id);
    posts.splice[req.params.id, 1];
    console.log('updated array: ' + posts.toString());
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
