const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); 
    if (post.userId === req.body.userId) {  // check if the existing post's userId is the same as the current userId who is trying to update
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated successfully");
    } else {
      res.status(403).json("You are not authorized to update this post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) { // check if the existing post's userId is the same as the current userId who is trying to delete
      await post.deleteOne();
      res.status(200).json("Post has been deleted successfully");
    } else {
      res.status(403).json("You are not authorized to delete this post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//like / dislike a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) { // If user has not yet liked this post already i.e. this post is not in the list of likes
      await post.updateOne({ $push: { likes: req.body.userId } }); // updates the likes array by adding a new entry
      res.status(200).json("The post has been liked");
    } else {  //In case the post is already in the list of likes then this a dislike, therefore removing it from the likes array as done below
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get timeline posts

router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });  // Find all posts for the current user
    const friendPosts = await Promise.all(          //find current user's friends posts
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))    //combine current user's posts and friends posts
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
