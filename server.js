const express = require("express");
const app = express();
//const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
// const adminRoute = require("./routes/admin");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

// dotenv.config();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/admin", require("./admin"));
if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
};
const port = process.env.Port || 5000;
const url = "mongodb://127.0.0.1:27017/Blogs";
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`The DATABASE is connected on port ${port}`);
});
try {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        })
        .then(console.log("Connected to MongoDB"))
        .catch((err) => console.log(err));
} catch (err) {
    console.log(err);
}
