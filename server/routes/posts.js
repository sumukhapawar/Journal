const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });

  newPost
    .save()
    .then(() => res.json("Post added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => res.json("Post deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.json("Post updated"))
    .catch((err) => res.json("Error: " + err));
});

module.exports = router;
