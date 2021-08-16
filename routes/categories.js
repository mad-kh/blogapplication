const router = require("express").Router();
const Category = require("../models/Category");
const { extractToken } = require("../middlewares/user");

// router.post("/cat", extractToken, async (req, res) => {
//     if (req.user.isAdmin) {
//         const newCat = await new Category(req.body);
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
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const cats = await Category.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const post = await Category.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.delete("/:id", async (req, res) => {
    const cat = await Category.findById(req.params.id);

    try {
        await cat.delete();
        res.status(200).json("category is deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
