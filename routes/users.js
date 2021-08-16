const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
// const Category = require("../models/Category");
// const { extractToken } = require("../middlewares/user");

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        console.log("body", body);
        // console.log("id", id);
        // if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: { ...body } },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        console.dir(err);
        res.status(500).json(err);
    }
    // }
    //  else {
    //     res.status(401).json("You can update only your account!");
    // }
});

//DELETE
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User is deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json("User not found!");
        }
    } else {
        res.status(401).json("You can delete only your account!");
    }
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/", async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
// router.create("/cat", extractToken, async (req, res) => {
//     if (req.user.isAdmin) {
//         const newCat = new Category(req.body);
//         try {
//             const savedCat = await newCat.save();
//             res.status(201).json(savedCat);
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(403).json("You are not allowed!");
//     }
// });

module.exports = router;
