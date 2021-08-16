const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
// require("dotenv").config();
const { extractToken } = require("../middlewares/user");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            // isAdmin: req.body.isAdmin,

            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
//LOGIN

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username })
        .then((user) => {
            if (user) {
                bcrypt.compare(
                    password,
                    user.password,
                    (err, passwordMatch) => {
                        if (err) throw err;
                        if (passwordMatch === true) {
                            jwt.sign(
                                { user },
                                "SECRET_KEY",

                                (err, token) => {
                                    if (err) throw err;
                                    res.status(200).json({
                                        status: 200,
                                        msg: "logged in successfully",
                                        token: token,
                                        data: user,
                                    });
                                }
                            );
                        } else {
                            res.status(400).json({
                                status: 400,
                                msg: "wrong password",
                            });
                        }
                    }
                );
            } else {
                res.status(404).json({
                    status: 404,
                    msg: "user doesn't exist",
                });
            }
        })
        .catch((err) => console.log(err));
});
// router.post("/addPOST", extractToken, (req, res) => {
//     jwt.verify(req.token, process.env.SECRETKEY, (err, authData) => {
//         if (err) throw err;
//         if (authData) {
//             res.send(authData);
//             const { title, desc, categories, username } = req.body;
//             Post.create({ title, desc, categories, username }, (err, data) => {
//                 if (err) throw err;
//                 res.status(200).json({
//                     status: 200,
//                     msg: "Post added successfully",
//                     data: data,
//                 });
//             });
//         } else {
//             res.status(403).json({
//                 status: 403,
//                 msg: "unauthorized operation",
//             });
//         }
//     });
// });

module.exports = router;
