import express from 'express';

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("Hello\n");
});

app.get("*", (req, res) => {
    res.send("Wildcard here");
});

app.post('/post-office', (req, res) => {
    console.log(req.body);
    res.send("Post office here");
})

app.listen(3009);