const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const postsRouter = require("./routers/posts");
const tagsRouter = require("./routers/tags");
const handleError = require("./middlewares/handleError");

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.static("public"));

app.use(express.json());

app.use("/posts", postsRouter);
app.use("/tags", tagsRouter);

app.get("/", (req, res) => {
    res.json("Server del mio Blog");
});

// Error Handler
app.use(handleError);

// Listen
app.listen(port, () => {
    console.log(`Server in esecuzione sulla porta ${port}`);
});